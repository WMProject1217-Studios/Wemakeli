(window.webpackJsonpwebpackLogReporter = window.webpackJsonpwebpackLogReporter || []).push([
    [7], {
        86: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var d = i(o(6)),
                s = i(o(2));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var r = function() {
                function t() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    ! function(e, t) {
                        if (!(e instanceof t)) try {
                            throw new TypeError("Cannot call a class as a function")
                        } catch (e) {}
                    }(this, t), this.scrollDivClass = "report-scroll-module", this.scrollSubDivClass = "report-scroll-sub-module", this.ignoreHidden = e.ignoreHidden || !1, this.scrollReportOffset = e.scrollReportOffset || 200, this.scrollMsg = e.scrollMsg || {}, this.scrollLintenerFns = [], this.extMsgs = e && e.extMsgs || {}, this.reportedIds = [], this.checkScroll()
                }
                var e, o, i;
                return e = t, (o = [{
                    key: "getOffset",
                    value: function(e) {
                        var t = {
                            top: 0,
                            left: 0
                        };
                        return "function" == typeof e.getBoundingClientRect && (t = e.getBoundingClientRect()), {
                            top: t.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                            left: t.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                        }
                    }
                }, {
                    key: "judgeHidden",
                    value: function(e) {
                        for (var t = e; t !== document.body;) {
                            if (window.getComputedStyle(t) && "none" === window.getComputedStyle(t).display) return !0;
                            t = t.parentNode
                        }
                        return !1
                    }
                }, {
                    key: "inView",
                    value: function(e, t) {
                        var o = 1 < arguments.length && void 0 !== t && t;
                        if (e) {
                            var i = this.scrollReportOffset,
                                n = e.getBoundingClientRect();
                            if (0 < i && i < 1 && (i = n.height / 2), o) {
                                var r = window.innerHeight;
                                return 0 <= n.top && r - n.top > i || n.top < 0 && n.bottom >= i
                            }
                            var s = document.documentElement || document.body.parentNode || document.body,
                                l = window.pageYOffset ? window.pageYOffset : s.scrollTop,
                                u = this.getOffset(e).top,
                                d = window.innerHeight;
                            window.innerWidth;
                            return !(n.right <= 0 || n.left >= window.innerWidth) && (l <= u && u + i < l + d)
                        }
                    }
                }, {
                    key: "subInView",
                    value: function(e, t) {
                        var o = t.getBoundingClientRect(),
                            i = e.getBoundingClientRect();
                        return 0 <= i.top && i.top - o.top < o.height - this.scrollReportOffset
                    }
                }, {
                    key: "judgeAppear",
                    value: function() {
                        for (var e = document.querySelectorAll("." + this.scrollDivClass), t = 0; t < e.length; t++) {
                            e[t].getAttribute("scrollshow") || this.ignoreHidden && this.judgeHidden(e[t]) || this.inView(e[t]) && (-1 == this.reportedIds.indexOf(e[t].id) && this.reportedIds.push(e[t].id), e[t].setAttribute("scrollshow", !0), this.todo(e[t].id, t))
                        }
                    }
                }, {
                    key: "judgeSubAppear",
                    value: function(e) {
                        if (this.inView(e, !0))
                            for (var t = e.querySelectorAll("." + this.scrollSubDivClass), o = 0, i = t.length; o < i; o++) {
                                t[o].getAttribute("scrollshow") || this.ignoreHidden && this.judgeHidden(t[o]) || this.subInView(t[o], e) && (t[o].setAttribute("scrollshow", !0), -1 == this.reportedIds.indexOf(t[o].id) && this.reportedIds.push(t[o].id), this.todo(t[o].id, o))
                            }
                    }
                }, {
                    key: "judgeCustom",
                    value: function(e, t, o, i) {
                        for (var n = e.querySelectorAll(t), r = 0; r < n.length; r++) {
                            if (!(n[r].getAttribute("scrollshow") || this.ignoreHidden && this.judgeHidden(n[r])) && this.inView(n[r])) {
                                n[r].setAttribute("scrollshow", !0);
                                var s = {};
                                for (var l in i) "function" == typeof i[l] ? s[l] = i[l](n[r]) : s[l] = i[l];
                                this.todoCustom(o, r + 1, s)
                            }
                        }
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var e = this;
                        e.judgeAppear(), window.addEventListener("scroll", s.default.throttleV2(function() {
                            e.judgeAppear()
                        }, 100, 200), !1)
                    }
                }, {
                    key: "addScrollListenNode",
                    value: function(e) {
                        var t, o;
                        e && ((t = this).judgeSubAppear(e), o = s.default.throttleV2(function() {
                            t.judgeSubAppear(e)
                        }, 100, 200), this.scrollLintenerFns.push(o), e.addEventListener("scroll", o, !1))
                    }
                }, {
                    key: "removeScrollListenNode",
                    value: function(t) {
                        this.scrollLintenerFns.forEach(function(e) {
                            t.removeEventListener("scroll", e)
                        })
                    }
                }, {
                    key: "customReport",
                    value: function(e, t, o, i, n) {
                        var r = this;
                        this.judgeCustom(e, t, o, i), (n = n || window).addEventListener("scroll", s.default.throttleV2(function() {
                            r.judgeCustom(e, t, o, i)
                        }, 100, 200), !1)
                    }
                }, {
                    key: "todo",
                    value: function(e, t) {
                        var o = {
                                num: t + 1,
                                name: "report-scroll-module",
                                bsource: window.bsource || ""
                            },
                            i = this.scrollMsg;
                        for (var n in i) "function" == typeof i[n] ? o[n] = i[n]() : o[n] = i[n];
                        for (var r in this.extMsgs) "function" == typeof this.extMsgs[r] ? o[r] = this.extMsgs[r]() : o[r] = this.extMsgs[r];
                        var s, l = d.default.spmPrefix + ".",
                            u = {};
                        u.spm_id = l + e + ".0", u.timestamp = (new Date).getTime(), u.msg = JSON.stringify(o), d.default.receiveGroupMsg({
                            type: "appear",
                            obj: u
                        }), "function" == typeof d.default.reportH5SelfDef && ((s = {}).spm_id = l + "show." + e, s.timestamp = (new Date).getTime(), o.uaSource = window.uaSource, s.args = JSON.stringify(o), s.abtest = window.abtest ? JSON.stringify(window.abtest) : JSON.stringify({}), d.default.receiveGroupMsg({
                            type: "h5_selfDef",
                            obj: s
                        }))
                    }
                }, {
                    key: "todoCustom",
                    value: function(e, t, o) {
                        var i = {};
                        "object" === l(o) && (o.bsource = window.bsource || "");
                        var n, r = d.default.spmPrefix + ".";
                        i.spm_id = "".concat(r).concat(e, ".").concat(t), i.timestamp = (new Date).getTime(), i.msg = JSON.stringify(o), d.default.receiveGroupMsg({
                            type: "appear",
                            obj: i
                        }), "function" == typeof d.default.reportH5SelfDef && ((n = {}).spm_id = "".concat(r, "show.").concat(e), n.timestamp = (new Date).getTime(), o.position = t, o.uaSource = window.uaSource, n.args = JSON.stringify(o), n.abtest = window.abtest ? JSON.stringify(window.abtest) : JSON.stringify({}), d.default.receiveGroupMsg({
                            type: "h5_selfDef",
                            obj: n
                        }))
                    }
                }]) && n(e.prototype, o), i && n(e, i), t
            }();
            t.default = r
        }
    }
]);