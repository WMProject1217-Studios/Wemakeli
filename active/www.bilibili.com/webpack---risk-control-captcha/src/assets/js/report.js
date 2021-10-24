__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "report": function() {
        return /* binding */ report;
    }
    /* harmony export */
});
/* harmony import */
var _nativeReport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./nativeReport */ "./src/assets/js/nativeReport.js");
/* harmony import */
var _pcReport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./pcReport */ "./src/assets/js/pcReport.js");
/* harmony import */
var _bilibili_js_bridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @bilibili/js-bridge */ "./node_modules/@bilibili/js-bridge/bundle.js");
/* harmony import */
var _bilibili_js_bridge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_bilibili_js_bridge__WEBPACK_IMPORTED_MODULE_2__);;


var evnetMap = {
    pc: {
        show: "rite-verify_show",
        click: "rite-verify_submit_click"
    },
    native: {
        show: "community.public-community.rite-verify.0.show",
        click: "community.public-community.rite-verify.submit.click"
    }
};

function report(eventID) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (_bilibili_js_bridge__WEBPACK_IMPORTED_MODULE_2__.inBiliApp) {
        _nativeReport__WEBPACK_IMPORTED_MODULE_0__.report(evnetMap.native[eventID], type, params);
        return;
    }

    (0, _pcReport__WEBPACK_IMPORTED_MODULE_1__.default)(evnetMap.pc[eventID], params);
}