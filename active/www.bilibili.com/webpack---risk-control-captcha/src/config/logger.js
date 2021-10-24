__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "addLog": function() {
        return /* binding */ addLog;
    },
    /* harmony export */
    "addClickLog": function() {
        return /* binding */ addClickLog;
    }
    /* harmony export */
});
var _require = __webpack_require__( /*! @bilibili/js-bridge */ "./node_modules/@bilibili/js-bridge/bundle.js"),
    initEnv = _require.initEnv,
    biliBridge = _require.biliBridge,
    isSupport = _require.isSupport,
    inBiliApp = _require.inBiliApp;

if (inBiliApp) {
    initEnv();
}

function getCookie(name) {
    var arr,
        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}
/*
 *日志
 */


var addLog = function addLog() {
    window.spmReportData = {};
    window.reportConfig = {
        sample: 1,
        msgObjects: 'spmReportData',
        nativeOnly: true
    }; // let str = getCookie('ab') || '';

    var str = encodeURIComponent(localStorage.getItem('ABTEST_INFO')) || '';
    var data = {};

    if (getCookie('kfcFrom')) {
        // from参数
        data.from = getCookie('kfcFrom');
    }

    if (getCookie('kfcSource')) {
        data.msource = getCookie('kfcSource');
    }

    if (data.from || data.msource) {
        str += "|".concat(JSON.stringify(data));
    }

    var url = "https://data.bilibili.com/log/web?000040".concat(Date.now()).concat(Date.now(), "|").concat(encodeURIComponent(str));
    new Image().src = url;
};
/*
 *点击日志
 ${action_type}-${page_type}-${module_name}[-${sub_module_name}]
 */

var addClickLog = function addClickLog(options) {
    var str = '';
    var retStr = ''; // if (getCookie('ab')) {
    //     str = `|${getCookie('ab')}`;
    // }

    if (localStorage.getItem('ABTEST_INFO')) {
        str = "|".concat(encodeURIComponent(localStorage.getItem('ABTEST_INFO')));
    }

    if (getCookie('kfcFrom')) {
        // from参数
        if (options.extra) {
            options.extra.from = getCookie('kfcFrom');
            retStr = JSON.stringify(options.extra);
        } else {
            var data = {
                from: getCookie('kfcFrom')
            };
            retStr = JSON.stringify(data);
        }
    } else {
        retStr = JSON.stringify(options.extra);
    }

    var url = "https://data.bilibili.com/log/web?000041".concat(Date.now()).concat(Date.now(), "|").concat(options.logger, "|").concat(encodeURIComponent(retStr), "|").concat(str); // window.spmReportData[options.logger] = options.extra;
    // if (window.reportObserver) {
    //     window.reportObserver.forceCommit();
    // }

    if (inBiliApp) {
        isSupport('ability.reportEventV3').then(function(support) {
            if (support) {
                biliBridge.callNative({
                    method: 'ability.reportEventV3',
                    data: {
                        event: options.logger,
                        params: JSON.stringify(options.extra || {}),
                        //JSON字符串，包含load_type，time(h5页调用jsbridge时间)
                        type: 2,
                        // 0: 其它，1: PV，2: 点击，3: 展现，4: 系统，5: 性能，7: 自定义，9: 播放器
                        label: 'webviewTracker' // 5.39新增, type为5时标识采用前端与客户端打通的性能上报

                    },
                    callback: function callback() {}
                });
            } else {
                console.log('not support');
            }
        });
    }

    new Image().src = url;
};