/*
BUILT_AT: 2021年6月18日 06:52
*/
(("undefined" != typeof self ? self : this).webpackJsonppush_message = ("undefined" != typeof self ? self : this).webpackJsonppush_message || []).push([
    [1], {
        142: function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(114).charAt;
            i({
                target: "String",
                proto: !0
            }, {
                at: function(t) {
                    return r(this, t)
                }
            })
        },
        20: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            })), n.d(e, "b", (function() {
                return r
            })), n.d(e, "c", (function() {
                return c
            }));
            n(46), n(41), n(4), n(25), n(23), n(49);
            var i = {
                getItem: function(t) {
                    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                },
                setItem: function(t, e, n, i, r, o) {
                    if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t)) return !1;
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
                    return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + a + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (o ? "; secure" : ""), !0
                },
                removeItem: function(t, e, n) {
                    return !(!t || !this.hasItem(t)) && (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (e ? "; path=" + e : ""), !0)
                },
                hasItem: function(t) {
                    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                },
                keys: function() {
                    for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = 0; e < t.length; e++) t[e] = decodeURIComponent(t[e]);
                    return t
                }
            };
            n(42), n(26);
            var r = function() {
                    try {
                        if ("undefined" != typeof navigator && /Firefox\/(\d+)/i.test(navigator.userAgent)) return navigator.userAgent.match(/Firefox\/(\d+)/i)[1] >= 65;
                        var t = document.createElement("canvas");
                        return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp")
                    } catch (t) {
                        return !1
                    }
                }(),
                o = (n(82), "undefined" != typeof window ? window.navigator.userAgent : ""),
                a = {
                    myBrowser: "unknown",
                    behaviors: [function() {
                        return !!o.match(/Maxthon\/[4]/) && "Maxthon 4"
                    }, function() {
                        return !!o.match(/TheWorld/) && "TheWorld"
                    }, function() {
                        return !!o.match(/Firefox\/\d.*/) && "Firefox"
                    }, function() {
                        return !(!o.match(/AppleWebKit\/\d.*.Chrome\/\d.*.Safari\/\d/) || "Google Inc." !== window.navigator.vendor || !window.chrome) && "Chrome"
                    }, function() {
                        return !!o.match(/Opera.\d.*.Presto\/\d/) && "Opera Presto"
                    }, function() {
                        return !!o.match(/OPR\/\d{2}/) && "Opera Modern"
                    }, function() {
                        return !!o.match(/MSIE [6-8].+/) && "IE Legacy"
                    }, function() {
                        return !(!o.match(/MSIE [9].+/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 9"
                    }, function() {
                        return !(!o.match(/MSIE [10].+/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 10"
                    }, function() {
                        return !(!o.match(/Trident\/[7].*.rv:11/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 11"
                    }, function() {
                        return !(!o.match(/Edge\/\d+\.\d+/) || "function" != typeof window.StyleMedia) && "Edge"
                    }, function() {
                        return !(!o.match(/AppleWebKit\/\d.*.Mobile.*Safari\/\d+/) || "Apple Computer, Inc." !== window.navigator.vendor) && "SafariMobile"
                    }, function() {
                        return !(!o.match(/AppleWebKit\/\d.*.Safari\/\d+/) || "Apple Computer, Inc." !== window.navigator.vendor) && "Safari"
                    }]
                };
            var c = function() {
                return "undefined" == typeof window ? "" : (a.behaviors.some((function(t) {
                    var e = t();
                    return a.myBrowser = e || "unknown", e
                })), a.myBrowser)
            };
            n(83), n(27), n(156), n(31)
        },
        6: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return V
            }));
            n(5), n(13);
            var i = n(28),
                r = n(92),
                o = n.n(r).a.create({
                    timeout: "undefined" == typeof window ? 1e3 : 0
                });
            n(14);

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var u = function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "对不起，服务器开小差了~ (ಥ﹏ಥ)",
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "error",
                        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -8888,
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
                    if (c(this, t), "object" === a(r)) {
                        var d = "对不起，服务器开小差了~ (ಥ﹏ಥ)";
                        r.response ? d = "".concat(r.response.statusText, " ").concat(r.response.status) : "ECONNABORTED" === r.code && (d = "接口超时，稍后再试试吧~ (ಥ﹏ಥ)"), this.msg = d
                    } else this.msg = r;
                    this.type = o, this.code = u, this.data = s, this.url = n, this.payload = i, this.cost = e
                },
                s = n(20),
                d = Object(s.c)(),
                f = "IE 9" === d || "IE Legacy" === d,
                l = f || "IE 10" === d || "IE 11" === d;
            n(4), n(26), n(23);
            var p = {};
            var h = {},
                m = function() {
                    var t = Math.random();
                    return h[t] = Date.now(), t
                },
                g = function(t) {
                    if (!t) return 0;
                    if (h[t]) {
                        var e = Date.now() - h[t];
                        return delete h[t], e
                    }
                    return 0
                };
            n(41), n(25);
            var w = function(t, e) {
                    var n = new RegExp("[?&]".concat(e, "=([^&#]+)"));
                    return (t.match(n) || [])[1] || ""
                },
                v = (n(18), n(8)),
                y = n(37),
                b = n.n(y);

            function A(t) {
                if (!t) return t;
                var e = t;
                if (!("undefined" != typeof FormData && e instanceof FormData)) {
                    var n = {};
                    if ("undefined" != typeof window) {
                        var i = w(window.location.href, "lang");
                        if (i) {
                            var r = "iphone";
                            (/Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.userAgent)) && (r = "android"), n.lang = i, n.mobi_app = "".concat(r, "_i")
                        }
                    }
                    t = e = Object.assign(n, e), l && (t._ = (new Date).getTime())
                }
                return t
            }
            n(71);

            function S(t, e) {
                if ("string" == typeof t) {
                    var n = t.replace(/("\w*":)\s*(\d{16}\d*)/g, '$1"$2"').replace(/(\\"\w*\\":)\s*(\d{16}\d*)/g, '$1\\"$2\\"').replace(/("\w*":)\s*(\[\s*(\d{16}\d*)\s*(,\s*(\d{16}\d*)\s*)*])/g, (function(t, e, n) {
                        return "".concat(e).concat(n.trim().replace(/\[\s*/, '["').replace(/\s*]\s*/, '"]').replace(/\s*,\s*/g, '","'))
                    })).replace(/(\\"\w*\\":)\s*(\[\s*(\d{16}\d*)\s*(,\s*(\d{16}\d*)\s*)*])/g, (function(t, e, n) {
                        return "".concat(e).concat(n.trim().replace(/\[\s*/, '[\\"').replace(/\s*]/, '\\"]').replace(/\s*,\s*/g, '\\",\\"'))
                    }));
                    if (e) try {
                        t = JSON.parse(n)
                    } catch (t) {} else t = n
                }
                return t
            }

            function C(t) {
                return S(t, !1)
            }
            var I = function(t) {
                    return S(t, !0)
                },
                _ = (n(42), n(93)),
                O = n.n(_);

            function x(t, e, n, i, r, o) {
                var a = o ? t : t.data;
                return new Promise((function(t, o) {
                    var c, s, d = function() {
                        return 0 === a[c]
                    };
                    e.indexOf(v.a.SPACE) >= 0 ? (c = "status", s = "result", d = function() {
                        return !0 === a[c]
                    }) : e.indexOf(v.a.BANGUMI) >= 0 ? (c = "code", s = "result") : e.indexOf(v.a.PASSPORT) >= 0 ? (c = "code", s = "access_info") : (c = "code", s = "data"), void 0 === a || void 0 === a[c] ? o(new u(r, e, n)) : d() ? t(new u(r, e, n, "请求成功", "success", 0, i ? a : a[s])) : o(new u(r, e, n, a.message || a.msg || "电波无法到达~ ".concat(a.message || a.msg || a.code), "caution", a[c], a[s]))
                }))
            }
            n(158);

            function j(t, e, n) {
                return (j = E() ? Reflect.construct : function(t, e, n) {
                    var i = [null];
                    i.push.apply(i, e);
                    var r = new(Function.bind.apply(t, i));
                    return n && k(r, n.prototype), r
                }).apply(null, arguments)
            }

            function E() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function k(t, e) {
                return (k = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function P(t, e, n) {
                for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++) r[o - 3] = arguments[o];
                return Promise.reject(j(u, [t, e, n].concat(r)))
            }
            n(27), n(54), n(31);

            function R(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            var T = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.store = {};
                        var e = {},
                            n = {};
                        if ("undefined" != typeof window && window.localStorage) try {
                            e = JSON.parse(window.localStorage.getItem("bpapi_cache")) || e
                        } catch (t) {}
                        var i = (new Date).getTime();
                        Object.keys(e).forEach((function(t) {
                            var r = e[t];
                            r && i - r.ts < r.ttl && i - r.ts < 36e4 && (n[t] = r)
                        })), n.uniqueKey = e.uniqueKey, this.store = n, this.setLocalCache()
                    }
                    var e, n, i;
                    return e = t, (n = [{
                        key: "set",
                        value: function(t, e, n, i, r) {
                            var o = this;
                            return (!r || this.store.uniqueKey !== r || "0" === r) && n > 0 && (this.clearCache(), this.store = {}), r && (this.uniqueKey = r, this.store.uniqueKey = r), new Promise((function(a, c) {
                                try {
                                    var u = {};
                                    u.response = e, u.ttl = n > 0 ? n : 0, u.ts = (new Date).getTime(), o.store[t] = u, i && n > 0 && r && "0" !== r && o.setLocalCache(), a({
                                        status: "success"
                                    })
                                } catch (t) {
                                    c({
                                        status: "failed",
                                        data: t
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "get",
                        value: function(t, e, n) {
                            var i = this;
                            return (!n || this.store.uniqueKey !== n || "0" === n) && e > 0 && (this.clearCache(), this.store = {}), n && (this.uniqueKey = n, this.store.uniqueKey = n), new Promise((function(n, r) {
                                try {
                                    var o = i.store[t],
                                        a = (new Date).getTime();
                                    o && a - o.ts < (e > 0 ? e : 0) && a - o.ts < 36e4 ? n({
                                        status: "success",
                                        data: o.response
                                    }) : r({
                                        status: "failed",
                                        data: o
                                    })
                                } catch (t) {
                                    r({
                                        status: "failed",
                                        data: t
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "clearCache",
                        value: function() {
                            "undefined" != typeof window && window.localStorage && window.localStorage.removeItem("bpapi_cache")
                        }
                    }, {
                        key: "setLocalCache",
                        value: function() {
                            this.uniqueKey && (this.store.uniqueKey = this.uniqueKey), "undefined" != typeof window && window.localStorage && this.uniqueKey && window.localStorage.setItem("bpapi_cache", JSON.stringify(this.store))
                        }
                    }]) && R(e.prototype, n), i && R(e, i), t
                }(),
                D = function() {
                    return new T
                }(),
                M = (n(49), "undefined" == typeof window);
            var N = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("undefined" != typeof FormData && t instanceof FormData) {
                        for (var n in e) e.hasOwnProperty(n) && (FormData.prototype.set ? t.set(n, e[n]) : t.append(n, e[n]));
                        return t
                    }
                    return Object.assign(t, e)
                },
                B = function(t) {
                    return new Promise((function(e) {
                        if (t.addPlatInfo)
                            if (i.inBiliApp) {
                                t.data = N(t.data, function() {
                                    if ("undefined" == typeof navigator) return {};
                                    var t = navigator.userAgent;
                                    return {
                                        build: t.match(/BiliApp\/([^ ]*)/) ? t.match(/BiliApp\/([^ ]*)/)[1] : 10,
                                        mobi_app: t.match(/mobi_app\/([^ ]*)/)[1]
                                    }
                                }());
                                try {
                                    i.biliBridge.callNative({
                                        method: "global.getContainerInfo",
                                        callback: function(n) {
                                            t.data = N(t.data, {
                                                build: n.build,
                                                mobi_app: n.mobi_app
                                            }), e(t)
                                        }
                                    })
                                } catch (n) {
                                    e(t)
                                }
                            } else t.data = N(t.data, {
                                build: 0,
                                mobi_app: "web"
                            }), e(t);
                        else e(t)
                    }))
                },
                F = "undefined" != typeof window && window.BiliAjax ? window.BiliAjax.default : O.a,
                K = new F({
                    transformResponse: C,
                    oldAppUseAxios: !0,
                    newAppUseV2: !0,
                    transformHeaders: function() {
                        return {
                            "Content-Type": "application/json"
                        }
                    },
                    qsConfig: {
                        jsonStringify: !0
                    }
                }),
                L = new F({
                    transformResponse: C,
                    oldAppUseAxios: !0
                }),
                q = function(t) {
                    if ("undefined" != typeof FormData && t.data instanceof FormData) return o(A(t));
                    var e = Object.assign({}, t);
                    switch (delete e.data, delete e.url, t.method.toLowerCase()) {
                        case "get":
                            return (t.ajaxVersion2 ? K : L).get(t.url, A(t.data), e);
                        case "post":
                            return (t.ajaxVersion2 ? K : L).post(t.url, A(t.data), e);
                        default:
                            return o(A(t))
                    }
                };

            function U(t) {
                var e = t.useBridgeProxy,
                    n = t.urlWithCSRF,
                    i = m(),
                    r = 0,
                    a = t.url + JSON.stringify(t.data || "");
                return D.get(a, t.ttl, String(t.cache_key || "")).then((function(n) {
                    return r = g(i), x(n.data, t.url, t.data, t.needOriginal, r, e)
                })).catch((function() {
                    return B(t).then((function(t) {
                        var i = e ? q : o,
                            r = function(t) {
                                var e = "";
                                if (M) return e;
                                var n = document.cookie;
                                if (!n) return e;
                                for (var i = n.split(";"), r = new RegExp("^".concat(t, "=")), o = 0; o < i.length; o++) {
                                    var a = i[o].trim();
                                    if (r.test(a)) {
                                        e = a.split("=")[1];
                                        break
                                    }
                                }
                                return e
                            }("bili_jct");
                        return n && (t.url = t.url.indexOf("?") > 0 && r ? "".concat(t.url, "&csrf=").concat(r) : "".concat(t.url, "?csrf=").concat(r)),
                            function(t, e) {
                                var n = this,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                                return function() {
                                    if (p[t] && i > 0) return p[t];
                                    setTimeout((function() {
                                        p[t] = null
                                    }), i);
                                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                                    return p[t] = e.apply(n, o), p[t]
                                }
                            }(a, i, t.throttleInterval)(t)
                    })).then((function(n) {
                        return D.set(a, n, t.ttl, t.localCache, String(t.cache_key || "")).then((function() {
                            return r = g(i), x(n, t.url, t.data, t.needOriginal, r, e)
                        }))
                    }), (function() {
                        r = g(i);
                        for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return P.apply(void 0, [r, t.url, t.data].concat(n))
                    }))
                }))
            }
            var $ = n(94),
                J = n.n($);
            i.inBiliApp && (Object(i.initEnv)(), i.biliBridge.callNative({
                method: "global.import",
                data: {
                    namespace: "net"
                }
            })), o.interceptors.request.use((function(t) {
                if (!t) return t;
                var e = t.method,
                    n = t.url,
                    i = t.data;
                t.withCredentials = !0;
                var r = i || {},
                    o = "string" == typeof e && "post" === e.toLowerCase();
                if (o) {
                    var a = s.a.getItem("bili_jct") || "";
                    r.csrf_token = a, r.csrf = a
                }
                if (!("undefined" != typeof FormData && r instanceof FormData)) {
                    var c = {};
                    if ("undefined" != typeof window) {
                        var u = w(window.location.href, "lang");
                        if (u) {
                            var d = "iphone";
                            (/Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.userAgent)) && (d = "android"), c.lang = u, c.mobi_app = "".concat(d, "_i")
                        }
                    }
                    r = Object.assign(c, r), o ? t.data = Object(y.stringify)(r) : (t.params = r, l && (t.params._ = (new Date).getTime()), delete t.data), "undefined" == typeof window && /^\/\//.test(n) && (t.url = "http:".concat(n))
                }
                return t
            }));
            var V = function(t) {
                "undefined" == typeof window || window.Promise || console.warn("No window.Promise. @bplus-common/components.bpapi need a promise polyfill.");
                var e = (t.method || "get").toLowerCase(),
                    n = f && ! function(t) {
                        if ("undefined" == typeof window) return !1;
                        var e = t.replace(/^(https?:)?(\/\/)?/, "").match(window.location.hostname);
                        return e && 0 === e.index
                    }(t.url),
                    i = "jsonp" === e;
                return !i && n ? P(t.url, t.data, "少年啊，你的浏览器太老了辣", "caution", -8889) : (t.method = e, t.transformResponse = t.transformResponse || [I], i ? function(t) {
                    var e = m(),
                        n = 0,
                        i = t.url,
                        r = /^(http:|https:)?\/\/api\.(live)|(vc)/.test(i),
                        o = t.data && "[object Object]" === t.data.toString();
                    t.jsonpCallback || !o || "type" in t.data || "jsonp" in t.data ? t.jsonpCallback || o || (t.data = {
                        type: "jsonp",
                        jsonp: "jsonp"
                    }) : (t.data.type = "jsonp", t.data.jsonp = "jsonp");
                    var a = t.data || {},
                        c = {},
                        u = "zh_CN";
                    if ("undefined" != typeof window && (u = w(window.location.href, "lang"))) {
                        c.lang = u;
                        var s = "iphone";
                        (/Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.userAgent)) && (s = "android"), "zh_CN" !== u && (c.mobi_app = "".concat(s, "_i"))
                    }
                    a = Object.assign(c, a);
                    var d = t.data && t.jsonpCallback || (r ? "_cb" : "callback"),
                        f = b.a.stringify(a),
                        l = f.length > 0 ? "".concat(i, "?").concat(f) : "".concat(i),
                        p = i + JSON.stringify(t.data || "");
                    return D.get(p, t.ttl, String(t.cache_key || "")).then((function(r) {
                        return n = g(e), x({
                            data: r.data
                        }, i, t.data, t.needOriginal, n)
                    })).catch((function() {
                        return J()(l, {
                            jsonpCallback: d
                        }).then((function(r) {
                            return r.ok ? r.json().then((function(r) {
                                return D.set(p, r, t.ttl, t.localCache, String(t.cache_key || "")).then((function() {
                                    return n = g(e), x({
                                        data: r
                                    }, i, t.data, t.needOriginal, n)
                                }))
                            }), (function() {
                                n = g(e);
                                for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                                return P.apply(void 0, [n, t.url, t.data].concat(r))
                            })) : P(n = g(e), t.url, t.data)
                        }), (function() {
                            n = g(e);
                            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                            return P.apply(void 0, [n, t.url, t.data].concat(r))
                        }))
                    }))
                }(t) : U(t))
            }
        },
        8: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var i = {
                API_LIVE: "//api.live.bilibili.com",
                API_VC: "//api.vc.bilibili.com",
                API_MAIN: "//api.bilibili.com",
                API_VC_CO: "//api.vc.bilibili.co",
                API_MAIN_CO: "//api.bilibili.co",
                MAIN: "//www.bilibili.com",
                SPACE: "//space.bilibili.com",
                PASSPORT: "//passport.bilibili.com",
                BANGUMI: "//bangumi.bilibili.com",
                DATA: "//data.bilibili.com",
                T: "//t.bilibili.com",
                H: "//h.bilibili.com",
                VC: "//vc.bilibili.com",
                APP: "//app.bilibili.com",
                MESSAGE: "//message.bilibili.com",
                LINK: "//link.bilibili.com",
                M: "//m.bilibili.com",
                LIVE: "//live.bilibili.com"
            }
        }
    }
]);