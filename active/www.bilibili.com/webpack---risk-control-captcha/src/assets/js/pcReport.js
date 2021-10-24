__webpack_require__.r(__webpack_exports__);

function getMetaTag(name) {
    var meta = document.head.querySelector("[name=".concat(name, "]"));

    if (meta) {
        return meta.content;
    }

    return "";
}

function logger(key) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var reportScript;
    var k = key.replace(/\./g, "-");
    var spmPrefix = getMetaTag("spm_prefix");
    var isBiliHttps = location.href.indexOf("bilihttps") === 0; // detect whether exist spm_prefix of `meta` tag

    if (!spmPrefix) {
        var meta = document.createElement("meta");
        meta.name = "spm_prefix"; // default spm id is `888.1`

        meta.content = "100.7";
        document.getElementsByTagName("head")[0].appendChild(meta);
    } // detect whether load log-report script


    if (!window.reportObserver) {
        window.reportMsgObj = {};
        window.reportConfig = {
            sample: 1,
            scrollTracker: false,
            msgObjects: "reportMsgObj",
            errorTracker: true
        };
        reportScript = document.createElement("script");
        reportScript.src = "".concat(isBiliHttps ? "bilihttps:" : "", "//s1.hdslb.com/bfs/seed/log/report/log-reporter.js");
        document.getElementsByTagName("body")[0].appendChild(reportScript);
    }

    var doReport = function doReport() {
        try {
            window.reportMsgObj && window.reportObserver && (window.reportMsgObj[k] = value, window.reportObserver.forceCommit && window.reportObserver.forceCommit());
        } catch (error) {
            console.error("[logger]", error);
        }
    };

    if (reportScript) {
        reportScript.onload = doReport;
    } else {
        doReport();
    }
}

/* harmony default export */
__webpack_exports__["default"] = (logger);