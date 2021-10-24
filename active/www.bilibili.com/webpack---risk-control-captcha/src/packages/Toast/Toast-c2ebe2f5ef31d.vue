__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
var timeout;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: '',
      visible: false,
      duration: 1000,
      noCover: false,
      delay: 0,
      bottom: 50
    };
  },
  updated: function updated() {
    var _this = this;

    if (this.visible) {
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        _this.visible = false;
      }, this.duration + this.delay);
    }
  }
});
