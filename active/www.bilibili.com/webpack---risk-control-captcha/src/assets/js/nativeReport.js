__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "report": function() {
        return /* binding */ report;
    }
    /* harmony export */
});
var jsBridge = __webpack_require__( /*! @bilibili/js-bridge */ "./node_modules/@bilibili/js-bridge/bundle.js");

var biliBridge = jsBridge.biliBridge;

function report(eventID) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    biliBridge.callNative({
        method: "ability.reportEventV3",
        data: {
            event: eventID || null,
            params: JSON.stringify(params),
            // JSON字符串，包含load_type，time(h5页调用jsbridge时间)
            type: type // 0: 其它，1: PV，2: 点击，3: 展现，4: 系统，5: 性能，7: 自定义，9: 播放器

        },
        callback: function callback() {
            console.log("调用成功");
        }
    });
}