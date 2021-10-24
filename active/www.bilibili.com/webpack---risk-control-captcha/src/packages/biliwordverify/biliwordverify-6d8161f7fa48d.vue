__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toast": function() { return /* binding */ _toast; }
/* harmony export */ });
/* harmony import */ var _utils_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ajax */ "./src/utils/ajax.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/api */ "./src/config/api.js");
/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/logger */ "./src/config/logger.js");
/* harmony import */ var _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/xxtea */ "./src/assets/js/xxtea.js");
/* harmony import */ var _assets_js_fingerpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/fingerpoint */ "./src/assets/js/fingerpoint.js");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Img */ "./src/packages/biliwordverify/Img.vue");
/* harmony import */ var _assets_js_report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/js/report */ "./src/assets/js/report.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import toast from "../Toast/index";




var u = navigator.userAgent;
var isMobile = /AppleWebKit.*Mobile.*/i.test(u);
var isiOS = /iPad|iPhone|iPod/i.test(u);
var isBiliApp = /BiliApp/i.test(u);
var isSmallScreen = window.screen.width <= 320;
var scale = window.screen.width <= 320 ? 0.81 : 0.8;

function _toast(msg, duration) {
  var d = duration || 3000;
  var msgStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, 0)",
    boxSizing: "border-box",
    width: "auto",
    padding: "0.12rem 0.24rem",
    borderRadius: "8px",
    maxWidth: "80%",
    background: "rgba(0, 0, 0, .7)",
    fontSize: "14px",
    color: "#fff",
    lineHeight: 1.5,
    userSelect: "none",
    wordWrap: "break-word",
    opacity: 0,
    zIndex: 9999999999,
    cursor: "default",
    transition: "all .3s ease-in-out",
    textAligin: "justify"
  };
  var node = document.createElement("div");
  Object.keys(msgStyle).forEach(function (key) {
    node.style[key] = msgStyle[key];
  });
  node.innerText = msg;
  document.body.appendChild(node);
  setTimeout(function () {
    node.style.transform = "translate(-50%, -50%)";
    node.style.opacity = "1";
  }, 10);
  setTimeout(function () {
    document.body.removeChild(node); // node.style.display = 'none';
  }, d);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BiliWordVerify",
  components: {
    Img: _Img__WEBPACK_IMPORTED_MODULE_5__.default
  },
  data: function data() {
    return {
      isMobile: isMobile,
      visible: false,
      phoneError: false,
      verifyError: false,
      isWaiting: false,
      // 等待验证码
      isFetching: false,
      isShowPcError: true,
      errMsg: "",
      blockBox: "",
      header: {},
      captureInfo: {},
      captureInfoV2: {},
      pointArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      resultPointArr: [],
      startTime: 0,
      endTime: 0,
      oneStartTime: 0,
      oneEndTime: 0,
      failCount: 0,
      isSmallScreen: isSmallScreen,
      isValidate: false,
      biliwordParams: {},
      imgLoadSuccess: false,
      showContent: false,
      showFailContent: false,
      failText: "前方拥堵，请您再试一次",
      apiStartTime: 0,
      backgroundImageUrl: "",
      frontImageUrl: "",
      imgOnloadTimeout: null,
      frontOnloadSuccess: false,
      backgroundOnloadSuccess: false,
      nightMode: false,
      questionTxt: ""
    };
  },
  mounted: function mounted() {// setTimeout(() => {
    //   if (!this.imgLoadSuccess) {
    //     addClickLog({
    //       logger: "mall.captcha-all.0.0.pv",
    //       extra: {
    //         userAgent: navigator.userAgent || "unknow", // UA
    //         waitTime: "5s", // 等待时间
    //         network: this.header.network, // 网络
    //         blackBox: this.header.blackBox,
    //         timestamp: Date.parse(new Date()), // 系统时间戳
    //       },
    //     });
    //   }
    // }, 5000);
  },
  methods: {
    toast: function toast(msg) {
      _toast(msg, 1000);
    },
    getOption: function getOption() {
      if (isMobile) {
        if (isBiliApp) {
          // app
          if (isiOS) {
            this.header.appType = "3";
          } else {
            this.header.appType = "2";
          }
        } else {
          // h5
          this.header.appType = "5";
        }

        if (isiOS) {
          this.header.deviceType = "IOS";
        } else {
          this.header.deviceType = "ANDROID";
        }
      } else {
        // pc
        this.header.appType = "1";
        this.header.deviceType = "PC";
      }

      this.header.network = this.getNetworkType();
      this.header.blackBox = window.sessionStorage.getItem("blackBox");
      this.header.refer = document.referrer;
      this.header.deviceId = _assets_js_fingerpoint__WEBPACK_IMPORTED_MODULE_4__.default.generateDeviceFingerPointer();
    },
    getNetworkType: function getNetworkType() {
      var networkType = "unknown";

      if (navigator.connection) {
        var networkStr = navigator.connection.effectiveType;

        switch (networkStr) {
          case "wifi":
            networkType = "WIFI";
            break;

          case "4g":
            networkType = "4G";
            break;

          case "3g":
            networkType = "3G";
            break;

          case "3gnet":
            networkType = "3G";
            break;

          case "2g":
            networkType = "2G";
            break;

          default:
            break;
        }
      }

      return networkType;
    },
    getCaptcha: function getCaptcha() {
      // eslint-disable-next-line no-unused-vars
      var self = this;
      this.imgLoadSuccess = false;
      this.resetCapture();
      this.getOption();
      this.oneStartTime = Date.parse(new Date());
      this.showContent = false;
      this.showFailContent = false;
      this.getCaptchaVersion();
    },
    ifOnline: function ifOnline() {
      if ("onLine" in navigator && !navigator.onLine) {
        this.failText = "网络连接断开，请重新连接";
        this.showContent = false;
        this.showFailContent = true;
        return false;
      }

      return true;
    },
    // eslint-disable-next-line consistent-return
    getCaptchaVersion: function getCaptchaVersion() {
      var _this = this;

      if (this.ifOnline()) {
        this.imgOnloadTimeout = setTimeout(function () {
          _this.failText = "前方拥堵，请您再试一次";
          _this.showContent = false;
          _this.showFailContent = true;
        }, 5000);
        this.apiStartTime = Date.parse(new Date());
        this.backgroundImageUrl = "";
        this.frontImageUrl = "";
        this.frontOnloadSuccess = false;
        this.backgroundOnloadSuccess = false;
        return (0,_utils_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax)("POST", _config_api__WEBPACK_IMPORTED_MODULE_1__.getBiliwordCaptcha, {
          // eslint-disable-next-line no-undef
          ct: btoa(JSON.stringify({
            tstId: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.biliwordParams.verifyRelation, "tstId"),
            timestamp: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(Date.parse(new Date()).toString(), "timestamp"),
            deviceId: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.deviceId, "deviceId"),
            appType: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.appType, "appType"),
            deviceType: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.deviceType, "deviceType"),
            network: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.network, "network")
          })),
          apiStartTime: this.apiStartTime
        }, true).then(function (res) {
          console.log(res.body);

          if (res.req._data.apiStartTime === _this.apiStartTime) {
            if (res.body.code === 0) {
              _this.showFailContent = false;
              _this.captureInfo = res.body.data;
              _this.backgroundImageUrl = res.body.data.bg;
              _this.questionTxt = res.body.data.front;
            } else {
              if (!_this.ifOnline()) {
                _this.failText = "网络连接断开，请重新连接";
              } else {
                _this.failText = "前方拥堵，请您再试一次";
              }

              _this.showContent = false;
              _this.showFailContent = true;
            }
          }
        }).catch(function () {
          if (!_this.ifOnline()) {
            _this.failText = "网络连接断开，请重新连接";
          } else {
            _this.failText = "前方拥堵，请您再试一次";
          }

          _this.showContent = false;
          _this.showFailContent = true;
        });
      }
    },
    frontOnload: function frontOnload() {// this.frontOnloadSuccess = true;
      // if (this.backgroundOnloadSuccess) {
      //   window.clearTimeout(this.imgOnloadTimeout);
      //   this.showFailContent = false;
      //   this.showContent = true;
      //   this.imgLoadSuccess = true;
      // }
    },
    backgroundOnload: function backgroundOnload() {
      this.backgroundOnloadSuccess = true;
      window.clearTimeout(this.imgOnloadTimeout);
      this.showFailContent = false;
      this.showContent = true;
      this.imgLoadSuccess = true;
    },
    resetCapture: function resetCapture() {
      if (this.$refs.bg) {
        this.$refs.bg.innerHTML = "";
      }

      this.pointArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.resultPointArr = [];
    },
    validateCapture: function validateCapture() {
      var _this2 = this;

      if (this.resultPointArr.length === 0) {
        this.toast("请选择答案进行验证");
        return;
      }

      if (this.ifOnline()) {
        this.isValidate = true;
        this.oneEndTime = Date.parse(new Date());
        this.endTime = Date.parse(new Date());
        var validateTimeout = setTimeout(function () {
          _this2.failText = "前方拥堵，请您再试一次";
          _this2.showContent = false;
          _this2.showFailContent = true;
        }, 8000); // eslint-disable-next-line consistent-return

        return (0,_utils_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax)("POST", _config_api__WEBPACK_IMPORTED_MODULE_1__.validateBiliwordCaptcha, {
          // eslint-disable-next-line no-undef
          ct: btoa(JSON.stringify({
            deviceId: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.deviceId, "deviceId"),
            token: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.captureInfo.token, "token"),
            captchaId: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.captureInfo.cid, "captchaId"),
            answer: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.resultPointArr.join(","), "answer"),
            scale: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(scale.toString(), "scale"),
            timestamp: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(Date.parse(new Date()).toString(), "timestamp"),
            appType: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.appType, "appType"),
            deviceType: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.deviceType, "deviceType"),
            network: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.header.network, "network"),
            currTime: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt((this.oneEndTime - this.oneStartTime).toString(), "currTime"),
            totalTime: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt((this.endTime - this.startTime).toString(), "totalTime"),
            failCount: _assets_js_xxtea__WEBPACK_IMPORTED_MODULE_3__.encrypt(this.failCount.toString(), "failCount")
          })),
          token: this.captureInfo.token
        }, true).then(function (res) {
          _this2.isValidate = false;
          window.clearTimeout(validateTimeout);

          if (!_this2.showFailContent) {
            if (res.body.code === 0) {
              _this2.toast("验证成功~");

              (0,_assets_js_report__WEBPACK_IMPORTED_MODULE_6__.report)("click", 2, _objectSpread(_objectSpread({}, _this2.biliwordParams.extraInfo), {}, {
                verify_result: 1,
                biz: _this2.biliwordParams.biz
              }));
              setTimeout(function () {
                _this2.close("confirm");
              }, 300);
            } else {
              (0,_assets_js_report__WEBPACK_IMPORTED_MODULE_6__.report)("click", 2, _objectSpread(_objectSpread({}, _this2.biliwordParams.extraInfo), {}, {
                verify_result: 0,
                biz: _this2.biliwordParams.biz
              }));

              _this2.toast(res.body.message || "前方拥堵，请您再试一次");

              _this2.failCount++;

              _this2.resetCapture();

              if (_this2.biliwordParams.autoRefresh) {
                setTimeout(function () {
                  _this2.getCaptcha();
                }, 1000);
              }
            }
          }
        }).catch(function () {
          _this2.isValidate = false;
          _this2.showContent = false;
          _this2.showFailContent = true;
        });
      }
    },
    close: function close(action) {
      this.callback(action, this);
      this.visible = false;
    },
    touchMove: function touchMove(e) {
      e.preventDefault();
    },
    getMove: function getMove(e) {
      if (this.pointArr.length > 0 && (e.target.className === "bili-word-bg" || e.target.className === "bili-word-small-bg")) {
        var index = this.pointArr.shift();
        var childNode = document.createElement("span");
        childNode.innerHTML = index;
        childNode.setAttribute("id", "point-".concat(index));
        childNode.setAttribute("style", "width: 20px;height: 20px;border-radius: 10px;background: #FF5687;color: #FFFFFF;display: inline-block;position: absolute;font-size: 14px;font-family: PingFangSC-Regular;line-height:20px;top:".concat(e.offsetY - 10, "px;left:").concat(e.offsetX - 10, "px;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);"));
        this.$refs.bg.appendChild(childNode);
        this.resultPointArr.push("".concat(e.offsetX, ":").concat(e.offsetY));
      }
    }
  },
  watch: {
    visible: {
      immediate: false,
      handler: function handler(value) {
        if (value) {
          this.nightMode = this.biliwordParams.night === "true";

          if (this.nightMode) {
            document.querySelector("html").classList.add("night-mode");
          }

          (0,_assets_js_report__WEBPACK_IMPORTED_MODULE_6__.report)("show", 3, _objectSpread(_objectSpread({}, this.biliwordParams.extraInfo), {}, {
            biz: this.biliwordParams.biz
          })); // addLog();

          this.resetCapture();
          this.startTime = Date.parse(new Date());
          this.getCaptcha();
        }
      }
    }
  }
});
