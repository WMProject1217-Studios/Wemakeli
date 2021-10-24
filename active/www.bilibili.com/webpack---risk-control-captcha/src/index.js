__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "verify": function() {
        return /* binding */ verify;
    },
    /* harmony export */
    "generateDeviceFingerPointer": function() {
        return /* binding */ generateDeviceFingerPointer;
    },
    /* harmony export */
    "shieldReport": function() {
        return /* binding */ shieldReport;
    },
    /* harmony export */
    "initUid": function() {
        return /* binding */ initUid;
    }
    /* harmony export */
});
/* harmony import */
var _packages_biliwordverify_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./packages/biliwordverify/index */ "./src/packages/biliwordverify/index.js");
/* harmony import */
var _packages_Toast_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./packages/Toast/index */ "./src/packages/Toast/index.js");
/* harmony import */
var _assets_js_fingerpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./assets/js/fingerpoint */ "./src/assets/js/fingerpoint.js");
/* harmony import */
var _assets_js_dataLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./assets/js/dataLogger */ "./src/assets/js/dataLogger.js");

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

// bili文字验证


// 设备指纹

// 用户数据上报

function loadJs(src) {
    var fnc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function() {};
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    var head = document.getElementsByTagName("head").item(0);
    head.appendChild(script); // eslint-disable-next-line no-multi-assign

    script.onload = script.onreadystatechange = function() {
        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
            fnc();
        }
    };
}

loadJs("https://www.recaptcha.net/recaptcha/api.js"); // 暴露初始化方法
// 默认初始化 (暂时禁用，启用需要关注一些页面一打开就开极验的情况，不然初始化会对正常的进行阻塞)
// CaptureVerify({
//     verify_method: 'geetest',
//     verify_type: 1,
//     business: 'shield',
//     voucher: 1,
//     isInit: true
// }).then(() => {}).catch(() => {});

/*
options: {
  verifyMethod:"biliword",
  verifyRelation:0,
  biz:"reply",
  extraInfo:{
    oid: "",
    page:"",
    ordering:""
  }
}
**/
// eslint-disable-next-line consistent-return

function verify(options) {
    if (options.verifyMethod) {
        // 说明是兼容的参数,内部处理下
        options = _objectSpread({
            verify_method: options.verifyMethod,
            verify_type: options.verifyType,
            business: options.business,
            voucher: options.voucher,
            verify_relation: options.verifyRelation,
            biliwordParams: options
        }, options);
    } // if (options.verify_method === "recaptcha") {
    //   return GoogleVerify(options);
    // }
    // if (options.verify_method === "sms") {
    //   return PhoneVerify(options);
    // }
    // if (options.verify_method === "geetest") {
    //   options.isInit = false;
    //   return CaptureVerify(options);
    // }


    if (options.verifyMethod === "biliword") {
        return (0, _packages_biliwordverify_index__WEBPACK_IMPORTED_MODULE_0__.default)(options);
    }

    if (options.msg) {
        (0, _packages_Toast_index__WEBPACK_IMPORTED_MODULE_1__.default)(options.msg);
    }
}

function generateDeviceFingerPointer() {
    return _assets_js_fingerpoint__WEBPACK_IMPORTED_MODULE_2__.default.generateDeviceFingerPointer();
}

function shieldReport(options) {
    return (0, _assets_js_dataLogger__WEBPACK_IMPORTED_MODULE_3__.dataLogger)(options);
}

function initUid() {
    return (0, _assets_js_dataLogger__WEBPACK_IMPORTED_MODULE_3__.uidInit)();
}