(window.webpackJsonpwebpackLogReporter = window.webpackJsonpwebpackLogReporter || []).push([
    [5], {
        85: function(e, n, r) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = i(r(6)),
                t = i(r(2));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, n) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var s = function() {
                function r(e) {
                    var n = this;
                    ! function(e, n) {
                        if (!(e instanceof n)) try {
                            throw new TypeError("Cannot call a class as a function")
                        } catch (e) {}
                    }(this, r), this.msg = e.performanceMsg || {}, this.showRawPerformance(), window.addEventListener("load", function() {
                        setTimeout(function() {
                            n.showRawPerformance()
                        }, 1e3)
                    })
                }
                var e, n, i;
                return e = r, (n = [{
                    key: "showRawPerformance",
                    value: function() {
                        var e;
                        window.performance && window.performance.timing && 0 < window.performance.timing.domComplete && (e = window.performance.timing, this.todo(e))
                    }
                }, {
                    key: "todo",
                    value: function(e) {
                        var n = t.default.assignObject({}, e);
                        !n.firstscreenfinish && window.reportConfig && window.reportConfig.firstscreenfinish && (n.firstscreenfinish = window.reportConfig.firstscreenfinish), n.abtest = window.abtest ? JSON.stringify(window.abtest) : JSON.stringify({}), n.msg = JSON.stringify(this.msg);
                        var r = {
                            type: "performance",
                            obj: n
                        };
                        o.default.receiveMsg(r)
                    }
                }]) && a(e.prototype, n), i && a(e, i), r
            }();
            n.default = s
        }
    }
]);