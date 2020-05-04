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
        C = S.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        m = t.concat,
        l = t.push,
        o = t.indexOf,
        n = {},
        r = n.toString,
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
        var i, o = (t = t || C).createElement("script");
        if (o.text = e, n)
            for (i in u) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function k(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
    }
    var x = function(e, t) {
            return new x.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = k(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: "3.3.1",
        constructor: x,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(n) {
            return this.pushStack(x.map(this, function(e, t) {
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
    }, x.extend = x.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || b(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (r = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, x.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== r.call(e) || (t = i(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || s.call(n) !== c))
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
            if (p(e))
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
            return null != e && (p(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                s = [];
            if (p(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return m.apply([], s)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = t[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function(n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function o() {
            T()
        }
        var e, f, w, r, s, h, p, g, k, l, c, T, S, a, C, m, u, v, y, x = "sizzle" + +new Date,
            b = n.document,
            E = 0,
            i = 0,
            _ = se(),
            A = se(),
            O = se(),
            I = function(e, t) {
                return e === t && (c = !0), 0
            },
            N = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            L = t.push,
            j = t.push,
            $ = t.slice,
            P = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + F + "*(" + H + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + F + "*\\]",
            z = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            W = new RegExp(F + "+", "g"),
            q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            B = new RegExp("^" + F + "*," + F + "*"),
            U = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            K = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
            V = new RegExp(z),
            Q = new RegExp("^" + H + "$"),
            Y = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(t = $.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (n) {
            j = {
                apply: t.length ? function(e, t) {
                    L.apply(e, $.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, i) {
            var o, r, s, a, l, c, u, d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : b) !== S && T(t), t = t || S, C)) {
                if (11 !== p && (l = Z.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (d && (s = d.getElementById(o)) && y(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return j.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return j.apply(n, t.getElementsByClassName(o)), n
                    } if (f.qsa && !O[e + " "] && (!m || !m.test(e))) {
                    if (1 !== p) d = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ne, ie) : t.setAttribute("id", a = x), r = (c = h(e)).length; r--;) c[r] = "#" + a + " " + ve(c[r]);
                        u = c.join(","), d = ee.test(e) && ge(t.parentNode) || t
                    }
                    if (u) try {
                        return j.apply(n, d.querySelectorAll(u)), n
                    } catch (e) {} finally {
                        a === x && t.removeAttribute("id")
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
            return e[x] = !0, e
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

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function fe(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(s) {
            return ae(function(r) {
                return r = +r, ae(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = re.support = {}, s = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = re.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : b;
                return i !== S && 9 === i.nodeType && i.documentElement && (a = (S = i).documentElement, C = !s(S), b !== S && (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), f.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), f.getElementsByTagName = le(function(e) {
                    return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                }), f.getElementsByClassName = J.test(S.getElementsByClassName), f.getById = le(function(e) {
                    return a.appendChild(e).id = x, !S.getElementsByName || !S.getElementsByName(x).length
                }), f.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(te, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
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
                    if (void 0 !== t.getElementById && C) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), w.find.TAG = f.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, w.find.CLASS = f.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, u = [], m = [], (f.qsa = J.test(S.querySelectorAll)) && (le(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = S.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (f.matchesSelector = J.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function(e) {
                    f.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", z)
                }), m = m.length && new RegExp(m.join("|")), u = u.length && new RegExp(u.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === b && y(b, e) ? -1 : t === S || t.ownerDocument === b && y(b, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === S ? -1 : t === S ? 1 : o ? -1 : r ? 1 : l ? P(l, e) - P(l, t) : 0;
                    if (o === r) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ue(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0
                }), S
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== S && T(e), t = t.replace(K, "='$1']"), f.matchesSelector && C && !O[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t))) try {
                    var n = v.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < re(t, S, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== S && T(e), y(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== S && T(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && N.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== i ? i : f.attributes || !C ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, re.escape = function(e) {
                return (e + "").replace(ne, ie)
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(I), c) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, r = re.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (w = re.selectors = {
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
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
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
                        var t = _[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && _(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(e) {
                            var t = re.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(W, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, r, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                p = !n && !b,
                                f = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                        l = c = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && p) {
                                    for (f = (a = (i = (o = (r = (s = u)[x] || (s[x] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === E && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++f && s === e) {
                                            o[h] = [E, a, f];
                                            break
                                        }
                                } else if (p && (f = a = (i = (o = (r = (s = e)[x] || (s[x] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === E && i[1]), !1 === f)
                                    for (;
                                        (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[x] || (s[x] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [E, f]), s !== e)););
                                return (f -= m) === g || f % g == 0 && 0 <= f / g
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[x] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = P(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var i = [],
                            o = [],
                            a = p(e.replace(q, "$1"));
                        return a[x] ? ae(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(te, d),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                            }
                    }),
                    lang: ae(function(n) {
                        return Q.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, d).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
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
                    enabled: fe(!1),
                    disabled: fe(!0),
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
            }) w.pseudos[e] = pe(e);

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
                p = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, o, r, s = [E, p];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || d) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || d)
                            if (o = (r = e[x] || (e[x] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = o[u]) && i[0] === E && i[1] === p) return s[2] = i[2];
                                if ((o[u] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function be(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function we(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function ke(f, h, g, m, v, e) {
            return m && !m[x] && (m = ke(m)), v && !v[x] && (v = ke(v, e)), ae(function(e, t, n, i) {
                var o, r, s, a = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !f || !e && h ? u : we(u, a, f, n, i),
                    p = g ? v || (e ? f : c || m) ? [] : t : d;
                if (g && g(d, p, n, i), m)
                    for (o = we(p, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(d[r] = s);
                            v(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = v ? P(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else p = we(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : j.apply(t, p)
            })
        }

        function Te(e) {
            for (var o, t, n, i = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = ye(function(e) {
                    return e === o
                }, s, !0), c = ye(function(e) {
                    return -1 < P(o, e)
                }, s, !0), u = [function(e, t, n) {
                    var i = !r && (n || t !== k) || ((o = t).nodeType ? l : c)(e, t, n);
                    return o = null, i
                }]; a < i; a++)
                if (t = w.relative[e[a].type]) u = [ye(be(u), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[x]) {
                        for (n = ++a; n < i && !w.relative[e[n].type]; n++);
                        return ke(1 < a && be(u), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(q, "$1"), t, a < n && Te(e.slice(a, n)), n < i && Te(e = e.slice(n)), n < i && ve(e))
                    }
                    u.push(t)
                } return be(u)
        }

        function Se(m, v) {
            function e(e, t, n, i, o) {
                var r, s, a, l = 0,
                    c = "0",
                    u = e && [],
                    d = [],
                    p = k,
                    f = e || b && w.find.TAG("*", o),
                    h = E += null == p ? 1 : Math.random() || .1,
                    g = f.length;
                for (o && (k = t === S || t || o); c !== g && null != (r = f[c]); c++) {
                    if (b && r) {
                        for (s = 0, t || r.ownerDocument === S || (T(r), n = !C); a = m[s++];)
                            if (a(r, t || S, n)) {
                                i.push(r);
                                break
                            } o && (E = h)
                    }
                    y && ((r = !a && r) && l--, e && u.push(r))
                }
                if (l += c, y && c !== l) {
                    for (s = 0; a = v[s++];) a(u, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--;) u[c] || d[c] || (d[c] = D.call(i));
                        d = we(d)
                    }
                    j.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && re.uniqueSort(i)
                }
                return o && (E = h, k = p), u
            }
            var y = 0 < v.length,
                b = 0 < m.length;
            return y ? ae(e) : e
        }
        return me.prototype = w.filters = w.pseudos, w.setFilters = new me, h = re.tokenize = function(e, t) {
            var n, i, o, r, s, a, l, c = A[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = w.preFilter; s;) {
                for (r in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }), s = s.slice(n.length)), w.filter) !(i = Y[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : A(e, a).slice(0)
        }, p = re.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = O[e + " "];
            if (!r) {
                for (n = (t = t || h(e)).length; n--;)(r = Te(t[n]))[x] ? i.push(r) : o.push(r);
                (r = O(e, Se(o, i))).selector = e
            }
            return r
        }, g = re.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                u = !i && h(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && C && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(te, d), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(te, d), ee.test(r[0].type) && ge(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && ve(r))) return j.apply(n, i), n;
                        break
                    }
            }
            return (c || p(e, u))(i, t, !C, n, !t || ee.test(e) && ge(t.parentNode) || t), n
        }, f.sortStable = x.split("").sort(I).join("") === x, f.detectDuplicates = !!c, T(), f.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(M, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), re
    }(S);
    x.find = f, x.expr = f.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = f.uniqueSort, x.text = f.getText, x.isXMLDoc = f.isXML, x.contains = f.contains, x.escapeSelector = f.escape;

    function h(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && x(e).is(n)) break;
                i.push(e)
            } return i
    }

    function T(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var E = x.expr.match.needsContext;

    function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, n, i) {
        return b(n) ? x.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? x.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? x.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        }) : x.filter(n, e, i)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (x.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
            return 1 < i ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && E.test(e) ? x(e) : e || [], !1).length
        }
    });
    var I, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || I, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), A.test(i[1]) && x.isPlainObject(t))
                for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (o = C.getElementById(i[2])) && (this[0] = o, this.length = 1), this
    }).prototype = x.fn, I = x(C);
    var D = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && x(e);
            if (!E.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? x.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(x(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
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
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
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
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return _(e, "iframe") ? e.contentDocument : (_(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, function(i, o) {
        x.fn[i] = function(e, t) {
            var n = x.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = x.filter(t, n)), 1 < this.length && (L[i] || x.uniqueSort(n), D.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var $ = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function F(e, t, n, i) {
        var o;
        try {
            e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, x.each(e.match($) || [], function(e, t) {
            n[t] = !0
        }), n) : x.extend({}, i);

        function o() {
            for (a = a || i.once, s = r = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length;) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
            i.memory || (t = !1), r = !1, a && (l = t ? [] : "")
        }
        var r, t, s, a, l = [],
            c = [],
            u = -1,
            d = {
                add: function() {
                    return l && (t && !r && (u = l.length - 1, c.push(t)), function n(e) {
                        x.each(e, function(e, t) {
                            b(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== k(t) && n(t)
                        })
                    }(arguments), t && !r && o()), this
                },
                remove: function() {
                    return x.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = x.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, l) : 0 < l.length
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
                    return a = c = [], t || r || (l = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), r || o()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    }, x.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return x.Deferred(function(i) {
                            x.each(r, function(e, t) {
                                var n = b(o[t[4]]) && o[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function c(o, r, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? a ? t.call(e, c(l, r, P, a), c(l, r, M, a)) : (l++, t.call(e, c(l, r, P, a), c(l, r, M, a), c(l, r, P, r.notifyWith))) : (s !== P && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== M && (n = void 0, i = [e]), r.rejectWith(n, i))
                                        }
                                    };
                                o ? t() : (x.Deferred.getStackHook && (t.stackTrace = x.Deferred.getStackHook()), S.setTimeout(t))
                            }
                        }
                        return x.Deferred(function(e) {
                            r[0][3].add(c(0, e, b(i) ? i : P, e.notifyWith)), r[1][3].add(c(0, e, b(t) ? t : P)), r[2][3].add(c(0, e, b(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, s) : s
                    }
                },
                a = {};
            return x.each(r, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
                }
            }
            var n = arguments.length,
                i = n,
                o = Array(i),
                r = a.call(arguments),
                s = x.Deferred();
            if (n <= 1 && (F(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || b(r[i] && r[i].then))) return s.then();
            for (; i--;) F(r[i], t(i), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(e, t) {
        S.console && S.console.warn && e && H.test(e.name) && S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, x.readyException = function(e) {
        S.setTimeout(function() {
            throw e
        })
    };
    var R = x.Deferred();

    function z() {
        C.removeEventListener("DOMContentLoaded", z), S.removeEventListener("load", z), x.ready()
    }
    x.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            x.readyException(e)
        }), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || ((x.isReady = !0) !== e && 0 < --x.readyWait || R.resolveWith(C, [x]))
        }
    }), x.ready.then = R.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? S.setTimeout(x.ready) : (C.addEventListener("DOMContentLoaded", z), S.addEventListener("load", z));
    var W = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === k(n))
                for (a in o = !0, n) W(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, b(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                    return c.call(x(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        q = /^-ms-/,
        B = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function K(e) {
        return e.replace(q, "ms-").replace(B, U)
    }

    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Q() {
        this.expando = x.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[K(t)] = n;
            else
                for (i in t) o[K(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match($) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !x.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var Y = new Q,
        G = new Q,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : X.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
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
    }), x.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : W(this, function(e) {
                var t;
                if (r && void 0 === e) {
                    if (void 0 !== (t = G.get(r, n))) return t;
                    if (void 0 !== (t = Z(r, n))) return t
                } else this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = G.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = K(i.slice(5)), Z(r, i, o[i]));
                Y.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), x.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = x._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                x.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), x.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? x.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = x.queue(this, t, n);
                x._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1,
                r = x.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = Y.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });

    function ee(e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
        return o
    }
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        };

    function re(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            u = (x.cssNumber[t] || "px" !== c && +l) && ne.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) x.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, x.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var se = {};

    function ae(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Y.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && oe(i) && (o[r] = (d = c = l = void 0, c = (a = i).ownerDocument, u = a.nodeName, (d = se[u]) || (l = c.body.appendChild(c.createElement(u)), d = x.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), se[u] = d)))) : "none" !== n && (o[r] = "none", Y.set(i, "display", n)));
        var a, l, c, u, d;
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }
    x.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? x(this).show() : x(this).hide()
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

    function pe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && _(e, t) ? x.merge([e], n) : n
    }

    function fe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var he, ge, me = /<|&#?\w+;/;

    function ve(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === k(r)) x.merge(p, r.nodeType ? [r] : r);
                else if (me.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (ce.exec(r) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            x.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];)
            if (i && -1 < x.inArray(r, i)) o && o.push(r);
            else if (c = x.contains(r.ownerDocument, r), s = pe(d.appendChild(r), "script"), c && fe(s), n)
            for (u = 0; r = s[u++];) ue.test(r.type || "") && n.push(r);
        return d
    }
    he = C.createDocumentFragment().appendChild(C.createElement("div")), (ge = C.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var ye = C.documentElement,
        be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ke = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ce() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function xe(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) xe(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Se;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return x().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = x.guid++)), e.each(function() {
            x.event.add(this, t, o, i, n)
        })
    }
    x.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, m = Y.get(t);
            if (m)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(ye, o), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match($) || [""]).length; c--;) f = g = (a = ke.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = x.event.special[f] || {}, u = x.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match($) || [""]).length; c--;)
                    if (f = g = (a = ke.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = x.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || x.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) x.event.remove(e, f + t[c], n, i, !0);
                x.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = x.event.fix(e),
                l = new Array(arguments.length),
                c = (Y.get(this, "events") || {})[a.type] || [],
                u = x.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = x.event.handlers.call(this, a, c), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < x(o, this).index(c) : x.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(x.Event.prototype, t, {
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
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ce() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ce() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && _(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return _(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
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
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        x.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || x.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), x.fn.extend({
        on: function(e, t, n, i) {
            return xe(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return xe(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                x.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        _e = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) {
        return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (r = Y.access(e), s = Y.set(t, r), c = r.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) x.event.add(t, o, c[o][n]);
            G.hasData(e) && (a = G.access(e), l = x.extend({}, a), G.set(t, l))
        }
    }

    function je(n, i, o, r) {
        i = m.apply([], i);
        var e, t, s, a, l, c, u = 0,
            d = n.length,
            p = d - 1,
            f = i[0],
            h = b(f);
        if (h || 1 < d && "string" == typeof f && !y.checkClone && Ae.test(f)) return n.each(function(e) {
            var t = n.eq(e);
            h && (i[0] = f.call(this, e, t.html())), je(t, i, o, r)
        });
        if (d && (t = (e = ve(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = x.map(pe(e, "script"), Ne)).length; u < d; u++) l = e, u !== p && (l = x.clone(l, !0, !0), a && x.merge(s, pe(l, "script"))), o.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, x.map(s, De), u = 0; u < a; u++) l = s[u], ue.test(l.type || "") && !Y.access(l, "globalEval") && x.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(l.src) : w(l.textContent.replace(Oe, ""), c, l))
        }
        return n
    }

    function $e(e, t, n) {
        for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || x.cleanData(pe(i)), i.parentNode && (n && x.contains(i.ownerDocument, i) && fe(pe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ee, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                d = x.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = pe(u), i = 0, o = (r = pe(e)).length; i < o; i++) a = r[i], l = s[i], "input" === (c = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || pe(e), s = s || pe(u), i = 0, o = r.length; i < o; i++) Le(r[i], s[i]);
                else Le(e, u);
            return 0 < (s = pe(u, "script")).length && fe(s, !d && pe(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return $e(this, e, !0)
        },
        remove: function(e) {
            return $e(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return je(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return je(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !_e.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return je(this, arguments, function(e) {
                var t = this.parentNode;
                x.inArray(this, n) < 0 && (x.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        x.fn[e] = function(e) {
            for (var t, n = [], i = x(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), x(i[r])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe, Me, Fe, He, Re, ze, We, qe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Be = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = S), t.getComputedStyle(e)
        },
        Ue = new RegExp(ie.join("|"), "i");

    function Ke() {
        if (We) {
            ze.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", We.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(ze).appendChild(We);
            var e = S.getComputedStyle(We);
            Pe = "1%" !== e.top, Re = 12 === Ve(e.marginLeft), We.style.right = "60%", He = 36 === Ve(e.right), Me = 36 === Ve(e.width), We.style.position = "absolute", Fe = 36 === We.offsetWidth || "absolute", ye.removeChild(ze), We = null
        }
    }

    function Ve(e) {
        return Math.round(parseFloat(e))
    }

    function Qe(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || Be(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (s = x.style(e, t)), !y.pixelBoxStyles() && qe.test(s) && Ue.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function Ye(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    ze = C.createElement("div"), (We = C.createElement("div")).style && (We.style.backgroundClip = "content-box", We.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === We.style.backgroundClip, x.extend(y, {
        boxSizingReliable: function() {
            return Ke(), Me
        },
        pixelBoxStyles: function() {
            return Ke(), He
        },
        pixelPosition: function() {
            return Ke(), Pe
        },
        reliableMarginLeft: function() {
            return Ke(), Re
        },
        scrollboxSize: function() {
            return Ke(), Fe
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
        tt = C.createElement("div").style;

    function nt(e) {
        var t = x.cssProps[e];
        return t = t || (x.cssProps[e] = function(e) {
            if (e in tt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }

    function it(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ot(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += x.css(e, n + ie[s], !0, o)), i ? ("content" === n && (l -= x.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (l -= x.css(e, "border" + ie[s] + "Width", !0, o))) : (l += x.css(e, "padding" + ie[s], !0, o), "padding" !== n ? l += x.css(e, "border" + ie[s] + "Width", !0, o) : a += x.css(e, "border" + ie[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l
    }

    function rt(e, t, n) {
        var i = Be(e),
            o = Qe(e, t, i),
            r = "border-box" === x.css(e, "boxSizing", !1, i),
            s = r;
        if (qe.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return s = s && (y.boxSizingReliable() || o === e.style[t]), "auto" !== o && (parseFloat(o) || "inline" !== x.css(e, "display", !1, i)) || (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + ot(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function st(e, t, n, i, o) {
        return new st.prototype.init(e, t, n, i, o)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Qe(e, "opacity");
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
                var o, r, s, a = K(t),
                    l = Xe.test(t),
                    c = e.style;
                if (l || (t = nt(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (x.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = K(t);
            return Xe.test(t) || (t = nt(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Qe(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), x.each(["height", "width"], function(e, a) {
        x.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !Ge.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, a, n) : ee(e, Je, function() {
                    return rt(e, a, n)
                })
            },
            set: function(e, t, n) {
                var i, o = Be(e),
                    r = "border-box" === x.css(e, "boxSizing", !1, o),
                    s = n && ot(e, a, n, r, o);
                return r && y.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - ot(e, a, "border", !1, o) - .5)), s && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = x.css(e, a)), it(0, t, s)
            }
        }
    }), x.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        x.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ie[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== o && (x.cssHooks[o + r].set = it)
    }), x.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Be(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((x.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
        }
    }).init.prototype = st.prototype, (st.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = st.prototype.init, x.fx.step = {};
    var at, lt, ct, ut, dt = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;

    function ft() {
        lt && (!1 === C.hidden && S.requestAnimationFrame ? S.requestAnimationFrame(ft) : S.setTimeout(ft, x.fx.interval), x.fx.tick())
    }

    function ht() {
        return S.setTimeout(function() {
            at = void 0
        }), at = Date.now()
    }

    function gt(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function mt(e, t, n) {
        for (var i, o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function vt(r, e, t) {
        var n, s, i = 0,
            o = vt.prefilters.length,
            a = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = at || ht(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(r, [c, n, t]), n < 1 && o ? t : (o || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: x.extend({}, e),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: at || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = x.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = K(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = x.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); i < o; i++)
            if (n = vt.prefilters[i].call(c, r, u, c.opts)) return b(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return x.map(u, mt, c), b(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(vt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return re(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match($)).length; i < o; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                g = e.nodeType && oe(e),
                m = Y.get(e, "fxshow");
            for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, p.always(function() {
                    p.always(function() {
                        s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (o = t[i], dt.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || x.style(e, i)
                } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Y.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (ae([e], !0), c = e.style.display || c, u = x.css(e, "display"), ae([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (p.done(function() {
                        h.display = c
                    }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                    display: c
                }), r && (m.hidden = !g), g && ae([e], !0), p.done(function() {
                    for (i in g || ae([e]), Y.remove(e, "fxshow"), f) x.style(e, i, f[i])
                })), l = mt(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
        }
    }), x.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            b(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
        }, i
    }, x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function o() {
                var e = vt(this, x.extend({}, t), s);
                (r || Y.get(this, "finish")) && e.stop(!0)
            }
            var r = x.isEmptyObject(t),
                s = x.speed(e, n, i);
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(o, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = x.timers,
                    i = Y.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && pt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || x.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = x.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, x.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function(e, i) {
        var o = x.fn[i];
        x.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(gt(i, !0), e, t, n)
        }
    }), x.each({
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
        x.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), at = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        lt || (lt = !0, ft())
    }, x.fx.stop = function() {
        lt = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(i, e) {
        return i = x.fx && x.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = S.setTimeout(e, i);
            t.stop = function() {
                S.clearTimeout(n)
            }
        })
    }, ct = C.createElement("input"), ut = C.createElement("select").appendChild(C.createElement("option")), ct.type = "checkbox", y.checkOn = "" !== ct.value, y.optSelected = ut.selected, (ct = C.createElement("input")).value = "t", ct.type = "radio", y.radioValue = "t" === ct.value;
    var yt, bt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return W(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && _(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match($);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = bt[t] || x.find.attr;
        bt[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = bt[r], bt[r] = i, i = null != s(e, t, n) ? r : null, bt[r] = o), i
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        kt = /^(?:a|area)$/i;

    function Tt(e) {
        return (e.match($) || []).join(" ")
    }

    function St(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Ct(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match($) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return W(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                x(this).addClass(t.call(this, e, St(this)))
            });
            if ((e = Ct(t)).length)
                for (; n = this[l++];)
                    if (o = St(n), i = 1 === n.nodeType && " " + Tt(o) + " ") {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = Tt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                x(this).removeClass(t.call(this, e, St(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Ct(t)).length)
                for (; n = this[l++];)
                    if (o = St(n), i = 1 === n.nodeType && " " + Tt(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = Tt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(o, t) {
            var r = typeof o,
                s = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                x(this).toggleClass(o.call(this, e, St(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = x(this), i = Ct(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" != r || ((e = St(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + Tt(St(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    x.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, x(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = x.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = x.valHooks[t.type] || x.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : Tt(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !_(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < x.inArray(x.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        }, y.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in S;

    function Et(e) {
        e.stopPropagation()
    }
    var _t = /^(?:focusinfocus|focusoutblur)$/;
    x.extend(x.event, {
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, c, u, d, p = [n || C],
                f = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = d = s = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !_t.test(f + x.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[x.expando] ? e : new x.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : x.makeArray(t, [e]), u = x.event.special[f] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !g(n)) {
                    for (a = u.delegateType || f, _t.test(a + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), s = r;
                    s === (n.ownerDocument || C) && p.push(s.defaultView || s.parentWindow || S)
                }
                for (o = 0;
                    (r = p[o++]) && !e.isPropagationStopped();) d = r, e.type = 1 < o ? a : u.bindType || f, (c = (Y.get(r, "events") || {})[e.type] && Y.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && V(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
                return e.type = f, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), t) || !V(n) || l && b(n[f]) && !g(n) && ((s = n[l]) && (n[l] = null), x.event.triggered = f, e.isPropagationStopped() && d.addEventListener(f, Et), n[f](), e.isPropagationStopped() && d.removeEventListener(f, Et), x.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), y.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            x.event.simulate(i, e.target, x.event.fix(e))
        }
        x.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i);
                t || e.addEventListener(n, o, !0), Y.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i) - 1;
                t ? Y.access(e, i, t) : (e.removeEventListener(n, o, !0), Y.remove(e, i))
            }
        }
    });
    var At = S.location,
        Ot = Date.now(),
        It = /\?/;
    x.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new S.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
        Dt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function $t(n, e, i, o) {
        var t;
        if (Array.isArray(e)) x.each(e, function(e, t) {
            i || Nt.test(n) ? o(n, t) : $t(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== k(e)) o(n, e);
        else
            for (t in e) $t(n + "[" + t + "]", e[t], i, o)
    }
    x.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var i, o = [];
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) $t(i, e[i], t, n);
        return o.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && jt.test(this.nodeName) && !Lt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g,
        Mt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Wt = {},
        qt = {},
        Bt = "*/".concat("*"),
        Ut = C.createElement("a");

    function Kt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match($) || [];
            if (b(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function Vt(t, o, r, s) {
        var a = {},
            l = t === qt;

        function c(e) {
            var i;
            return a[e] = !0, x.each(t[e] || [], function(e, t) {
                var n = t(o, r, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(o.dataTypes[0]) || !a["*"] && c("*")
    }

    function Qt(e, t) {
        var n, i, o = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }
    Ut.href = At.href, x.extend({
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
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Qt(Qt(e, x.ajaxSettings), t) : Qt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Kt(Wt),
        ajaxTransport: Kt(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, p, n, f, i, h, g, o, r, m = x.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? x(v) : x.event,
                b = x.Deferred(),
                w = x.Callbacks("once memory"),
                k = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = Ht.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
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
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) k[t] = [k[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(T), m.url = ((e || m.url || At.href) + "").replace(zt, At.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match($) || [""], null == m.crossDomain) {
                i = C.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Ut.protocol + "//" + Ut.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = x.param(m.data, m.traditional)), Vt(Wt, m, t, T), h) return T;
            for (o in (g = x.event && m.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Rt.test(m.type), d = m.url.replace(Mt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Pt, "+")) : (r = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (It.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Ft, "$1"), r = (It.test(d) ? "&" : "?") + "_=" + Ot++ + r), m.url = d + r), m.ifModified && (x.lastModified[d] && T.setRequestHeader("If-Modified-Since", x.lastModified[d]), x.etag[d] && T.setRequestHeader("If-None-Match", x.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h)) return T.abort();
            if (l = "abort", w.add(m.complete), T.done(m.success), T.fail(m.error), u = Vt(qt, m, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [T, m]), h) return T;
                m.async && 0 < m.timeout && (f = S.setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, u.send(s, c)
                } catch (e) {
                    if (h) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, n, i) {
                var o, r, s, a, l, c = t;
                h || (h = !0, f && S.clearTimeout(f), u = void 0, p = i || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(m, T, n)), a = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, T, o), o ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (x.lastModified[d] = l), (l = T.getResponseHeader("etag")) && (x.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || c) + "", o ? b.resolveWith(v, [r, c, T]) : b.rejectWith(v, [T, c, s]), T.statusCode(k), k = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [T, m, o ? r : s]), w.fireWith(v, [T, c]), g && (y.trigger("ajaxComplete", [T, m]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function(e, o) {
        x[o] = function(e, t, n, i) {
            return b(t) && (i = i || n, n = t, t = void 0), x.ajax(x.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, x.isPlainObject(e) && e))
        }
    }), x._evalUrl = function(e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                x(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = x(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                x(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new S.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Gt = x.ajaxSettings.xhr();
    y.cors = !!Gt && "withCredentials" in Gt, y.ajax = Gt = !!Gt, x.ajaxTransport(function(o) {
        var r, s;
        if (y.cors || Gt && !o.crossDomain) return {
            send: function(e, t) {
                var n, i = o.xhr();
                if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                r = function(e) {
                    return function() {
                        r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Yt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && S.setTimeout(function() {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    i.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (r) throw e
                }
            },
            abort: function() {
                r && r()
            }
        }
    }), x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = x("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Xt, Jt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Jt.pop() || x.expando + "_" + Ot++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return r || x.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = S[i], S[i] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === o ? x(S).removeProp(i) : S[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)), r && b(o) && o(r[0]), r = o = void 0
        }), "script"
    }), y.createHTMLDocument = ((Xt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(i)) : t = C), r = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, r), r && r.length && x(r).remove(), x.merge([], o.childNodes)));
        var i, o, r
    }, x.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = Tt(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && x.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.expr.pseudos.animated = function(t) {
        return x.grep(x.timers, function(e) {
            return t === e.elem
        }).length
    }, x.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = x.css(e, "position"),
                u = x(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = x.css(e, "top"), l = x.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, x.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, x.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                x.offset.setOffset(this, t, e)
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
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), o.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - x.css(i, "marginTop", !0),
                    left: t.left - o.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        x.fn[t] = function(e) {
            return W(this, function(e, t, n) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[o] : e[t];
                i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), x.each(["top", "left"], function(e, n) {
        x.cssHooks[n] = Ye(y.pixelPosition, function(e, t) {
            if (t) return t = Qe(e, n), qe.test(t) ? x(e).position()[n] + "px" : t
        })
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        x.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            x.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, n) {
                    var i;
                    return g(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? x.css(e, t, o) : x.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        x.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
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
    }), x.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = a.call(arguments, 2), (o = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, o
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = _, x.isFunction = b, x.isWindow = g, x.camelCase = K, x.type = k, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var en = S.jQuery,
        tn = S.$;
    return x.noConflict = function(e) {
        return S.$ === x && (S.$ = tn), e && S.jQuery === x && (S.jQuery = en), x
    }, e || (S.jQuery = S.$ = x), x
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var o, s = window.Slick || {};
    (o = 0, s = function(e, t) {
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
        }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
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
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), 1 < a.options.rows) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = e * s + (t * a.options.slidesPerRow + n);
                        r.get(u) && c.appendChild(r.get(u))
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
        var n, i, o, r = this,
            s = !1,
            a = r.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint ? i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    }, s.prototype.changeSlide = function(e, t) {
        var n, i, o = this,
            r = c(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case "previous":
                i = 0 == n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
                break;
            case "next":
                i = 0 == n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
                break;
            case "index":
                var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
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
        var t, n, i, o, r = this,
            s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (s = e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
    }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, s.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (e = !1 === t.options.infinite ? t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, s.prototype.getSlick = function() {
        return this
    }, s.prototype.getSlideCount = function() {
        var n, i, o = this;
        return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - i + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return n = t, !1
        }), Math.abs(c(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
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
            o = n.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < n.slideCount
            });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = o.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }), -1 !== t && c(this).attr({
                "aria-describedby": "slick-slide-control" + n.instanceUid + t
            })
        }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = o[e];
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
                    i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, o.src = t
            })
        }
        var t, n, i, r = this;
        if (!0 === r.options.centerMode ? i = !0 === r.options.infinite ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
            for (var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(s)), o--, s++;
        e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
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
        var t, n, i, o, r, s = this,
            a = c("img[data-lazy]", s.$slider);
        a.length ? (t = a.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, n]), s.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad())
        }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
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
            o = i.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (e in i.respondTo = i.options.respondTo || "window", o)
                if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                    i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
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
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
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
        var e, t, n, i, o, r = this,
            s = !1;
        if ("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[1], s = arguments[2], "responsive" === (n = arguments[0]) && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
        else if ("multiple" === o) c.each(n, function(e, t) {
            r.options[e] = t
        });
        else if ("responsive" === o)
            for (t in i)
                if ("array" !== c.type(r.options.responsive)) r.options.responsive = [i[t]];
                else {
                    for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(i[t])
                } s && (r.unload(), r.reinit())
    }, s.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, s.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, s.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
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
        var i, o, r, s, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
                c.postSlide(i)
            }) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
            c.postSlide(i)
        }) : c.postSlide(i));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== n ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, s.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, s.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i || i <= 360 && 315 <= i ? !1 === o.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
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
        var t, n, i, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
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
            o = Array.prototype.slice.call(arguments, 1),
            r = n.length;
        for (e = 0; e < r; e++)
            if ("object" == typeof i || void 0 === i ? n[e].slick = new s(n[e], i) : t = n[e].slick[i].apply(n[e].slick, o), void 0 !== t) return t;
        return n
    }
}),
function(v) {
    v.fn.slickAnimation = function() {
        function d(e, t, n, i, o) {
            o = void 0 !== o && o, 1 == t.opacity ? (e.addClass(n), e.addClass(i)) : (e.removeClass(n), e.removeClass(i)), o && e.css(t)
        }

        function p(e, t) {
            return e ? 1e3 * e + 1e3 : t ? 1e3 * t : e || t ? 1e3 * e + 1e3 * t : 1e3
        }

        function f(e, t, n) {
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
                var o = i.attr("data-animation-in"),
                    r = i.attr("data-animation-out"),
                    s = i.attr("data-delay-in"),
                    a = i.attr("data-duration-in"),
                    l = i.attr("data-delay-out"),
                    c = i.attr("data-duration-out");
                r ? (0 < n.length && u.hasClass("slick-current") && (d(i, g, o, h, !0), s && f(i, "delay", s), a && f(i, "duration", a), setTimeout(function() {
                    d(i, m, o, h), d(i, g, r, h), l && f(i, "delay", l), c && f(i, "duration", c)
                }, p(s, a))), e.on("afterChange", function(e, t, n) {
                    u.hasClass("slick-current") && (d(i, g, o, h, !0), s && f(i, "delay", s), a && f(i, "duration", a), setTimeout(function() {
                        d(i, m, o, h), d(i, g, r, h), l && f(i, "delay", l), c && f(i, "duration", c)
                    }, p(s, a)))
                }), e.on("beforeChange", function(e, t, n) {
                    d(i, m, r, h, !0)
                })) : (0 < n.length && u.hasClass("slick-current") && (d(i, g, o, h, !0), s && f(i, "delay", s), a && f(i, "duration", a)), e.on("afterChange", function(e, t, n) {
                    u.hasClass("slick-current") && (d(i, g, o, h, !0), s && f(i, "delay", s), a && f(i, "duration", a))
                }), e.on("beforeChange", function(e, t, n) {
                    d(i, m, o, h, !0)
                }))
            })
        }), this
    }
}(jQuery),
function(n) {
    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var o = {};
    i.m = n, i.c = o, i.d = function(e, t, n) {
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
        return r
    }), n.d(t, "i", function() {
        return o
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
        return p
    }), n.d(t, "d", function() {
        return f
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
                for (var i = !1, o = e[n], r = 0; r < t.length; r++) o === t[r] && (i = !0);
                if (!i) return !1
            }
            return !0
        },
        r = function(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        },
        o = function e(t, n) {
            var i = r(n);
            for (var o in t) o in i ? "object" !== d(i[o]) || "object" !== d(t[o]) || Array.isArray(t[o]) || (i[o] = e("object" === d(i[o]) ? i[o] : {}, t[o])) : i[o] = t[o];
            return i
        },
        s = function(e, t) {
            return Array.prototype.filter.call(e, function(e) {
                return t.includes(e)
            })
        },
        a = function(n, i, o) {
            var r = void 0;
            return function() {
                var e = this,
                    t = arguments;
                clearTimeout(r), r = setTimeout(function() {
                    r = null, o || n.apply(e, t)
                }, i), o && !r && n.apply(e, t)
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
            return e.slice(0).sort((o = t, function(e, t) {
                var n = o(e),
                    i = o(t);
                return n < i ? -1 : i < n ? 1 : 0
            }));
            var o
        },
        p = function(e, t, n, i, o) {
            if (void 0 !== t) {
                var r = new Error('Filterizr: expected type of option "' + e + '" to be "' + n + '", but its type is: "' + (void 0 === t ? "undefined" : d(t)) + '"'),
                    s = !1,
                    a = !1,
                    l = n.includes("array");
                if ((void 0 === t ? "undefined" : d(t)).match(n) ? s = !0 : !s && l && (a = Array.isArray(t)), !s && !l) throw r;
                if (!s && l && !a) throw r;
                var c = function(e) {
                    return e ? " For further help read here: " + e : ""
                };
                if (Array.isArray(i)) {
                    var u = !1;
                    if (i.forEach(function(e) {
                            e === t && (u = !0)
                        }), !u) throw new Error('Filterizr: allowed values for option "' + e + '" are: ' + i.map(function(e) {
                        return '"' + e + '"'
                    }).join(", ") + '. Value received: "' + t + '".' + c(o))
                } else if (i instanceof RegExp) {
                    if (!t.match(i)) throw new Error('Filterizr: invalid value "' + t + '" for option "' + e + '" received.' + c(o))
                }
            }
        },
        f = /(^linear$)|(^ease-in-out$)|(^ease-in$)|(^ease-out$)|(^ease$)|(^step-start$)|(^step-end$)|(^steps\(\d\s*,\s*(end|start)\))$|(^cubic-bezier\((\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\))$/,
        h = "\n  webkitTransitionEnd.Filterizr \n  otransitionend.Filterizr \n  oTransitionEnd.Filterizr \n  msTransitionEnd.Filterizr \n  transitionend.Filterizr\n",
        g = {
            IDLE: "IDLE",
            FILTERING: "FILTERING",
            SORTING: "SORTING",
            SHUFFLING: "SHUFFLING"
        }
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = n(0),
        o = function(e, t, n) {
            return t && c(e.prototype, t), n && c(e, n), e
        },
        s = window.jQuery,
        a = (o(l, [{
            key: "destroy",
            value: function() {
                this.$node.attr("style", "").find(".filtr-item").attr("style", ""), this.unbindEvents()
            }
        }, {
            key: "getFilterItems",
            value: function(n) {
                return s.map(this.$node.find(".filtr-item"), function(e, t) {
                    return new r.a(s(e), t, n)
                })
            }
        }, {
            key: "push",
            value: function(e, t) {
                var n = this.props.FilterItems;
                this.$node.append(e);
                var i = n.length,
                    o = new r.a(e, i, t);
                this.props.FilterItems.push(o)
            }
        }, {
            key: "calcColumns",
            value: function() {
                return Math.round(this.props.w / this.props.FilterItems[0].props.w)
            }
        }, {
            key: "updateFilterItemsTransitionStyle",
            value: function(t, n, i, o) {
                this.props.FilterItems.forEach(function(e) {
                    return e.$node.css({
                        transition: "all " + t + "s " + n + " " + e.calcDelay(i, o) + "ms"
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
        o = (function(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
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
        var o, r = n.delay,
            s = n.delayMode,
            a = n.filterOutCss,
            l = n.animationDuration,
            c = n.easing;
        this.$node = e, this.props = {
            data: (delete(o = i.$node.data()).category, delete o.sort, o),
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
            transition: "all " + l + "s " + c + " " + this.calcDelay(r, s) + "ms"
        }), this.bindEvents()
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    t.a = o
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
        o = n(2),
        c = n(3),
        r = n(15);
    n.d(t, "Filterizr", function() {
        return l.a
    }), n.d(t, "FilterContainer", function() {
        return i.a
    }), n.d(t, "FilterItem", function() {
        return o.a
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
            Object(r.a)(), s.fn.filterizr = function() {
                var e = "." + s.trim(this.get(0).className).replace(/\s+/g, "."),
                    t = arguments;
                if (!this._fltr && 0 === t.length || 1 === t.length && "object" === d(t[0])) {
                    var n = 0 < t.length ? t[0] : c.a;
                    this._fltr = new l.a(e, n)
                } else if (1 <= t.length && "string" == typeof t[0]) {
                    var i = t[0],
                        o = Array.prototype.slice.call(t, 1),
                        r = this._fltr;
                    switch (i) {
                        case "filter":
                            return r.filter.apply(r, a(o)), this;
                        case "insertItem":
                            return r.insertItem.apply(r, a(o)), this;
                        case "toggleFilter":
                            return r.toggleFilter.apply(r, a(o)), this;
                        case "sort":
                            return r.sort.apply(r, a(o)), this;
                        case "shuffle":
                            return r.shuffle.apply(r, a(o)), this;
                        case "search":
                            return r.search.apply(r, a(o)), this;
                        case "setOptions":
                            return r.setOptions.apply(r, a(o)), this;
                        case "destroy":
                            return r.destroy.apply(r, a(o)), delete this._fltr, this;
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
        o = n(1),
        c = n(8),
        r = n(3),
        u = n(0),
        s = function(e, t, n) {
            return t && p(e.prototype, t), n && p(e, n), e
        },
        a = window.jQuery,
        l = (s(d, [{
            key: "filter",
            value: function(e) {
                var t = this.props,
                    n = t.searchTerm,
                    i = t.FilterContainer,
                    o = t.FilterItems;
                i.trigger("filteringStart"), this.props.filterizrState = u.a.FILTERING, e = Array.isArray(e) ? e.map(function(e) {
                    return e.toString()
                }) : e.toString();
                var r = this.searchFilterItems(this.filterFilterItems(o, e), n);
                this.props.FilteredItems = r, this.render(r)
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
                    o = n.FilterItems;
                i.trigger("sortingStart"), this.props.filterizrState = u.a.SORTING, this.props.FilterItems = this.sortFilterItems(o, e, t);
                var r = this.filterFilterItems(this.props.FilterItems, this.options.filter);
                this.props.FilteredItems = r, this.render(r)
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
                var o = this,
                    t = this.options,
                    r = t.filter,
                    n = t.filterInCss,
                    i = t.filterOutCss,
                    s = t.layout,
                    a = t.multifilterLogicalOperator;
                this.props.FilterItems.filter(function(e) {
                    var t = e.getCategories(),
                        n = Array.isArray(r),
                        i = e.contentsMatchSearch(o.props.searchTerm);
                    return !(n ? "or" === a ? Object(u.g)(t, r).length : Object(u.b)(r, t) : t.includes(r)) || !i
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
                    o = n.callbacks;
                t.unbindEvents(), t.bindEvents(o), t.bindTransitionEnd(function() {
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
        })(this, d), this.options = Object(u.i)(r.a, t);
        var n = new o.a(e, this.options);
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

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    t.a = l
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        o = function(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e
        },
        r = window.jQuery,
        s = (o(a, [{
            key: "setupFilterControls",
            value: function() {
                var e = this.props,
                    n = e.Filterizr,
                    t = e.selector;
                r(t + "[data-filter]").on("click.Filterizr", function(e) {
                    var t = r(e.currentTarget).attr("data-filter");
                    n.options.filter = t, n.filter(n.options.filter)
                }), r(t + "[data-multifilter]").on("click.Filterizr", function(e) {
                    var t = r(e.target).attr("data-multifilter");
                    n.toggleFilter(t)
                })
            }
        }, {
            key: "setupShuffleControls",
            value: function() {
                var e = this.props,
                    t = e.Filterizr,
                    n = e.selector;
                r(n + "[data-shuffle]").on("click.Filterizr", function() {
                    t.shuffle()
                })
            }
        }, {
            key: "setupSearchControls",
            value: function() {
                var e = this.props,
                    n = e.Filterizr,
                    t = e.selector;
                r(t + "[data-search]").on("keyup.Filterizr", Object(i.e)(function(e) {
                    var t = r(e.target).val();
                    n.props.searchTerm = t.toLowerCase(), n.search(n.props.searchTerm)
                }, 250))
            }
        }, {
            key: "setupSortControls",
            value: function() {
                var e = this.props,
                    t = e.Filterizr,
                    n = e.selector;
                r(n + "[data-sortAsc]").on("click.Filterizr", function() {
                    var e = r(n + "[data-sortOrder]").val();
                    t.props.sortOrder = "asc", t.sort(e, "asc")
                }), r(n + "[data-sortDesc]").on("click.Filterizr", function() {
                    var e = r(n + "[data-sortOrder]").val();
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
        o = n(10),
        r = n(11),
        s = n(12),
        a = n(13),
        l = n(14);
    t.a = function(e, t) {
        switch (e) {
            case "horizontal":
                return Object(i.a)(t);
            case "vertical":
                return Object(o.a)(t);
            case "sameHeight":
                return Object(r.a)(t);
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
            r = 0,
            s = 0,
            o = i.map(function(e) {
                var t = e.props,
                    n = t.w,
                    i = t.h,
                    o = {
                        left: r,
                        top: 0
                    };
                return r += n, s < i && (s = i), o
            });
        return n.updateHeight(s), o
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            i = t.FilteredItems,
            o = 0,
            r = i.map(function(e) {
                var t = e.props.h,
                    n = {
                        left: 0,
                        top: o
                    };
                return o += t, n
            });
        return n.updateHeight(o), r
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e.props,
            n = t.FilterContainer,
            i = t.FilteredItems,
            o = n.props.w,
            r = i[0].props.h,
            s = 0,
            a = 0,
            l = i.map(function(e) {
                var t = e.props.w;
                o < a + t && (s++, a = 0);
                var n = {
                    left: a,
                    top: r * s
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
                    o = n.h;
                t % a == 0 && a <= t && l++;
                var r = t - a * l;
                return c[r] += o, {
                    left: r * i,
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
            o = n.calcColumns(),
            r = 0,
            s = i.map(function(e, t) {
                return t % o == 0 && o <= t && r++, {
                    left: (t - o * r) * e.props.w,
                    top: r * e.props.h
                }
            }),
            a = i[0] && i[0].props.h || 0;
        return n.updateHeight((r + 1) * a), s
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
            var t, n, i, o = e.length,
                r = 0 < o ? e[0].h : 0;
            for (this.root.h = r, t = 0; t < o; t++) i = e[t], (n = this.findNode(this.root, i.w, i.h)) ? i.fit = this.splitNode(n, i.w, i.h) : i.fit = this.growDown(i.w, i.h)
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
            o = new a(n.props.w),
            r = i.map(function(e) {
                var t = e.props;
                return {
                    w: t.w,
                    h: t.h
                }
            });
        o.fit(r);
        var s = r.map(function(e) {
            var t = e.fit;
            return {
                left: t.x,
                top: t.y
            }
        });
        return n.updateHeight(o.root.h), s
    }
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        String.prototype.includes || (String.prototype.includes = function(e, t) {
            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e, t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var n, i, o = Object(this),
                    r = o.length >>> 0;
                if (0 == r) return !1;
                for (var s = 0 | t, a = Math.max(0 <= s ? s : r - Math.abs(s), 0); a < r;) {
                    if ((n = o[a]) === (i = e) || "number" == typeof n && "number" == typeof i && isNaN(n) && isNaN(i)) return !0;
                    a++
                }
                return !1
            }
        })
    }
}, function(e, t, n) {}]),
function(d) {
    if (!d.hasInitialised) {
        var p = {
            escapeRegExp: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            hasClass: function(e, t) {
                return 1 === e.nodeType && 0 <= (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
            },
            addClass: function(e, t) {
                e.className += " " + t
            },
            removeClass: function(e, t) {
                var n = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                e.className = e.className.replace(n, "")
            },
            interpolateString: function(e, t) {
                return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function(e) {
                    return t(arguments[1]) || ""
                })
            },
            getCookie: function(e) {
                var t = ("; " + document.cookie).split("; " + e + "=");
                return t.length < 2 ? void 0 : t.pop().split(";").shift()
            },
            setCookie: function(e, t, n, i, o, r) {
                var s = new Date;
                s.setHours(s.getHours() + 24 * (n || 365));
                var a = [e + "=" + t, "expires=" + s.toUTCString(), "path=" + (o || "/")];
                i && a.push("domain=" + i), r && a.push("secure"), document.cookie = a.join(";")
            },
            deepExtend: function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (n in e && this.isPlainObject(e[n]) && this.isPlainObject(t[n]) ? this.deepExtend(e[n], t[n]) : e[n] = t[n]);
                return e
            },
            throttle: function(e, t) {
                var n = !1;
                return function() {
                    n || (e.apply(this, arguments), n = !0, setTimeout(function() {
                        n = !1
                    }, t))
                }
            },
            hash: function(e) {
                var t, n, i = 0;
                if (0 === e.length) return i;
                for (t = 0, n = e.length; t < n; ++t) i = (i << 5) - i + e.charCodeAt(t), i |= 0;
                return i
            },
            normaliseHex: function(e) {
                return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
            },
            getContrast: function(e) {
                return e = this.normaliseHex(e), 128 <= (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 ? "#000" : "#fff"
            },
            getLuminance: function(e) {
                var t = parseInt(this.normaliseHex(e), 16),
                    n = 38 + (t >> 16),
                    i = 38 + (t >> 8 & 255),
                    o = 38 + (255 & t);
                return "#" + (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1)
            },
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            },
            isPlainObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor == Object
            },
            traverseDOMPath: function(e, t) {
                return e && e.parentNode ? p.hasClass(e, t) ? e : this.traverseDOMPath(e.parentNode, t) : null
            }
        };
        d.status = {
            deny: "deny",
            allow: "allow",
            dismiss: "dismiss"
        }, d.transitionEnd = function() {
            var e = document.createElement("div"),
                t = {
                    t: "transitionend",
                    OT: "oTransitionEnd",
                    msT: "MSTransitionEnd",
                    MozT: "transitionend",
                    WebkitT: "webkitTransitionEnd"
                };
            for (var n in t)
                if (t.hasOwnProperty(n) && void 0 !== e.style[n + "ransition"]) return t[n];
            return ""
        }(), d.hasTransition = !!d.transitionEnd;
        var r = Object.keys(d.status).map(p.escapeRegExp);
        d.customStyles = {}, d.Popup = (o = {
            enabled: !0,
            container: null,
            cookie: {
                name: "cookieconsent_status",
                path: "/",
                domain: "",
                expiryDays: 365,
                secure: !1
            },
            onPopupOpen: function() {},
            onPopupClose: function() {},
            onInitialise: function(e) {},
            onStatusChange: function(e, t) {},
            onRevokeChoice: function() {},
            onNoCookieLaw: function(e, t) {},
            content: {
                header: "Cookies used on the website!",
                message: "This website uses cookies to ensure you get the best experience on our website.",
                dismiss: "Got it!",
                allow: "Allow cookies",
                deny: "Decline",
                link: "Learn more",
                href: "https://www.cookiesandyou.com",
                close: "&#x274c;",
                target: "_blank",
                policy: "Cookie Policy"
            },
            elements: {
                header: '<span class="cc-header">{{header}}</span>&nbsp;',
                message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
                dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
                close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
            },
            window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
            revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
            compliance: {
                info: '<div class="cc-compliance">{{dismiss}}</div>',
                "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
                "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'
            },
            type: "info",
            layouts: {
                basic: "{{messagelink}}{{compliance}}",
                "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
            },
            layout: "basic",
            position: "bottom",
            theme: "block",
            static: !1,
            palette: null,
            revokable: !1,
            animateRevokable: !0,
            showLink: !0,
            dismissOnScroll: !1,
            dismissOnTimeout: !1,
            dismissOnWindowClick: !1,
            ignoreClicksFrom: ["cc-revoke", "cc-btn"],
            autoOpen: !0,
            autoAttach: !0,
            whitelistPage: [],
            blacklistPage: [],
            overrideHTML: null
        }, a.prototype.initialise = function(e) {
            this.options && this.destroy(), p.deepExtend(this.options = {}, o), p.isPlainObject(e) && p.deepExtend(this.options, e),
                function() {
                    var e = this.options.onInitialise.bind(this);
                    if (!window.navigator.cookieEnabled) return e(d.status.deny), !0;
                    if (window.CookiesOK || window.navigator.CookiesOK) return e(d.status.allow), !0;
                    var t = Object.keys(d.status),
                        n = this.getStatus(),
                        i = 0 <= t.indexOf(n);
                    return i && e(n), i
                }.call(this) && (this.options.enabled = !1), h(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), h(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
            var t = this.options.window.replace("{{classes}}", function() {
                    var e = this.options,
                        t = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
                    p.isMobile() && (t = "floating");
                    var n = ["cc-" + t, "cc-type-" + e.type, "cc-theme-" + e.theme];
                    return e.static && n.push("cc-static"), n.push.apply(n, u.call(this)),
                        function(e) {
                            var t = p.hash(JSON.stringify(e)),
                                n = "cc-color-override-" + t,
                                i = p.isPlainObject(e);
                            return this.customStyleSelector = i ? n : null, i && function(e, t, n) {
                                if (d.customStyles[e]) ++d.customStyles[e].references;
                                else {
                                    var i, o = {},
                                        r = t.popup,
                                        s = t.button,
                                        a = t.highlight;
                                    r && (r.text = r.text ? r.text : p.getContrast(r.background), r.link = r.link ? r.link : r.text, o[n + ".cc-window"] = ["color: " + r.text, "background-color: " + r.background], o[n + ".cc-revoke"] = ["color: " + r.text, "background-color: " + r.background], o[n + " .cc-link," + n + " .cc-link:active," + n + " .cc-link:visited"] = ["color: " + r.link], s && (s.text = s.text ? s.text : p.getContrast(s.background), s.border = s.border ? s.border : "transparent", o[n + " .cc-btn"] = ["color: " + s.text, "border-color: " + s.border, "background-color: " + s.background], s.padding && o[n + " .cc-btn"].push("padding: " + s.padding), "transparent" != s.background && (o[n + " .cc-btn:hover, " + n + " .cc-btn:focus"] = ["background-color: " + (s.hover || (i = s.background, "000000" == (i = p.normaliseHex(i)) ? "#222" : p.getLuminance(i)))]), a ? (a.text = a.text ? a.text : p.getContrast(a.background), a.border = a.border ? a.border : "transparent", o[n + " .cc-highlight .cc-btn:first-child"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background]) : o[n + " .cc-highlight .cc-btn:first-child"] = ["color: " + r.text]));
                                    var l = document.createElement("style");
                                    document.head.appendChild(l), d.customStyles[e] = {
                                        references: 1,
                                        element: l.sheet
                                    };
                                    var c = -1;
                                    for (var u in o) o.hasOwnProperty(u) && l.sheet.insertRule(u + "{" + o[u].join(";") + "}", ++c)
                                }
                            }(t, e, "." + n), i
                        }.call(this, this.options.palette), this.customStyleSelector && n.push(this.customStyleSelector), n
                }.call(this).join(" ")).replace("{{children}}", function() {
                    var t = {},
                        n = this.options;
                    n.showLink || (n.elements.link = "", n.elements.messagelink = n.elements.message), Object.keys(n.elements).forEach(function(e) {
                        t[e] = p.interpolateString(n.elements[e], function(e) {
                            var t = n.content[e];
                            return e && "string" == typeof t && t.length ? t : ""
                        })
                    });
                    var e = n.compliance[n.type];
                    e = e || n.compliance.info, t.compliance = p.interpolateString(e, function(e) {
                        return t[e]
                    });
                    var i = n.layouts[n.layout];
                    return i = i || n.layouts.basic, p.interpolateString(i, function(e) {
                        return t[e]
                    })
                }.call(this)),
                n = this.options.overrideHTML;
            if ("string" == typeof n && n.length && (t = n), this.options.static) {
                var i = f.call(this, '<div class="cc-grower">' + t + "</div>");
                i.style.display = "", this.element = i.firstChild, this.element.style.display = "none", p.addClass(this.element, "cc-invisible")
            } else this.element = f.call(this, t);
            (function() {
                var s = this.setStatus.bind(this),
                    a = this.close.bind(this),
                    e = this.options.dismissOnTimeout;
                "number" == typeof e && 0 <= e && (this.dismissTimeout = window.setTimeout(function() {
                    s(d.status.dismiss), a(!0)
                }, Math.floor(e)));
                var t = this.options.dismissOnScroll;
                if ("number" == typeof t && 0 <= t) {
                    var n = function(e) {
                        window.pageYOffset > Math.floor(t) && (s(d.status.dismiss), a(!0), window.removeEventListener("scroll", n), this.onWindowScroll = null)
                    };
                    this.options.enabled && (this.onWindowScroll = n, window.addEventListener("scroll", n))
                }
                var i = this.options.dismissOnWindowClick,
                    l = this.options.ignoreClicksFrom;
                if (i) {
                    var c = function(e) {
                        for (var t = !1, n = e.path.length, i = l.length, o = 0; o < n; o++)
                            if (!t)
                                for (var r = 0; r < i; r++) t = t || p.hasClass(e.path[o], l[r]);
                        t || (s(d.status.dismiss), a(!0), window.removeEventListener("click", c), window.removeEventListener("touchend", c), this.onWindowClick = null)
                    }.bind(this);
                    this.options.enabled && (this.onWindowClick = c, window.addEventListener("click", c), window.addEventListener("touchend", c))
                }
            }).call(this),
                function() {
                    if ("info" != this.options.type && (this.options.revokable = !0), p.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
                        var e = u.call(this);
                        this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
                        var t = this.options.revokeBtn.replace("{{classes}}", e.join(" ")).replace("{{policy}}", this.options.content.policy);
                        this.revokeBtn = f.call(this, t);
                        var i = this.revokeBtn;
                        if (this.options.animateRevokable) {
                            var n = p.throttle(function(e) {
                                var t = !1,
                                    n = window.innerHeight - 20;
                                p.hasClass(i, "cc-top") && e.clientY < 20 && (t = !0), p.hasClass(i, "cc-bottom") && e.clientY > n && (t = !0), t ? p.hasClass(i, "cc-active") || p.addClass(i, "cc-active") : p.hasClass(i, "cc-active") && p.removeClass(i, "cc-active")
                            }, 200);
                            this.onMouseMove = n, window.addEventListener("mousemove", n)
                        }
                    }
                }.call(this), this.options.autoOpen && this.autoOpen()
        }, a.prototype.destroy = function() {
            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onWindowClick && (window.removeEventListener("click", this.onWindowClick), this.onWindowClick = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null,
                function(e) {
                    if (p.isPlainObject(e)) {
                        var t = p.hash(JSON.stringify(e)),
                            n = d.customStyles[t];
                        if (n && !--n.references) {
                            var i = n.element.ownerNode;
                            i && i.parentNode && i.parentNode.removeChild(i), d.customStyles[t] = null
                        }
                    }
                }(this.options.palette), this.options = null
        }, a.prototype.open = function(e) {
            if (this.element) return this.isOpen() || (d.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
        }, a.prototype.close = function(e) {
            if (this.element) return this.isOpen() && (d.hasTransition ? this.fadeOut() : this.element.style.display = "none", e && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
        }, a.prototype.fadeIn = function() {
            var e = this.element;
            if (d.hasTransition && e && (this.afterTransition && c.call(this, e), p.hasClass(e, "cc-invisible"))) {
                if (e.style.display = "", this.options.static) {
                    var t = this.element.clientHeight;
                    this.element.parentNode.style.maxHeight = t + "px"
                }
                this.openingTimeout = setTimeout(l.bind(this, e), 20)
            }
        }, a.prototype.fadeOut = function() {
            var e = this.element;
            d.hasTransition && e && (this.openingTimeout && (clearTimeout(this.openingTimeout), l.bind(this, e)), p.hasClass(e, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = c.bind(this, e), e.addEventListener(d.transitionEnd, this.afterTransition), p.addClass(e, "cc-invisible")))
        }, a.prototype.isOpen = function() {
            return this.element && "" == this.element.style.display && (!d.hasTransition || !p.hasClass(this.element, "cc-invisible"))
        }, a.prototype.toggleRevokeButton = function(e) {
            this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
        }, a.prototype.revokeChoice = function(e) {
            this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
        }, a.prototype.hasAnswered = function(e) {
            return 0 <= Object.keys(d.status).indexOf(this.getStatus())
        }, a.prototype.hasConsented = function(e) {
            var t = this.getStatus();
            return t == d.status.allow || t == d.status.dismiss
        }, a.prototype.autoOpen = function(e) {
            !this.hasAnswered() && this.options.enabled ? this.open() : this.hasAnswered() && this.options.revokable && this.toggleRevokeButton(!0)
        }, a.prototype.setStatus = function(e) {
            var t = this.options.cookie,
                n = p.getCookie(t.name),
                i = 0 <= Object.keys(d.status).indexOf(n);
            0 <= Object.keys(d.status).indexOf(e) ? (p.setCookie(t.name, e, t.expiryDays, t.domain, t.path, t.secure), this.options.onStatusChange.call(this, e, i)) : this.clearStatus()
        }, a.prototype.getStatus = function() {
            return p.getCookie(this.options.cookie.name)
        }, a.prototype.clearStatus = function() {
            var e = this.options.cookie;
            p.setCookie(e.name, "", -1, e.domain, e.path)
        }, a), d.Location = (n = {
            timeout: 5e3,
            services: ["ipinfo"],
            serviceDefinitions: {
                ipinfo: function() {
                    return {
                        url: "//ipinfo.io",
                        headers: ["Accept: application/json"],
                        callback: function(e, t) {
                            try {
                                var n = JSON.parse(t);
                                return n.error ? s(n) : {
                                    code: n.country
                                }
                            } catch (e) {
                                return s({
                                    error: "Invalid response (" + e + ")"
                                })
                            }
                        }
                    }
                },
                ipinfodb: function(e) {
                    return {
                        url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                        isScript: !0,
                        callback: function(e, t) {
                            try {
                                var n = JSON.parse(t);
                                return "ERROR" == n.statusCode ? s({
                                    error: n.statusMessage
                                }) : {
                                    code: n.countryCode
                                }
                            } catch (e) {
                                return s({
                                    error: "Invalid response (" + e + ")"
                                })
                            }
                        }
                    }
                },
                maxmind: function() {
                    return {
                        url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                        isScript: !0,
                        callback: function(t) {
                            window.geoip2 ? geoip2.country(function(e) {
                                try {
                                    t({
                                        code: e.country.iso_code
                                    })
                                } catch (e) {
                                    t(s(e))
                                }
                            }, function(e) {
                                t(s(e))
                            }) : t(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                        }
                    }
                }
            }
        }, i.prototype.getNextService = function() {
            for (var e; e = this.getServiceByIdx(++this.currentServiceIndex), this.currentServiceIndex < this.options.services.length && !e;);
            return e
        }, i.prototype.getServiceByIdx = function(e) {
            var t = this.options.services[e];
            if ("function" != typeof t) return "string" == typeof t ? this.options.serviceDefinitions[t]() : p.isPlainObject(t) ? this.options.serviceDefinitions[t.name](t) : null;
            var n = t();
            return n.name && p.deepExtend(n, this.options.serviceDefinitions[n.name](n)), n
        }, i.prototype.locate = function(e, t) {
            var n = this.getNextService();
            n ? (this.callbackComplete = e, this.callbackError = t, this.runService(n, this.runNextServiceOnError.bind(this))) : t(new Error("No services to run"))
        }, i.prototype.setupUrl = function(i) {
            var o = this.getCurrentServiceOpts();
            return i.url.replace(/\{(.*?)\}/g, function(e, t) {
                if ("callback" === t) {
                    var n = "callback" + Date.now();
                    return window[n] = function(e) {
                        i.__JSONP_DATA = JSON.stringify(e)
                    }, n
                }
                if (t in o.interpolateUrl) return o.interpolateUrl[t]
            })
        }, i.prototype.runService = function(n, i) {
            var o = this;
            n && n.url && n.callback && (n.isScript ? function(e, t, n) {
                var i, o = document.createElement("script");
                o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function() {
                    var e = o.readyState;
                    clearTimeout(i), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null)
                }, document.body.appendChild(o), i = setTimeout(function() {
                    t.done = !0, t(), o.onreadystatechange = o.onload = null
                }, n)
            } : function(e, t, n, i, o) {
                var r = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                if (r.open(i ? "POST" : "GET", e, 1), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
                    for (var s = 0, a = o.length; s < a; ++s) {
                        var l = o[s].split(":", 2);
                        r.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
                    }
                "function" == typeof t && (r.onreadystatechange = function() {
                    3 < r.readyState && t(r)
                }), r.send(i)
            })(this.setupUrl(n), function(e) {
                var t = e ? e.responseText : "";
                n.__JSONP_DATA && (t = n.__JSONP_DATA, delete n.__JSONP_DATA), o.runServiceCallback.call(o, i, n, t)
            }, this.options.timeout, n.data, n.headers)
        }, i.prototype.runServiceCallback = function(t, e, n) {
            var i = this,
                o = e.callback(function(e) {
                    o || i.onServiceResult.call(i, t, e)
                }, n);
            o && this.onServiceResult.call(this, t, o)
        }, i.prototype.onServiceResult = function(e, t) {
            t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
        }, i.prototype.runNextServiceOnError = function(e, t) {
            if (e) {
                this.logError(e);
                var n = this.getNextService();
                n ? this.runService(n, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
            } else this.completeService.call(this, this.callbackComplete, t)
        }, i.prototype.getCurrentServiceOpts = function() {
            var e = this.options.services[this.currentServiceIndex];
            return "string" == typeof e ? {
                name: e
            } : "function" == typeof e ? e() : p.isPlainObject(e) ? e : {}
        }, i.prototype.completeService = function(e, t) {
            this.currentServiceIndex = -1, e && e(t)
        }, i.prototype.logError = function(e) {
            var t = this.currentServiceIndex,
                n = this.getServiceByIdx(t);
            console.warn("The service[" + t + "] (" + n.url + ") responded with the following error", e)
        }, i), d.Law = (t = {
            regionalLaw: !0,
            hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "ES", "SE", "GB", "UK", "GR", "EU"],
            revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
            explicitAction: ["HR", "IT", "ES"]
        }, e.prototype.initialise = function(e) {
            p.deepExtend(this.options = {}, t), p.isPlainObject(e) && p.deepExtend(this.options, e)
        }, e.prototype.get = function(e) {
            var t = this.options;
            return {
                hasLaw: 0 <= t.hasLaw.indexOf(e),
                revokable: 0 <= t.revokable.indexOf(e),
                explicitAction: 0 <= t.explicitAction.indexOf(e)
            }
        }, e.prototype.applyLaw = function(e, t) {
            var n = this.get(t);
            return n.hasLaw || (e.enabled = !1, "function" == typeof e.onNoCookieLaw && e.onNoCookieLaw(t, n)), this.options.regionalLaw && (n.revokable && (e.revokable = !0), n.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
        }, e), d.initialise = function(t, n, i) {
            var o = new d.Law(t.law);
            n = n || function() {}, i = i || function() {};
            var e = Object.keys(d.status),
                r = p.getCookie("cookieconsent_status");
            0 <= e.indexOf(r) ? n(new d.Popup(t)) : d.getCountryCode(t, function(e) {
                delete t.law, delete t.location, e.code && (t = o.applyLaw(t, e.code)), n(new d.Popup(t))
            }, function(e) {
                delete t.law, delete t.location, i(e, new d.Popup(t))
            })
        }, d.getCountryCode = function(e, t, n) {
            e.law && e.law.countryCode ? t({
                code: e.law.countryCode
            }) : e.location ? new d.Location(e.location).locate(function(e) {
                t(e || {})
            }, n) : t({})
        }, d.utils = p, d.hasInitialised = !0, window.cookieconsent = d
    }

    function e(e) {
        this.initialise.apply(this, arguments)
    }
    var t, n, o;

    function i(e) {
        p.deepExtend(this.options = {}, n), p.isPlainObject(e) && p.deepExtend(this.options, e), this.currentServiceIndex = -1
    }

    function s(e) {
        return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
    }

    function a() {
        this.initialise.apply(this, arguments)
    }

    function l(e) {
        this.openingTimeout = null, p.removeClass(e, "cc-invisible")
    }

    function c(e) {
        e.style.display = "none", e.removeEventListener(d.transitionEnd, this.afterTransition), this.afterTransition = null
    }

    function u() {
        var e = this.options.position.split("-"),
            t = [];
        return e.forEach(function(e) {
            t.push("cc-" + e)
        }), t
    }

    function f(e) {
        var t = this.options,
            n = document.createElement("div"),
            i = t.container && 1 === t.container.nodeType ? t.container : document.body;
        n.innerHTML = e;
        var o = n.children[0];
        return o.style.display = "none", p.hasClass(o, "cc-window") && d.hasTransition && p.addClass(o, "cc-invisible"), this.onButtonClick = function(e) {
            var t = p.traverseDOMPath(e.target, "cc-btn") || e.target;
            if (p.hasClass(t, "cc-btn")) {
                var n = t.className.match(new RegExp("\\bcc-(" + r.join("|") + ")\\b")),
                    i = n && n[1] || !1;
                i && (this.setStatus(i), this.close(!0))
            }
            p.hasClass(t, "cc-close") && (this.setStatus(d.status.dismiss), this.close(!0)), p.hasClass(t, "cc-revoke") && this.revokeChoice()
        }.bind(this), o.addEventListener("click", this.onButtonClick), t.autoAttach && (i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o)), o
    }

    function h(e, t) {
        for (var n = 0, i = e.length; n < i; ++n) {
            var o = e[n];
            if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return 1
        }
    }
}(window.cookieconsent || {}),
function(e) {
    var t = function(c, P, u) {
        "use strict";
        var M, F;
        if (function() {
                var e, t = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                F = c.lazySizesConfig || c.lazysizesConfig || {};
                for (e in t) e in F || (F[e] = t[e])
            }(), !P || !P.getElementsByClassName) return {
            init: function() {},
            cfg: F,
            noSupport: !0
        };
        var H = P.documentElement,
            i = c.HTMLPictureElement,
            R = "addEventListener",
            z = "getAttribute",
            W = c[R].bind(c),
            q = c.setTimeout,
            B = c.requestAnimationFrame || q,
            a = c.requestIdleCallback,
            U = /^picture$/i,
            o = ["load", "error", "lazyincluded", "_lazyloaded"],
            n = {},
            K = Array.prototype.forEach,
            V = function(e, t) {
                return n[t] || (n[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), n[t].test(e[z]("class") || "") && n[t]
            },
            Q = function(e, t) {
                V(e, t) || e.setAttribute("class", (e[z]("class") || "").trim() + " " + t)
            },
            Y = function(e, t) {
                var n;
                (n = V(e, t)) && e.setAttribute("class", (e[z]("class") || "").replace(n, " "))
            },
            G = function(t, n, e) {
                var i = e ? R : "removeEventListener";
                e && G(t, n), o.forEach(function(e) {
                    t[i](e, n)
                })
            },
            X = function(e, t, n, i, o) {
                var r = P.createEvent("Event");
                return n || (n = {}), n.instance = M, r.initEvent(t, !i, !o), r.detail = n, e.dispatchEvent(r), r
            },
            J = function(e, t) {
                var n;
                !i && (n = c.picturefill || F.pf) ? (t && t.src && !e[z]("srcset") && e.setAttribute("srcset", t.src), n({
                    reevaluate: !0,
                    elements: [e]
                })) : t && t.src && (e.src = t.src)
            },
            Z = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            s = function(e, t, n) {
                for (n = n || e.offsetWidth; n < F.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            },
            ee = function() {
                var n, i, t = [],
                    o = [],
                    r = t,
                    s = function() {
                        var e = r;
                        for (r = t.length ? o : t, n = !0, i = !1; e.length;) e.shift()();
                        n = !1
                    },
                    e = function(e, t) {
                        n && !t ? e.apply(this, arguments) : (r.push(e), i || (i = !0, (P.hidden ? q : B)(s)))
                    };
                return e._lsFlush = s, e
            }(),
            te = function(n, e) {
                return e ? function() {
                    ee(n)
                } : function() {
                    var e = this,
                        t = arguments;
                    ee(function() {
                        n.apply(e, t)
                    })
                }
            },
            ne = function(e) {
                var n, i = 0,
                    o = F.throttleDelay,
                    r = F.ricTimeout,
                    t = function() {
                        n = !1, i = u.now(), e()
                    },
                    s = a && r > 49 ? function() {
                        a(t, {
                            timeout: r
                        }), r !== F.ricTimeout && (r = F.ricTimeout)
                    } : te(function() {
                        q(t)
                    }, !0);
                return function(e) {
                    var t;
                    (e = !0 === e) && (r = 33), n || (n = !0, t = o - (u.now() - i), t < 0 && (t = 0), e || t < 9 ? s() : q(s, t))
                }
            },
            ie = function(e) {
                var t, n, i = 99,
                    o = function() {
                        t = null, e()
                    },
                    r = function() {
                        var e = u.now() - n;
                        e < i ? q(r, i - e) : (a || o)(o)
                    };
                return function() {
                    n = u.now(), t || (t = q(r, i))
                }
            },
            e = function() {
                var f, h, d, g, e, m, v, y, b, w, k, T, r = /^img$/i,
                    p = /^iframe$/i,
                    S = "onscroll" in c && !/(gle|ing)bot/.test(navigator.userAgent),
                    C = 0,
                    x = 0,
                    E = 0,
                    _ = -1,
                    A = function(e) {
                        E--, (!e || E < 0 || !e.target) && (E = 0)
                    },
                    O = function(e) {
                        return null == T && (T = "hidden" == Z(P.body, "visibility")), T || !("hidden" == Z(e.parentNode, "visibility") && "hidden" == Z(e, "visibility"))
                    },
                    I = function(e, t) {
                        var n, i = e,
                            o = O(e);
                        for (y -= t, k += t, b -= t, w += t; o && (i = i.offsetParent) && i != P.body && i != H;)(o = (Z(i, "opacity") || 1) > 0) && "visible" != Z(i, "overflow") && (n = i.getBoundingClientRect(), o = w > n.left && b < n.right && k > n.top - 1 && y < n.bottom + 1);
                        return o
                    },
                    t = function() {
                        var e, t, n, i, o, r, s, a, l, c, u, d, p = M.elements;
                        if ((g = F.loadMode) && E < 8 && (e = p.length)) {
                            for (t = 0, _++; t < e; t++)
                                if (p[t] && !p[t]._lazyRace)
                                    if (!S || M.prematureUnveil && M.prematureUnveil(p[t])) $(p[t]);
                                    else if ((a = p[t][z]("data-expand")) && (r = 1 * a) || (r = x), c || (c = !F.expand || F.expand < 1 ? H.clientHeight > 500 && H.clientWidth > 500 ? 500 : 370 : F.expand, M._defEx = c, u = c * F.expFactor, d = F.hFac, T = null, x < u && E < 1 && _ > 2 && g > 2 && !P.hidden ? (x = u, _ = 0) : x = g > 1 && _ > 1 && E < 6 ? c : C), l !== r && (m = innerWidth + r * d, v = innerHeight + r, s = -1 * r, l = r), n = p[t].getBoundingClientRect(), (k = n.bottom) >= s && (y = n.top) <= v && (w = n.right) >= s * d && (b = n.left) <= m && (k || w || b || y) && (F.loadHidden || O(p[t])) && (h && E < 3 && !a && (g < 3 || _ < 4) || I(p[t], r))) {
                                if ($(p[t]), o = !0, E > 9) break
                            } else !o && h && !i && E < 4 && _ < 4 && g > 2 && (f[0] || F.preloadAfterLoad) && (f[0] || !a && (k || w || b || y || "auto" != p[t][z](F.sizesAttr))) && (i = f[0] || p[t]);
                            i && !o && $(i)
                        }
                    },
                    n = ne(t),
                    N = function(e) {
                        var t = e.target;
                        if (t._lazyCache) return void delete t._lazyCache;
                        A(e), Q(t, F.loadedClass), Y(t, F.loadingClass), G(t, D), X(t, "lazyloaded")
                    },
                    i = te(N),
                    D = function(e) {
                        i({
                            target: e.target
                        })
                    },
                    L = function(t, n) {
                        try {
                            t.contentWindow.location.replace(n)
                        } catch (e) {
                            t.src = n
                        }
                    },
                    j = function(e) {
                        var t, n = e[z](F.srcsetAttr);
                        (t = F.customMedia[e[z]("data-media") || e[z]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                    },
                    s = te(function(t, e, n, i, o) {
                        var r, s, a, l, c, u;
                        (c = X(t, "lazybeforeunveil", e)).defaultPrevented || (i && (n ? Q(t, F.autosizesClass) : t.setAttribute("sizes", i)), s = t[z](F.srcsetAttr), r = t[z](F.srcAttr), o && (a = t.parentNode, l = a && U.test(a.nodeName || "")), u = e.firesLoad || "src" in t && (s || r || l), c = {
                            target: t
                        }, Q(t, F.loadingClass), u && (clearTimeout(d), d = q(A, 2500), G(t, D, !0)), l && K.call(a.getElementsByTagName("source"), j), s ? t.setAttribute("srcset", s) : r && !l && (p.test(t.nodeName) ? L(t, r) : t.src = r), o && (s || l) && J(t, {
                            src: r
                        })), t._lazyRace && delete t._lazyRace, Y(t, F.lazyClass), ee(function() {
                            var e = t.complete && t.naturalWidth > 1;
                            u && !e || (e && Q(t, "ls-is-cached"), N(c), t._lazyCache = !0, q(function() {
                                "_lazyCache" in t && delete t._lazyCache
                            }, 9)), "lazy" == t.loading && E--
                        }, !0)
                    }),
                    $ = function(e) {
                        if (!e._lazyRace) {
                            var t, n = r.test(e.nodeName),
                                i = n && (e[z](F.sizesAttr) || e[z]("sizes")),
                                o = "auto" == i;
                            (!o && h || !n || !e[z]("src") && !e.srcset || e.complete || V(e, F.errorClass) || !V(e, F.lazyClass)) && (t = X(e, "lazyunveilread").detail, o && oe.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, E++, s(e, t, o, i, n))
                        }
                    },
                    o = ie(function() {
                        F.loadMode = 3, n()
                    }),
                    a = function() {
                        3 == F.loadMode && (F.loadMode = 2), o()
                    },
                    l = function() {
                        if (!h) {
                            if (u.now() - e < 999) return void q(l, 999);
                            h = !0, F.loadMode = 3, n(), W("scroll", a, !0)
                        }
                    };
                return {
                    _: function() {
                        e = u.now(), M.elements = P.getElementsByClassName(F.lazyClass), f = P.getElementsByClassName(F.lazyClass + " " + F.preloadClass), W("scroll", n, !0), W("resize", n, !0), W("pageshow", function(e) {
                            if (e.persisted) {
                                var t = P.querySelectorAll("." + F.loadingClass);
                                t.length && t.forEach && B(function() {
                                    t.forEach(function(e) {
                                        e.complete && $(e)
                                    })
                                })
                            }
                        }), c.MutationObserver ? new MutationObserver(n).observe(H, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (H[R]("DOMNodeInserted", n, !0), H[R]("DOMAttrModified", n, !0), setInterval(n, 999)), W("hashchange", n, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                            P[R](e, n, !0)
                        }), /d$|^c/.test(P.readyState) ? l() : (W("load", l), P[R]("DOMContentLoaded", n), q(l, 2e4)), M.elements.length ? (t(), ee._lsFlush()) : n()
                    },
                    checkElems: n,
                    unveil: $,
                    _aLSL: a
                }
            }(),
            oe = function() {
                var n, r = te(function(e, t, n, i) {
                        var o, r, s;
                        if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), U.test(t.nodeName || ""))
                            for (o = t.getElementsByTagName("source"), r = 0, s = o.length; r < s; r++) o[r].setAttribute("sizes", i);
                        n.detail.dataAttr || J(e, n.detail)
                    }),
                    i = function(e, t, n) {
                        var i, o = e.parentNode;
                        o && (n = s(e, o, n), i = X(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        }), i.defaultPrevented || (n = i.detail.width) && n !== e._lazysizesWidth && r(e, o, i, n))
                    },
                    e = function() {
                        var e, t = n.length;
                        if (t)
                            for (e = 0; e < t; e++) i(n[e])
                    },
                    t = ie(e);
                return {
                    _: function() {
                        n = P.getElementsByClassName(F.autosizesClass), W("resize", t)
                    },
                    checkElems: t,
                    updateElem: i
                }
            }(),
            t = function() {
                !t.i && P.getElementsByClassName && (t.i = !0, oe._(), e._())
            };
        return q(function() {
            F.init && t()
        }), M = {
            cfg: F,
            autoSizer: oe,
            loader: e,
            init: t,
            uP: J,
            aC: Q,
            rC: Y,
            hC: V,
            fire: X,
            gW: s,
            rAF: ee
        }
    }(e, e.document, Date);
    e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {}),
function(n) {
    "use strict";
    n(".hero-slider").slick({
        autoplay: !0,
        infinite: !0,
        autoplaySpeed: 1e4,
        arrows: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>",
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
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }), n(".about-slider").slick({
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), n(".post-slider").slick({
        arrows: !1,
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
        easeInOutExpo: function(e, t, n, i, o) {
            return 0 === t ? n : t === o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
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
}(jQuery),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function r(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function w(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function f(e) {
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
            o = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? e : g(f(e))
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
            o = n ? t : e,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && y(s.firstElementChild) !== s ? y(l) : l;
        var c = u(e);
        return c.host ? h(c.host, t) : h(e, u(t).host)
    }

    function v(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i) return e[n];
        var o = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || o)[n]
    }

    function d(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function i(e, t, n, i) {
        return M(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
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

    function k(e) {
        return V({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function T(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = v(e, "top"),
                    i = v(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var o = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            r = "HTML" === e.nodeName ? b() : {},
            s = r.width || e.clientWidth || o.right - o.left,
            a = r.height || e.clientHeight || o.bottom - o.top,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var u = w(e);
            l -= d(u, "x"), c -= d(u, "y"), o.width -= l, o.height -= c
        }
        return k(o)
    }

    function S(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n,
            o = m(10),
            r = "HTML" === t.nodeName,
            s = T(e),
            a = T(t),
            l = g(e),
            c = w(t),
            u = parseFloat(c.borderTopWidth, 10),
            d = parseFloat(c.borderLeftWidth, 10);
        i && "HTML" === t.nodeName && (a.top = M(a.top, 0), a.left = M(a.left, 0));
        var p = k({
            top: s.top - a.top - u,
            left: s.left - a.left - d,
            width: s.width,
            height: s.height
        });
        if (p.marginTop = 0, p.marginLeft = 0, !o && r) {
            var f = parseFloat(c.marginTop, 10),
                h = parseFloat(c.marginLeft, 10);
            p.top -= u - f, p.bottom -= u - f, p.left -= d - h, p.right -= d - h, p.marginTop = f, p.marginLeft = h
        }
        return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
                o = v(t, "top"),
                r = v(t, "left"),
                s = i ? -1 : 1;
            return e.top += o * s, e.bottom += o * s, e.left += r * s, e.right += r * s, e
        }(p, t)), p
    }

    function C(e) {
        if (!e || !e.parentElement || m()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === w(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function x(e, t, n, i, o) {
        var r = 4 < arguments.length && void 0 !== o && o,
            s = {
                top: 0,
                left: 0
            },
            a = r ? C(e) : h(e, t);
        if ("viewport" === i) s = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t,
                i = e.ownerDocument.documentElement,
                o = S(e, i),
                r = M(i.clientWidth, window.innerWidth || 0),
                s = M(i.clientHeight, window.innerHeight || 0),
                a = n ? 0 : v(i),
                l = n ? 0 : v(i, "left");
            return k({
                top: a - o.top + o.marginTop,
                left: l - o.left + o.marginLeft,
                width: r,
                height: s
            })
        }(a, r);
        else {
            var l;
            "scrollParent" === i ? "BODY" === (l = g(f(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var c = S(l, a, r);
            if ("HTML" !== l.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === w(t, "position") || e(f(t)))
                }(a)) s = c;
            else {
                var u = b(),
                    d = u.height,
                    p = u.width;
                s.top += c.top - c.marginTop, s.bottom = d + c.top, s.left += c.left - c.marginLeft, s.right = p + c.left
            }
        }
        return s.left += n, s.top += n, s.right -= n, s.bottom -= n, s
    }

    function a(e, t, i, n, o, r) {
        var s = 5 < arguments.length && void 0 !== r ? r : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = x(i, n, s, o),
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
            p = e.split("-")[1];
        return d + (p ? "-" + p : "")
    }

    function l(e, t, n, i) {
        var o = 3 < arguments.length && void 0 !== i ? i : null;
        return S(n, o ? C(t) : h(t, n), o)
    }

    function E(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function _(e) {
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
        var i = E(e),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[_(a)], o
    }

    function O(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function I(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = O(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && r(t) && (n.offsets.popper = k(n.offsets.popper), n.offsets.reference = k(n.offsets.reference), n = t(n, e))
        }), n
    }

    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function N(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i],
                r = o ? "" + o + n : e;
            if (void 0 !== document.body.style[r]) return r
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
        var o = g(e);
        return function e(t, n, i, o) {
            var r = "BODY" === t.nodeName,
                s = r ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }), r || e(g(s.parentNode), n, i, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function n() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, s(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function p(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function c(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && p(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }

    function D(e, t, n) {
        var i = O(e, function(e) {
                return e.name === t
            }),
            o = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }

    function o(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
            i = Y.indexOf(e),
            o = Y.slice(i + 1).concat(Y.slice(0, i));
        return n ? o.reverse() : o
    }

    function L(e, o, r, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            i = n.indexOf(O(n, function(e) {
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
                    var o, r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        s = +r[1],
                        a = r[2];
                    if (!s) return e;
                    if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? s : ("vh" === a ? M(document.documentElement.clientHeight, window.innerHeight || 0) : M(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                    switch (a) {
                        case "%p":
                            o = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            o = i
                    }
                    return k(o)[t] / 100 * s
                }(e, n, o, r)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                p(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), s
    }
    for (var j = Math.min, $ = Math.round, P = Math.floor, M = Math.max, F = "undefined" != typeof window && "undefined" != typeof document, H = ["Edge", "Trident", "Firefox"], R = 0, z = 0; z < H.length; z += 1)
        if (F && 0 <= navigator.userAgent.indexOf(H[z])) {
            R = 1;
            break
        }
    function W(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var q = F && window.Promise ? function(e) {
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
        B = F && !(!window.MSInputMethodContext || !document.documentMode),
        U = F && /MSIE 10/.test(navigator.userAgent),
        K = function(e, t, n) {
            return t && te(e.prototype, t), n && te(e, n), e
        },
        V = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Y = Q.slice(3),
        G = "flip",
        X = "clockwise",
        J = "counterclockwise",
        Z = (K(ee, [{
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
                        e.offsets.reference = l(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = a(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = A(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
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
            e.enabled && r(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }), this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), this.state.eventsEnabled = o
    }

    function te(e, t) {
        for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
    return Z.Utils = ("undefined" == typeof window ? global : window).PopperUtils, Z.placements = Q, Z.Defaults = {
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
                        var o = e.offsets,
                            r = o.reference,
                            s = o.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            u = {
                                start: W({}, l, r[l]),
                                end: W({}, l, r[l] + r[c] - s[c])
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
                        o = e.placement,
                        r = e.offsets,
                        s = r.popper,
                        a = r.reference,
                        l = o.split("-")[0];
                    return n = p(+i) ? [+i, 0] : L(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || y(e.instance.popper);
                    e.instance.reference === t && (t = y(t));
                    var n = N("transform"),
                        o = e.instance.popper.style,
                        r = o.top,
                        s = o.left,
                        a = o[n];
                    o.top = "", o.left = "", o[n] = "";
                    var l = x(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    o.top = r, o.left = s, o[n] = a, i.boundaries = l;
                    var c = i.priority,
                        u = e.offsets.popper,
                        d = {
                            primary: function(e) {
                                var t = u[e];
                                return u[e] < l[e] && !i.escapeWithReference && (t = M(u[e], l[e])), W({}, e, t)
                            },
                            secondary: function(e) {
                                var t = "right" === e ? "left" : "top",
                                    n = u[t];
                                return u[e] > l[e] && !i.escapeWithReference && (n = j(u[t], l[e] - ("right" === e ? u.width : u.height))), W({}, t, n)
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
                        o = e.placement.split("-")[0],
                        r = P,
                        s = -1 !== ["top", "bottom"].indexOf(o),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!D(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var o = e.placement.split("-")[0],
                        r = e.offsets,
                        s = r.popper,
                        a = r.reference,
                        l = -1 !== ["left", "right"].indexOf(o),
                        c = l ? "height" : "width",
                        u = l ? "Top" : "Left",
                        d = u.toLowerCase(),
                        p = l ? "left" : "top",
                        f = l ? "bottom" : "right",
                        h = E(i)[c];
                    a[f] - h < s[d] && (e.offsets.popper[d] -= s[d] - (a[f] - h)), a[d] + h > s[f] && (e.offsets.popper[d] += a[d] + h - s[f]), e.offsets.popper = k(e.offsets.popper);
                    var g = a[d] + a[c] / 2 - h / 2,
                        m = w(e.instance.popper),
                        v = parseFloat(m["margin" + u], 10),
                        y = parseFloat(m["border" + u + "Width"], 10),
                        b = g - e.offsets.popper[d] - v - y;
                    return b = M(j(s[c] - h, b), 0), e.arrowElement = i, e.offsets.arrow = (W(n = {}, d, $(b)), W(n, p, ""), n), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(h, g) {
                    if (e(h.instance.modifiers, "inner")) return h;
                    if (h.flipped && h.placement === h.originalPlacement) return h;
                    var m = x(h.instance.popper, h.instance.reference, g.padding, g.boundariesElement, h.positionFixed),
                        v = h.placement.split("-")[0],
                        y = _(v),
                        b = h.placement.split("-")[1] || "",
                        w = [];
                    switch (g.behavior) {
                        case G:
                            w = [v, y];
                            break;
                        case X:
                            w = o(v);
                            break;
                        case J:
                            w = o(v, !0);
                            break;
                        default:
                            w = g.behavior
                    }
                    return w.forEach(function(e, t) {
                        if (v !== e || w.length === t + 1) return h;
                        v = h.placement.split("-")[0], y = _(v);
                        var n, i = h.offsets.popper,
                            o = h.offsets.reference,
                            r = P,
                            s = "left" === v && r(i.right) > r(o.left) || "right" === v && r(i.left) < r(o.right) || "top" === v && r(i.bottom) > r(o.top) || "bottom" === v && r(i.top) < r(o.bottom),
                            a = r(i.left) < r(m.left),
                            l = r(i.right) > r(m.right),
                            c = r(i.top) < r(m.top),
                            u = r(i.bottom) > r(m.bottom),
                            d = "left" === v && a || "right" === v && l || "top" === v && c || "bottom" === v && u,
                            p = -1 !== ["top", "bottom"].indexOf(v),
                            f = !!g.flipVariations && (p && "start" === b && a || p && "end" === b && l || !p && "start" === b && c || !p && "end" === b && u);
                        (s || d || f) && (h.flipped = !0, (s || d) && (v = w[t + 1]), f && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), h.placement = v + (b ? "-" + b : ""), h.offsets.popper = V({}, h.offsets.popper, A(h.instance.popper, h.offsets.reference, h.placement)), h = I(h.instance.modifiers, h, "flip"))
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
                        o = i.popper,
                        r = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = _(t), e.offsets.popper = k(o), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!D(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = O(e.instance.modifiers, function(e) {
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
                        o = e.offsets.popper,
                        r = O(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l = void 0 === r ? t.gpuAcceleration : r,
                        c = T(y(e.instance.popper)),
                        u = {
                            position: o.position
                        },
                        d = {
                            left: P(o.left),
                            top: $(o.top),
                            bottom: $(o.bottom),
                            right: P(o.right)
                        },
                        p = "bottom" === n ? "top" : "bottom",
                        f = "right" === i ? "left" : "right",
                        h = N("transform");
                    if (a = "bottom" == p ? -c.height + d.bottom : d.top, s = "right" == f ? -c.width + d.right : d.left, l && h) u[h] = "translate3d(" + s + "px, " + a + "px, 0)", u[p] = 0, u[f] = 0, u.willChange = "transform";
                    else {
                        var g = "bottom" == p ? -1 : 1,
                            m = "right" == f ? -1 : 1;
                        u[p] = a * g, u[f] = s * m, u.willChange = p + ", " + f
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
                onLoad: function(e, t, n, i, o) {
                    var r = l(o, t, e, n.positionFixed),
                        s = a(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
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

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function s(o) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), t.forEach(function(e) {
                var t, n, i;
                t = o, i = r[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return o
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, u = u && u.hasOwnProperty("default") ? u.default : u;
    var o, n, a, l, c, d, p, f, h, g, m, v, y, b, w, k, T, S, C, x, E, _, A, O, I, N, D, L, j, $, P, M, F, H, R, z, W, q, B, U, K, V, Q, Y, G, X, J, Z, ee, te, ne, ie, oe, re, se, ae, le, ce, ue, de, pe, fe, he, ge, me, ve, ye, be, we, ke, Te, Se, Ce, xe, Ee, _e, Ae, Oe, Ie, Ne, De, Le, je, $e, Pe, Me, Fe, He, Re, ze, We, qe, Be, Ue, Ke, Ve, Qe, Ye, Ge, Xe, Je, Ze, et, tt, nt, it, ot, rt, st, at, lt, ct, ut, dt, pt, ft, ht, gt, mt, vt, yt, bt, wt, kt, Tt, St, Ct, xt, Et, _t, At = (Et = "transitionend", _t = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || "");
                try {
                    return 0 < xt(document).find(t).length ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var t = xt(e).css("transition-duration");
                return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                xt(e).trigger(Et)
            },
            supportsTransitionEnd: function() {
                return Boolean(Et)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var o = n[i],
                            r = t[i],
                            s = r && _t.isElement(r) ? "element" : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                    }
            }
        }, (xt = t).fn.emulateTransitionEnd = function(e) {
            var t = this,
                n = !1;
            return xt(this).one(_t.TRANSITION_END, function() {
                n = !0
            }), setTimeout(function() {
                n || _t.triggerTransitionEnd(t)
            }, e), this
        }, xt.event.special[_t.TRANSITION_END] = {
            bindType: Et,
            delegateType: Et,
            handle: function(e) {
                if (xt(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }, _t),
        Ot = (n = "alert", l = "." + (a = "bs.alert"), c = (o = t).fn[n], d = {
            CLOSE: "close" + l,
            CLOSED: "closed" + l,
            CLICK_DATA_API: "click" + l + ".data-api"
        }, (Ct = Vt.prototype).close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, Ct.dispose = function() {
            o.removeData(this._element, a), this._element = null
        }, Ct._getRootElement = function(e) {
            var t = At.getSelectorFromElement(e),
                n = !1;
            return t && (n = o(t)[0]), n = n || o(e).closest(".alert")[0]
        }, Ct._triggerCloseEvent = function(e) {
            var t = o.Event(d.CLOSE);
            return o(e).trigger(t), t
        }, Ct._removeElement = function(t) {
            var n = this;
            if (o(t).removeClass("show"), o(t).hasClass("fade")) {
                var e = At.getTransitionDurationFromElement(t);
                o(t).one(At.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else this._destroyElement(t)
        }, Ct._destroyElement = function(e) {
            o(e).detach().trigger(d.CLOSED).remove()
        }, Vt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = o(this),
                    t = e.data(a);
                t || (t = new Vt(this), e.data(a, t)), "close" === n && t[n](this)
            })
        }, Vt._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, r(Vt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }]), p = Vt, o(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), o.fn[n] = p._jQueryInterface, o.fn[n].Constructor = p, o.fn[n].noConflict = function() {
            return o.fn[n] = c, p._jQueryInterface
        }, p),
        It = (h = "button", m = "." + (g = "bs.button"), v = ".data-api", y = (f = t).fn[h], b = "active", w = '[data-toggle^="button"]', k = {
            CLICK_DATA_API: "click" + m + v,
            FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
        }, (St = Kt.prototype).toggle = function() {
            var e = !0,
                t = !0,
                n = f(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = f(this._element).find("input")[0];
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && f(this._element).hasClass(b)) e = !1;
                        else {
                            var o = f(n).find(".active")[0];
                            o && f(o).removeClass(b)
                        } if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !f(this._element).hasClass(b), f(i).trigger("change")
                    }
                    i.focus(), t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !f(this._element).hasClass(b)), e && f(this._element).toggleClass(b)
        }, St.dispose = function() {
            f.removeData(this._element, g), this._element = null
        }, Kt._jQueryInterface = function(t) {
            return this.each(function() {
                var e = f(this).data(g);
                e || (e = new Kt(this), f(this).data(g, e)), "toggle" === t && e[t]()
            })
        }, r(Kt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }]), T = Kt, f(document).on(k.CLICK_DATA_API, w, function(e) {
            e.preventDefault();
            var t = e.target;
            f(t).hasClass("btn") || (t = f(t).closest(".btn")), T._jQueryInterface.call(f(t), "toggle")
        }).on(k.FOCUS_BLUR_DATA_API, w, function(e) {
            var t = f(e.target).closest(".btn")[0];
            f(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
        }), f.fn[h] = T._jQueryInterface, f.fn[h].Constructor = T, f.fn[h].noConflict = function() {
            return f.fn[h] = y, T._jQueryInterface
        }, T),
        Nt = (C = "carousel", E = "." + (x = "bs.carousel"), _ = (S = t).fn[C], A = {
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
        }, I = "next", N = "prev", D = {
            SLIDE: "slide" + E,
            SLID: "slid" + E,
            KEYDOWN: "keydown" + E,
            MOUSEENTER: "mouseenter" + E,
            MOUSELEAVE: "mouseleave" + E,
            TOUCHEND: "touchend" + E,
            LOAD_DATA_API: "load" + E + ".data-api",
            CLICK_DATA_API: "click" + E + ".data-api"
        }, L = "active", j = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, (Tt = Ut.prototype).next = function() {
            this._isSliding || this._slide(I)
        }, Tt.nextWhenVisible = function() {
            !document.hidden && S(this._element).is(":visible") && "hidden" !== S(this._element).css("visibility") && this.next()
        }, Tt.prev = function() {
            this._isSliding || this._slide(N)
        }, Tt.pause = function(e) {
            e || (this._isPaused = !0), S(this._element).find(j.NEXT_PREV)[0] && (At.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, Tt.cycle = function(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, Tt.to = function(e) {
            var t = this;
            this._activeElement = S(this._element).find(j.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) S(this._element).one(D.SLID, function() {
                    return t.to(e)
                });
                else {
                    if (n === e) return this.pause(), void this.cycle();
                    var i = n < e ? I : N;
                    this._slide(i, this._items[e])
                }
        }, Tt.dispose = function() {
            S(this._element).off(E), S.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, Tt._getConfig = function(e) {
            return e = s({}, A, e), At.typeCheckConfig(C, e, O), e
        }, Tt._addEventListeners = function() {
            var t = this;
            this._config.keyboard && S(this._element).on(D.KEYDOWN, function(e) {
                return t._keydown(e)
            }), "hover" === this._config.pause && (S(this._element).on(D.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(D.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }), "ontouchstart" in document.documentElement && S(this._element).on(D.TOUCHEND, function() {
                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                    return t.cycle(e)
                }, 500 + t._config.interval)
            }))
        }, Tt._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
            }
        }, Tt._getItemIndex = function(e) {
            return this._items = S.makeArray(S(e).parent().find(j.ITEM)), this._items.indexOf(e)
        }, Tt._getItemByDirection = function(e, t) {
            var n = e === I,
                i = e === N,
                o = this._getItemIndex(t),
                r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
            var s = (o + (e === N ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }, Tt._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e),
                i = this._getItemIndex(S(this._element).find(j.ACTIVE_ITEM)[0]),
                o = S.Event(D.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n
                });
            return S(this._element).trigger(o), o
        }, Tt._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                S(this._indicatorsElement).find(j.ACTIVE).removeClass(L);
                var t = this._indicatorsElement.children[this._getItemIndex(e)];
                t && S(t).addClass(L)
            }
        }, Tt._slide = function(e, t) {
            var n, i, o, r = this,
                s = S(this._element).find(j.ACTIVE_ITEM)[0],
                a = this._getItemIndex(s),
                l = t || s && this._getItemByDirection(e, s),
                c = this._getItemIndex(l),
                u = Boolean(this._interval);
            if (o = e === I ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && S(l).hasClass(L)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                var d = S.Event(D.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (S(this._element).hasClass("slide")) {
                    S(l).addClass(i), At.reflow(l), S(s).addClass(n), S(l).addClass(n);
                    var p = At.getTransitionDurationFromElement(s);
                    S(s).one(At.TRANSITION_END, function() {
                        S(l).removeClass(n + " " + i).addClass(L), S(s).removeClass(L + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                            return S(r._element).trigger(d)
                        }, 0)
                    }).emulateTransitionEnd(p)
                } else S(s).removeClass(L), S(l).addClass(L), this._isSliding = !1, S(this._element).trigger(d);
                u && this.cycle()
            }
        }, Ut._jQueryInterface = function(i) {
            return this.each(function() {
                var e = S(this).data(x),
                    t = s({}, A, S(this).data());
                "object" == typeof i && (t = s({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new Ut(this, t), S(this).data(x, e)), "number" == typeof i) e.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else t.interval && (e.pause(), e.cycle())
            })
        }, Ut._dataApiClickHandler = function(e) {
            var t = At.getSelectorFromElement(this);
            if (t) {
                var n = S(t)[0];
                if (n && S(n).hasClass("carousel")) {
                    var i = s({}, S(n).data(), S(this).data()),
                        o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1), Ut._jQueryInterface.call(S(n), i), o && S(n).data(x).to(o), e.preventDefault()
                }
            }
        }, r(Ut, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return A
            }
        }]), $ = Ut, S(document).on(D.CLICK_DATA_API, j.DATA_SLIDE, $._dataApiClickHandler), S(window).on(D.LOAD_DATA_API, function() {
            S(j.DATA_RIDE).each(function() {
                var e = S(this);
                $._jQueryInterface.call(e, e.data())
            })
        }), S.fn[C] = $._jQueryInterface, S.fn[C].Constructor = $, S.fn[C].noConflict = function() {
            return S.fn[C] = _, $._jQueryInterface
        }, $),
        Dt = (M = "collapse", H = "." + (F = "bs.collapse"), R = (P = t).fn[M], z = {
            toggle: !0,
            parent: ""
        }, W = {
            toggle: "boolean",
            parent: "(string|element)"
        }, q = {
            SHOW: "show" + H,
            SHOWN: "shown" + H,
            HIDE: "hide" + H,
            HIDDEN: "hidden" + H,
            CLICK_DATA_API: "click" + H + ".data-api"
        }, B = "show", U = "collapse", K = "collapsing", V = "collapsed", Q = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, (kt = Bt.prototype).toggle = function() {
            P(this._element).hasClass(B) ? this.hide() : this.show()
        }, kt.show = function() {
            var e, t, n = this;
            if (!(this._isTransitioning || P(this._element).hasClass(B) || (this._parent && 0 === (e = P.makeArray(P(this._parent).find(Q.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (t = P(e).not(this._selector).data(F)) && t._isTransitioning))) {
                var i = P.Event(q.SHOW);
                if (P(this._element).trigger(i), !i.isDefaultPrevented()) {
                    e && (Bt._jQueryInterface.call(P(e).not(this._selector), "hide"), t || P(e).data(F, null));
                    var o = this._getDimension();
                    P(this._element).removeClass(U).addClass(K), (this._element.style[o] = 0) < this._triggerArray.length && P(this._triggerArray).removeClass(V).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                        s = At.getTransitionDurationFromElement(this._element);
                    P(this._element).one(At.TRANSITION_END, function() {
                        P(n._element).removeClass(K).addClass(U).addClass(B), n._element.style[o] = "", n.setTransitioning(!1), P(n._element).trigger(q.SHOWN)
                    }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                }
            }
        }, kt.hide = function() {
            var e = this;
            if (!this._isTransitioning && P(this._element).hasClass(B)) {
                var t = P.Event(q.HIDE);
                if (P(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", At.reflow(this._element), P(this._element).addClass(K).removeClass(U).removeClass(B), 0 < this._triggerArray.length)
                        for (var i = 0; i < this._triggerArray.length; i++) {
                            var o = this._triggerArray[i],
                                r = At.getSelectorFromElement(o);
                            null !== r && (P(r).hasClass(B) || P(o).addClass(V).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var s = At.getTransitionDurationFromElement(this._element);
                    P(this._element).one(At.TRANSITION_END, function() {
                        e.setTransitioning(!1), P(e._element).removeClass(K).addClass(U).trigger(q.HIDDEN)
                    }).emulateTransitionEnd(s)
                }
            }
        }, kt.setTransitioning = function(e) {
            this._isTransitioning = e
        }, kt.dispose = function() {
            P.removeData(this._element, F), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, kt._getConfig = function(e) {
            return (e = s({}, z, e)).toggle = Boolean(e.toggle), At.typeCheckConfig(M, e, W), e
        }, kt._getDimension = function() {
            return P(this._element).hasClass("width") ? "width" : "height"
        }, kt._getParent = function() {
            var n = this,
                e = null;
            At.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = P(this._config.parent)[0];
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return P(e).find(t).each(function(e, t) {
                n._addAriaAndCollapsedClass(Bt._getTargetFromElement(t), [t])
            }), e
        }, kt._addAriaAndCollapsedClass = function(e, t) {
            if (e) {
                var n = P(e).hasClass(B);
                0 < t.length && P(t).toggleClass(V, !n).attr("aria-expanded", n)
            }
        }, Bt._getTargetFromElement = function(e) {
            var t = At.getSelectorFromElement(e);
            return t ? P(t)[0] : null
        }, Bt._jQueryInterface = function(i) {
            return this.each(function() {
                var e = P(this),
                    t = e.data(F),
                    n = s({}, z, e.data(), "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new Bt(this, n), e.data(F, t)), "string" == typeof i) {
                    if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }, r(Bt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return z
            }
        }]), Y = Bt, P(document).on(q.CLICK_DATA_API, Q.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = P(this),
                t = At.getSelectorFromElement(this);
            P(t).each(function() {
                var e = P(this),
                    t = e.data(F) ? "toggle" : n.data();
                Y._jQueryInterface.call(e, t)
            })
        }), P.fn[M] = Y._jQueryInterface, P.fn[M].Constructor = Y, P.fn[M].noConflict = function() {
            return P.fn[M] = R, Y._jQueryInterface
        }, Y),
        Lt = (X = "dropdown", Z = "." + (J = "bs.dropdown"), ee = ".data-api", te = (G = t).fn[X], ne = new RegExp("38|40|27"), ie = {
            HIDE: "hide" + Z,
            HIDDEN: "hidden" + Z,
            SHOW: "show" + Z,
            SHOWN: "shown" + Z,
            CLICK: "click" + Z,
            CLICK_DATA_API: "click" + Z + ee,
            KEYDOWN_DATA_API: "keydown" + Z + ee,
            KEYUP_DATA_API: "keyup" + Z + ee
        }, oe = "show", re = "dropdown-menu-right", se = '[data-toggle="dropdown"]', ae = ".dropdown-menu", le = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, ce = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, (wt = qt.prototype).toggle = function() {
            if (!this._element.disabled && !G(this._element).hasClass("disabled")) {
                var e = qt._getParentFromElement(this._element),
                    t = G(this._menu).hasClass(oe);
                if (qt._clearMenus(), !t) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = G.Event(ie.SHOW, n);
                    if (G(e).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === u) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = e : At.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && G(e).addClass("position-static"), this._popper = new u(o, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === G(e).closest(".navbar-nav").length && G(document.body).children().on("mouseover", null, G.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), G(this._menu).toggleClass(oe), G(e).toggleClass(oe).trigger(G.Event(ie.SHOWN, n))
                    }
                }
            }
        }, wt.dispose = function() {
            G.removeData(this._element, J), G(this._element).off(Z), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, wt.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, wt._addEventListeners = function() {
            var t = this;
            G(this._element).on(ie.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle()
            })
        }, wt._getConfig = function(e) {
            return e = s({}, this.constructor.Default, G(this._element).data(), e), At.typeCheckConfig(X, e, this.constructor.DefaultType), e
        }, wt._getMenuElement = function() {
            if (!this._menu) {
                var e = qt._getParentFromElement(this._element);
                this._menu = G(e).find(ae)[0]
            }
            return this._menu
        }, wt._getPlacement = function() {
            var e = G(this._element).parent(),
                t = "bottom-start";
            return e.hasClass("dropup") ? (t = "top-start", G(this._menu).hasClass(re) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : G(this._menu).hasClass(re) && (t = "bottom-end"), t
        }, wt._detectNavbar = function() {
            return 0 < G(this._element).closest(".navbar").length
        }, wt._getPopperConfig = function() {
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
        }, qt._jQueryInterface = function(t) {
            return this.each(function() {
                var e = G(this).data(J);
                if (e || (e = new qt(this, "object" == typeof t ? t : null), G(this).data(J, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, qt._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = G.makeArray(G(se)), n = 0; n < t.length; n++) {
                    var i = qt._getParentFromElement(t[n]),
                        o = G(t[n]).data(J),
                        r = {
                            relatedTarget: t[n]
                        };
                    if (o) {
                        var s = o._menu;
                        if (G(i).hasClass(oe) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && G.contains(i, e.target))) {
                            var a = G.Event(ie.HIDE, r);
                            G(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && G(document.body).children().off("mouseover", null, G.noop), t[n].setAttribute("aria-expanded", "false"), G(s).removeClass(oe), G(i).removeClass(oe).trigger(G.Event(ie.HIDDEN, r)))
                        }
                    }
                }
        }, qt._getParentFromElement = function(e) {
            var t, n = At.getSelectorFromElement(e);
            return n && (t = G(n)[0]), t || e.parentNode
        }, qt._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || G(e.target).closest(ae).length)) : ne.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !G(this).hasClass("disabled"))) {
                var t = qt._getParentFromElement(this),
                    n = G(t).hasClass(oe);
                if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = G(t).find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)").get();
                    if (0 !== i.length) {
                        var o = i.indexOf(e.target);
                        38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var r = G(t).find(se)[0];
                        G(r).trigger("focus")
                    }
                    G(this).trigger("click")
                }
            }
        }, r(qt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return le
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ce
            }
        }]), ue = qt, G(document).on(ie.KEYDOWN_DATA_API, se, ue._dataApiKeydownHandler).on(ie.KEYDOWN_DATA_API, ae, ue._dataApiKeydownHandler).on(ie.CLICK_DATA_API + " " + ie.KEYUP_DATA_API, ue._clearMenus).on(ie.CLICK_DATA_API, se, function(e) {
            e.preventDefault(), e.stopPropagation(), ue._jQueryInterface.call(G(this), "toggle")
        }).on(ie.CLICK_DATA_API, ".dropdown form", function(e) {
            e.stopPropagation()
        }), G.fn[X] = ue._jQueryInterface, G.fn[X].Constructor = ue, G.fn[X].noConflict = function() {
            return G.fn[X] = te, ue._jQueryInterface
        }, ue),
        jt = (pe = "modal", he = "." + (fe = "bs.modal"), ge = (de = t).fn[pe], me = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, ve = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, ye = {
            HIDE: "hide" + he,
            HIDDEN: "hidden" + he,
            SHOW: "show" + he,
            SHOWN: "shown" + he,
            FOCUSIN: "focusin" + he,
            RESIZE: "resize" + he,
            CLICK_DISMISS: "click.dismiss" + he,
            KEYDOWN_DISMISS: "keydown.dismiss" + he,
            MOUSEUP_DISMISS: "mouseup.dismiss" + he,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + he,
            CLICK_DATA_API: "click" + he + ".data-api"
        }, be = "modal-open", we = "fade", ke = "show", Te = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, (bt = Wt.prototype).toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }, bt.show = function(e) {
            var t = this;
            if (!this._isTransitioning && !this._isShown) {
                de(this._element).hasClass(we) && (this._isTransitioning = !0);
                var n = de.Event(ye.SHOW, {
                    relatedTarget: e
                });
                de(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), de(document.body).addClass(be), this._setEscapeEvent(), this._setResizeEvent(), de(this._element).on(ye.CLICK_DISMISS, Te.DATA_DISMISS, function(e) {
                    return t.hide(e)
                }), de(this._dialog).on(ye.MOUSEDOWN_DISMISS, function() {
                    de(t._element).one(ye.MOUSEUP_DISMISS, function(e) {
                        de(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }, bt.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                var n = de.Event(ye.HIDE);
                if (de(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = de(this._element).hasClass(we);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), de(document).off(ye.FOCUSIN), de(this._element).removeClass(ke), de(this._element).off(ye.CLICK_DISMISS), de(this._dialog).off(ye.MOUSEDOWN_DISMISS), i) {
                        var o = At.getTransitionDurationFromElement(this._element);
                        de(this._element).one(At.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(o)
                    } else this._hideModal()
                }
            }
        }, bt.dispose = function() {
            de.removeData(this._element, fe), de(window, document, this._element, this._backdrop).off(he), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
        }, bt.handleUpdate = function() {
            this._adjustDialog()
        }, bt._getConfig = function(e) {
            return e = s({}, me, e), At.typeCheckConfig(pe, e, ve), e
        }, bt._showElement = function(e) {
            var t = this,
                n = de(this._element).hasClass(we);

            function i() {
                t._config.focus && t._element.focus(), t._isTransitioning = !1, de(t._element).trigger(o)
            }
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && At.reflow(this._element), de(this._element).addClass(ke), this._config.focus && this._enforceFocus();
            var o = de.Event(ye.SHOWN, {
                relatedTarget: e
            });
            if (n) {
                var r = At.getTransitionDurationFromElement(this._element);
                de(this._dialog).one(At.TRANSITION_END, i).emulateTransitionEnd(r)
            } else i()
        }, bt._enforceFocus = function() {
            var t = this;
            de(document).off(ye.FOCUSIN).on(ye.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === de(t._element).has(e.target).length && t._element.focus()
            })
        }, bt._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? de(this._element).on(ye.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(), t.hide())
            }) : this._isShown || de(this._element).off(ye.KEYDOWN_DISMISS)
        }, bt._setResizeEvent = function() {
            var t = this;
            this._isShown ? de(window).on(ye.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : de(window).off(ye.RESIZE)
        }, bt._hideModal = function() {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                de(document.body).removeClass(be), e._resetAdjustments(), e._resetScrollbar(), de(e._element).trigger(ye.HIDDEN)
            })
        }, bt._removeBackdrop = function() {
            this._backdrop && (de(this._backdrop).remove(), this._backdrop = null)
        }, bt._showBackdrop = function(e) {
            var t = this,
                n = de(this._element).hasClass(we) ? we : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && de(this._backdrop).addClass(n), de(this._backdrop).appendTo(document.body), de(this._element).on(ye.CLICK_DISMISS, function(e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && At.reflow(this._backdrop), de(this._backdrop).addClass(ke), !e) return;
                if (!n) return void e();
                var i = At.getTransitionDurationFromElement(this._backdrop);
                de(this._backdrop).one(At.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                de(this._backdrop).removeClass(ke);
                var o = function() {
                    t._removeBackdrop(), e && e()
                };
                if (de(this._element).hasClass(we)) {
                    var r = At.getTransitionDurationFromElement(this._backdrop);
                    de(this._backdrop).one(At.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o()
            } else e && e()
        }, bt._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, bt._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, bt._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, bt._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                de(Te.FIXED_CONTENT).each(function(e, t) {
                    var n = de(t)[0].style.paddingRight,
                        i = de(t).css("padding-right");
                    de(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }), de(Te.STICKY_CONTENT).each(function(e, t) {
                    var n = de(t)[0].style.marginRight,
                        i = de(t).css("margin-right");
                    de(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                }), de(Te.NAVBAR_TOGGLER).each(function(e, t) {
                    var n = de(t)[0].style.marginRight,
                        i = de(t).css("margin-right");
                    de(t).data("margin-right", n).css("margin-right", parseFloat(i) + o._scrollbarWidth + "px")
                });
                var e = document.body.style.paddingRight,
                    t = de(document.body).css("padding-right");
                de(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
            }
        }, bt._resetScrollbar = function() {
            de(Te.FIXED_CONTENT).each(function(e, t) {
                var n = de(t).data("padding-right");
                void 0 !== n && de(t).css("padding-right", n).removeData("padding-right")
            }), de(Te.STICKY_CONTENT + ", " + Te.NAVBAR_TOGGLER).each(function(e, t) {
                var n = de(t).data("margin-right");
                void 0 !== n && de(t).css("margin-right", n).removeData("margin-right")
            });
            var e = de(document.body).data("padding-right");
            void 0 !== e && de(document.body).css("padding-right", e).removeData("padding-right")
        }, bt._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t
        }, Wt._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = de(this).data(fe),
                    t = s({}, me, de(this).data(), "object" == typeof n && n ? n : {});
                if (e || (e = new Wt(this, t), de(this).data(fe, e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else t.show && e.show(i)
            })
        }, r(Wt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return me
            }
        }]), Se = Wt, de(document).on(ye.CLICK_DATA_API, Te.DATA_TOGGLE, function(e) {
            var t, n = this,
                i = At.getSelectorFromElement(this);
            i && (t = de(i)[0]);
            var o = de(t).data(fe) ? "toggle" : s({}, de(t).data(), de(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var r = de(t).one(ye.SHOW, function(e) {
                e.isDefaultPrevented() || r.one(ye.HIDDEN, function() {
                    de(n).is(":visible") && n.focus()
                })
            });
            Se._jQueryInterface.call(de(t), o, this)
        }), de.fn[pe] = Se._jQueryInterface, de.fn[pe].Constructor = Se, de.fn[pe].noConflict = function() {
            return de.fn[pe] = ge, Se._jQueryInterface
        }, Se),
        $t = (xe = "tooltip", _e = "." + (Ee = "bs.tooltip"), Ae = (Ce = t).fn[xe], Oe = "bs-tooltip", Ie = new RegExp("(^|\\s)" + Oe + "\\S+", "g"), Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(De = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(Ne = {
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
        }, $e = {
            HIDE: "hide" + _e,
            HIDDEN: "hidden" + _e,
            SHOW: (je = "show") + _e,
            SHOWN: "shown" + _e,
            INSERTED: "inserted" + _e,
            CLICK: "click" + _e,
            FOCUSIN: "focusin" + _e,
            FOCUSOUT: "focusout" + _e,
            MOUSEENTER: "mouseenter" + _e,
            MOUSELEAVE: "mouseleave" + _e
        }, Pe = "fade", Me = "show", Fe = "hover", (yt = zt.prototype).enable = function() {
            this._isEnabled = !0
        }, yt.disable = function() {
            this._isEnabled = !1
        }, yt.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }, yt.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY,
                        n = Ce(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ce(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (Ce(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }, yt.dispose = function() {
            clearTimeout(this._timeout), Ce.removeData(this.element, this.constructor.DATA_KEY), Ce(this.element).off(this.constructor.EVENT_KEY), Ce(this.element).closest(".modal").off("hide.bs.modal"), this.tip && Ce(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, yt.show = function() {
            var t = this;
            if ("none" === Ce(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e = Ce.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                Ce(this.element).trigger(e);
                var n = Ce.contains(this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !n) return;
                var i = this.getTipElement(),
                    o = At.getUID(this.constructor.NAME);
                i.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && Ce(i).addClass(Pe);
                var r = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                    s = this._getAttachment(r);
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
                }), Ce(i).addClass(Me), "ontouchstart" in document.documentElement && Ce(document.body).children().on("mouseover", null, Ce.noop);
                var l = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, Ce(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                };
                if (Ce(this.tip).hasClass(Pe)) {
                    var c = At.getTransitionDurationFromElement(this.tip);
                    Ce(this.tip).one(At.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }
        }, yt.hide = function(e) {
            function t() {
                n._hoverState !== je && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), Ce(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
            }
            var n = this,
                i = this.getTipElement(),
                o = Ce.Event(this.constructor.Event.HIDE);
            if (Ce(this.element).trigger(o), !o.isDefaultPrevented()) {
                if (Ce(i).removeClass(Me), "ontouchstart" in document.documentElement && Ce(document.body).children().off("mouseover", null, Ce.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger[Fe] = !1, Ce(this.tip).hasClass(Pe)) {
                    var r = At.getTransitionDurationFromElement(i);
                    Ce(i).one(At.TRANSITION_END, t).emulateTransitionEnd(r)
                } else t();
                this._hoverState = ""
            }
        }, yt.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }, yt.isWithContent = function() {
            return Boolean(this.getTitle())
        }, yt.addAttachmentClass = function(e) {
            Ce(this.getTipElement()).addClass(Oe + "-" + e)
        }, yt.getTipElement = function() {
            return this.tip = this.tip || Ce(this.config.template)[0], this.tip
        }, yt.setContent = function() {
            var e = Ce(this.getTipElement());
            this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass("fade show")
        }, yt.setElementContent = function(e, t) {
            var n = this.config.html;
            "object" == typeof t && (t.nodeType || t.jquery) ? n ? Ce(t).parent().is(e) || e.empty().append(t) : e.text(Ce(t).text()) : e[n ? "html" : "text"](t)
        }, yt.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }, yt._getAttachment = function(e) {
            return De[e.toUpperCase()]
        }, yt._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e) Ce(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                    return i.toggle(e)
                });
                else if ("manual" !== e) {
                    var t = e === Fe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                        n = e === Fe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
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
        }, yt._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, yt._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || Ce(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ce(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : Fe] = !0), Ce(t.getTipElement()).hasClass(Me) || t._hoverState === je ? t._hoverState = je : (clearTimeout(t._timeout), t._hoverState = je, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === je && t.show()
            }, t.config.delay.show) : t.show())
        }, yt._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || Ce(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Ce(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : Fe] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                "out" === t._hoverState && t.hide()
            }, t.config.delay.hide) : t.hide())
        }, yt._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }, yt._getConfig = function(e) {
            return "number" == typeof(e = s({}, this.constructor.Default, Ce(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), At.typeCheckConfig(xe, e, this.constructor.DefaultType), e
        }, yt._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }, yt._cleanTipClass = function() {
            var e = Ce(this.getTipElement()),
                t = e.attr("class").match(Ie);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }, yt._handlePopperPlacementChange = function(e) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, yt._fixTransition = function() {
            var e = this.getTipElement(),
                t = this.config.animation;
            null === e.getAttribute("x-placement") && (Ce(e).removeClass(Pe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
        }, zt._jQueryInterface = function(n) {
            return this.each(function() {
                var e = Ce(this).data(Ee),
                    t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new zt(this, t), Ce(this).data(Ee, e)), "string" == typeof n)) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, r(zt, null, [{
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
                return xe
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ee
            }
        }, {
            key: "Event",
            get: function() {
                return $e
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return _e
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ne
            }
        }]), He = zt, Ce.fn[xe] = He._jQueryInterface, Ce.fn[xe].Constructor = He, Ce.fn[xe].noConflict = function() {
            return Ce.fn[xe] = Ae, He._jQueryInterface
        }, He),
        Pt = (ze = "popover", qe = "." + (We = "bs.popover"), Be = (Re = t).fn[ze], Ue = "bs-popover", Ke = new RegExp("(^|\\s)" + Ue + "\\S+", "g"), Ve = s({}, $t.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Qe = s({}, $t.DefaultType, {
            content: "(string|element|function)"
        }), Ye = {
            HIDE: "hide" + qe,
            HIDDEN: "hidden" + qe,
            SHOW: "show" + qe,
            SHOWN: "shown" + qe,
            INSERTED: "inserted" + qe,
            CLICK: "click" + qe,
            FOCUSIN: "focusin" + qe,
            FOCUSOUT: "focusout" + qe,
            MOUSEENTER: "mouseenter" + qe,
            MOUSELEAVE: "mouseleave" + qe
        }, Ge = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function(e) {
                Re(this.getTipElement()).addClass(Ue + "-" + e)
            }, o.getTipElement = function() {
                return this.tip = this.tip || Re(this.config.template)[0], this.tip
            }, o.setContent = function() {
                var e = Re(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, o._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function() {
                var e = Re(this.getTipElement()),
                    t = e.attr("class").match(Ke);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = Re(this).data(We),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Re(this).data(We, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, r(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ve
                }
            }, {
                key: "NAME",
                get: function() {
                    return ze
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return We
                }
            }, {
                key: "Event",
                get: function() {
                    return Ye
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return qe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Qe
                }
            }]), i
        }($t), Re.fn[ze] = Ge._jQueryInterface, Re.fn[ze].Constructor = Ge, Re.fn[ze].noConflict = function() {
            return Re.fn[ze] = Be, Ge._jQueryInterface
        }, Ge),
        Mt = (Je = "scrollspy", et = "." + (Ze = "bs.scrollspy"), tt = (Xe = t).fn[Je], nt = {
            offset: 10,
            method: "auto",
            target: ""
        }, it = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, ot = {
            ACTIVATE: "activate" + et,
            SCROLL: "scroll" + et,
            LOAD_DATA_API: "load" + et + ".data-api"
        }, rt = "active", st = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, (vt = Rt.prototype).refresh = function() {
            var t = this,
                e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                o = "auto" === this._config.method ? e : this._config.method,
                r = "position" === o ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Xe.makeArray(Xe(this._selector)).map(function(e) {
                var t, n = At.getSelectorFromElement(e);
                if (n && (t = Xe(n)[0]), t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [Xe(t)[o]().top + r, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
            })
        }, vt.dispose = function() {
            Xe.removeData(this._element, Ze), Xe(this._scrollElement).off(et), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, vt._getConfig = function(e) {
            if ("string" != typeof(e = s({}, nt, "object" == typeof e && e ? e : {})).target) {
                var t = Xe(e.target).attr("id");
                t || (t = At.getUID(Je), Xe(e.target).attr("id", t)), e.target = "#" + t
            }
            return At.typeCheckConfig(Je, e, it), e
        }, vt._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, vt._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, vt._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, vt._process = function() {
            var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
        }, vt._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",");
            e = e.map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            });
            var n = Xe(e.join(","));
            n.hasClass("dropdown-item") ? (n.closest(st.DROPDOWN).find(st.DROPDOWN_TOGGLE).addClass(rt), n.addClass(rt)) : (n.addClass(rt), n.parents(st.NAV_LIST_GROUP).prev(st.NAV_LINKS + ", " + st.LIST_ITEMS).addClass(rt), n.parents(st.NAV_LIST_GROUP).prev(st.NAV_ITEMS).children(st.NAV_LINKS).addClass(rt)), Xe(this._scrollElement).trigger(ot.ACTIVATE, {
                relatedTarget: t
            })
        }, vt._clear = function() {
            Xe(this._selector).filter(st.ACTIVE).removeClass(rt)
        }, Rt._jQueryInterface = function(t) {
            return this.each(function() {
                var e = Xe(this).data(Ze);
                if (e || (e = new Rt(this, "object" == typeof t && t), Xe(this).data(Ze, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, r(Rt, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }, {
            key: "Default",
            get: function() {
                return nt
            }
        }]), at = Rt, Xe(window).on(ot.LOAD_DATA_API, function() {
            for (var e = Xe.makeArray(Xe(st.DATA_SPY)), t = e.length; t--;) {
                var n = Xe(e[t]);
                at._jQueryInterface.call(n, n.data())
            }
        }), Xe.fn[Je] = at._jQueryInterface, Xe.fn[Je].Constructor = at, Xe.fn[Je].noConflict = function() {
            return Xe.fn[Je] = tt, at._jQueryInterface
        }, at),
        Ft = (ut = "." + (ct = "bs.tab"), dt = (lt = t).fn.tab, pt = {
            HIDE: "hide" + ut,
            HIDDEN: "hidden" + ut,
            SHOW: "show" + ut,
            SHOWN: "shown" + ut,
            CLICK_DATA_API: "click" + ut + ".data-api"
        }, ft = "active", ht = "> li > .active", (mt = Ht.prototype).show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && lt(this._element).hasClass(ft) || lt(this._element).hasClass("disabled"))) {
                var e, i, t = lt(this._element).closest(".nav, .list-group")[0],
                    o = At.getSelectorFromElement(this._element);
                if (t) {
                    var r = "UL" === t.nodeName ? ht : ".active";
                    i = (i = lt.makeArray(lt(t).find(r)))[i.length - 1]
                }
                var s = lt.Event(pt.HIDE, {
                        relatedTarget: this._element
                    }),
                    a = lt.Event(pt.SHOW, {
                        relatedTarget: i
                    });
                if (i && lt(i).trigger(s), lt(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (e = lt(o)[0]), this._activate(this._element, t);
                    var l = function() {
                        var e = lt.Event(pt.HIDDEN, {
                                relatedTarget: n._element
                            }),
                            t = lt.Event(pt.SHOWN, {
                                relatedTarget: i
                            });
                        lt(i).trigger(e), lt(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }, mt.dispose = function() {
            lt.removeData(this._element, ct), this._element = null
        }, mt._activate = function(e, t, n) {
            function i() {
                return o._transitionComplete(e, r, n)
            }
            var o = this,
                r = ("UL" === t.nodeName ? lt(t).find(ht) : lt(t).children(".active"))[0],
                s = n && r && lt(r).hasClass("fade");
            if (r && s) {
                var a = At.getTransitionDurationFromElement(r);
                lt(r).one(At.TRANSITION_END, i).emulateTransitionEnd(a)
            } else i()
        }, mt._transitionComplete = function(e, t, n) {
            if (t) {
                lt(t).removeClass("show " + ft);
                var i = lt(t.parentNode).find("> .dropdown-menu .active")[0];
                i && lt(i).removeClass(ft), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (lt(e).addClass(ft), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), At.reflow(e), lt(e).addClass("show"), e.parentNode && lt(e.parentNode).hasClass("dropdown-menu")) {
                var o = lt(e).closest(".dropdown")[0];
                o && lt(o).find(".dropdown-toggle").addClass(ft), e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }, Ht._jQueryInterface = function(n) {
            return this.each(function() {
                var e = lt(this),
                    t = e.data(ct);
                if (t || (t = new Ht(this), e.data(ct, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, r(Ht, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.1"
            }
        }]), gt = Ht, lt(document).on(pt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
            e.preventDefault(), gt._jQueryInterface.call(lt(this), "show")
        }), lt.fn.tab = gt._jQueryInterface, lt.fn.tab.Constructor = gt, lt.fn.tab.noConflict = function() {
            return lt.fn.tab = dt, gt._jQueryInterface
        }, gt);

    function Ht(e) {
        this._element = e
    }

    function Rt(e, t) {
        var n = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + st.NAV_LINKS + "," + this._config.target + " " + st.LIST_ITEMS + "," + this._config.target + " " + st.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Xe(this._scrollElement).on(ot.SCROLL, function(e) {
            return n._process(e)
        }), this.refresh(), this._process()
    }

    function zt(e, t) {
        if (void 0 === u) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
    }

    function Wt(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = de(e).find(Te.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
    }

    function qt(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }

    function Bt(e, t) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = P.makeArray(P('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
        for (var n = P(Q.DATA_TOGGLE), i = 0; i < n.length; i++) {
            var o = n[i],
                r = At.getSelectorFromElement(o);
            null !== r && 0 < P(r).filter(e).length && (this._selector = r, this._triggerArray.push(o))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }

    function Ut(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = S(e)[0], this._indicatorsElement = S(this._element).find(j.INDICATORS)[0], this._addEventListeners()
    }

    function Kt(e) {
        this._element = e
    }

    function Vt(e) {
        this._element = e
    }! function(e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = At, e.Alert = Ot, e.Button = It, e.Carousel = Nt, e.Collapse = Dt, e.Dropdown = Lt, e.Modal = jt, e.Popover = Pt, e.Scrollspy = Mt, e.Tab = Ft, e.Tooltip = $t, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Fuse", [], t) : "object" == typeof exports ? exports.Fuse = t() : e.Fuse = t()
}(this, function() {
    return o = {}, i.m = n = [function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, function(e, t, n) {
        "use strict";
        var i = function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            },
            u = n(5),
            d = n(7),
            y = n(4),
            o = (i(b, [{
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
                    var o = this.options,
                        r = o.location,
                        s = o.distance,
                        a = o.threshold,
                        l = o.findAllMatches,
                        c = o.minMatchCharLength;
                    return d(e, this.pattern, this.patternAlphabet, {
                        location: r,
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
                o = t.distance,
                r = void 0 === o ? 100 : o,
                s = t.threshold,
                a = void 0 === s ? .6 : s,
                l = t.maxPatternLength,
                c = void 0 === l ? 32 : l,
                u = t.isCaseSensitive,
                d = void 0 !== u && u,
                p = t.tokenSeparator,
                f = void 0 === p ? / +/g : p,
                h = t.findAllMatches,
                g = void 0 !== h && h,
                m = t.minMatchCharLength,
                v = void 0 === m ? 1 : m;
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, b), this.options = {
                location: i,
                distance: r,
                threshold: a,
                maxPatternLength: c,
                isCaseSensitive: d,
                tokenSeparator: f,
                findAllMatches: g,
                minMatchCharLength: v
            }, this.pattern = this.options.isCaseSensitive ? e : e.toLowerCase(), this.pattern.length <= c && (this.patternAlphabet = y(this.pattern))
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        e.exports = o
    }, function(e, t, n) {
        "use strict";
        var u = n(0);
        e.exports = function(e, t) {
            return function e(t, n, i) {
                if (n) {
                    var o = n.indexOf("."),
                        r = n,
                        s = null; - 1 !== o && (r = n.slice(0, o), s = n.slice(o + 1));
                    var a = t[r];
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
            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, n = [], i = -1, o = -1, r = 0, s = e.length; r < s; r += 1) {
                var a = e[r];
                a && -1 === i ? i = r : a || -1 === i || (t <= (o = r - 1) - i + 1 && n.push([i, o]), i = -1)
            }
            return e[r - 1] && t <= r - i && n.push([i, r - 1]), n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            for (var t = {}, n = e.length, i = 0; i < n; i += 1) t[e.charAt(i)] = 0;
            for (var o = 0; o < n; o += 1) t[e.charAt(o)] |= 1 << n - o - 1;
            return t
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : / +/g,
                i = new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").replace(n, "|")),
                o = e.match(i),
                r = !!o,
                s = [];
            if (r)
                for (var a = 0, l = o.length; a < l; a += 1) {
                    var c = o[a];
                    s.push([e.indexOf(c), c.length - 1])
                }
            return {
                score: r ? .5 : 1,
                isMatch: r,
                matchedIndices: s
            }
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n = t.errors,
                i = void 0 === n ? 0 : n,
                o = t.currentLocation,
                r = void 0 === o ? 0 : o,
                s = t.expectedLocation,
                a = void 0 === s ? 0 : s,
                l = t.distance,
                c = void 0 === l ? 100 : l,
                u = i / e.length,
                d = Math.abs(a - r);
            return c ? u + d / c : d ? 1 : u
        }
    }, function(e, t, n) {
        "use strict";
        var P = n(6),
            M = n(3);
        e.exports = function(e, t, n, i) {
            for (var o = i.location, r = void 0 === o ? 0 : o, s = i.distance, a = void 0 === s ? 100 : s, l = i.threshold, c = void 0 === l ? .6 : l, u = i.findAllMatches, d = void 0 !== u && u, p = i.minMatchCharLength, f = void 0 === p ? 1 : p, h = r, g = e.length, m = c, v = e.indexOf(t, h), y = t.length, b = [], w = 0; w < g; w += 1) b[w] = 0;
            if (-1 !== v) {
                var k = P(t, {
                    errors: 0,
                    currentLocation: v,
                    expectedLocation: h,
                    distance: a
                });
                if (m = Math.min(k, m), -1 !== (v = e.lastIndexOf(t, h + y))) {
                    var T = P(t, {
                        errors: 0,
                        currentLocation: v,
                        expectedLocation: h,
                        distance: a
                    });
                    m = Math.min(T, m)
                }
            }
            v = -1;
            for (var S = [], C = 1, x = y + g, E = 1 << y - 1, _ = 0; _ < y; _ += 1) {
                for (var A = 0, O = x; A < O;) P(t, {
                    errors: _,
                    currentLocation: h + O,
                    expectedLocation: h,
                    distance: a
                }) <= m ? A = O : x = O, O = Math.floor((x - A) / 2 + A);
                x = O;
                var I = Math.max(1, h - O + 1),
                    N = d ? g : Math.min(h + O, g) + y,
                    D = Array(N + 2);
                D[N + 1] = (1 << _) - 1;
                for (var L = N; I <= L; --L) {
                    var j = L - 1,
                        $ = n[e.charAt(j)];
                    if ($ && (b[j] = 1), D[L] = (D[L + 1] << 1 | 1) & $, 0 !== _ && (D[L] |= (S[L + 1] | S[L]) << 1 | 1 | S[L + 1]), D[L] & E && (C = P(t, {
                            errors: _,
                            currentLocation: j,
                            expectedLocation: h,
                            distance: a
                        })) <= m) {
                        if (m = C, (v = j) <= h) break;
                        I = Math.max(1, 2 * h - v)
                    }
                }
                if (P(t, {
                        errors: _ + 1,
                        currentLocation: h,
                        expectedLocation: h,
                        distance: a
                    }) > m) break;
                S = D
            }
            return {
                isMatch: 0 <= v,
                score: 0 === C ? .001 : C,
                matchedIndices: M(b, f)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var i = function(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), e
            },
            r = n(1),
            F = n(2),
            P = n(0),
            o = (i(H, [{
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
                        o = this._search(n, i),
                        r = o.weights,
                        s = o.results;
                    return this._computeScore(r, s), this.options.shouldSort && this._sort(s), this._format(s)
                }
            }, {
                key: "_prepareSearchers",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = [];
                    if (this.options.tokenize)
                        for (var n = e.split(this.options.tokenSeparator), i = 0, o = n.length; i < o; i += 1) t.push(new r(n[i], this.options));
                    return {
                        tokenSearchers: t,
                        fullSearcher: new r(e, this.options)
                    }
                }
            }, {
                key: "_search",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments[1],
                        n = this.list,
                        i = {},
                        o = [];
                    if ("string" == typeof n[0]) {
                        for (var r = 0, s = n.length; r < s; r += 1) this._analyze({
                            key: "",
                            value: n[r],
                            record: r,
                            index: r
                        }, {
                            resultMap: i,
                            results: o,
                            tokenSearchers: e,
                            fullSearcher: t
                        });
                        return {
                            weights: null,
                            results: o
                        }
                    }
                    for (var a = {}, l = 0, c = n.length; l < c; l += 1)
                        for (var u = n[l], d = 0, p = this.options.keys.length; d < p; d += 1) {
                            var f = this.options.keys[d];
                            if ("string" != typeof f) {
                                if (a[f.name] = {
                                        weight: 1 - f.weight || 1
                                    }, f.weight <= 0 || 1 < f.weight) throw new Error("Key weight has to be > 0 and <= 1");
                                f = f.name
                            } else a[f] = {
                                weight: 1
                            };
                            this._analyze({
                                key: f,
                                value: this.options.getFn(u, f),
                                record: u,
                                index: l
                            }, {
                                resultMap: i,
                                results: o,
                                tokenSearchers: e,
                                fullSearcher: t
                            })
                        }
                    return {
                        weights: a,
                        results: o
                    }
                }
            }, {
                key: "_analyze",
                value: function(e, t) {
                    var n = e.key,
                        i = e.arrayIndex,
                        o = void 0 === i ? -1 : i,
                        r = e.value,
                        s = e.record,
                        a = e.index,
                        l = t.tokenSearchers,
                        c = void 0 === l ? [] : l,
                        u = t.fullSearcher,
                        d = void 0 === u ? [] : u,
                        p = t.resultMap,
                        f = void 0 === p ? {} : p,
                        h = t.results,
                        g = void 0 === h ? [] : h;
                    if (null != r) {
                        var m = !1,
                            v = -1,
                            y = 0;
                        if ("string" == typeof r) {
                            this._log("\nKey: " + ("" === n ? "-" : n));
                            var b = d.search(r);
                            if (this._log('Full text: "' + r + '", score: ' + b.score), this.options.tokenize) {
                                for (var w = r.split(this.options.tokenSeparator), k = [], T = 0; T < c.length; T += 1) {
                                    var S = c[T];
                                    this._log('\nPattern: "' + S.pattern + '"');
                                    for (var C = !1, x = 0; x < w.length; x += 1) {
                                        var E = w[x],
                                            _ = S.search(E),
                                            A = {};
                                        _.isMatch ? (A[E] = _.score, C = m = !0, k.push(_.score)) : (A[E] = 1, this.options.matchAllTokens || k.push(1)), this._log('Token: "' + E + '", score: ' + A[E])
                                    }
                                    C && (y += 1)
                                }
                                v = k[0];
                                for (var O = k.length, I = 1; I < O; I += 1) v += k[I];
                                v /= O, this._log("Token score average:", v)
                            }
                            var N = b.score; - 1 < v && (N = (N + v) / 2), this._log("Score average:", N);
                            var D = !this.options.tokenize || !this.options.matchAllTokens || y >= c.length;
                            if (this._log("\nCheck Matches: " + D), (m || b.isMatch) && D) {
                                var L = f[a];
                                L ? L.output.push({
                                    key: n,
                                    arrayIndex: o,
                                    value: r,
                                    score: N,
                                    matchedIndices: b.matchedIndices
                                }) : (f[a] = {
                                    item: s,
                                    output: [{
                                        key: n,
                                        arrayIndex: o,
                                        value: r,
                                        score: N,
                                        matchedIndices: b.matchedIndices
                                    }]
                                }, g.push(f[a]))
                            }
                        } else if (P(r))
                            for (var j = 0, $ = r.length; j < $; j += 1) this._analyze({
                                key: n,
                                arrayIndex: j,
                                value: r[j],
                                record: s,
                                index: a
                            }, {
                                resultMap: f,
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
                        for (var o = t[n].output, r = o.length, s = 0, a = 1, l = 0; l < r; l += 1) {
                            var c = e ? e[o[l].key].weight : 1,
                                u = (1 === c ? o[l].score : o[l].score || .001) * c;
                            1 !== c ? a = Math.min(a, u) : s += o[l].nScore = u
                        }
                        t[n].score = 1 === a ? s / r : a, this._log(t[n])
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
                        for (var i = 0, o = n.length; i < o; i += 1) {
                            var r = n[i];
                            if (0 !== r.matchedIndices.length) {
                                var s = {
                                    indices: r.matchedIndices,
                                    value: r.value
                                };
                                r.key && (s.key = r.key), r.hasOwnProperty("arrayIndex") && -1 < r.arrayIndex && (s.arrayIndex = r.arrayIndex), t.matches.push(s)
                            }
                        }
                    }), this.options.includeScore && n.push(function(e, t) {
                        t.score = e.score
                    });
                    for (var i = 0, o = e.length; i < o; i += 1) {
                        var r = e[i];
                        if (this.options.id && (r.item = this.options.getFn(r.item, this.options.id)[0]), n.length) {
                            for (var s = {
                                    item: r.item
                                }, a = 0, l = n.length; a < l; a += 1) n[a](r, s);
                            t.push(s)
                        } else t.push(r.item)
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
                o = t.distance,
                r = void 0 === o ? 100 : o,
                s = t.threshold,
                a = void 0 === s ? .6 : s,
                l = t.maxPatternLength,
                c = void 0 === l ? 32 : l,
                u = t.caseSensitive,
                d = void 0 !== u && u,
                p = t.tokenSeparator,
                f = void 0 === p ? / +/g : p,
                h = t.findAllMatches,
                g = void 0 !== h && h,
                m = t.minMatchCharLength,
                v = void 0 === m ? 1 : m,
                y = t.id,
                b = void 0 === y ? null : y,
                w = t.keys,
                k = void 0 === w ? [] : w,
                T = t.shouldSort,
                S = void 0 === T || T,
                C = t.getFn,
                x = void 0 === C ? F : C,
                E = t.sortFn,
                _ = void 0 === E ? function(e, t) {
                    return e.score - t.score
                } : E,
                A = t.tokenize,
                O = void 0 !== A && A,
                I = t.matchAllTokens,
                N = void 0 !== I && I,
                D = t.includeMatches,
                L = void 0 !== D && D,
                j = t.includeScore,
                $ = void 0 !== j && j,
                P = t.verbose,
                M = void 0 !== P && P;
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, H), this.options = {
                location: i,
                distance: r,
                threshold: a,
                maxPatternLength: c,
                isCaseSensitive: d,
                tokenSeparator: f,
                findAllMatches: g,
                minMatchCharLength: v,
                id: b,
                keys: k,
                includeMatches: L,
                includeScore: $,
                shouldSort: S,
                getFn: x,
                sortFn: _,
                verbose: M,
                tokenize: O,
                matchAllTokens: N
            }, this.setCollection(e)
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        e.exports = o
    }], i.c = o, i.i = function(e) {
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
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var n, o
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.Mark = t(e.jQuery)
}(this, function(e) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e;

    function o(e, t) {
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
        r = (t(c, [{
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
                    var o = e.contentWindow;
                    if (i = o.document, !o || !i) throw new Error("iframe inaccessible")
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
                    if (!r) {
                        r = !0, clearTimeout(s);
                        try {
                            o.isIframeBlank(e) || (e.removeEventListener("load", i), o.getIframeContents(e, t, n))
                        } catch (e) {
                            n()
                        }
                    }
                }
                var o = this,
                    r = !1,
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
                var o = this,
                    t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                    r = e.querySelectorAll("iframe"),
                    s = r.length,
                    a = 0;

                function l() {
                    --s <= 0 && t(a)
                }
                r = Array.prototype.slice.call(r), s || l(), r.forEach(function(t) {
                    c.matches(t, o.exclude) ? l() : o.onIframeReady(t, function(e) {
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
                var o = !1,
                    r = !1;
                return i.forEach(function(e, t) {
                    e.val === n && (o = t, r = e.handled)
                }), this.compareNodeIframe(e, t, n) ? (!1 !== o || r ? !1 === o || r || (i[o].handled = !0) : i.push({
                    val: n,
                    handled: !0
                }), !0) : (!1 === o && i.push({
                    val: n,
                    handled: !1
                }), !1)
            }
        }, {
            key: "handleOpenIframes",
            value: function(e, t, n, i) {
                var o = this;
                e.forEach(function(e) {
                    e.handled || o.getIframeContents(e.val, function(e) {
                        o.createInstanceOnIframe(e).forEachNode(t, n, i)
                    })
                })
            }
        }, {
            key: "iterateThroughNodes",
            value: function(t, e, n, i, o) {
                for (var r, s = this, a = this.createIterator(e, t, i), l = [], c = [], u = void 0, d = void 0; r = s.getIteratorNode(a), d = r.prevNode, u = r.node;) this.iframes && this.forEachIframe(e, function(e) {
                    return s.checkIframeFilter(u, d, e, l)
                }, function(e) {
                    s.createInstanceOnIframe(e).forEachNode(t, function(e) {
                        return c.push(e)
                    }, i)
                }), c.push(u);
                c.forEach(function(e) {
                    n(e)
                }), this.iframes && this.handleOpenIframes(l, t, n, i), o()
            }
        }, {
            key: "forEachNode",
            value: function(n, i, o) {
                var r = this,
                    s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                    e = this.getContexts(),
                    a = e.length;
                a || s(), e.forEach(function(e) {
                    function t() {
                        r.iterateThroughNodes(n, e, i, o, function() {
                            --a <= 0 && s()
                        })
                    }
                    r.iframes ? r.waitForIframes(e, t) : t()
                })
            }
        }], [{
            key: "matches",
            value: function(t, e) {
                var n = "string" == typeof e ? [e] : e,
                    i = t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
                if (i) {
                    var o = !1;
                    return n.every(function(e) {
                        return !i.call(t, e) || !(o = !0)
                    }), o
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
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        var r = t[o],
                            s = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(o) : this.escapeStr(o),
                            a = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(r) : this.escapeStr(r);
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
                    o = [];
                return n.split("").forEach(function(t) {
                    e.every(function(e) {
                        if (-1 !== e.indexOf(t)) {
                            if (-1 < o.indexOf(e)) return !1;
                            n = n.replace(new RegExp("[" + e + "]", "gm" + i), "[" + e + "]"), o.push(e)
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
                    o = "";
                switch (("string" == typeof n ? [] : n.limiters).forEach(function(e) {
                    o += "|" + t.escapeStr(e)
                }), i) {
                    case "partially":
                    default:
                        return "()(" + e + ")";
                    case "complementary":
                        return "()([^" + (o = "\\s" + (o || this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"))) + "]*" + e + "[^" + o + "]*)";
                    case "exactly":
                        return "(^|\\s" + o + ")(" + e + ")(?=$|\\s" + o + ")"
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
                var o = this;
                if (!Array.isArray(e) || "[object Object]" !== Object.prototype.toString.call(e[0])) return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(e), [];
                var r = [],
                    s = 0;
                return e.sort(function(e, t) {
                    return e.start - t.start
                }).forEach(function(e) {
                    var t = o.callNoMatchOnInvalidRanges(e, s),
                        n = t.start,
                        i = t.end;
                    t.valid && (e.start = n, e.length = i - n, r.push(e), s = i)
                }), r
            }
        }, {
            key: "callNoMatchOnInvalidRanges",
            value: function(e, t) {
                var n = void 0,
                    i = void 0,
                    o = !1;
                return e && void 0 !== e.start ? (i = (n = parseInt(e.start, 10)) + parseInt(e.length, 10), this.isNumeric(e.start) && this.isNumeric(e.length) && 0 < i - t && 0 < i - n ? o = !0 : (this.log("Ignoring invalid or overlapping range: " + JSON.stringify(e)), this.opt.noMatch(e))) : (this.log("Ignoring invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)), {
                    start: n,
                    end: i,
                    valid: o
                }
            }
        }, {
            key: "checkWhitespaceRanges",
            value: function(e, t, n) {
                var i = void 0,
                    o = !0,
                    r = n.length,
                    s = t - r,
                    a = parseInt(e.start, 10) - s;
                return (i = (a = r < a ? r : a) + parseInt(e.length, 10)) > r && (i = r, this.log("End range automatically set to the max value of " + r)), a < 0 || i - a < 0 || r < a || r < i ? (o = !1, this.log("Invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)) : "" === n.substring(a, i).replace(/\s+/g, "") && (o = !1, this.log("Skipping whitespace only range: " + JSON.stringify(e)), this.opt.noMatch(e)), {
                    start: a,
                    end: i,
                    valid: o
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
                return r.matches(e, this.opt.exclude.concat(["script", "style", "title", "head", "html"]))
            }
        }, {
            key: "wrapRangeInTextNode",
            value: function(e, t, n) {
                var i = this.opt.element ? this.opt.element : "mark",
                    o = e.splitText(t),
                    r = o.splitText(n - t),
                    s = document.createElement(i);
                return s.setAttribute("data-markjs", "true"), this.opt.className && s.setAttribute("class", this.opt.className), s.textContent = o.textContent, o.parentNode.replaceChild(s, o), r
            }
        }, {
            key: "wrapRangeInMappedTextNode",
            value: function(a, l, c, u, d) {
                var p = this;
                a.nodes.every(function(e, n) {
                    var t = a.nodes[n + 1];
                    if (void 0 === t || t.start > l) {
                        if (!u(e.node)) return !1;
                        var i = l - e.start,
                            o = (c > e.end ? e.end : c) - e.start,
                            r = a.value.substr(0, e.start),
                            s = a.value.substr(o + e.start);
                        if (e.node = p.wrapRangeInTextNode(e.node, i, o), a.value = r + s, a.nodes.forEach(function(e, t) {
                                n <= t && (0 < a.nodes[t].start && t !== n && (a.nodes[t].start -= o), a.nodes[t].end -= o)
                            }), c -= o, d(e.node.previousSibling, e.start), !(c > e.end)) return !1;
                        l = e.end
                    }
                    return !0
                })
            }
        }, {
            key: "wrapMatches",
            value: function(o, e, r, s, t) {
                var a = this,
                    l = 0 === e ? 0 : e + 1;
                this.getTextNodes(function(e) {
                    e.nodes.forEach(function(e) {
                        e = e.node;
                        for (var t = void 0; null !== (t = o.exec(e.textContent)) && "" !== t[l];)
                            if (r(t[l], e)) {
                                var n = t.index;
                                if (0 !== l)
                                    for (var i = 1; i < l; i++) n += t[i].length;
                                e = a.wrapRangeInTextNode(e, n, n + t[l].length), s(e.previousSibling), o.lastIndex = 0
                            }
                    }), t()
                })
            }
        }, {
            key: "wrapMatchesAcrossElements",
            value: function(r, e, s, a, l) {
                var c = this,
                    u = 0 === e ? 0 : e + 1;
                this.getTextNodes(function(e) {
                    for (var t = void 0; null !== (t = r.exec(e.value)) && "" !== t[u];) {
                        var n = t.index;
                        if (0 !== u)
                            for (var i = 1; i < u; i++) n += t[i].length;
                        var o = n + t[u].length;
                        c.wrapRangeInMappedTextNode(e, n, o, function(e) {
                            return s(t[u], e)
                        }, function(e, t) {
                            r.lastIndex = t, a(e)
                        })
                    }
                    l()
                })
            }
        }, {
            key: "wrapRangeFromIndex",
            value: function(e, a, l, t) {
                var c = this;
                this.getTextNodes(function(r) {
                    var s = r.value.length;
                    e.forEach(function(t, n) {
                        var e = c.checkWhitespaceRanges(t, s, r.value),
                            i = e.start,
                            o = e.end;
                        e.valid && c.wrapRangeInMappedTextNode(r, i, o, function(e) {
                            return a(e, t, r.value.substring(i, o), n)
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
                    o = "wrapMatches";
                this.opt.acrossElements && (o = "wrapMatchesAcrossElements"), this[o](e, this.opt.ignoreGroups, function(e, t) {
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
                var o = this;
                this.opt = t;
                var r = 0,
                    s = "wrapMatches",
                    n = this.getSeparatedKeywords("string" == typeof e ? [e] : e),
                    a = n.keywords,
                    l = n.length,
                    c = this.opt.caseSensitive ? "" : "i";
                this.opt.acrossElements && (s = "wrapMatchesAcrossElements"), 0 === l ? this.opt.done(r) : function e(n) {
                    var t = new RegExp(o.createRegExp(n), "gm" + c),
                        i = 0;
                    o.log('Searching with expression "' + t + '"'), o[s](t, 1, function(e, t) {
                        return o.opt.filter(t, n, r, i)
                    }, function(e) {
                        i++, r++, o.opt.each(e)
                    }, function() {
                        0 === i && o.opt.noMatch(n), a[l - 1] === n ? o.opt.done(r) : e(a[a.indexOf(n) + 1])
                    })
                }(a[0])
            }
        }, {
            key: "markRanges",
            value: function(e, t) {
                var o = this;
                this.opt = t;
                var n = 0,
                    i = this.checkRanges(e);
                i && i.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(i)), this.wrapRangeFromIndex(i, function(e, t, n, i) {
                    return o.opt.filter(e, t, n, i)
                }, function(e, t) {
                    n++, o.opt.each(e, t)
                }, function() {
                    o.opt.done(n)
                })) : this.opt.done(n)
            }
        }, {
            key: "unmark",
            value: function(e) {
                var i = this;
                this.opt = e;
                var o = this.opt.element ? this.opt.element : "*";
                o += "[data-markjs]", this.opt.className && (o += "." + this.opt.className), this.log('Removal selector "' + o + '"'), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function(e) {
                    i.unwrapMatches(e)
                }, function(e) {
                    var t = r.matches(e, o),
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
                return new r(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout)
            }
        }]), a);

    function a(e) {
        o(this, a), this.ctx = e, this.ie = !1;
        var t = window.navigator.userAgent;
        (-1 < t.indexOf("MSIE") || -1 < t.indexOf("Trident")) && (this.ie = !0)
    }

    function c(e) {
        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 5e3;
        o(this, c), this.ctx = e, this.iframes = t, this.exclude = n, this.iframesTimeout = i
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
            o = "",
            r = [];
        fuseOptions.tokenize ? r.push(searchQuery) : $.each(e.matches, function(e, t) {
            "tags" == t.key || "categories" == t.key ? r.push(t.value) : "contents" == t.key && (start = 0 < t.indices[0][0] - summaryInclude ? t.indices[0][0] - summaryInclude : 0, end = t.indices[0][1] + summaryInclude < i.length ? t.indices[0][1] + summaryInclude : i.length, o += i.substring(start, end), r.push(t.value.substring(t.indices[0][0], t.indices[0][1] - t.indices[0][0] + 1)))
        }), o.length < 1 && (o += i.substring(0, 2 * summaryInclude));
        var t = render($("#search-result-template").html(), {
            key: n,
            title: e.item.title,
            link: e.item.permalink,
            tags: e.item.tags,
            categories: e.item.categories,
            snippet: o
        });
        $("#search-results").append(t), $.each(r, function(e, t) {
            $("#summary-" + n).mark(t)
        })
    })
}

function param(e) {
    return decodeURIComponent((location.search.split(e + "=")[1] || "").split("&")[0]).replace(/\+/g, " ")
}

function render(e, t) {
    var n, i, o, r, s;
    for (i = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g, o = e; null !== (n = i.exec(e));) o = t[n[1]] ? o.replace(n[0], n[2]) : o.replace(n[0], "");
    for (r in e = o, t) s = new RegExp("\\$\\{\\s*" + r + "\\s*\\}", "g"), e = e.replace(s, t[r]);
    return e
}
searchQuery && ($("#search-query").val(searchQuery), executeSearch(searchQuery));