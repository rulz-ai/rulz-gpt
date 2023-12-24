"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5484], {
    65484: function(e, t, a) {
        a.d(t, {
            FB: function() {
                return e4
            },
            ZP: function() {
                return e1
            },
            wS: function() {
                return e2
            }
        });
        var n, i, s, o, r = a(10064), l = a(35250), c = a(72290), d = a(62682), u = a(25687), p = a(2064), m = a(70079), g = a(66638), f = a(17944);
        (n = s || (s = {})).Personal = "chat",
        n.Workspace = "workspace",
        n.Team = "team";
        var h = a(23234)
          , x = a(60583)
          , b = a(61888)
          , v = a(70671)
          , y = a(94968)
          , k = a(86646)
          , w = a(21722)
          , j = a(39324)
          , M = a(71209)
          , C = a(38104)
          , A = a(20225)
          , _ = a(10721)
          , N = a(1454)
          , T = a(32004)
          , S = a(94705)
          , B = a(7184)
          , P = a(42798);
        function Z() {
            var e = (0,
            k.Go)()
              , t = (0,
            _.useRouter)()
              , a = (0,
            v.Z)()
              , n = (0,
            r._)((0,
            m.useState)(), 2)
              , i = n[0]
              , s = n[1]
              , o = null !== e;
            if ((0,
            m.useEffect)(function() {
                o || s(void 0)
            }, [o]),
            !o)
                return null;
            var c = (0,
            l.jsx)("span", {
                className: "font-medium",
                children: e.ownerEmail
            })
              , d = e.hasActiveRequest || "success" === i;
            return (0,
            l.jsx)(B.Z, {
                isOpen: !0,
                onClose: b.noop,
                type: "warning",
                size: "custom",
                className: "max-w-3xl",
                title: (0,
                l.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0,
                    l.jsx)("div", {
                        className: "text-lg",
                        children: (0,
                        l.jsx)(T.Z, (0,
                        M._)((0,
                        j._)({}, D.title), {
                            values: {
                                workspaceName: e.accountName
                            }
                        }))
                    }), (0,
                    l.jsx)("div", {
                        className: "text-sm font-normal",
                        children: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, D.subtitle))
                    })]
                }),
                icon: N.UIZ,
                primaryButton: (0,
                l.jsx)(S.ZP.Button, {
                    onClick: (0,
                    w._)(function() {
                        return (0,
                        C.Jh)(this, function(t) {
                            switch (t.label) {
                            case 0:
                                s("requesting"),
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]),
                                [4, k.ZP.requestWorkspaceAccess(e.accountId)];
                            case 2:
                                return t.sent().success && s("success"),
                                [3, 4];
                            case 3:
                                return t.sent(),
                                s("error"),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    }),
                    color: "primary",
                    title: a.formatMessage(D.requestAccessButton),
                    disabled: d
                }),
                secondaryButton: (0,
                l.jsx)(S.ZP.Button, {
                    onClick: (0,
                    w._)(function() {
                        var e;
                        return (0,
                        C.Jh)(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return [4, (0,
                                A.signOut)({
                                    redirect: !1,
                                    callbackUrl: "/auth/login?next=".concat(encodeURIComponent(t.asPath))
                                })];
                            case 1:
                                return e = a.sent(),
                                t.push(e.url),
                                [2]
                            }
                        })
                    }),
                    color: "neutral",
                    title: a.formatMessage(D.signOutButton)
                }),
                children: (0,
                l.jsxs)("div", {
                    className: "flex flex-col space-y-4",
                    children: [(0,
                    l.jsx)("div", {
                        children: (0,
                        l.jsx)(T.Z, (0,
                        M._)((0,
                        j._)({}, D.emailBelongsToWorkspace), {
                            values: {
                                email: (0,
                                l.jsx)("span", {
                                    className: "font-medium",
                                    children: e.userEmail
                                })
                            }
                        }))
                    }), (0,
                    l.jsx)("div", {
                        children: d ? (0,
                        l.jsx)(T.Z, (0,
                        M._)((0,
                        j._)({}, D.activeRequestMessage), {
                            values: {
                                email: c
                            }
                        })) : "requesting" === i ? (0,
                        l.jsx)(P.Z, {}) : "error" === i ? (0,
                        l.jsx)(T.Z, (0,
                        M._)((0,
                        j._)({}, D.contactWorkspaceAdminEmail), {
                            values: {
                                email: c
                            }
                        })) : null
                    })]
                })
            })
        }
        var D = (0,
        y.vU)({
            title: {
                id: "RequestWorkspaceAccessModal.title",
                defaultMessage: "Request access to {workspaceName}",
                description: "Title for request access modal for a workspace"
            },
            subtitle: {
                id: "RequestWorkspaceAccessModal.subtitle",
                defaultMessage: "ChatGPT Enterprise has been enabled in your workspace",
                description: "Subtitle for request access modal mentioning ChatGPT Enterprise"
            },
            emailBelongsToWorkspace: {
                id: "RequestWorkspaceAccessModal.emailBelongsToWorkspace",
                defaultMessage: "{email} belongs to a ChatGPT Enterprise plan but currently has no access.",
                description: "Message shown telling the user their email is part of an enterprise workspace."
            },
            requestWorkspaceAccessMessage: {
                id: "RequestWorkspaceAccessModal.requestWorkspaceAccessMessage",
                defaultMessage: "You may request access to the workspace account.",
                description: "Message telling the user to request access to the workspace."
            },
            requestedWorkspaceAccessMessage: {
                id: "RequestWorkspaceAccessModal.requestedWorkspaceAccessMessage",
                defaultMessage: "Successfully requested access to the workspace account. Your workspace administrator at {email} may approve the request.",
                description: "Message telling the user they have requested access to the workspace."
            },
            contactWorkspaceAdminEmail: {
                id: "RequestWorkspaceAccessModal.contactWorkspaceAdminEmail",
                defaultMessage: "Could not request access. Contact your workspace administrator at {email} to request access to a new workspace account.",
                description: "Message telling the user who to contact to create a new account for the workspace."
            },
            signOutButton: {
                id: "RequestWorkspaceAccessModal.signOutButton",
                defaultMessage: "Sign Out",
                description: "Label for sign out button on modal"
            },
            requestAccessButton: {
                id: "RequestWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Label for request access button on modal"
            },
            activeRequestMessage: {
                id: "RequestWorkspaceAccessModal.activeRequestMessage",
                defaultMessage: "You have a pending invite request for this workspace. Contact your workspace administrator at {email} to approve your request.",
                description: "Message telling the user they have an active request for the workspace."
            }
        })
          , E = a(84269)
          , O = a(55548)
          , z = a(80474)
          , W = a(54636)
          , I = a(42780)
          , U = a(85660)
          , L = a(8874)
          , q = a(48133);
        function V(e) {
            var t = e.children;
            return (0,
            l.jsxs)(z.zt, {
                children: [(0,
                l.jsx)(z.fC, {
                    className: "radix-state-closed:animate-hide radix-state-open:animate-slideIn grid grid-cols-[auto_max-content] items-center gap-x-4 rounded-lg bg-white p-4 shadow-xs [grid-template-areas:_'title_action'_'description_action'] dark:bg-gray-950 sm:max-w-2xl",
                    open: !0,
                    children: t
                }), (0,
                l.jsx)(z.l_, {
                    className: "fixed bottom-0 right-0 z-50 m-0 flex max-w-[100vw] list-none flex-col gap-4 p-6 outline-none"
                })]
            })
        }
        function R(e) {
            var t = e.onClose
              , a = e.ageVerificationDeadline;
            return (0,
            m.useEffect)(function() {
                L.m9.logEvent("chatgpt_compliance_age_verification_seen"),
                W.A.logEvent(I.M.complianceAgeVerificationSeen)
            }, []),
            (0,
            l.jsxs)(V, {
                children: [(0,
                l.jsx)(z.Dx, {
                    className: "text-sm font-medium [grid-area:_title]",
                    children: (0,
                    l.jsx)(T.Z, (0,
                    M._)((0,
                    j._)({}, G.ageVerificationTitle), {
                        values: {
                            deadline: null != a ? Math.floor(a / 60 / 60 / 24) : 0,
                            learnMoreLink: function(e) {
                                return (0,
                                l.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/8411987-why-am-i-being-asked-to-verify-my-age",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "cursor-pointer font-normal underline",
                                    children: e
                                })
                            }
                        }
                    }))
                }), (0,
                l.jsx)(z.aU, {
                    altText: "Dismiss notification",
                    asChild: !0,
                    children: (0,
                    l.jsx)(q.z, {
                        color: "primary",
                        size: "small",
                        onClick: function() {
                            L.m9.logEvent("chatgpt_compliance_age_verification_clicked"),
                            W.A.logEvent(I.M.complianceAgeVerificationClicked),
                            U.b.setCookie(U.c.AgeVerification, "true", {
                                maxAge: 86400,
                                path: "/"
                            }),
                            t(),
                            O.vm.openModal(O.B.AgeVerificationInterstitial)
                        },
                        children: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, G.startVerification))
                    })
                }), (0,
                l.jsx)(z.x8, {})]
            })
        }
        var G = (0,
        y.vU)({
            ageVerificationTitle: {
                id: "ageVerificationBanner.title-v1",
                defaultMessage: "Please verify your age in the next {deadline, plural, =0 {# days} one {# day} other {# days}}. We are required to check if you're old enough to use ChatGPT. <learnMoreLink>Learn more</learnMoreLink>.",
                description: "Explanation of why ChatGPT needs to verify age"
            },
            dismiss: {
                id: "ageVerificationBanner.dismiss",
                defaultMessage: "Dismiss",
                description: "Dismiss/close age verification ui Banner"
            },
            startVerification: {
                id: "ageVerificationBanner.startVerification",
                defaultMessage: "Start verification",
                description: "Start age verification process button"
            }
        })
          , F = a(4337)
          , H = a(21389)
          , Q = a(29450)
          , Y = a(21682);
        function J() {
            var e = (0,
            F._)(["underline font-normal"]);
            return J = function() {
                return e
            }
            ,
            e
        }
        function K(e) {
            var t = e.onClose
              , a = e.canManageBrowserStorage
              , n = (0,
            v.Z)()
              , i = (0,
            Q.Fr)().openSettings
              , s = (0,
            Y.CX)()
              , o = (0,
            Y.T$)({
                enabled: !!a,
                select: function(e) {
                    return !e.cookie_consent.is_required
                }
            })
              , r = o.data
              , d = o.isLoading;
            return ((0,
            m.useEffect)(function() {
                !0 === r && t()
            }, [r, t]),
            d) ? null : (0,
            l.jsxs)(V, {
                children: [(0,
                l.jsx)(z.Dx, {
                    className: "text-sm font-medium [grid-area:_title]",
                    children: (0,
                    l.jsx)(T.Z, (0,
                    M._)((0,
                    j._)({}, X.cookieConsentBannerTitle), {
                        values: {
                            privacyPolicyLink: function(e) {
                                return (0,
                                l.jsx)($, {
                                    href: "https://openai.com/policies/privacy-policy",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: e
                                })
                            },
                            learnMoreLink: function(e) {
                                return (0,
                                l.jsx)($, {
                                    href: "https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: e
                                })
                            },
                            settingsPanel: function(e) {
                                return (0,
                                l.jsx)($, {
                                    $as: "button",
                                    onClick: function() {
                                        i(Q.u5.DataControls)
                                    },
                                    children: e
                                })
                            }
                        }
                    }))
                }), (0,
                l.jsxs)("div", {
                    className: "flex gap-3",
                    children: [(0,
                    l.jsx)(q.z, {
                        color: "neutral",
                        size: "small",
                        onClick: function() {
                            s.mutateAsync({
                                analytics_cookies_accepted: !1
                            }, {
                                onSuccess: function() {
                                    c.m.success(n.formatMessage(X.updateSuccess))
                                },
                                onError: function() {
                                    c.m.danger(n.formatMessage(X.updateFailure))
                                }
                            }),
                            t()
                        },
                        children: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, X.reject))
                    }), (0,
                    l.jsx)(q.z, {
                        color: "neutral",
                        size: "small",
                        onClick: function() {
                            s.mutateAsync({
                                analytics_cookies_accepted: !0
                            }, {
                                onSuccess: function() {
                                    c.m.success(n.formatMessage(X.updateSuccess))
                                },
                                onError: function() {
                                    c.m.danger(n.formatMessage(X.updateFailure))
                                }
                            }),
                            t()
                        },
                        children: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, X.accept))
                    })]
                }), (0,
                l.jsx)(z.x8, {})]
            })
        }
        var $ = H.Z.a(J())
          , X = (0,
        y.vU)({
            cookieConsentBannerTitle: {
                id: "CookieConsentBanner.title",
                defaultMessage: "We use cookies to provide, improve, and protect our services. Visit our <privacyPolicyLink>privacy policy</privacyPolicyLink> to learn more. You can manage your cookie preferences in your <settingsPanel>settings panel</settingsPanel>. <learnMoreLink>Learn more</learnMoreLink>.",
                description: "Explanation of why ChatGPT needs to verify age"
            },
            reject: {
                id: "CookieConsentBanner.reject",
                defaultMessage: "Reject all",
                description: "Reject analytics cookies button"
            },
            accept: {
                id: "CookieConsentBanner.accept",
                defaultMessage: "Accept all",
                description: "Consent to analytics cookies button"
            },
            updateSuccess: {
                id: "CookieConsentBanner.updateSuccess",
                defaultMessage: "Your cookie preferences were updated successfully",
                description: "Success toast message for updating cookie preferences"
            },
            updateFailure: {
                id: "CookieConsentBanner.updateFailure",
                defaultMessage: "Unable to update cookie preferences. Try again later.",
                description: "Failure toast message for updating cookie preferences"
            }
        })
          , ee = a(50835)
          , et = a(70216)
          , ea = a(19841);
        function en(e) {
            var t = e.className
              , a = e.openNewTab
              , n = (0,
            et._)(e, ["className", "openNewTab"]);
            return (0,
            l.jsx)("a", (0,
            j._)({
                rel: "noreferrer",
                className: (0,
                ea.default)("cursor-pointer font-normal text-green-600 underline", t),
                target: void 0 !== a && a ? "_blank" : "_self"
            }, n))
        }
        function ei(e) {
            var t = e.onClose
              , a = (0,
            Y.Ub)(!0)
              , n = (0,
            Y.$H)();
            return (0,
            l.jsx)(ee.fC, {
                open: !0,
                onOpenChange: function(e) {
                    e || t()
                },
                children: (0,
                l.jsxs)(ee.h_, {
                    children: [(0,
                    l.jsx)(ee.aV, {
                        className: "fixed inset-0 bg-black/20 radix-state-open:animate-show"
                    }), (0,
                    l.jsxs)(ee.VY, {
                        className: "fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-[6px] bg-token-surface-primary shadow-2xl focus:outline-none radix-state-open:animate-alertShow",
                        onEscapeKeyDown: function(e) {
                            return e.preventDefault()
                        },
                        children: [(0,
                        l.jsx)(ee.Dx, {
                            className: "border-b border-token-border-heavy p-4 text-lg font-medium md:p-6",
                            children: a ? (0,
                            l.jsx)(T.Z, (0,
                            j._)({}, er.titleEEA)) : (0,
                            l.jsx)(T.Z, (0,
                            j._)({}, er.titleExEEA))
                        }), (0,
                        l.jsx)("div", {
                            className: "flex flex-col gap-2 p-4 md:px-6",
                            children: (0,
                            l.jsx)(a ? es : eo, {
                                onAction: function(e) {
                                    e ? (n.mutate(),
                                    W.A.logEvent(I.M.compliancePrivacyPolicyUpdateNov2023)) : W.A.logEvent(I.M.complianceTermsOfUseDeclineNov2023),
                                    t()
                                }
                            })
                        })]
                    })]
                })
            })
        }
        function es(e) {
            var t = e.onAction;
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(ee.dk, {
                    className: "text-base",
                    children: (0,
                    l.jsx)(T.Z, (0,
                    M._)((0,
                    j._)({}, er.contentEEA), {
                        values: {
                            termsLink: function(e) {
                                return (0,
                                l.jsx)(en, {
                                    openNewTab: !0,
                                    href: "https://openai.com/policies/eu-terms-of-use",
                                    children: e
                                })
                            },
                            faqLink: function(e) {
                                return (0,
                                l.jsx)(en, {
                                    openNewTab: !0,
                                    href: "https://help.openai.com/en/articles/8541941-terms-of-use-updates",
                                    children: e
                                })
                            }
                        }
                    }))
                }), (0,
                l.jsxs)("div", {
                    className: "flex justify-end gap-2",
                    children: [(0,
                    l.jsx)(ee.$j, {
                        asChild: !0,
                        children: (0,
                        l.jsx)(q.z, {
                            openNewTab: !0,
                            as: "link",
                            to: "https://help.openai.com/en/articles/6378407-how-to-delete-your-account",
                            color: "neutral",
                            onClick: function() {
                                return t(!1)
                            },
                            children: (0,
                            l.jsx)(T.Z, (0,
                            j._)({}, er.dismiss))
                        })
                    }), (0,
                    l.jsx)(ee.aU, {
                        asChild: !0,
                        children: (0,
                        l.jsx)(q.z, {
                            color: "primary",
                            onClick: function() {
                                return t(!0)
                            },
                            children: (0,
                            l.jsx)(T.Z, (0,
                            j._)({}, er.agree))
                        })
                    })]
                })]
            })
        }
        function eo(e) {
            var t = e.onAction;
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(ee.dk, {
                    className: "text-base",
                    children: (0,
                    l.jsx)(T.Z, (0,
                    M._)((0,
                    j._)({}, er.contentExEEA), {
                        values: {
                            termsLink: function(e) {
                                return (0,
                                l.jsx)(en, {
                                    openNewTab: !0,
                                    href: "https://openai.com/policies/terms-of-use ",
                                    children: e
                                })
                            },
                            faqLink: function(e) {
                                return (0,
                                l.jsx)(en, {
                                    openNewTab: !0,
                                    href: "https://help.openai.com/en/articles/8541945-terms-of-use-and-privacy-policy-updates",
                                    children: e
                                })
                            },
                            privacyPolicyLink: function(e) {
                                return (0,
                                l.jsx)(en, {
                                    href: "https://openai.com/policies/privacy-policy",
                                    openNewTab: !0,
                                    children: e
                                })
                            }
                        }
                    }))
                }), (0,
                l.jsx)(ee.aU, {
                    className: "ml-auto flex gap-2",
                    asChild: !0,
                    children: (0,
                    l.jsx)(q.z, {
                        openNewTab: !0,
                        color: "primary",
                        onClick: function() {
                            return t(!0)
                        },
                        children: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, er.agree))
                    })
                })]
            })
        }
        var er = (0,
        y.vU)({
            titleEEA: {
                id: "PrivacyPolicyUpdateBanner.title.eea",
                defaultMessage: "We've updated our Terms of Use",
                description: "terms of use notification banner title"
            },
            titleExEEA: {
                id: "PrivacyPolicyUpdateBanner.title.exeea",
                defaultMessage: "We've updated our Terms of Use and Privacy Policy",
                description: "terms of use notification banner title"
            },
            contentEEA: {
                id: "PrivacyPolicyUpdateBanner.content.eea",
                defaultMessage: "We've updated our <termsLink>Terms of Use</termsLink>, effective December 14, 2023. By continuing to use our services, you agree to these updated terms. <faqLink>Learn more</faqLink>.",
                description: "Links to terms of use and privacy policy due to update"
            },
            contentExEEA: {
                id: "PrivacyPolicyUpdateBanner.content.exeea",
                defaultMessage: "We've updated our <termsLink>Terms of Use</termsLink> and <privacyPolicyLink>Privacy Policy</privacyPolicyLink>, effective December 14, 2023. By continuing to use our services, you agree to these updated terms. <faqLink>Learn more.</faqLink>",
                description: "Links to terms of use and privacy policy due to update"
            },
            agree: {
                id: "PrivacyPolicyUpdateBanner.Agree",
                defaultMessage: "Agree",
                description: "Agree/close age verification ui Banner"
            },
            dismiss: {
                id: "PrivacyPolicyUpdateBanner.dismiss",
                defaultMessage: "Disagree",
                description: "Disagree/close age verification ui Banner and navigate to deactivate account"
            }
        })
          , el = a(35265)
          , ec = a(10943)
          , ed = a(77997)
          , eu = a(21988)
          , ep = a.n(eu)
          , em = a(40547)
          , eg = {
            src: "/_next/static/media/onobarding-all-tools-dark.8bdddfc2.png",
            height: 480,
            width: 1116,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AQkhAFtDEmhc7/rnuff88Wje+MAAIwlBmPv++EfS98ekAUMvXNw6GVUjodpqAFslkAD+//4At+GRADYWUgDV78DdAUIuWj/l9tZU2fnQukoTaG4EAgUAwe+TkiIHQEYQBhisfI4uEQC74+wAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 3
        }
          , ef = {
            src: "/_next/static/media/onobarding-all-tools-light.650635b6.png",
            height: 468,
            width: 1104,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXklEQVR42hWMywmAMBQEU50327ADa7EcLcCLHUQ95CT4wSTEZJ4vC8suDIwRkc6fjDnRxxcL2JLptWNlJjw4OyM1q+6+IArl2JAUcSbcNOVjUN7qn9Q2UaRNgcFfND/jAFZJDj0XRwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 3
        };
        function eh(e) {
            var t = e.onClose
              , a = (0,
            x.qg)(x.pm.GizmoOnboarding).markAsViewed
              , n = (0,
            r._)((0,
            m.useState)(!1), 2)
              , i = n[0]
              , s = n[1]
              , o = (0,
            f.ec)(f.F_.isBusinessWorkspace)
              , c = function() {
                a(),
                o ? s(!0) : t()
            };
            return (0,
            l.jsx)(l.Fragment, {
                children: i ? (0,
                l.jsx)(em.Z, {
                    onClose: t
                }) : (0,
                l.jsxs)(B.Z, {
                    isOpen: !0,
                    onClose: c,
                    type: "success",
                    children: [(0,
                    l.jsx)("div", {
                        className: "flex cursor-pointer justify-end text-xl text-token-text-tertiary",
                        children: (0,
                        l.jsx)("button", {
                            onClick: c,
                            children: (0,
                            l.jsx)(el.v7, {})
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "mb-4 flex w-full justify-center",
                        children: (0,
                        l.jsx)(ex, {})
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0,
                            l.jsx)("div", {
                                className: "text-center text-2xl font-bold",
                                children: (0,
                                l.jsx)(T.Z, (0,
                                j._)({}, eb.gizmoOnboardingHeadline))
                            }), (0,
                            l.jsx)("div", {
                                className: "text-md text-center text-token-text-secondary",
                                children: o ? (0,
                                l.jsx)(T.Z, (0,
                                j._)({}, eb.gizmoOnboardingSubheadingBiz)) : (0,
                                l.jsx)(T.Z, (0,
                                j._)({}, eb.gizmoOnboardingSubheading))
                            })]
                        }), (0,
                        l.jsx)(ec.Zq, {
                            className: "w-full",
                            color: "primary",
                            onClick: c,
                            type: "submit",
                            children: o ? (0,
                            l.jsx)(T.Z, (0,
                            j._)({}, eb.gizmoOnboardingNext)) : (0,
                            l.jsx)(T.Z, (0,
                            j._)({}, eb.gizmoOnboardingStart))
                        })]
                    })]
                })
            })
        }
        function ex() {
            var e = (0,
            ed.F)().resolvedTheme;
            return (0,
            l.jsx)(l.Fragment, {
                children: "dark" === e ? (0,
                l.jsx)(ep(), {
                    src: eg.src,
                    width: 184,
                    height: 78,
                    alt: "All tools"
                }) : (0,
                l.jsx)(ep(), {
                    src: ef.src,
                    width: 184,
                    height: 78,
                    alt: "All tools"
                })
            })
        }
        var eb = (0,
        y.vU)({
            gizmoOnboardingHeadline: {
                id: "gizmoOnboarding.headline",
                defaultMessage: "ChatGPT can now browse the web, analyze data, and generate images.",
                description: "Headline for the gizmo onboarding modal"
            },
            gizmoOnboardingSubheading: {
                id: "gizmoOnboarding.subheading",
                defaultMessage: "These capabilities are now built into GPT-4, no need to select them. Available for Plus users.",
                description: "Subheading for the gizmo onboarding modal"
            },
            gizmoOnboardingSubheadingBiz: {
                id: "gizmoOnboarding.subheading.biz",
                defaultMessage: "These capabilities are now built into GPT-4, no need to select them. Available for Enterprise users.",
                description: "Subheading for the gizmo onboarding modal for Biz users"
            },
            gizmoOnboardingNext: {
                id: "gizmoOnboarding.next",
                defaultMessage: "Next",
                description: "Next button for the biz gizmo onboarding modal"
            },
            gizmoOnboardingStart: {
                id: "gizmoOnboarding.start",
                defaultMessage: "Get started",
                description: "Start button for the gizmo onboarding modal"
            }
        })
          , ev = a(77311)
          , ey = a(59904)
          , ek = x.pm.Onboarding
          , ew = function() {
            var e = (0,
            x.qg)(ek)
              , t = e.eligible;
            return {
                setHasSeenOnboarding: e.markAsViewed,
                hasSeenOnboardingDate: e.isLoading ? null : !t
            }
        };
        function ej(e) {
            var t = e.onClose
              , a = e.scope
              , n = ew().setHasSeenOnboarding
              , i = (0,
            m.useCallback)(function() {
                t(!0),
                n()
            }, [t, n]);
            return a === s.Personal ? (0,
            l.jsx)(eC, {
                onSubmit: i
            }) : (0,
            l.jsx)(eA, {
                onSubmit: i
            })
        }
        var eM = function(e) {
            var t = e.icon
              , a = e.title
              , n = e.body;
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col gap-2 md:w-1/3",
                children: [(0,
                l.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [(0,
                    l.jsx)("div", {
                        children: t
                    }), (0,
                    l.jsx)("div", {
                        className: "font-medium text-token-text-primary",
                        children: a
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "text-sm text-token-text-secondary",
                    children: n
                })]
            })
        }
          , eC = function(e) {
            var t = e.onSubmit
              , a = (0,
            v.Z)();
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col gap-3 p-4 md:p-6",
                children: [(0,
                l.jsxs)("div", {
                    className: "flex flex-col gap-6 md:flex-row",
                    children: [(0,
                    l.jsx)(eM, {
                        icon: (0,
                        l.jsx)(ey.wP, {
                            isSolid: !0,
                            className: "h-5 w-5 text-green-600"
                        }),
                        title: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.askAway)),
                        body: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.askAwayBody))
                    }), (0,
                    l.jsx)(eM, {
                        icon: (0,
                        l.jsx)(ey.NJ, {
                            className: "text-brand-purple"
                        }),
                        title: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.warning)),
                        body: (0,
                        l.jsx)(T.Z, (0,
                        M._)((0,
                        j._)({}, e_.warningBody), {
                            values: {
                                article: function(e) {
                                    return (0,
                                    l.jsx)("a", {
                                        href: "https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq",
                                        target: "_blank",
                                        className: "underline",
                                        rel: "noopener noreferrer",
                                        children: e
                                    })
                                }
                            }
                        }))
                    }), (0,
                    l.jsx)(eM, {
                        icon: (0,
                        l.jsx)(ey.CJ, {
                            className: "text-orange-300"
                        }),
                        title: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.accuracy)),
                        body: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.accuracyBody))
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "flex flex-row justify-end",
                    children: (0,
                    l.jsx)(S.mH, {
                        title: a.formatMessage(e_.gettingStartedButton),
                        onClick: t,
                        color: "primary"
                    })
                })]
            })
        }
          , eA = function(e) {
            var t = e.onSubmit
              , a = (0,
            v.Z)();
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col gap-6 p-4 md:p-6",
                children: [(0,
                l.jsxs)("div", {
                    className: "flex flex-col gap-6 md:flex-row",
                    children: [(0,
                    l.jsx)(eM, {
                        icon: (0,
                        l.jsx)(ev.Z, {
                            className: "icon-md text-brand-purple"
                        }),
                        title: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.workUse)),
                        body: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.workUseBody))
                    }), (0,
                    l.jsx)(eM, {
                        icon: (0,
                        l.jsx)(ey.wP, {
                            isSolid: !0,
                            className: "h-5 w-5 text-green-600"
                        }),
                        title: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.askAway)),
                        body: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.askAwayBody))
                    }), (0,
                    l.jsx)(eM, {
                        icon: (0,
                        l.jsx)(ey.CJ, {
                            className: "text-orange-300"
                        }),
                        title: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.accuracy)),
                        body: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, e_.accuracyBody))
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "flex flex-row justify-end",
                    children: (0,
                    l.jsx)(S.mH, {
                        title: a.formatMessage(e_.gettingStartedButton),
                        onClick: t,
                        color: "primary"
                    })
                })]
            })
        }
          , e_ = (0,
        y.vU)({
            askAway: {
                id: "onboarding.askAway",
                defaultMessage: "Ask away",
                description: "Title for the tip about what ChatGPT can do"
            },
            askAwayBody: {
                id: "onboarding.askAwayBody",
                defaultMessage: "ChatGPT can answer questions, help you learn, write code, brainstorm together, and much more.",
                description: "Body copy for the tip about what ChatGPT can do"
            },
            warning: {
                id: "onboarding.warning",
                defaultMessage: "Don’t share sensitive info",
                description: "Title for the warning about ChatGPT traning"
            },
            warningBody: {
                id: "onboarding.warningBody",
                defaultMessage: "Chat history may be reviewed or used to improve our services. Learn more about your choices in our <article>Help Center</article>.",
                description: "Body copy for the warning about ChatGPT traning"
            },
            accuracy: {
                id: "onboarding.accuracy",
                defaultMessage: "Check your facts",
                description: "Title for the warning about ChatGPT inaccuracy"
            },
            accuracyBody: {
                id: "onboarding.accuracyBody",
                defaultMessage: "While we have safeguards, ChatGPT may give you inaccurate information. It’s not intended to give advice.",
                description: "Body copy for the warning about ChatGPT inaccuracy"
            },
            gettingStartedButton: {
                id: "onboarding.gettingStartedButton",
                defaultMessage: "Okay, let’s go",
                description: "Button to accept the getting started modal"
            },
            workspaceWelcome: {
                id: "onboarding.workspaceWelcome",
                defaultMessage: "Welcome to the {workspaceName} Workspace",
                description: "Introduction welcome for workspace onboarding"
            },
            workspaceWelcomeNoName: {
                id: "onboarding.workspaceWelcomeNoName",
                defaultMessage: "Welcome to the your Workspace",
                description: "Introduction welcome for workspace onboarding when no Workspace name is available"
            },
            workspaceWelcomeBody: {
                id: "onboarding.workspaceWelcomeBody",
                defaultMessage: "Here you can use our latest models, with more capabilities, and fewer limits.",
                description: "Introduction welcome body for workspace onboarding"
            },
            workUse: {
                id: "onboarding.workUse",
                defaultMessage: "Made for use at work",
                description: "Title for the warning about ChatGPT business workspace use"
            },
            workUseBody: {
                id: "onboarding.workUseBody",
                defaultMessage: "By default, chats in this workspace are not used to train our AI models.",
                description: "Body copy for the warning about ChatGPT business workspace use"
            }
        })
          , eN = a(72871)
          , eT = a(25653)
          , eS = x.pm.MemoryOnboarding;
        function eB(e) {
            var t = e.icon
              , a = e.title
              , n = e.description;
            return (0,
            l.jsxs)("div", {
                className: "flex items-start",
                children: [(0,
                l.jsx)("div", {
                    className: "mt-1",
                    children: t
                }), (0,
                l.jsxs)("div", {
                    className: "ml-4",
                    children: [(0,
                    l.jsx)("div", {
                        className: "text-lg font-medium",
                        children: a
                    }), (0,
                    l.jsx)("p", {
                        className: "mt-1 text-sm text-token-text-secondary",
                        children: n
                    })]
                })]
            })
        }
        function eP(e) {
            var t = e.onClose
              , a = (0,
            v.Z)()
              , n = (0,
            x.qg)(eS).markAsViewed
              , i = (0,
            m.useCallback)(function() {
                n(),
                t()
            }, [n, t]);
            return (0,
            l.jsx)(B.Z, {
                isOpen: !0,
                onClose: b.noop,
                size: "custom",
                className: "max-w-xl",
                type: "success",
                title: a.formatMessage(eZ.title),
                primaryButton: (0,
                l.jsx)(S.ZP.Button, {
                    onClick: i,
                    title: a.formatMessage(eZ.continue),
                    color: "primary"
                }),
                children: (0,
                l.jsxs)("div", {
                    className: "mb-6 flex flex-col gap-3",
                    children: [(0,
                    l.jsx)(eB, {
                        icon: (0,
                        l.jsx)(eZ.bulletTitle1.Icon, {}),
                        title: a.formatMessage(eZ.bulletTitle1),
                        description: a.formatMessage(eZ.bulletDescription1)
                    }), (0,
                    l.jsx)(eB, {
                        icon: (0,
                        l.jsx)(eZ.bulletTitle2.Icon, {}),
                        title: a.formatMessage(eZ.bulletTitle2),
                        description: a.formatMessage(eZ.bulletDescription2)
                    }), (0,
                    l.jsx)(eB, {
                        icon: (0,
                        l.jsx)(eZ.bulletTitle3.Icon, {}),
                        title: a.formatMessage(eZ.bulletTitle3),
                        description: a.formatMessage(eZ.bulletDescription3)
                    })]
                })
            })
        }
        var eZ = (0,
        y.vU)({
            title: {
                id: "MemoryOnboardingModal.title",
                defaultMessage: "Your GPT can now learn from your chats",
                description: "Title of the modal"
            },
            bulletTitle1: {
                Icon: eT.K9,
                id: "MemoryOnboardingModal.bulletTitle1",
                defaultMessage: "Keep the conversation going",
                description: "Title for the first bullet"
            },
            bulletDescription1: {
                id: "MemoryOnboardingModal.bulletDescription1",
                defaultMessage: "Your GPT will carry what it learns between chats, allowing it to provide more relevant responses.",
                description: "Description for the first bullet"
            },
            bulletTitle2: {
                Icon: eT.Fw,
                id: "MemoryOnboardingModal.bulletTitle2",
                defaultMessage: "Improves over time",
                description: "Title for the second bullet"
            },
            bulletDescription2: {
                id: "MemoryOnboardingModal.bulletDescription2",
                defaultMessage: "As you chat your GPT will become more helpful, remembering details and preferences.",
                description: "Description for the seconed bullet"
            },
            bulletTitle3: {
                Icon: el.gf,
                id: "MemoryOnboardingModal.bulletTitle3",
                defaultMessage: "Manage what it remembers",
                description: "Title for the third bullet"
            },
            bulletDescription3: {
                id: "MemoryOnboardingModal.bulletDescription3",
                defaultMessage: "To modify what your GPT knows, just send it a message. You can reset your GPT’s memory or turn this feature off in settings.",
                description: "Description for the third bullet"
            },
            continue: {
                id: "MemoryOnboardingModal.continue",
                defaultMessage: "Continue",
                description: "Button to close"
            }
        })
          , eD = a(64502)
          , eE = a(12296)
          , eO = function(e) {
            var t = e.onContinue
              , a = e.scope
              , n = (0,
            v.Z)()
              , i = (0,
            eE.$3)();
            return (0,
            l.jsx)(B.Z, {
                isOpen: !0,
                onClose: b.noop,
                type: "success",
                title: n.formatMessage(eL.chatgptTitle, {
                    workspaceName: i
                }),
                size: "fullscreen",
                className: "max-w-2xl",
                children: (0,
                l.jsx)(ej, {
                    onClose: function() {
                        t()
                    },
                    scope: a
                })
            })
        }
          , ez = function(e) {
            var t = e.onContinue
              , a = e.onSkip
              , n = (0,
            v.Z)();
            return (0,
            l.jsx)(B.Z, {
                isOpen: !0,
                onClose: b.noop,
                type: "success",
                title: n.formatMessage(eL.primaryRoleTitle),
                description: n.formatMessage(eL.tailorChatGPT),
                size: "custom",
                className: "max-w-lg",
                children: (0,
                l.jsx)(eI, {
                    options: eR,
                    onSkip: a,
                    onSubmit: t
                })
            })
        }
          , eW = function(e) {
            var t = e.onContinue
              , a = e.onSkip
              , n = (0,
            v.Z)();
            return (0,
            l.jsx)(B.Z, {
                isOpen: !0,
                onClose: b.noop,
                type: "success",
                title: n.formatMessage(eL.workTypeTitle),
                description: n.formatMessage(eL.tailorChatGPT),
                size: "custom",
                className: "max-w-lg",
                children: (0,
                l.jsx)(eI, {
                    options: eG,
                    onSkip: a,
                    onSubmit: t,
                    multiSelect: !0
                })
            })
        };
        function eI(e) {
            var t = e.options
              , a = e.onSkip
              , n = void 0 === a ? b.noop : a
              , i = e.onSubmit
              , s = void 0 === i ? b.noop : i
              , o = e.multiSelect
              , c = void 0 !== o && o
              , d = function(e, t) {
                var a = e.indexOf(t);
                return -1 === a ? (0,
                eD._)(e).concat([t]) : (0,
                eD._)(e.slice(0, a)).concat((0,
                eD._)(e.slice(a + 1)))
            }
              , u = "dark" === (0,
            ed.F)().resolvedTheme
              , p = (0,
            v.Z)()
              , g = (0,
            r._)((0,
            m.useState)([]), 2)
              , f = g[0]
              , h = g[1]
              , x = (0,
            m.useCallback)(function(e) {
                var t, a = null !== (t = e.currentTarget.dataset.value) && void 0 !== t ? t : "";
                c ? h(d(f, a)) : s(a)
            }, [s, f, h, c]);
            return (0,
            l.jsxs)("div", {
                children: [c && (0,
                l.jsx)("p", {
                    className: "mx-2 text-sm text-gray-400",
                    children: p.formatMessage(eL.selectAll)
                }), (0,
                l.jsx)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: (0,
                    l.jsx)("div", {
                        className: "flex-wrap space-y-4",
                        children: t.map(function(e) {
                            return (0,
                            l.jsx)(q.z, {
                                onClick: x,
                                color: f.includes(e.id) ? u ? "light" : "dark" : "neutral",
                                size: "medium",
                                className: "mx-2 ".concat(f.includes(e.id) ? "hover:bg-gray-200" : "hover:bg-gray-100"),
                                "data-value": e.id,
                                children: (0,
                                l.jsx)(T.Z, (0,
                                j._)({}, e.displayValue))
                            }, e.id)
                        })
                    })
                }), (0,
                l.jsxs)("div", {
                    className: "mt-4 flex flex-row justify-end",
                    children: [(0,
                    l.jsx)(S.mH, {
                        title: p.formatMessage(eL.skipButton),
                        onClick: n
                    }), c && (0,
                    l.jsx)(S.mH, {
                        title: p.formatMessage(eL.continueButton),
                        onClick: function() {
                            s(f)
                        },
                        disabled: 0 === f.length,
                        color: "primary",
                        className: "ml-4"
                    })]
                })]
            })
        }
        function eU(e) {
            var t = e.onClose
              , a = (0,
            r._)((0,
            m.useState)(0), 2)
              , n = a[0]
              , i = a[1]
              , c = (0,
            r._)((0,
            m.useState)({
                role: void 0,
                departments: void 0
            }), 2)
              , d = c[0]
              , u = c[1]
              , p = (0,
            f.ec)(f.F_.workspaceId)
              , g = (0,
            f.aF)()
              , h = null == g ? void 0 : g.id
              , x = function() {
                L.m9.logEvent("chatgpt_biz_onboarding_skipped"),
                W.A.logEvent(I.M.bizOnboardingSkipped),
                t()
            };
            switch (n) {
            case o.InitialModal:
                return (0,
                l.jsx)(eO, {
                    scope: s.Workspace,
                    onContinue: function() {
                        i(o.RoleModal)
                    }
                });
            case o.RoleModal:
                return (0,
                l.jsx)(ez, {
                    onContinue: function(e) {
                        u(function(t) {
                            return (0,
                            M._)((0,
                            j._)({}, t), {
                                role: e
                            })
                        }),
                        i(o.DepartmentModal)
                    },
                    onSkip: x
                });
            case o.DepartmentModal:
                return (0,
                l.jsx)(eW, {
                    onContinue: function(e) {
                        var a = (0,
                        M._)((0,
                        j._)({}, d), {
                            departments: e
                        });
                        t(),
                        L.m9.logEvent("chatgpt_biz_onboarding_completed"),
                        W.A.logEvent(I.M.bizOnboardingCompleted),
                        k.ZP.updateWorkspaceUserOnboardingInformation(p, h, a)
                    },
                    onSkip: x
                });
            default:
                return (0,
                l.jsx)(l.Fragment, {})
            }
        }
        (i = o || (o = {}))[i.InitialModal = 0] = "InitialModal",
        i[i.RoleModal = 1] = "RoleModal",
        i[i.DepartmentModal = 2] = "DepartmentModal";
        var eL = (0,
        y.vU)({
            chatgptTitle: {
                id: "onboarding.chatgptTitle.0",
                defaultMessage: "Welcome to the {workspaceName} workspace",
                description: "Title for the initial onboarding modal"
            },
            primaryRoleTitle: {
                id: "onboarding.primaryRoleTitle",
                defaultMessage: "What's your primary role?",
                description: "Question asking the user about their primary role"
            },
            tailorChatGPT: {
                id: "onboarding.tailorChatGPT",
                defaultMessage: "This will help us tailor ChatGPT for you.",
                description: "Description explaining the reason for the questions"
            },
            workTypeTitle: {
                id: "onboarding.workTypeTitle",
                defaultMessage: "What kind of work do you do?",
                description: "Question asking the user about the kind of work they do"
            },
            selectAll: {
                id: "onboarding.selectAll",
                defaultMessage: "Select all that apply",
                description: "Instruction for multi-select options"
            },
            skipButton: {
                id: "onboarding.skipButton",
                defaultMessage: "Skip",
                description: "Label for the skip button"
            },
            continueButton: {
                id: "onboarding.continueButton",
                defaultMessage: "Continue",
                description: "Label for the continue button"
            }
        })
          , eq = (0,
        y.vU)({
            marketing: {
                id: "onboarding.departments.marketing",
                defaultMessage: "Marketing",
                description: "Department option for Marketing"
            },
            analytics: {
                id: "onboarding.departments.analytics",
                defaultMessage: "Data or Analytics",
                description: "Department option for Data or Analytics"
            },
            product: {
                id: "onboarding.departments.product",
                defaultMessage: "Product Management",
                description: "Department option for Product Management"
            },
            comms: {
                id: "onboarding.departments.comms",
                defaultMessage: "Communications",
                description: "Department option for Communication"
            },
            finance: {
                id: "onboarding.departments.finance",
                defaultMessage: "Finance or Accounting",
                description: "Department option for Finance or Accounting"
            },
            customer_experience: {
                id: "onboarding.departments.customer_experience",
                defaultMessage: "Customer Experience",
                description: "Department option for Customer Experience"
            },
            project_management: {
                id: "onboarding.departments.project_management",
                defaultMessage: "Project or Program Management",
                description: "Department option for Project or Program Management"
            },
            engineering: {
                id: "onboarding.departments.engineering",
                defaultMessage: "Engineering",
                description: "Department option for Engineering"
            },
            education_professional: {
                id: "onboarding.departments.education_professional",
                defaultMessage: "Education Professional",
                description: "Department option for Education Professional"
            },
            design: {
                id: "onboarding.departments.design",
                defaultMessage: "Design",
                description: "Department option for Design"
            },
            administrative: {
                id: "onboarding.departments.administrative",
                defaultMessage: "Administrative Assistant",
                description: "Department option for Administrative Assistant"
            },
            partnerships: {
                id: "onboarding.departments.partnerships",
                defaultMessage: "Partnerships",
                description: "Department option for Partnerships"
            },
            it: {
                id: "onboarding.departments.it",
                defaultMessage: "Information Technology (IT)",
                description: "Department option for Information Technology (IT)"
            },
            ops: {
                id: "onboarding.departments.ops",
                defaultMessage: "Operations",
                description: "Department option for Operations"
            },
            human_resources: {
                id: "onboarding.departments.human_resources",
                defaultMessage: "Human Resources",
                description: "Department option for Human Resources"
            },
            research: {
                id: "onboarding.departments.research",
                defaultMessage: "Research & Development",
                description: "Department option for Research & Development"
            },
            sales: {
                id: "onboarding.departments.sales",
                defaultMessage: "Sales",
                description: "Department option for Sales"
            },
            legal: {
                id: "onboarding.departments.legal",
                defaultMessage: "Legal",
                description: "Department option for Legal"
            },
            healthcare: {
                id: "onboarding.departments.healthcare",
                defaultMessage: "Healthcare Professional",
                description: "Department option for Healthcare Professional"
            },
            other: {
                id: "onboarding.departments.other",
                defaultMessage: "Other",
                description: "Department option for Other"
            }
        })
          , eV = (0,
        y.vU)({
            team_member: {
                id: "onboarding.role.team_member",
                defaultMessage: "Team Member/ Individual Contributor",
                description: "Label for the role: Team Member/ Individual Contributor"
            },
            manager: {
                id: "onboarding.role.manager",
                defaultMessage: "Manager",
                description: "Label for the role: Manager"
            },
            student: {
                id: "onboarding.role.student",
                defaultMessage: "Student",
                description: "Label for the role: Student"
            },
            executive: {
                id: "onboarding.role.executive",
                defaultMessage: "Executive",
                description: "Label for the role: Executive"
            },
            director: {
                id: "onboarding.role.director",
                defaultMessage: "Director",
                description: "Label for the role: Director"
            },
            business_owner: {
                id: "onboarding.role.business_owner",
                defaultMessage: "Business Owner",
                description: "Label for the role: Business Owner"
            },
            freelancer: {
                id: "onboarding.role.freelancer",
                defaultMessage: "Freelancer",
                description: "Label for the role: Freelancer"
            },
            other: {
                id: "onboarding.role.other",
                defaultMessage: "Other",
                description: "Label for the role: Other"
            }
        })
          , eR = [{
            id: "team_member",
            displayValue: eV.team_member
        }, {
            id: "manager",
            displayValue: eV.manager
        }, {
            id: "student",
            displayValue: eV.student
        }, {
            id: "executive",
            displayValue: eV.executive
        }, {
            id: "director",
            displayValue: eV.director
        }, {
            id: "business_owner",
            displayValue: eV.business_owner
        }, {
            id: "freelancer",
            displayValue: eV.freelancer
        }, {
            id: "other",
            displayValue: eV.other
        }]
          , eG = [{
            id: "marketing",
            displayValue: eq.marketing
        }, {
            id: "analytics",
            displayValue: eq.analytics
        }, {
            id: "product",
            displayValue: eq.product
        }, {
            id: "comms",
            displayValue: eq.comms
        }, {
            id: "engineering",
            displayValue: eq.engineering
        }, {
            id: "education_professional",
            displayValue: eq.education_professional
        }, {
            id: "finance",
            displayValue: eq.finance
        }, {
            id: "customer_experience",
            displayValue: eq.customer_experience
        }, {
            id: "project_management",
            displayValue: eq.project_management
        }, {
            id: "design",
            displayValue: eq.design
        }, {
            id: "administrative",
            displayValue: eq.administrative
        }, {
            id: "it",
            displayValue: eq.it
        }, {
            id: "ops",
            displayValue: eq.ops
        }, {
            id: "human_resources",
            displayValue: eq.human_resources
        }, {
            id: "research",
            displayValue: eq.research
        }, {
            id: "sales",
            displayValue: eq.sales
        }, {
            id: "partnerships",
            displayValue: eq.partnerships
        }, {
            id: "legal",
            displayValue: eq.legal
        }, {
            id: "healthcare",
            displayValue: eq.healthcare
        }, {
            id: "other",
            displayValue: eq.other
        }]
          , eF = function(e) {
            var t = e.onClose
              , a = (0,
            v.Z)()
              , n = (0,
            f.ec)(f.F_.isBusinessWorkspace)
              , i = (0,
            f.ec)(function(e) {
                return e.currentWorkspace
            })
              , o = n ? a.formatMessage(eQ.workspaceWelcome, {
                workspaceName: null == i ? void 0 : i.name
            }) : "ChatGPT";
            return (0,
            l.jsx)(B.Z, {
                isOpen: !0,
                onClose: b.noop,
                type: "success",
                title: o,
                size: "fullscreen",
                className: "max-w-3xl",
                description: a.formatMessage(eQ.personalOnboardingSubheading),
                children: (0,
                l.jsx)(ej, {
                    onClose: t,
                    scope: s.Personal
                })
            })
        };
        function eH(e) {
            var t, a, n, i, s, o, c = e.ageVerificationDeadline, d = e.showCookieConsentBanner, u = e.canManageBrowserStorage, p = (0,
            r._)((0,
            m.useState)(0), 2), g = p[0], b = p[1], v = (0,
            f.ec)(f.F_.workspaceId), y = ew().hasSeenOnboardingDate, w = (0,
            x.qg)(x.pm.GizmoOnboarding), j = w.eligible, M = w.isLoading, C = (0,
            f.ec)(f.F_.isBusinessWorkspace), A = 0 === (0,
            f.hz)().size ? "loading" : U.b.getCookie(U.c.AgeVerification) || null == c ? "hide" : "show", _ = 0 === (0,
            f.hz)().size ? "loading" : d ? "show" : "hide", N = (t = (0,
            f.ec)(f.F_.isBusinessWorkspace),
            a = (0,
            f.hz)(),
            i = (n = (0,
            Y.T$)({
                enabled: !t && a.has("privacy_policy_nov_2023")
            })).isLoading,
            s = n.data,
            i || 0 === a.size ? "loading" : (null == s ? void 0 : s.terms_of_use.is_required) === !0 ? "show" : "hide"), T = (o = (0,
            eN.H)().isSunshineAvailable,
            (0,
            x.qg)(eS).eligible && o), S = (0,
            f.$T)(), B = (0,
            k.Go)(), P = (0,
            f.ec)(f.F_.hasMultipleWorkspaces) && null == v, D = (0,
            h.Og)(), O = (0,
            m.useMemo)(function() {
                return [{
                    Component: E.Z,
                    getModalState: function() {
                        return S ? "loading" : P ? "show" : "hide"
                    }
                }, {
                    Component: Z,
                    getModalState: function() {
                        return S ? "loading" : null !== B ? "show" : "hide"
                    }
                }, {
                    Component: ei,
                    getModalState: function() {
                        return N
                    }
                }, {
                    Component: K,
                    getModalState: function() {
                        return _
                    }
                }, {
                    Component: eF,
                    getModalState: function() {
                        return C ? "hide" : null === y ? "loading" : !1 === y ? "show" : "hide"
                    }
                }, {
                    Component: eU,
                    getModalState: function() {
                        return C ? null === y ? "loading" : !1 === y ? "show" : "hide" : "hide"
                    }
                }, {
                    Component: R,
                    getModalState: function() {
                        return A
                    }
                }, {
                    Component: eh,
                    getModalState: function() {
                        return D && "/" === window.location.pathname ? null === M ? "loading" : j ? "show" : "hide" : "hide"
                    }
                }, {
                    Component: eP,
                    getModalState: function() {
                        return M ? "loading" : T ? "show" : "hide"
                    }
                }]
            }, [S, P, B, N, _, C, y, A, D, M, j, T]);
            (0,
            m.useEffect)(function() {
                O[g] && "hide" === O[g].getModalState() && b(O.findIndex(function(e) {
                    return "hide" !== e.getModalState()
                }))
            }, [g, O]);
            var z = O[g];
            if (null == z)
                return null;
            var W = z.getModalState();
            if ("loading" === W)
                return null;
            "hide" === W && b(function(e) {
                return e + 1
            });
            var I = O[g].Component;
            return (0,
            l.jsx)(I, {
                onClose: function() {
                    b(function(e) {
                        return e + 1
                    })
                },
                ageVerificationDeadline: c,
                canManageBrowserStorage: u
            })
        }
        var eQ = (0,
        y.vU)({
            workspaceWelcome: {
                id: "BlockingInitialModals.workspaceWelcome",
                defaultMessage: "Welcome to the {workspaceName} workspace",
                description: "Title for the Workspace onboarding modal"
            },
            personalOnboardingSubheading: {
                id: "BlockingInitialModals.personalOnboardingSubheading",
                defaultMessage: "Tips for getting started",
                description: "Subheading for the Personal onboarding modal"
            }
        })
          , eY = a(98800)
          , eJ = a(8679)
          , eK = function(e) {
            var t = e.action;
            return (0,
            l.jsxs)("div", {
                className: "flex items-center justify-between overflow-hidden text-gray-600 dark:text-gray-300",
                children: [(0,
                l.jsx)("div", {
                    className: "flex flex-shrink items-center overflow-hidden text-sm",
                    children: (0,
                    l.jsx)("div", {
                        className: "truncate",
                        children: (0,
                        l.jsx)(T.Z, (0,
                        j._)({}, t.actionMessageDescriptor))
                    })
                }), (0,
                l.jsx)("div", {
                    className: "ml-3 flex flex-row gap-2",
                    children: (0,
                    eJ.A3)(t.keyboardBinding).map(function(e, a) {
                        return (0,
                        l.jsx)(e$, {
                            keyName: e
                        }, "".concat(t.key, "-").concat(a))
                    })
                })]
            })
        }
          , e$ = function(e) {
            var t = e.keyName
              , a = (0,
            ea.default)("my-2 flex h-8 items-center justify-center rounded-[4px] border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300");
            return t.length > 1 ? t.length > 3 ? (0,
            l.jsx)("div", {
                className: (0,
                ea.default)(a, "min-w-[50px]"),
                children: (0,
                l.jsx)("span", {
                    className: "text-xs",
                    children: t
                })
            }) : (0,
            l.jsx)("div", {
                className: (0,
                ea.default)(a, "min-w-[32px]"),
                children: (0,
                l.jsx)("span", {
                    className: "text-xs",
                    children: t
                })
            }) : (0,
            l.jsx)("div", {
                className: (0,
                ea.default)(a, "min-w-[32px]"),
                children: (0,
                l.jsx)("span", {
                    className: "text-sm",
                    children: t
                })
            })
        }
          , eX = (0,
        y.vU)({
            keyboardActionsModalTitle: {
                id: "KeyboardActionsModal.keyboardActionsModalTitle",
                defaultMessage: "Keyboard shortcuts",
                description: "Title of the keyboard shortcuts modal"
            }
        })
          , e0 = function() {
            var e = (0,
            v.Z)()
              , t = (0,
            O.tN)(function(e) {
                return e.activeModals.has(O.B.KeyboardActions)
            })
              , a = function() {
                O.vm.closeModal(O.B.KeyboardActions)
            }
              , n = (0,
            eJ.JS)()
              , i = (0,
            m.useMemo)(function() {
                var e = Math.ceil(n.length / 2);
                return [n.slice(0, e), n.slice(e)]
            }, [n]);
            return (0,
            l.jsx)(B.Z, {
                isOpen: t,
                onClose: a,
                type: "success",
                size: "custom",
                className: "md:max-w-[672px] lg:max-w-[796px] xl:max-w-4xl",
                closeButton: (0,
                l.jsx)(S.ZP.CloseButton, {
                    onClose: a
                }),
                title: e.formatMessage(eX.keyboardActionsModalTitle),
                children: (0,
                l.jsx)(l.Fragment, {
                    children: (0,
                    l.jsx)("div", {
                        className: "grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9",
                        children: i.map(function(e, t) {
                            return (0,
                            l.jsx)("div", {
                                className: "flex flex-col overflow-hidden",
                                children: e.map(function(e) {
                                    return (0,
                                    l.jsx)(eK, {
                                        action: e
                                    }, e.key)
                                })
                            }, "col-".concat(t))
                        })
                    })
                })
            })
        }
          , e4 = Symbol("invalid path");
        function e2(e) {
            var t, a = e.split(/[#?]/)[0];
            if ("/" !== a && !a.match(/^\/g\/\w+$/)) {
                var n = /(?:(?:\/gizmo)?\/g\/\w+)?\/c\/([a-f0-9-]+)$/.exec(a);
                return null !== (t = null == n ? void 0 : n[1]) && void 0 !== t ? t : e4
            }
        }
        function e1(e) {
            var t = e.urlThreadId
              , a = e.clientThreadId
              , n = e.serviceStatus
              , i = e.serviceAnnouncement
              , s = e.ageVerificationDeadline
              , o = e.showCookieConsentBanner
              , h = e.canManageBrowserStorage
              , x = (0,
            r._)((0,
            m.useState)(function() {
                return void 0 !== t ? t : void 0 !== a ? a : (0,
                g.OX)()
            }), 2)
              , b = x[0]
              , v = x[1];
            void 0 !== t && b !== t && g.tQ.getServerThreadId(b) !== t && v(t),
            void 0 === t && void 0 !== g.tQ.getServerThreadId(b) && v((0,
            g.OX)());
            var y = (0,
            f.$T)()
              , k = (0,
            f.WY)()
              , w = (0,
            f.ec)(f.F_.workspaceId)
              , j = (0,
            f.hz)().has(d.PL);
            (0,
            m.useEffect)(function() {
                j && p.ZP.initializeAndGatherData()
            }, [j]),
            (0,
            m.useEffect)(function() {
                (null == n ? void 0 : n.type) && !1 === k && c.m.warning(n.message, {
                    hasCloseButton: !0,
                    duration: 5
                })
            }, [k, null == n ? void 0 : n.message, null == n ? void 0 : n.type]);
            var M = (0,
            m.useRef)(!1);
            return (0,
            m.useEffect)(function() {
                if (!y) {
                    var e = k ? i.paid : i.public;
                    if ((null == e ? void 0 : e.type) && (null == e ? void 0 : e.message) && !M.current) {
                        M.current = !0;
                        var t = e.message
                          , a = {
                            hasCloseButton: !0,
                            duration: 15
                        };
                        switch (e.type) {
                        case "danger":
                            c.m.danger(t, a);
                            break;
                        case "info":
                            c.m.info(t, a);
                            break;
                        case "warning":
                            c.m.warning(t, a)
                        }
                    }
                }
            }, [i, y, k]),
            (0,
            l.jsxs)(u.gB.Provider, {
                value: null,
                children: [(0,
                l.jsx)(eH, {
                    ageVerificationDeadline: s,
                    showCookieConsentBanner: o,
                    canManageBrowserStorage: h
                }, w), (0,
                l.jsx)(e0, {}), (0,
                l.jsx)(eY.Z, {
                    clientThreadId: b,
                    setClientThreadId: v
                })]
            })
        }
    },
    98800: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return Z
            }
        });
        var n = a(39324)
          , i = a(35250)
          , s = a(35265)
          , o = a(82473)
          , r = a(10721)
          , l = a(70079)
          , c = a(1454)
          , d = a(32004)
          , u = a(94968)
          , p = a(66638)
          , m = a(55548)
          , g = a(17944)
          , f = a(25687)
          , h = a(84844)
          , x = a(8679)
          , b = a(1491)
          , v = a(61399)
          , y = a(61017)
          , k = a(41955)
          , w = a(21950)
          , j = a(41187)
          , M = a(23234)
          , C = a(40578)
          , A = a(14957)
          , _ = a(10989)
          , N = a(47478)
          , T = a(4865)
          , S = a(74424)
          , B = a(71771)
          , P = a(10499);
        function Z(e) {
            var t, a = e.clientThreadId, n = e.setClientThreadId, d = e.initiallyHighlightedMessageId, u = e.continueConversationUrl, v = null !== (0,
            l.useContext)(f.gB);
            (0,
            p.ax)(a);
            var y = (0,
            p.XK)(a)
              , Z = (0,
            r.useRouter)()
              , E = (0,
            g.hz)()
              , O = (0,
            p.UL)(a)
              , z = (0,
            l.useContext)(f.QL).historyDisabled
              , W = (0,
            P.Xy)(O.lastModelUsed, a)
              , I = (0,
            o.NL)();
            (0,
            l.useEffect)(function() {
                return p.tQ.retainThread(a),
                function() {
                    setTimeout(function() {
                        I.invalidateQueries({
                            queryKey: ["conversation", a]
                        })
                    }, 0),
                    p.tQ.releaseThread(a)
                }
            }, [a, I]),
            (0,
            l.useEffect)(function() {
                m.vm.closeSharingModal()
            }, [a, y]);
            var U = (0,
            l.useCallback)(function() {
                n((0,
                p.OX)()),
                Z.replace(W.tags.includes(P.S.GPT_4) ? "/" : "/?model=".concat(W.id), void 0, {
                    shallow: !0
                })
            }, [n, W.tags, W.id, Z]);
            (0,
            x.yx)({
                resetThreadAction: U,
                clientThreadId: a
            });
            var L = (0,
            m.tN)(function(e) {
                return e.activeSidebar
            })
              , q = (0,
            b.w$)();
            (0,
            l.useEffect)(function() {
                return function() {
                    k.hx.abortAllRequests()
                }
            }, [a]),
            t = (0,
            g.hz)().has("debug"),
            (0,
            l.useEffect)(function() {
                if (t)
                    return (0,
                    h.eR)(document, {
                        keydown: function(e) {
                            e.target instanceof HTMLElement && ["input", "textarea", "select", "button"].includes(e.target.tagName.toLowerCase()) || "\\" !== e.key || m.vm.toggleActiveSidebar("debug")
                        }
                    })
            }, [t]);
            var V = (0,
            l.useRef)(O.threadId);
            (0,
            l.useEffect)(function() {
                O.threadId !== V.current && (m.vm.setActiveSidebar(!1),
                V.current = O.threadId),
                k.hx.clear()
            }, [O.threadId]);
            var R = (0,
            M.Ml)()
              , G = (0,
            M.Og)()
              , F = (0,
            w.TS)(a);
            return (0,
            i.jsxs)(T.Z, {
                showNavigation: !v,
                renderTitle: (0,
                i.jsx)(D, {
                    clientThreadId: a
                }),
                renderMobileHeaderRightContent: (0,
                i.jsx)(S.js, {
                    onClick: U,
                    children: z ? (0,
                    i.jsx)(c.Bw1, {
                        className: "icon-lg"
                    }) : (0,
                    i.jsx)(i.Fragment, {
                        children: R ? (0,
                        i.jsx)(s.ks, {
                            className: "icon-md"
                        }) : (0,
                        i.jsx)(c.OvN, {
                            className: "icon-lg"
                        })
                    })
                }),
                renderSidebar: (0,
                i.jsxs)(A.ZP, {
                    onNewThread: U,
                    currentGizmoId: F,
                    children: [G && (0,
                    i.jsx)(j.Dy, {
                        currentGizmoId: F
                    }), !G && R && (0,
                    i.jsx)("div", {
                        className: "pt-3.5",
                        children: (0,
                        i.jsx)(j.jl, {
                            gizmo: void 0,
                            isActive: void 0 === F
                        })
                    }), (0,
                    i.jsx)(C.Z, {
                        activeId: z ? void 0 : y,
                        onNewThread: U
                    })]
                }),
                children: [(0,
                i.jsx)(B.Z, {
                    initialThreadData: O,
                    clientThreadId: a,
                    initiallyHighlightedMessageId: d,
                    continueConversationUrl: u
                }, a), (0,
                i.jsxs)(T.Z.Sidebars, {
                    children: [E.has("debug") && "debug" === L && (0,
                    i.jsx)(N.fv, {
                        clientThreadId: a,
                        slideOver: !q,
                        onClose: function() {
                            return m.vm.toggleActiveSidebar("debug")
                        },
                        isOpen: !0
                    }), E.has("tools3_dev") && (0,
                    i.jsx)(_.ZP, {
                        slideOver: !q
                    })]
                })]
            })
        }
        function D(e) {
            var t, a = e.clientThreadId, s = null !== (t = p.tQ.getTitle(a)) && void 0 !== t ? t : "New chat", o = (0,
            v.Z)(a, s, !0), r = o.resolvedTitle, u = o.isTypingEffect, m = (0,
            l.useContext)(f.QL), g = m.historyDisabled, h = m.toggleHistoryDisabled;
            return (0,
            i.jsx)(i.Fragment, {
                children: g ? (0,
                i.jsxs)("button", {
                    className: "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                    onClick: function() {
                        return h()
                    },
                    children: [(0,
                    i.jsx)(c.$IY, {
                        className: "icon-sm"
                    }), (0,
                    i.jsx)(d.Z, (0,
                    n._)({}, E.enableChatHistory))]
                }) : u && null != r ? (0,
                i.jsx)(y.Z, {
                    text: r
                }) : null != r ? r : (0,
                i.jsx)(d.Z, (0,
                n._)({}, E.newChat))
            })
        }
        var E = (0,
        u.vU)({
            enableChatHistory: {
                id: "navigation.enableChatHistory",
                defaultMessage: "Enable chat history",
                description: "Enable chat history button label"
            },
            newChat: {
                id: "navigation.newChat",
                defaultMessage: "New chat",
                description: "New chat header title"
            }
        })
    },
    84269: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return T
            },
            b: function() {
                return N
            }
        });
        var n = a(21722)
          , i = a(39324)
          , s = a(71209)
          , o = a(10064)
          , r = a(38104)
          , l = a(35250)
          , c = a(5053)
          , d = a(17944)
          , u = a(40971)
          , p = a(25260)
          , m = a(19841)
          , g = a(91530)
          , f = a.n(g)
          , h = a(21988)
          , x = a.n(h)
          , b = a(70079)
          , v = a(1454)
          , y = a(32004)
          , k = a(94968)
          , w = a(12952)
          , j = a(7184)
          , M = a(42798)
          , C = a(34609)
          , A = a(12296);
        function _(e) {
            var t = e.workspace
              , a = (0,
            d.aF)()
              , i = (0,
            d.ec)(function(e) {
                return e.currentWorkspace
            })
              , s = (null == i ? void 0 : i.id) === t.id
              , g = (0,
            o._)((0,
            b.useState)(!1), 2)
              , h = g[0]
              , y = g[1]
              , k = (0,
            C.Z)().onEnableHistory
              , j = (0,
            b.useCallback)((0,
            n._)(function() {
                return (0,
                r.Jh)(this, function(e) {
                    return y(!0),
                    d.w_.setCurrentWorkspace(t),
                    k(),
                    (0,
                    u.M)(),
                    [2]
                })
            }), [t, k])
              , _ = (0,
            A.GA)(t)
              , N = (0,
            l.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0,
                l.jsx)(w.B0, {
                    src: t.profilePictureUrl,
                    size: "medium"
                })
            });
            if (t.structure === c.CZ.PERSONAL) {
                if (!a)
                    return null;
                N = (0,
                l.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0,
                    l.jsx)(x(), {
                        alt: "Profile",
                        src: a.picture,
                        width: w.EF.medium,
                        height: w.EF.medium,
                        className: "flex items-center justify-center rounded-full"
                    })
                })
            }
            return (0,
            l.jsxs)(s ? "div" : "button", {
                onClick: s ? f() : j,
                className: (0,
                m.default)({
                    "flex w-full items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-4 hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700": !0,
                    "bg-gray-50 dark:bg-gray-800": s
                }),
                children: [(0,
                l.jsxs)("div", {
                    className: "flex w-full items-center gap-4",
                    children: [N, (0,
                    l.jsx)("div", {
                        className: "inline align-top font-medium",
                        children: _
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "flex h-full items-center p-1",
                    children: h ? (0,
                    l.jsx)(M.Z, {}) : s ? (0,
                    l.jsx)(p.Z, {
                        className: "icon-lg"
                    }) : (0,
                    l.jsx)(v.Tfp, {
                        className: "icon-lg my-auto"
                    })
                })]
            })
        }
        function N(e) {
            var t = e.data.map(function(e) {
                return (0,
                l.jsx)(_, {
                    workspace: e
                }, e.id)
            });
            return (0,
            l.jsx)("div", {
                className: "flex w-full flex-col gap-2",
                children: t
            })
        }
        function T() {
            var e, t = (0,
            A.my)(), a = (0,
            d.aF)(), n = null !== (e = null == a ? void 0 : a.email) && void 0 !== e ? e : "";
            if (0 === t.length)
                return null;
            var o = t.filter(function(e) {
                return e.structure === c.CZ.WORKSPACE
            });
            return (0,
            l.jsx)(j.Z, {
                isOpen: !0,
                onClose: f(),
                type: "success",
                size: "normal",
                title: (0,
                l.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0,
                    l.jsx)(y.Z, (0,
                    i._)({}, S.workspaceSwitcherTitle)), (0,
                    l.jsx)("span", {
                        className: "mt-0.5 text-sm text-gray-700 dark:text-gray-400",
                        children: n
                    })]
                }),
                children: (0,
                l.jsxs)("div", {
                    className: "flex w-full flex-col items-center justify-between",
                    children: [(0,
                    l.jsx)(N, {
                        data: t
                    }), (0,
                    l.jsx)("span", {
                        className: "mt-4 text-sm text-gray-700 dark:text-gray-400",
                        children: (0,
                        l.jsx)(y.Z, (0,
                        s._)((0,
                        i._)({}, S.workspaceSwitcherDisclaimer), {
                            values: {
                                workspaces: (0,
                                l.jsx)("span", {
                                    className: "contents font-bold",
                                    children: (0,
                                    l.jsx)(k.yX, {
                                        value: o.map(function(e) {
                                            return e.name
                                        })
                                    })
                                }),
                                numWorkspaces: o.length
                            }
                        }))
                    })]
                })
            })
        }
        var S = (0,
        k.vU)({
            workspaceSwitcherTitle: {
                id: "workspaceSwitcher.title",
                defaultMessage: "Select a workspace",
                description: "title for account switcher modal"
            },
            workspaceSwitcherDisclaimer: {
                id: "workspaceSwitcher.disclaimer",
                defaultMessage: "You've been added to the {workspaces} {numWorkspaces, plural, one {workspace} other {workspaces}}. You can switch between workspaces at any time.",
                description: "disclaimer for account switcher modal"
            }
        })
    }
}]);
