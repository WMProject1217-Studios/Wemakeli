/*
BUILT_AT: 2021年6月22日 05:55
*/
(("undefined" != typeof self ? self : this).webpackJsonp = ("undefined" != typeof self ? self : this).webpackJsonp || []).push([
    [2], {
        101: function(i, t, n) {
            var e = n(34);
            i.exports = !e((function() {
                function i() {}
                return i.prototype.constructor = null, Object.getPrototypeOf(new i) !== i.prototype
            }))
        },
        102: function(i, t, n) {
            var e = n(14),
                s = n(84).entries;
            e({
                target: "Object",
                stat: !0
            }, {
                entries: function(i) {
                    return s(i)
                }
            })
        },
        113: function(i, t, n) {
            "use strict";
            n(114)
        },
        114: function(i, t, n) {},
        146: function(i, t, n) {},
        166: function(i, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            n(8), n(13);
            var e = n(4),
                s = n(2);

            function c() {
                return window._bp_theme = "light", new Promise((function(i) {
                    var t = "light";
                    if ("undefined" != typeof window) {
                        var n = Object(s.f)(window.location, !0).params;
                        n.theme && (t = n.theme, window._bp_theme = t, i({
                            theme: t
                        }))
                    }
                    e.inBiliApp || (window._bp_theme = t, i({
                        theme: t
                    })), Object(e.isSupport)("ability.currentThemeType").then((function(n) {
                        n ? e.biliBridge.callNative({
                            method: "ability.currentThemeType",
                            callback: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = n.type;
                                "2" === String(e) && (t = "dark"), window._bp_theme = t, i({
                                    theme: t
                                })
                            }
                        }) : (window._bp_theme = t, i({
                            theme: t
                        }))
                    }))
                }))
            }
        },
        2: function(i, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return e
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "e", (function() {
                return r
            })), n.d(t, "f", (function() {
                return p
            }));
            n(41), n(22), n(3), n(16), n(9), n(27);
            var e = {
                getItem: function(i) {
                    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                },
                setItem: function(i, t, n, e, s, c) {
                    if (!i || /^(?:expires|max\-age|path|domain|secure)$/i.test(i)) return !1;
                    var a = "";
                    if (n) switch (n.constructor) {
                        case Number:
                            a = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                            break;
                        case String:
                            a = "; expires=" + n;
                            break;
                        case Date:
                            a = "; expires=" + n.toUTCString()
                    }
                    return document.cookie = encodeURIComponent(i) + "=" + encodeURIComponent(t) + a + (s ? "; domain=" + s : "") + (e ? "; path=" + e : "") + (c ? "; secure" : ""), !0
                },
                removeItem: function(i, t, n) {
                    return !(!i || !this.hasItem(i)) && (document.cookie = encodeURIComponent(i) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""), !0)
                },
                hasItem: function(i) {
                    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                },
                keys: function() {
                    for (var i = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = 0; t < i.length; t++) i[t] = decodeURIComponent(i[t]);
                    return i
                }
            };
            n(21), n(15);
            var s = function() {
                    try {
                        if ("undefined" != typeof navigator && /Firefox\/(\d+)/i.test(navigator.userAgent)) return navigator.userAgent.match(/Firefox\/(\d+)/i)[1] >= 65;
                        var i = document.createElement("canvas");
                        return !(!i.getContext || !i.getContext("2d")) && 0 === i.toDataURL("image/webp").indexOf("data:image/webp")
                    } catch (i) {
                        return !1
                    }
                }(),
                c = (n(86), "undefined" != typeof window ? window.navigator.userAgent : ""),
                a = {
                    myBrowser: "unknown",
                    behaviors: [function() {
                        return !!c.match(/Maxthon\/[4]/) && "Maxthon 4"
                    }, function() {
                        return !!c.match(/TheWorld/) && "TheWorld"
                    }, function() {
                        return !!c.match(/Firefox\/\d.*/) && "Firefox"
                    }, function() {
                        return !(!c.match(/AppleWebKit\/\d.*.Chrome\/\d.*.Safari\/\d/) || "Google Inc." !== window.navigator.vendor || !window.chrome) && "Chrome"
                    }, function() {
                        return !!c.match(/Opera.\d.*.Presto\/\d/) && "Opera Presto"
                    }, function() {
                        return !!c.match(/OPR\/\d{2}/) && "Opera Modern"
                    }, function() {
                        return !!c.match(/MSIE [6-8].+/) && "IE Legacy"
                    }, function() {
                        return !(!c.match(/MSIE [9].+/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 9"
                    }, function() {
                        return !(!c.match(/MSIE [10].+/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 10"
                    }, function() {
                        return !(!c.match(/Trident\/[7].*.rv:11/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 11"
                    }, function() {
                        return !(!c.match(/Edge\/\d+\.\d+/) || "function" != typeof window.StyleMedia) && "Edge"
                    }, function() {
                        return !(!c.match(/AppleWebKit\/\d.*.Mobile.*Safari\/\d+/) || "Apple Computer, Inc." !== window.navigator.vendor) && "SafariMobile"
                    }, function() {
                        return !(!c.match(/AppleWebKit\/\d.*.Safari\/\d+/) || "Apple Computer, Inc." !== window.navigator.vendor) && "Safari"
                    }]
                };
            var o = function() {
                    return "undefined" == typeof window ? "" : (a.behaviors.some((function(i) {
                        var t = i();
                        return a.myBrowser = t || "unknown", t
                    })), a.myBrowser)
                },
                l = function(i) {
                    if ("string" != typeof i) return "";
                    var t;
                    try {
                        t = JSON.parse(i)
                    } catch (i) {
                        t = ""
                    }
                    return t
                },
                r = function(i) {
                    return "string" == typeof i ? i.replace(/^https?:/g, "") : ""
                },
                p = (n(44), n(18), n(128), n(20), function(i) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!i) return {};
                    var n = {},
                        e = "";
                    if (t) {
                        var s = i.href || "",
                            c = s.match(/\?[^#/]*/g);
                        c && (e = c[c.length - 1])
                    } else e = i.search;
                    if (~e.indexOf("?")) {
                        var a = e.split("?")[1] || "",
                            o = a.split("&");
                        o.forEach((function(i) {
                            if (i) {
                                var t = i.indexOf("=");
                                if (t > 0) {
                                    var e = i.substring(0, t),
                                        s = i.substring(t + 1);
                                    n[e] = s
                                }
                            }
                        }))
                    }
                    var l = i.pathname.split(/\//g).filter((function(i) {
                        return "" !== i
                    }));
                    return {
                        params: n,
                        path: l
                    }
                })
        },
        24: function(i, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            }));
            n(21);
            var e = navigator.userAgent,
                s = {
                    mobile: /AppleWebKit.*Mobile.*/i.test(e),
                    ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(e),
                    android: /Android/i.test(e) || /Linux/i.test(e),
                    windowsphone: /Windows Phone/i.test(e),
                    iPhone: /iPhone/i.test(e),
                    iPad: /iPad/i.test(e),
                    webApp: !/Safari/i.test(e),
                    MicroMessenger: /MicroMessenger/i.test(e),
                    weibo: /Weibo/i.test(e),
                    uc: /UCBrowser/i.test(e),
                    qq: /MQQBrowser/i.test(e),
                    baidu: /Baidu/i.test(e),
                    mqq: /QQ\/([\d.]+)/i.test(e),
                    mbaidu: /baiduboxapp/i.test(e),
                    iqiyi: /iqiyi/i.test(e),
                    QQLive: /QQLive/i.test(e),
                    Safari: !(!/ OS \d/.test(e) || ~e.indexOf("CriOS") || e.indexOf("Mozilla") || !/Safari\/[\d.]+$/.test(e)),
                    Youku: /youku/i.test(e),
                    chrome: /CriOS/i.test(e),
                    CMDC: /CMDC/i.test(e),
                    BiliApp: /BiliApp/i.test(e),
                    xiaomiqjs: /MiuiQuickSearchBox/.test(e),
                    baiduspider: /Baiduspider/.test(e),
                    dianping: /dianping/.test(e)
                },
                c = function() {
                    try {
                        return /c_locale\/zh(-|_)(hant|tw|mo|hk)/.test(navigator.userAgent.toLowerCase()) ? "zh_TW" : "zh_CN"
                    } catch (i) {
                        return ""
                    }
                };
            t.a = s
        },
        249: function(i, t, n) {},
        37: function(i, t, n) {
            "use strict";
            var e = n(30),
                s = n(79),
                c = n(57),
                a = n(51),
                o = n(73),
                l = a.set,
                r = a.getterFor("Array Iterator");
            i.exports = o(Array, "Array", (function(i, t) {
                l(this, {
                    type: "Array Iterator",
                    target: e(i),
                    index: 0,
                    kind: t
                })
            }), (function() {
                var i = r(this),
                    t = i.target,
                    n = i.kind,
                    e = i.index++;
                return !t || e >= t.length ? (i.target = void 0, {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: e,
                    done: !1
                } : "values" == n ? {
                    value: t[e],
                    done: !1
                } : {
                    value: [e, t[e]],
                    done: !1
                }
            }), "values"), c.Arguments = c.Array, s("keys"), s("values"), s("entries")
        },
        468: function(i, t, n) {
            "use strict";
            var e = n(249);
            n.n(e).a
        },
        469: function(i, t, n) {},
        489: function(i, t, n) {
            "use strict";
            n.r(t);
            n(37);
            var e = n(12),
                s = n.n(e),
                c = n(4),
                a = n(166),
                o = {
                    props: [],
                    data: function() {
                        return {
                            theme: "light"
                        }
                    },
                    computed: {},
                    watch: {},
                    components: {},
                    beforeCreate: function() {},
                    created: function() {
                        var i = this;
                        Object(a.a)().then((function(t) {
                            var n = t.theme;
                            i.theme = n
                        }))
                    },
                    beforeMount: function() {},
                    mounted: function() {},
                    beforeDestroy: function() {},
                    destroyed: function() {},
                    methods: {}
                },
                l = (n(468), n(5)),
                r = Object(l.a)(o, (function() {
                    var i = this,
                        t = i.$createElement,
                        n = i._self._c || t;
                    return n("div", {
                        staticClass: "specification",
                        class: i.theme
                    }, [n("div", {
                        staticClass: "specification-content"
                    }, [n("h1", {
                        staticClass: "title"
                    }, [i._v("\n      " + i._s(i.$bpI18n.specification.line1_1)), n("br"), i._v(i._s(i.$bpI18n.specification.line1_2) + "\n    ")]), n("div", {
                        staticClass: "chapter"
                    }, [n("h2", {
                        staticClass: "chapter-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line2))]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line3))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line4))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line5))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line6))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line7))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v("\n          " + i._s(i.$bpI18n.specification.line8))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line9))]), n("p", {
                        staticClass: "section-content bold"
                    }, [i._v(i._s(i.$bpI18n.specification.line10))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line11))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line12))])])]), n("div", {
                        staticClass: "chapter"
                    }, [n("h2", {
                        staticClass: "chapter-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line13))]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line14))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line15))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line16))]), n("div", {
                        staticClass: "section-content"
                    }, [n("ul", {
                        staticClass: "list"
                    }, [n("li", [i._v(i._s(i.$bpI18n.specification.line17))]), n("li", {
                        staticClass: "bold"
                    }, [i._v(i._s(i.$bpI18n.specification.line18))])])])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line19))]), n("div", {
                        staticClass: "section-content"
                    }, [n("ul", {
                        staticClass: "list"
                    }, [n("li", [i._v("\n              " + i._s(i.$bpI18n.specification.line20) + "\n            ")]), n("li", {
                        staticClass: "bold"
                    }, [i._v("\n              " + i._s(i.$bpI18n.specification.line21) + "\n            ")]), n("li", [i._v(i._s(i.$bpI18n.specification.line22))])])])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line23))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line24))])])]), n("div", {
                        staticClass: "chapter"
                    }, [n("h2", {
                        staticClass: "chapter-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line25))]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line26))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line27))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line28))]), n("p", {
                        staticClass: "section-content bold"
                    }, [i._v(i._s(i.$bpI18n.specification.line29))]), n("ul", {
                        staticClass: "list"
                    }, [n("li", [i._v(i._s(i.$bpI18n.specification.line30))]), n("li", [i._v(i._s(i.$bpI18n.specification.line31))]), n("li", [i._v(i._s(i.$bpI18n.specification.line32))]), n("li", [i._v(i._s(i.$bpI18n.specification.line33))]), n("li", [i._v(i._s(i.$bpI18n.specification.line34))]), n("li", [i._v(i._s(i.$bpI18n.specification.line35))])]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line36))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line37))]), n("p", {
                        staticClass: "section-content bold"
                    }, [i._v(i._s(i.$bpI18n.specification.line38))]), n("ul", {
                        staticClass: "list"
                    }, [n("li", [i._v(i._s(i.$bpI18n.specification.line39))]), n("li", [i._v(i._s(i.$bpI18n.specification.line40))]), n("li", [i._v(i._s(i.$bpI18n.specification.line41))]), n("li", [i._v(i._s(i.$bpI18n.specification.line42))]), n("li", [i._v(i._s(i.$bpI18n.specification.line43))]), n("li", [i._v(i._s(i.$bpI18n.specification.line44))]), n("li", [i._v(i._s(i.$bpI18n.specification.line45))]), n("li", [i._v(i._s(i.$bpI18n.specification.line46))]), n("li", [i._v(i._s(i.$bpI18n.specification.line47))])])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line48))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v("\n          " + i._s(i.$bpI18n.specification.line49))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line50))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v("\n          " + i._s(i.$bpI18n.specification.line51))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line52))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line53))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line54))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v("\n          " + i._s(i.$bpI18n.specification.line55))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line56))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line57))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line58))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line59))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line60))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line61))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line62))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line63))])])]), n("div", {
                        staticClass: "chapter"
                    }, [n("h2", {
                        staticClass: "chapter-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line64))]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line65))]), n("p", {
                        staticClass: "section-content bold"
                    }, [i._v("\n          " + i._s(i.$bpI18n.specification.line66))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line67))]), n("div", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line68) + "\n          "), n("ul", {
                        staticClass: "list"
                    }, [n("li", [i._v(i._s(i.$bpI18n.specification.line69))]), n("li", [i._v(i._s(i.$bpI18n.specification.line70))])]), i._v("\n          " + i._s(i.$bpI18n.specification.line71) + "\n        ")])])]), n("div", {
                        staticClass: "chapter"
                    }, [n("h2", {
                        staticClass: "chapter-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line72))]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line73))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line74))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line75))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line76))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line77))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line78))])])]), n("div", {
                        staticClass: "chapter"
                    }, [n("h2", {
                        staticClass: "chapter-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line79))]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line80))]), n("p", {
                        staticClass: "section-content bold"
                    }, [i._v("\n          " + i._s(i.$bpI18n.specification.line81))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line82))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v("\n          " + i._s(i.$bpI18n.specification.line83))]), n("p", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line84))])]), n("div", {
                        staticClass: "section"
                    }, [n("p", {
                        staticClass: "section-title"
                    }, [i._v(i._s(i.$bpI18n.specification.line85))]), n("div", {
                        staticClass: "section-content"
                    }, [i._v(i._s(i.$bpI18n.specification.line86) + "\n          "), n("ul", {
                        staticClass: "list"
                    }, [n("li", [i._v(i._s(i.$bpI18n.specification.line87))]), n("li", [i._v(i._s(i.$bpI18n.specification.line88))]), n("li", [i._v(i._s(i.$bpI18n.specification.line89))])])])])])])])
                }), [], !1, null, "5e93d681", null).exports,
                p = (n(113), n(146), n(469), n(72)),
                u = n(24);
            s.a.use(p.a, {
                data: {
                    specification: {
                        zh_CN: {
                            line1_1: "哔哩哔哩动态使用规范",
                            line1_2: "（2019年6月）",
                            line2: "第一章 总 则",
                            line3: "第一条",
                            line4: "动态是哔哩哔哩通过关注机制分享用户的实时信息的社交工具，提供发布动态内容、已关注用户动态展示、转发动态、评论动态、收藏、分享、点赞等服务。",
                            line5: "第二条",
                            line6: "用户需要登陆到哔哩哔哩之后才能使用动态服务，动态用户在使用动态的时候，言论和行为需遵守本规范。",
                            line7: "第三条",
                            line8: "哔哩哔哩根据中国现行法律法规、《哔哩哔哩弹幕网用户使用协议》、《哔哩哔哩弹幕网账号中心规范》、《社区规则》以及其他哔哩哔哩相关协议规范，包括哔哩哔哩不时发布的相关条款和规则（前述统称为“哔哩哔哩服务条款”）制定本规范。用户在使用动态时不得违反本规范和上述哔哩哔哩服务条款的全部规定。",
                            line9: "第四条",
                            line10: "用户使用动态服务，则视为同意本规范。根据互联网的发展和有关法律、法规及规范性文件的变化，或者因业务发展需要，哔哩哔哩将不定期对本规范进行调整，调整的内容将于相关页面进行公告，如您继续接受动态服务，则视为您已经接受本规范的调整，若您不同意本规范的前述调整，您可停止使用动态服务。您使用动态服务即视为您接受并同意本规范所有条款，包括但不限于前述调整的内容。",
                            line11: "第五条",
                            line12: "拒绝用户发布、转发、评论讨论时政相关、政治敏感、有害信息；拒绝任何用户发布、转发、通过评论发布垃圾信息；拒绝任何用户从事过度营销的行为；鼓励用户通过动态发布、转发、评论符合需求及规范的真实信息。",
                            line13: "第二章 用户权责",
                            line14: "第六条",
                            line15: "用户拥有哔哩哔哩帐号的使用权，可以使用哔哩哔哩账号登陆动态并使用动态提供的服务。该使用权不得以任何方式转让，帐号的行为将被视为注册用户的行为。哔哩哔哩鼓励用户验证真实身份，通过真实身份验证的用户享有更多服务。",
                            line16: "第七条",
                            line17: "（一）哔哩哔哩用户的隐私依法受到保护。详细信息请阅读《哔哩哔哩弹幕网用户使用协议之隐私政策》",
                            line18: "（二）特别提示：如您通过哔哩哔哩的手机客户端软件发布动态的同时选择发布定位功能的，哔哩哔哩会读取您的位置（大多数移动设备将允许您关闭定位服务，具体建议您联系您的移动设备的服务商或生产商）。",
                            line19: "第八条",
                            line20: "（一）用户在动态上发布的内容，均不会因为上传、发布行为发生知识产权的转移，哔哩哔哩尊重知识产权并注重保护你享有的各项权利。用户发布的动态内容的著作权一律归作品的创作者本人所有。除非收到用户本人的通知，哔哩哔哩将在动态上发布内容的用户视为内容的创作者。",
                            line21: "（二）为了对动态发布者以及发布者所发布（上传）的内容/图片进行更好地宣传，并对所有用户提供优质的动态服务，您同意哔哩哔哩于全球范围内在包括哔哩哔哩网站、官方微博、微信等其他社交、新闻平台使用和传播这些内容/图片，包括但不限于整理、汇编、引用。我们会注明作者（如作品本身的署名或者发布者在哔哩哔哩网站的昵称）。",
                            line22: "（三）哔哩哔哩在任何情况下，都不会在未提前获得您的同意或许可的情况下，对您在动态中发布的内容授权第三方进行商业性使用。",
                            line23: "第九条",
                            line24: "用户在动态的正当权益受到侵害时，可通过举报、申诉或司法途径维护权益。哔哩哔哩将根据法律法规和相关流程，维护用户的正当权益。",
                            line25: "第三章 用户行为规范",
                            line26: "第十条",
                            line27: "用户在动态中使用的哔哩哔哩账号应符合现行法律法规。用户不得使用通过任何方式受让获得的哔哩哔哩帐号在动态发布内容、转发内容、评论或点赞；不得使用通过盗用获得的他人帐号在动态发布内容、转发内容、评论或点赞；不得使用恶意通过机器或软件等非人力手段注册获得的哔哩哔哩账号在动态发布内容、转发内容、评论或点赞。",
                            line28: "第十一条",
                            line29: "动态中会显示用户设置的个性化信息(包括：昵称、头像等)，哔哩哔哩支持用户设置个性化信息，但不得设置含有以下内容的信息：",
                            line30: "（一）有损于国家、社会公共利益的；",
                            line31: "（二）可能对公众造成欺骗或者误解的；",
                            line32: "（三）包含人身攻击性质内容的；",
                            line33: "（四）低俗、色情、淫秽败坏社会风气的；",
                            line34: "（五）政党名称、党政军机关名称、群众组织名称、社会团体名称及部队番号，国家领导人姓名；",
                            line35: "（六）其他法律、行政法规规定禁止的。",
                            line36: "不得使用隐晦表达等方式规避以上限制。",
                            line37: "第十二条",
                            line38: "用户在动态中不得发布、转发或通过评论发布含有下列内容的信息：",
                            line39: "（一）反对宪法确定的基本原则的；",
                            line40: "（二）危害国家统一、主权和领土完整的；",
                            line41: "（三）泄露国家秘密、危害国家安全或者损害国家荣誉和利益的；",
                            line42: "（四）煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的；",
                            line43: "（五）扰乱社会秩序，破坏社会稳定的；",
                            line44: "（六）诱导未成年人违法犯罪和渲染暴力、色情、赌博、恐怖活动的；",
                            line45: "（七）侮辱或者诽谤他人，侵害公民个人隐私等他人合法权益的；",
                            line46: "（八）危害社会公德，损害民族优秀文化传统的；",
                            line47: "（九）有关法律、行政法规和国家规定禁止的其他内容。",
                            line48: "第十三条",
                            line49: "禁止用户在动态发布、转发或通过评论发布对其他用户造成侵害、骚扰的违法信息、垃圾信息。用户不得在动态发布、转发或通过评论发布含有未经哔哩哔哩许可的外链、二维码信息、未经哔哩哔哩许可的商业广告以及不符合法律法规要求的广告等。用户不应发布虚假、不实的信息。",
                            line50: "第十四条",
                            line51: "用户不得从事买卖账号、粉丝相关业务。用户不得利用动态系统漏洞进行干扰动态正常秩序的行为。用户不得在未经哔哩哔哩书面许可情况下，使用插件、外挂或其他第三方工具、服务接入动态和相关系统。",
                            line52: "第十五条",
                            line53: "用户应尊重他人名誉权，不得在动态发布、转发或在评论中以侮辱、诽谤等方式对他人进行人身攻击。",
                            line54: "第十六条",
                            line55: "用户应尊重他人隐私权，不得在动态中违法发布、转发、评论侵害他人隐私的信息，但涉及公众利益、符合法律规定或经由当事人同意的除外。隐私包括但不限于真实姓名、身份证号、电话号码、家庭住址及用户不愿公开的其他个人信息。",
                            line56: "第十七条",
                            line57: "用户应尊重他人的肖像权，未经他人同意不得在动态中擅自使用他人肖像或以恶意方式修改其他动态用户的肖像。",
                            line58: "第十八条",
                            line59: "用户应尊重动态其他用户的生活安宁权，不得利用动态的转发、评论、评论中的@功能对他人反复发送重复、近似、诉求相同的信息。",
                            line60: "第十九条",
                            line61: "用户应尊重他人著作权。未经他人同意，严禁在动态中发布、转发或通过评论发布他人原创的内容；在动态中合法发布他人原创内容时，需注明出处或带有明显转载标识。",
                            line62: "第二十条",
                            line63: "用户在动态的言论和行为，不得侵害他人的合法权益，不得与现行法律法规和本规范相冲突。",
                            line64: "第四章 违规处理",
                            line65: "第二十一条",
                            line66: "哔哩哔哩有权但无义务对用户发布的动态内容进行审核，哔哩哔哩可以通过主动发现及接受用户举报，发现动态中的违规行为和违规内容，并根据相关证据结合《侵权责任法》、《信息网络传播权保护条例》等法律法规及《哔哩哔哩动态内容管理规则》、哔哩哔哩服务条款等社区规则对违规行为和违规内容进行处理。处理无需事先通知。",
                            line67: "第二十二条",
                            line68: "违规处理包括对违规动态内容的处理和对有违规行为的帐号的处理。",
                            line69: "（一）内容处理包括：删除、屏蔽动态、删除单条评论、禁止动态被转发、禁止动态被评论等。",
                            line70: "（二）帐号处理包括：禁止发布动态和评论、禁止修改账号信息等，限制访问直至封禁账号。",
                            line71: "对于触犯国家法律法规或明确会对国家、社会、他人或自身人身安全造成危害的行为和信息，哔哩哔哩保留报警或上报相关政府部门处理的权利。",
                            line72: "第五章 举报、申诉机制",
                            line73: "第二十三条",
                            line74: "用户对于动态中违反哔哩哔哩制定的相关规范以及违法、违规行为或内容可以在动态的举报页面进行举报。",
                            line75: "第二十四条",
                            line76: "用户对于动态中侵犯他人肖像权、名誉权、姓名权、隐私权、商标权、著作权、专利权等合法权益的行为和内容可以在动态的举报页面进行举报。",
                            line77: "第二十五条",
                            line78: "动态用户因违反本规范而被采取相关处理措施的，如对处理结果有异议，可以向哔哩哔哩提交符合法律法规及哔哩哔哩要求的证明材料进行申诉。",
                            line79: "第六章 其他",
                            line80: "第二十六条",
                            line81: "未成年人（未满18周岁）的正当合法权益受到保护。哔哩哔哩建议未成年人在父母或监护人指导下使用动态服务。哔哩哔哩建议未成年人谨慎公开个人信息，健康上网。本规范及《哔哩哔哩动态内容管理规则》对未成年人同等适用。",
                            line82: "第二十七条",
                            line83: "用户在使用哔哩哔哩动态服务的过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。如果用户的行为违反了当地法律法规或道德风俗，用户应当为此独立承担责任。",
                            line84: "用户应避免因使用动态服务而使哔哩哔哩卷入政治和公共事件，否则哔哩哔哩有权暂停或终止对用户的服务。",
                            line85: "第二十八条",
                            line86: "用户明确了解并同意：",
                            line87: "（一）关于动态服务哔哩哔哩不提供任何种类的明示或暗示担保或条件，包括但不限于特定用途适用性等。",
                            line88: "（二）本规范是在保障遵守国家法律法规、维护公共秩序和良好社会风俗，以及保护他人合法权益的基础上，为打造绿色、健康、优质平台的更高目标而制定的，哔哩哔哩在能力范围内尽最大的努力依照有效的法律法规做出判断，但是并不保证其判断完全与司法机构、行政机关的判断一致，为此产生的后果动态用户及运营者已经理解并同意自行承担。",
                            line89: "（三）哔哩哔哩可向用户推送动态广告。如您使用动态服务，则视为您已同意接受该等信息。"
                        },
                        zh_TW: {
                            line1_1: "嗶哩嗶哩動態使用規範",
                            line1_2: "（2019年6月）",
                            line2: "第壹章 總 則",
                            line3: "第壹條",
                            line4: "動態是嗶哩嗶哩通過關註機制分享用戶的實時信息的社交工具，提供發布動態內容、已關註用戶動態展示、轉發動態、評論動態、收藏、分享、點贊等服務。",
                            line5: "第二條",
                            line6: "用戶需要登陸到嗶哩嗶哩之後才能使用動態服務，動態用戶在使用動態的時候，言論和行為需遵守本規範。",
                            line7: "第三條",
                            line8: "嗶哩嗶哩根據中國現行法律法規、《嗶哩嗶哩彈幕網用戶使用協議》、《嗶哩嗶哩彈幕網賬號中心規範》、《社區規則》以及其他嗶哩嗶哩相關協議規範，包括嗶哩嗶哩不時發布的相關條款和規則（前述統稱為“嗶哩嗶哩服務條款”）制定本規範。用戶在使用動態時不得違反本規範和上述嗶哩嗶哩服務條款的全部規定。",
                            line9: "第四條",
                            line10: "用戶使用動態服務，則視為同意本規範。根據互聯網的發展和有關法律、法規及規範性文件的變化，或者因業務發展需要，嗶哩嗶哩將不定期對本規範進行調整，調整的內容將於相關頁面進行公告，如您繼續接受動態服務，則視為您已經接受本規範的調整，若您不同意本規範的前述調整，您可停止使用動態服務。您使用動態服務即視為您接受並同意本規範所有條款，包括但不限於前述調整的內容。",
                            line11: "第五條",
                            line12: "拒絕用戶發布、轉發、評論討論時政相關、政治敏感、有害信息；拒絕任何用戶發布、轉發、通過評論發布垃圾信息；拒絕任何用戶從事過度營銷的行為；鼓勵用戶通過動態發布、轉發、評論符合需求及規範的真實信息。",
                            line13: "第二章 用戶權責",
                            line14: "第六條",
                            line15: "用戶擁有嗶哩嗶哩帳號的使用權，可以使用嗶哩嗶哩賬號登陸動態並使用動態提供的服務。該使用權不得以任何方式轉讓，帳號的行為將被視為註冊用戶的行為。嗶哩嗶哩鼓勵用戶驗證真實身份，通過真實身份驗證的用戶享有更多服務。",
                            line16: "第七條",
                            line17: "（壹）嗶哩嗶哩用戶的隱私依法受到保護。詳細信息請閱讀《嗶哩嗶哩彈幕網用戶使用協議之隱私政策》",
                            line18: "（二）特別提示：如您通過嗶哩嗶哩的手機客戶端軟件發布動態的同時選擇發布定位功能的，嗶哩嗶哩會讀取您的位置（大多數移動設備將允許您關閉定位服務，具體建議您聯系您的移動設備的服務商或生產商）。",
                            line19: "第八條",
                            line20: "（壹）用戶在動態上發布的內容，均不會因為上傳、發布行為發生知識產權的轉移，嗶哩嗶哩尊重知識產權並註重保護妳享有的各項權利。用戶發布的動態內容的著作權壹律歸作品的創作者本人所有。除非收到用戶本人的通知，嗶哩嗶哩將在動態上發布內容的用戶視為內容的創作者。",
                            line21: "（二）為了對動態發布者以及發布者所發布（上傳）的內容/圖片進行更好地宣傳，並對所有用戶提供優質的動態服務，您同意嗶哩嗶哩於全球範圍內在包括嗶哩嗶哩網站、官方微博、微信等其他社交、新聞平臺使用和傳播這些內容/圖片，包括但不限於整理、匯編、引用。我們會註明作者（如作品本身的署名或者發布者在嗶哩嗶哩網站的昵稱）。",
                            line22: "（三）嗶哩嗶哩在任何情況下，都不會在未提前獲得您的同意或許可的情況下，對您在動態中發布的內容授權第三方進行商業性使用。",
                            line23: "第九條",
                            line24: "用戶在動態的正當權益受到侵害時，可通過舉報、申訴或司法途徑維護權益。嗶哩嗶哩將根據法律法規和相關流程，維護用戶的正當權益。",
                            line25: "第三章 用戶行為規範",
                            line26: "第十條",
                            line27: "用戶在動態中使用的嗶哩嗶哩賬號應符合現行法律法規。用戶不得使用通過任何方式受讓獲得的嗶哩嗶哩帳號在動態發布內容、轉發內容、評論或點贊；不得使用通過盜用獲得的他人帳號在動態發布內容、轉發內容、評論或點贊；不得使用惡意通過機器或軟件等非人力手段註冊獲得的嗶哩嗶哩賬號在動態發布內容、轉發內容、評論或點贊。",
                            line28: "第十壹條",
                            line29: "動態中會顯示用戶設置的個性化信息(包括：昵稱、頭像等)，嗶哩嗶哩支持用戶設置個性化信息，但不得設置含有以下內容的信息：",
                            line30: "（壹）有損於國家、社會公共利益的；",
                            line31: "（二）可能對公眾造成欺騙或者誤解的；",
                            line32: "（三）包含人身攻擊性質內容的；",
                            line33: "（四）低俗、色情、淫穢敗壞社會風氣的；",
                            line34: "（五）政黨名稱、黨政軍機關名稱、群眾組織名稱、社會團體名稱及部隊番號，國家領導人姓名；",
                            line35: "（六）其他法律、行政法規規定禁止的。",
                            line36: "不得使用隱晦表達等方式規避以上限制。",
                            line37: "第十二條",
                            line38: "用戶在動態中不得發布、轉發或通過評論發布含有下列內容的信息：",
                            line39: "（壹）反對憲法確定的基本原則的；",
                            line40: "（二）危害國家統壹、主權和領土完整的；",
                            line41: "（三）泄露國家秘密、危害國家安全或者損害國家榮譽和利益的；",
                            line42: "（四）煽動民族仇恨、民族歧視，破壞民族團結，或者侵害民族風俗、習慣的；",
                            line43: "（五）擾亂社會秩序，破壞社會穩定的；",
                            line44: "（六）誘導未成年人違法犯罪和渲染暴力、色情、賭博、恐怖活動的；",
                            line45: "（七）侮辱或者誹謗他人，侵害公民個人隱私等他人合法權益的；",
                            line46: "（八）危害社會公德，損害民族優秀文化傳統的；",
                            line47: "（九）有關法律、行政法規和國家規定禁止的其他內容。",
                            line48: "第十三條",
                            line49: "禁止用戶在動態發布、轉發或通過評論發布對其他用戶造成侵害、騷擾的違法信息、垃圾信息。用戶不得在動態發布、轉發或通過評論發布含有未經嗶哩嗶哩許可的外鏈、二維碼信息、未經嗶哩嗶哩許可的商業廣告以及不符合法律法規要求的廣告等。用戶不應發布虛假、不實的信息。",
                            line50: "第十四條",
                            line51: "用戶不得從事買賣賬號、粉絲相關業務。用戶不得利用動態系統漏洞進行幹擾動態正常秩序的行為。用戶不得在未經嗶哩嗶哩書面許可情況下，使用插件、外掛或其他第三方工具、服務接入動態和相關系統。",
                            line52: "第十五條",
                            line53: "用戶應尊重他人名譽權，不得在動態發布、轉發或在評論中以侮辱、誹謗等方式對他人進行人身攻擊。",
                            line54: "第十六條",
                            line55: "用戶應尊重他人隱私權，不得在動態中違法發布、轉發、評論侵害他人隱私的信息，但涉及公眾利益、符合法律規定或經由當事人同意的除外。隱私包括但不限於真實姓名、身份證號、電話號碼、家庭住址及用戶不願公開的其他個人信息。",
                            line56: "第十七條",
                            line57: "用戶應尊重他人的肖像權，未經他人同意不得在動態中擅自使用他人肖像或以惡意方式修改其他動態用戶的肖像。",
                            line58: "第十八條",
                            line59: "用戶應尊重動態其他用戶的生活安寧權，不得利用動態的轉發、評論、評論中的@功能對他人反復發送重復、近似、訴求相同的信息。",
                            line60: "第十九條",
                            line61: "用戶應尊重他人著作權。未經他人同意，嚴禁在動態中發布、轉發或通過評論發布他人原創的內容；在動態中合法發布他人原創內容時，需註明出處或帶有明顯轉載標識。",
                            line62: "第二十條",
                            line63: "用戶在動態的言論和行為，不得侵害他人的合法權益，不得與現行法律法規和本規範相沖突。",
                            line64: "第四章 違規處理",
                            line65: "第二十壹條",
                            line66: "嗶哩嗶哩有權但無義務對用戶發布的動態內容進行審核，嗶哩嗶哩可以通過主動發現及接受用戶舉報，發現動態中的違規行為和違規內容，並根據相關證據結合《侵權責任法》、《信息網絡傳播權保護條例》等法律法規及《嗶哩嗶哩動態內容管理規則》、嗶哩嗶哩服務條款等社區規則對違規行為和違規內容進行處理。處理無需事先通知。",
                            line67: "第二十二條",
                            line68: "違規處理包括對違規動態內容的處理和對有違規行為的帳號的處理。",
                            line69: "（壹）內容處理包括：刪除、屏蔽動態、刪除單條評論、禁止動態被轉發、禁止動態被評論等。",
                            line70: "（二）帳號處理包括：禁止發布動態和評論、禁止修改賬號信息等，限制訪問直至封禁賬號。",
                            line71: "對於觸犯國家法律法規或明確會對國家、社會、他人或自身人身安全造成危害的行為和信息，嗶哩嗶哩保留報警或上報相關政府部門處理的權利。",
                            line72: "第五章 舉報、申訴機制",
                            line73: "第二十三條",
                            line74: "用戶對於動態中違反嗶哩嗶哩制定的相關規範以及違法、違規行為或內容可以在動態的舉報頁面進行舉報。",
                            line75: "第二十四條",
                            line76: "用戶對於動態中侵犯他人肖像權、名譽權、姓名權、隱私權、商標權、著作權、專利權等合法權益的行為和內容可以在動態的舉報頁面進行舉報。",
                            line77: "第二十五條",
                            line78: "動態用戶因違反本規範而被采取相關處理措施的，如對處理結果有異議，可以向嗶哩嗶哩提交符合法律法規及嗶哩嗶哩要求的證明材料進行申訴。",
                            line79: "第六章 其他",
                            line80: "第二十六條",
                            line81: "未成年人（未滿18周歲）的正當合法權益受到保護。嗶哩嗶哩建議未成年人在父母或監護人指導下使用動態服務。嗶哩嗶哩建議未成年人謹慎公開個人信息，健康上網。本規範及《嗶哩嗶哩動態內容管理規則》對未成年人同等適用。",
                            line82: "第二十七條",
                            line83: "用戶在使用嗶哩嗶哩動態服務的過程中應當遵守當地相關的法律法規，並尊重當地的道德和風俗習慣。如果用戶的行為違反了當地法律法規或道德風俗，用戶應當為此獨立承擔責任。",
                            line84: "用戶應避免因使用動態服務而使嗶哩嗶哩卷入政治和公共事件，否則嗶哩嗶哩有權暫停或終止對用戶的服務。",
                            line85: "第二十八條",
                            line86: "用戶明確了解並同意：",
                            line87: "（壹）關於動態服務嗶哩嗶哩不提供任何種類的明示或暗示擔保或條件，包括但不限於特定用途適用性等。",
                            line88: "（二）本規範是在保障遵守國家法律法規、維護公共秩序和良好社會風俗，以及保護他人合法權益的基礎上，為打造綠色、健康、優質平臺的更高目標而制定的，嗶哩嗶哩在能力範圍內盡最大的努力依照有效的法律法規做出判斷，但是並不保證其判斷完全與司法機構、行政機關的判斷壹致，為此產生的後果動態用戶及運營者已經理解並同意自行承擔。",
                            line89: "（三）嗶哩嗶哩可向用戶推送動態廣告。如您使用動態服務，則視為您已同意接受該等信息。"
                        }
                    }
                },
                currentLang: Object(u.b)()
            }), s.a.config.productionTip = !1, new s.a({
                el: "#bp-app",
                components: {
                    App: r
                },
                template: "<App/>"
            }), Object(c.initEnv)({
                debug: !1
            })
        },
        70: function(i, t, n) {
            "use strict";
            var e, s, c, a = n(71),
                o = n(38),
                l = n(28),
                r = n(19),
                p = n(47),
                u = r("iterator"),
                f = !1;
            [].keys && ("next" in (c = [].keys()) ? (s = a(a(c))) !== Object.prototype && (e = s) : f = !0), null == e && (e = {}), p || l(e, u) || o(e, u, (function() {
                return this
            })), i.exports = {
                IteratorPrototype: e,
                BUGGY_SAFARI_ITERATORS: f
            }
        },
        71: function(i, t, n) {
            var e = n(28),
                s = n(48),
                c = n(91),
                a = n(101),
                o = c("IE_PROTO"),
                l = Object.prototype;
            i.exports = a ? Object.getPrototypeOf : function(i) {
                return i = s(i), e(i, o) ? i[o] : "function" == typeof i.constructor && i instanceof i.constructor ? i.constructor.prototype : i instanceof Object ? l : null
            }
        },
        72: function(i, t, n) {
            "use strict";
            n(18), n(17), n(102), n(22), n(3), n(16), n(15), n(20);
            var e = {
                defaultLang: "zh_CN",
                currentLang: "zh_CN",
                common: {
                    zh_CN: {
                        confirm: "确定",
                        cancel: "取消",
                        error: "电波无法到达~"
                    },
                    zh_TW: {
                        confirm: "確定",
                        cancel: "取消",
                        error: "電波無法到達~"
                    }
                }
            };

            function s(i, t) {
                return function(i) {
                    if (Array.isArray(i)) return i
                }(i) || function(i, t) {
                    var n = null == i ? null : "undefined" != typeof Symbol && i[Symbol.iterator] || i["@@iterator"];
                    if (null == n) return;
                    var e, s, c = [],
                        a = !0,
                        o = !1;
                    try {
                        for (n = n.call(i); !(a = (e = n.next()).done) && (c.push(e.value), !t || c.length !== t); a = !0);
                    } catch (i) {
                        o = !0, s = i
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                    return c
                }(i, t) || function(i, t) {
                    if (!i) return;
                    if ("string" == typeof i) return c(i, t);
                    var n = Object.prototype.toString.call(i).slice(8, -1);
                    "Object" === n && i.constructor && (n = i.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(i);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(i, t)
                }(i, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(i, t) {
                (null == t || t > i.length) && (t = i.length);
                for (var n = 0, e = new Array(t); n < t; n++) e[n] = i[n];
                return e
            }

            function a(i, t) {
                var n = Object.keys(i);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(i);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }))), n.push.apply(n, e)
                }
                return n
            }

            function o(i) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        l(i, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return i
            }

            function l(i, t, n) {
                return t in i ? Object.defineProperty(i, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[t] = n, i
            }

            function r(i, t) {
                for (var n = 0; n < t.length; n++) {
                    var e = t[n];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e)
                }
            }
            var p = function() {
                    function i() {
                        ! function(i, t) {
                            if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), this.currentConfig = {
                            defaultLang: e.defaultLang,
                            currentLang: e.currentLang
                        }, this.currentLang = e.currentLang
                    }
                    var t, n, c;
                    return t = i, (n = [{
                        key: "setLang",
                        value: function(i) {
                            var t = i;
                            t && "zh_CN" !== t && (t = "zh_TW"), this.currentConfig.currentLang = t, this.updateConfig()
                        }
                    }, {
                        key: "importData",
                        value: function(i) {
                            this.currentConfig = o(o({}, this.currentConfig), i), this.updateConfig()
                        }
                    }, {
                        key: "updateConfig",
                        value: function() {
                            var i = this;
                            Object.entries(this.currentConfig).forEach((function(t) {
                                var n = s(t, 2),
                                    e = n[0],
                                    c = n[1];
                                i[e] = "string" == typeof c ? c : c[i.currentConfig.currentLang] || c[i.currentConfig.defaultLang] || {}
                            }))
                        }
                    }, {
                        key: "setDefault",
                        value: function(i) {
                            var t = {};
                            i && (t = i.data || {}, this.currentConfig.currentLang = i.currentLang || this.currentConfig.currentLang, this.currentConfig.defaultLang = i.defaultLang || this.currentConfig.defaultLang), this.currentConfig = o(o({}, this.currentConfig), t), this.updateConfig()
                        }
                    }]) && r(t.prototype, n), c && r(t, c), i
                }(),
                u = {
                    install: function(i, t) {
                        if (!i.prototype.$bpI18n) {
                            var n, s, c, a = e.currentLang;
                            "undefined" != typeof window && (n = window.location.href, s = new RegExp("[?&]".concat("lang", "=([^&#]+)")), a = (c = (n.match(s) || [])[1] || "") && "zh_CN" !== c ? "zh_TW" : c);
                            var o = new p;
                            o.importData(e), o.setDefault(Object.assign({}, {
                                currentLang: a
                            }, t)), i.prototype.$bpI18n = o, i.mixin({
                                data: function() {
                                    return {
                                        $bpI18n: o
                                    }
                                }
                            })
                        }
                    }
                };
            t.a = u
        },
        73: function(i, t, n) {
            "use strict";
            var e = n(14),
                s = n(96),
                c = n(71),
                a = n(131),
                o = n(53),
                l = n(38),
                r = n(56),
                p = n(19),
                u = n(47),
                f = n(57),
                v = n(70),
                _ = v.IteratorPrototype,
                d = v.BUGGY_SAFARI_ITERATORS,
                b = p("iterator"),
                h = function() {
                    return this
                };
            i.exports = function(i, t, n, p, v, C, g) {
                s(n, t, p);
                var I, m, $, y = function(i) {
                        if (i === v && A) return A;
                        if (!d && i in x) return x[i];
                        switch (i) {
                            case "keys":
                            case "values":
                            case "entries":
                                return function() {
                                    return new n(this, i)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    },
                    w = t + " Iterator",
                    O = !1,
                    x = i.prototype,
                    S = x[b] || x["@@iterator"] || v && x[v],
                    A = !d && S || y(v),
                    k = "Array" == t && x.entries || S;
                if (k && (I = c(k.call(new i)), _ !== Object.prototype && I.next && (u || c(I) === _ || (a ? a(I, _) : "function" != typeof I[b] && l(I, b, h)), o(I, w, !0, !0), u && (f[w] = h))), "values" == v && S && "values" !== S.name && (O = !0, A = function() {
                        return S.call(this)
                    }), u && !g || x[b] === A || l(x, b, A), f[t] = A, v)
                    if (m = {
                            values: y("values"),
                            keys: C ? A : y("keys"),
                            entries: y("entries")
                        }, g)
                        for ($ in m)(d || O || !($ in x)) && r(x, $, m[$]);
                    else e({
                        target: t,
                        proto: !0,
                        forced: d || O
                    }, m);
                return m
            }
        },
        79: function(i, t, n) {
            var e = n(19),
                s = n(58),
                c = n(32),
                a = e("unscopables"),
                o = Array.prototype;
            null == o[a] && c.f(o, a, {
                configurable: !0,
                value: s(null)
            }), i.exports = function(i) {
                o[a][i] = !0
            }
        },
        84: function(i, t, n) {
            var e = n(33),
                s = n(85),
                c = n(30),
                a = n(92).f,
                o = function(i) {
                    return function(t) {
                        for (var n, o = c(t), l = s(o), r = l.length, p = 0, u = []; r > p;) n = l[p++], e && !a.call(o, n) || u.push(i ? [n, o[n]] : o[n]);
                        return u
                    }
                };
            i.exports = {
                entries: o(!0),
                values: o(!1)
            }
        },
        96: function(i, t, n) {
            "use strict";
            var e = n(70).IteratorPrototype,
                s = n(58),
                c = n(82),
                a = n(53),
                o = n(57),
                l = function() {
                    return this
                };
            i.exports = function(i, t, n) {
                var r = t + " Iterator";
                return i.prototype = s(e, {
                    next: c(1, n)
                }), a(i, r, !1, !0), o[r] = l, i
            }
        }
    }
]);