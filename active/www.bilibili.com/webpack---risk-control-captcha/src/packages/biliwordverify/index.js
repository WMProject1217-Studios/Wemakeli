__webpack_require__.r(__webpack_exports__);
/* harmony import */
var _biliwordverify_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./biliwordverify.vue */ "./src/packages/biliwordverify/biliwordverify.vue");
/* harmony import */
var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* eslint-disable no-shadow */
;
// 数据接口 http://bapi.bilibili.co/project/647/interface/api/182361

var BiliWordVerifyConstructor = vue__WEBPACK_IMPORTED_MODULE_1__.default.extend(_biliwordverify_vue__WEBPACK_IMPORTED_MODULE_0__.default);
var instance;
var currentMsg;

var initInstance = function initInstance() {
    instance = new BiliWordVerifyConstructor({
        el: document.createElement("div")
    }); // eslint-disable-next-line no-use-before-define

    instance.callback = defaultCallback;
};

var defaultCallback = function defaultCallback(action, data) {
    if (action === "confirm") {
        currentMsg.resolve({
            action: action,
            token: data.captureInfo.token
        });
    } else if (action === "cancel" && currentMsg.reject) {
        currentMsg.reject({
            action: action
        });
    } else if (action === "validate fail") {
        currentMsg.reject({
            action: action,
            data: data
        });
    }
};

var showVerify = function showVerify(options) {
    if (!instance) {
        initInstance();
    }

    if (!instance.visible) {
        for (var prop in options) {
            // eslint-disable-next-line no-prototype-builtins
            if (options.hasOwnProperty(prop)) {
                instance[prop] = options[prop];
            }
        }

        document.body.appendChild(instance.$el);
        vue__WEBPACK_IMPORTED_MODULE_1__.default.nextTick(function() {
            instance.visible = true;
            vue__WEBPACK_IMPORTED_MODULE_1__.default.nextTick(function() {
                var wrapper = window.getComputedStyle(instance.$refs.wrapper);

                if (options.initSuccess && typeof options.initSuccess === "function") {
                    // 有初始化成功的回调则调用;
                    options.initSuccess.call(null, {
                        height: parseInt(wrapper.height),
                        width: parseInt(wrapper.width)
                    });
                }
            });
        });
    }
};

var BiliWordVerify = function BiliWordVerify(options) {
    return new Promise(function(resolve, reject) {
        // eslint-disable-line
        currentMsg = {
            options: Object.assign({}, options),
            callback: defaultCallback,
            resolve: resolve,
            reject: reject
        };
        showVerify(currentMsg.options);
    });
};

BiliWordVerify.install = function(Vue) {
    Vue.prototype.$BiliWordVerify = BiliWordVerify;
};

/* harmony default export */
__webpack_exports__["default"] = (BiliWordVerify);