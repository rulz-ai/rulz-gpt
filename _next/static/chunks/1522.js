"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1522], {
    61017: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var i = n(51217)
          , r = n(10064)
          , a = n(35250)
          , s = n(70079)
          , o = n(45193);
        function l(e) {
            var t = e.text
              , n = (0,
            o.Z)()
              , i = (0,
            r._)((0,
            s.useState)(!0), 2)
              , l = i[0]
              , u = i[1]
              , d = (0,
            r._)((0,
            s.useState)(0), 2)
              , m = d[0]
              , f = d[1]
              , h = (0,
            s.useMemo)(function() {
                return new c().humanTypingDelaysQuertyDistance(t)
            }, [t]);
            return (0,
            s.useEffect)(function() {
                t && l && (u(!0),
                h.forEach(function(e, t) {
                    setTimeout(function() {
                        n() && (f(t),
                        t === h.length - 1 && u(!1))
                    }, e)
                }))
            }, [h, n, l, t]),
            (0,
            a.jsx)(a.Fragment, {
                children: t.substring(0, m + 1)
            })
        }
        var c = function() {
            function e() {
                (0,
                i._)(this, e)
            }
            var t = e.prototype;
            return t.qwertyDistance = function(e, t) {
                var n, i, a = {
                    q: [0, 0],
                    w: [1, 0],
                    e: [2, 0],
                    r: [3, 0],
                    t: [4, 0],
                    y: [5, 0],
                    u: [6, 0],
                    i: [7, 0],
                    o: [8, 0],
                    p: [9, 0],
                    a: [0, 1],
                    s: [1, 1],
                    d: [2, 1],
                    f: [3, 1],
                    g: [4, 1],
                    h: [5, 1],
                    j: [6, 1],
                    k: [7, 1],
                    l: [8, 1],
                    z: [0, 2],
                    x: [1, 2],
                    c: [2, 2],
                    v: [3, 2],
                    b: [4, 2],
                    n: [5, 2],
                    m: [6, 2]
                }, s = (0,
                r._)(null !== (n = a[e.toLowerCase()]) && void 0 !== n ? n : [0, 0], 2), o = s[0], l = s[1], c = (0,
                r._)(null !== (i = a[t.toLowerCase()]) && void 0 !== i ? i : [0, 0], 2);
                return Math.abs(o - c[0]) + Math.abs(l - c[1])
            }
            ,
            t.humanTypingDelaysQuertyDistance = function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, i = 0, r = [], a = 0; a < e.length; ++a) {
                    var s = void 0;
                    if (a > 0) {
                        var o = this.qwertyDistance(e[a - 1], e[a]);
                        s = 0 === o ? this.getRandomInt(t, Math.floor(n / 2)) : 1 === o ? this.getRandomInt(t, Math.floor(2 * n / 3)) : this.getRandomInt(t, n)
                    } else
                        s = this.getRandomInt(t, n);
                    r.push(s + i),
                    i += s
                }
                return r
            }
            ,
            t.getRandomInt = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }
            ,
            e
        }()
    },
    40578: function(e, t, n) {
        n.d(t, {
            V: function() {
                return ed
            },
            Z: function() {
                return el
            }
        });
        var i = n(39324)
          , r = n(71209)
          , a = n(10064)
          , s = n(4337)
          , o = n(35250)
          , l = n(84844)
          , c = n(8679)
          , u = n(54636)
          , d = n(42780)
          , m = n(19841)
          , f = n(72201)
          , h = n(26430)
          , g = n(84913)
          , p = n(44043)
          , v = n(82187)
          , x = n(69262)
          , y = n(70737)
          , b = n(97296)
          , j = n(91530)
          , k = n.n(j)
          , M = n(10721)
          , w = n.n(M)
          , N = n(70079)
          , T = n(1454)
          , _ = n(94968)
          , C = n(70671)
          , P = n(32004)
          , Z = n(21389)
          , S = n(86646)
          , I = n(66638)
          , B = n(1491)
          , L = n(18481)
          , E = n(61399)
          , F = n(56497)
          , z = n(61017)
          , D = n(48133)
          , R = n(41955)
          , W = n(94705)
          , A = n(7184)
          , U = n(23234)
          , O = n(21950)
          , H = n(35265);
        n(12952);
        var G = n(46266)
          , $ = n(25913);
        function V(e) {
            var t = e.conversation
              , n = (0,
            $.iF)()
              , i = (0,
            a._)((0,
            N.useState)(!1), 2)
              , r = i[0]
              , s = i[1];
            return (0,
            N.useEffect)(function() {
                return (0,
                l.LW)(c.n, {
                    deleteChat: function() {
                        s(!0)
                    }
                })
            }, []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(G.n, {
                    clientThreadId: t.id,
                    children: (0,
                    o.jsxs)("button", {
                        className: "absolute bottom-0 right-0 top-0 flex w-9 items-center justify-center rounded-lg text-token-text-tertiary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary",
                        children: [(0,
                        o.jsx)("div", {
                            className: "pointer-events-none absolute bottom-0 right-0 top-0 w-14 rounded-lg bg-gradient-to-l from-token-surface-primary from-60% to-transparent"
                        }), (0,
                        o.jsx)(H.Yr, {
                            className: "icon-md relative"
                        })]
                    })
                }), r && (0,
                o.jsx)(ed, {
                    title: t.title,
                    handleDelete: function() {
                        S.ZP.patchConversation(t.id, {
                            is_visible: !1
                        }).then(function() {
                            n()
                        }),
                        w().push("/", void 0, {
                            shallow: !0
                        })
                    },
                    onClose: function() {
                        s(!1)
                    }
                })]
            })
        }
        function q(e) {
            var t = e.conversation
              , n = e.onClose
              , i = function() {
                s !== t.title && (I.tQ.setTitle(t.id, s, I._L.User),
                u.A.logEvent(d.M.renameThread, {
                    threadId: t.id,
                    content: s
                }),
                S.ZP.patchConversation(t.id, {
                    title: s
                }).then(function() {
                    c()
                }))
            }
              , r = (0,
            a._)((0,
            N.useState)(t.title), 2)
              , s = r[0]
              , l = r[1]
              , c = (0,
            $.iF)();
            return (0,
            o.jsx)("input", {
                type: "text",
                value: s,
                onChange: function(e) {
                    l(e.target.value)
                },
                onKeyDown: function(e) {
                    switch (e.key) {
                    case "Escape":
                        n();
                        break;
                    case "Enter":
                        i(),
                        n()
                    }
                },
                onBlur: function() {
                    i(),
                    n()
                },
                autoFocus: !0,
                className: "w-full border border-token-border-light bg-transparent p-0 text-sm"
            })
        }
        function Y(e) {
            var t, n = e.conversation, i = e.isActive, r = e.elementRef, s = (0,
            a._)((0,
            N.useState)(!1), 2), f = s[0], h = s[1];
            (0,
            N.useEffect)(function() {
                return (0,
                l.LW)(c.n, {
                    editTitle: function() {
                        i && h(!0)
                    }
                })
            }, [i]);
            var g = (0,
            E.Z)(n.id, n.title, i)
              , p = g.resolvedTitle
              , v = g.isTypingEffect
              , x = (0,
            B.w$)()
              , y = (0,
            O.kg)(null !== (t = n.conversation_template_id) && void 0 !== t ? t : void 0).data;
            return (0,
            o.jsxs)("div", {
                className: "group relative active:opacity-90",
                children: [(0,
                o.jsx)("a", {
                    href: (0,
                    L.ZV)(n.id, y),
                    onClick: function(e) {
                        if (e.preventDefault(),
                        !i) {
                            var t;
                            t = n.id,
                            R.hx.abortAllRequests(),
                            u.A.logEvent(d.M.loadThread, {
                                threadId: t
                            }),
                            w().push((0,
                            L.ZV)(t, y), void 0, {
                                shallow: !0
                            })
                        }
                    },
                    onDoubleClick: function() {
                        h(!0)
                    },
                    ref: r,
                    className: (0,
                    m.default)("flex items-center gap-2 rounded-lg p-2", i ? "bg-token-surface-primary" : "hover:bg-token-surface-primary"),
                    children: (0,
                    o.jsxs)("div", {
                        className: "relative grow overflow-hidden whitespace-nowrap",
                        children: [v && i && x ? (0,
                        o.jsx)(z.Z, {
                            text: null != p ? p : ""
                        }) : p, (0,
                        o.jsx)("div", {
                            className: (0,
                            m.default)("absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l to-transparent", i ? "from-token-surface-primary" : "from-token-surface-primary group-hover:from-token-surface-primary dark:from-black")
                        })]
                    })
                }), f ? (0,
                o.jsx)("div", {
                    className: "absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-surface-tertiary",
                    children: (0,
                    o.jsx)(q, {
                        conversation: n,
                        onClose: function() {
                            h(!1)
                        }
                    })
                }) : i ? (0,
                o.jsx)(V, {
                    conversation: n
                }) : null]
            })
        }
        var Q = n(42798);
        function K() {
            var e = (0,
            s._)(["flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm\n", ""]);
            return K = function() {
                return e
            }
            ,
            e
        }
        function J() {
            var e = (0,
            s._)(["flex p-3 items-center gap-3 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer break-all\n", "\n"]);
            return J = function() {
                return e
            }
            ,
            e
        }
        function X() {
            var e = (0,
            s._)(["flex py-3 px-3 items-center gap-3 gizmo:gap-2 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
            return X = function() {
                return e
            }
            ,
            e
        }
        function ee() {
            var e = (0,
            s._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
            return ee = function() {
                return e
            }
            ,
            e
        }
        function et() {
            var e = (0,
            s._)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]);
            return et = function() {
                return e
            }
            ,
            e
        }
        function en() {
            var e = (0,
            s._)(["h-9 pb-2 pt-3 px-3 gizmo:px-2 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-50 gizmo:bg-white dark:bg-gray-900 gizmo:dark:bg-black gizmo:text-gizmo-gray-600"]);
            return en = function() {
                return e
            }
            ,
            e
        }
        function ei() {
            var e = (0,
            s._)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
            return ei = function() {
                return e
            }
            ,
            e
        }
        function er() {
            var e = (0,
            s._)(["absolute flex right-1 z-10 dark:text-gray-300 text-gray-800\n", ""]);
            return er = function() {
                return e
            }
            ,
            e
        }
        function ea() {
            var e = (0,
            s._)(["p-1 hover:text-token-text-primary"]);
            return ea = function() {
                return e
            }
            ,
            e
        }
        var es = (0,
        _.vU)({
            historyBucketToday: {
                id: "history.bucket.today",
                defaultMessage: "Today",
                description: "Label for today's history bucket"
            },
            historyBucketYesterday: {
                id: "history.bucket.yesterday",
                defaultMessage: "Yesterday",
                description: "Label for yesterday's history bucket"
            },
            historyBucketLastSeven: {
                id: "history.bucket.lastSeven",
                defaultMessage: "Previous 7 Days",
                description: "Label for the history bucket of the previous 7 days"
            },
            historyBucketLastThirty: {
                id: "history.bucket.lastThirty",
                defaultMessage: "Previous 30 Days",
                description: "Label for the history bucket of the previous 30 days"
            },
            unableToLoadHistory: {
                id: "history.unableToLoad",
                defaultMessage: "Unable to load history",
                description: "Error message when history fails to load"
            },
            retryButton: {
                id: "history.retryButton",
                defaultMessage: "Retry",
                description: "Button to retry loading history"
            },
            showMoreButton: {
                id: "history.showMoreButton",
                defaultMessage: "Show more",
                description: "Button to show more history items"
            },
            deleteModalTitle: {
                id: "history.deleteModalTitle",
                defaultMessage: "Delete chat?",
                description: "Title of the modal to confirm deleting a conversation"
            },
            deleteModalBody: {
                id: "history.deleteModalBody",
                defaultMessage: "This will delete {title}.",
                description: "Body of the modal to confirm deleting a conversation"
            },
            deleteModalConfirm: {
                id: "history.deleteModalConfirm",
                defaultMessage: "Delete",
                description: "Button to confirm deleting a conversation"
            },
            deleteModalCancel: {
                id: "history.deleteModalCancel",
                defaultMessage: "Cancel",
                description: "Button to cancel deleting a conversation"
            }
        })
          , eo = {
            initial: function(e) {
                return e.isNew ? {
                    opacity: 0,
                    height: 0,
                    overflow: "hidden"
                } : {}
            },
            animate: function() {
                return {
                    opacity: 1,
                    height: "auto"
                }
            },
            exit: function() {
                return {
                    opacity: 0,
                    height: 0
                }
            }
        };
        function el(e) {
            var t, n, r, s = e.activeId, l = e.onNewThread, c = e.filterConversation, u = (0,
            C.Z)(), d = (0,
            a._)((0,
            N.useState)(!1), 2), j = d[0], k = d[1], M = (0,
            a._)((0,
            N.useState)(0), 2), w = M[0], T = M[1], _ = (0,
            F.Z)(), Z = (0,
            $.MO)(), S = Z.conversations, I = Z.hasNextPage, B = Z.fetchNextPage, L = Z.isLoading, E = Z.isFetchingNextPage, z = Z.isError, R = (0,
            N.useRef)(null), W = (0,
            N.useCallback)(function(e) {
                var t;
                L || null == e || (null === (t = R.current) || void 0 === t || t.disconnect(),
                R.current = new IntersectionObserver(function(e) {
                    e[0].isIntersecting && I && B()
                }
                ),
                R.current.observe(e))
            }, [L, I, B]);
            (0,
            N.useEffect)(function() {
                return function() {
                    var e;
                    null === (e = R.current) || void 0 === e || e.disconnect()
                }
            }, []);
            var A = (0,
            $.iF)()
              , O = S;
            null != c && (O = O.filter(c));
            var H = (t = O,
            n = (0,
            N.useRef)(),
            r = (0,
            N.useRef)(),
            ((0,
            N.useEffect)(function() {
                n.current = r.current,
                r.current = t
            }, [t]),
            t === r.current) ? n.current : r.current);
            (0,
            N.useEffect)(function() {
                _(function() {
                    T(w + 1)
                }, (0,
                h.Z)((0,
                g.Z)(), Date.now()) + 1e3)
            }, [w, _]);
            var G = 0 === O.length
              , V = (0,
            U.Ml)()
              , q = (0,
            N.useMemo)(function() {
                return O.reduce(function(e, t) {
                    var n, i, r = new Date(null !== (i = null !== (n = t.update_time) && void 0 !== n ? n : t.create_time) && void 0 !== i ? i : 0), a = (0,
                    f.Z)(new Date, r);
                    if (0 === a)
                        e.recent.today.items.push(t);
                    else if (a <= 1)
                        e.recent.yesterday.items.push(t);
                    else if (a <= 7)
                        e.recent.lastSeven.items.push(t);
                    else if (a <= 30)
                        e.recent.lastThirty.items.push(t);
                    else if ((0,
                    x.Z)(r)) {
                        var s = (0,
                        v.Z)(r)
                          , o = (0,
                        p.Z)(r)
                          , l = "".concat(s, "-").concat(o);
                        e.dynamicMonths[l] ? e.dynamicMonths[l].items.push(t) : e.dynamicMonths[l] = {
                            label: u.formatDate(r, {
                                month: "long"
                            }),
                            items: [t]
                        }
                    } else {
                        var c = (0,
                        v.Z)(r)
                          , d = "".concat(c, "-");
                        e.dynamicYears[d] ? e.dynamicYears[d].items.push(t) : e.dynamicYears[d] = {
                            label: u.formatDate(r, {
                                year: "numeric"
                            }),
                            items: [t]
                        }
                    }
                    return e
                }, {
                    recent: {
                        today: {
                            label: (0,
                            o.jsx)(P.Z, (0,
                            i._)({}, es.historyBucketToday)),
                            items: []
                        },
                        yesterday: {
                            label: (0,
                            o.jsx)(P.Z, (0,
                            i._)({}, es.historyBucketYesterday)),
                            items: []
                        },
                        lastSeven: {
                            label: (0,
                            o.jsx)(P.Z, (0,
                            i._)({}, es.historyBucketLastSeven)),
                            items: []
                        },
                        lastThirty: {
                            label: (0,
                            o.jsx)(P.Z, (0,
                            i._)({}, es.historyBucketLastThirty)),
                            items: []
                        }
                    },
                    dynamicMonths: {},
                    dynamicYears: {}
                })
            }, [w, O]);
            return (0,
            o.jsxs)(ec, {
                $centered: L || z && G,
                children: [G && L && (0,
                o.jsx)(Q.Z, {
                    className: "m-auto"
                }), G && z && (0,
                o.jsxs)("div", {
                    className: "p-3 text-center italic text-gray-500",
                    children: [(0,
                    o.jsx)(P.Z, (0,
                    i._)({}, es.unableToLoadHistory)), !j && (0,
                    o.jsx)("div", {
                        className: "mt-1",
                        children: (0,
                        o.jsx)(D.z, {
                            as: "button",
                            color: "dark",
                            size: "small",
                            className: "m-auto mt-2",
                            onClick: function() {
                                k(!0),
                                A()
                            },
                            children: (0,
                            o.jsx)(P.Z, (0,
                            i._)({}, es.retryButton))
                        })
                    })]
                }), !L && (0,
                o.jsx)("div", {
                    children: (0,
                    o.jsx)(y.M, {
                        initial: !1,
                        children: [q.recent, q.dynamicMonths, q.dynamicYears].flatMap(function(e, t) {
                            return (0,
                            o.jsx)("span", {
                                children: Object.entries(e).map(function(e) {
                                    var t = (0,
                                    a._)(e, 2)
                                      , n = t[0]
                                      , i = t[1]
                                      , r = i.items
                                      , c = i.label;
                                    if ("today" !== n && !r.length)
                                        return null;
                                    var u = !!r.find(function(e) {
                                        var t;
                                        return O.length > 0 && e.id === (null === (t = O[0]) || void 0 === t ? void 0 : t.id)
                                    });
                                    return (0,
                                    o.jsxs)(b.E.div, {
                                        className: "relative gizmo:mt-5",
                                        layoutId: "bucket-".concat(n),
                                        layout: "position",
                                        initial: {
                                            height: 0,
                                            opacity: 1,
                                            position: "relative"
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                duration: .2,
                                                ease: "easeIn"
                                            }
                                        },
                                        children: [r.length > 0 && (0,
                                        o.jsx)(b.E.div, {
                                            className: V ? "" : (0,
                                            m.default)("sticky top-0", u ? "z-[16]" : "z-[14]"),
                                            layoutId: "bucketTitle-".concat(n),
                                            layout: "position",
                                            children: (0,
                                            o.jsx)(ep, {
                                                children: c
                                            })
                                        }), (0,
                                        o.jsx)("ol", {
                                            children: r.map(function(e, t) {
                                                var n, i = s === e.id, r = null == H ? void 0 : H.find(function(t) {
                                                    return t.id === e.id
                                                }), a = I && (null === (n = O[O.length - 5 - 1]) || void 0 === n ? void 0 : n.id) === e.id ? W : void 0;
                                                return (0,
                                                o.jsx)(b.E.li, {
                                                    className: (0,
                                                    m.default)("relative", u && 0 === t ? "z-[15]" : ""),
                                                    layoutId: "".concat(e.id),
                                                    layout: "position",
                                                    custom: {
                                                        isNew: !r
                                                    },
                                                    variants: eo,
                                                    initial: "initial",
                                                    animate: "animate",
                                                    exit: "exit",
                                                    children: V ? (0,
                                                    o.jsx)(Y, {
                                                        conversation: e,
                                                        isActive: i,
                                                        elementRef: a
                                                    }) : (0,
                                                    o.jsx)(eu, {
                                                        id: e.id,
                                                        title: e.title,
                                                        active: i,
                                                        onNewThread: l,
                                                        elementRef: a
                                                    })
                                                }, "history-item-".concat(e.id))
                                            })
                                        })]
                                    }, n)
                                })
                            }, "category-".concat(t))
                        })
                    })
                }), E && (0,
                o.jsx)("div", {
                    className: "m-4 mb-5 flex justify-center",
                    children: (0,
                    o.jsx)(Q.Z, {})
                })]
            })
        }
        var ec = Z.Z.div(K(), function(e) {
            return e.$centered && "h-full justify-center items-center"
        });
        function eu(e) {
            var t = e.id
              , n = e.title
              , i = e.active
              , r = e.onNewThread
              , s = e.elementRef
              , f = (0,
            B.w$)()
              , h = (0,
            a._)((0,
            N.useState)(!1), 2)
              , g = h[0]
              , p = h[1]
              , v = (0,
            N.useRef)(null)
              , x = (0,
            $.iF)()
              , y = (0,
            N.useCallback)(function(e) {
                var i, r;
                if (null == e || e.preventDefault(),
                p(!1),
                (null === (i = v.current) || void 0 === i ? void 0 : i.value) && (null === (r = v.current) || void 0 === r ? void 0 : r.value) !== n) {
                    var a = v.current.value;
                    I.tQ.setTitle(t, a, I._L.User),
                    u.A.logEvent(d.M.renameThread, {
                        threadId: t,
                        content: a
                    }),
                    S.ZP.patchConversation(t, {
                        title: a
                    }).then(function() {
                        x()
                    })
                }
            }, [t, x, n])
              , b = (0,
            N.useCallback)(function(e) {
                "Enter" === e.key && y()
            }, [y])
              , j = (0,
            N.useCallback)(function() {
                S.ZP.patchConversation(t, {
                    is_visible: !1
                }).then(function() {
                    x()
                }),
                r()
            }, [t, r, x])
              , M = (0,
            N.useCallback)(function(e) {
                R.hx.abortAllRequests(),
                e.preventDefault(),
                u.A.logEvent(d.M.loadThread, {
                    threadId: t
                }),
                w().push((0,
                L.ZV)(t), void 0, {
                    shallow: !0
                })
            }, [t])
              , _ = (0,
            E.Z)(t, n, i)
              , C = _.resolvedTitle
              , P = _.isTypingEffect
              , Z = (0,
            o.jsx)(T.IC0, {
                className: "icon-sm"
            })
              , F = (0,
            a._)((0,
            N.useState)(!1), 2)
              , D = F[0]
              , W = F[1];
            if ((0,
            N.useEffect)(function() {
                if (i)
                    return (0,
                    l.LW)(c.n, {
                        deleteChat: function() {
                            W(!0)
                        }
                    })
            }, [i]),
            g)
                return (0,
                o.jsxs)(ef, {
                    $active: i,
                    children: [Z, (0,
                    o.jsx)(eh, {
                        ref: v,
                        type: "text",
                        defaultValue: null != C ? C : "",
                        autoFocus: !0,
                        onKeyDown: b,
                        className: "mr-0",
                        onBlur: y
                    }), (0,
                    o.jsxs)(ex, {
                        $active: !0,
                        children: [(0,
                        o.jsx)(ey, {
                            onClick: y,
                            children: (0,
                            o.jsx)(T.UgA, {
                                className: "icon-sm"
                            })
                        }), (0,
                        o.jsx)(ey, {
                            onClick: function(e) {
                                e.preventDefault(),
                                p(!1)
                            },
                            children: (0,
                            o.jsx)(T.q5L, {
                                className: "icon-sm"
                            })
                        })]
                    })]
                });
            var A = P && i && f;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [i && D && (0,
                o.jsx)(ed, {
                    title: n,
                    handleDelete: j,
                    onClose: function() {
                        W(!1)
                    }
                }), (0,
                o.jsxs)(em, {
                    onClick: i ? k() : M,
                    $active: i,
                    className: (0,
                    m.default)("group", A && "animate-flash"),
                    ref: s,
                    children: [Z, (0,
                    o.jsxs)(eg, {
                        children: [A ? (0,
                        o.jsx)(z.Z, {
                            text: null != C ? C : ""
                        }) : C, (!P || !i) && (0,
                        o.jsx)(ev, {
                            $active: i
                        })]
                    }), i && (0,
                    o.jsxs)(ex, {
                        $active: i,
                        children: [(0,
                        o.jsx)(ey, {
                            onClick: function(e) {
                                e.preventDefault(),
                                p(!0)
                            },
                            children: (0,
                            o.jsx)(T.Nte, {
                                className: "icon-sm"
                            })
                        }), (0,
                        o.jsx)(ey, {
                            onClick: function() {
                                W(!0)
                            },
                            children: (0,
                            o.jsx)(T.Ybf, {
                                className: "icon-sm"
                            })
                        })]
                    })]
                })]
            })
        }
        function ed(e) {
            var t = e.title
              , n = e.handleDelete
              , a = e.onClose
              , s = (0,
            C.Z)();
            return (0,
            o.jsx)(A.Z, {
                isOpen: !0,
                onClose: a,
                type: "success",
                title: s.formatMessage(es.deleteModalTitle),
                primaryButton: (0,
                o.jsx)(W.ZP.Button, {
                    title: s.formatMessage(es.deleteModalConfirm),
                    color: "danger",
                    onClick: function() {
                        n(),
                        a()
                    }
                }),
                secondaryButton: (0,
                o.jsx)(W.ZP.Button, {
                    title: s.formatMessage(es.deleteModalCancel),
                    color: "neutral",
                    onClick: a
                }),
                children: (0,
                o.jsx)(P.Z, (0,
                r._)((0,
                i._)({}, es.deleteModalBody), {
                    values: {
                        title: (0,
                        o.jsx)("strong", {
                            children: t
                        })
                    }
                }))
            })
        }
        var em = Z.Z.a(J(), function(e) {
            return e.$active ? "bg-gray-100 dark:bg-gray-800 pr-14 dark:hover:bg-gray-800" : "bg-gray-50 gizmo:bg-white gizmo:hover:bg-gray-100 hover:pr-4 dark:bg-gray-900"
        })
          , ef = Z.Z.div(X(), function(e) {
            return e.$active ? "pr-14 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" : "bg-gray-100 dark:bg-gray-900"
        })
          , eh = Z.Z.input(ee())
          , eg = Z.Z.div(et())
          , ep = Z.Z.h3(en())
          , ev = Z.Z.div(ei(), function(e) {
            return e.$active ? "dark:from-gray-800 from-gray-100" : "dark:from-gray-900 from-gray-50 gizmo:from-white group-hover:from-gray-100 dark:group-hover:from-[#2A2B32]"
        })
          , ex = Z.Z.div(er(), function(e) {
            return e.$active ? "visible" : "invisible group-hover:visible"
        })
          , ey = Z.Z.button(ea())
    },
    4795: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return M
            }
        });
        var i = n(21722)
          , r = n(10064)
          , a = n(38104)
          , s = n(35250)
          , o = n(5053)
          , l = n(86646)
          , c = n(55548)
          , u = n(82473)
          , d = n(25494)
          , m = n(61888)
          , f = n(91530)
          , h = n.n(f)
          , g = n(70079)
          , p = n(70671)
          , v = n(94968)
          , x = n(94705)
          , y = n(7184)
          , b = n(72290)
          , j = n(37039)
          , k = n(12296);
        function M(e) {
            var t, n, f, v, M = e.workspace, N = (0,
            p.Z)(), T = (0,
            c.EV)(c.B.InviteUsersToWorkspace), _ = (0,
            r._)((0,
            g.useState)([]), 2), C = _[0], P = _[1], Z = (0,
            k.Gk)(M.id), S = (0,
            j.Ob)(Z), I = (t = M.id,
            f = (0,
            p.Z)(),
            v = (0,
            u.NL)(),
            (0,
            d.D)({
                mutationFn: (n = (0,
                i._)(function(e) {
                    var n, r, s, o, c, u;
                    return (0,
                    a.Jh)(this, function(d) {
                        switch (d.label) {
                        case 0:
                            var m;
                            for (n = e.emails,
                            r = e.role,
                            s = e.resendEmails,
                            o = [],
                            c = Math.max(5, Math.round(n.length / 10)),
                            u = 0; u < n.length; u += c)
                                o.push(n.slice(u, u + c));
                            return m = (0,
                            i._)(function(e) {
                                return (0,
                                a.Jh)(this, function(n) {
                                    return [2, l.ZP.addWorkspaceUsers(t, e, r, s).then(function(e) {
                                        return e.errored_emails.length > 0 && b.m.danger(f.formatMessage(w.inviteMessageFailure, {
                                            emailsStr: e.errored_emails.map(function(e) {
                                                var t = e.email_address
                                                  , n = e.error;
                                                return "".concat(t, ": ").concat(n)
                                            }).join(", ")
                                        })),
                                        e.account_invites
                                    }).catch(function(e) {
                                        throw b.m.danger(e.message),
                                        e
                                    })]
                                })
                            }),
                            [4, Promise.all(o.map(function(e) {
                                return function(e) {
                                    return m.apply(this, arguments)
                                }(e)
                            }))];
                        case 1:
                            return [2, d.sent().flat()]
                        }
                    })
                }),
                function(e) {
                    return n.apply(this, arguments)
                }
                ),
                onSuccess: function() {
                    v.invalidateQueries({
                        queryKey: ["workspace", "invites", t]
                    })
                }
            })).mutateAsync, B = (0,
            r._)((0,
            g.useState)(!1), 2), L = B[0], E = B[1], F = (0,
            r._)((0,
            g.useState)(j.t0.INITIAL), 2), z = F[0], D = F[1], R = (0,
            r._)((0,
            g.useState)([]), 2), W = R[0], A = R[1], U = (0,
            r._)((0,
            g.useState)(!0), 2), O = U[0], H = U[1], G = (0,
            g.useCallback)(function() {
                A([]),
                D(j.t0.INITIAL),
                E(!1),
                P([])
            }, []), $ = (0,
            s.jsx)(x.ZP.Button, {
                title: L ? N.formatMessage(w.inviteMemberInviteSubmitButtonLoading) : N.formatMessage(w.inviteMemberInviteSubmitButton),
                color: "primary",
                disabled: L || 0 === W.length,
                onClick: (0,
                i._)(function() {
                    var e, t, n;
                    return (0,
                    a.Jh)(this, function(i) {
                        switch (i.label) {
                        case 0:
                            E(!0),
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, , 3, 4]),
                            W.length > 5 && b.m.info(N.formatMessage(w.inviteMessageLoading, {
                                numRows: W.length
                            }), {
                                hasCloseButton: !0
                            }),
                            e = [["admin", o.r3.ADMIN], ["owner", o.r3.OWNER], ["member", o.r3.STANDARD]],
                            [4, Promise.all((0,
                            m.compact)(e.map(function(e) {
                                var t = (0,
                                r._)(e, 2)
                                  , n = t[0]
                                  , i = t[1]
                                  , a = W.filter(function(e) {
                                    return e.role === n
                                }).map(function(e) {
                                    return e.email
                                });
                                return a.length > 0 && I({
                                    emails: a,
                                    role: i,
                                    resendEmails: O
                                })
                            })))];
                        case 2:
                            return t = i.sent(),
                            c.vm.closeModal(c.B.InviteUsersToWorkspace),
                            G(),
                            (n = t.flat().length) > 0 && b.m.success(N.formatMessage(w.inviteMessageSuccess, {
                                numRows: n,
                                userStr: 1 === n ? "user" : "users",
                                workspaceName: M.name
                            })),
                            [3, 4];
                        case 3:
                            return E(!1),
                            [7];
                        case 4:
                            return [2]
                        }
                    })
                })
            }), V = (0,
            s.jsx)(x.ZP.Button, {
                title: N.formatMessage(w.inviteMemberInviteNextButton),
                color: "primary",
                disabled: 0 === C.length,
                onClick: (0,
                i._)(function() {
                    var e;
                    return (0,
                    a.Jh)(this, function(t) {
                        return e = new Set,
                        A(C.reduce(function(t, n) {
                            return e.has(n.value) || t.push(n.value),
                            e.add(n.value),
                            t
                        }, []).map(function(e) {
                            return {
                                email: e,
                                role: S.member
                            }
                        })),
                        D(j.t0.CSV_TABLE),
                        [2]
                    })
                })
            });
            return (0,
            s.jsx)(y.Z, {
                size: "custom",
                className: "max-w-lg",
                isOpen: T,
                onClose: h(),
                type: "success",
                title: (null == M ? void 0 : M.name) != null ? N.formatMessage(w.inviteMemberModalTitle, {
                    workspaceName: M.name
                }) : N.formatMessage(w.inviteMemberModalTitleUntitledWorkspace),
                description: N.formatMessage(w.inviteMemberModalDescription),
                primaryButton: z === j.t0.INITIAL ? V : $,
                secondaryButton: (0,
                s.jsx)(x.ZP.Button, {
                    title: z === j.t0.INITIAL ? N.formatMessage(w.inviteMemberInviteCancelButton) : N.formatMessage(w.inviteMemberInviteBackButton),
                    color: "neutral",
                    onClick: function() {
                        z !== j.t0.INITIAL ? D(j.t0.INITIAL) : (c.vm.closeModal(c.B.InviteUsersToWorkspace),
                        G())
                    }
                }),
                children: (0,
                s.jsx)("div", {
                    className: "mb-6 flex flex-col text-sm",
                    children: (0,
                    s.jsx)(j.ZP, {
                        step: z,
                        workspace: M,
                        onStepChange: D,
                        emailTableRows: W,
                        onEmailTableRowsChange: A,
                        emailTextareaValue: C,
                        onEmailTextareaValueChange: P,
                        resendEmails: O,
                        onResendEmailsChange: H,
                        canResendInviteEmails: !0
                    })
                })
            })
        }
        var w = (0,
        v.vU)({
            inviteMemberModalTitle: {
                id: "adminPage.inviteMemberModalTitle",
                defaultMessage: "Invite members to the {workspaceName} workspace",
                description: "The title of the invite member modal"
            },
            inviteMemberModalTitleUntitledWorkspace: {
                id: "adminPage.inviteMemberModalTitleUntitledWorkspace",
                defaultMessage: "Invite members to this workspace",
                description: "The title of the invite member modal when a workspace has no name"
            },
            inviteMemberInviteNextButton: {
                id: "adminPage.inviteMemberInviteNextButton",
                defaultMessage: "Next",
                description: "The title of the invite member modal next button"
            },
            inviteMemberInviteSubmitButton: {
                id: "adminPage.inviteMemberInviteSubmitButton",
                defaultMessage: "Send invites",
                description: "The title of the invite member modal submit button"
            },
            inviteMemberInviteSubmitButtonLoading: {
                id: "adminPage.inviteMemberInviteSubmitButtonLoading",
                defaultMessage: "Sending invites...",
                description: "Button label while inviting members"
            },
            inviteMemberInviteCancelButton: {
                id: "adminPage.inviteMemberInviteCancelButton",
                defaultMessage: "Cancel",
                description: "The title of the invite member modal cancel button"
            },
            inviteMemberInviteBackButton: {
                id: "adminPage.inviteMemberInviteBackButton",
                defaultMessage: "Back",
                description: "The title of the invite member modal back button"
            },
            inviteMemberModalDescription: {
                id: "adminPage.inviteMemberModalDescription",
                defaultMessage: "This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training.",
                description: "The description of the invite member modal"
            },
            fileTooLargeWarning: {
                id: "adminPage",
                defaultMessage: "File is too large. Please upload a CSV file smaller than {maxSize}.",
                description: "Error when uploading a file that is too large"
            },
            inviteMessageLoading: {
                id: "adminPage.inviteMessageLoading",
                defaultMessage: "Sending out {numRows} invites, this may take a minute...",
                description: "Loading message when invites are being sent"
            },
            inviteMessageSuccess: {
                id: "adminPage.inviteMessageSuccess",
                defaultMessage: "Invited {numRows} {userStr} to {workspaceName}",
                description: "Message on successfully sending out invites"
            },
            inviteMessageFailure: {
                id: "adminPage.inviteMessageFailure",
                defaultMessage: "Unable to invite {emailsStr}",
                description: "Message that shows which emails were unsuccessful at being invited"
            }
        })
    },
    14957: function(e, t, n) {
        n.d(t, {
            ZP: function() {
                return eS
            }
        });
        var i = n(39324)
          , r = n(71209)
          , a = n(10064)
          , s = n(4337)
          , o = n(35250)
          , l = n(65649)
          , c = n(17944)
          , u = n(25687)
          , d = n(32148)
          , m = n(19841)
          , f = n(70079)
          , h = n(1454)
          , g = n(70671)
          , p = n(32004)
          , v = n(94968)
          , x = n(21389)
          , y = n(48133)
          , b = n(55548)
          , j = n(85660)
          , k = n(15635)
          , M = n(41187)
          , w = n(23234)
          , N = n(29450)
          , T = n(74424)
          , _ = n(11547)
          , C = n(21722)
          , P = n(38104)
          , Z = n(4795)
          , S = n(86646)
          , I = n(54636)
          , B = n(42780)
          , L = n(10721)
          , E = n(59517)
          , F = n(42798)
          , z = n(72290)
          , D = n(97296)
          , R = n(61236)
          , W = n(8874);
        function A() {
            var e = (0,
            s._)(["group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);
            return A = function() {
                return e
            }
            ,
            e
        }
        function U(e) {
            var t = e.showFreeTrialLoadingPayment
              , n = e.handleGetPaymentLink
              , s = (0,
            g.Z)()
              , l = (0,
            R.a)({
                queryKey: ["claimedReferralInvite"],
                queryFn: function() {
                    return S.ZP.getClaimedReferralInvite()
                },
                refetchOnMount: !1,
                refetchOnWindowFocus: !1,
                refetchInterval: !1,
                refetchOnReconnect: !1
            })
              , c = l.data
              , u = l.isLoading
              , d = l.isSuccess
              , v = null == c ? void 0 : c.invite_code
              , x = (0,
            a._)((0,
            f.useState)(!1), 2)
              , y = x[0]
              , b = x[1];
            if ((0,
            f.useEffect)(function() {
                v && !y && d && (b(!0),
                W.m9.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),
                I.A.logEvent(B.M.chatgptReferralShowClaimedSidebartMenuPromo))
            }, [v, b, y, d]),
            !v || u || !d)
                return null;
            var j = v.invite_metadata.invite_data
              , k = (null == j ? void 0 : j.referral_trial_duration_months) ? (null == j ? void 0 : j.referral_trial_duration_months) > 1 ? s.formatMessage(H.monthsOfBenefit, {
                referralTrialDurationMonths: null == j ? void 0 : j.referral_trial_duration_months
            }) : s.formatMessage(H.daysOfBenefit, {
                referralTrialDurationDays: null == j ? void 0 : j.referral_trial_duration_days
            }) : null;
            return (0,
            o.jsx)(D.E.div, {
                className: (0,
                m.default)("relative", {
                    "cursor-progress opacity-50": t
                }),
                layout: "position",
                initial: {
                    y: -10,
                    opacity: 1
                },
                animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: .1,
                        ease: "easeIn"
                    }
                },
                children: (0,
                o.jsxs)(O, {
                    className: (0,
                    m.default)(t && "opacity-75"),
                    onClick: function() {
                        t || ((0,
                        E.Vk)(!0),
                        n())
                    },
                    children: [(0,
                    o.jsxs)("div", {
                        className: "flex w-full flex-row items-center justify-start gap-3 ",
                        children: [(0,
                        o.jsx)(h.E33, {
                            className: "icon-sm shrink-0"
                        }), (0,
                        o.jsx)(p.Z, (0,
                        r._)((0,
                        i._)({}, H.freeTrialCta), {
                            values: {
                                duration: k
                            }
                        }))]
                    }), !t && (0,
                    o.jsx)(h.q5L, {
                        onClick: function(e) {
                            e.stopPropagation(),
                            (0,
                            E.zG)(!0),
                            (0,
                            E.H1)(!0)
                        },
                        className: "icon-md shrink-0 rounded-full p-0.5 text-gray-400 opacity-50  transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500  group-hover:opacity-100"
                    }), (0,
                    o.jsx)("span", {
                        className: "absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"
                    })]
                })
            })
        }
        var O = x.Z.a(A())
          , H = (0,
        v.vU)({
            freeTrialCta: {
                id: "PaymentMenuItems.freeTrialCta",
                defaultMessage: "Get {duration}!",
                description: "Get free trial menu item"
            },
            monthsOfBenefit: {
                id: "FreeTrialMenuItem.monthsOfBenefit",
                defaultMessage: "{referralTrialDurationMonths, plural, one {one month free} other {# months free}}",
                description: "Duration of the referral trial benefits in months"
            },
            daysOfBenefit: {
                id: "FreeTrialMenuItem.daysOfBenefit",
                defaultMessage: "{referralTrialDurationDays, plural, one {one day free} other {# days free}}",
                description: "Duration of the referral trial benefits in days"
            }
        })
          , G = n(27382)
          , $ = n(35265)
          , V = n(62682)
          , q = n(59904)
          , Y = n(69789);
        function Q() {
            var e, t = (0,
            L.useRouter)(), n = (0,
            g.Z)(), r = (0,
            c.hz)(), a = (0,
            c.$T)(), s = (0,
            c.WY)(), l = (0,
            c.Zp)(), u = (e = (0,
            C._)(function() {
                var e;
                return (0,
                P.Jh)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        (0,
                        E.Vk)(!0),
                        I.A.logEvent(B.M.clickAccountPaymentCheckout),
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, 4, 5]),
                        [4, S.ZP.getCheckoutLink()];
                    case 2:
                        return e = i.sent(),
                        t.push(e.url),
                        [3, 5];
                    case 3:
                        return i.sent(),
                        z.m.warning(n.formatMessage(ee.paymentErrorWarning), {
                            hasCloseButton: !0
                        }),
                        (0,
                        E.Vk)(!1),
                        [3, 5];
                    case 4:
                        return [7];
                    case 5:
                        return [2]
                    }
                })
            }),
            function() {
                return e.apply(this, arguments)
            }
            ), d = (0,
            E.tS)(function(e) {
                return e.didCloseFreeTrial
            }), m = (0,
            E.tS)(function(e) {
                return e.showFreeTrialLoadingPayment
            }), h = !d && l, v = !s && !r.has("disable_upgrade_ui"), x = (0,
            c.KQ)(), y = (0,
            c.ec)(c.F_.isBusinessWorkspace), b = !a && !y && (!1 === s || r.has(V.L0.Teams)), j = (0,
            Y.C)(function(e) {
                return {
                    setShowReferralInviteModal: e.setShowReferralInviteModal
                }
            }).setShowReferralInviteModal, k = (0,
            f.useCallback)(function() {
                W.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),
                I.A.logEvent(B.M.chatgptReferralInviteSidebarClicked),
                j(!0, function() {
                    I.A.logEvent(B.M.clickSidebarAccountPaymentMenuItem)
                })
            }, [j]), M = (0,
            c.ec)(c.F_.isTeamPlan);
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(r.has(V.a3) || s) && (0,
                o.jsx)(X, {
                    handleReferralInvite: k
                }), !s && h && (0,
                o.jsx)(U, {
                    showFreeTrialLoadingPayment: m,
                    handleGetPaymentLink: u
                }), M && (0,
                o.jsx)(J, {}), b && (0,
                o.jsx)(G.Vq, {
                    onClick: h ? function() {
                        m || ((0,
                        E.Vk)(!0),
                        u())
                    }
                    : function() {
                        I.A.logEvent(B.M.clickSidebarAccountPaymentMenuItem);
                        var e = t.asPath.split("#");
                        t.push("".concat(e[0], "#pricing"))
                    }
                    ,
                    className: "rounded-lg gizmo:px-2",
                    children: (0,
                    o.jsxs)("span", {
                        className: "flex w-full flex-row flex-wrap-reverse justify-between",
                        children: [(0,
                        o.jsx)("div", {
                            className: "flex items-center gap-3 gizmo:gap-2",
                            children: (0,
                            o.jsx)(K, {
                                wasPaidCustomer: x,
                                showFreeTrialLoadingPayment: m,
                                showUpgradeToTeam: r.has(V.L0.Teams) && b
                            })
                        }), !r.has(V.a3) && v && !x && (0,
                        o.jsx)("span", {
                            className: "rounded-md bg-yellow-200 px-2 py-0.5 text-xs font-medium uppercase text-gray-800",
                            children: (0,
                            o.jsx)(p.Z, (0,
                            i._)({}, ee.newLabel))
                        })]
                    })
                })]
            })
        }
        var K = function(e) {
            var t = e.wasPaidCustomer
              , n = e.showFreeTrialLoadingPayment
              , r = e.showUpgradeToTeam
              , a = (0,
            w.Ml)();
            return n ? (0,
            o.jsx)(F.Z, {
                className: "icon-sm shrink-0"
            }) : (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)("span", {
                    className: (0,
                    m.default)(a && "flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light bg-black"),
                    children: r ? (0,
                    o.jsx)(q.Bj, {}) : (0,
                    o.jsx)($.k4, {
                        className: "icon-sm shrink-0"
                    })
                }), (0,
                o.jsx)("div", {
                    className: "flex flex-col",
                    children: t ? (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, ee.renewPlus)) : (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                        o.jsx)("span", {
                            className: "gizmo:font-semibold",
                            children: (0,
                            o.jsx)(p.Z, (0,
                            i._)({}, ee.upgradeToPlus))
                        }), a && (0,
                        o.jsx)("span", {
                            className: "text-xs text-token-text-secondary line-clamp-1",
                            children: r ? (0,
                            o.jsx)(p.Z, (0,
                            i._)({}, ee.upgradeToTeamUpsell)) : (0,
                            o.jsx)(p.Z, (0,
                            i._)({}, ee.upgradeToPlusUpsell))
                        })]
                    })
                })]
            })
        }
          , J = function() {
            var e = (0,
            c.ec)(function(e) {
                return e.currentWorkspace
            });
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(G.Vq, {
                    onClick: function() {
                        b.vm.openModal(b.B.InviteUsersToWorkspace)
                    },
                    className: "rounded-md",
                    children: (0,
                    o.jsx)("span", {
                        className: "flex w-full flex-row flex-wrap-reverse justify-between",
                        children: (0,
                        o.jsxs)("span", {
                            className: "flex items-center gap-3 gizmo:gap-2",
                            children: [(0,
                            o.jsx)(h.zy7, {
                                className: "icon-sm shrink-0"
                            }), (0,
                            o.jsx)(p.Z, (0,
                            i._)({}, ee.inviteMembers))]
                        })
                    })
                }), null != e ? (0,
                o.jsx)(Z.Z, {
                    workspace: e
                }) : null]
            })
        }
          , X = function(e) {
            var t = e.handleReferralInvite
              , n = (0,
            c.hz)().has(V.a3)
              , r = (0,
            R.a)({
                queryKey: ["referralInvites"],
                queryFn: function() {
                    return S.ZP.getEligibleReferralInvites()
                },
                enabled: n
            })
              , s = r.data
              , l = r.isSuccess
              , u = (null == s ? void 0 : s.invites_remaining) && (null == s ? void 0 : s.invites_remaining) > 0 && l
              , d = (0,
            a._)((0,
            f.useState)(!1), 2)
              , m = d[0]
              , g = d[1];
            return ((0,
            f.useEffect)(function() {
                u && !m && (g(!0),
                W.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),
                I.A.logEvent(B.M.chatgptReferralShowSidebarMenuItem))
            }, [u, g, m]),
            u) ? (0,
            o.jsx)(G.Vq, {
                onClick: t,
                className: "rounded-md",
                children: (0,
                o.jsxs)("span", {
                    className: "flex w-full flex-row flex-wrap-reverse justify-between",
                    children: [(0,
                    o.jsxs)("span", {
                        className: "flex items-center gap-3 gizmo:gap-2",
                        children: [(0,
                        o.jsx)(h.zy7, {
                            className: "icon-sm shrink-0"
                        }), (0,
                        o.jsx)(p.Z, (0,
                        i._)({}, ee.inviteReferral))]
                    }), (0,
                    o.jsx)("span", {
                        className: "rounded-md bg-yellow-200 px-2 py-0.5 text-xs font-medium uppercase text-gray-800",
                        children: (0,
                        o.jsx)(p.Z, (0,
                        i._)({}, ee.newLabel))
                    })]
                })
            }) : null
        }
          , ee = (0,
        v.vU)({
            upgradeToPlus: {
                id: "PaymentMenuItems.upgradeToPlus.0",
                defaultMessage: "Upgrade",
                description: "Upgrade to plan menu item"
            },
            upgradeToTeamUpsell: {
                id: "PaymentMenuItems.upgradeToTeamUpsell",
                defaultMessage: "Collaborate on a Team plan",
                description: "Upgrade to Team upsell"
            },
            upgradeToPlusUpsell: {
                id: "PaymentMenuItems.upgradeToPlusUpsell.0",
                defaultMessage: "Get GPT-4, DALL\xb7E, and more",
                description: "Upgrade to Plus upsell"
            },
            renewPlus: {
                id: "PaymentMenuItems.renewPlus",
                defaultMessage: "Renew Plus",
                description: "Renew Plus menu item"
            },
            inviteReferral: {
                id: "PaymentMenuItems.inviteReferral",
                defaultMessage: "Refer a friend",
                description: "Invite referral menu item"
            },
            inviteMembers: {
                id: "PaymentMenuItems.inviteMembers.0",
                defaultMessage: "Invite members",
                description: "Invite members menu item"
            },
            newLabel: {
                id: "PaymentMenuItems.newLabel",
                defaultMessage: "NEW",
                description: "Label for new features or items"
            },
            paymentErrorWarning: {
                id: "PaymentMenuItems.paymentErrorWarning",
                description: "Error toast when payment page has an error",
                defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
            }
        })
          , et = n(64502)
          , en = n(5053)
          , ei = n(1491)
          , er = n(40971)
          , ea = n(7813)
          , es = n(4536)
          , eo = n(61888)
          , el = n(12952)
          , ec = n(12296)
          , eu = n(31731)
          , ed = n(4551)
          , em = n(18481);
        function ef() {
            var e = (0,
            c.WY)()
              , t = (0,
            f.useCallback)(function() {
                I.A.logEvent(B.M.clickSidebarAccountPortalMenuItem),
                (0,
                ed.MG)()
            }, [])
              , n = (0,
            w.Og)();
            return (0,
            o.jsxs)(o.Fragment, {
                children: [!0 === e && (0,
                o.jsxs)(G.ZP, {
                    onClick: t,
                    children: [(0,
                    o.jsx)($.PQ, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, eh.myPlan))]
                }), n && (0,
                o.jsxs)(G.ZP, {
                    href: (0,
                    em.L7)(),
                    children: [(0,
                    o.jsx)($.PN, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, eh.myGpts))]
                }), (0,
                o.jsxs)(G.ZP, {
                    onClick: function() {
                        return b.vm.openModal(b.B.UserContext)
                    },
                    children: [(0,
                    o.jsx)($.SA, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, eh.chatPreferences))]
                })]
            })
        }
        var eh = (0,
        v.vU)({
            myPlan: {
                id: "popoverNavigation.myPlan",
                defaultMessage: "My plan",
                description: "My plan menu item"
            },
            chatPreferences: {
                id: "popoverNavigation.chatPreferences",
                defaultMessage: "Custom instructions",
                description: "Custom instructions menu item"
            },
            myGpts: {
                id: "popoverNavigation.myGpts",
                defaultMessage: "My GPTs",
                description: "My GPTs menu item"
            }
        })
          , eg = n(73040)
          , ep = n.n(eg);
        function ev() {
            var e = (0,
            w.Ml)();
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsxs)(ex, {
                    href: "/admin",
                    children: [(0,
                    o.jsx)($.oq, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, ey.myWorkspaceSettings))]
                }), e ? (0,
                o.jsxs)(ex, {
                    href: (0,
                    em.L7)(),
                    children: [(0,
                    o.jsx)($.PN, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, ey.myGpts))]
                }) : (0,
                o.jsxs)(ex, {
                    href: "/templates",
                    children: [(0,
                    o.jsx)(h.Wpg, {
                        className: "icon-sm"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, ey.templates))]
                }), (0,
                o.jsxs)(G.ZP, {
                    onClick: function() {
                        return b.vm.openModal(b.B.UserContext)
                    },
                    children: [(0,
                    o.jsx)($.SA, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, ey.chatPreferences))]
                })]
            })
        }
        function ex(e) {
            var t = e.href
              , n = e.children;
            return (0,
            o.jsx)(ea.v.Item, {
                children: function(e) {
                    var i = e.active;
                    return (0,
                    o.jsx)(ep(), {
                        href: t,
                        children: (0,
                        o.jsx)(G.ZB, {
                            $as: "span",
                            className: (0,
                            m.default)(i ? "bg-gray-100 dark:bg-gray-800" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"),
                            children: n
                        })
                    })
                }
            })
        }
        var ey = (0,
        v.vU)({
            myWorkspaceSettings: {
                id: "workspacePopoverNavigation.myWorkspaceSettings",
                defaultMessage: "Manage workspace",
                description: "Workspace settings menu item"
            },
            templates: {
                id: "workspacePopoverNavigation.templates",
                defaultMessage: "Templates",
                description: "Template directory menu item"
            },
            chatPreferences: {
                id: "workspacePopoverNavigation.chatPreferences",
                defaultMessage: "Custom instructions",
                description: "Custom instructions menu item"
            },
            myGpts: {
                id: "workspacePopoverNavigation.myGpts",
                defaultMessage: "My GPTs",
                description: "My GPTs menu item"
            }
        });
        function eb(e) {
            var t = e.onClickSettings;
            return (0,
            o.jsxs)(ea.v, {
                as: "div",
                className: "group relative",
                children: [(0,
                o.jsx)(e_, {}), (0,
                o.jsx)(eu.m, {
                    children: (0,
                    o.jsx)(ea.v.Items, {
                        className: "absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-lg bg-white pb-1.5 pt-1 outline-none gizmo:border gizmo:border-gray-100 dark:bg-gray-950 gizmo:dark:border-gray-800 gizmo:dark:bg-gray-900",
                        children: (0,
                        o.jsx)(eT, {
                            onClickSettings: t
                        })
                    })
                })]
            })
        }
        function ej() {
            var e = (0,
            c.hz)()
              , t = (0,
            g.Z)()
              , n = (0,
            c.aF)();
            return n ? (0,
            o.jsxs)("div", {
                className: "flex items-center justify-between gap-2 px-3 pb-0 pt-2",
                children: [(0,
                o.jsx)("div", {
                    className: "text-xs text-token-text-secondary",
                    children: null == n ? void 0 : n.email
                }), e.has(V.L0.Teams) && (0,
                o.jsx)(k.u, {
                    label: t.formatMessage(eP.addWorkspaceTooltip),
                    side: "right",
                    children: (0,
                    o.jsx)("button", {
                        onClick: function() {
                            return (0,
                            ed.MG)()
                        },
                        children: (0,
                        o.jsx)(h.OvN, {
                            className: "icon-sm flex-shrink-0 text-token-text-primary"
                        })
                    })
                })]
            }) : null
        }
        function ek() {
            var e = (0,
            c.ec)(function(e) {
                return e.currentWorkspace
            })
              , t = (0,
            g.Z)();
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(ej, {}), (0,
                o.jsxs)("div", {
                    className: "flex w-full items-center justify-start gap-2 px-3 py-1",
                    children: [(0,
                    o.jsx)(el.zf, {
                        iconSize: "medium",
                        workspace: e
                    }), (0,
                    o.jsx)("div", {
                        className: "flex-grow text-base dark:text-white",
                        children: (0,
                        ec.CV)(t, e)
                    })]
                }), (0,
                o.jsx)(G.R, {})]
            })
        }
        function eM() {
            var e = (0,
            c.ec)(function(e) {
                return e.workspaces
            })
              , t = (0,
            c.ec)(function(e) {
                return e.currentWorkspace
            })
              , n = (0,
            a._)((0,
            f.useState)(!1), 2)
              , i = n[0]
              , r = n[1]
              , s = (0,
            eo.compact)([e.find(function(e) {
                return e.structure === en.CZ.PERSONAL
            })].concat((0,
            et._)(e.filter(function(e) {
                return e.structure !== en.CZ.PERSONAL
            }))));
            return s.sort(function(e, t) {
                return e.structure === en.CZ.PERSONAL ? 1 : t.structure === en.CZ.PERSONAL ? -1 : 0
            }),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(ej, {}), (0,
                o.jsx)("div", {
                    className: "flex w-full flex-col",
                    children: s.map(function(e) {
                        return (0,
                        o.jsx)(G.ZP, {
                            disabled: e.deactivated,
                            onClick: function() {
                                e.id !== (null == t ? void 0 : t.id) && (r(!0),
                                c.w_.setCurrentWorkspace(e),
                                (0,
                                er.M)())
                            },
                            children: (0,
                            o.jsx)("div", {
                                className: "flex w-full items-center justify-start gap-3 py-1",
                                children: e.deactivated ? (0,
                                o.jsx)(eN, {
                                    workspace: e,
                                    isLoading: i
                                }) : (0,
                                o.jsx)(ew, {
                                    workspace: e,
                                    isLoading: i,
                                    currentWorkspaceId: null == t ? void 0 : t.id
                                })
                            })
                        }, e.id)
                    })
                }), (0,
                o.jsx)(G.R, {})]
            })
        }
        function ew(e) {
            var t = e.workspace
              , n = e.isLoading
              , i = e.currentWorkspaceId
              , r = (0,
            g.Z)();
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(el.zf, {
                    iconSize: "small",
                    workspace: t,
                    className: (0,
                    m.default)({
                        "flex-shrink-0": !0
                    })
                }), (0,
                o.jsx)("div", {
                    className: (0,
                    m.default)({
                        "flex-grow truncate": !0
                    }),
                    children: (0,
                    ec.CV)(r, t)
                }), n && (0,
                o.jsx)(F.Z, {}), !n && (0,
                o.jsx)("div", {
                    className: (0,
                    m.default)({
                        "flex h-4 w-4 flex-shrink-0 rounded-full border align-middle": !0,
                        "bg-white": t.id === i
                    }),
                    children: t.id === i && (0,
                    o.jsx)(h.UgA, {
                        className: "m-auto h-3 w-3 scale-x-75 stroke-black stroke-[4]"
                    })
                })]
            })
        }
        function eN(e) {
            var t = e.workspace
              , n = e.isLoading
              , i = (0,
            g.Z)();
            return (0,
            o.jsxs)(k.u, {
                className: "flex w-full flex-1 items-center gap-3",
                label: i.formatMessage(eP.disabledWorkspaceTooltip),
                side: "right",
                children: [(0,
                o.jsx)(q._V, {
                    className: "icon-sm flex-shrink-0 opacity-30"
                }), (0,
                o.jsx)("div", {
                    className: "truncate opacity-30",
                    children: (0,
                    ec.CV)(i, t)
                }), n && (0,
                o.jsx)(F.Z, {})]
            })
        }
        function eT(e) {
            var t = e.onClickSettings
              , n = (0,
            c.WY)()
              , r = (0,
            c.ec)(c.F_.isBusinessWorkspace)
              , a = (0,
            c.ec)(c.F_.hasMultipleWorkspaces)
              , s = (0,
            ei.w$)();
            return (0,
            o.jsxs)("nav", {
                children: [a ? (0,
                o.jsx)(eM, {}) : r && (0,
                o.jsx)(ek, {}), r ? (0,
                o.jsx)(ev, {}) : (0,
                o.jsx)(ef, {}), !s && (0,
                o.jsxs)(G.ZP, {
                    as: "a",
                    href: "https://pandoranext.com",
                    target: "_blank",
                    onClick: function() {
                        I.A.logEvent(B.M.clickFaqLink)
                    },
                    children: [(0,
                    o.jsx)($.dJ, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, eP.helpAndFaq))]
                }), (0,
                o.jsxs)(G.ZP, {
                    onClick: t,
                    children: [(0,
                    o.jsx)($.RR, {
                        className: "icon-md"
                    }), n ? (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, eP.settingsPlus)) : (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, eP.settings))]
                }), (0,
                o.jsx)(G.R, {}), (0,
                o.jsxs)(G.ZP, {
                    onClick: function() {
                        I.A.logEvent(B.M.clickLogOut, {
                            eventSource: "mouse"
                        }),
                        (0,
                        es.w7)()
                    },
                    children: [(0,
                    o.jsx)($.gj, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(p.Z, (0,
                    i._)({}, eP.logOut))]
                })]
            })
        }
        function e_() {
            return (0,
            c.aF)() ? (0,
            o.jsx)(eC, {}) : null
        }
        function eC() {
            var e = (0,
            ec.$3)()
              , t = (0,
            ec.cI)()
              , n = (0,
            c.ec)(c.F_.isBusinessWorkspace)
              , i = (0,
            c.ec)(c.F_.hasMultipleWorkspaces);
            return (0,
            o.jsxs)(ea.v.Button, {
                className: "flex w-full items-center gap-3 p-3.5 text-sm hover:bg-gray-100 group-ui-open:bg-gray-100 gizmo:gap-2 gizmo:rounded-lg gizmo:p-2 gizmo:hover:bg-token-surface-primary gizmo:group-ui-open:bg-token-surface-primary dark:hover:bg-token-surface-primary dark:group-ui-open:bg-gray-800  gizmo:dark:group-ui-open:bg-token-surface-primary",
                children: [(0,
                o.jsx)("div", {
                    className: "flex-shrink-0",
                    children: (0,
                    o.jsx)(el.zf, {
                        iconSize: "gizmo"
                    })
                }), (0,
                o.jsxs)("div", {
                    className: "relative grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-700 gizmo:-top-px dark:text-white",
                    children: [(0,
                    o.jsx)("div", {
                        className: "font-semibold",
                        children: t
                    }), n || i ? (0,
                    o.jsx)("div", {
                        className: "text-xs text-gray-500",
                        children: e
                    }) : null]
                }), (0,
                o.jsx)(h.K9M, {
                    className: "icon-sm flex-shrink-0 text-gray-500 gizmo:hidden"
                })]
            })
        }
        var eP = (0,
        v.vU)({
            helpAndFaq: {
                id: "navigation.helpAndFaq",
                defaultMessage: "About PandoraNext",
                description: "About menu item"
            },
            settings: {
                id: "navigation.settings",
                defaultMessage: "Settings",
                description: "Settings menu item"
            },
            settingsPlus: {
                id: "navigation.settingsPlus",
                defaultMessage: "Settings & Beta",
                description: "Settings menu item for Plus users"
            },
            logOut: {
                id: "navigation.logOut",
                defaultMessage: "Log out",
                description: "Log out menu item"
            },
            takeSurveyButton: {
                id: "navigation.survey.takeSurveyButton",
                defaultMessage: "Take survey",
                description: "Survey offer call to action"
            },
            surveyDismiss: {
                id: "navigation.surveyDismiss",
                defaultMessage: "Dismiss survey",
                description: "Survey offer dismiss button"
            },
            surveyDescription: {
                id: "navigation.surveyDescription",
                defaultMessage: "Shape the future of ChatGPT.",
                description: "Survey offer description"
            },
            surveyTitle: {
                id: "navigation.surveyTitle",
                defaultMessage: "We’d love to hear from you!",
                description: "Survey offer title"
            },
            accountSwitcherTitle: {
                id: "navigation.accountSwitcherTitle",
                defaultMessage: "Workspaces",
                description: "Account switcher title"
            },
            defaultWorkspaceTitle: {
                id: "useWorkspaces.defaultWorkspaceTitle",
                defaultMessage: "Untitled Workspace",
                description: "title for workspace without a name"
            },
            addWorkspaceTooltip: {
                id: "navigation.addWorkspaceTooltip",
                defaultMessage: "Create a Team workspace",
                description: "Tooltip for add workspace button"
            },
            disabledWorkspaceTooltip: {
                id: "navigation.disabledWorkspaceTooltip",
                defaultMessage: "This workspace has been deactivated",
                description: "Tooltip for disabled workspace"
            }
        });
        function eZ() {
            var e = (0,
            s._)(["flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ", ""]);
            return eZ = function() {
                return e
            }
            ,
            e
        }
        function eS(e) {
            var t = e.onNewThread
              , n = e.currentGizmoId
              , a = e.children
              , s = (0,
            g.Z)()
              , l = (0,
            c.ec)(c.F_.isBusinessWorkspace)
              , v = (0,
            c.$T)()
              , x = (0,
            f.useRef)(null)
              , b = (0,
            f.useContext)(u.QL)
              , j = b.historyDisabled
              , k = b.toggleHistoryDisabled
              , _ = (0,
            b.getModifiedSettings)()
              , C = (0,
            N.Fr)().openSettings;
            (0,
            f.useEffect)(function() {
                _ && C()
            }, []);
            var P = (0,
            f.useCallback)(function() {
                t(),
                k()
            }, [t, k])
              , Z = (0,
            w.Ml)()
              , S = (0,
            o.jsxs)("div", {
                className: (0,
                m.default)("absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500 gizmo:top-0", j ? "visible max-h-72" : "invisible max-h-0"),
                children: [Z && (0,
                o.jsx)("div", {
                    className: "px-3 py-3.5",
                    children: (0,
                    o.jsx)(M.jl, {
                        gizmo: void 0,
                        historyDisabled: !0,
                        isActive: void 0 === n
                    })
                }), (0,
                o.jsxs)("div", {
                    className: "bg-gray-900 px-4 py-3",
                    children: [(0,
                    o.jsx)("div", {
                        className: "p-1 text-sm text-gray-100",
                        children: (0,
                        o.jsx)(p.Z, (0,
                        i._)({}, eL.chatHistoryOff))
                    }), (0,
                    o.jsx)("div", {
                        className: "p-1 text-xs text-gray-500",
                        children: (0,
                        o.jsx)(p.Z, (0,
                        r._)((0,
                        i._)({}, l ? eL.chatHistoryOffDescriptionBusiness : eL.chatHistoryOffDescription), {
                            values: {
                                learnMore: (0,
                                o.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7730893",
                                    target: "_blank",
                                    className: "underline",
                                    rel: "noreferrer",
                                    children: (0,
                                    o.jsx)(p.Z, (0,
                                    i._)({}, eL.learnMore))
                                }),
                                b: function(e) {
                                    return (0,
                                    o.jsx)("strong", {
                                        children: e
                                    })
                                }
                            }
                        }))
                    }), (0,
                    o.jsxs)(y.z, {
                        className: "mt-4 w-full",
                        onClick: P,
                        color: "primary",
                        size: "medium",
                        children: [(0,
                        o.jsx)(h.$IY, {
                            className: "icon-sm"
                        }), (0,
                        o.jsx)(p.Z, (0,
                        i._)({}, eL.enableChatHistory))]
                    })]
                }), (0,
                o.jsx)("div", {
                    className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"
                })]
            });
            return (0,
            o.jsx)(o.Fragment, {
                children: (0,
                o.jsxs)("div", {
                    className: "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
                    children: [(0,
                    o.jsx)(d.f, {
                        asChild: !0,
                        children: (0,
                        o.jsx)("h2", {
                            children: (0,
                            o.jsx)(p.Z, (0,
                            i._)({}, eL.chatHistoryLabel))
                        })
                    }), (0,
                    o.jsxs)("nav", {
                        className: "flex h-full w-full flex-col p-2 gizmo:px-3 gizmo:pb-3.5 gizmo:pt-0",
                        "aria-label": s.formatMessage(eL.chatHistoryLabel),
                        children: [Z || v ? null : (0,
                        o.jsxs)("div", {
                            className: "mb-1 flex flex-row gap-2",
                            children: [(0,
                            o.jsxs)(T.MP, {
                                onClick: t,
                                className: "bg-white dark:bg-transparent",
                                children: [j ? (0,
                                o.jsx)(h.Bw1, {
                                    className: "icon-sm shrink-0"
                                }) : (0,
                                o.jsx)(h.OvN, {
                                    className: "icon-sm shrink-0"
                                }), (0,
                                o.jsx)("span", {
                                    className: "truncate",
                                    children: (0,
                                    o.jsx)(p.Z, (0,
                                    i._)({}, j ? eL.clearChat : eL.newChat))
                                })]
                            }), (0,
                            o.jsx)(T.H, {})]
                        }), S, (0,
                        o.jsx)(eB, {
                            ref: x,
                            $disableScroll: j,
                            children: a
                        }), (0,
                        o.jsx)(eI, {})]
                    })]
                })
            })
        }
        function eI() {
            var e = (0,
            a._)((0,
            f.useState)(function() {
                var e = j.b.getCookie(j.c.Workspace);
                return "string" == typeof e && e !== l.b
            }), 1)[0]
              , t = (0,
            N.Fr)().openSettings
              , n = (0,
            c.$T)();
            return e && n ? null : (0,
            o.jsxs)("div", {
                className: "flex flex-col border-t border-black/20 pt-2 empty:hidden gizmo:border-t-0 gizmo:border-token-border-light dark:border-white/20",
                children: [(0,
                o.jsx)(Q, {}), (0,
                o.jsx)("div", {
                    className: "flex w-full items-center",
                    children: (0,
                    o.jsx)("div", {
                        className: "grow",
                        children: (0,
                        o.jsx)(eb, {
                            onClickSettings: function() {
                                return t()
                            }
                        })
                    })
                }), (0,
                o.jsx)(_.wm, {})]
            })
        }
        var eB = x.Z.div(eZ(), function(e) {
            return e.$disableScroll ? "overflow-y-hidden opacity-20 pointer-events-none" : "overflow-y-auto"
        })
          , eL = (0,
        v.vU)({
            chatHistoryLabel: {
                id: "NavigationContent.chatHistoryLabel",
                defaultMessage: "Chat history",
                description: "Chat history label heading"
            },
            chatHistoryOff: {
                id: "NavigationContent.chatHistoryOff",
                defaultMessage: "Chat History is off for this browser.",
                description: "Text indicating that chat history is turned off"
            },
            chatHistoryOffDescription: {
                id: "NavigationContent.chatHistoryOffDescription",
                defaultMessage: "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
                description: "Description for chat history being off"
            },
            chatHistoryOffDescriptionBusiness: {
                id: "NavigationContent.chatHistoryOffDescriptionBusiness",
                defaultMessage: "When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
                description: "Description for chat history being off"
            },
            learnMore: {
                id: "NavigationContent.learnMore",
                defaultMessage: "Learn more",
                description: "Learn more link text"
            },
            enableChatHistory: {
                id: "NavigationContent.enableChatHistory",
                defaultMessage: "Enable chat history",
                description: "Enable chat history button label"
            },
            clearChat: {
                id: "NavigationContent.clearChat",
                defaultMessage: "Clear chat",
                description: "Clear chat button label"
            },
            newChat: {
                id: "NavigationContent.newChat",
                defaultMessage: "New Chat",
                description: "New chat button label"
            },
            closeSidebar: {
                id: "NavigationContent.closeSidebar",
                defaultMessage: "Close sidebar",
                description: "Close sidebar button label"
            }
        })
    },
    61399: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var i = n(10064)
          , r = n(70079)
          , a = n(66638);
        function s(e, t, n) {
            var s = (0,
            a.XL)(e)
              , o = s.title
              , l = s.titleSource
              , c = (0,
            i._)((0,
            r.useState)(!1), 2)
              , u = c[0]
              , d = c[1]
              , m = null != o ? o : t
              , f = (0,
            r.useRef)(m);
            return (0,
            r.useEffect)(function() {
                return n && l === a._L.Generated && m !== f.current && d(!0),
                function() {
                    f.current = m
                }
            }, [n, m, l]),
            {
                isTypingEffect: u,
                resolvedTitle: m
            }
        }
    },
    56497: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var i = n(70079);
        function r() {
            var e = (0,
            i.useRef)([])
              , t = (0,
            i.useRef)(function(t, n) {
                var i = setTimeout(t, n);
                return e.current.push(i),
                i
            });
            return (0,
            i.useEffect)(function() {
                var t = e.current;
                return function() {
                    t.forEach(function(e) {
                        clearTimeout(e)
                    })
                }
            }, []),
            t.current
        }
    }
}]);
