(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3415], {
    73429: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/gpts/discovery", function() {
            return n(41273)
        }
        ])
    },
    41273: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return d
            },
            default: function() {
                return x
            }
        });
        var i = n(35250)
          , r = n(17424)
          , s = n(87607)
          , o = n(77527)
          , c = n(62682)
          , a = n(17944)
          , l = n(18481)
          , u = n(31924)
          , d = !0;
        function x(e) {
            return "store_anon" === e.kind ? (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(r.S, {
                    redirectUrl: (0,
                    l.cy)()
                }), (0,
                i.jsx)(s.fN, {})]
            }) : (0,
            i.jsx)(p, {})
        }
        function p() {
            var e = (0,
            a.$T)()
              , t = (0,
            a.hz)();
            return e ? null : t.has(c.L0.GizmoStore) ? (0,
            i.jsxs)(o.Z, {
                children: [(0,
                i.jsx)(s.Uv, {}), (0,
                i.jsx)(s.fN, {})]
            }) : (0,
            i.jsx)(u.default, {})
        }
    },
    17424: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return x
            },
            X: function() {
                return d
            }
        });
        var i = n(35250)
          , r = n(21950)
          , s = n(93778)
          , o = n(59904)
          , c = n(73040)
          , a = n.n(c)
          , l = n(42545)
          , u = n(27573);
        function d(e) {
            var t = e.gizmo
              , n = (0,
            r.i6)(t);
            return (0,
            i.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0,
                i.jsx)(s.N, {
                    gizmo: t
                }), (0,
                i.jsx)(x, {
                    redirectUrl: n
                }), (0,
                i.jsx)("div", {
                    className: "flex grow flex-col items-center justify-center p-2",
                    children: (0,
                    i.jsx)(u.r, {
                        gizmo: t,
                        isOwner: !1,
                        isAnon: !0,
                        children: (0,
                        i.jsxs)("div", {
                            className: "mt-7 flex flex-col gap-4",
                            children: [(0,
                            i.jsx)(l.p, {
                                href: "/auth/login?next=".concat(n),
                                children: "Sign up to chat"
                            }), (0,
                            i.jsx)("div", {
                                className: "text-sm text-token-text-tertiary",
                                children: "Requires ChatGPT Plus"
                            })]
                        })
                    })
                })]
            })
        }
        function x(e) {
            var t = e.redirectUrl;
            return (0,
            i.jsxs)("div", {
                className: "flex items-center justify-between px-7 py-4",
                children: [(0,
                i.jsx)(p, {}), (0,
                i.jsx)(a(), {
                    href: null != t ? "/auth/login?next=".concat(t) : "/auth/login",
                    className: "flex items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:opacity-70",
                    children: "Sign up"
                })]
            })
        }
        function p() {
            return (0,
            i.jsx)(a(), {
                href: "/",
                children: (0,
                i.jsx)(o.nI, {
                    className: "h-8 w-8"
                })
            })
        }
    },
    93778: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return c
            }
        });
        var i = n(35250)
          , r = n(21950)
          , s = n(29124)
          , o = n.n(s);
        function c(e) {
            var t = e.gizmo
              , n = (0,
            r.uy)(t.gizmo.display.name);
            return (0,
            i.jsxs)(o(), {
                children: [(0,
                i.jsx)("title", {
                    children: n
                }), (0,
                i.jsx)("meta", {
                    name: "title",
                    content: n
                }, "title"), (0,
                i.jsx)("meta", {
                    property: "og:site_name",
                    content: "ChatGPT"
                }, "og:site_name"), (0,
                i.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }, "og:type"), (0,
                i.jsx)("meta", {
                    property: "og:title",
                    content: n
                }, "og:title"), (0,
                i.jsx)("meta", {
                    property: "og:url",
                    content: (0,
                    r.i6)(t)
                }, "og:url"), t.gizmo.display.description && (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsx)("meta", {
                        name: "description",
                        content: t.gizmo.display.description
                    }, "description"), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: t.gizmo.display.description
                    }, "og:description")]
                }), t.gizmo.display.profile_picture_url && (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: t.gizmo.display.profile_picture_url
                    }, "og:image"), (0,
                    i.jsx)("meta", {
                        property: "og:image:width",
                        content: "512"
                    }, "og:image:width"), (0,
                    i.jsx)("meta", {
                        property: "og:image:height",
                        content: "512"
                    }, "og:image:height")]
                })]
            })
        }
    },
    42545: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return o
            }
        });
        var i = n(35250)
          , r = n(73040)
          , s = n.n(r);
        function o(e) {
            var t = e.href
              , n = e.children;
            return (0,
            i.jsx)(s(), {
                href: t,
                shallow: !0,
                className: "flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-medium text-white transition hover:opacity-70",
                children: n
            })
        }
    }
}, function(e) {
    e.O(0, [1e3, 746, 2218, 4865, 7039, 3140, 1522, 6673, 9774, 2888, 179], function() {
        return e(e.s = 73429)
    }),
    _N_E = e.O()
}
]);
