! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(S, e) {
    "use strict";

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        x = S.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        m = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        s = v.toString,
        c = s.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        u = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function w(e, t, n) {
        var i, r = (t = t || x).createElement("script");
        if (r.text = e, n)
            for (i in u) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function T(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var _ = function(e, t) {
            return new _.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function f(e) {
        var t = !!e && "length" in e && e.length,
            n = T(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: "3.3.1",
        constructor: _,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(n) {
            return this.pushStack(_.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || b(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (o = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && _.isPlainObject(n) ? n : {}, s[t] = _.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, _.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || s.call(n) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            w(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (f(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (f(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) != s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                s = [];
            if (f(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return m.apply([], s)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = t[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function r() {
            k()
        }
        var e, p, w, o, s, h, f, g, T, l, c, k, S, a, x, m, u, v, y, _ = "sizzle" + +new Date,
            b = n.document,
            C = 0,
            i = 0,
            E = se(),
            A = se(),
            I = se(),
            O = function(e, t) {
                return e === t && (c = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            N = t.pop,
            j = t.push,
            $ = t.push,
            L = t.slice,
            P = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
            W = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            z = new RegExp(M + "+", "g"),
            q = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            B = new RegExp("^" + M + "*," + M + "*"),
            U = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            Q = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(W),
            K = new RegExp("^" + H + "$"),
            Y = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            $.apply(t = L.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (n) {
            $ = {
                apply: t.length ? function(e, t) {
                    j.apply(e, L.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, i) {
            var r, o, s, a, l, c, u, d = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : b) !== S && k(t), t = t || S, x)) {
                if (11 !== f && (l = Z.exec(e)))
                    if (r = l[1]) {
                        if (9 === f) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (d && (s = d.getElementById(r)) && y(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(r)), n
                    } if (p.qsa && !I[e + " "] && (!m || !m.test(e))) {
                    if (1 !== f) d = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ne, ie) : t.setAttribute("id", a = _), o = (c = h(e)).length; o--;) c[o] = "#" + a + " " + ve(c[o]);
                        u = c.join(","), d = ee.test(e) && ge(t.parentNode) || t
                    }
                    if (u) try {
                        return $.apply(n, d.querySelectorAll(u)), n
                    } catch (e) {} finally {
                        a === _ && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(q, "$1"), t, n, i)
        }

        function se() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ae(e) {
            return e[_] = !0, e
        }

        function le(e) {
            var t = S.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function fe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function pe(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(s) {
            return ae(function(o) {
                return o = +o, ae(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = oe.support = {}, s = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, k = oe.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : b;
                return i !== S && 9 === i.nodeType && i.documentElement && (a = (S = i).documentElement, x = !s(S), b !== S && (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), p.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = le(function(e) {
                    return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = J.test(S.getElementsByClassName), p.getById = le(function(e) {
                    return a.appendChild(e).id = _, !S.getElementsByName || !S.getElementsByName(_).length
                }), p.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(te, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && x) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var n = e.replace(te, d);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && x) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && x) return t.getElementsByClassName(e)
                }, u = [], m = [], (p.qsa = J.test(S.querySelectorAll)) && (le(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = S.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (p.matchesSelector = J.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function(e) {
                    p.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", W)
                }), m = m.length && new RegExp(m.join("|")), u = u.length && new RegExp(u.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, O = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === b && y(b, e) ? -1 : t === S || t.ownerDocument === b && y(b, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === S ? -1 : t === S ? 1 : r ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0;
                    if (r === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ue(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0
                }), S
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== S && k(e), t = t.replace(Q, "='$1']"), p.matchesSelector && x && !I[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t))) try {
                    var n = v.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < oe(t, S, null, [e]).length
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== S && k(e), y(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== S && k(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && D.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !x) : void 0;
                return void 0 !== i ? i : p.attributes || !x ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(ne, ie)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(O), c) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (w = oe.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, d), e[3] = (e[3] || e[4] || e[5] || "").replace(te, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, d).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = oe.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(z, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, o, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                f = !n && !b,
                                p = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                        l = c = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && f) {
                                    for (p = (a = (i = (r = (o = (s = u)[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === C && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++p && s === e) {
                                            r[h] = [C, a, p];
                                            break
                                        }
                                } else if (f && (p = a = (i = (r = (o = (s = e)[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === C && i[1]), !1 === p)
                                    for (;
                                        (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (f && ((r = (o = s[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [C, p]), s !== e)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return s[_] ? s(o) : 1 < s.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, i = s(e, o), r = i.length; r--;) e[n = P(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var i = [],
                            r = [],
                            a = f(e.replace(q, "$1"));
                        return a[_] ? ae(function(e, t, n, i) {
                            for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(te, d),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: ae(function(n) {
                        return K.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(te, d).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = x ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = fe(e);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(a, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                d = t && "parentNode" === u,
                f = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, o, s = [C, f];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || d) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || d)
                            if (r = (o = e[_] || (e[_] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[u]) && i[0] === C && i[1] === f) return s[2] = i[2];
                                if ((r[u] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function be(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function we(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function Te(p, h, g, m, v, e) {
            return m && !m[_] && (m = Te(m)), v && !v[_] && (v = Te(v, e)), ae(function(e, t, n, i) {
                var r, o, s, a = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && h ? u : we(u, a, p, n, i),
                    f = g ? v || (e ? p : c || m) ? [] : t : d;
                if (g && g(d, f, n, i), m)
                    for (r = we(f, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (f[l[o]] = !(d[l[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [], o = f.length; o--;)(s = f[o]) && r.push(d[o] = s);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--;)(s = f[o]) && -1 < (r = v ? P(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else f = we(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : $.apply(t, f)
            })
        }

        function ke(e) {
            for (var r, t, n, i = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                    return e === r
                }, s, !0), c = ye(function(e) {
                    return -1 < P(r, e)
                }, s, !0), u = [function(e, t, n) {
                    var i = !o && (n || t !== T) || ((r = t).nodeType ? l : c)(e, t, n);
                    return r = null, i
                }]; a < i; a++)
                if (t = w.relative[e[a].type]) u = [ye(be(u), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[_]) {
                        for (n = ++a; n < i && !w.relative[e[n].type]; n++);
                        return Te(1 < a && be(u), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(q, "$1"), t, a < n && ke(e.slice(a, n)), n < i && ke(e = e.slice(n)), n < i && ve(e))
                    }
                    u.push(t)
                } return be(u)
        }

        function Se(m, v) {
            function e(e, t, n, i, r) {
                var o, s, a, l = 0,
                    c = "0",
                    u = e && [],
                    d = [],
                    f = T,
                    p = e || b && w.find.TAG("*", r),
                    h = C += null == f ? 1 : Math.random() || .1,
                    g = p.length;
                for (r && (T = t === S || t || r); c !== g && null != (o = p[c]); c++) {
                    if (b && o) {
                        for (s = 0, t || o.ownerDocument === S || (k(o), n = !x); a = m[s++];)
                            if (a(o, t || S, n)) {
                                i.push(o);
                                break
                            } r && (C = h)
                    }
                    y && ((o = !a && o) && l--, e && u.push(o))
                }
                if (l += c, y && c !== l) {
                    for (s = 0; a = v[s++];) a(u, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--;) u[c] || d[c] || (d[c] = N.call(i));
                        d = we(d)
                    }
                    $.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && oe.uniqueSort(i)
                }
                return r && (C = h, T = f), u
            }
            var y = 0 < v.length,
                b = 0 < m.length;
            return y ? ae(e) : e
        }
        return me.prototype = w.filters = w.pseudos, w.setFilters = new me, h = oe.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, c = A[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = w.preFilter; s;) {
                for (o in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }), s = s.slice(n.length)), w.filter) !(i = Y[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : A(e, a).slice(0)
        }, f = oe.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = I[e + " "];
            if (!o) {
                for (n = (t = t || h(e)).length; n--;)(o = ke(t[n]))[_] ? i.push(o) : r.push(o);
                (o = I(e, Se(r, i))).selector = e
            }
            return o
        }, g = oe.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e,
                u = !i && h(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && x && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(te, d), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = Y.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(te, d), ee.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && ve(o))) return $.apply(n, i), n;
                        break
                    }
            }
            return (c || f(e, u))(i, t, !x, n, !t || ee.test(e) && ge(t.parentNode) || t), n
        }, p.sortStable = _.split("").sort(O).join("") === _, p.detectDuplicates = !!c, k(), p.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(F, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(S);
    _.find = p, _.expr = p.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = p.uniqueSort, _.text = p.getText, _.isXMLDoc = p.isXML, _.contains = p.contains, _.escapeSelector = p.escape;

    function h(e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && _(e).is(n)) break;
                i.push(e)
            } return i
    }

    function k(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var C = _.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, n, i) {
        return b(n) ? _.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? _.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? _.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : _.filter(n, e, i)
    }
    _.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (_.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
            return 1 < i ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && C.test(e) ? _(e) : e || [], !1).length
        }
    });
    var O, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || O, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), A.test(i[1]) && _.isPlainObject(t))
                for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = x.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = _.fn, O = _(x);
    var N = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && _(e);
            if (!C.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? _.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(_(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(i, r) {
        _.fn[i] = function(e, t) {
            var n = _.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = _.filter(t, n)), 1 < this.length && (j[i] || _.uniqueSort(n), N.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function M(e, t, n, i) {
        var r;
        try {
            e && b(r = e.promise) ? r.call(e).done(t).fail(n) : e && b(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, _.each(e.match(L) || [], function(e, t) {
            n[t] = !0
        }), n) : _.extend({}, i);

        function r() {
            for (a = a || i.once, s = o = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length;) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
            i.memory || (t = !1), o = !1, a && (l = t ? [] : "")
        }
        var o, t, s, a, l = [],
            c = [],
            u = -1,
            d = {
                add: function() {
                    return l && (t && !o && (u = l.length - 1, c.push(t)), function n(e) {
                        _.each(e, function(e, t) {
                            b(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== T(t) && n(t)
                        })
                    }(arguments), t && !o && r()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = _.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < _.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return a = c = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = c = [], t || o || (l = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), o || r()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    }, _.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return _.Deferred(function(i) {
                            _.each(o, function(e, t) {
                                var n = b(r[t[4]]) && r[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function c(r, o, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(r < l)) {
                                        if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? a ? t.call(e, c(l, o, P, a), c(l, o, F, a)) : (l++, t.call(e, c(l, o, P, a), c(l, o, F, a), c(l, o, P, o.notifyWith))) : (s !== P && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== F && (n = void 0, i = [e]), o.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (_.Deferred.getStackHook && (t.stackTrace = _.Deferred.getStackHook()), S.setTimeout(t))
                            }
                        }
                        return _.Deferred(function(e) {
                            o[0][3].add(c(0, e, b(i) ? i : P, e.notifyWith)), o[1][3].add(c(0, e, b(t) ? t : P)), o[2][3].add(c(0, e, b(n) ? n : F))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, s) : s
                    }
                },
                a = {};
            return _.each(o, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(r, o)
                }
            }
            var n = arguments.length,
                i = n,
                r = Array(i),
                o = a.call(arguments),
                s = _.Deferred();
            if (n <= 1 && (M(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || b(o[i] && o[i].then))) return s.then();
            for (; i--;) M(o[i], t(i), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(e, t) {
        S.console && S.console.warn && e && H.test(e.name) && S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, _.readyException = function(e) {
        S.setTimeout(function() {
            throw e
        })
    };
    var R = _.Deferred();

    function W() {
        x.removeEventListener("DOMContentLoaded", W), S.removeEventListener("load", W), _.ready()
    }
    _.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || ((_.isReady = !0) !== e && 0 < --_.readyWait || R.resolveWith(x, [_]))
        }
    }), _.ready.then = R.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? S.setTimeout(_.ready) : (x.addEventListener("DOMContentLoaded", W), S.addEventListener("load", W));
    var z = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === T(n))
                for (a in r = !0, n) z(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, b(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                    return c.call(_(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        q = /^-ms-/,
        B = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function Q(e) {
        return e.replace(q, "ms-").replace(B, U)
    }

    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function K() {
        this.expando = _.expando + K.uid++
    }
    K.uid = 1, K.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[Q(t)] = n;
            else
                for (i in t) r[Q(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(L) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !_.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var Y = new K,
        G = new K,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : X.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), _.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : z(this, function(e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = G.get(o, n))) return t;
                    if (void 0 !== (t = Z(o, n))) return t
                } else this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Q(i.slice(5)), Z(o, i, r[i]));
                Y.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, _.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = _._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                _.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? _.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = _.queue(this, t, n);
                _._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && _.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || o.resolveWith(s, [s])
            }
            var i, r = 1,
                o = _.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = Y.get(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), o.promise(t)
        }
    });

    function ee(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
        return r
    }
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
        };

    function oe(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            u = (_.cssNumber[t] || "px" !== c && +l) && ne.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) _.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, _.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var se = {};

    function ae(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Y.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && re(i) && (r[o] = (d = c = l = void 0, c = (a = i).ownerDocument, u = a.nodeName, (d = se[u]) || (l = c.body.appendChild(c.createElement(u)), d = _.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), se[u] = d)))) : "none" !== n && (r[o] = "none", Y.set(i, "display", n)));
        var a, l, c, u, d;
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    _.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? _.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var he, ge, me = /<|&#?\w+;/;

    function ve(e, t, n, i, r) {
        for (var o, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) _.merge(f, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            _.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];)
            if (i && -1 < _.inArray(o, i)) r && r.push(o);
            else if (c = _.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), c && pe(s), n)
            for (u = 0; o = s[u++];) ue.test(o.type || "") && n.push(o);
        return d
    }
    he = x.createDocumentFragment().appendChild(x.createElement("div")), (ge = x.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var ye = x.documentElement,
        be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Se() {
        return !1
    }

    function xe() {
        try {
            return x.activeElement
        } catch (e) {}
    }

    function _e(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) _e(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return _().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, r, i, n)
        })
    }
    _.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, d, f, p, h, g, m = Y.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(ye, r), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(L) || [""]).length; c--;) p = g = (a = Te.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (d = _.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = _.event.special[p] || {}, u = _.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && _.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), _.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, f, p, h, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (p = g = (a = Te.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = _.event.special[p] || {}, f = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || _.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) _.event.remove(e, p + t[c], n, i, !0);
                _.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = _.event.fix(e),
                l = new Array(arguments.length),
                c = (Y.get(this, "events") || {})[a.type] || [],
                u = _.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = _.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < _(r, this).index(c) : _.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xe() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xe() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return E(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        _.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || _.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, i) {
            return _e(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return _e(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                _.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), s = Y.set(t, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) _.event.add(t, r, c[r][n]);
            G.hasData(e) && (a = G.access(e), l = _.extend({}, a), G.set(t, l))
        }
    }

    function $e(n, i, r, o) {
        i = m.apply([], i);
        var e, t, s, a, l, c, u = 0,
            d = n.length,
            f = d - 1,
            p = i[0],
            h = b(p);
        if (h || 1 < d && "string" == typeof p && !y.checkClone && Ae.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (i[0] = p.call(this, e, t.html())), $e(t, i, r, o)
        });
        if (d && (t = (e = ve(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = _.map(fe(e, "script"), De)).length; u < d; u++) l = e, u !== f && (l = _.clone(l, !0, !0), a && _.merge(s, fe(l, "script"))), r.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, _.map(s, Ne), u = 0; u < a; u++) l = s[u], ue.test(l.type || "") && !Y.access(l, "globalEval") && _.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(l.src) : w(l.textContent.replace(Ie, ""), c, l))
        }
        return n
    }

    function Le(e, t, n) {
        for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(fe(i)), i.parentNode && (n && _.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0),
                d = _.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (s = fe(u), i = 0, r = (o = fe(e)).length; i < r; i++) a = o[i], l = s[i], "input" === (c = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || fe(e), s = s || fe(u), i = 0, r = o.length; i < r; i++) je(o[i], s[i]);
                else je(e, u);
            return 0 < (s = fe(u, "script")).length && pe(s, !d && fe(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(fe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                _.inArray(this, n) < 0 && (_.cleanData(fe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        _.fn[e] = function(e) {
            for (var t, n = [], i = _(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), _(i[o])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe, Fe, Me, He, Re, We, ze, qe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Be = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = S), t.getComputedStyle(e)
        },
        Ue = new RegExp(ie.join("|"), "i");

    function Qe() {
        if (ze) {
            We.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", ze.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(We).appendChild(ze);
            var e = S.getComputedStyle(ze);
            Pe = "1%" !== e.top, Re = 12 === Ve(e.marginLeft), ze.style.right = "60%", He = 36 === Ve(e.right), Fe = 36 === Ve(e.width), ze.style.position = "absolute", Me = 36 === ze.offsetWidth || "absolute", ye.removeChild(We), ze = null
        }
    }

    function Ve(e) {
        return Math.round(parseFloat(e))
    }

    function Ke(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || Be(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (s = _.style(e, t)), !y.pixelBoxStyles() && qe.test(s) && Ue.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Ye(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    We = x.createElement("div"), (ze = x.createElement("div")).style && (ze.style.backgroundClip = "content-box", ze.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === ze.style.backgroundClip, _.extend(y, {
        boxSizingReliable: function() {
            return Qe(), Fe
        },
        pixelBoxStyles: function() {
            return Qe(), He
        },
        pixelPosition: function() {
            return Qe(), Pe
        },
        reliableMarginLeft: function() {
            return Qe(), Re
        },
        scrollboxSize: function() {
            return Qe(), Me
        }
    }));
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        et = ["Webkit", "Moz", "ms"],
        tt = x.createElement("div").style;

    function nt(e) {
        var t = _.cssProps[e];
        return t = t || (_.cssProps[e] = function(e) {
            if (e in tt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }

    function it(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function rt(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += _.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= _.css(e, "border" + ie[s] + "Width", !0, r))) : (l += _.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += _.css(e, "border" + ie[s] + "Width", !0, r) : a += _.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function ot(e, t, n) {
        var i = Be(e),
            r = Ke(e, t, i),
            o = "border-box" === _.css(e, "boxSizing", !1, i),
            s = o;
        if (qe.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (y.boxSizingReliable() || r === e.style[t]), "auto" !== r && (parseFloat(r) || "inline" !== _.css(e, "display", !1, i)) || (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + rt(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function st(e, t, n, i, r) {
        return new st.prototype.init(e, t, n, i, r)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ke(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = Q(t),
                    l = Xe.test(t),
                    c = e.style;
                if (l || (t = nt(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = Q(t);
            return Xe.test(t) || (t = nt(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ke(e, t, i)), "normal" === r && t in Ze && (r = Ze[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), _.each(["height", "width"], function(e, a) {
        _.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !Ge.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, a, n) : ee(e, Je, function() {
                    return ot(e, a, n)
                })
            },
            set: function(e, t, n) {
                var i, r = Be(e),
                    o = "border-box" === _.css(e, "boxSizing", !1, r),
                    s = n && rt(e, a, n, o, r);
                return o && y.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - rt(e, a, "border", !1, r) - .5)), s && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = _.css(e, a)), it(0, t, s)
            }
        }
    }), _.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        _.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (_.cssHooks[r + o].set = it)
    }), _.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Be(e), r = t.length; s < r; s++) o[t[s]] = _.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((_.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
        }
    }).init.prototype = st.prototype, (st.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = st.prototype.init, _.fx.step = {};
    var at, lt, ct, ut, dt = /^(?:toggle|show|hide)$/,
        ft = /queueHooks$/;

    function pt() {
        lt && (!1 === x.hidden && S.requestAnimationFrame ? S.requestAnimationFrame(pt) : S.setTimeout(pt, _.fx.interval), _.fx.tick())
    }

    function ht() {
        return S.setTimeout(function() {
            at = void 0
        }), at = Date.now()
    }

    function gt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function mt(e, t, n) {
        for (var i, r = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function vt(o, e, t) {
        var n, s, i = 0,
            r = vt.prefilters.length,
            a = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = at || ht(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return a.notifyWith(o, [c, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: _.extend({}, e),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: at || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = _.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = Q(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = _.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); i < r; i++)
            if (n = vt.prefilters[i].call(c, o, u, c.opts)) return b(n.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return _.map(u, mt, c), b(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(vt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = b(e) ? (t = e, ["*"]) : e.match(L)).length; i < r; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                g = e.nodeType && re(e),
                m = Y.get(e, "fxshow");
            for (i in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[i], dt.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    p[i] = m && m[i] || _.style(e, i)
                } if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Y.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (ae([e], !0), c = e.style.display || c, u = _.css(e, "display"), ae([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (f.done(function() {
                        h.display = c
                    }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && ae([e], !0), f.done(function() {
                    for (i in g || ae([e]), Y.remove(e, "fxshow"), p) _.style(e, i, p[i])
                })), l = mt(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
        }
    }), _.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            b(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = vt(this, _.extend({}, t), s);
                (o || Y.get(this, "finish")) && e.stop(!0)
            }
            var o = _.isEmptyObject(t),
                s = _.speed(e, n, i);
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(r, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = _.timers,
                    i = Y.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && ft.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || _.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = _.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, _.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(e, i) {
        var r = _.fn[i];
        _.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(gt(i, !0), e, t, n)
        }
    }), _.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        _.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), _.timers = [], _.fx.tick = function() {
        var e, t = 0,
            n = _.timers;
        for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), at = void 0
    }, _.fx.timer = function(e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        lt || (lt = !0, pt())
    }, _.fx.stop = function() {
        lt = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(i, e) {
        return i = _.fx && _.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = S.setTimeout(e, i);
            t.stop = function() {
                S.clearTimeout(n)
            }
        })
    }, ct = x.createElement("input"), ut = x.createElement("select").appendChild(x.createElement("option")), ct.type = "checkbox", y.checkOn = "" !== ct.value, y.optSelected = ut.selected, (ct = x.createElement("input")).value = "t", ct.type = "radio", y.radioValue = "t" === ct.value;
    var yt, bt = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return z(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(L);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = bt[t] || _.find.attr;
        bt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = bt[o], bt[o] = i, i = null != s(e, t, n) ? o : null, bt[o] = r), i
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;

    function kt(e) {
        return (e.match(L) || []).join(" ")
    }

    function St(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return z(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                _(this).addClass(t.call(this, e, St(this)))
            });
            if ((e = xt(t)).length)
                for (; n = this[l++];)
                    if (r = St(n), i = 1 === n.nodeType && " " + kt(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = kt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                _(this).removeClass(t.call(this, e, St(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = xt(t)).length)
                for (; n = this[l++];)
                    if (r = St(n), i = 1 === n.nodeType && " " + kt(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = kt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(r, t) {
            var o = typeof r,
                s = "string" == o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : b(r) ? this.each(function(e) {
                _(this).toggleClass(r.call(this, e, St(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = _(this), i = xt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" != o || ((e = St(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + kt(St(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    _.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, _(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = _.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = _.valHooks[t.type] || _.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(_t, "") : null == e ? "" : e : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : kt(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = _.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < _.inArray(_.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        }, y.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in S;

    function Ct(e) {
        e.stopPropagation()
    }
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    _.extend(_.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, c, u, d, f = [n || x],
                p = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = d = s = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(p + _.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[_.expando] ? e : new _.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : _.makeArray(t, [e]), u = _.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !g(n)) {
                    for (a = u.delegateType || p, Et.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (n.ownerDocument || x) && f.push(s.defaultView || s.parentWindow || S)
                }
                for (r = 0;
                    (o = f[r++]) && !e.isPropagationStopped();) d = o, e.type = 1 < r ? a : u.bindType || p, (c = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && V(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !V(n) || l && b(n[p]) && !g(n) && ((s = n[l]) && (n[l] = null), _.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, Ct), n[p](), e.isPropagationStopped() && d.removeEventListener(p, Ct), _.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(i, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), y.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            _.event.simulate(i, e.target, _.event.fix(e))
        }
        _.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i);
                t || e.addEventListener(n, r, !0), Y.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i) - 1;
                t ? Y.access(e, i, t) : (e.removeEventListener(n, r, !0), Y.remove(e, i))
            }
        }
    });
    var At = S.location,
        It = Date.now(),
        Ot = /\?/;
    _.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new S.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), t
    };
    var Dt = /\[\]$/,
        Nt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;

    function Lt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) _.each(e, function(e, t) {
            i || Dt.test(n) ? r(n, t) : Lt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== T(e)) r(n, e);
        else
            for (t in e) Lt(n + "[" + t + "]", e[t], i, r)
    }
    _.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var i, r = [];
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) Lt(i, e[i], t, n);
        return r.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && $t.test(this.nodeName) && !jt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g,
        Ft = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        zt = {},
        qt = {},
        Bt = "*/".concat("*"),
        Ut = x.createElement("a");

    function Qt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(L) || [];
            if (b(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Vt(t, r, o, s) {
        var a = {},
            l = t === qt;

        function c(e) {
            var i;
            return a[e] = !0, _.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }

    function Kt(e, t) {
        var n, i, r = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && _.extend(!0, e, i), e
    }
    Ut.href = At.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Kt(Kt(e, _.ajaxSettings), t) : Kt(_.ajaxSettings, e)
        },
        ajaxPrefilter: Qt(zt),
        ajaxTransport: Qt(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, f, n, p, i, h, g, r, o, m = _.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? _(v) : _.event,
                b = _.Deferred(),
                w = _.Callbacks("once memory"),
                T = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = Ht.exec(f);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? f : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) k.always(e[k.status]);
                            else
                                for (t in e) T[t] = [T[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(k), m.url = ((e || m.url || At.href) + "").replace(Wt, At.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(L) || [""], null == m.crossDomain) {
                i = x.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Ut.protocol + "//" + Ut.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = _.param(m.data, m.traditional)), Vt(zt, m, t, k), h) return k;
            for (r in (g = _.event && m.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Rt.test(m.type), d = m.url.replace(Ft, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Pt, "+")) : (o = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (Ot.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Mt, "$1"), o = (Ot.test(d) ? "&" : "?") + "_=" + It++ + o), m.url = d + o), m.ifModified && (_.lastModified[d] && k.setRequestHeader("If-Modified-Since", _.lastModified[d]), _.etag[d] && k.setRequestHeader("If-None-Match", _.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && k.setRequestHeader("Content-Type", m.contentType), k.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : m.accepts["*"]), m.headers) k.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, k, m) || h)) return k.abort();
            if (l = "abort", w.add(m.complete), k.done(m.success), k.fail(m.error), u = Vt(qt, m, t, k)) {
                if (k.readyState = 1, g && y.trigger("ajaxSend", [k, m]), h) return k;
                m.async && 0 < m.timeout && (p = S.setTimeout(function() {
                    k.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, u.send(s, c)
                } catch (e) {
                    if (h) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, n, i) {
                var r, o, s, a, l, c = t;
                h || (h = !0, p && S.clearTimeout(p), u = void 0, f = i || "", k.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s = s || r
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, k, n)), a = function(e, t, n, i) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, k, r), r ? (m.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (_.lastModified[d] = l), (l = k.getResponseHeader("etag")) && (_.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || c) + "", r ? b.resolveWith(v, [o, c, k]) : b.rejectWith(v, [k, c, s]), k.statusCode(T), T = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [k, m, r ? o : s]), w.fireWith(v, [k, c]), g && (y.trigger("ajaxComplete", [k, m]), --_.active || _.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, r) {
        _[r] = function(e, t, n, i) {
            return b(t) && (i = i || n, n = t, t = void 0), _.ajax(_.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function(e) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                _(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = _(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                _(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new S.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Gt = _.ajaxSettings.xhr();
    y.cors = !!Gt && "withCredentials" in Gt, y.ajax = Gt = !!Gt, _.ajaxTransport(function(r) {
        var o, s;
        if (y.cors || Gt && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Yt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && S.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = _("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), x.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var Xt, Jt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Jt.pop() || _.expando + "_" + It++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || _.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = S[i], S[i] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === r ? _(S).removeProp(i) : S[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)), o && b(r) && r(o[0]), o = r = void 0
        }), "script"
    }), y.createHTMLDocument = ((Xt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), _.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(i)) : t = x), o = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = ve([e], t, o), o && o.length && _(o).remove(), _.merge([], r.childNodes)));
        var i, r, o
    }, _.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = kt(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function(t) {
        return _.grep(_.timers, function(e) {
            return t === e.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = _.css(e, "position"),
                u = _(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), r = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, _.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                _.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - _.css(i, "marginTop", !0),
                    left: t.left - r.left - _.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        _.fn[t] = function(e) {
            return z(this, function(e, t, n) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), _.each(["top", "left"], function(e, n) {
        _.cssHooks[n] = Ye(y.pixelPosition, function(e, t) {
            if (t) return t = Ke(e, n), qe.test(t) ? _(e).position()[n] + "px" : t
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        _.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            _.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function(e, t, n) {
                    var i;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? _.css(e, t, r) : _.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        _.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), _.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), _.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, r
    }, _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = E, _.isFunction = b, _.isWindow = g, _.camelCase = Q, _.type = T, _.now = Date.now, _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var en = S.jQuery,
        tn = S.$;
    return _.noConflict = function(e) {
        return S.$ === _ && (S.$ = tn), e && S.jQuery === _ && (S.jQuery = en), _
    }, e || (S.jQuery = S.$ = _), _
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function o(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function w(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function p(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function g(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = w(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : g(p(e))
    }

    function m(e) {
        return 11 === e ? B : 10 === e ? U : B || U
    }

    function y(e) {
        if (!e) return document.documentElement;
        for (var t = m(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === w(n, "position") ? y(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function u(e) {
        return null === e.parentNode ? e : u(e.parentNode)
    }

    function h(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && y(s.firstElementChild) !== s ? y(l) : l;
        var c = u(e);
        return c.host ? h(c.host, t) : h(e, u(t).host)
    }

    function v(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i) return e[n];
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[n]
    }

    function d(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function i(e, t, n, i) {
        return F(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function b() {
        var e = document.body,
            t = document.documentElement,
            n = m(10) && getComputedStyle(t);
        return {
            height: i("Height", e, t, n),
            width: i("Width", e, t, n)
        }
    }

    function T(e) {
        return V({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function k(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = v(e, "top"),
                    i = v(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? b() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var u = w(e);
            l -= d(u, "x"), c -= d(u, "y"), r.width -= l, r.height -= c
        }
        return T(r)
    }

    function S(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n,
            r = m(10),
            o = "HTML" === t.nodeName,
            s = k(e),
            a = k(t),
            l = g(e),
            c = w(t),
            u = parseFloat(c.borderTopWidth, 10),
            d = parseFloat(c.borderLeftWidth, 10);
        i && "HTML" === t.nodeName && (a.top = F(a.top, 0), a.left = F(a.left, 0));
        var f = T({
            top: s.top - a.top - u,
            left: s.left - a.left - d,
            width: s.width,
            height: s.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !r && o) {
            var p = parseFloat(c.marginTop, 10),
                h = parseFloat(c.marginLeft, 10);
            f.top -= u - p, f.bottom -= u - p, f.left -= d - h, f.right -= d - h, f.marginTop = p, f.marginLeft = h
        }
        return (r && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
                r = v(t, "top"),
                o = v(t, "left"),
                s = i ? -1 : 1;
            return e.top += r * s, e.bottom += r * s, e.left += o * s, e.right += o * s, e
        }(f, t)), f
    }

    function x(e) {
        if (!e || !e.parentElement || m()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === w(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function _(e, t, n, i, r) {
        var o = 4 < arguments.length && void 0 !== r && r,
            s = {
                top: 0,
                left: 0
            },
            a = o ? x(e) : h(e, t);
        if ("viewport" === i) s = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t,
                i = e.ownerDocument.documentElement,
                r = S(e, i),
                o = F(i.clientWidth, window.innerWidth || 0),
                s = F(i.clientHeight, window.innerHeight || 0),
                a = n ? 0 : v(i),
                l = n ? 0 : v(i, "left");
            return T({
                top: a - r.top + r.marginTop,
                left: l - r.left + r.marginLeft,
                width: o,
                height: s
            })
        }(a, o);
        else {
            var l;
            "scrollParent" === i ? "BODY" === (l = g(p(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var c = S(l, a, o);
            if ("HTML" !== l.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === w(t, "position") || e(p(t)))
                }(a)) s = c;
            else {
                var u = b(),
                    d = u.height,
                    f = u.width;
                s.top += c.top - c.marginTop, s.bottom = d + c.top, s.left += c.left - c.marginLeft, s.right = f + c.left
            }
        }
        return s.left += n, s.top += n, s.right -= n, s.bottom -= n, s
    }

    function a(e, t, i, n, r, o) {
        var s = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = _(i, n, s, r),
            l = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            c = Object.keys(l).map(function(e) {
                return V({
                    key: e
                }, l[e], {
                    area: (t = l[e]).width * t.height
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            u = c.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            d = 0 < u.length ? u[0].key : c[0].key,
            f = e.split("-")[1];
        return d + (f ? "-" + f : "")
    }

    function l(e, t, n, i) {
        var r = 3 < arguments.length && void 0 !== i ? i : null;
        return S(n, r ? x(t) : h(t, n), r)
    }

    function C(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function E(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function A(e, t, n) {
        n = n.split("-")[0];
        var i = C(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[E(a)], r
    }

    function I(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function O(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = I(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && o(t) && (n.offsets.popper = T(n.offsets.popper), n.offsets.reference = T(n.offsets.reference), n = t(n, e))
        }), n
    }

    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function D(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function s(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function t(e, t, n, i) {
        n.updateBound = i, s(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = g(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }), o || e(g(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function n() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, s(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function f(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function c(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && f(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }

    function N(e, t, n) {
        var i = I(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function r(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
            i = Y.indexOf(e),
            r = Y.slice(i + 1).concat(Y.slice(0, i));
        return n ? r.reverse() : r
    }

    function j(e, r, o, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            i = n.indexOf(I(n, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === i ? [n] : [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r, o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        s = +o[1],
                        a = o[2];
                    if (!s) return e;
                    if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? s : ("vh" === a ? F(document.documentElement.clientHeight, window.innerHeight || 0) : F(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                    switch (a) {
                        case "%p":
                            r = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            r = i
                    }
                    return T(r)[t] / 100 * s
                }(e, n, r, o)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                f(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), s
    }
    for (var $ = Math.min, L = Math.round, P = Math.floor, F = Math.max, M = "undefined" != typeof window && "undefined" != typeof document, H = ["Edge", "Trident", "Firefox"], R = 0, W = 0; W < H.length; W += 1)
        if (M && 0 <= navigator.userAgent.indexOf(H[W])) {
            R = 1;
            break
        }
    function z(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var q = M && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, R))
            }
        },
        B = M && !(!window.MSInputMethodContext || !document.documentMode),
        U = M && /MSIE 10/.test(navigator.userAgent),
        Q = function(e, t, n) {
            return t && te(e.prototype, t), n && te(e, n), e
        },
        V = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        K = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Y = K.slice(3),
        G = "flip",
        X = "clockwise",
        J = "counterclockwise",
        Z = (Q(ee, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = l(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = a(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = A(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[D("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return n.call(this)
            }
        }]), ee);

    function ee(e, t) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, ee), this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }, this.update = q(this.update.bind(this)), this.options = V({}, ee.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(V({}, ee.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = V({}, ee.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return V({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }), this.modifiers.forEach(function(e) {
            e.enabled && o(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }), this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), this.state.eventsEnabled = r
    }

    function te(e, t) {
        for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
    return Z.Utils = ("undefined" == typeof window ? global : window).PopperUtils, Z.placements = K, Z.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            o = r.reference,
                            s = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            u = {
                                start: z({}, l, o[l]),
                                end: z({}, l, o[l] + o[c] - s[c])
                            };
                        e.offsets.popper = V({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        o = e.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = r.split("-")[0];
                    return n = f(+i) ? [+i, 0] : j(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || y(e.instance.popper);
                    e.instance.reference === t && (t = y(t));
                    var n = D("transform"),
                        r = e.instance.popper.style,
                        o = r.top,
                        s = r.left,
                        a = r[n];
                    r.top = "", r.left = "", r[n] = "";
                    var l = _(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                    var c = i.priority,
                        u = e.offsets.popper,
                        d = {
                            primary: function(e) {
                                var t = u[e];
                                return u[e] < l[e] && !i.escapeWithReference && (t = F(u[e], l[e])), z({}, e, t)
                            },
                            secondary: function(e) {
                                var t = "right" === e ? "left" : "top",
                                    n = u[t];
                                return u[e] > l[e] && !i.escapeWithReference && (n = $(u[t], l[e] - ("right" === e ? u.width : u.height))), z({}, t, n)
                            }
                        };
                    return c.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        u = V({}, u, d[t](e))
                    }), e.offsets.popper = u, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        o = P,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!N(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0],
                        o = e.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(r),
                        c = l ? "height" : "width",
                        u = l ? "Top" : "Left",
                        d = u.toLowerCase(),
                        f = l ? "left" : "top",
                        p = l ? "bottom" : "right",
                        h = C(i)[c];
                    a[p] - h < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - h)), a[d] + h > s[p] && (e.offsets.popper[d] += a[d] + h - s[p]), e.offsets.popper = T(e.offsets.popper);
                    var g = a[d] + a[c] / 2 - h / 2,
                        m = w(e.instance.popper),
                        v = parseFloat(m["margin" + u], 10),
                        y = parseFloat(m["border" + u + "Width"], 10),
                        b = g - e.offsets.popper[d] - v - y;
                    return b = F($(s[c] - h, b), 0), e.arrowElement = i, e.offsets.arrow = (z(n = {}, d, L(b)), z(n, f, ""), n), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(h, g) {
                    if (e(h.instance.modifiers, "inner")) return h;
                    if (h.flipped && h.placement === h.originalPlacement) return h;
                    var m = _(h.instance.popper, h.instance.reference, g.padding, g.boundariesElement, h.positionFixed),
                        v = h.placement.split("-")[0],
                        y = E(v),
                        b = h.placement.split("-")[1] || "",
                        w = [];
                    switch (g.behavior) {
                        case G:
                            w = [v, y];
                            break;
                        case X:
                            w = r(v);
                            break;
                        case J:
                            w = r(v, !0);
                            break;
                        default:
                            w = g.behavior
                    }
                    return w.forEach(function(e, t) {
                        if (v !== e || w.length === t + 1) return h;
                        v = h.placement.split("-")[0], y = E(v);
                        var n, i = h.offsets.popper,
                            r = h.offsets.reference,
                            o = P,
                            s = "left" === v && o(i.right) > o(r.left) || "right" === v && o(i.left) < o(r.right) || "top" === v && o(i.bottom) > o(r.top) || "bottom" === v && o(i.top) < o(r.bottom),
                            a = o(i.left) < o(m.left),
                            l = o(i.right) > o(m.right),
                            c = o(i.top) < o(m.top),
                            u = o(i.bottom) > o(m.bottom),
                            d = "left" === v && a || "right" === v && l || "top" === v && c || "bottom" === v && u,
                            f = -1 !== ["top", "bottom"].indexOf(v),
                            p = !!g.flipVariations && (f && "start" === b && a || f && "end" === b && l || !f && "start" === b && c || !f && "end" === b && u);
                        (s || d || p) && (h.flipped = !0, (s || d) && (v = w[t + 1]), p && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), h.placement = v + (b ? "-" + b : ""), h.offsets.popper = V({}, h.offsets.popper, A(h.instance.popper, h.offsets.reference, h.placement)), h = O(h.instance.modifiers, h, "flip"))
                    }), h
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = E(t), e.offsets.popper = T(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!N(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = I(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        r = e.offsets.popper,
                        o = I(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l = void 0 === o ? t.gpuAcceleration : o,
                        c = k(y(e.instance.popper)),
                        u = {
                            position: r.position
                        },
                        d = {
                            left: P(r.left),
                            top: L(r.top),
                            bottom: L(r.bottom),
                            right: P(r.right)
                        },
                        f = "bottom" === n ? "top" : "bottom",
                        p = "right" === i ? "left" : "right",
                        h = D("transform");
                    if (a = "bottom" == f ? -c.height + d.bottom : d.top, s = "right" == p ? -c.width + d.right : d.left, l && h) u[h] = "translate3d(" + s + "px, " + a + "px, 0)", u[f] = 0, u[p] = 0, u.willChange = "transform";
                    else {
                        var g = "bottom" == f ? -1 : 1,
                            m = "right" == p ? -1 : 1;
                        u[f] = a * g, u[p] = s * m, u.willChange = f + ", " + p
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = V({}, v, e.attributes), e.styles = V({}, u, e.styles), e.arrowStyles = V({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return c(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                        !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e])
                    }), e.arrowElement && Object.keys(e.arrowStyles).length && c(e.arrowElement, e.arrowStyles), e;
                    var t, n
                },
                onLoad: function(e, t, n, i, r) {
                    var o = l(r, t, e, n.positionFixed),
                        s = a(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), c(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, Z
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, u) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function s(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, u = u && u.hasOwnProperty("default") ? u.default : u;
    var r, n, a, l, c, d, f, p, h, g, m, v, y, b, w, T, k, S, x, _, C, E, A, I, O, D, N, j, $, L, P, F, M, H, R, W, z, q, B, U, Q, V, K, Y, G, X, J, Z, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, de, fe, pe, he, ge, me, ve, ye, be, we, Te, ke, Se, xe, _e, Ce, Ee, Ae, Ie, Oe, De, Ne, je, $e, Le, Pe, Fe, Me, He, Re, We, ze, qe, Be, Ue, Qe, Ve, Ke, Ye, Ge, Xe, Je, Ze, et, tt, nt, it, rt, ot, st, at, lt, ct, ut, dt, ft, pt, ht, gt, mt, vt, yt, bt, wt, Tt, kt, St, xt, _t, Ct, Et, At, It, Ot, Dt, Nt, jt = (Dt = "transitionend", Nt = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || "");
                try {
                    return 0 < Ot(document).find(t).length ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var t = Ot(e).css("transition-duration");
                return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                Ot(e).trigger(Dt)
            },
            supportsTransitionEnd: function() {
                return Boolean(Dt)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = t[i],
                            s = o && Nt.isElement(o) ? "element" : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
            }
        }, (Ot = t).fn.emulateTransitionEnd = function(e) {
            var t = this,
                n = !1;
            return Ot(this).one(Nt.TRANSITION_END, function() {
                n = !0
            }), setTimeout(function() {
                n || Nt.triggerTransitionEnd(t)
            }, e), this
        }, Ot.event.special[Nt.TRANSITION_END] = {
            bindType: Dt,
            delegateType: Dt,
            handle: function(e) {
                if (Ot(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }, Nt),
        $t = (n = "alert", l = "." + (a = "bs.alert"), c = (r = t).fn[n], d = {
            CLOSE: "close" + l,
            CLOSED: "closed" + l,
            CLICK_DATA_API: "click" + l + ".data-api"
        }, (It = Jt.prototype).close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, It.dispose = function() {
            r.removeData(this._element, a), this._element = null
        }, It._getRootElement = function(e) {
            var t = jt.getSelectorFromElement(e),
                n = !1;
            return t && (n = r(t)[0]), n = n || r(e).closest(".alert")[0]
        }, It._triggerCloseEvent = function(e) {
            var t = r.Event(d.CLOSE);
            return r(e).trigger(t), t
        }, It._removeElement = function(t) {
            var n = this;
            if (r(t).removeClass("show"), r(t).hasClass("fade")) {
                var e = jt.getTransitionDurationFromElement(t);
                r(t).one(jt.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else this._destroyElement(t)
        }, It._destroyElement = function(e) {
            r(e).detach().trigger(d.CLOSED).remove()
        }, Jt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = r(this),
                    t = e.data(a);
                t || (t = new Jt(this), e.data(a, t)), "close" === n && t[n](this)
            })
        }, Jt._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, o(Jt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }]), f = Jt, r(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), r.fn[n] = f._jQueryInterface, r.fn[n].Constructor = f, r.fn[n].noConflict = function() {
            return r.fn[n] = c, f._jQueryInterface
        }, f),
        Lt = (h = "button", m = "." + (g = "bs.button"), v = ".data-api", y = (p = t).fn[h], b = "active", w = '[data-toggle^="button"]', T = {
            CLICK_DATA_API: "click" + m + v,
            FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
        }, (At = Xt.prototype).toggle = function() {
            var e = !0,
                t = !0,
                n = p(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = p(this._element).find("input")[0];
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && p(this._element).hasClass(b)) e = !1;
                        else {
                            var r = p(n).find(".active")[0];
                            r && p(r).removeClass(b)
                        } if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !p(this._element).hasClass(b), p(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(b)), e && p(this._element).toggleClass(b)
        }, At.dispose = function() {
            p.removeData(this._element, g), this._element = null
        }, Xt._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(g);
                e || (e = new Xt(this), p(this).data(g, e)), "toggle" === t && e[t]()
            })
        }, o(Xt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }]), k = Xt, p(document).on(T.CLICK_DATA_API, w, function(e) {
            e.preventDefault();
            var t = e.target;
            p(t).hasClass("btn") || (t = p(t).closest(".btn")), k._jQueryInterface.call(p(t), "toggle")
        }).on(T.FOCUS_BLUR_DATA_API, w, function(e) {
            var t = p(e.target).closest(".btn")[0];
            p(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
        }), p.fn[h] = k._jQueryInterface, p.fn[h].Constructor = k, p.fn[h].noConflict = function() {
            return p.fn[h] = y, k._jQueryInterface
        }, k),
        Pt = (x = "carousel", C = "." + (_ = "bs.carousel"), E = ".data-api", A = (S = t).fn[x], I = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, O = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, D = "next", N = "prev", j = {
            SLIDE: "slide" + C,
            SLID: "slid" + C,
            KEYDOWN: "keydown" + C,
            MOUSEENTER: "mouseenter" + C,
            MOUSELEAVE: "mouseleave" + C,
            TOUCHEND: "touchend" + C,
            LOAD_DATA_API: "load" + C + E,
            CLICK_DATA_API: "click" + C + E
        }, $ = "active", L = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, (Et = Gt.prototype).next = function() {
            this._isSliding || this._slide(D)
        }, Et.nextWhenVisible = function() {
            !document.hidden && S(this._element).is(":visible") && "hidden" !== S(this._element).css("visibility") && this.next()
        }, Et.prev = function() {
            this._isSliding || this._slide(N)
        }, Et.pause = function(e) {
            e || (this._isPaused = !0), S(this._element).find(L.NEXT_PREV)[0] && (jt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, Et.cycle = function(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, Et.to = function(e) {
            var t = this;
            this._activeElement = S(this._element).find(L.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) S(this._element).one(j.SLID, function() {
                    return t.to(e)
                });
                else {
                    if (n === e) return this.pause(), void this.cycle();
                    var i = n < e ? D : N;
                    this._slide(i, this._items[e])
                }
        }, Et.dispose = function() {
            S(this._element).off(C), S.removeData(this._element, _), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, Et._getConfig = function(e) {
            return e = s({}, I, e), jt.typeCheckConfig(x, e, O), e
        }, Et._addEventListeners = function() {
            var t = this;
            this._config.keyboard && S(this._element).on(j.KEYDOWN, function(e) {
                return t._keydown(e)
            }), "hover" === this._config.pause && (S(this._element).on(j.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(j.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }), "ontouchstart" in document.documentElement && S(this._element).on(j.TOUCHEND, function() {
                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                    return t.cycle(e)
                }, 500 + t._config.interval)
            }))
        }, Et._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
            }
        }, Et._getItemIndex = function(e) {
            return this._items = S.makeArray(S(e).parent().find(L.ITEM)), this._items.indexOf(e)
        }, Et._getItemByDirection = function(e, t) {
            var n = e === D,
                i = e === N,
                r = this._getItemIndex(t),
                o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
            var s = (r + (e === N ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }, Et._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e),
                i = this._getItemIndex(S(this._element).find(L.ACTIVE_ITEM)[0]),
                r = S.Event(j.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n
                });
            return S(this._element).trigger(r), r
        }, Et._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                S(this._indicatorsElement).find(L.ACTIVE).removeClass($);
                var t = this._indicatorsElement.children[this._getItemIndex(e)];
                t && S(t).addClass($)
            }
        }, Et._slide = function(e, t) {
            var n, i, r, o = this,
                s = S(this._element).find(L.ACTIVE_ITEM)[0],
                a = this._getItemIndex(s),
                l = t || s && this._getItemByDirection(e, s),
                c = this._getItemIndex(l),
                u = Boolean(this._interval);
            if (r = e === D ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && S(l).hasClass($)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                var d = S.Event(j.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: c
                });
                if (S(this._element).hasClass("slide")) {
                    S(l).addClass(i), jt.reflow(l), S(s).addClass(n), S(l).addClass(n);
                    var f = jt.getTransitionDurationFromElement(s);
                    S(s).one(jt.TRANSITION_END, function() {
                        S(l).removeClass(n + " " + i).addClass($), S(s).removeClass($ + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                            return S(o._element).trigger(d)
                        }, 0)
                    }).emulateTransitionEnd(f)
                } else S(s).removeClass($), S(l).addClass($), this._isSliding = !1, S(this._element).trigger(d);
                u && this.cycle()
            }
        }, Gt._jQueryInterface = function(i) {
            return this.each(function() {
                var e = S(this).data(_),
                    t = s({}, I, S(this).data());
                "object" == typeof i && (t = s({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new Gt(this, t), S(this).data(_, e)), "number" == typeof i) e.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else t.interval && (e.pause(), e.cycle())
            })
        }, Gt._dataApiClickHandler = function(e) {
            var t = jt.getSelectorFromElement(this);
            if (t) {
                var n = S(t)[0];
                if (n && S(n).hasClass("carousel")) {
                    var i = s({}, S(n).data(), S(this).data()),
                        r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1), Gt._jQueryInterface.call(S(n), i), r && S(n).data(_).to(r), e.preventDefault()
                }
            }
        }, o(Gt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return I
            }
        }]), P = Gt, S(document).on(j.CLICK_DATA_API, L.DATA_SLIDE, P._dataApiClickHandler), S(window).on(j.LOAD_DATA_API, function() {
            S(L.DATA_RIDE).each(function() {
                var e = S(this);
                P._jQueryInterface.call(e, e.data())
            })
        }), S.fn[x] = P._jQueryInterface, S.fn[x].Constructor = P, S.fn[x].noConflict = function() {
            return S.fn[x] = A, P._jQueryInterface
        }, P),
        Ft = (M = "collapse", R = "." + (H = "bs.collapse"), W = (F = t).fn[M], z = {
            toggle: !0,
            parent: ""
        }, q = {
            toggle: "boolean",
            parent: "(string|element)"
        }, B = {
            SHOW: "show" + R,
            SHOWN: "shown" + R,
            HIDE: "hide" + R,
            HIDDEN: "hidden" + R,
            CLICK_DATA_API: "click" + R + ".data-api"
        }, U = "show", Q = "collapse", V = "collapsing", K = "collapsed", Y = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, (Ct = Yt.prototype).toggle = function() {
            F(this._element).hasClass(U) ? this.hide() : this.show()
        }, Ct.show = function() {
            var e, t, n = this;
            if (!(this._isTransitioning || F(this._element).hasClass(U) || (this._parent && 0 === (e = F.makeArray(F(this._parent).find(Y.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (t = F(e).not(this._selector).data(H)) && t._isTransitioning))) {
                var i = F.Event(B.SHOW);
                if (F(this._element).trigger(i), !i.isDefaultPrevented()) {
                    e && (Yt._jQueryInterface.call(F(e).not(this._selector), "hide"), t || F(e).data(H, null));
                    var r = this._getDimension();
                    F(this._element).removeClass(Q).addClass(V), (this._element.style[r] = 0) < this._triggerArray.length && F(this._triggerArray).removeClass(K).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                        s = jt.getTransitionDurationFromElement(this._element);
                    F(this._element).one(jt.TRANSITION_END, function() {
                        F(n._element).removeClass(V).addClass(Q).addClass(U), n._element.style[r] = "", n.setTransitioning(!1), F(n._element).trigger(B.SHOWN)
                    }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                }
            }
        }, Ct.hide = function() {
            var e = this;
            if (!this._isTransitioning && F(this._element).hasClass(U)) {
                var t = F.Event(B.HIDE);
                if (F(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", jt.reflow(this._element), F(this._element).addClass(V).removeClass(Q).removeClass(U), 0 < this._triggerArray.length)
                        for (var i = 0; i < this._triggerArray.length; i++) {
                            var r = this._triggerArray[i],
                                o = jt.getSelectorFromElement(r);
                            null !== o && (F(o).hasClass(U) || F(r).addClass(K).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var s = jt.getTransitionDurationFromElement(this._element);
                    F(this._element).one(jt.TRANSITION_END, function() {
                        e.setTransitioning(!1), F(e._element).removeClass(V).addClass(Q).trigger(B.HIDDEN)
                    }).emulateTransitionEnd(s)
                }
            }
        }, Ct.setTransitioning = function(e) {
            this._isTransitioning = e
        }, Ct.dispose = function() {
            F.removeData(this._element, H), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, Ct._getConfig = function(e) {
            return (e = s({}, z, e)).toggle = Boolean(e.toggle), jt.typeCheckConfig(M, e, q), e
        }, Ct._getDimension = function() {
            return F(this._element).hasClass("width") ? "width" : "height"
        }, Ct._getParent = function() {
            var n = this,
                e = null;
            jt.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = F(this._config.parent)[0];
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return F(e).find(t).each(function(e, t) {
                n._addAriaAndCollapsedClass(Yt._getTargetFromElement(t), [t])
            }), e
        }, Ct._addAriaAndCollapsedClass = function(e, t) {
            if (e) {
                var n = F(e).hasClass(U);
                0 < t.length && F(t).toggleClass(K, !n).attr("aria-expanded", n)
            }
        }, Yt._getTargetFromElement = function(e) {
            var t = jt.getSelectorFromElement(e);
            return t ? F(t)[0] : null
        }, Yt._jQueryInterface = function(i) {
            return this.each(function() {
                var e = F(this),
                    t = e.data(H),
                    n = s({}, z, e.data(), "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new Yt(this, n), e.data(H, t)), "string" == typeof i) {
                    if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }, o(Yt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return z
            }
        }]), G = Yt, F(document).on(B.CLICK_DATA_API, Y.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = F(this),
                t = jt.getSelectorFromElement(this);
            F(t).each(function() {
                var e = F(this),
                    t = e.data(H) ? "toggle" : n.data();
                G._jQueryInterface.call(e, t)
            })
        }), F.fn[M] = G._jQueryInterface, F.fn[M].Constructor = G, F.fn[M].noConflict = function() {
            return F.fn[M] = W, G._jQueryInterface
        }, G),
        Mt = (J = "dropdown", ee = "." + (Z = "bs.dropdown"), te = ".data-api", ne = (X = t).fn[J], ie = new RegExp("38|40|27"), re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            CLICK: "click" + ee,
            CLICK_DATA_API: "click" + ee + te,
            KEYDOWN_DATA_API: "keydown" + ee + te,
            KEYUP_DATA_API: "keyup" + ee + te
        }, oe = "disabled", se = "show", ae = "dropdown-menu-right", le = '[data-toggle="dropdown"]', ce = ".dropdown-menu", ue = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, de = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, (_t = Kt.prototype).toggle = function() {
            if (!this._element.disabled && !X(this._element).hasClass(oe)) {
                var e = Kt._getParentFromElement(this._element),
                    t = X(this._menu).hasClass(se);
                if (Kt._clearMenus(), !t) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = X.Event(re.SHOW, n);
                    if (X(e).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === u) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : jt.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && X(e).addClass("position-static"), this._popper = new u(r, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === X(e).closest(".navbar-nav").length && X(document.body).children().on("mouseover", null, X.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), X(this._menu).toggleClass(se), X(e).toggleClass(se).trigger(X.Event(re.SHOWN, n))
                    }
                }
            }
        }, _t.dispose = function() {
            X.removeData(this._element, Z), X(this._element).off(ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, _t.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, _t._addEventListeners = function() {
            var t = this;
            X(this._element).on(re.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle()
            })
        }, _t._getConfig = function(e) {
            return e = s({}, this.constructor.Default, X(this._element).data(), e), jt.typeCheckConfig(J, e, this.constructor.DefaultType), e
        }, _t._getMenuElement = function() {
            if (!this._menu) {
                var e = Kt._getParentFromElement(this._element);
                this._menu = X(e).find(ce)[0]
            }
            return this._menu
        }, _t._getPlacement = function() {
            var e = X(this._element).parent(),
                t = "bottom-start";
            return e.hasClass("dropup") ? (t = "top-start", X(this._menu).hasClass(ae) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : X(this._menu).hasClass(ae) && (t = "bottom-end"), t
        }, _t._detectNavbar = function() {
            return 0 < X(this._element).closest(".navbar").length
        }, _t._getPopperConfig = function() {
            var t = this,
                e = {};
            "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}), e
            } : e.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: e,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }), n
        }, Kt._jQueryInterface = function(t) {
            return this.each(function() {
                var e = X(this).data(Z);
                if (e || (e = new Kt(this, "object" == typeof t ? t : null), X(this).data(Z, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, Kt._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = X.makeArray(X(le)), n = 0; n < t.length; n++) {
                    var i = Kt._getParentFromElement(t[n]),
                        r = X(t[n]).data(Z),
                        o = {
                            relatedTarget: t[n]
                        };
                    if (r) {
                        var s = r._menu;
                        if (X(i).hasClass(se) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && X.contains(i, e.target))) {
                            var a = X.Event(re.HIDE, o);
                            X(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && X(document.body).children().off("mouseover", null, X.noop), t[n].setAttribute("aria-expanded", "false"), X(s).removeClass(se), X(i).removeClass(se).trigger(X.Event(re.HIDDEN, o)))
                        }
                    }
                }
        }, Kt._getParentFromElement = function(e) {
            var t, n = jt.getSelectorFromElement(e);
            return n && (t = X(n)[0]), t || e.parentNode
        }, Kt._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || X(e.target).closest(ce).length)) : ie.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !X(this).hasClass(oe))) {
                var t = Kt._getParentFromElement(this),
                    n = X(t).hasClass(se);
                if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = X(t).find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)").get();
                    if (0 !== i.length) {
                        var r = i.indexOf(e.target);
                        38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var o = X(t).find(le)[0];
                        X(o).trigger("focus")
                    }
                    X(this).trigger("click")
                }
            }
        }, o(Kt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ue
            }
        }, {
            key: "DefaultType",
            get: function() {
                return de
            }
        }]), fe = Kt, X(document).on(re.KEYDOWN_DATA_API, le, fe._dataApiKeydownHandler).on(re.KEYDOWN_DATA_API, ce, fe._dataApiKeydownHandler).on(re.CLICK_DATA_API + " " + re.KEYUP_DATA_API, fe._clearMenus).on(re.CLICK_DATA_API, le, function(e) {
            e.preventDefault(), e.stopPropagation(), fe._jQueryInterface.call(X(this), "toggle")
        }).on(re.CLICK_DATA_API, ".dropdown form", function(e) {
            e.stopPropagation()
        }), X.fn[J] = fe._jQueryInterface, X.fn[J].Constructor = fe, X.fn[J].noConflict = function() {
            return X.fn[J] = ne, fe._jQueryInterface
        }, fe),
        Ht = (he = "modal", me = "." + (ge = "bs.modal"), ve = (pe = t).fn[he], ye = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, be = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, we = {
            HIDE: "hide" + me,
            HIDDEN: "hidden" + me,
            SHOW: "show" + me,
            SHOWN: "shown" + me,
            FOCUSIN: "focusin" + me,
            RESIZE: "resize" + me,
            CLICK_DISMISS: "click.dismiss" + me,
            KEYDOWN_DISMISS: "keydown.dismiss" + me,
            MOUSEUP_DISMISS: "mouseup.dismiss" + me,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + me,
            CLICK_DATA_API: "click" + me + ".data-api"
        }, Te = "modal-open", ke = "fade", Se = "show", xe = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, (xt = Vt.prototype).toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }, xt.show = function(e) {
            var t = this;
            if (!this._isTransitioning && !this._isShown) {
                pe(this._element).hasClass(ke) && (this._isTransitioning = !0);
                var n = pe.Event(we.SHOW, {
                    relatedTarget: e
                });
                pe(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), pe(document.body).addClass(Te), this._setEscapeEvent(), this._setResizeEvent(), pe(this._element).on(we.CLICK_DISMISS, xe.DATA_DISMISS, function(e) {
                    return t.hide(e)
                }), pe(this._dialog).on(we.MOUSEDOWN_DISMISS, function() {
                    pe(t._element).one(we.MOUSEUP_DISMISS, function(e) {
                        pe(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }, xt.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                var n = pe.Event(we.HIDE);
                if (pe(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = pe(this._element).hasClass(ke);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), pe(document).off(we.FOCUSIN), pe(this._element).removeClass(Se), pe(this._element).off(we.CLICK_DISMISS), pe(this._dialog).off(we.MOUSEDOWN_DISMISS), i) {
                        var r = jt.getTransitionDurationFromElement(this._element);
                        pe(this._element).one(jt.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else this._hideModal()
                }
            }
        }, xt.dispose = function() {
            pe.removeData(this._element, ge), pe(window, document, this._element, this._backdrop).off(me), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
        }, xt.handleUpdate = function() {
            this._adjustDialog()
        }, xt._getConfig = function(e) {
            return e = s({}, ye, e), jt.typeCheckConfig(he, e, be), e
        }, xt._showElement = function(e) {
            var t = this,
                n = pe(this._element).hasClass(ke);

            function i() {
                t._config.focus && t._element.focus(), t._isTransitioning = !1, pe(t._element).trigger(r)
            }
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && jt.reflow(this._element), pe(this._element).addClass(Se), this._config.focus && this._enforceFocus();
            var r = pe.Event(we.SHOWN, {
                relatedTarget: e
            });
            if (n) {
                var o = jt.getTransitionDurationFromElement(this._element);
                pe(this._dialog).one(jt.TRANSITION_END, i).emulateTransitionEnd(o)
            } else i()
        }, xt._enforceFocus = function() {
            var t = this;
            pe(document).off(we.FOCUSIN).on(we.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === pe(t._element).has(e.target).length && t._element.focus()
            })
        }, xt._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? pe(this._element).on(we.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(), t.hide())
            }) : this._isShown || pe(this._element).off(we.KEYDOWN_DISMISS)
        }, xt._setResizeEvent = function() {
            var t = this;
            this._isShown ? pe(window).on(we.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : pe(window).off(we.RESIZE)
        }, xt._hideModal = function() {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                pe(document.body).removeClass(Te), e._resetAdjustments(), e._resetScrollbar(), pe(e._element).trigger(we.HIDDEN)
            })
        }, xt._removeBackdrop = function() {
            this._backdrop && (pe(this._backdrop).remove(), this._backdrop = null)
        }, xt._showBackdrop = function(e) {
            var t = this,
                n = pe(this._element).hasClass(ke) ? ke : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && pe(this._backdrop).addClass(n), pe(this._backdrop).appendTo(document.body), pe(this._element).on(we.CLICK_DISMISS, function(e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && jt.reflow(this._backdrop), pe(this._backdrop).addClass(Se), !e) return;
                if (!n) return void e();
                var i = jt.getTransitionDurationFromElement(this._backdrop);
                pe(this._backdrop).one(jt.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                pe(this._backdrop).removeClass(Se);
                var r = function() {
                    t._removeBackdrop(), e && e()
                };
                if (pe(this._element).hasClass(ke)) {
                    var o = jt.getTransitionDurationFromElement(this._backdrop);
                    pe(this._backdrop).one(jt.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            } else e && e()
        }, xt._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, xt._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, xt._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, xt._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                pe(xe.FIXED_CONTENT).each(function(e, t) {
                    var n = pe(t)[0].style.paddingRight,
                        i = pe(t).css("padding-right");
                    pe(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }), pe(xe.STICKY_CONTENT).each(function(e, t) {
                    var n = pe(t)[0].style.marginRight,
                        i = pe(t).css("margin-right");
                    pe(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                }), pe(xe.NAVBAR_TOGGLER).each(function(e, t) {
                    var n = pe(t)[0].style.marginRight,
                        i = pe(t).css("margin-right");
                    pe(t).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                });
                var e = document.body.style.paddingRight,
                    t = pe(document.body).css("padding-right");
                pe(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
            }
        }, xt._resetScrollbar = function() {
            pe(xe.FIXED_CONTENT).each(function(e, t) {
                var n = pe(t).data("padding-right");
                void 0 !== n && pe(t).css("padding-right", n).removeData("padding-right")
            }), pe(xe.STICKY_CONTENT + ", " + xe.NAVBAR_TOGGLER).each(function(e, t) {
                var n = pe(t).data("margin-right");
                void 0 !== n && pe(t).css("margin-right", n).removeData("margin-right")
            });
            var e = pe(document.body).data("padding-right");
            void 0 !== e && pe(document.body).css("padding-right", e).removeData("padding-right")
        }, xt._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t
        }, Vt._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = pe(this).data(ge),
                    t = s({}, ye, pe(this).data(), "object" == typeof n && n ? n : {});
                if (e || (e = new Vt(this, t), pe(this).data(ge, e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else t.show && e.show(i)
            })
        }, o(Vt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ye
            }
        }]), _e = Vt, pe(document).on(we.CLICK_DATA_API, xe.DATA_TOGGLE, function(e) {
            var t, n = this,
                i = jt.getSelectorFromElement(this);
            i && (t = pe(i)[0]);
            var r = pe(t).data(ge) ? "toggle" : s({}, pe(t).data(), pe(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var o = pe(t).one(we.SHOW, function(e) {
                e.isDefaultPrevented() || o.one(we.HIDDEN, function() {
                    pe(n).is(":visible") && n.focus()
                })
            });
            _e._jQueryInterface.call(pe(t), r, this)
        }), pe.fn[he] = _e._jQueryInterface, pe.fn[he].Constructor = _e, pe.fn[he].noConflict = function() {
            return pe.fn[he] = ve, _e._jQueryInterface
        }, _e),
        Rt = (Ee = "tooltip", Ie = "." + (Ae = "bs.tooltip"), Oe = (Ce = t).fn[Ee], De = "bs-tooltip", Ne = new RegExp("(^|\\s)" + De + "\\S+", "g"), Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !($e = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(je = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, Fe = {
            HIDE: "hide" + Ie,
            HIDDEN: "hidden" + Ie,
            SHOW: (Pe = "show") + Ie,
            SHOWN: "shown" + Ie,
            INSERTED: "inserted" + Ie,
            CLICK: "click" + Ie,
            FOCUSIN: "focusin" + Ie,
            FOCUSOUT: "focusout" + Ie,
            MOUSEENTER: "mouseenter" + Ie,
            MOUSELEAVE: "mouseleave" + Ie
        }, Me = "fade", He = "show", Re = "hover", We = "focus", (St = Qt.prototype).enable = function() {
            this._isEnabled = !0
        }, St.disable = function() {
            this._isEnabled = !1
        }, St.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }, St.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY,
                        n = Ce(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ce(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (Ce(this.getTipElement()).hasClass(He)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }, St.dispose = function() {
            clearTimeout(this._timeout), Ce.removeData(this.element, this.constructor.DATA_KEY), Ce(this.element).off(this.constructor.EVENT_KEY), Ce(this.element).closest(".modal").off("hide.bs.modal"), this.tip && Ce(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, St.show = function() {
            var t = this;
            if ("none" === Ce(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e = Ce.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                Ce(this.element).trigger(e);
                var n = Ce.contains(this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !n) return;
                var i = this.getTipElement(),
                    r = jt.getUID(this.constructor.NAME);
                i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && Ce(i).addClass(Me);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                    s = this._getAttachment(o);
                this.addAttachmentClass(s);
                var a = !1 === this.config.container ? document.body : Ce(this.config.container);
                Ce(i).data(this.constructor.DATA_KEY, this), Ce.contains(this.element.ownerDocument.documentElement, this.tip) || Ce(i).appendTo(a), Ce(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, i, {
                    placement: s,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        t._handlePopperPlacementChange(e)
                    }
                }), Ce(i).addClass(He), "ontouchstart" in document.documentElement && Ce(document.body).children().on("mouseover", null, Ce.noop);
                var l = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, Ce(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                };
                if (Ce(this.tip).hasClass(Me)) {
                    var c = jt.getTransitionDurationFromElement(this.tip);
                    Ce(this.tip).one(jt.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }
        }, St.hide = function(e) {
            function t() {
                n._hoverState !== Pe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), Ce(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
            }
            var n = this,
                i = this.getTipElement(),
                r = Ce.Event(this.constructor.Event.HIDE);
            if (Ce(this.element).trigger(r), !r.isDefaultPrevented()) {
                if (Ce(i).removeClass(He), "ontouchstart" in document.documentElement && Ce(document.body).children().off("mouseover", null, Ce.noop), this._activeTrigger.click = !1, this._activeTrigger[We] = !1, this._activeTrigger[Re] = !1, Ce(this.tip).hasClass(Me)) {
                    var o = jt.getTransitionDurationFromElement(i);
                    Ce(i).one(jt.TRANSITION_END, t).emulateTransitionEnd(o)
                } else t();
                this._hoverState = ""
            }
        }, St.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }, St.isWithContent = function() {
            return Boolean(this.getTitle())
        }, St.addAttachmentClass = function(e) {
            Ce(this.getTipElement()).addClass(De + "-" + e)
        }, St.getTipElement = function() {
            return this.tip = this.tip || Ce(this.config.template)[0], this.tip
        }, St.setContent = function() {
            var e = Ce(this.getTipElement());
            this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(Me + " " + He)
        }, St.setElementContent = function(e, t) {
            var n = this.config.html;
            "object" == typeof t && (t.nodeType || t.jquery) ? n ? Ce(t).parent().is(e) || e.empty().append(t) : e.text(Ce(t).text()) : e[n ? "html" : "text"](t)
        }, St.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }, St._getAttachment = function(e) {
            return $e[e.toUpperCase()]
        }, St._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e) Ce(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                    return i.toggle(e)
                });
                else if ("manual" !== e) {
                    var t = e === Re ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                        n = e === Re ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    Ce(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e)
                    })
                }
                Ce(i.element).closest(".modal").on("hide.bs.modal", function() {
                    return i.hide()
                })
            }), this.config.selector ? this.config = s({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }, St._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, St._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || Ce(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ce(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? We : Re] = !0), Ce(t.getTipElement()).hasClass(He) || t._hoverState === Pe ? t._hoverState = Pe : (clearTimeout(t._timeout), t._hoverState = Pe, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === Pe && t.show()
            }, t.config.delay.show) : t.show())
        }, St._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || Ce(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ce(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? We : Re] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                "out" === t._hoverState && t.hide()
            }, t.config.delay.hide) : t.hide())
        }, St._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }, St._getConfig = function(e) {
            return "number" == typeof(e = s({}, this.constructor.Default, Ce(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), jt.typeCheckConfig(Ee, e, this.constructor.DefaultType), e
        }, St._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }, St._cleanTipClass = function() {
            var e = Ce(this.getTipElement()),
                t = e.attr("class").match(Ne);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }, St._handlePopperPlacementChange = function(e) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, St._fixTransition = function() {
            var e = this.getTipElement(),
                t = this.config.animation;
            null === e.getAttribute("x-placement") && (Ce(e).removeClass(Me), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
        }, Qt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = Ce(this).data(Ae),
                    t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new Qt(this, t), Ce(this).data(Ae, e)), "string" == typeof n)) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, o(Qt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Le
            }
        }, {
            key: "NAME",
            get: function() {
                return Ee
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ae
            }
        }, {
            key: "Event",
            get: function() {
                return Fe
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Ie
            }
        }, {
            key: "DefaultType",
            get: function() {
                return je
            }
        }]), ze = Qt, Ce.fn[Ee] = ze._jQueryInterface, Ce.fn[Ee].Constructor = ze, Ce.fn[Ee].noConflict = function() {
            return Ce.fn[Ee] = Oe, ze._jQueryInterface
        }, ze),
        Wt = (Be = "popover", Qe = "." + (Ue = "bs.popover"), Ve = (qe = t).fn[Be], Ke = "bs-popover", Ye = new RegExp("(^|\\s)" + Ke + "\\S+", "g"), Ge = s({}, Rt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Xe = s({}, Rt.DefaultType, {
            content: "(string|element|function)"
        }), Je = {
            HIDE: "hide" + Qe,
            HIDDEN: "hidden" + Qe,
            SHOW: "show" + Qe,
            SHOWN: "shown" + Qe,
            INSERTED: "inserted" + Qe,
            CLICK: "click" + Qe,
            FOCUSIN: "focusin" + Qe,
            FOCUSOUT: "focusout" + Qe,
            MOUSEENTER: "mouseenter" + Qe,
            MOUSELEAVE: "mouseleave" + Qe
        }, Ze = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                qe(this.getTipElement()).addClass(Ke + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || qe(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = qe(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = qe(this.getTipElement()),
                    t = e.attr("class").match(Ye);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = qe(this).data(Ue),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), qe(this).data(Ue, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ge
                }
            }, {
                key: "NAME",
                get: function() {
                    return Be
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ue
                }
            }, {
                key: "Event",
                get: function() {
                    return Je
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Qe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Xe
                }
            }]), i
        }(Rt), qe.fn[Be] = Ze._jQueryInterface, qe.fn[Be].Constructor = Ze, qe.fn[Be].noConflict = function() {
            return qe.fn[Be] = Ve, Ze._jQueryInterface
        }, Ze),
        zt = (tt = "scrollspy", it = "." + (nt = "bs.scrollspy"), rt = (et = t).fn[tt], ot = {
            offset: 10,
            method: "auto",
            target: ""
        }, st = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, at = {
            ACTIVATE: "activate" + it,
            SCROLL: "scroll" + it,
            LOAD_DATA_API: "load" + it + ".data-api"
        }, lt = "active", ct = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, ut = "position", (kt = Ut.prototype).refresh = function() {
            var t = this,
                e = this._scrollElement === this._scrollElement.window ? "offset" : ut,
                r = "auto" === this._config.method ? e : this._config.method,
                o = r === ut ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), et.makeArray(et(this._selector)).map(function(e) {
                var t, n = jt.getSelectorFromElement(e);
                if (n && (t = et(n)[0]), t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [et(t)[r]().top + o, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
            })
        }, kt.dispose = function() {
            et.removeData(this._element, nt), et(this._scrollElement).off(it), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, kt._getConfig = function(e) {
            if ("string" != typeof(e = s({}, ot, "object" == typeof e && e ? e : {})).target) {
                var t = et(e.target).attr("id");
                t || (t = jt.getUID(tt), et(e.target).attr("id", t)), e.target = "#" + t
            }
            return jt.typeCheckConfig(tt, e, st), e
        }, kt._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, kt._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, kt._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, kt._process = function() {
            var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }, kt._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",");
            e = e.map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            });
            var n = et(e.join(","));
            n.hasClass("dropdown-item") ? (n.closest(ct.DROPDOWN).find(ct.DROPDOWN_TOGGLE).addClass(lt), n.addClass(lt)) : (n.addClass(lt), n.parents(ct.NAV_LIST_GROUP).prev(ct.NAV_LINKS + ", " + ct.LIST_ITEMS).addClass(lt), n.parents(ct.NAV_LIST_GROUP).prev(ct.NAV_ITEMS).children(ct.NAV_LINKS).addClass(lt)), et(this._scrollElement).trigger(at.ACTIVATE, {
                relatedTarget: t
            })
        }, kt._clear = function() {
            et(this._selector).filter(ct.ACTIVE).removeClass(lt)
        }, Ut._jQueryInterface = function(t) {
            return this.each(function() {
                var e = et(this).data(nt);
                if (e || (e = new Ut(this, "object" == typeof t && t), et(this).data(nt, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, o(Ut, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ot
            }
        }]), dt = Ut, et(window).on(at.LOAD_DATA_API, function() {
            for (var e = et.makeArray(et(ct.DATA_SPY)), t = e.length; t--;) {
                var n = et(e[t]);
                dt._jQueryInterface.call(n, n.data())
            }
        }), et.fn[tt] = dt._jQueryInterface, et.fn[tt].Constructor = dt, et.fn[tt].noConflict = function() {
            return et.fn[tt] = rt, dt._jQueryInterface
        }, dt),
        qt = (ht = "." + (pt = "bs.tab"), gt = (ft = t).fn.tab, mt = {
            HIDE: "hide" + ht,
            HIDDEN: "hidden" + ht,
            SHOW: "show" + ht,
            SHOWN: "shown" + ht,
            CLICK_DATA_API: "click" + ht + ".data-api"
        }, vt = "active", yt = ".active", bt = "> li > .active", (Tt = Bt.prototype).show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ft(this._element).hasClass(vt) || ft(this._element).hasClass("disabled"))) {
                var e, i, t = ft(this._element).closest(".nav, .list-group")[0],
                    r = jt.getSelectorFromElement(this._element);
                if (t) {
                    var o = "UL" === t.nodeName ? bt : yt;
                    i = (i = ft.makeArray(ft(t).find(o)))[i.length - 1]
                }
                var s = ft.Event(mt.HIDE, {
                        relatedTarget: this._element
                    }),
                    a = ft.Event(mt.SHOW, {
                        relatedTarget: i
                    });
                if (i && ft(i).trigger(s), ft(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (e = ft(r)[0]), this._activate(this._element, t);
                    var l = function() {
                        var e = ft.Event(mt.HIDDEN, {
                                relatedTarget: n._element
                            }),
                            t = ft.Event(mt.SHOWN, {
                                relatedTarget: i
                            });
                        ft(i).trigger(e), ft(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }, Tt.dispose = function() {
            ft.removeData(this._element, pt), this._element = null
        }, Tt._activate = function(e, t, n) {
            function i() {
                return r._transitionComplete(e, o, n)
            }
            var r = this,
                o = ("UL" === t.nodeName ? ft(t).find(bt) : ft(t).children(yt))[0],
                s = n && o && ft(o).hasClass("fade");
            if (o && s) {
                var a = jt.getTransitionDurationFromElement(o);
                ft(o).one(jt.TRANSITION_END, i).emulateTransitionEnd(a)
            } else i()
        }, Tt._transitionComplete = function(e, t, n) {
            if (t) {
                ft(t).removeClass("show " + vt);
                var i = ft(t.parentNode).find("> .dropdown-menu .active")[0];
                i && ft(i).removeClass(vt), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (ft(e).addClass(vt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), jt.reflow(e), ft(e).addClass("show"), e.parentNode && ft(e.parentNode).hasClass("dropdown-menu")) {
                var r = ft(e).closest(".dropdown")[0];
                r && ft(r).find(".dropdown-toggle").addClass(vt), e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }, Bt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = ft(this),
                    t = e.data(pt);
                if (t || (t = new Bt(this), e.data(pt, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, o(Bt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }]), wt = Bt, ft(document).on(mt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
            e.preventDefault(), wt._jQueryInterface.call(ft(this), "show")
        }), ft.fn.tab = wt._jQueryInterface, ft.fn.tab.Constructor = wt, ft.fn.tab.noConflict = function() {
            return ft.fn.tab = gt, wt._jQueryInterface
        }, wt);

    function Bt(e) {
        this._element = e
    }

    function Ut(e, t) {
        var n = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + ct.NAV_LINKS + "," + this._config.target + " " + ct.LIST_ITEMS + "," + this._config.target + " " + ct.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, et(this._scrollElement).on(at.SCROLL, function(e) {
            return n._process(e)
        }), this.refresh(), this._process()
    }

    function Qt(e, t) {
        if (void 0 === u) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
    }

    function Vt(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = pe(e).find(xe.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
    }

    function Kt(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }

    function Yt(e, t) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = F.makeArray(F('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
        for (var n = F(Y.DATA_TOGGLE), i = 0; i < n.length; i++) {
            var r = n[i],
                o = jt.getSelectorFromElement(r);
            null !== o && 0 < F(o).filter(e).length && (this._selector = o, this._triggerArray.push(r))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }

    function Gt(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = S(e)[0], this._indicatorsElement = S(this._element).find(L.INDICATORS)[0], this._addEventListeners()
    }

    function Xt(e) {
        this._element = e
    }

    function Jt(e) {
        this._element = e
    }! function(e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = jt, e.Alert = $t, e.Button = Lt, e.Carousel = Pt, e.Collapse = Ft, e.Dropdown = Mt, e.Modal = Ht, e.Popover = Wt, e.Scrollspy = zt, e.Tab = qt, e.Tooltip = Rt, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var r, s = window.Slick || {};
    (r = 0, s = function(e, t) {
        var n, i = this;
        i.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, i.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = r++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
        var i = this;
        if ("boolean" == typeof t) n = t, t = null;
        else if (t < 0 || t >= i.slideCount) return !1;
        i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }), i.$slidesCache = i.$slides, i.reinit()
    }, s.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, s.prototype.animateSlide = function(e, t) {
        var n = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
            top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
            animStart: i.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
            },
            complete: function() {
                t && t.call()
            }
        })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function() {
            i.disableTransition(), t.call()
        }, i.options.speed))
    }, s.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e
    }, s.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, s.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, s.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, s.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, s.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, s.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, s.prototype.buildDots = function() {
        var e, t, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, s.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, s.prototype.buildRows = function() {
        var e, t, n, i, r, o, s, a = this;
        if (i = document.createDocumentFragment(), o = a.$slider.children(), 1 < a.options.rows) {
            for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = e * s + (t * a.options.slidesPerRow + n);
                        o.get(u) && c.appendChild(o.get(u))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, s.prototype.checkResponsive = function(e, t) {
        var n, i, r, o = this,
            s = !1,
            a = o.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === o.respondTo ? r = l : "slider" === o.respondTo ? r = a : "min" === o.respondTo && (r = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
            for (n in i = null, o.breakpoints) o.breakpoints.hasOwnProperty(n) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[n] && (i = o.breakpoints[n]) : r > o.breakpoints[n] && (i = o.breakpoints[n]));
            null !== i ? null !== o.activeBreakpoint ? i === o.activeBreakpoint && !t || (o.activeBreakpoint = i, "unslick" === o.breakpointSettings[i] ? o.unslick(i) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[i]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = i) : (o.activeBreakpoint = i, "unslick" === o.breakpointSettings[i] ? o.unslick(i) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[i]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = i) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), s = i), e || !1 === s || o.$slider.trigger("breakpoint", [o, s])
        }
    }, s.prototype.changeSlide = function(e, t) {
        var n, i, r = this,
            o = c(e.currentTarget);
        switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                i = 0 == n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - i, !1, t);
                break;
            case "next":
                i = 0 == n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + i, !1, t);
                break;
            case "index":
                var s = 0 === e.data.index ? 0 : e.data.index || o.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, t), o.children().trigger("focus");
                break;
            default:
                return
        }
    }, s.prototype.checkNavigable = function(e) {
        var t, n;
        if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }, s.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, s.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, s.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, s.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, s.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, s.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, s.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, s.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, s.prototype.focusHandler = function() {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function() {
                n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
            }, 0)
        })
    }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, s.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, s.prototype.getLeft = function(e) {
        var t, n, i, r, o = this,
            s = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = n * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (s = e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + s, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
    }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, s.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            r = [];
        for (e = !1 === t.options.infinite ? t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, 2 * t.slideCount); n < e;) r.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return r
    }, s.prototype.getSlick = function() {
        return this
    }, s.prototype.getSlideCount = function() {
        var n, i, r = this;
        return i = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - i + c(t).outerWidth() / 2 > -1 * r.swipeLeft) return n = t, !1
        }), Math.abs(c(n).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
    }, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, s.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, s.prototype.initADA = function() {
        var n = this,
            i = Math.ceil(n.slideCount / n.options.slidesToShow),
            r = n.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < n.slideCount
            });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = r.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }), -1 !== t && c(this).attr({
                "aria-describedby": "slick-slide-control" + n.instanceUid + t
            })
        }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = r[e];
            c(this).attr({
                role: "presentation"
            }), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + n.instanceUid + e,
                "aria-controls": "slick-slide" + n.instanceUid + t,
                "aria-label": e + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(n.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA()
    }, s.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, s.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, s.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }, s.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
    }, s.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, s.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, s.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this),
                    t = c(this).attr("data-lazy"),
                    n = c(this).attr("data-srcset"),
                    i = c(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, e, t])
                    })
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, t])
                }, r.src = t
            })
        }
        var t, n, i, o = this;
        if (!0 === o.options.centerMode ? i = !0 === o.options.infinite ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (0 < n && n--, i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad)
            for (var r = n - 1, s = i, a = o.$slider.find(".slick-slide"), l = 0; l < o.options.slidesToScroll; l++) r < 0 && (r = o.slideCount - 1), t = (t = t.add(a.eq(r))).add(a.eq(s)), r--, s++;
        e(t), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, s.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, s.prototype.next = s.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, s.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, s.prototype.pause = s.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, s.prototype.play = s.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, s.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, s.prototype.prev = s.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, s.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, s.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, n, i, r, o, s = this,
            a = c("img[data-lazy]", s.$slider);
        a.length ? (t = a.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), r = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() {
            i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, n]), s.progressiveLazyLoad()
        }, o.onerror = function() {
            e < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad())
        }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
    }, s.prototype.refresh = function(e) {
        var t, n, i = this;
        n = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > n && (i.currentSlide = n), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), t = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
            currentSlide: t
        }), i.init(), e || i.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, s.prototype.registerBreakpoints = function() {
        var e, t, n, i = this,
            r = i.options.responsive || null;
        if ("array" === c.type(r) && r.length) {
            for (e in i.respondTo = i.options.respondTo || "window", r)
                if (n = i.breakpoints.length - 1, r.hasOwnProperty(e)) {
                    for (t = r[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                    i.breakpoints.push(t), i.breakpointSettings[t] = r[e].settings
                } i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }, s.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, s.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, s.prototype.setCSS = function(e) {
        var t, n, i = this,
            r = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", r[i.positionProp] = e, !1 === i.transformsEnabled || (!(r = {}) === i.cssTransitions ? r[i.animType] = "translate(" + t + ", " + n + ")" : r[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(r)
    }, s.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, s.prototype.setFade = function() {
        var n, i = this;
        i.$slides.each(function(e, t) {
            n = i.slideWidth * e * -1, !0 === i.options.rtl ? c(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, s.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, s.prototype.setOption = s.prototype.slickSetOption = function() {
        var e, t, n, i, r, o = this,
            s = !1;
        if ("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], r = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[1], s = arguments[2], "responsive" === (n = arguments[0]) && "array" === c.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[n] = i;
        else if ("multiple" === r) c.each(n, function(e, t) {
            o.options[e] = t
        });
        else if ("responsive" === r)
            for (t in i)
                if ("array" !== c.type(o.options.responsive)) o.options.responsive = [i[t]];
                else {
                    for (e = o.options.responsive.length - 1; 0 <= e;) o.options.responsive[e].breakpoint === i[t].breakpoint && o.options.responsive.splice(e, 1), e--;
                    o.options.responsive.push(i[t])
                } s && (o.unload(), o.reinit())
    }, s.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, s.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, s.prototype.setSlideClasses = function(e) {
        var t, n, i, r, o = this;
        if (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode) {
            var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t <= e && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, s.prototype.setupInfinite = function() {
        var e, t, n, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
            for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e) t = e - 1, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + i.slideCount; e += 1) t = e, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }, s.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, s.prototype.selectHandler = function(e) {
        var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
            n = parseInt(t.attr("data-slick-index"));
        n = n || 0, this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n)
    }, s.prototype.slideHandler = function(e, t, n) {
        var i, r, o, s, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
                c.postSlide(i)
            }) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
            c.postSlide(i)
        }) : c.postSlide(i));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
                c.postSlide(r)
            })) : c.postSlide(r), void c.animateHeight();
            !0 !== n ? c.animateSlide(l, function() {
                c.postSlide(r)
            }) : c.postSlide(r)
        }
    }, s.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, s.prototype.swipeDirection = function() {
        var e, t, n, i, r = this;
        return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i || i <= 360 && 315 <= i ? !1 === r.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
    }, s.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
        if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, s.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, s.prototype.swipeMove = function(e) {
        var t, n, i, r, o, s, a = this;
        return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * r : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, s.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, s.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, s.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, s.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, s.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, s.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function() {
        var e, t, n = this,
            i = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            o = n.length;
        for (e = 0; e < o; e++)
            if ("object" == typeof i || void 0 === i ? n[e].slick = new s(n[e], i) : t = n[e].slick[i].apply(n[e].slick, r), void 0 !== t) return t;
        return n
    }
}),
function(v) {
    v.fn.slickAnimation = function() {
        function d(e, t, n, i, r) {
            r = void 0 !== r && r, 1 == t.opacity ? (e.addClass(n), e.addClass(i)) : (e.removeClass(n), e.removeClass(i)), r && e.css(t)
        }

        function f(e, t) {
            return e ? 1e3 * e + 1e3 : t ? 1e3 * t : e || t ? 1e3 * e + 1e3 * t : 1e3
        }

        function p(e, t, n) {
            var i = {};
            ["animation-" + t, "-webkit-animation-" + t, "-moz-animation-" + t, "-o-animation-" + t, "-ms-animation-" + t].forEach(function(e) {
                i[e] = n + "s"
            }), e.css(i)
        }
        var e = v(this),
            t = e.find(".slick-list .slick-track > div"),
            n = e.find('[data-slick-index="0"]'),
            h = "animated",
            g = {
                opacity: "1"
            },
            m = {
                opacity: "0"
            };
        return t.each(function() {
            var u = v(this);
            u.find("[data-animation-in]").each(function() {
                var i = v(this);
                i.css(m);
                var r = i.attr("data-animation-in"),
                    o = i.attr("data-animation-out"),
                    s = i.attr("data-delay-in"),
                    a = i.attr("data-duration-in"),
                    l = i.attr("data-delay-out"),
                    c = i.attr("data-duration-out");
                o ? (0 < n.length && u.hasClass("slick-current") && (d(i, g, r, h, !0), s && p(i, "delay", s), a && p(i, "duration", a), setTimeout(function() {
                    d(i, m, r, h), d(i, g, o, h), l && p(i, "delay", l), c && p(i, "duration", c)
                }, f(s, a))), e.on("afterChange", function(e, t, n) {
                    u.hasClass("slick-current") && (d(i, g, r, h, !0), s && p(i, "delay", s), a && p(i, "duration", a), setTimeout(function() {
                        d(i, m, r, h), d(i, g, o, h), l && p(i, "delay", l), c && p(i, "duration", c)
                    }, f(s, a)))
                }), e.on("beforeChange", function(e, t, n) {
                    d(i, m, o, h, !0)
                })) : (0 < n.length && u.hasClass("slick-current") && (d(i, g, r, h, !0), s && p(i, "delay", s), a && p(i, "duration", a)), e.on("afterChange", function(e, t, n) {
                    u.hasClass("slick-current") && (d(i, g, r, h, !0), s && p(i, "delay", s), a && p(i, "duration", a))
                }), e.on("beforeChange", function(e, t, n) {
                    d(i, m, r, h, !0)
                }))
            })
        }), this
    }
}(jQuery),
function(n) {
    function i(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var r = {};
    i.m = n, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 4)
}([function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return i
    }), n.d(t, "h", function() {
        return o
    }), n.d(t, "i", function() {
        return r
    }), n.d(t, "g", function() {
        return s
    }), n.d(t, "e", function() {
        return a
    }), n.d(t, "j", function() {
        return l
    }), n.d(t, "f", function() {
        return c
    }), n.d(t, "k", function() {
        return u
    }), n.d(t, "c", function() {
        return f
    }), n.d(t, "d", function() {
        return p
    }), n.d(t, "l", function() {
        return h
    }), n.d(t, "a", function() {
        return g
    });
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function(e, t) {
            for (var n = 0; n < e.length; n++) {
                for (var i = !1, r = e[n], o = 0; o < t.length; o++) r === t[o] && (i = !0);
                if (!i) return !1
            }
            return !0
        },
        o = function(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        },
        r = function e(t, n) {
            var i = o(n);
            for (var r in t) r in i ? "object" !== d(i[r]) || "object" !== d(t[r]) || Array.isArray(t[r]) || (i[r] = e("object" === d(i[r]) ? i[r] : {}, t[r])) : i[r] = t[r];
            return i
        },
        s = function(e, t) {
            return Array.prototype.filter.call(e, function(e) {
                return t.includes(e)
            })
        },
        a = function(n, i, r) {
            var o = void 0;
            return function() {
                var e = this,
                    t = arguments;
                clearTimeout(o), o = setTimeout(function() {
                    o = null, r || n.apply(e, t)
                }, i), r && !o && n.apply(e, t)
            }
        },
        l = function(e) {
            for (var t = e.slice(0), n = []; 0 !== t.length;) {
                var i = Math.floor(t.length * Math.random());
                n.push(t[i]), t.splice(i, 1)
            }
            return n
        },
        c = function(e, t) {
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; n++)
                if (e[n].props.index !== t[n].props.index) return !1;
            return !0
        },
        u = function(e, t) {
            return e.slice(0).sort((r = t, function(e, t) {
                var n = r(e),
                    i = r(t);
                return n < i ? -1 : i < n ? 1 : 0
            }));
            var r
        },
        f = function(e, t, n, i, r) {
            if (void 0 !== t) {
                var o = new Error('Filterizr: expected type of option "' + e + '" to be "' + n + '", but its type is: "' + (void 0 === t ? "undefined" : d(t)) + '"'),
                    s = !1,
                    a = !1,
                    l = n.includes("array");
                if ((void 0 === t ? "undefined" : d(t)).match(n) ? s = !0 : !s && l && (a = Array.isArray(t)), !s && !l) throw o;
                if (!s && l && !a) throw o;
                var c = function(e) {
                    return e ? " For further help read here: " + e : ""
                };
                if (Array.isArray(i)) {
                    var u = !1;
                    if (i.forEach(function(e) {
                            e === t && (u = !0)
                        }), !u) throw new Error('Filterizr: allowed values for option "' + e + '" are: ' + i.map(function(e) {
                        return '"' + e + '"'
                    }).join(", ") + '. Value received: "' + t + '".' + c(r))
                } else if (i instanceof RegExp) {
                    if (!t.match(i)) throw new Error('Filterizr: invalid value "' + t + '" for option "' + e + '" received.' + c(r))
                }
            }
        },
        p = /(^linear$)|(^ease-in-out$)|(^ease-in$)|(^ease-out$)|(^ease$)|(^step-start$)|(^step-end$)|(^steps\(\d\s*,\s*(end|start)\))$|(^cubic-bezier\((\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\))$/,
        h = "\n  webkitTransitionEnd.Filterizr \n  otransitionend.Filterizr \n  oTransitionEnd.Filterizr \n  msTransitionEnd.Filterizr \n  transitionend.Filterizr\n",
        g = {
            IDLE: "IDLE",
            FILTERING: "FILTERING",
            SORTING: "SORTING",
            SHUFFLING: "SHUFFLING"
        }
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        i = n(0),
        r = function(e, t, n) {
            return t && c(e.prototype, t), n && c(e, n), e
        },
        s = window.jQuery,
        a = (r(l, [{
            key: "destroy",
            value: function() {
                this.$node.attr("style", "").find(".filtr-item").attr("style", ""), this.unbindEvents()
            }
        }, {
            key: "getFilterItems",
            value: function(n) {
                return s.map(this.$node.find(".filtr-item"), function(e, t) {
                    return new o.a(s(e), t, n)
                })
            }
        }, {
            key: "push",
            value: function(e, t) {
                var n = this.props.FilterItems;
                this.$node.append(e);
                var i = n.length,
                    r = new o.a(e, i, t);
                this.props.FilterItems.push(r)
            }
        }, {
            key: "calcColumns",
            value: function() {
                return Math.round(this.props.w / this.props.FilterItems[0].props.w)
            }
        }, {
            key: "updateFilterItemsTransitionStyle",
            value: function(t, n, i, r) {
                this.props.FilterItems.forEach(function(e) {
                    return e.$node.css({
                        transition: "all " + t + "s " + n + " " + e.calcDelay(i, r) + "ms"
                    })
                })
            }
        }, {
            key: "updateHeight",
            value: function(e) {
                this.props.h = e, this.$node.css("height", e)
            }
        }, {
            key: "updateWidth",
            value: function() {
                this.props.w = this.getWidth()
            }
        }, {
            key: "updateFilterItemsDimensions",
            value: function() {
                this.props.FilterItems.forEach(function(e) {
                    return e.updateDimensions()
                })
            }
        }, {
            key: "getWidth",
            value: function() {
                return this.$node.innerWidth()
            }
        }, {
            key: "bindTransitionEnd",
            value: function(e, t) {
                this.$node.on(i.l, Object(i.e)(function() {
                    e()
                }, t))
            }
        }, {
            key: "bindEvents",
            value: function(e) {
                this.$node.on("filteringStart.Filterizr", e.onFilteringStart), this.$node.on("filteringEnd.Filterizr", e.onFilteringEnd), this.$node.on("shufflingStart.Filterizr", e.onShufflingStart), this.$node.on("shufflingEnd.Filterizr", e.onShufflingEnd), this.$node.on("sortingStart.Filterizr", e.onSortingStart), this.$node.on("sortingEnd.Filterizr", e.onSortingEnd)
            }
        }, {
            key: "unbindEvents",
            value: function() {
                this.$node.off(i.l + "\n      filteringStart.Filterizr \n      filteringEnd.Filterizr \n      shufflingStart.Filterizr \n      shufflingEnd.Filterizr \n      sortingStart.Filterizr \n      sortingEnd.Filterizr")
            }
        }, {
            key: "trigger",
            value: function(e) {
                this.$node.trigger(e)
            }
        }]), l);

    function l() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".filtr-container",
            t = arguments[1];
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, l), this.$node = s(e), this.$node.css({
            padding: 0,
            position: "relative",
            width: "100%",
            display: "flex",
            "flex-wrap": "wrap"
        }), this.props = {
            FilterItems: this.getFilterItems(t),
            w: this.getWidth(),
            h: 0
        }, this.updateFilterItemsDimensions()
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    t.a = a
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        r = (function(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e
        }(u, [{
            key: "filterIn",
            value: function(e, t) {
                var n = Object(i.h)(t);
                n.transform += " translate3d(" + e.left + "px," + e.top + "px, 0)", this.$node.css(n), this.props.lastPosition = e, this.props.filteredOut = !1
            }
        }, {
            key: "filterOut",
            value: function(e) {
                var t = Object(i.h)(e),
                    n = this.props.lastPosition;
                t.transform += " translate3d(" + n.left + "px," + n.top + "px, 0)", this.$node.css(t), this.props.filteredOut = !0
            }
        }, {
            key: "calcDelay",
            value: function(e, t) {
                var n = 0;
                return "progressive" === t ? n = e * this.props.index : this.props.index % 2 == 0 && (n = e), n
            }
        }, {
            key: "contentsMatchSearch",
            value: function(e) {
                return Boolean(this.getContentsLowercase().includes(e))
            }
        }, {
            key: "getContentsLowercase",
            value: function() {
                return this.$node.text().toLowerCase()
            }
        }, {
            key: "getCategories",
            value: function() {
                return this.$node.attr("data-category").split(/\s*,\s*/g)
            }
        }, {
            key: "getHeight",
            value: function() {
                return this.$node.innerHeight()
            }
        }, {
            key: "getWidth",
            value: function() {
                return this.$node.innerWidth()
            }
        }, {
            key: "trigger",
            value: function(e) {
                this.$node.trigger(e)
            }
        }, {
            key: "updateDimensions",
            value: function() {
                this.props.w = this.getWidth(), this.props.h = this.getHeight()
            }
        }, {
            key: "bindEvents",
            value: function() {
                var t = this;
                this.$node.on(i.l, function() {
                    var e = t.props.filteredOut;
                    t.$node.toggleClass("filteredOut", e), t.$node.css("z-index", e ? -1e3 : "")
                })
            }
        }, {
            key: "unbindEvents",
            value: function() {
                this.$node.off(i.l)
            }
        }]), u);

    function u(e, t, n) {
        var i = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, u);
        var r, o = n.delay,
            s = n.delayMode,
            a = n.filterOutCss,
            l = n.animationDuration,
            c = n.easing;
        this.$node = e, this.props = {
            data: (delete(r = i.$node.data()).category, delete r.sort, r),
            index: t,
            sortData: this.$node.data("sort"),
            lastPosition: {
                left: 0,
                top: 0
            },
            filteredOut: !1,
            w: this.getWidth(),
            h: this.getHeight()
        }, this.$node.css(a).css({
            "-webkit-backface-visibility": "hidden",
            perspective: "1000px",
            "-webkit-perspective": "1000px",
            "-webkit-transform-style": "preserve-3d",
            position: "absolute",
            transition: "all " + l + "s " + c + " " + this.calcDelay(o, s) + "ms"
        }), this.bindEvents()
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    t.a = r
}, function(e, t, n) {
    "use strict";
    t.a = {
        animationDuration: .5,
        callbacks: {
            onFilteringStart: function() {},
            onFilteringEnd: function() {},
            onShufflingStart: function() {},
            onShufflingEnd: function() {},
            onSortingStart: function() {},
            onSortingEnd: function() {}
        },
        controlsSelector: "",
        delay: 0,
        delayMode: "progressive",
        easing: "ease-out",
        filter: "all",
        filterOutCss: {
            opacity: 0,
            transform: "scale(0.5)"
        },
        filterInCss: {
            opacity: 1,
            transform: "scale(1)"
        },
        layout: "sameSize",
        multifilterLogicalOperator: "or",
        setupControls: !0
    }
}, function(e, t, n) {
    e.exports = n(5)
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = n(6),
        i = n(1),
        r = n(2),
        c = n(3),
        o = n(15);
    n.d(t, "Filterizr", function() {
        return l.a
    }), n.d(t, "FilterContainer", function() {
        return i.a
    }), n.d(t, "FilterItem", function() {
        return r.a
    }), n.d(t, "DefaultOptions", function() {
        return c.a
    });
    var s, u, d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    s = u = window.jQuery,
        function(s) {
            if (!s) throw new Error("Filterizr requires jQuery to work.");
            Object(o.a)(), s.fn.filterizr = function() {
                var e = "." + s.trim(this.get(0).className).replace(/\s+/g, "."),
                    t = arguments;
                if (!this._fltr && 0 === t.length || 1 === t.length && "object" === d(t[0])) {
                    var n = 0 < t.length ? t[0] : c.a;
                    this._fltr = new l.a(e, n)
                } else if (1 <= t.length && "string" == typeof t[0]) {
                    var i = t[0],
                        r = Array.prototype.slice.call(t, 1),
                        o = this._fltr;
                    switch (i) {
                        case "filter":
                            return o.filter.apply(o, a(r)), this;
                        case "insertItem":
                            return o.insertItem.apply(o, a(r)), this;
                        case "toggleFilter":
                            return o.toggleFilter.apply(o, a(r)), this;
                        case "sort":
                            return o.sort.apply(o, a(r)), this;
                        case "shuffle":
                            return o.shuffle.apply(o, a(r)), this;
                        case "search":
                            return o.search.apply(o, a(r)), this;
                        case "setOptions":
                            return o.setOptions.apply(o, a(r)), this;
                        case "destroy":
                            return o.destroy.apply(o, a(r)), delete this._fltr, this;
                        default:
                            throw new Error("Filterizr: " + i + " is not part of the Filterizr API. Please refer to the docs for more information.")
                    }
                }
                return this
            }
        }(u), t.default = s, n(16)
}, function(e, t, n) {
    "use strict";
    var i = n(7),
        r = n(1),
        c = n(8),
        o = n(3),
        u = n(0),
        s = function(e, t, n) {
            return t && f(e.prototype, t), n && f(e, n), e
        },
        a = window.jQuery,
        l = (s(d, [{
            key: "filter",
            value: function(e) {
                var t = this.props,
                    n = t.searchTerm,
                    i = t.FilterContainer,
                    r = t.FilterItems;
                i.trigger("filteringStart"), this.props.filterizrState = u.a.FILTERING, e = Array.isArray(e) ? e.map(function(e) {
                    return e.toString()
                }) : e.toString();
                var o = this.searchFilterItems(this.filterFilterItems(r, e), n);
                this.props.FilteredItems = o, this.render(o)
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this.props.FilterContainer,
                    t = this.options.controlsSelector;
                e.destroy(), a(window).off("resize.Filterizr"), a(t + "[data-filter]").off("click.Filterizr"), a(t + "[data-multifilter]").off("click.Filterizr"), a(t + "[data-shuffle]").off("click.Filterizr"), a(t + "[data-search]").off("keyup.Filterizr"), a(t + "[data-sortAsc]").off("click.Filterizr"), a(t + "[data-sortDesc]").off("click.Filterizr")
            }
        }, {
            key: "insertItem",
            value: function(e) {
                var t = this.props.FilterContainer,
                    n = e.clone().attr("style", "");
                t.push(n, this.options);
                var i = this.filterFilterItems(this.props.FilterItems, this.options.filter);
                this.render(i)
            }
        }, {
            key: "sort",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "index",
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "asc",
                    n = this.props,
                    i = n.FilterContainer,
                    r = n.FilterItems;
                i.trigger("sortingStart"), this.props.filterizrState = u.a.SORTING, this.props.FilterItems = this.sortFilterItems(r, e, t);
                var o = this.filterFilterItems(this.props.FilterItems, this.options.filter);
                this.props.FilteredItems = o, this.render(o)
            }
        }, {
            key: "search",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.props.searchTerm,
                    t = this.props.FilterItems,
                    n = this.searchFilterItems(this.filterFilterItems(t, this.options.filter), e);
                this.props.FilteredItems = n, this.render(n)
            }
        }, {
            key: "shuffle",
            value: function() {
                var e = this.props,
                    t = e.FilterContainer,
                    n = e.FilteredItems;
                t.trigger("shufflingStart"), this.props.filterizrState = u.a.SHUFFLING;
                var i = this.shuffleFilterItems(n);
                this.props.FilteredItems = i, this.render(i)
            }
        }, {
            key: "setOptions",
            value: function(e) {
                Object(u.c)("animationDuration", e.animationDuration, "number"), Object(u.c)("callbacks", e.callbacks, "object"), Object(u.c)("controlsSelector", e.controlsSelector, "string"), Object(u.c)("delay", e.delay, "number"), Object(u.c)("easing", e.easing, "string", u.d, "https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp"), Object(u.c)("delayMode", e.delayMode, "string", ["progressive", "alternate"]), Object(u.c)("filter", e.filter, "string|number|array"), Object(u.c)("filterOutCss", e.filterOutCss, "object"), Object(u.c)("filterInCss", e.filterOutCss, "object"), Object(u.c)("layout", e.layout, "string", ["sameSize", "vertical", "horizontal", "sameHeight", "sameWidth", "packed"]), Object(u.c)("multifilterLogicalOperator", e.multifilterLogicalOperator, "string", ["and", "or"]), Object(u.c)("setupControls", e.setupControls, "boolean"), this.options = Object(u.i)(this.options, e), (e.animationDuration || e.delay || e.delayMode || e.easing) && this.props.FilterContainer.updateFilterItemsTransitionStyle(e.animationDuration, e.easing, e.delay, e.delayMode), (e.callbacks || e.animationDuration) && this.rebindFilterContainerEvents(), e.filter && this.filter(e.filter), e.multifilterLogicalOperator && this.filter(this.options.filter)
            }
        }, {
            key: "toggleFilter",
            value: function(t) {
                var e = this.options.filter;
                "all" === e ? e = t : Array.isArray(e) ? e.includes(t) ? 1 === (e = e.filter(function(e) {
                    return e !== t
                })).length && (e = e[0]) : e.push(t) : e = e === t ? "all" : [e, t], this.options.filter = e, this.filter(this.options.filter)
            }
        }, {
            key: "filterFilterItems",
            value: function(e, n) {
                var i = this.options.multifilterLogicalOperator;
                return "all" === n ? e : e.filter(function(e) {
                    var t = e.getCategories();
                    return Array.isArray(n) ? "or" === i ? Object(u.g)(t, n).length : Object(u.b)(n, t) : t.includes(n)
                })
            }
        }, {
            key: "sortFilterItems",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "index",
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "asc",
                    i = Object(u.k)(e, function(e) {
                        return "index" !== t && "sortData" !== t ? e.props.data[t] : e.props[t]
                    });
                return "asc" === n ? i : i.reverse()
            }
        }, {
            key: "searchFilterItems",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.props.searchTerm;
                return t ? e.filter(function(e) {
                    return e.contentsMatchSearch(t)
                }) : e
            }
        }, {
            key: "shuffleFilterItems",
            value: function(e) {
                for (var t = Object(u.j)(e); 1 < e.length && Object(u.f)(e, t);) t = Object(u.j)(e);
                return t
            }
        }, {
            key: "render",
            value: function(e) {
                var r = this,
                    t = this.options,
                    o = t.filter,
                    n = t.filterInCss,
                    i = t.filterOutCss,
                    s = t.layout,
                    a = t.multifilterLogicalOperator;
                this.props.FilterItems.filter(function(e) {
                    var t = e.getCategories(),
                        n = Array.isArray(o),
                        i = e.contentsMatchSearch(r.props.searchTerm);
                    return !(n ? "or" === a ? Object(u.g)(t, o).length : Object(u.b)(o, t) : t.includes(o)) || !i
                }).forEach(function(e) {
                    e.filterOut(i)
                });
                var l = Object(c.a)(s, this);
                e.forEach(function(e, t) {
                    e.filterIn(l[t], n)
                })
            }
        }, {
            key: "onTransitionEndCallback",
            value: function() {
                var e = this.props,
                    t = e.filterizrState,
                    n = e.FilterContainer;
                switch (t) {
                    case u.a.FILTERING:
                        n.trigger("filteringEnd");
                        break;
                    case u.a.SORTING:
                        n.trigger("sortingEnd");
                        break;
                    case u.a.SHUFFLING:
                        n.trigger("shufflingEnd")
                }
                this.props.filterizrState = u.a.IDLE
            }
        }, {
            key: "rebindFilterContainerEvents",
            value: function() {
                var e = this,
                    t = this.props.FilterContainer,
                    n = this.options,
                    i = n.animationDuration,
                    r = n.callbacks;
                t.unbindEvents(), t.bindEvents(r), t.bindTransitionEnd(function() {
                    e.onTransitionEndCallback()
                }, i)
            }
        }, {
            key: "bindEvents",
            value: function() {
                var e = this,
                    t = this.props.FilterContainer;
                this.rebindFilterContainerEvents(), a(window).on("resize.Filterizr", Object(u.e)(function() {
                    t.updateWidth(), t.updateFilterItemsDimensions(), e.filter(e.options.filter)
                }, 250))
            }
        }]), d);

    function d() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".filtr-container",
            t = arguments[1];
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, d), this.options = Object(u.i)(o.a, t);
        var n = new r.a(e, this.options);
        if (!n.$node.length) throw new Error("Filterizr: could not find a container with the selector " + e + ", to initialize Filterizr.");
        new i.a(this, this.options.controlsSelector), this.props = {
            filterizrState: u.a.IDLE,
            searchTerm: "",
            sort: "index",
            sortOrder: "asc",
            FilterContainer: n,
            FilterItems: n.props.FilterItems,
            FilteredItems: []
        }, this.bindEvents(), this.filter(this.options.filter)
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    t.a = l
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        r = function(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e
        },
        o = window.jQuery,
        s = (r(a, [{
            key: "setupFilterControls",
            value: function() {
                var e = this.props,
                    n = e.Filterizr,
                    t = e.selector;
                o(t + "[data-filter]").on("click.Filterizr", function(e) {
                    var t = o(e.currentTarget).attr("data-filter");
                    n.options.filter = t, n.filter(n.options.filter)
                }), o(t + "[data-multifilter]").on("click.Filterizr", function(e) {
                    var t = o(e.target).attr("data-multifilter");
                    n.toggleFilter(t)
                })
            }
        }, {
            key: "setupShuffleControls",
            value: function() {
                var e = this.props,
                    t = e.Filterizr,
                    n = e.selector;
                o(n + "[data-shuffle]").on("click.Filterizr", function() {
                    t.shuffle()
                })
            }
        }, {
            key: "setupSearchControls",
            value: function() {
                var e = this.props,
                    n = e.Filterizr,
                    t = e.selector;
                o(t + "[data-search]").on("keyup.Filterizr", Object(i.e)(function(e) {
                    var t = o(e.target).val();
                    n.props.searchTerm = t.toLowerCase(), n.search(n.props.searchTerm)
                }, 250))
            }
        }, {
            key: "setupSortControls",
            value: function() {
                var e = this.props,
                    t = e.Filterizr,
                    n = e.selector;
                o(n + "[data-sortAsc]").on("click.Filterizr", function() {
                    var e = o(n + "[data-sortOrder]").val();
                    t.props.sortOrder = "asc", t.sort(e, "asc")
                }), o(n + "[data-sortDesc]").on("click.Filterizr", function() {
                    var e = o(n + "[data-sortOrder]").val();
                    t.props.sortOrder = "desc", t.sort(e, "desc")
                })
            }
        }]), a);

    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, a), this.props = {
            Filterizr: e,
            selector: t
        }, this.setupFilterControls(), this.setupShuffleControls(), this.setupSearchControls(), this.setupSortControls()
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    t.a = s
}, function(e, t, n) {
    "use strict";
    var i = n(9),
        r = n(10),
        o = n(11),
        s = n(12),
        a = n(13),
        l = n(14);
    t.a = function(e, t) {
        switch (e) {
            case "horizontal":
                return Object(i.a)(t);
            case "vertical":
                return Object(r.a)(t);
            case "sameHeight":
                return Object(o.a)(t);
            case "sameWidth":
                return Object(s.a)(t);
            case "sameSize":
                return Object(a.a)(t);
            case "packed":
                return Object(l.a)(t);
            default:
                return Object(a.a)(t)
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            i = t.FilteredItems,
            o = 0,
            s = 0,
            r = i.map(function(e) {
                var t = e.props,
                    n = t.w,
                    i = t.h,
                    r = {
                        left: o,
                        top: 0
                    };
                return o += n, s < i && (s = i), r
            });
        return n.updateHeight(s), r
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            i = t.FilteredItems,
            r = 0,
            o = i.map(function(e) {
                var t = e.props.h,
                    n = {
                        left: 0,
                        top: r
                    };
                return r += t, n
            });
        return n.updateHeight(r), o
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            i = t.FilteredItems,
            r = n.props.w,
            o = i[0].props.h,
            s = 0,
            a = 0,
            l = i.map(function(e) {
                var t = e.props.w;
                r < a + t && (s++, a = 0);
                var n = {
                    left: a,
                    top: o * s
                };
                return a += t, n
            });
        return n.updateHeight((s + 1) * i[0].props.h), l
    }
}, function(e, t, n) {
    "use strict";
    var u = function(e, t, n) {
        if (t <= 0) return 0;
        var i = 0;
        if (n < t - 1) return 0;
        for (n -= t; 0 <= n;) i += e[n].props.h, n -= t;
        return i
    };
    t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            s = t.FilteredItems,
            a = n.calcColumns(),
            l = 0,
            c = Array.apply(null, Array(a)).map(Number.prototype.valueOf, 0),
            i = s.map(function(e, t) {
                var n = e.props,
                    i = n.w,
                    r = n.h;
                t % a == 0 && a <= t && l++;
                var o = t - a * l;
                return c[o] += r, {
                    left: o * i,
                    top: u(s, a, t)
                }
            });
        return n.updateHeight(Math.max.apply(Math, function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }(c))), i
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            i = t.FilteredItems,
            r = n.calcColumns(),
            o = 0,
            s = i.map(function(e, t) {
                return t % r == 0 && r <= t && o++, {
                    left: (t - r * o) * e.props.w,
                    top: o * e.props.h
                }
            }),
            a = i[0] && i[0].props.h || 0;
        return n.updateHeight((o + 1) * a), s
    }
}, function(e, t, n) {
    "use strict";
    var a = function(e) {
        this.init(e)
    };
    a.prototype = {
        init: function(e) {
            this.root = {
                x: 0,
                y: 0,
                w: e
            }
        },
        fit: function(e) {
            var t, n, i, r = e.length,
                o = 0 < r ? e[0].h : 0;
            for (this.root.h = o, t = 0; t < r; t++) i = e[t], (n = this.findNode(this.root, i.w, i.h)) ? i.fit = this.splitNode(n, i.w, i.h) : i.fit = this.growDown(i.w, i.h)
        },
        findNode: function(e, t, n) {
            return e.used ? this.findNode(e.right, t, n) || this.findNode(e.down, t, n) : t <= e.w && n <= e.h ? e : null
        },
        splitNode: function(e, t, n) {
            return e.used = !0, e.down = {
                x: e.x,
                y: e.y + n,
                w: e.w,
                h: e.h - n
            }, e.right = {
                x: e.x + t,
                y: e.y,
                w: e.w - t,
                h: n
            }, e
        },
        growDown: function(e, t) {
            var n;
            return this.root = {
                used: !0,
                x: 0,
                y: 0,
                w: this.root.w,
                h: this.root.h + t,
                down: {
                    x: 0,
                    y: this.root.h,
                    w: this.root.w,
                    h: t
                },
                right: this.root
            }, (n = this.findNode(this.root, e, t)) ? this.splitNode(n, e, t) : null
        }
    }, t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            i = t.FilteredItems,
            r = new a(n.props.w),
            o = i.map(function(e) {
                var t = e.props;
                return {
                    w: t.w,
                    h: t.h
                }
            });
        r.fit(o);
        var s = o.map(function(e) {
            var t = e.fit;
            return {
                left: t.x,
                top: t.y
            }
        });
        return n.updateHeight(r.root.h), s
    }
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        String.prototype.includes || (String.prototype.includes = function(e, t) {
            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e, t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var n, i, r = Object(this),
                    o = r.length >>> 0;
                if (0 == o) return !1;
                for (var s = 0 | t, a = Math.max(0 <= s ? s : o - Math.abs(s), 0); a < o;) {
                    if ((n = r[a]) === (i = e) || "number" == typeof n && "number" == typeof i && isNaN(n) && isNaN(i)) return !0;
                    a++
                }
                return !1
            }
        })
    }
}, function(e, t, n) {}]),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Fuse", [], t) : "object" == typeof exports ? exports.Fuse = t() : e.Fuse = t()
}(this, function() {
    return r = {}, i.m = n = [function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, function(e, t, n) {
        "use strict";
        var i = function(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            },
            u = n(5),
            d = n(7),
            y = n(4),
            r = (i(b, [{
                key: "search",
                value: function(e) {
                    if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                        isMatch: !0,
                        score: 0,
                        matchedIndices: [
                            [0, e.length - 1]
                        ]
                    };
                    var t = this.options,
                        n = t.maxPatternLength,
                        i = t.tokenSeparator;
                    if (this.pattern.length > n) return u(e, this.pattern, i);
                    var r = this.options,
                        o = r.location,
                        s = r.distance,
                        a = r.threshold,
                        l = r.findAllMatches,
                        c = r.minMatchCharLength;
                    return d(e, this.pattern, this.patternAlphabet, {
                        location: o,
                        distance: s,
                        threshold: a,
                        findAllMatches: l,
                        minMatchCharLength: c
                    })
                }
            }]), b);

        function b(e, t) {
            var n = t.location,
                i = void 0 === n ? 0 : n,
                r = t.distance,
                o = void 0 === r ? 100 : r,
                s = t.threshold,
                a = void 0 === s ? .6 : s,
                l = t.maxPatternLength,
                c = void 0 === l ? 32 : l,
                u = t.isCaseSensitive,
                d = void 0 !== u && u,
                f = t.tokenSeparator,
                p = void 0 === f ? / +/g : f,
                h = t.findAllMatches,
                g = void 0 !== h && h,
                m = t.minMatchCharLength,
                v = void 0 === m ? 1 : m;
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, b), this.options = {
                location: i,
                distance: o,
                threshold: a,
                maxPatternLength: c,
                isCaseSensitive: d,
                tokenSeparator: p,
                findAllMatches: g,
                minMatchCharLength: v
            }, this.pattern = this.options.isCaseSensitive ? e : e.toLowerCase(), this.pattern.length <= c && (this.patternAlphabet = y(this.pattern))
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var u = n(0);
        e.exports = function(e, t) {
            return function e(t, n, i) {
                if (n) {
                    var r = n.indexOf("."),
                        o = n,
                        s = null; - 1 !== r && (o = n.slice(0, r), s = n.slice(r + 1));
                    var a = t[o];
                    if (null != a)
                        if (s || "string" != typeof a && "number" != typeof a)
                            if (u(a))
                                for (var l = 0, c = a.length; l < c; l += 1) e(a[l], s, i);
                            else s && e(a, s, i);
                    else i.push(a.toString())
                } else i.push(t);
                return i
            }(e, t, [])
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function() {
            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, n = [], i = -1, r = -1, o = 0, s = e.length; o < s; o += 1) {
                var a = e[o];
                a && -1 === i ? i = o : a || -1 === i || (t <= (r = o - 1) - i + 1 && n.push([i, r]), i = -1)
            }
            return e[o - 1] && t <= o - i && n.push([i, o - 1]), n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            for (var t = {}, n = e.length, i = 0; i < n; i += 1) t[e.charAt(i)] = 0;
            for (var r = 0; r < n; r += 1) t[e.charAt(r)] |= 1 << n - r - 1;
            return t
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : / +/g,
                i = new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").replace(n, "|")),
                r = e.match(i),
                o = !!r,
                s = [];
            if (o)
                for (var a = 0, l = r.length; a < l; a += 1) {
                    var c = r[a];
                    s.push([e.indexOf(c), c.length - 1])
                }
            return {
                score: o ? .5 : 1,
                isMatch: o,
                matchedIndices: s
            }
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n = t.errors,
                i = void 0 === n ? 0 : n,
                r = t.currentLocation,
                o = void 0 === r ? 0 : r,
                s = t.expectedLocation,
                a = void 0 === s ? 0 : s,
                l = t.distance,
                c = void 0 === l ? 100 : l,
                u = i / e.length,
                d = Math.abs(a - o);
            return c ? u + d / c : d ? 1 : u
        }
    }, function(e, t, n) {
        "use strict";
        var P = n(6),
            F = n(3);
        e.exports = function(e, t, n, i) {
            for (var r = i.location, o = void 0 === r ? 0 : r, s = i.distance, a = void 0 === s ? 100 : s, l = i.threshold, c = void 0 === l ? .6 : l, u = i.findAllMatches, d = void 0 !== u && u, f = i.minMatchCharLength, p = void 0 === f ? 1 : f, h = o, g = e.length, m = c, v = e.indexOf(t, h), y = t.length, b = [], w = 0; w < g; w += 1) b[w] = 0;
            if (-1 !== v) {
                var T = P(t, {
                    errors: 0,
                    currentLocation: v,
                    expectedLocation: h,
                    distance: a
                });
                if (m = Math.min(T, m), -1 !== (v = e.lastIndexOf(t, h + y))) {
                    var k = P(t, {
                        errors: 0,
                        currentLocation: v,
                        expectedLocation: h,
                        distance: a
                    });
                    m = Math.min(k, m)
                }
            }
            v = -1;
            for (var S = [], x = 1, _ = y + g, C = 1 << y - 1, E = 0; E < y; E += 1) {
                for (var A = 0, I = _; A < I;) P(t, {
                    errors: E,
                    currentLocation: h + I,
                    expectedLocation: h,
                    distance: a
                }) <= m ? A = I : _ = I, I = Math.floor((_ - A) / 2 + A);
                _ = I;
                var O = Math.max(1, h - I + 1),
                    D = d ? g : Math.min(h + I, g) + y,
                    N = Array(D + 2);
                N[D + 1] = (1 << E) - 1;
                for (var j = D; O <= j; --j) {
                    var $ = j - 1,
                        L = n[e.charAt($)];
                    if (L && (b[$] = 1), N[j] = (N[j + 1] << 1 | 1) & L, 0 !== E && (N[j] |= (S[j + 1] | S[j]) << 1 | 1 | S[j + 1]), N[j] & C && (x = P(t, {
                            errors: E,
                            currentLocation: $,
                            expectedLocation: h,
                            distance: a
                        })) <= m) {
                        if (m = x, (v = $) <= h) break;
                        O = Math.max(1, 2 * h - v)
                    }
                }
                if (P(t, {
                        errors: E + 1,
                        currentLocation: h,
                        expectedLocation: h,
                        distance: a
                    }) > m) break;
                S = N
            }
            return {
                isMatch: 0 <= v,
                score: 0 === x ? .001 : x,
                matchedIndices: F(b, p)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var i = function(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), e
            },
            o = n(1),
            M = n(2),
            P = n(0),
            r = (i(H, [{
                key: "setCollection",
                value: function(e) {
                    return this.list = e
                }
            }, {
                key: "search",
                value: function(e) {
                    this._log('---------\nSearch pattern: "' + e + '"');
                    var t = this._prepareSearchers(e),
                        n = t.tokenSearchers,
                        i = t.fullSearcher,
                        r = this._search(n, i),
                        o = r.weights,
                        s = r.results;
                    return this._computeScore(o, s), this.options.shouldSort && this._sort(s), this._format(s)
                }
            }, {
                key: "_prepareSearchers",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = [];
                    if (this.options.tokenize)
                        for (var n = e.split(this.options.tokenSeparator), i = 0, r = n.length; i < r; i += 1) t.push(new o(n[i], this.options));
                    return {
                        tokenSearchers: t,
                        fullSearcher: new o(e, this.options)
                    }
                }
            }, {
                key: "_search",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments[1],
                        n = this.list,
                        i = {},
                        r = [];
                    if ("string" == typeof n[0]) {
                        for (var o = 0, s = n.length; o < s; o += 1) this._analyze({
                            key: "",
                            value: n[o],
                            record: o,
                            index: o
                        }, {
                            resultMap: i,
                            results: r,
                            tokenSearchers: e,
                            fullSearcher: t
                        });
                        return {
                            weights: null,
                            results: r
                        }
                    }
                    for (var a = {}, l = 0, c = n.length; l < c; l += 1)
                        for (var u = n[l], d = 0, f = this.options.keys.length; d < f; d += 1) {
                            var p = this.options.keys[d];
                            if ("string" != typeof p) {
                                if (a[p.name] = {
                                        weight: 1 - p.weight || 1
                                    }, p.weight <= 0 || 1 < p.weight) throw new Error("Key weight has to be > 0 and <= 1");
                                p = p.name
                            } else a[p] = {
                                weight: 1
                            };
                            this._analyze({
                                key: p,
                                value: this.options.getFn(u, p),
                                record: u,
                                index: l
                            }, {
                                resultMap: i,
                                results: r,
                                tokenSearchers: e,
                                fullSearcher: t
                            })
                        }
                    return {
                        weights: a,
                        results: r
                    }
                }
            }, {
                key: "_analyze",
                value: function(e, t) {
                    var n = e.key,
                        i = e.arrayIndex,
                        r = void 0 === i ? -1 : i,
                        o = e.value,
                        s = e.record,
                        a = e.index,
                        l = t.tokenSearchers,
                        c = void 0 === l ? [] : l,
                        u = t.fullSearcher,
                        d = void 0 === u ? [] : u,
                        f = t.resultMap,
                        p = void 0 === f ? {} : f,
                        h = t.results,
                        g = void 0 === h ? [] : h;
                    if (null != o) {
                        var m = !1,
                            v = -1,
                            y = 0;
                        if ("string" == typeof o) {
                            this._log("\nKey: " + ("" === n ? "-" : n));
                            var b = d.search(o);
                            if (this._log('Full text: "' + o + '", score: ' + b.score), this.options.tokenize) {
                                for (var w = o.split(this.options.tokenSeparator), T = [], k = 0; k < c.length; k += 1) {
                                    var S = c[k];
                                    this._log('\nPattern: "' + S.pattern + '"');
                                    for (var x = !1, _ = 0; _ < w.length; _ += 1) {
                                        var C = w[_],
                                            E = S.search(C),
                                            A = {};
                                        E.isMatch ? (A[C] = E.score, x = m = !0, T.push(E.score)) : (A[C] = 1, this.options.matchAllTokens || T.push(1)), this._log('Token: "' + C + '", score: ' + A[C])
                                    }
                                    x && (y += 1)
                                }
                                v = T[0];
                                for (var I = T.length, O = 1; O < I; O += 1) v += T[O];
                                v /= I, this._log("Token score average:", v)
                            }
                            var D = b.score; - 1 < v && (D = (D + v) / 2), this._log("Score average:", D);
                            var N = !this.options.tokenize || !this.options.matchAllTokens || y >= c.length;
                            if (this._log("\nCheck Matches: " + N), (m || b.isMatch) && N) {
                                var j = p[a];
                                j ? j.output.push({
                                    key: n,
                                    arrayIndex: r,
                                    value: o,
                                    score: D,
                                    matchedIndices: b.matchedIndices
                                }) : (p[a] = {
                                    item: s,
                                    output: [{
                                        key: n,
                                        arrayIndex: r,
                                        value: o,
                                        score: D,
                                        matchedIndices: b.matchedIndices
                                    }]
                                }, g.push(p[a]))
                            }
                        } else if (P(o))
                            for (var $ = 0, L = o.length; $ < L; $ += 1) this._analyze({
                                key: n,
                                arrayIndex: $,
                                value: o[$],
                                record: s,
                                index: a
                            }, {
                                resultMap: p,
                                results: g,
                                tokenSearchers: c,
                                fullSearcher: d
                            })
                    }
                }
            }, {
                key: "_computeScore",
                value: function(e, t) {
                    this._log("\n\nComputing score:\n");
                    for (var n = 0, i = t.length; n < i; n += 1) {
                        for (var r = t[n].output, o = r.length, s = 0, a = 1, l = 0; l < o; l += 1) {
                            var c = e ? e[r[l].key].weight : 1,
                                u = (1 === c ? r[l].score : r[l].score || .001) * c;
                            1 !== c ? a = Math.min(a, u) : s += r[l].nScore = u
                        }
                        t[n].score = 1 === a ? s / o : a, this._log(t[n])
                    }
                }
            }, {
                key: "_sort",
                value: function(e) {
                    this._log("\n\nSorting...."), e.sort(this.options.sortFn)
                }
            }, {
                key: "_format",
                value: function(e) {
                    var t = [];
                    this._log("\n\nOutput:\n\n", JSON.stringify(e));
                    var n = [];
                    this.options.includeMatches && n.push(function(e, t) {
                        var n = e.output;
                        t.matches = [];
                        for (var i = 0, r = n.length; i < r; i += 1) {
                            var o = n[i];
                            if (0 !== o.matchedIndices.length) {
                                var s = {
                                    indices: o.matchedIndices,
                                    value: o.value
                                };
                                o.key && (s.key = o.key), o.hasOwnProperty("arrayIndex") && -1 < o.arrayIndex && (s.arrayIndex = o.arrayIndex), t.matches.push(s)
                            }
                        }
                    }), this.options.includeScore && n.push(function(e, t) {
                        t.score = e.score
                    });
                    for (var i = 0, r = e.length; i < r; i += 1) {
                        var o = e[i];
                        if (this.options.id && (o.item = this.options.getFn(o.item, this.options.id)[0]), n.length) {
                            for (var s = {
                                    item: o.item
                                }, a = 0, l = n.length; a < l; a += 1) n[a](o, s);
                            t.push(s)
                        } else t.push(o.item)
                    }
                    return t
                }
            }, {
                key: "_log",
                value: function() {
                    var e;
                    this.options.verbose && (e = console).log.apply(e, arguments)
                }
            }]), H);

        function H(e, t) {
            var n = t.location,
                i = void 0 === n ? 0 : n,
                r = t.distance,
                o = void 0 === r ? 100 : r,
                s = t.threshold,
                a = void 0 === s ? .6 : s,
                l = t.maxPatternLength,
                c = void 0 === l ? 32 : l,
                u = t.caseSensitive,
                d = void 0 !== u && u,
                f = t.tokenSeparator,
                p = void 0 === f ? / +/g : f,
                h = t.findAllMatches,
                g = void 0 !== h && h,
                m = t.minMatchCharLength,
                v = void 0 === m ? 1 : m,
                y = t.id,
                b = void 0 === y ? null : y,
                w = t.keys,
                T = void 0 === w ? [] : w,
                k = t.shouldSort,
                S = void 0 === k || k,
                x = t.getFn,
                _ = void 0 === x ? M : x,
                C = t.sortFn,
                E = void 0 === C ? function(e, t) {
                    return e.score - t.score
                } : C,
                A = t.tokenize,
                I = void 0 !== A && A,
                O = t.matchAllTokens,
                D = void 0 !== O && O,
                N = t.includeMatches,
                j = void 0 !== N && N,
                $ = t.includeScore,
                L = void 0 !== $ && $,
                P = t.verbose,
                F = void 0 !== P && P;
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, H), this.options = {
                location: i,
                distance: o,
                threshold: a,
                maxPatternLength: c,
                isCaseSensitive: d,
                tokenSeparator: p,
                findAllMatches: g,
                minMatchCharLength: v,
                id: b,
                keys: T,
                includeMatches: j,
                includeScore: L,
                shouldSort: S,
                getFn: _,
                sortFn: E,
                verbose: F,
                tokenize: I,
                matchAllTokens: D
            }, this.setCollection(e)
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        e.exports = r
    }], i.c = r, i.i = function(e) {
        return e
    }, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 8);

    function i(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var n, r
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.Mark = t(e.jQuery)
}(this, function(e) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e;

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        t = function(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e
        },
        n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        o = (t(c, [{
            key: "getContexts",
            value: function() {
                var n = [];
                return (void 0 !== this.ctx && this.ctx ? NodeList.prototype.isPrototypeOf(this.ctx) ? Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? this.ctx : "string" == typeof this.ctx ? Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : [this.ctx] : []).forEach(function(t) {
                    var e = 0 < n.filter(function(e) {
                        return e.contains(t)
                    }).length; - 1 !== n.indexOf(t) || e || n.push(t)
                }), n
            }
        }, {
            key: "getIframeContents",
            value: function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                    i = void 0;
                try {
                    var r = e.contentWindow;
                    if (i = r.document, !r || !i) throw new Error("iframe inaccessible")
                } catch (e) {
                    n()
                }
                i && t(i)
            }
        }, {
            key: "isIframeBlank",
            value: function(e) {
                var t = e.getAttribute("src").trim();
                return "about:blank" === e.contentWindow.location.href && "about:blank" !== t && t
            }
        }, {
            key: "observeIframeLoad",
            value: function(e, t, n) {
                function i() {
                    if (!o) {
                        o = !0, clearTimeout(s);
                        try {
                            r.isIframeBlank(e) || (e.removeEventListener("load", i), r.getIframeContents(e, t, n))
                        } catch (e) {
                            n()
                        }
                    }
                }
                var r = this,
                    o = !1,
                    s = null;
                e.addEventListener("load", i), s = setTimeout(i, this.iframesTimeout)
            }
        }, {
            key: "onIframeReady",
            value: function(e, t, n) {
                try {
                    "complete" === e.contentWindow.document.readyState ? this.isIframeBlank(e) ? this.observeIframeLoad(e, t, n) : this.getIframeContents(e, t, n) : this.observeIframeLoad(e, t, n)
                } catch (e) {
                    n()
                }
            }
        }, {
            key: "waitForIframes",
            value: function(e, t) {
                var n = this,
                    i = 0;
                this.forEachIframe(e, function() {
                    return !0
                }, function(e) {
                    i++, n.waitForIframes(e.querySelector("html"), function() {
                        --i || t()
                    })
                }, function(e) {
                    e || t()
                })
            }
        }, {
            key: "forEachIframe",
            value: function(e, n, i) {
                var r = this,
                    t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                    o = e.querySelectorAll("iframe"),
                    s = o.length,
                    a = 0;

                function l() {
                    --s <= 0 && t(a)
                }
                o = Array.prototype.slice.call(o), s || l(), o.forEach(function(t) {
                    c.matches(t, r.exclude) ? l() : r.onIframeReady(t, function(e) {
                        n(t) && (a++, i(e)), l()
                    }, l)
                })
            }
        }, {
            key: "createIterator",
            value: function(e, t, n) {
                return document.createNodeIterator(e, t, n, !1)
            }
        }, {
            key: "createInstanceOnIframe",
            value: function(e) {
                return new c(e.querySelector("html"), this.iframes)
            }
        }, {
            key: "compareNodeIframe",
            value: function(e, t, n) {
                if (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING) {
                    if (null === t) return !0;
                    if (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING) return !0
                }
                return !1
            }
        }, {
            key: "getIteratorNode",
            value: function(e) {
                var t = e.previousNode();
                return {
                    prevNode: t,
                    node: null === t ? e.nextNode() : e.nextNode() && e.nextNode()
                }
            }
        }, {
            key: "checkIframeFilter",
            value: function(e, t, n, i) {
                var r = !1,
                    o = !1;
                return i.forEach(function(e, t) {
                    e.val === n && (r = t, o = e.handled)
                }), this.compareNodeIframe(e, t, n) ? (!1 !== r || o ? !1 === r || o || (i[r].handled = !0) : i.push({
                    val: n,
                    handled: !0
                }), !0) : (!1 === r && i.push({
                    val: n,
                    handled: !1
                }), !1)
            }
        }, {
            key: "handleOpenIframes",
            value: function(e, t, n, i) {
                var r = this;
                e.forEach(function(e) {
                    e.handled || r.getIframeContents(e.val, function(e) {
                        r.createInstanceOnIframe(e).forEachNode(t, n, i)
                    })
                })
            }
        }, {
            key: "iterateThroughNodes",
            value: function(t, e, n, i, r) {
                for (var o, s = this, a = this.createIterator(e, t, i), l = [], c = [], u = void 0, d = void 0; o = s.getIteratorNode(a), d = o.prevNode, u = o.node;) this.iframes && this.forEachIframe(e, function(e) {
                    return s.checkIframeFilter(u, d, e, l)
                }, function(e) {
                    s.createInstanceOnIframe(e).forEachNode(t, function(e) {
                        return c.push(e)
                    }, i)
                }), c.push(u);
                c.forEach(function(e) {
                    n(e)
                }), this.iframes && this.handleOpenIframes(l, t, n, i), r()
            }
        }, {
            key: "forEachNode",
            value: function(n, i, r) {
                var o = this,
                    s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                    e = this.getContexts(),
                    a = e.length;
                a || s(), e.forEach(function(e) {
                    function t() {
                        o.iterateThroughNodes(n, e, i, r, function() {
                            --a <= 0 && s()
                        })
                    }
                    o.iframes ? o.waitForIframes(e, t) : t()
                })
            }
        }], [{
            key: "matches",
            value: function(t, e) {
                var n = "string" == typeof e ? [e] : e,
                    i = t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
                if (i) {
                    var r = !1;
                    return n.every(function(e) {
                        return !i.call(t, e) || !(r = !0)
                    }), r
                }
                return !1
            }
        }]), c),
        s = (t(a, [{
            key: "log",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "debug",
                    n = this.opt.log;
                this.opt.debug && "object" === (void 0 === n ? "undefined" : i(n)) && "function" == typeof n[t] && n[t]("mark.js: " + e)
            }
        }, {
            key: "escapeStr",
            value: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
        }, {
            key: "createRegExp",
            value: function(e) {
                return "disabled" !== this.opt.wildcards && (e = this.setupWildcardsRegExp(e)), e = this.escapeStr(e), Object.keys(this.opt.synonyms).length && (e = this.createSynonymsRegExp(e)), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)), this.opt.diacritics && (e = this.createDiacriticsRegExp(e)), e = this.createMergedBlanksRegExp(e), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.createJoinersRegExp(e)), "disabled" !== this.opt.wildcards && (e = this.createWildcardsRegExp(e)), this.createAccuracyRegExp(e)
            }
        }, {
            key: "createSynonymsRegExp",
            value: function(e) {
                var t = this.opt.synonyms,
                    n = this.opt.caseSensitive ? "" : "i",
                    i = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var o = t[r],
                            s = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(r) : this.escapeStr(r),
                            a = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(o) : this.escapeStr(o);
                        "" !== s && "" !== a && (e = e.replace(new RegExp("(" + this.escapeStr(s) + "|" + this.escapeStr(a) + ")", "gm" + n), i + "(" + this.processSynomyms(s) + "|" + this.processSynomyms(a) + ")" + i))
                    } return e
            }
        }, {
            key: "processSynomyms",
            value: function(e) {
                return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)), e
            }
        }, {
            key: "setupWildcardsRegExp",
            value: function(e) {
                return (e = e.replace(/(?:\\)*\?/g, function(e) {
                    return "\\" === e.charAt(0) ? "?" : ""
                })).replace(/(?:\\)*\*/g, function(e) {
                    return "\\" === e.charAt(0) ? "*" : ""
                })
            }
        }, {
            key: "createWildcardsRegExp",
            value: function(e) {
                var t = "withSpaces" === this.opt.wildcards;
                return e.replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*")
            }
        }, {
            key: "setupIgnoreJoinersRegExp",
            value: function(e) {
                return e.replace(/[^(|)\\]/g, function(e, t, n) {
                    var i = n.charAt(t + 1);
                    return /[(|)\\]/.test(i) || "" === i ? e : e + "\0"
                })
            }
        }, {
            key: "createJoinersRegExp",
            value: function(e) {
                var t = [],
                    n = this.opt.ignorePunctuation;
                return Array.isArray(n) && n.length && t.push(this.escapeStr(n.join(""))), this.opt.ignoreJoiners && t.push("\\u00ad\\u200b\\u200c\\u200d"), t.length ? e.split(/\u0000+/).join("[" + t.join("") + "]*") : e
            }
        }, {
            key: "createDiacriticsRegExp",
            value: function(n) {
                var i = this.opt.caseSensitive ? "" : "i",
                    e = this.opt.caseSensitive ? ["aàáảãạăằắẳẵặâầấẩẫậäåāą", "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćč", "CÇĆČ", "dđď", "DĐĎ", "eèéẻẽẹêềếểễệëěēę", "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïī", "IÌÍỈĨỊÎÏĪ", "lł", "LŁ", "nñňń", "NÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøō", "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rř", "RŘ", "sšśșş", "SŠŚȘŞ", "tťțţ", "TŤȚŢ", "uùúủũụưừứửữựûüůū", "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿ", "YÝỲỶỸỴŸ", "zžżź", "ZŽŻŹ"] : ["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćčCÇĆČ", "dđďDĐĎ", "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ", "lłLŁ", "nñňńNÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rřRŘ", "sšśșşSŠŚȘŞ", "tťțţTŤȚŢ", "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿYÝỲỶỸỴŸ", "zžżźZŽŻŹ"],
                    r = [];
                return n.split("").forEach(function(t) {
                    e.every(function(e) {
                        if (-1 !== e.indexOf(t)) {
                            if (-1 < r.indexOf(e)) return !1;
                            n = n.replace(new RegExp("[" + e + "]", "gm" + i), "[" + e + "]"), r.push(e)
                        }
                        return !0
                    })
                }), n
            }
        }, {
            key: "createMergedBlanksRegExp",
            value: function(e) {
                return e.replace(/[\s]+/gim, "[\\s]+")
            }
        }, {
            key: "createAccuracyRegExp",
            value: function(e) {
                var t = this,
                    n = this.opt.accuracy,
                    i = "string" == typeof n ? n : n.value,
                    r = "";
                switch (("string" == typeof n ? [] : n.limiters).forEach(function(e) {
                    r += "|" + t.escapeStr(e)
                }), i) {
                    case "partially":
                    default:
                        return "()(" + e + ")";
                    case "complementary":
                        return "()([^" + (r = "\\s" + (r || this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"))) + "]*" + e + "[^" + r + "]*)";
                    case "exactly":
                        return "(^|\\s" + r + ")(" + e + ")(?=$|\\s" + r + ")"
                }
            }
        }, {
            key: "getSeparatedKeywords",
            value: function(e) {
                var t = this,
                    n = [];
                return e.forEach(function(e) {
                    t.opt.separateWordSearch ? e.split(" ").forEach(function(e) {
                        e.trim() && -1 === n.indexOf(e) && n.push(e)
                    }) : e.trim() && -1 === n.indexOf(e) && n.push(e)
                }), {
                    keywords: n.sort(function(e, t) {
                        return t.length - e.length
                    }),
                    length: n.length
                }
            }
        }, {
            key: "isNumeric",
            value: function(e) {
                return Number(parseFloat(e)) == e
            }
        }, {
            key: "checkRanges",
            value: function(e) {
                var r = this;
                if (!Array.isArray(e) || "[object Object]" !== Object.prototype.toString.call(e[0])) return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(e), [];
                var o = [],
                    s = 0;
                return e.sort(function(e, t) {
                    return e.start - t.start
                }).forEach(function(e) {
                    var t = r.callNoMatchOnInvalidRanges(e, s),
                        n = t.start,
                        i = t.end;
                    t.valid && (e.start = n, e.length = i - n, o.push(e), s = i)
                }), o
            }
        }, {
            key: "callNoMatchOnInvalidRanges",
            value: function(e, t) {
                var n = void 0,
                    i = void 0,
                    r = !1;
                return e && void 0 !== e.start ? (i = (n = parseInt(e.start, 10)) + parseInt(e.length, 10), this.isNumeric(e.start) && this.isNumeric(e.length) && 0 < i - t && 0 < i - n ? r = !0 : (this.log("Ignoring invalid or overlapping range: " + JSON.stringify(e)), this.opt.noMatch(e))) : (this.log("Ignoring invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)), {
                    start: n,
                    end: i,
                    valid: r
                }
            }
        }, {
            key: "checkWhitespaceRanges",
            value: function(e, t, n) {
                var i = void 0,
                    r = !0,
                    o = n.length,
                    s = t - o,
                    a = parseInt(e.start, 10) - s;
                return (i = (a = o < a ? o : a) + parseInt(e.length, 10)) > o && (i = o, this.log("End range automatically set to the max value of " + o)), a < 0 || i - a < 0 || o < a || o < i ? (r = !1, this.log("Invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)) : "" === n.substring(a, i).replace(/\s+/g, "") && (r = !1, this.log("Skipping whitespace only range: " + JSON.stringify(e)), this.opt.noMatch(e)), {
                    start: a,
                    end: i,
                    valid: r
                }
            }
        }, {
            key: "getTextNodes",
            value: function(e) {
                var t = this,
                    n = "",
                    i = [];
                this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function(e) {
                    i.push({
                        start: n.length,
                        end: (n += e.textContent).length,
                        node: e
                    })
                }, function(e) {
                    return t.matchesExclude(e.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                }, function() {
                    e({
                        value: n,
                        nodes: i
                    })
                })
            }
        }, {
            key: "matchesExclude",
            value: function(e) {
                return o.matches(e, this.opt.exclude.concat(["script", "style", "title", "head", "html"]))
            }
        }, {
            key: "wrapRangeInTextNode",
            value: function(e, t, n) {
                var i = this.opt.element ? this.opt.element : "mark",
                    r = e.splitText(t),
                    o = r.splitText(n - t),
                    s = document.createElement(i);
                return s.setAttribute("data-markjs", "true"), this.opt.className && s.setAttribute("class", this.opt.className), s.textContent = r.textContent, r.parentNode.replaceChild(s, r), o
            }
        }, {
            key: "wrapRangeInMappedTextNode",
            value: function(a, l, c, u, d) {
                var f = this;
                a.nodes.every(function(e, n) {
                    var t = a.nodes[n + 1];
                    if (void 0 === t || t.start > l) {
                        if (!u(e.node)) return !1;
                        var i = l - e.start,
                            r = (c > e.end ? e.end : c) - e.start,
                            o = a.value.substr(0, e.start),
                            s = a.value.substr(r + e.start);
                        if (e.node = f.wrapRangeInTextNode(e.node, i, r), a.value = o + s, a.nodes.forEach(function(e, t) {
                                n <= t && (0 < a.nodes[t].start && t !== n && (a.nodes[t].start -= r), a.nodes[t].end -= r)
                            }), c -= r, d(e.node.previousSibling, e.start), !(c > e.end)) return !1;
                        l = e.end
                    }
                    return !0
                })
            }
        }, {
            key: "wrapMatches",
            value: function(r, e, o, s, t) {
                var a = this,
                    l = 0 === e ? 0 : e + 1;
                this.getTextNodes(function(e) {
                    e.nodes.forEach(function(e) {
                        e = e.node;
                        for (var t = void 0; null !== (t = r.exec(e.textContent)) && "" !== t[l];)
                            if (o(t[l], e)) {
                                var n = t.index;
                                if (0 !== l)
                                    for (var i = 1; i < l; i++) n += t[i].length;
                                e = a.wrapRangeInTextNode(e, n, n + t[l].length), s(e.previousSibling), r.lastIndex = 0
                            }
                    }), t()
                })
            }
        }, {
            key: "wrapMatchesAcrossElements",
            value: function(o, e, s, a, l) {
                var c = this,
                    u = 0 === e ? 0 : e + 1;
                this.getTextNodes(function(e) {
                    for (var t = void 0; null !== (t = o.exec(e.value)) && "" !== t[u];) {
                        var n = t.index;
                        if (0 !== u)
                            for (var i = 1; i < u; i++) n += t[i].length;
                        var r = n + t[u].length;
                        c.wrapRangeInMappedTextNode(e, n, r, function(e) {
                            return s(t[u], e)
                        }, function(e, t) {
                            o.lastIndex = t, a(e)
                        })
                    }
                    l()
                })
            }
        }, {
            key: "wrapRangeFromIndex",
            value: function(e, a, l, t) {
                var c = this;
                this.getTextNodes(function(o) {
                    var s = o.value.length;
                    e.forEach(function(t, n) {
                        var e = c.checkWhitespaceRanges(t, s, o.value),
                            i = e.start,
                            r = e.end;
                        e.valid && c.wrapRangeInMappedTextNode(o, i, r, function(e) {
                            return a(e, t, o.value.substring(i, r), n)
                        }, function(e) {
                            l(e, t)
                        })
                    }), t()
                })
            }
        }, {
            key: "unwrapMatches",
            value: function(e) {
                for (var t = e.parentNode, n = document.createDocumentFragment(); e.firstChild;) n.appendChild(e.removeChild(e.firstChild));
                t.replaceChild(n, e), this.ie ? this.normalizeTextNode(t) : t.normalize()
            }
        }, {
            key: "normalizeTextNode",
            value: function(e) {
                if (e) {
                    if (3 === e.nodeType)
                        for (; e.nextSibling && 3 === e.nextSibling.nodeType;) e.nodeValue += e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                    else this.normalizeTextNode(e.firstChild);
                    this.normalizeTextNode(e.nextSibling)
                }
            }
        }, {
            key: "markRegExp",
            value: function(e, t) {
                var n = this;
                this.opt = t, this.log('Searching with expression "' + e + '"');
                var i = 0,
                    r = "wrapMatches";
                this.opt.acrossElements && (r = "wrapMatchesAcrossElements"), this[r](e, this.opt.ignoreGroups, function(e, t) {
                    return n.opt.filter(t, e, i)
                }, function(e) {
                    i++, n.opt.each(e)
                }, function() {
                    0 === i && n.opt.noMatch(e), n.opt.done(i)
                })
            }
        }, {
            key: "mark",
            value: function(e, t) {
                var r = this;
                this.opt = t;
                var o = 0,
                    s = "wrapMatches",
                    n = this.getSeparatedKeywords("string" == typeof e ? [e] : e),
                    a = n.keywords,
                    l = n.length,
                    c = this.opt.caseSensitive ? "" : "i";
                this.opt.acrossElements && (s = "wrapMatchesAcrossElements"), 0 === l ? this.opt.done(o) : function e(n) {
                    var t = new RegExp(r.createRegExp(n), "gm" + c),
                        i = 0;
                    r.log('Searching with expression "' + t + '"'), r[s](t, 1, function(e, t) {
                        return r.opt.filter(t, n, o, i)
                    }, function(e) {
                        i++, o++, r.opt.each(e)
                    }, function() {
                        0 === i && r.opt.noMatch(n), a[l - 1] === n ? r.opt.done(o) : e(a[a.indexOf(n) + 1])
                    })
                }(a[0])
            }
        }, {
            key: "markRanges",
            value: function(e, t) {
                var r = this;
                this.opt = t;
                var n = 0,
                    i = this.checkRanges(e);
                i && i.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(i)), this.wrapRangeFromIndex(i, function(e, t, n, i) {
                    return r.opt.filter(e, t, n, i)
                }, function(e, t) {
                    n++, r.opt.each(e, t)
                }, function() {
                    r.opt.done(n)
                })) : this.opt.done(n)
            }
        }, {
            key: "unmark",
            value: function(e) {
                var i = this;
                this.opt = e;
                var r = this.opt.element ? this.opt.element : "*";
                r += "[data-markjs]", this.opt.className && (r += "." + this.opt.className), this.log('Removal selector "' + r + '"'), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function(e) {
                    i.unwrapMatches(e)
                }, function(e) {
                    var t = o.matches(e, r),
                        n = i.matchesExclude(e);
                    return !t || n ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                }, this.opt.done)
            }
        }, {
            key: "opt",
            set: function(e) {
                this._opt = n({}, {
                    element: "",
                    className: "",
                    exclude: [],
                    iframes: !1,
                    iframesTimeout: 5e3,
                    separateWordSearch: !0,
                    diacritics: !0,
                    synonyms: {},
                    accuracy: "partially",
                    acrossElements: !1,
                    caseSensitive: !1,
                    ignoreJoiners: !1,
                    ignoreGroups: 0,
                    ignorePunctuation: [],
                    wildcards: "disabled",
                    each: function() {},
                    noMatch: function() {},
                    filter: function() {
                        return !0
                    },
                    done: function() {},
                    debug: !1,
                    log: window.console
                }, e)
            },
            get: function() {
                return this._opt
            }
        }, {
            key: "iterator",
            get: function() {
                return new o(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout)
            }
        }]), a);

    function a(e) {
        r(this, a), this.ctx = e, this.ie = !1;
        var t = window.navigator.userAgent;
        (-1 < t.indexOf("MSIE") || -1 < t.indexOf("Trident")) && (this.ie = !0)
    }

    function c(e) {
        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 5e3;
        r(this, c), this.ctx = e, this.iframes = t, this.exclude = n, this.iframesTimeout = i
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return e.fn.mark = function(e, t) {
        return new s(this.get()).mark(e, t), this
    }, e.fn.markRegExp = function(e, t) {
        return new s(this.get()).markRegExp(e, t), this
    }, e.fn.markRanges = function(e, t) {
        return new s(this.get()).markRanges(e, t), this
    }, e.fn.unmark = function(e) {
        return new s(this.get()).unmark(e), this
    }, e
}), summaryInclude = 60;
var fuseOptions = {
        shouldSort: !0,
        includeMatches: !0,
        threshold: 0,
        tokenize: !0,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
            name: "title",
            weight: .8
        }, {
            name: "contents",
            weight: .5
        }, {
            name: "tags",
            weight: .3
        }, {
            name: "categories",
            weight: .3
        }]
    },
    searchQuery = param("s");

function executeSearch(n) {
    $.getJSON(indexURL, function(e) {
        var t = new Fuse(e, fuseOptions).search(n);
        console.log({
            matches: t
        }), 0 < t.length ? populateResults(t) : $("#search-results").append('<h3 class="text-center">No matches found</h3>')
    })
}

function populateResults(e) {
    $.each(e, function(n, e) {
        var i = e.item.contents,
            r = "",
            o = [];
        fuseOptions.tokenize ? o.push(searchQuery) : $.each(e.matches, function(e, t) {
            "tags" == t.key || "categories" == t.key ? o.push(t.value) : "contents" == t.key && (start = 0 < t.indices[0][0] - summaryInclude ? t.indices[0][0] - summaryInclude : 0, end = t.indices[0][1] + summaryInclude < i.length ? t.indices[0][1] + summaryInclude : i.length, r += i.substring(start, end), o.push(t.value.substring(t.indices[0][0], t.indices[0][1] - t.indices[0][0] + 1)))
        }), r.length < 1 && (r += i.substring(0, 2 * summaryInclude));
        var t = render($("#search-result-template").html(), {
            key: n,
            title: e.item.title,
            link: e.item.permalink,
            tags: e.item.tags,
            categories: e.item.categories,
            snippet: r
        });
        $("#search-results").append(t), $.each(o, function(e, t) {
            $("#summary-" + n).mark(t)
        })
    })
}

function param(e) {
    return decodeURIComponent((location.search.split(e + "=")[1] || "").split("&")[0]).replace(/\+/g, " ")
}

function render(e, t) {
    var n, i, r, o, s;
    for (i = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g, r = e; null !== (n = i.exec(e));) r = t[n[1]] ? r.replace(n[0], n[2]) : r.replace(n[0], "");
    for (o in e = r, t) s = new RegExp("\\$\\{\\s*" + o + "\\s*\\}", "g"), e = e.replace(s, t[o]);
    return e
}
searchQuery && ($("#search-query").val(searchQuery), executeSearch(searchQuery)),
    function(n) {
        "use strict";
        n(".hero-slider").slick({
            autoplay: !0,
            infinite: !0,
            autoplaySpeed: 1e4,
            arrows: !0,
            prevArrow: "<button type='button' class='prevArrow'><i class='ti-angle-left'></i></button>",
            nextArrow: "<button type='button' class='nextArrow'><i class='ti-angle-right'></i></button>",
            dots: !0,
            customPaging: function(e, t) {
                return "<a><span>" + n(e.$slides[t]).data("text") + "</span></a>"
            },
            responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: !1
                }
            }]
        }), n(".hero-slider").slickAnimation(), n(".hero-slider-2").slick({
            autoplay: !0,
            infinite: !0,
            arrows: !1,
            dots: !1
        }), n(".hero-slider-2").slickAnimation(), n(".work-slider").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: !1,
            autoplay: !0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: !0,
                    dots: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), n(".service").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: !0,
            autoplay: !0,
            prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !0
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), n(".about-slider").slick({
            arrows: !0,
            autoplay: !0,
            prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
        }), n(".post-slider").slick({
            arrows: !0,
            autoplay: !0,
            dots: !0,
            prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
        }), n(".collapse").on("shown.bs.collapse", function() {
            n(this).parent().find(".ti-plus").removeClass("ti-plus").addClass("ti-minus")
        }).on("hidden.bs.collapse", function() {
            n(this).parent().find(".ti-minus").removeClass("ti-minus").addClass("ti-plus")
        }), n(".testimonial-slider").slick({
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: !0,
            dots: !1,
            arrows: !1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), n(".client-logo-slider").slick({
            infinite: !0,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: !0,
            dots: !1,
            arrows: !1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), n(document).ready(function() {
            document.querySelector(".filtr-container") && n(".filtr-container").filterizr({}), n(".fltr-controls").on("click", function() {
                n(".fltr-controls").removeClass("active"), n(this).addClass("active")
            })
        }), n(".controls.list-inline li").on("click", function() {
            n(this).parent().find("li.active").removeClass("active"), n(this).addClass("active")
        }), jQuery.extend(jQuery.easing, {
            easeInOutExpo: function(e, t, n, i, r) {
                return 0 === t ? n : t === r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
            }
        }), n(".back-to-top").on("click", function(e) {
            e.preventDefault(), n("html,body").animate({
                scrollTop: 0
            }, 1500, "easeInOutExpo")
        }), n(window).resize(function() {
            980 <= n(window).width() && (n(".navbar .dropdown-toggle").hover(function() {
                n(this).parent().toggleClass("show"), n(this).parent().find(".dropdown-menu").toggleClass("show")
            }), n(".navbar .dropdown-menu").mouseleave(function() {
                n(this).removeClass("show")
            }))
        })
    }(jQuery);