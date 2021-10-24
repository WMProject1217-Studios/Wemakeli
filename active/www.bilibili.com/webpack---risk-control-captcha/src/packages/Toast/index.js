__webpack_require__.r(__webpack_exports__);
/* harmony import */
var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */
var _Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Toast */ "./src/packages/Toast/Toast.vue");;

var defaults = {
    message: '',
    duration: 1000,
    delay: 0
};
var ToastConstructor = vue__WEBPACK_IMPORTED_MODULE_1__.default.extend(_Toast__WEBPACK_IMPORTED_MODULE_0__.default);
var instance;

var initInstance = function initInstance() {
    instance = new ToastConstructor({
        el: document.createElement('div')
    });
};

var showToast = function showToast(options) {
    if (!instance) {
        initInstance();
    }

    if (!instance.visible) {
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                instance[prop] = options[prop];
            }
        }

        document.body.appendChild(instance.$el);
        setTimeout(function() {
            instance.visible = true;
        }, options.delay);
    } else {
        instance.visible = false;
        showToast(options);
    }
};

var Toast = function Toast(message) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var noCover = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var bottom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;
    if (instance && instance.visible) return;
    showToast(Object.assign({}, defaults, {
        message: message,
        delay: delay,
        duration: duration,
        noCover: noCover,
        bottom: bottom
    }));
};

Toast.install = function(Vue) {
    Vue.prototype.$verifytoast = Toast;
};

/* harmony default export */
__webpack_exports__["default"] = (Toast);