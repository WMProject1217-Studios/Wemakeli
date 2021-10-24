__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "dataLogger": function() {
        return /* binding */ dataLogger;
    },
    /* harmony export */
    "uidInit": function() {
        return /* binding */ uidInit;
    }
    /* harmony export */
});
/* harmony import */
var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../config/api */ "./src/config/api.js");
/* harmony import */
var _utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../utils/fetch */ "./src/utils/fetch.js");
/* harmony import */
var _utils_guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../utils/guid */ "./src/utils/guid.js");
/* harmony import */
var _fingerpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./fingerpoint */ "./src/assets/js/fingerpoint.js");
// 用户数据上报
;




function getCookie(name) {
    var reg = new RegExp("(^| )".concat(name, "=([^;]*)(;|$)"));
    var arr = document.cookie.match(reg);

    if (arr) {
        return unescape(arr[2]);
    }

    return null;
}

function dataLogger(options) {
    try {
        (0, _utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetch)('post', _config_api__WEBPACK_IMPORTED_MODULE_0__.shieldReport, {
            customerId: options.customerId,
            uid: getCookie('DedeUserID') || '',
            traceId: (0, _utils_guid__WEBPACK_IMPORTED_MODULE_2__.default)(),
            timestamp: new Date().getTime(),
            deviceId: _fingerpoint__WEBPACK_IMPORTED_MODULE_3__.default.generateDeviceFingerPointer(),
            interfaceName: options.interfaceName,
            reqData: {
                activityId: options.reqData ? options.reqData.activityId || '' : '',
                productJSON: options.reqData ? options.reqData.productJSON || [] : [],
                deviceInfo: {
                    ua: navigator.userAgent
                }
            }
        }, false);
    } catch (error) {
        console.log(error);
    }
}

function uidInit() {
    var uid = getCookie('DedeUserID') || '';
    var hasUidInited = false;

    if (uid) {
        hasUidInited = +window.localStorage.getItem("".concat(uid, "_uidInit")) === 1;

        if (hasUidInited) {
            return;
        }
    } else {
        return;
    }

    try {
        window.localStorage.setItem("".concat(uid, "_uidInit"), 1);
        (0, _utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetch)('post', _config_api__WEBPACK_IMPORTED_MODULE_0__.uidInit, {
            uid: getCookie('DedeUserID') || '',
            deviceId: _fingerpoint__WEBPACK_IMPORTED_MODULE_3__.default.generateDeviceFingerPointer()
        }, false);
    } catch (error) {
        console.log(error);
    }
}