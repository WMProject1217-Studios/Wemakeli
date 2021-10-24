(window.videoWidgetsJsonP = window.videoWidgetsJsonP || []).push([
    [2], {
        242: function(t, e, n) {
            var i;

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }! function(s, o, a, h) {
                "use strict";
                var u, c = ["", "webkit", "Moz", "MS", "ms", "o"],
                    l = o.createElement("div"),
                    p = Math.round,
                    f = Math.abs,
                    v = Date.now;

                function d(t, e, n) {
                    return setTimeout(b(t, n), e)
                }

                function m(t, e, n) {
                    return !!Array.isArray(t) && (g(t, n[e], n), !0)
                }

                function g(t, e, n) {
                    var i;
                    if (t)
                        if (t.forEach) t.forEach(e, n);
                        else if (t.length !== h)
                        for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
                    else
                        for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
                }

                function y(t, e, n) {
                    var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
                    return function() {
                        var e = new Error("get-stack-trace"),
                            n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                            r = s.console && (s.console.warn || s.console.log);
                        return r && r.call(s.console, i, n), t.apply(this, arguments)
                    }
                }
                u = "function" != typeof Object.assign ? function(t) {
                    if (t === h || null === t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (i !== h && null !== i)
                            for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
                    }
                    return e
                } : Object.assign;
                var T = y((function(t, e, n) {
                        for (var i = Object.keys(e), r = 0; r < i.length;)(!n || n && t[i[r]] === h) && (t[i[r]] = e[i[r]]), r++;
                        return t
                    }), "extend", "Use `assign`."),
                    E = y((function(t, e) {
                        return T(t, e, !0)
                    }), "merge", "Use `assign`.");

                function I(t, e, n) {
                    var i, r = e.prototype;
                    (i = t.prototype = Object.create(r)).constructor = t, i._super = r, n && u(i, n)
                }

                function b(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function A(t, e) {
                    return "function" == r(t) ? t.apply(e && e[0] || h, e) : t
                }

                function S(t, e) {
                    return t === h ? e : t
                }

                function P(t, e, n) {
                    g(w(e), (function(e) {
                        t.addEventListener(e, n, !1)
                    }))
                }

                function _(t, e, n) {
                    g(w(e), (function(e) {
                        t.removeEventListener(e, n, !1)
                    }))
                }

                function C(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function D(t, e) {
                    return t.indexOf(e) > -1
                }

                function w(t) {
                    return t.trim().split(/\s+/g)
                }

                function x(t, e, n) {
                    if (t.indexOf && !n) return t.indexOf(e);
                    for (var i = 0; i < t.length;) {
                        if (n && t[i][n] == e || !n && t[i] === e) return i;
                        i++
                    }
                    return -1
                }

                function O(t) {
                    return Array.prototype.slice.call(t, 0)
                }

                function R(t, e, n) {
                    for (var i = [], r = [], s = 0; s < t.length;) {
                        var o = e ? t[s][e] : t[s];
                        x(r, o) < 0 && i.push(t[s]), r[s] = o, s++
                    }
                    return n && (i = e ? i.sort((function(t, n) {
                        return t[e] > n[e]
                    })) : i.sort()), i
                }

                function M(t, e) {
                    for (var n, i, r = e[0].toUpperCase() + e.slice(1), s = 0; s < c.length;) {
                        if ((i = (n = c[s]) ? n + r : e) in t) return i;
                        s++
                    }
                    return h
                }
                var z = 1;

                function N(t) {
                    var e = t.ownerDocument || t;
                    return e.defaultView || e.parentWindow || s
                }
                var X = "ontouchstart" in s,
                    Y = M(s, "PointerEvent") !== h,
                    F = X && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    W = "touch",
                    q = "mouse",
                    k = 24,
                    L = ["x", "y"],
                    H = ["clientX", "clientY"];

                function U(t, e) {
                    var n = this;
                    this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                        A(t.options.enable, [t]) && n.handler(e)
                    }, this.init()
                }

                function V(t, e, n) {
                    var i = n.pointers.length,
                        r = n.changedPointers.length,
                        s = 1 & e && i - r == 0,
                        o = 12 & e && i - r == 0;
                    n.isFirst = !!s, n.isFinal = !!o, s && (t.session = {}), n.eventType = e,
                        function(t, e) {
                            var n = t.session,
                                i = e.pointers,
                                r = i.length;
                            n.firstInput || (n.firstInput = j(e));
                            r > 1 && !n.firstMultiple ? n.firstMultiple = j(e) : 1 === r && (n.firstMultiple = !1);
                            var s = n.firstInput,
                                o = n.firstMultiple,
                                a = o ? o.center : s.center,
                                u = e.center = G(i);
                            e.timeStamp = v(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = $(a, u), e.distance = J(a, u),
                                function(t, e) {
                                    var n = e.center,
                                        i = t.offsetDelta || {},
                                        r = t.prevDelta || {},
                                        s = t.prevInput || {};
                                    1 !== e.eventType && 4 !== s.eventType || (r = t.prevDelta = {
                                        x: s.deltaX || 0,
                                        y: s.deltaY || 0
                                    }, i = t.offsetDelta = {
                                        x: n.x,
                                        y: n.y
                                    });
                                    e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
                                }(n, e), e.offsetDirection = B(e.deltaX, e.deltaY);
                            var c = Z(e.deltaTime, e.deltaX, e.deltaY);
                            e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = f(c.x) > f(c.y) ? c.x : c.y, e.scale = o ? (l = o.pointers, p = i, J(p[0], p[1], H) / J(l[0], l[1], H)) : 1, e.rotation = o ? function(t, e) {
                                    return $(e[1], e[0], H) + $(t[1], t[0], H)
                                }(o.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                                function(t, e) {
                                    var n, i, r, s, o = t.lastInterval || e,
                                        a = e.timeStamp - o.timeStamp;
                                    if (8 != e.eventType && (a > 25 || o.velocity === h)) {
                                        var u = e.deltaX - o.deltaX,
                                            c = e.deltaY - o.deltaY,
                                            l = Z(a, u, c);
                                        i = l.x, r = l.y, n = f(l.x) > f(l.y) ? l.x : l.y, s = B(u, c), t.lastInterval = e
                                    } else n = o.velocity, i = o.velocityX, r = o.velocityY, s = o.direction;
                                    e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = s
                                }(n, e);
                            var l, p;
                            var d = t.element;
                            C(e.srcEvent.target, d) && (d = e.srcEvent.target);
                            e.target = d
                        }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
                }

                function j(t) {
                    for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                        clientX: p(t.pointers[n].clientX),
                        clientY: p(t.pointers[n].clientY)
                    }, n++;
                    return {
                        timeStamp: v(),
                        pointers: e,
                        center: G(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }

                function G(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: p(t[0].clientX),
                        y: p(t[0].clientY)
                    };
                    for (var n = 0, i = 0, r = 0; r < e;) n += t[r].clientX, i += t[r].clientY, r++;
                    return {
                        x: p(n / e),
                        y: p(i / e)
                    }
                }

                function Z(t, e, n) {
                    return {
                        x: e / t || 0,
                        y: n / t || 0
                    }
                }

                function B(t, e) {
                    return t === e ? 1 : f(t) >= f(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : 16
                }

                function J(t, e, n) {
                    n || (n = L);
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]];
                    return Math.sqrt(i * i + r * r)
                }

                function $(t, e, n) {
                    n || (n = L);
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]];
                    return 180 * Math.atan2(r, i) / Math.PI
                }
                U.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && P(this.element, this.evEl, this.domHandler), this.evTarget && P(this.target, this.evTarget, this.domHandler), this.evWin && P(N(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && _(this.element, this.evEl, this.domHandler), this.evTarget && _(this.target, this.evTarget, this.domHandler), this.evWin && _(N(this.element), this.evWin, this.domHandler)
                    }
                };
                var K = {
                        mousedown: 1,
                        mousemove: 2,
                        mouseup: 4
                    },
                    Q = "mousedown",
                    tt = "mousemove mouseup";

                function et() {
                    this.evEl = Q, this.evWin = tt, this.pressed = !1, U.apply(this, arguments)
                }
                I(et, U, {
                    handler: function(t) {
                        var e = K[t.type];
                        1 & e && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = 4), this.pressed && (4 & e && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: q,
                            srcEvent: t
                        }))
                    }
                });
                var nt = {
                        pointerdown: 1,
                        pointermove: 2,
                        pointerup: 4,
                        pointercancel: 8,
                        pointerout: 8
                    },
                    it = {
                        2: W,
                        3: "pen",
                        4: q,
                        5: "kinect"
                    },
                    rt = "pointerdown",
                    st = "pointermove pointerup pointercancel";

                function ot() {
                    this.evEl = rt, this.evWin = st, U.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }
                s.MSPointerEvent && !s.PointerEvent && (rt = "MSPointerDown", st = "MSPointerMove MSPointerUp MSPointerCancel"), I(ot, U, {
                    handler: function(t) {
                        var e = this.store,
                            n = !1,
                            i = t.type.toLowerCase().replace("ms", ""),
                            r = nt[i],
                            s = it[t.pointerType] || t.pointerType,
                            o = s == W,
                            a = x(e, t.pointerId, "pointerId");
                        1 & r && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : 12 & r && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: s,
                            srcEvent: t
                        }), n && e.splice(a, 1))
                    }
                });
                var at = {
                        touchstart: 1,
                        touchmove: 2,
                        touchend: 4,
                        touchcancel: 8
                    },
                    ht = "touchstart",
                    ut = "touchstart touchmove touchend touchcancel";

                function ct() {
                    this.evTarget = ht, this.evWin = ut, this.started = !1, U.apply(this, arguments)
                }

                function lt(t, e) {
                    var n = O(t.touches),
                        i = O(t.changedTouches);
                    return 12 & e && (n = R(n.concat(i), "identifier", !0)), [n, i]
                }
                I(ct, U, {
                    handler: function(t) {
                        var e = at[t.type];
                        if (1 === e && (this.started = !0), this.started) {
                            var n = lt.call(this, t, e);
                            12 & e && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: W,
                                srcEvent: t
                            })
                        }
                    }
                });
                var pt = {
                        touchstart: 1,
                        touchmove: 2,
                        touchend: 4,
                        touchcancel: 8
                    },
                    ft = "touchstart touchmove touchend touchcancel";

                function vt() {
                    this.evTarget = ft, this.targetIds = {}, U.apply(this, arguments)
                }

                function dt(t, e) {
                    var n = O(t.touches),
                        i = this.targetIds;
                    if (3 & e && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                    var r, s, o = O(t.changedTouches),
                        a = [],
                        h = this.target;
                    if (s = n.filter((function(t) {
                            return C(t.target, h)
                        })), 1 === e)
                        for (r = 0; r < s.length;) i[s[r].identifier] = !0, r++;
                    for (r = 0; r < o.length;) i[o[r].identifier] && a.push(o[r]), 12 & e && delete i[o[r].identifier], r++;
                    return a.length ? [R(s.concat(a), "identifier", !0), a] : void 0
                }
                I(vt, U, {
                    handler: function(t) {
                        var e = pt[t.type],
                            n = dt.call(this, t, e);
                        n && this.callback(this.manager, e, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: W,
                            srcEvent: t
                        })
                    }
                });

                function mt() {
                    U.apply(this, arguments);
                    var t = b(this.handler, this);
                    this.touch = new vt(this.manager, t), this.mouse = new et(this.manager, t), this.primaryTouch = null, this.lastTouches = []
                }

                function gt(t, e) {
                    1 & t ? (this.primaryTouch = e.changedPointers[0].identifier, yt.call(this, e)) : 12 & t && yt.call(this, e)
                }

                function yt(t) {
                    var e = t.changedPointers[0];
                    if (e.identifier === this.primaryTouch) {
                        var n = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        this.lastTouches.push(n);
                        var i = this.lastTouches;
                        setTimeout((function() {
                            var t = i.indexOf(n);
                            t > -1 && i.splice(t, 1)
                        }), 2500)
                    }
                }

                function Tt(t) {
                    for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var r = this.lastTouches[i],
                            s = Math.abs(e - r.x),
                            o = Math.abs(n - r.y);
                        if (s <= 25 && o <= 25) return !0
                    }
                    return !1
                }
                I(mt, U, {
                    handler: function(t, e, n) {
                        var i = n.pointerType == W,
                            r = n.pointerType == q;
                        if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if (i) gt.call(this, e, n);
                            else if (r && Tt.call(this, n)) return;
                            this.callback(t, e, n)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var Et = M(l.style, "touchAction"),
                    It = Et !== h,
                    bt = "compute",
                    At = "auto",
                    St = "manipulation",
                    Pt = "none",
                    _t = "pan-x",
                    Ct = "pan-y",
                    Dt = function() {
                        if (!It) return !1;
                        var t = {},
                            e = s.CSS && s.CSS.supports;
                        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
                            t[n] = !e || s.CSS.supports("touch-action", n)
                        })), t
                    }();

                function wt(t, e) {
                    this.manager = t, this.set(e)
                }
                wt.prototype = {
                    set: function(t) {
                        t == bt && (t = this.compute()), It && this.manager.element.style && Dt[t] && (this.manager.element.style[Et] = t), this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return g(this.manager.recognizers, (function(e) {
                                A(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                            })),
                            function(t) {
                                if (D(t, Pt)) return Pt;
                                var e = D(t, _t),
                                    n = D(t, Ct);
                                if (e && n) return Pt;
                                if (e || n) return e ? _t : Ct;
                                if (D(t, St)) return St;
                                return At
                            }(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        var e = t.srcEvent,
                            n = t.offsetDirection;
                        if (this.manager.session.prevented) e.preventDefault();
                        else {
                            var i = this.actions,
                                r = D(i, Pt) && !Dt.none,
                                s = D(i, Ct) && !Dt["pan-y"],
                                o = D(i, _t) && !Dt["pan-x"];
                            if (r) {
                                var a = 1 === t.pointers.length,
                                    h = t.distance < 2,
                                    u = t.deltaTime < 250;
                                if (a && h && u) return
                            }
                            if (!o || !s) return r || s && 6 & n || o && n & k ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0, t.preventDefault()
                    }
                };
                var xt = 32;

                function Ot(t) {
                    this.options = u({}, this.defaults, t || {}), this.id = z++, this.manager = null, this.options.enable = S(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
                }

                function Rt(t) {
                    return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
                }

                function Mt(t) {
                    return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : ""
                }

                function zt(t, e) {
                    var n = e.manager;
                    return n ? n.get(t) : t
                }

                function Nt() {
                    Ot.apply(this, arguments)
                }

                function Xt() {
                    Nt.apply(this, arguments), this.pX = null, this.pY = null
                }

                function Yt() {
                    Nt.apply(this, arguments)
                }

                function Ft() {
                    Ot.apply(this, arguments), this._timer = null, this._input = null
                }

                function Wt() {
                    Nt.apply(this, arguments)
                }

                function qt() {
                    Nt.apply(this, arguments)
                }

                function kt() {
                    Ot.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function Lt(t, e) {
                    return (e = e || {}).recognizers = S(e.recognizers, Lt.defaults.preset), new Ht(t, e)
                }
                Ot.prototype = {
                    defaults: {},
                    set: function(t) {
                        return u(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(t) {
                        if (m(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return e[(t = zt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(t) {
                        return m(t, "dropRecognizeWith", this) || (t = zt(t, this), delete this.simultaneous[t.id]), this
                    },
                    requireFailure: function(t) {
                        if (m(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return -1 === x(e, t = zt(t, this)) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function(t) {
                        if (m(t, "dropRequireFailure", this)) return this;
                        t = zt(t, this);
                        var e = x(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        var e = this,
                            n = this.state;

                        function i(n) {
                            e.manager.emit(n, t)
                        }
                        n < 8 && i(e.options.event + Rt(n)), i(e.options.event), t.additionalEvent && i(t.additionalEvent), n >= 8 && i(e.options.event + Rt(n))
                    },
                    tryEmit: function(t) {
                        if (this.canEmit()) return this.emit(t);
                        this.state = xt
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (!(33 & this.requireFail[t].state)) return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = u({}, t);
                        if (!A(this.options.enable, [this, e])) return this.reset(), void(this.state = xt);
                        56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, I(Nt, Ot, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state,
                            n = t.eventType,
                            i = 6 & e,
                            r = this.attrTest(t);
                        return i && (8 & n || !r) ? 16 | e : i || r ? 4 & n ? 8 | e : 2 & e ? 4 | e : 2 : xt
                    }
                }), I(Xt, Nt, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var t = this.options.direction,
                            e = [];
                        return 6 & t && e.push(Ct), t & k && e.push(_t), e
                    },
                    directionTest: function(t) {
                        var e = this.options,
                            n = !0,
                            i = t.distance,
                            r = t.direction,
                            s = t.deltaX,
                            o = t.deltaY;
                        return r & e.direction || (6 & e.direction ? (r = 0 === s ? 1 : s < 0 ? 2 : 4, n = s != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? 1 : o < 0 ? 8 : 16, n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
                    },
                    attrTest: function(t) {
                        return Nt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX, this.pY = t.deltaY;
                        var e = Mt(t.direction);
                        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                    }
                }), I(Yt, Nt, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [Pt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(t) {
                        if (1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            t.additionalEvent = this.options.event + e
                        }
                        this._super.emit.call(this, t)
                    }
                }), I(Ft, Ot, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return [At]
                    },
                    process: function(t) {
                        var e = this.options,
                            n = t.pointers.length === e.pointers,
                            i = t.distance < e.threshold,
                            r = t.deltaTime > e.time;
                        if (this._input = t, !i || !n || 12 & t.eventType && !r) this.reset();
                        else if (1 & t.eventType) this.reset(), this._timer = d((function() {
                            this.state = 8, this.tryEmit()
                        }), e.time, this);
                        else if (4 & t.eventType) return 8;
                        return xt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = v(), this.manager.emit(this.options.event, this._input)))
                    }
                }), I(Wt, Nt, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [Pt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                    }
                }), I(qt, Nt, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return Xt.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, n = this.options.direction;
                        return 30 & n ? e = t.overallVelocity : 6 & n ? e = t.overallVelocityX : n & k && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && 4 & t.eventType
                    },
                    emit: function(t) {
                        var e = Mt(t.offsetDirection);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                    }
                }), I(kt, Ot, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [St]
                    },
                    process: function(t) {
                        var e = this.options,
                            n = t.pointers.length === e.pointers,
                            i = t.distance < e.threshold,
                            r = t.deltaTime < e.time;
                        if (this.reset(), 1 & t.eventType && 0 === this.count) return this.failTimeout();
                        if (i && r && n) {
                            if (4 != t.eventType) return this.failTimeout();
                            var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                o = !this.pCenter || J(this.pCenter, t.center) < e.posThreshold;
                            if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = d((function() {
                                this.state = 8, this.tryEmit()
                            }), e.interval, this), 2) : 8
                        }
                        return xt
                    },
                    failTimeout: function() {
                        return this._timer = d((function() {
                            this.state = xt
                        }), this.options.interval, this), xt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), Lt.VERSION = "2.0.7", Lt.defaults = {
                    domEvents: !1,
                    touchAction: bt,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [Wt, {
                            enable: !1
                        }],
                        [Yt, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [qt, {
                            direction: 6
                        }],
                        [Xt, {
                                direction: 6
                            },
                            ["swipe"]
                        ],
                        [kt],
                        [kt, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [Ft]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                };

                function Ht(t, e) {
                    var n;
                    this.options = u({}, Lt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((n = this).options.inputClass || (Y ? ot : F ? vt : X ? mt : et))(n, V), this.touchAction = new wt(this, this.options.touchAction), Ut(this, !0), g(this.options.recognizers, (function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }), this)
                }

                function Ut(t, e) {
                    var n, i = t.element;
                    i.style && (g(t.options.cssProps, (function(r, s) {
                        n = M(i.style, s), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
                    })), e || (t.oldCssProps = {}))
                }
                Ht.prototype = {
                    set: function(t) {
                        return u(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            var n;
                            this.touchAction.preventDefaults(t);
                            var i = this.recognizers,
                                r = e.curRecognizer;
                            (!r || r && 8 & r.state) && (r = e.curRecognizer = null);
                            for (var s = 0; s < i.length;) n = i[s], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && 14 & n.state && (r = e.curRecognizer = n), s++
                        }
                    },
                    get: function(t) {
                        if (t instanceof Ot) return t;
                        for (var e = this.recognizers, n = 0; n < e.length; n++)
                            if (e[n].options.event == t) return e[n];
                        return null
                    },
                    add: function(t) {
                        if (m(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                    },
                    remove: function(t) {
                        if (m(t, "remove", this)) return this;
                        if (t = this.get(t)) {
                            var e = this.recognizers,
                                n = x(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(t, e) {
                        if (t !== h && e !== h) {
                            var n = this.handlers;
                            return g(w(t), (function(t) {
                                n[t] = n[t] || [], n[t].push(e)
                            })), this
                        }
                    },
                    off: function(t, e) {
                        if (t !== h) {
                            var n = this.handlers;
                            return g(w(t), (function(t) {
                                e ? n[t] && n[t].splice(x(n[t], e), 1) : delete n[t]
                            })), this
                        }
                    },
                    emit: function(t, e) {
                        this.options.domEvents && function(t, e) {
                            var n = o.createEvent("Event");
                            n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
                        }(t, e);
                        var n = this.handlers[t] && this.handlers[t].slice();
                        if (n && n.length) {
                            e.type = t, e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            };
                            for (var i = 0; i < n.length;) n[i](e), i++
                        }
                    },
                    destroy: function() {
                        this.element && Ut(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, u(Lt, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: xt,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: k,
                    DIRECTION_ALL: 30,
                    Manager: Ht,
                    Input: U,
                    TouchAction: wt,
                    TouchInput: vt,
                    MouseInput: et,
                    PointerEventInput: ot,
                    TouchMouseInput: mt,
                    SingleTouchInput: ct,
                    Recognizer: Ot,
                    AttrRecognizer: Nt,
                    Tap: kt,
                    Pan: Xt,
                    Swipe: qt,
                    Pinch: Yt,
                    Rotate: Wt,
                    Press: Ft,
                    on: P,
                    off: _,
                    each: g,
                    merge: E,
                    extend: T,
                    assign: u,
                    inherit: I,
                    bindFn: b,
                    prefixed: M
                }), (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = Lt, (i = function() {
                    return Lt
                }.call(e, n, e, t)) === h || (t.exports = i)
            }(window, document)
        }
    }
]);