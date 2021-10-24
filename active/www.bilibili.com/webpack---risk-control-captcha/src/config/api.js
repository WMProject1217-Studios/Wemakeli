__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "baseUrl": function() {
        return /* binding */ baseUrl;
    },
    /* harmony export */
    "getCaptcha": function() {
        return /* binding */ getCaptcha;
    },
    /* harmony export */
    "checkCaptcha": function() {
        return /* binding */ checkCaptcha;
    },
    /* harmony export */
    "questionInfo": function() {
        return /* binding */ questionInfo;
    },
    /* harmony export */
    "geocoder": function() {
        return /* binding */ geocoder;
    },
    /* harmony export */
    "prepare": function() {
        return /* binding */ prepare;
    },
    /* harmony export */
    "phoneSend": function() {
        return /* binding */ phoneSend;
    },
    /* harmony export */
    "phoneCheck": function() {
        return /* binding */ phoneCheck;
    },
    /* harmony export */
    "googlePrepare": function() {
        return /* binding */ googlePrepare;
    },
    /* harmony export */
    "googleCheck": function() {
        return /* binding */ googleCheck;
    },
    /* harmony export */
    "getBiliwordCaptcha": function() {
        return /* binding */ getBiliwordCaptcha;
    },
    /* harmony export */
    "getBiliwordCaptchaV2": function() {
        return /* binding */ getBiliwordCaptchaV2;
    },
    /* harmony export */
    "validateBiliwordCaptcha": function() {
        return /* binding */ validateBiliwordCaptcha;
    },
    /* harmony export */
    "shieldReport": function() {
        return /* binding */ shieldReport;
    },
    /* harmony export */
    "uidInit": function() {
        return /* binding */ uidInit;
    }
    /* harmony export */
});
// eslint-disable-next-line import/no-mutable-exports
var baseUrl;
var payBaseUrl;
window.__DEV__ = true;
window.__PRO__ = false;
window.__UAT__ = false;
/* global __DEV__  __UAT__ */

if (true) {
    baseUrl = "//api.bilibili.com/x/v2/reply";
    payBaseUrl = "//pay.bilibili.com";
} else {}

var getCaptcha = "".concat(baseUrl, "/geetest/prepare");
var checkCaptcha = "".concat(baseUrl, "/geetest/check");
var questionInfo = "".concat(baseUrl, "/ticket/question/info");
var geocoder = "".concat(baseUrl, "/ticket/district/geocoder");
var prepare = "".concat(baseUrl, "/sms/prepare");
var phoneSend = "".concat(baseUrl, "/sms/send");
var phoneCheck = "".concat(baseUrl, "/sms/check");
var googlePrepare = "".concat(baseUrl, "/recaptcha/prepare");
var googleCheck = "".concat(baseUrl, "/recaptcha/check");
var getBiliwordCaptcha = "".concat(baseUrl, "/captcha/get");
var getBiliwordCaptchaV2 = "".concat(baseUrl, "/open/captcha/get/v2");
var validateBiliwordCaptcha = "".concat(baseUrl, "/captcha/validate");
var shieldReport = "".concat(payBaseUrl, "/payplatform/shield/report");
var uidInit = "".concat(payBaseUrl, "/shield/nps/uid/init");