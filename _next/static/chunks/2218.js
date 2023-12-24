(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2218], {
    45248: function(e, t) {
        "use strict";
        for (var o = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), a = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey"
        }, n = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: o ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta"
        }, r = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        }, i = 1; i < 20; i++)
            r["f" + i] = 111 + i;
        function l(e) {
            return e = n[e = e.toLowerCase()] || e
        }
        t.ZP = function(e, t, o) {
            !t || "byKey"in t || (o = t,
            t = null),
            Array.isArray(e) || (e = [e]);
            var i = e.map(function(e) {
                return function(e, t) {
                    var o = t && t.byKey
                      , i = {}
                      , u = (e = e.replace("++", "+add")).split("+")
                      , c = u.length;
                    for (var s in a)
                        i[a[s]] = !1;
                    var p = !0
                      , d = !1
                      , f = void 0;
                    try {
                        for (var v, h = u[Symbol.iterator](); !(p = (v = h.next()).done); p = !0) {
                            var S, m = v.value, g = m.endsWith("?") && m.length > 1;
                            g && (m = m.slice(0, -1));
                            var b = l(m)
                              , T = a[b];
                            if (m.length > 1 && !T && !n[m] && !r[b])
                                throw TypeError('Unknown modifier: "' + m + '"');
                            1 !== c && T || (o ? i.key = b : i.which = (S = m,
                            r[S = l(S)] || S.toUpperCase().charCodeAt(0))),
                            T && (i[T] = !g || null)
                        }
                    } catch (e) {
                        d = !0,
                        f = e
                    } finally {
                        try {
                            !p && h.return && h.return()
                        } finally {
                            if (d)
                                throw f
                        }
                    }
                    return i
                }(e, t)
            })
              , u = function(e) {
                return i.some(function(t) {
                    return function(e, t) {
                        for (var o in e) {
                            var a = e[o]
                              , n = void 0;
                            if (null != a && (null != (n = "key" === o && null != t.key ? t.key.toLowerCase() : "which" === o ? 91 === a && 93 === t.which ? 91 : t.which : t[o]) || !1 !== a) && n !== a)
                                return !1
                        }
                        return !0
                    }(t, e)
                })
            };
            return null == o ? u : u(o)
        }
    },
    89678: function(e, t, o) {
        var a = o(6627)
          , n = o(85365)
          , r = o(67948)
          , i = Math.max
          , l = Math.min;
        e.exports = function(e, t, o) {
            var u, c, s, p, d, f, v = 0, h = !1, S = !1, m = !0;
            if ("function" != typeof e)
                throw TypeError("Expected a function");
            function g(t) {
                var o = u
                  , a = c;
                return u = c = void 0,
                v = t,
                p = e.apply(a, o)
            }
            function b(e) {
                var o = e - f
                  , a = e - v;
                return void 0 === f || o >= t || o < 0 || S && a >= s
            }
            function T() {
                var e, o, a, r = n();
                if (b(r))
                    return w(r);
                d = setTimeout(T, (e = r - f,
                o = r - v,
                a = t - e,
                S ? l(a, s - o) : a))
            }
            function w(e) {
                return (d = void 0,
                m && u) ? g(e) : (u = c = void 0,
                p)
            }
            function y() {
                var e, o = n(), a = b(o);
                if (u = arguments,
                c = this,
                f = o,
                a) {
                    if (void 0 === d)
                        return v = e = f,
                        d = setTimeout(T, t),
                        h ? g(e) : p;
                    if (S)
                        return clearTimeout(d),
                        d = setTimeout(T, t),
                        g(f)
                }
                return void 0 === d && (d = setTimeout(T, t)),
                p
            }
            return t = r(t) || 0,
            a(o) && (h = !!o.leading,
            s = (S = "maxWait"in o) ? i(r(o.maxWait) || 0, t) : s,
            m = "trailing"in o ? !!o.trailing : m),
            y.cancel = function() {
                void 0 !== d && clearTimeout(d),
                v = 0,
                u = f = c = d = void 0
            }
            ,
            y.flush = function() {
                return void 0 === d ? p : w(n())
            }
            ,
            y
        }
    },
    85365: function(e, t, o) {
        var a = o(73401);
        e.exports = function() {
            return a.Date.now()
        }
    },
    15858: function(e, t) {
        "use strict";
        var o;
        (o = t.s || (t.s = {})).Unidentified = "Unidentified",
        o.Alt = "Alt",
        o.AltGraph = "AltGraph",
        o.CapsLock = "CapsLock",
        o.Control = "Control",
        o.Fn = "Fn",
        o.FnLock = "FnLock",
        o.Hyper = "Hyper",
        o.Meta = "Meta",
        o.NumLock = "NumLock",
        o.ScrollLock = "ScrollLock",
        o.Shift = "Shift",
        o.Super = "Super",
        o.Symbol = "Symbol",
        o.SymbolLock = "SymbolLock",
        o.Enter = "Enter",
        o.Tab = "Tab",
        o.ArrowDown = "ArrowDown",
        o.ArrowLeft = "ArrowLeft",
        o.ArrowRight = "ArrowRight",
        o.ArrowUp = "ArrowUp",
        o.End = "End",
        o.Home = "Home",
        o.PageDown = "PageDown",
        o.PageUp = "PageUp",
        o.Backspace = "Backspace",
        o.Clear = "Clear",
        o.Copy = "Copy",
        o.CrSel = "CrSel",
        o.Cut = "Cut",
        o.Delete = "Delete",
        o.EraseEof = "EraseEof",
        o.ExSel = "ExSel",
        o.Insert = "Insert",
        o.Paste = "Paste",
        o.Redo = "Redo",
        o.Undo = "Undo",
        o.Accept = "Accept",
        o.Again = "Again",
        o.Attn = "Attn",
        o.Cancel = "Cancel",
        o.ContextMenu = "ContextMenu",
        o.Escape = "Escape",
        o.Execute = "Execute",
        o.Find = "Find",
        o.Finish = "Finish",
        o.Help = "Help",
        o.Pause = "Pause",
        o.Play = "Play",
        o.Props = "Props",
        o.Select = "Select",
        o.ZoomIn = "ZoomIn",
        o.ZoomOut = "ZoomOut",
        o.BrightnessDown = "BrightnessDown",
        o.BrightnessUp = "BrightnessUp",
        o.Eject = "Eject",
        o.LogOff = "LogOff",
        o.Power = "Power",
        o.PowerOff = "PowerOff",
        o.PrintScreen = "PrintScreen",
        o.Hibernate = "Hibernate",
        o.Standby = "Standby",
        o.WakeUp = "WakeUp",
        o.AllCandidates = "AllCandidates",
        o.Alphanumeric = "Alphanumeric",
        o.CodeInput = "CodeInput",
        o.Compose = "Compose",
        o.Convert = "Convert",
        o.Dead = "Dead",
        o.FinalMode = "FinalMode",
        o.GroupFirst = "GroupFirst",
        o.GroupLast = "GroupLast",
        o.GroupNext = "GroupNext",
        o.GroupPrevious = "GroupPrevious",
        o.ModeChange = "ModeChange",
        o.NextCandidate = "NextCandidate",
        o.NonConvert = "NonConvert",
        o.PreviousCandidate = "PreviousCandidate",
        o.Process = "Process",
        o.SingleCandidate = "SingleCandidate",
        o.HangulMode = "HangulMode",
        o.HanjaMode = "HanjaMode",
        o.JunjaMode = "JunjaMode",
        o.Eisu = "Eisu",
        o.Hankaku = "Hankaku",
        o.Hiragana = "Hiragana",
        o.HiraganaKatakana = "HiraganaKatakana",
        o.KanaMode = "KanaMode",
        o.KanjiMode = "KanjiMode",
        o.Katakana = "Katakana",
        o.Romaji = "Romaji",
        o.Zenkaku = "Zenkaku",
        o.ZenkakuHanaku = "ZenkakuHanaku",
        o.F1 = "F1",
        o.F2 = "F2",
        o.F3 = "F3",
        o.F4 = "F4",
        o.F5 = "F5",
        o.F6 = "F6",
        o.F7 = "F7",
        o.F8 = "F8",
        o.F9 = "F9",
        o.F10 = "F10",
        o.F11 = "F11",
        o.F12 = "F12",
        o.F13 = "F13",
        o.F14 = "F14",
        o.F15 = "F15",
        o.F16 = "F16",
        o.F17 = "F17",
        o.F18 = "F18",
        o.F19 = "F19",
        o.F20 = "F20",
        o.Soft1 = "Soft1",
        o.Soft2 = "Soft2",
        o.Soft3 = "Soft3",
        o.Soft4 = "Soft4",
        o.AppSwitch = "AppSwitch",
        o.Call = "Call",
        o.Camera = "Camera",
        o.CameraFocus = "CameraFocus",
        o.EndCall = "EndCall",
        o.GoBack = "GoBack",
        o.GoHome = "GoHome",
        o.HeadsetHook = "HeadsetHook",
        o.LastNumberRedial = "LastNumberRedial",
        o.Notification = "Notification",
        o.MannerMode = "MannerMode",
        o.VoiceDial = "VoiceDial",
        o.ChannelDown = "ChannelDown",
        o.ChannelUp = "ChannelUp",
        o.MediaFastForward = "MediaFastForward",
        o.MediaPause = "MediaPause",
        o.MediaPlay = "MediaPlay",
        o.MediaPlayPause = "MediaPlayPause",
        o.MediaRecord = "MediaRecord",
        o.MediaRewind = "MediaRewind",
        o.MediaStop = "MediaStop",
        o.MediaTrackNext = "MediaTrackNext",
        o.MediaTrackPrevious = "MediaTrackPrevious",
        o.AudioBalanceLeft = "AudioBalanceLeft",
        o.AudioBalanceRight = "AudioBalanceRight",
        o.AudioBassDown = "AudioBassDown",
        o.AudioBassBoostDown = "AudioBassBoostDown",
        o.AudioBassBoostToggle = "AudioBassBoostToggle",
        o.AudioBassBoostUp = "AudioBassBoostUp",
        o.AudioBassUp = "AudioBassUp",
        o.AudioFaderFront = "AudioFaderFront",
        o.AudioFaderRear = "AudioFaderRear",
        o.AudioSurroundModeNext = "AudioSurroundModeNext",
        o.AudioTrebleDown = "AudioTrebleDown",
        o.AudioTrebleUp = "AudioTrebleUp",
        o.AudioVolumeDown = "AudioVolumeDown",
        o.AudioVolumeMute = "AudioVolumeMute",
        o.AudioVolumeUp = "AudioVolumeUp",
        o.MicrophoneToggle = "MicrophoneToggle",
        o.MicrophoneVolumeDown = "MicrophoneVolumeDown",
        o.MicrophoneVolumeMute = "MicrophoneVolumeMute",
        o.MicrophoneVolumeUp = "MicrophoneVolumeUp",
        o.TV = "TV",
        o.TV3DMode = "TV3DMode",
        o.TVAntennaCable = "TVAntennaCable",
        o.TVAudioDescription = "TVAudioDescription",
        o.TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown",
        o.TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp",
        o.TVContentsMenu = "TVContentsMenu",
        o.TVDataService = "TVDataService",
        o.TVInput = "TVInput",
        o.TVInputComponent1 = "TVInputComponent1",
        o.TVInputComponent2 = "TVInputComponent2",
        o.TVInputComposite1 = "TVInputComposite1",
        o.TVInputComposite2 = "TVInputComposite2",
        o.TVInputHDMI1 = "TVInputHDMI1",
        o.TVInputHDMI2 = "TVInputHDMI2",
        o.TVInputHDMI3 = "TVInputHDMI3",
        o.TVInputHDMI4 = "TVInputHDMI4",
        o.TVInputVGA1 = "TVInputVGA1",
        o.TVMediaContext = "TVMediaContext",
        o.TVNetwork = "TVNetwork",
        o.TVNumberEntry = "TVNumberEntry",
        o.TVPower = "TVPower",
        o.TVRadioService = "TVRadioService",
        o.TVSatellite = "TVSatellite",
        o.TVSatelliteBS = "TVSatelliteBS",
        o.TVSatelliteCS = "TVSatelliteCS",
        o.TVSatelliteToggle = "TVSatelliteToggle",
        o.TVTerrestrialAnalog = "TVTerrestrialAnalog",
        o.TVTerrestrialDigital = "TVTerrestrialDigital",
        o.TVTimer = "TVTimer",
        o.AVRInput = "AVRInput",
        o.AVRPower = "AVRPower",
        o.ColorF0Red = "ColorF0Red",
        o.ColorF1Green = "ColorF1Green",
        o.ColorF2Yellow = "ColorF2Yellow",
        o.ColorF3Blue = "ColorF3Blue",
        o.ColorF4Grey = "ColorF4Grey",
        o.ColorF5Brown = "ColorF5Brown",
        o.ClosedCaptionToggle = "ClosedCaptionToggle",
        o.Dimmer = "Dimmer",
        o.DisplaySwap = "DisplaySwap",
        o.DVR = "DVR",
        o.Exit = "Exit",
        o.FavoriteClear0 = "FavoriteClear0",
        o.FavoriteClear1 = "FavoriteClear1",
        o.FavoriteClear2 = "FavoriteClear2",
        o.FavoriteClear3 = "FavoriteClear3",
        o.FavoriteRecall0 = "FavoriteRecall0",
        o.FavoriteRecall1 = "FavoriteRecall1",
        o.FavoriteRecall2 = "FavoriteRecall2",
        o.FavoriteRecall3 = "FavoriteRecall3",
        o.FavoriteStore0 = "FavoriteStore0",
        o.FavoriteStore1 = "FavoriteStore1",
        o.FavoriteStore2 = "FavoriteStore2",
        o.FavoriteStore3 = "FavoriteStore3",
        o.Guide = "Guide",
        o.GuideNextDay = "GuideNextDay",
        o.GuidePreviousDay = "GuidePreviousDay",
        o.Info = "Info",
        o.InstantReplay = "InstantReplay",
        o.Link = "Link",
        o.ListProgram = "ListProgram",
        o.LiveContent = "LiveContent",
        o.Lock = "Lock",
        o.MediaApps = "MediaApps",
        o.MediaAudioTrack = "MediaAudioTrack",
        o.MediaLast = "MediaLast",
        o.MediaSkipBackward = "MediaSkipBackward",
        o.MediaSkipForward = "MediaSkipForward",
        o.MediaStepBackward = "MediaStepBackward",
        o.MediaStepForward = "MediaStepForward",
        o.MediaTopMenu = "MediaTopMenu",
        o.NavigateIn = "NavigateIn",
        o.NavigateNext = "NavigateNext",
        o.NavigateOut = "NavigateOut",
        o.NavigatePrevious = "NavigatePrevious",
        o.NextFavoriteChannel = "NextFavoriteChannel",
        o.NextUserProfile = "NextUserProfile",
        o.OnDemand = "OnDemand",
        o.Pairing = "Pairing",
        o.PinPDown = "PinPDown",
        o.PinPMove = "PinPMove",
        o.PinPToggle = "PinPToggle",
        o.PinPUp = "PinPUp",
        o.PlaySpeedDown = "PlaySpeedDown",
        o.PlaySpeedReset = "PlaySpeedReset",
        o.PlaySpeedUp = "PlaySpeedUp",
        o.RandomToggle = "RandomToggle",
        o.RcLowBattery = "RcLowBattery",
        o.RecordSpeedNext = "RecordSpeedNext",
        o.RfBypass = "RfBypass",
        o.ScanChannelsToggle = "ScanChannelsToggle",
        o.ScreenModeNext = "ScreenModeNext",
        o.Settings = "Settings",
        o.SplitScreenToggle = "SplitScreenToggle",
        o.STBInput = "STBInput",
        o.STBPower = "STBPower",
        o.Subtitle = "Subtitle",
        o.Teletext = "Teletext",
        o.VideoModeNext = "VideoModeNext",
        o.Wink = "Wink",
        o.ZoomToggle = "ZoomToggle",
        o.SpeechCorrectionList = "SpeechCorrectionList",
        o.SpeechInputToggle = "SpeechInputToggle",
        o.Close = "Close",
        o.New = "New",
        o.Open = "Open",
        o.Print = "Print",
        o.Save = "Save",
        o.SpellCheck = "SpellCheck",
        o.MailForward = "MailForward",
        o.MailReply = "MailReply",
        o.MailSend = "MailSend",
        o.LaunchCalculator = "LaunchCalculator",
        o.LaunchCalendar = "LaunchCalendar",
        o.LaunchContacts = "LaunchContacts",
        o.LaunchMail = "LaunchMail",
        o.LaunchMediaPlayer = "LaunchMediaPlayer",
        o.LaunchMusicPlayer = "LaunchMusicPlayer",
        o.LaunchMyComputer = "LaunchMyComputer",
        o.LaunchPhone = "LaunchPhone",
        o.LaunchScreenSaver = "LaunchScreenSaver",
        o.LaunchSpreadsheet = "LaunchSpreadsheet",
        o.LaunchWebBrowser = "LaunchWebBrowser",
        o.LaunchWebCam = "LaunchWebCam",
        o.LaunchWordProcessor = "LaunchWordProcessor",
        o.LaunchApplication1 = "LaunchApplication1",
        o.LaunchApplication2 = "LaunchApplication2",
        o.LaunchApplication3 = "LaunchApplication3",
        o.LaunchApplication4 = "LaunchApplication4",
        o.LaunchApplication5 = "LaunchApplication5",
        o.LaunchApplication6 = "LaunchApplication6",
        o.LaunchApplication7 = "LaunchApplication7",
        o.LaunchApplication8 = "LaunchApplication8",
        o.LaunchApplication9 = "LaunchApplication9",
        o.LaunchApplication10 = "LaunchApplication10",
        o.LaunchApplication11 = "LaunchApplication11",
        o.LaunchApplication12 = "LaunchApplication12",
        o.LaunchApplication13 = "LaunchApplication13",
        o.LaunchApplication14 = "LaunchApplication14",
        o.LaunchApplication15 = "LaunchApplication15",
        o.LaunchApplication16 = "LaunchApplication16",
        o.BrowserBack = "BrowserBack",
        o.BrowserFavorites = "BrowserFavorites",
        o.BrowserForward = "BrowserForward",
        o.BrowserHome = "BrowserHome",
        o.BrowserRefresh = "BrowserRefresh",
        o.BrowserSearch = "BrowserSearch",
        o.BrowserStop = "BrowserStop",
        o.Decimal = "Decimal",
        o.Key11 = "Key11",
        o.Key12 = "Key12",
        o.Multiply = "Multiply",
        o.Add = "Add",
        o.Divide = "Divide",
        o.Subtract = "Subtract",
        o.Separator = "Separator"
    },
    26563: function(e, t, o) {
        "use strict";
        o.d(t, {
            R: function() {
                return K
            }
        });
        var a, n, r, i, l = o(70079), u = o(61296), c = o(58194), s = o(98044), p = o(81303);
        function d(e, t) {
            let[o,a] = (0,
            l.useState)(e)
              , n = (0,
            p.E)(e);
            return (0,
            s.e)(()=>a(n.current), [n, a, ...t]),
            o
        }
        var f = o(14699)
          , v = o(4911)
          , h = o(78983)
          , S = o(32552)
          , m = o(86499)
          , g = o(10186)
          , b = o(28595)
          , T = o(29787)
          , w = o(37068)
          , y = o(19992)
          , C = o(53315)
          , M = o(98992);
        function x(e, t) {
            return e ? e + "[" + t + "]" : t
        }
        var R = o(52327)
          , L = o(17575)
          , A = ((a = A || {})[a.Open = 0] = "Open",
        a[a.Closed = 1] = "Closed",
        a)
          , F = ((n = F || {})[n.Single = 0] = "Single",
        n[n.Multi = 1] = "Multi",
        n)
          , P = ((r = P || {})[r.Pointer = 0] = "Pointer",
        r[r.Other = 1] = "Other",
        r)
          , k = ((i = k || {})[i.OpenListbox = 0] = "OpenListbox",
        i[i.CloseListbox = 1] = "CloseListbox",
        i[i.SetDisabled = 2] = "SetDisabled",
        i[i.SetOrientation = 3] = "SetOrientation",
        i[i.GoToOption = 4] = "GoToOption",
        i[i.Search = 5] = "Search",
        i[i.ClearSearch = 6] = "ClearSearch",
        i[i.RegisterOption = 7] = "RegisterOption",
        i[i.UnregisterOption = 8] = "UnregisterOption",
        i);
        function V(e, t=e=>e) {
            let o = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null
              , a = (0,
            T.z2)(t(e.options.slice()), e=>e.dataRef.current.domRef.current)
              , n = o ? a.indexOf(o) : null;
            return -1 === n && (n = null),
            {
                options: a,
                activeOptionIndex: n
            }
        }
        let D = {
            1: e=>e.disabled || 1 === e.listboxState ? e : {
                ...e,
                activeOptionIndex: null,
                listboxState: 1
            },
            0(e) {
                if (e.disabled || 0 === e.listboxState)
                    return e;
                let t = e.activeOptionIndex
                  , {value: o, mode: a, compare: n} = e.propsRef.current
                  , r = e.options.findIndex(e=>{
                    let t = e.dataRef.current.value;
                    return (0,
                    h.E)(a, {
                        1: ()=>o.some(e=>n(e, t)),
                        0: ()=>n(o, t)
                    })
                }
                );
                return -1 !== r && (t = r),
                {
                    ...e,
                    listboxState: 0,
                    activeOptionIndex: t
                }
            },
            2: (e,t)=>e.disabled === t.disabled ? e : {
                ...e,
                disabled: t.disabled
            },
            3: (e,t)=>e.orientation === t.orientation ? e : {
                ...e,
                orientation: t.orientation
            },
            4(e, t) {
                var o;
                if (e.disabled || 1 === e.listboxState)
                    return e;
                let a = V(e)
                  , n = (0,
                g.d)(t, {
                    resolveItems: ()=>a.options,
                    resolveActiveIndex: ()=>a.activeOptionIndex,
                    resolveId: e=>e.id,
                    resolveDisabled: e=>e.dataRef.current.disabled
                });
                return {
                    ...e,
                    ...a,
                    searchQuery: "",
                    activeOptionIndex: n,
                    activationTrigger: null != (o = t.trigger) ? o : 1
                }
            },
            5: (e,t)=>{
                if (e.disabled || 1 === e.listboxState)
                    return e;
                let o = "" !== e.searchQuery ? 0 : 1
                  , a = e.searchQuery + t.value.toLowerCase()
                  , n = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + o).concat(e.options.slice(0, e.activeOptionIndex + o)) : e.options).find(e=>{
                    var t;
                    return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(a))
                }
                )
                  , r = n ? e.options.indexOf(n) : -1;
                return -1 === r || r === e.activeOptionIndex ? {
                    ...e,
                    searchQuery: a
                } : {
                    ...e,
                    searchQuery: a,
                    activeOptionIndex: r,
                    activationTrigger: 1
                }
            }
            ,
            6: e=>e.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : {
                ...e,
                searchQuery: ""
            },
            7: (e,t)=>{
                let o = {
                    id: t.id,
                    dataRef: t.dataRef
                }
                  , a = V(e, e=>[...e, o]);
                if (null === e.activeOptionIndex) {
                    let {value: n, mode: r, compare: i} = e.propsRef.current
                      , l = t.dataRef.current.value;
                    (0,
                    h.E)(r, {
                        1: ()=>n.some(e=>i(e, l)),
                        0: ()=>i(n, l)
                    }) && (a.activeOptionIndex = a.options.indexOf(o))
                }
                return {
                    ...e,
                    ...a
                }
            }
            ,
            8: (e,t)=>{
                let o = V(e, e=>{
                    let o = e.findIndex(e=>e.id === t.id);
                    return -1 !== o && e.splice(o, 1),
                    e
                }
                );
                return {
                    ...e,
                    ...o,
                    activationTrigger: 1
                }
            }
        }
          , I = (0,
        l.createContext)(null);
        function B(e) {
            let t = (0,
            l.useContext)(I);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, B),
                t
            }
            return t
        }
        function O(e, t) {
            return (0,
            h.E)(t.type, D, e, t)
        }
        I.displayName = "ListboxContext";
        let E = l.Fragment
          , N = (0,
        v.yV)(function(e, t) {
            let {value: o, defaultValue: a, name: n, onChange: r, by: i=(e,t)=>e === t, disabled: u=!1, horizontal: c=!1, multiple: p=!1, ...d} = e
              , S = c ? "horizontal" : "vertical"
              , m = (0,
            f.T)(t)
              , [g,b] = function(e, t, o) {
                let[a,n] = (0,
                l.useState)(o)
                  , r = void 0 !== e;
                return [r ? e : a, (0,
                L.z)(e=>(r || n(e),
                null == t ? void 0 : t(e)))]
            }(o, r, a)
              , y = (0,
            l.useReducer)(O, {
                listboxState: 1,
                propsRef: {
                    current: {
                        value: g,
                        onChange: b,
                        mode: p ? 1 : 0,
                        compare: (0,
                        L.z)("string" == typeof i ? (e,t)=>(null == e ? void 0 : e[i]) === (null == t ? void 0 : t[i]) : i)
                    }
                },
                labelRef: (0,
                l.createRef)(),
                buttonRef: (0,
                l.createRef)(),
                optionsRef: (0,
                l.createRef)(),
                disabled: u,
                orientation: S,
                options: [],
                searchQuery: "",
                activeOptionIndex: null,
                activationTrigger: 1
            })
              , [{listboxState: R, propsRef: A, optionsRef: F, buttonRef: P},k] = y;
            A.current.value = g,
            A.current.mode = p ? 1 : 0,
            (0,
            s.e)(()=>{
                A.current.onChange = e=>(0,
                h.E)(A.current.mode, {
                    0: ()=>b(e),
                    1() {
                        let t = A.current.value.slice()
                          , {compare: o} = A.current
                          , a = t.findIndex(t=>o(t, e));
                        return -1 === a ? t.push(e) : t.splice(a, 1),
                        b(t)
                    }
                })
            }
            , [b, A]),
            (0,
            s.e)(()=>k({
                type: 2,
                disabled: u
            }), [u]),
            (0,
            s.e)(()=>k({
                type: 3,
                orientation: S
            }), [S]),
            (0,
            C.O)([P, F], (e,t)=>{
                var o;
                k({
                    type: 1
                }),
                (0,
                T.sP)(t, T.tJ.Loose) || (e.preventDefault(),
                null == (o = P.current) || o.focus())
            }
            , 0 === R);
            let V = (0,
            l.useMemo)(()=>({
                open: 0 === R,
                disabled: u,
                value: g
            }), [R, u, g]);
            return l.createElement(I.Provider, {
                value: y
            }, l.createElement(w.up, {
                value: (0,
                h.E)(R, {
                    0: w.ZM.Open,
                    1: w.ZM.Closed
                })
            }, null != n && null != g && (function e(t={}, o=null, a=[]) {
                for (let[n,r] of Object.entries(t))
                    !function t(o, a, n) {
                        if (Array.isArray(n))
                            for (let[e,r] of n.entries())
                                t(o, x(a, e.toString()), r);
                        else
                            n instanceof Date ? o.push([a, n.toISOString()]) : "boolean" == typeof n ? o.push([a, n ? "1" : "0"]) : "string" == typeof n ? o.push([a, n]) : "number" == typeof n ? o.push([a, `${n}`]) : null == n ? o.push([a, ""]) : e(n, a, o)
                    }(a, x(o, n), r);
                return a
            }
            )({
                [n]: g
            }).map(([e,t])=>l.createElement(M._, {
                features: M.A.Hidden,
                ...(0,
                v.oA)({
                    key: e,
                    as: "input",
                    type: "hidden",
                    hidden: !0,
                    readOnly: !0,
                    name: e,
                    value: t
                })
            })), (0,
            v.sY)({
                ourProps: {
                    ref: m
                },
                theirProps: d,
                slot: V,
                defaultTag: E,
                name: "Listbox"
            })))
        })
          , U = (0,
        v.yV)(function(e, t) {
            var o;
            let[a,n] = B("Listbox.Button")
              , r = (0,
            f.T)(a.buttonRef, t)
              , i = `headlessui-listbox-button-${(0,
            c.M)()}`
              , s = (0,
            u.G)()
              , p = (0,
            L.z)(e=>{
                switch (e.key) {
                case m.R.Space:
                case m.R.Enter:
                case m.R.ArrowDown:
                    e.preventDefault(),
                    n({
                        type: 0
                    }),
                    s.nextFrame(()=>{
                        a.propsRef.current.value || n({
                            type: 4,
                            focus: g.T.First
                        })
                    }
                    );
                    break;
                case m.R.ArrowUp:
                    e.preventDefault(),
                    n({
                        type: 0
                    }),
                    s.nextFrame(()=>{
                        a.propsRef.current.value || n({
                            type: 4,
                            focus: g.T.Last
                        })
                    }
                    )
                }
            }
            )
              , h = (0,
            L.z)(e=>{
                e.key === m.R.Space && e.preventDefault()
            }
            )
              , S = (0,
            L.z)(e=>{
                if ((0,
                b.P)(e.currentTarget))
                    return e.preventDefault();
                0 === a.listboxState ? (n({
                    type: 1
                }),
                s.nextFrame(()=>{
                    var e;
                    return null == (e = a.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                )) : (e.preventDefault(),
                n({
                    type: 0
                }))
            }
            )
              , T = d(()=>{
                if (a.labelRef.current)
                    return [a.labelRef.current.id, i].join(" ")
            }
            , [a.labelRef.current, i])
              , w = (0,
            l.useMemo)(()=>({
                open: 0 === a.listboxState,
                disabled: a.disabled,
                value: a.propsRef.current.value
            }), [a])
              , C = {
                ref: r,
                id: i,
                type: (0,
                y.f)(e, a.buttonRef),
                "aria-haspopup": !0,
                "aria-controls": null == (o = a.optionsRef.current) ? void 0 : o.id,
                "aria-expanded": a.disabled ? void 0 : 0 === a.listboxState,
                "aria-labelledby": T,
                disabled: a.disabled,
                onKeyDown: p,
                onKeyUp: h,
                onClick: S
            };
            return (0,
            v.sY)({
                ourProps: C,
                theirProps: e,
                slot: w,
                defaultTag: "button",
                name: "Listbox.Button"
            })
        })
          , H = (0,
        v.yV)(function(e, t) {
            let[o] = B("Listbox.Label")
              , a = `headlessui-listbox-label-${(0,
            c.M)()}`
              , n = (0,
            f.T)(o.labelRef, t)
              , r = (0,
            L.z)(()=>{
                var e;
                return null == (e = o.buttonRef.current) ? void 0 : e.focus({
                    preventScroll: !0
                })
            }
            )
              , i = (0,
            l.useMemo)(()=>({
                open: 0 === o.listboxState,
                disabled: o.disabled
            }), [o]);
            return (0,
            v.sY)({
                ourProps: {
                    ref: n,
                    id: a,
                    onClick: r
                },
                theirProps: e,
                slot: i,
                defaultTag: "label",
                name: "Listbox.Label"
            })
        })
          , G = v.AN.RenderStrategy | v.AN.Static
          , K = Object.assign(N, {
            Button: U,
            Label: H,
            Options: (0,
            v.yV)(function(e, t) {
                var o;
                let[a,n] = B("Listbox.Options")
                  , r = (0,
                f.T)(a.optionsRef, t)
                  , i = `headlessui-listbox-options-${(0,
                c.M)()}`
                  , s = (0,
                u.G)()
                  , p = (0,
                u.G)()
                  , b = (0,
                w.oJ)()
                  , T = null !== b ? b === w.ZM.Open : 0 === a.listboxState;
                (0,
                l.useEffect)(()=>{
                    var e;
                    let t = a.optionsRef.current;
                    t && 0 === a.listboxState && t !== (null == (e = (0,
                    R.r)(t)) ? void 0 : e.activeElement) && t.focus({
                        preventScroll: !0
                    })
                }
                , [a.listboxState, a.optionsRef]);
                let y = (0,
                L.z)(e=>{
                    switch (p.dispose(),
                    e.key) {
                    case m.R.Space:
                        if ("" !== a.searchQuery)
                            return e.preventDefault(),
                            e.stopPropagation(),
                            n({
                                type: 5,
                                value: e.key
                            });
                    case m.R.Enter:
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        null !== a.activeOptionIndex) {
                            let {dataRef: e} = a.options[a.activeOptionIndex];
                            a.propsRef.current.onChange(e.current.value)
                        }
                        0 === a.propsRef.current.mode && (n({
                            type: 1
                        }),
                        (0,
                        S.k)().nextFrame(()=>{
                            var e;
                            return null == (e = a.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }
                        ));
                        break;
                    case (0,
                    h.E)(a.orientation, {
                        vertical: m.R.ArrowDown,
                        horizontal: m.R.ArrowRight
                    }):
                        return e.preventDefault(),
                        e.stopPropagation(),
                        n({
                            type: 4,
                            focus: g.T.Next
                        });
                    case (0,
                    h.E)(a.orientation, {
                        vertical: m.R.ArrowUp,
                        horizontal: m.R.ArrowLeft
                    }):
                        return e.preventDefault(),
                        e.stopPropagation(),
                        n({
                            type: 4,
                            focus: g.T.Previous
                        });
                    case m.R.Home:
                    case m.R.PageUp:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        n({
                            type: 4,
                            focus: g.T.First
                        });
                    case m.R.End:
                    case m.R.PageDown:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        n({
                            type: 4,
                            focus: g.T.Last
                        });
                    case m.R.Escape:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        n({
                            type: 1
                        }),
                        s.nextFrame(()=>{
                            var e;
                            return null == (e = a.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }
                        );
                    case m.R.Tab:
                        e.preventDefault(),
                        e.stopPropagation();
                        break;
                    default:
                        1 === e.key.length && (n({
                            type: 5,
                            value: e.key
                        }),
                        p.setTimeout(()=>n({
                            type: 6
                        }), 350))
                    }
                }
                )
                  , C = d(()=>{
                    var e, t, o;
                    return null != (o = null == (e = a.labelRef.current) ? void 0 : e.id) ? o : null == (t = a.buttonRef.current) ? void 0 : t.id
                }
                , [a.labelRef.current, a.buttonRef.current])
                  , M = (0,
                l.useMemo)(()=>({
                    open: 0 === a.listboxState
                }), [a])
                  , x = {
                    "aria-activedescendant": null === a.activeOptionIndex || null == (o = a.options[a.activeOptionIndex]) ? void 0 : o.id,
                    "aria-multiselectable": 1 === a.propsRef.current.mode || void 0,
                    "aria-labelledby": C,
                    "aria-orientation": a.orientation,
                    id: i,
                    onKeyDown: y,
                    role: "listbox",
                    tabIndex: 0,
                    ref: r
                };
                return (0,
                v.sY)({
                    ourProps: x,
                    theirProps: e,
                    slot: M,
                    defaultTag: "ul",
                    features: G,
                    visible: T,
                    name: "Listbox.Options"
                })
            }),
            Option: (0,
            v.yV)(function(e, t) {
                let {disabled: o=!1, value: a, ...n} = e
                  , [r,i] = B("Listbox.Option")
                  , u = `headlessui-listbox-option-${(0,
                c.M)()}`
                  , p = null !== r.activeOptionIndex && r.options[r.activeOptionIndex].id === u
                  , {value: d, compare: m} = r.propsRef.current
                  , b = (0,
                h.E)(r.propsRef.current.mode, {
                    1: ()=>d.some(e=>m(e, a)),
                    0: ()=>m(d, a)
                })
                  , T = (0,
                l.useRef)(null)
                  , w = (0,
                f.T)(t, T);
                (0,
                s.e)(()=>{
                    if (0 !== r.listboxState || !p || 0 === r.activationTrigger)
                        return;
                    let e = (0,
                    S.k)();
                    return e.requestAnimationFrame(()=>{
                        var e, t;
                        null == (t = null == (e = T.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                            block: "nearest"
                        })
                    }
                    ),
                    e.dispose
                }
                , [T, p, r.listboxState, r.activationTrigger, r.activeOptionIndex]);
                let y = (0,
                l.useRef)({
                    disabled: o,
                    value: a,
                    domRef: T
                });
                (0,
                s.e)(()=>{
                    y.current.disabled = o
                }
                , [y, o]),
                (0,
                s.e)(()=>{
                    y.current.value = a
                }
                , [y, a]),
                (0,
                s.e)(()=>{
                    var e, t;
                    y.current.textValue = null == (t = null == (e = T.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                }
                , [y, T]);
                let C = (0,
                L.z)(()=>r.propsRef.current.onChange(a));
                (0,
                s.e)(()=>(i({
                    type: 7,
                    id: u,
                    dataRef: y
                }),
                ()=>i({
                    type: 8,
                    id: u
                })), [y, u]);
                let M = (0,
                L.z)(e=>{
                    if (o)
                        return e.preventDefault();
                    C(),
                    0 === r.propsRef.current.mode && (i({
                        type: 1
                    }),
                    (0,
                    S.k)().nextFrame(()=>{
                        var e;
                        return null == (e = r.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ))
                }
                )
                  , x = (0,
                L.z)(()=>{
                    if (o)
                        return i({
                            type: 4,
                            focus: g.T.Nothing
                        });
                    i({
                        type: 4,
                        focus: g.T.Specific,
                        id: u
                    })
                }
                )
                  , R = (0,
                L.z)(()=>{
                    o || p || i({
                        type: 4,
                        focus: g.T.Specific,
                        id: u,
                        trigger: 0
                    })
                }
                )
                  , A = (0,
                L.z)(()=>{
                    o || !p || i({
                        type: 4,
                        focus: g.T.Nothing
                    })
                }
                )
                  , F = (0,
                l.useMemo)(()=>({
                    active: p,
                    selected: b,
                    disabled: o
                }), [p, b, o]);
                return (0,
                v.sY)({
                    ourProps: {
                        id: u,
                        ref: w,
                        role: "option",
                        tabIndex: !0 === o ? void 0 : -1,
                        "aria-disabled": !0 === o || void 0,
                        "aria-selected": b,
                        disabled: void 0,
                        onClick: M,
                        onFocus: x,
                        onPointerMove: R,
                        onMouseMove: R,
                        onPointerLeave: A,
                        onMouseLeave: A
                    },
                    theirProps: n,
                    slot: F,
                    defaultTag: "li",
                    name: "Listbox.Option"
                })
            })
        })
    },
    57526: function(e, t, o) {
        "use strict";
        var a = o(70079);
        let n = a.forwardRef(function({title: e, titleId: t, ...o}, n) {
            return a.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": t
            }, o), e ? a.createElement("title", {
                id: t
            }, e) : null, a.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
            }))
        });
        t.Z = n
    }
}]);