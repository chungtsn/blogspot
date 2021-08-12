(String.prototype.replaceAll = function (t, e) {
    return this.valueOf().split(t).join(e);
}),
    (String.prototype.format = function () {
        for (var t = this, e = 0; e < arguments.length; e++) {
            var i = new RegExp("\\{" + e + "\\}", "gi");
            t = t.replace(i, arguments[e]);
        }
        return t.valueOf();
    }),
    "function" != typeof String.prototype.startsWith &&
        (String.prototype.startsWith = function (t) {
            return 0 === this.lastIndexOf(t, 0);
        }),
    "function" != typeof String.prototype.endsWith &&
        (String.prototype.endsWith = function (t) {
            return -1 !== this.indexOf(t, this.length - t.length);
        }),
    (Array.prototype.removeSpace = function () {
        var t = [];
        return (
            this.forEach(function (e) {
                (e = e.trim()).length > 0 && t.push(e);
            }),
            t
        );
    }),
    (Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    }),
    (Array.prototype.unique = function () {
        return this.filter(function (t, e, i) {
            return i.indexOf(t) == e;
        });
    }),
    (Array.prototype.except = function (t) {
        var e = this;
        return (
            Array.isArray(t) &&
                t.forEach(function (t) {
                    var i = e.indexOf(t);
                    -1 != i && e.splice(i, 1);
                }),
            e
        );
    }),
    (Array.prototype.only = function (t) {
        var e = [];
        return (
            Array.isArray(t) &&
                this.forEach(function (i) {
                    -1 != t.indexOf(i) && e.push(i);
                }),
            e
        );
    }),
    (Array.prototype.insert = function (t, e) {
        this.splice(t, 0, e);
    });
var LadiPageScriptV2 = LadiPageScriptV2 || function () {};
(LadiPageScriptV2.prototype.init = function () {
    (this.const = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        DOMAIN_GOOGLE_DOCS: "docs.google.com",
        POWERED_BY_IMAGE: "",
        STATIC_W_DOMAIN: "w.ladicdn.com",
        STATIC_S_DOMAIN: "s.ladicdn.com",
        APP_RUNTIME_PREFIX: "_runtime",
        DATA_ACTION_TYPE: {
            link: "link",
            section: "section",
            email: "email",
            phone: "phone",
            popup: "popup",
            hidden_show: "hidden_show",
            collapse: "collapse",
            change_index: "change_index",
            lightbox: "lightbox",
            popup_cart: "popup_cart",
            third_party_cart: "third_party_cart",
            popup_checkout: "popup_checkout",
            third_party_checkout: "third_party_checkout",
        },
        DATA_ACTION_LIGHTBOX_TYPE: { image: "image", video: "video", iframe: "iframe" },
        COUNTDOWN_TYPE: { countdown: "countdown", daily: "daily", endtime: "endtime" },
        COUNTDOWN_ITEM_TYPE: { day: "day", hour: "hour", minute: "minute", seconds: "seconds" },
        VIDEO_TYPE: { youtube: "youtube", direct: "direct" },
        BACKGROUND_STYLE: { solid: "solid", gradient: "gradient", image: "image", video: "video" },
        PUBLISH_PLATFORM: { ladipage: "LADIPAGE", ladipagedns: "LADIPAGEDNS", wordpress: "WORDPRESS", haravan: "HARAVAN", sapo: "SAPO", shopify: "SHOPIFY", itop: "ITOPWEBSITE", ftp: "FTP", other: "OTHER" },
        TRACKING_NAME: "ladicid",
        PUBLISH_STYLE: { desktop_min_width: 768, mobile_small_min_width: 320 },
        ANIMATED_LIST: ["rotate-1", "rotate-2", "rotate-3", "type", "scale", "loading-bar", "slide", "clip", "zoom", "push"],
        POSITION_TYPE: {
            default: "default",
            top: "top",
            bottom: "bottom",
            top_left: "top_left",
            top_center: "top_center",
            top_right: "top_right",
            center_left: "center_left",
            center_right: "center_right",
            bottom_left: "bottom_left",
            bottom_center: "bottom_center",
            bottom_right: "bottom_right",
        },
        COLLECTION_TYPE: { carousel: "carousel", readmore: "readmore" },
        INPUT_TYPE: {
            tel: "tel",
            text: "text",
            select_multiple: "select_multiple",
            number: "number",
            email: "email",
            textarea: "textarea",
            select: "select",
            radio: "radio",
            checkbox: "checkbox",
            file: "file",
            product_variant: "product_variant",
        },
        CONTENT_TYPE: { form_data: "FORM_DATA", form_urlencoded: "X_WWW_FORM_URLENCODED", json: "JSON" },
        SORT_BY_TYPE: { asc: "asc", desc: "desc" },
        PRODUCT_VARIANT_TYPE: { combined: "combined", combobox: "combobox" },
        PRODUCT_VARIANT_TITLE: { left: "left", top: "top" },
        FORM_THANKYOU_TYPE: { default: "default", url: "url", popup: "popup" },
        GAME_RESULT_TYPE: { default: "default", popup: "popup" },
        PERCENT_TRACKING_SCROLL: [0, 25, 50, 75, 100],
        TIME_ONPAGE_TRACKING: [10, 30, 60, 120, 180, 300, 600],
        FORM_CONFIG_TYPE: {
            email: "EMAIL",
            mail_chimp: "MAIL_CHIMP",
            infusion_soft: "INFUSION_SOFT",
            infusion_soft_ladi: "INFUSION_SOFT_LADI",
            active_campaign: "ACTIVE_CAMPAIGN",
            sendgrid: "SENDGRID",
            hubspot: "HUBSPOT",
            smtp: "SMTP",
            esms: "ESMS",
            get_response: "GET_RESPONSE",
            convertkit: "CONVERTKIT",
            ladiflow: "LADIFLOW",
            telegram: "TELEGRAM",
            slack: "SLACK",
            zalo_zns: "ZALO_ZNS",
            mautic: "MAUTIC",
            google_sheet: "GOOGLE_SHEET",
            google_form: "GOOGLE_FORM",
            custom_api: "CUSTOM_API",
            ladisales: "LADISALES",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            nhanh_vn: "NHANH_VN",
            google_recaptcha: "GOOGLE_RECAPTCHA",
            kiotviet: "KIOTVIET",
            wordpress: "WORDPRESS",
            metu: "METU",
            ladichat: "LADICHAT",
            shopping: "SHOPPING",
            conversion_api: "CONVERSION_API",
        },
        FORM_UPLOAD_FILE_LENGTH: 5,
        FORM_UPLOAD_FILE_SIZE: 25,
        CART_LAYOUT: { editable: "editable", viewonly: "viewonly" },
        WIDTH_SECTION_RESIZE: {},
        RESIZE_ADD_PIXEL: 300,
        RESIZE_ADD_PIXEL_THUMB: 50,
        RESIZE_RANGE: 50,
        TOOLTIP_TYPE: { default: "default", info: "info", success: "success", error: "error", notice: "notice" },
        TOOLTIP_POSITION: {
            top_middle: "top_middle",
            top_left: "top_left",
            top_right: "top_right",
            bottom_middle: "bottom_middle",
            bottom_left: "bottom_left",
            bottom_right: "bottom_right",
            left_middle: "left_middle",
            left_top: "left_top",
            left_bottom: "left_bottom",
            right_middle: "right_middle",
            right_top: "right_top",
            right_bottom: "right_bottom",
        },
        TOOLTIP_SIZE: { small: "small", medium: "medium", big: "big" },
    }),
        (this.runtime = {
            backdrop_popup_id: "backdrop-popup",
            lightbox_screen_id: "lightbox-screen",
            builder_section_popup_id: "SECTION_POPUP",
            ladipage_powered_by_classname: "ladipage_powered_by",
            current_element_mouse_down_carousel: null,
            current_element_mouse_down_carousel_position_x: 0,
            current_element_mouse_down_carousel_diff: 40,
            current_element_mouse_down_gallery_control: null,
            current_element_mouse_down_gallery_control_time: 0,
            current_element_mouse_down_gallery_control_time_click: 300,
            current_element_mouse_down_gallery_control_position_x: 0,
            current_element_mouse_down_gallery_view: null,
            current_element_mouse_down_gallery_view_position_x: 0,
            current_element_mouse_down_gallery_view_diff: 40,
            scroll_show_popup: {},
            scroll_depth: [],
            scroll_to_section: {},
            isMobileOnly: !1,
            interval_countdown: null,
            interval_gallery: null,
            timeout_gallery: {},
            interval_carousel: null,
            timenext_carousel: {},
            isClient: !1,
            isDesktop: !0,
            isIE: !1,
            isYouTubeIframeAPIReady: !1,
            isLoadYouTubeIframeAPI: !1,
            device: this.const.DESKTOP,
            ladipage_id: null,
            list_collapse: {},
            list_scroll_func: {},
            list_show_popup_func: {},
            list_youtube_ready_exec: [],
            list_lightbox_id: {},
            list_set_value_name_country: ["ward", "district", "state", "country"],
            tmp: {},
            tabindexForm: 0,
            eventData: {},
            timenow: 0,
            widthScrollBar: 0,
            replaceStr: {},
            replacePrefixStart: "{{",
            replacePrefixEnd: "}}",
        }),
        (this.const.WIDTH_SECTION_RESIZE[this.const.DESKTOP] = 1440),
        (this.const.WIDTH_SECTION_RESIZE[this.const.MOBILE] = 768);
}),
    (LadiPageScriptV2.prototype.run = function (t) {
        var e = this;
        (this.runtime.isIE = !!document.documentMode),
            (this.runtime.isIE = this.runtime.isIE ? this.runtime.isIE : !this.runtime.isIE && !!window.StyleMedia),
            (this.runtime.isClient = t),
            (this.runtime.timenow = window.ladi("_timenow").get_cookie()),
            this.isEmpty(this.runtime.timenow)
                ? ((this.runtime.timenow = Date.now()), window.ladi("_timenow").set_cookie(this.runtime.timenow, 0, window.location.pathname, null, !0))
                : (this.runtime.timenow = parseFloatLadiPage(this.runtime.timenow) || 0);
        try {
            this.runtime.widthScrollBar = window.innerWidth - document.documentElement.clientWidth;
        } catch (t) {}
        if (t) {
            if (this.isString(this.runtime.eventData))
                try {
                    var i = decodeURIComponent(this.runtime.eventData);
                    this.runtime.eventData = JSON.parse(i);
                } catch (t) {
                    String.prototype.decode = function () {
                        return this.valueOf()
                            .replaceAll(/&amp;/g, "&")
                            .replaceAll(/&gt;/g, ">")
                            .replaceAll(/&lt;/g, "<")
                            .replaceAll(/&quot;/g, '"');
                    };
                    var a = this.runtime.eventData.decode();
                    (a = a.replaceAll("\r\n", "").replaceAll("\n", "")), (this.runtime.eventData = JSON.parse(a));
                }
        } else
            (this.runtime.isMobileOnly = LadiPage.data.is_mobile_only),
                (this.runtime.eventData = LadiPage.generateEventDataAll(t)),
                (this.runtime.ladipage_id = LadiPage.publish.id),
                (this.runtime.publish_platform = LadiPage.publish.type),
                (this.runtime.bodyFontSize = 12),
                (this.runtime.store_id = LadiPage.getRootScope().getStoreId()),
                (this.runtime.time_zone = LadiPage.getRootScope().getStoreTimezone(!0)),
                (this.runtime.currency = LadiPage.getRootScope().getStoreCurrency());
        this.runtime.isMobileOnly &&
            Object.keys(e.runtime.eventData).forEach(function (t) {
                Object.keys(e.runtime.eventData[t]).forEach(function (i) {
                    if (i.toLowerCase().startsWith(e.const.MOBILE)) {
                        var a = e.const.DESKTOP + i.substring(e.const.MOBILE.length);
                        e.runtime.eventData[t][a] = e.runtime.eventData[t][i];
                    }
                });
            });
        this.isNull(window.ladi_is_desktop)
            ? (this.runtime.isDesktop = t ? !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) : LadiPage.isDesktop())
            : (this.runtime.isDesktop = t ? window.ladi_is_desktop : LadiPage.isDesktop()),
            (this.runtime.device = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE),
            (this.runtime.tmp.isFirstScroll = !0),
            (this.runtime.tmp.capture_form_data_last = {}),
            (this.runtime.tmp.runAfterLocation = []),
            (this.runtime.tmp.product_info = {}),
            (this.runtime.tmp.timeout_product_info = {}),
            (this.runtime.tmp.product_tag_info = {}),
            (this.runtime.tmp.timeout_product_tag_info = {}),
            (this.runtime.tmp.dataset_check_load = !1),
            (this.runtime.tmp.dataset_data = {}),
            (this.runtime.tmp.timeout_dataset_data = {}),
            (this.runtime.tmp.cart = []),
            (this.runtime.tmp.add_to_cart_discount = 0),
            (this.runtime.tmp.add_to_cart_fee_shipping = 0),
            (this.runtime.tmp.is_click_add_to_cart = !1),
            (this.runtime.tmp.is_click_check_price_discount = !1),
            (this.runtime.tmp.current_use_coupon = null),
            this.changeTotalPriceCart();
        var n = window.ladi("LADI_DATA").get_cookie();
        try {
            (n = JSON.parse(Base64.decode(n || Base64.encode("{}")))),
                Object.keys(n).forEach(function (t) {
                    e.setDataReplaceStr(t, n[t]);
                });
        } catch (t) {}
        var r = function (t) {
                var i = e.copy(t);
                return (
                    e.isObject(i) &&
                        e.runtime.list_set_value_name_country.forEach(function (t) {
                            if (!e.isEmpty(i[t])) {
                                var a = i[t].split(":");
                                a.length > 1 && a.shift(), (i[t] = a.join(":"));
                            }
                        }),
                    i
                );
            },
            o = e.getURLSearchParams(window.location.search, null, !0),
            l = r(o),
            s = Object.keys(l),
            c = "";
        s.forEach(function (t) {
            if (t != e.const.TRACKING_NAME) {
                if ((e.setDataReplaceStr(t, l[t]), "products" == t && e.isString(l[t]))) {
                    var i = l[t].split("|");
                    2 == i.length && -1 == s.indexOf("product_id") && e.setDataReplaceStr("product_value", i[0]), 2 == i.length && -1 == s.indexOf("product_name") && e.setDataReplaceStr("product_name", i[1]);
                }
                (e.isArray(o[t]) ? o[t] : [o[t]]).forEach(function (i) {
                    e.isEmpty(c) ? (c += "?") : (c += "&"), (c += t + "=" + encodeURIComponent(i));
                });
            }
        }),
            window.ladi(this.const.TRACKING_NAME).delete_cookie(),
            this.historyReplaceState(window.location.pathname + c + window.location.hash);
        var d,
            u = this.runtime.isDesktop,
            p = Object.keys(this.runtime.eventData),
            m = window.ladi("LADI_CLIENT_ID").get_cookie(),
            g = parseFloatLadiPage(window.ladi("LADI_FORM_SUBMIT").get_cookie()) || 0,
            y = parseFloatLadiPage(window.ladi("LADI_PAGE_VIEW").get_cookie()) || 0,
            _ = window.ladi("LADI_CAMP_ID").get_cookie(),
            f = window.ladi("LADI_CAMP_NAME").get_cookie(),
            h = window.ladi("LADI_CAMP_TYPE").get_cookie(),
            v = window.ladi("LADI_CAMP_TARGET_URL").get_cookie(),
            E = window.ladi("LADI_CAMP_ORIGIN_URL").get_cookie(),
            L = parseFloatLadiPage(window.ladi("LADI_CAMP_PAGE_VIEW").get_cookie()) || 0,
            P = parseFloatLadiPage(window.ladi("LADI_CAMP_FORM_SUBMIT").get_cookie()) || 0,
            A = parseFloatLadiPage(window.ladi("LADI_PAGE_VIEW_DAILY").get_cookie()) || 0,
            w = parseFloatLadiPage(window.ladi("LADI_FORM_SUBMIT_DAILY").get_cookie()) || 0,
            S = parseFloatLadiPage(window.ladi("LADI_CAMP_PAGE_VIEW_DAILY").get_cookie()) || 0,
            b = parseFloatLadiPage(window.ladi("LADI_CAMP_FORM_SUBMIT_DAILY").get_cookie()) || 0,
            T = window.ladi("LADI_CAMP_CONFIG").get_cookie(),
            C = window.ladi("LADI_FUNNEL_NEXT_URL").get_cookie(),
            I = function (t, i, a) {
                if ("FormSubmit" == t && e.isEmpty(m)) e.isFunction(a) && a();
                else {
                    var n = e.runtime.publish_platform,
                        r = { event: t, pixel_id: e.runtime.store_id, time_zone: e.runtime.time_zone, domain: window.location.host, url: window.location.href, ladipage_id: e.runtime.ladipage_id, publish_platform: n, data: [] };
                    Object.keys(i).forEach(function (t) {
                        r[t] = i[t];
                    }),
                        "FormSubmit" == t &&
                            (e.isEmpty(_) ? g++ : (v == E && g++, P++), window.ladi("LADI_FORM_SUBMIT").set_cookie(g, 3650, window.location.pathname), window.ladi("LADI_CAMP_FORM_SUBMIT").set_cookie(P, 3650, window.location.pathname)),
                        e.sendRequest(
                            "POST",
                            e.const.API_ANALYTICS_EVENT,
                            JSON.stringify(r),
                            !0,
                            {
                                "Content-Type": "application/json",
                                LADI_CLIENT_ID: m,
                                LADI_FORM_SUBMIT: g,
                                LADI_PAGE_VIEW: y,
                                LADI_CAMP_ID: _,
                                LADI_CAMP_NAME: f,
                                LADI_CAMP_TYPE: h,
                                LADI_CAMP_TARGET_URL: v,
                                LADI_CAMP_ORIGIN_URL: E,
                                LADI_CAMP_PAGE_VIEW: L,
                                LADI_CAMP_FORM_SUBMIT: P,
                                LADI_PAGE_VIEW_DAILY: A,
                                LADI_FORM_SUBMIT_DAILY: w,
                                LADI_CAMP_PAGE_VIEW_DAILY: S,
                                LADI_CAMP_FORM_SUBMIT_DAILY: b,
                            },
                            function (t, i, n) {
                                n.readyState == XMLHttpRequest.DONE && e.isFunction(a) && a(i, t);
                            }
                        );
                }
            },
            O = function (t, i, a, n) {
                if (((t = t || document.getElementById(i)), !e.isEmpty(t))) {
                    var r = n["option.data_action"],
                        o = n["option.is_submit_form"],
                        l = n["option.data_submit_form_id"];
                    if (!n["option.action_funnel"] || e.isEmpty(C))
                        if (!o || e.isEmpty(l))
                            if (e.isEmpty(r))
                                t.addEventListener("click", function (a) {
                                    "false" != t.getAttribute("data-click") && e.runEventTracking(i, !1);
                                });
                            else {
                                r.type == e.const.DATA_ACTION_TYPE.link &&
                                    t.addEventListener("click", function (a) {
                                        if ("false" != t.getAttribute("data-click")) {
                                            if ("true" == t.getAttribute("data-action") && !e.isEmpty(r.action)) {
                                                var n = r.action;
                                                (n = e.getLinkUTMRedirect(n, window.location.search)), (n = e.convertDataReplaceStr(n, !0)), window.ladi(n).open_url(r.target);
                                            }
                                            e.runEventTracking(i, !1);
                                        }
                                    }),
                                    r.type == e.const.DATA_ACTION_TYPE.email &&
                                        t.addEventListener("click", function (a) {
                                            "false" != t.getAttribute("data-click") && ("true" != t.getAttribute("data-action") || e.isEmpty(r.action) || window.ladi("mailto:" + r.action).open_url(), e.runEventTracking(i, !1));
                                        }),
                                    r.type == e.const.DATA_ACTION_TYPE.phone &&
                                        t.addEventListener("click", function (a) {
                                            "false" != t.getAttribute("data-click") && ("true" != t.getAttribute("data-action") || e.isEmpty(r.action) || window.ladi("tel:" + r.action).open_url(), e.runEventTracking(i, !1));
                                        }),
                                    r.type == e.const.DATA_ACTION_TYPE.collapse &&
                                        t.addEventListener("click", function (a) {
                                            if ("false" != t.getAttribute("data-click")) {
                                                var n = document.getElementById(r.action);
                                                e.isEmpty(n) || window.ladi(r.action).collapse(), e.runEventTracking(i, !1);
                                            }
                                        }),
                                    r.type == e.const.DATA_ACTION_TYPE.section &&
                                        t.addEventListener("click", function (a) {
                                            if ("false" != t.getAttribute("data-click")) {
                                                var n = document.getElementById(r.action);
                                                if (!e.isEmpty(n)) {
                                                    var o = e.findAncestor(t, "ladi-popup");
                                                    if (!e.isEmpty(o)) {
                                                        var l = e.findAncestor(o, "ladi-element");
                                                        l.hasAttribute("data-popup-backdrop") && window.ladi(l.id).hide();
                                                    }
                                                    window.ladi(r.action).scroll(), e.runEventTracking(i, !1);
                                                }
                                            }
                                        }),
                                    r.type == e.const.DATA_ACTION_TYPE.popup &&
                                        t.addEventListener("click", function (a) {
                                            if ("false" != t.getAttribute("data-click")) {
                                                var n = document.getElementById(r.action);
                                                e.isEmpty(n) || window.ladi(r.action).show(), e.runEventTracking(i, !1);
                                            }
                                        }),
                                    r.type == e.const.DATA_ACTION_TYPE.hidden_show &&
                                        t.addEventListener("click", function (a) {
                                            "false" != t.getAttribute("data-click") &&
                                                (e.isArray(r.hidden_ids) &&
                                                    r.hidden_ids.forEach(function (t) {
                                                        window.ladi(t).hide();
                                                    }),
                                                e.isArray(r.show_ids) &&
                                                    r.show_ids.forEach(function (t) {
                                                        window.ladi(t).show();
                                                    }),
                                                e.runEventTracking(i, !1));
                                        }),
                                    r.type == e.const.DATA_ACTION_TYPE.change_index &&
                                        t.addEventListener("click", function (i) {
                                            if ("false" != t.getAttribute("data-click")) {
                                                var a = window.ladi(r.action);
                                                e.isEmpty(r.change_index_number) ? e.isFunction(a[r.change_index_type]) && a[r.change_index_type]() : a.index(r.change_index_number);
                                            }
                                        });
                                var s = null;
                                if (
                                    (r.type == e.const.DATA_ACTION_TYPE.lightbox
                                        ? (s = r.lightbox_type)
                                        : "lightbox_image" == r.type
                                        ? (s = e.const.DATA_ACTION_LIGHTBOX_TYPE.image)
                                        : "lightbox_video" == r.type
                                        ? (s = e.const.DATA_ACTION_LIGHTBOX_TYPE.video)
                                        : "lightbox_iframe" == r.type && (s = e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe),
                                    s == e.const.DATA_ACTION_LIGHTBOX_TYPE.image &&
                                        t.addEventListener("click", function (a) {
                                            "false" != t.getAttribute("data-click") && (lightbox_image(r.image_url), e.runEventTracking(i, !1));
                                        }),
                                    s == e.const.DATA_ACTION_LIGHTBOX_TYPE.video)
                                ) {
                                    var c = document.querySelectorAll("#" + i + ".preload").length > 0;
                                    c && lightbox_video(r.video_url, r.video_type, c),
                                        t.addEventListener("click", function (a) {
                                            "false" != t.getAttribute("data-click") && (lightbox_video(r.video_url, r.video_type, !1), e.runEventTracking(i, !1));
                                        });
                                }
                                s == e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe &&
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") && (lightbox_iframe(r.iframe_url), e.runEventTracking(i, !1));
                                    }),
                                    r.type == e.const.DATA_ACTION_TYPE.popup_cart &&
                                        t.addEventListener("click", function (a) {
                                            if ("false" != t.getAttribute("data-click")) {
                                                var n = document.getElementById("POPUP_CART");
                                                e.isEmpty(n) || window.ladi(n.id).show(), e.runEventTracking(i, !1);
                                            }
                                        }),
                                    r.type == e.const.DATA_ACTION_TYPE.popup_checkout &&
                                        t.addEventListener("click", function (a) {
                                            if ("false" != t.getAttribute("data-click")) {
                                                var n = document.getElementById("POPUP_CHECKOUT");
                                                e.isEmpty(n) || window.ladi(n.id).show(), e.runEventTracking(i, !1);
                                            }
                                        }),
                                    r.type,
                                    e.const.DATA_ACTION_TYPE.third_party_cart,
                                    r.type,
                                    e.const.DATA_ACTION_TYPE.third_party_checkout;
                            }
                        else
                            t.addEventListener("click", function (e) {
                                "false" != t.getAttribute("data-click") && window.ladi(l).submit();
                            });
                    else
                        t.addEventListener("click", function (a) {
                            if ("false" != t.getAttribute("data-click")) {
                                a.preventDefault();
                                var n = C;
                                (n = e.getLinkUTMRedirect(n, window.location.search)), (n = e.convertDataReplaceStr(n, !0)), window.ladi(n).open_url(), e.runEventTracking(i, !1);
                            }
                        });
                }
            },
            N = function (t, i, a, n) {
                (t = t || document.getElementById(i)),
                    e.isEmpty(t) ||
                        e.isEmpty(n) ||
                        (n.type == e.const.DATA_ACTION_TYPE.hidden_show &&
                            (t.addEventListener("mouseenter", function (t) {
                                e.isArray(n.hidden_ids) &&
                                    n.hidden_ids.forEach(function (t) {
                                        window.ladi(t).hide();
                                    }),
                                    e.isArray(n.show_ids) &&
                                        n.show_ids.forEach(function (t) {
                                            window.ladi(t).show();
                                        });
                            }),
                            t.addEventListener("mouseleave", function (t) {
                                e.isArray(n.hidden_ids) &&
                                    n.hidden_ids.forEach(function (t) {
                                        window.ladi(t).show();
                                    }),
                                    e.isArray(n.show_ids) &&
                                        n.show_ids.forEach(function (t) {
                                            window.ladi(t).hide();
                                        });
                            })));
            },
            k = function (t, i, a, n) {
                if (e.isEmpty(e.runtime.timeout_gallery[t]) && e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) && e.isEmpty(e.runtime.current_element_mouse_down_gallery_control)) {
                    var r = document.getElementById(t);
                    if (!(e.isEmpty(r) || (e.runtime.tmp.gallery_playing_video && i))) {
                        var o = r.getElementsByClassName("ladi-gallery-view-item"),
                            l = r.getElementsByClassName("ladi-gallery-control-item");
                        if (0 != o.length && 0 != o.length) {
                            var s = r.getAttribute("data-is-next") || "true";
                            s = "true" == s.toLowerCase();
                            var c = parseFloatLadiPage(r.getAttribute("data-current")) || 0,
                                d = parseFloatLadiPage(r.getAttribute("data-max-item")) || 0;
                            i ? (s ? (c >= d - 1 ? ((c = d - 2), (s = !1)) : c++) : c <= 0 ? ((c = 1), (s = !0)) : c--) : s ? c++ : c--,
                                c < 0 && (c = 0),
                                c >= d - 1 && (c = d - 1),
                                e.isEmpty(a) && (a = s ? "next" : "prev"),
                                e.isEmpty(n) && (n = s ? "left" : "right"),
                                e.runtime.tmp.gallery_playing_video && !o[c].classList.contains("selected") && e.pauseAllVideo(),
                                o[c].classList.add(a),
                                r.querySelectorAll(".ladi-gallery-view-item.selected")[0].classList.add(n);
                            var u = 1e3 * (parseFloatLadiPage(getComputedStyle(o[c]).transitionDuration) || 0);
                            e.runtime.timeout_gallery[t] = e.runTimeout(function () {
                                o[c].classList.add(n),
                                    (e.runtime.timeout_gallery[t] = e.runTimeout(function () {
                                        for (var i = 0; i < o.length; i++) i == c ? o[i].classList.add("selected") : o[i].classList.remove("selected"), o[i].style.removeProperty("left"), o[i].classList.remove(a), o[i].classList.remove(n);
                                        delete e.runtime.timeout_gallery[t];
                                    }, u - 5));
                            }, 5);
                            for (var p = 0; p < l.length; p++) (parseFloatLadiPage(l[p].getAttribute("data-index")) || 0) == c ? l[p].classList.add("selected") : l[p].classList.remove("selected");
                            var m = e.getElementBoundingClientRect(r),
                                g = e.getElementBoundingClientRect(r.getElementsByClassName("ladi-gallery-control-item")[c]);
                            if (r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                var y = parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).width) || 0,
                                    _ = parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-item")[c]).width) || 0,
                                    f = g.x - m.x - (y - _) / 2;
                                f = -(f -= parseFloatLadiPage(r.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 ? 0 : -f;
                                var h = parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                f < (h = (h = -(h -= parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : h) && (f = h),
                                    r.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", f + "px");
                            } else {
                                var v = parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).height) || 0,
                                    E = parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-item")[c]).height) || 0,
                                    L = g.y - m.y - (v - E) / 2;
                                L = -(L -= parseFloatLadiPage(r.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 ? 0 : -L;
                                var P = parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                L < (P = (P = -(P -= parseFloatLadiPage(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : P) && (L = P),
                                    r.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", L + "px");
                            }
                            r.setAttribute("data-is-next", s),
                                r.setAttribute("data-current", c),
                                (r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-left") || r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-right")) && e.reloadLazyload();
                        }
                    }
                }
            },
            x = function (t, i, a) {
                var n = i.getAttribute("data-video-type"),
                    r = i.getAttribute("data-video-url"),
                    o = t + "_" + i.getAttribute("data-index") + "_player",
                    l = document.getElementById(o);
                a || (e.pauseAllVideo(), (e.runtime.tmp.gallery_playing_video = !0)),
                    e.isEmpty(l)
                        ? (n == e.const.VIDEO_TYPE.youtube &&
                              ((l = document.createElement("iframe")),
                              i.parentElement.insertBefore(l, i.nextSibling),
                              (l.outerHTML =
                                  '<iframe id="' +
                                  o +
                                  '" class="iframe-video-preload" data-video-type="' +
                                  n +
                                  '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
                              e.runEventPlayVideo(o, n, r, !1, !1, !0, a)),
                          n == e.const.VIDEO_TYPE.direct &&
                              ((l = document.createElement("video")),
                              i.parentElement.insertBefore(l, i.nextSibling),
                              (l.outerHTML = '<video id="' + o + '" class="iframe-video-preload" data-video-type="' + n + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>'),
                              e.runEventPlayVideo(o, n, r, !1, !0, !0, a)))
                        : e.runEventReplayVideo(o, n, !0);
            },
            D = function (t, i, a) {
                t.stopPropagation();
                var n = e.runtime.eventData[i],
                    r = n[e.runtime.device + ".option.gallery_control.autoplay"],
                    o = n[e.runtime.device + ".option.gallery_control.autoplay_time"],
                    l = 0;
                r && !e.isEmpty(o) && (l = o);
                var s = parseFloatLadiPage(t.target.getAttribute("data-index")) || 0,
                    c = null,
                    d = null;
                (parseFloatLadiPage(a.getAttribute("data-current")) || 0) > s ? ((c = "prev"), (d = "right")) : ((c = "next"), (d = "left"));
                var u = a.getAttribute("data-is-next") || "true";
                (u = "true" == u.toLowerCase()) ? s-- : s++, a.setAttribute("data-current", s), a.setAttribute("data-next-time", Date.now() + 1e3 * l), k(i, !1, c, d);
            },
            R = function (t, i) {
                if ((e.isEmpty(e.runtime.timenext_carousel[t]) || !(e.runtime.timenext_carousel[t] > Date.now())) && e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a)) {
                        var n = a.getAttribute("data-is-next") || "true";
                        n = "true" == n.toLowerCase();
                        var r = parseFloatLadiPage(a.getAttribute("data-current")) || 0,
                            o = parseFloatLadiPage(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width"]) || 0,
                            l = parseFloatLadiPage(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width_item"]) || 0;
                        l > a.clientWidth && (l = a.clientWidth);
                        var s = Math.ceil(o / l);
                        i ? (n ? (r >= s - 1 ? ((r = s - 2), (n = !1)) : r++) : r <= 0 ? ((r = 1), (n = !0)) : r--) : n ? r++ : r--, r < 0 && (r = 0), r >= s - 1 && (r = s - 1);
                        var c = 1e3 * (parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).transitionDuration) || 0);
                        e.runtime.timenext_carousel[t] = Date.now() + c;
                        var d = e.getElementBoundingClientRect(a),
                            u = d.x + r * l - d.x - (a.clientWidth - l) / 2;
                        u = -u > 0 ? 0 : -u;
                        var p = -(o - a.clientWidth);
                        u < p && (u = p), a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", u + "px"), a.setAttribute("data-is-next", n), a.setAttribute("data-current", r);
                    }
                }
            },
            B = function (t) {
                if (e.runtime.isClient && !e.runtime.isDesktop && !e.isEmpty(e.runtime.bodyFontSize)) {
                    var i = (parseFloatLadiPage(getComputedStyle(document.body).fontSize) || 0) / e.runtime.bodyFontSize;
                    if (1 != i)
                        for (var a = document.querySelectorAll(".ladi-paragraph, .ladi-list-paragraph, .ladi-headline, .ladi-countdown, .ladi-form"), n = 0; n < a.length; n++) {
                            var r = (parseFloatLadiPage(getComputedStyle(a[n]).fontSize) || 0) / (i * i);
                            a[n].style.setProperty("font-size", r + "px");
                        }
                    else
                        t > Date.now() &&
                            e.runTimeout(function () {
                                B(t);
                            }, 100);
                }
            },
            M = function (i, a) {
                if ("form" == a) {
                    var n = e.runtime.eventData[i];
                    if (!e.isEmpty(n) && n["option.is_add_to_cart"]) {
                        var r = document.getElementById(i);
                        if (!e.isEmpty(r)) {
                            var o = r.querySelector('[data-variant="true"]');
                            if (!e.isEmpty(o)) {
                                var l = e.runtime.eventData[o.id];
                                if (!e.isEmpty(l)) {
                                    var s = n["option.product_type"],
                                        c = n["option.product_id"];
                                    if (!e.isEmpty(s) && !e.isEmpty(c)) {
                                        var d = e.generateVariantProduct(n, !0, l["option.product_variant_type"], l["option.product_variant_title"], l["option.product_variant_price"], l["option.input_tabindex"], t, !0, function (t) {
                                            M(i, a);
                                        });
                                        e.isEmpty(d) ||
                                            e.showParentVisibility(o, function () {
                                                for (var t = o.clientHeight, i = t, a = o.querySelectorAll("select.ladi-form-control"), s = {}, c = 0; c < a.length; c++)
                                                    s[a[c].getAttribute("data-store-id") + "_" + a[c].getAttribute("data-product-id") + "_" + a[c].getAttribute("data-product-variant-id")] = a[c].value;
                                                o.innerHTML = d;
                                                for (var u = o.querySelectorAll("select.ladi-form-control"), p = 0; p < u.length; p++) {
                                                    u[p].removeEventListener("change", e.runtime.tmp.generateLadiSaleProduct), u[p].addEventListener("change", e.runtime.tmp.generateLadiSaleProduct);
                                                    var m = s[u[p].getAttribute("data-store-id") + "_" + u[p].getAttribute("data-product-id") + "_" + u[p].getAttribute("data-product-variant-id")];
                                                    if (e.isNull(m)) {
                                                        var g = u[p].querySelector("option");
                                                        e.isEmpty(g) || (m = g.getAttribute("value"));
                                                    }
                                                    u[p].value = m;
                                                }
                                                if (l["option.product_variant_type"] != e.const.PRODUCT_VARIANT_TYPE.combined)
                                                    o.style.setProperty("height", "auto"), (i = o.clientHeight), o.style.removeProperty("height"), t != i && (o.style.setProperty("height", i + "px"), e.updateHeightElement(!0, o, r, t, i));
                                                else if (!e.isEmpty(n["option.product_variant_id"]))
                                                    for (var y = 0; y < u.length; y++) {
                                                        var _ = u[y].querySelector('option[data-product-variant-id="' + n["option.product_variant_id"] + '"]');
                                                        e.isEmpty(_) || u[y].value == _.getAttribute("value") || ((u[y].value = _.getAttribute("value")), e.fireEvent(u[y], "change"));
                                                    }
                                            });
                                    }
                                }
                            }
                        }
                    }
                }
            },
            F = function (i, a, n) {
                var r = e.runtime.eventData[i];
                if (!(e.isEmpty(r) || e.isEmpty(r["option.product_type"]) || e.isEmpty(r["option.product_id"]) || e.isEmpty(r["option.product_mapping_name"]))) {
                    var o = JSON.stringify(r),
                        l = r["option.product_variant_id"];
                    if (!e.isEmpty(n) && e.isEmpty(l)) {
                        r["option.product_type"], r["option.product_mapping_name"];
                        var s = e.generateVariantProduct(r, !1, null, null, null, null, !0, !0, function (t) {
                            F(i, a, n);
                        });
                        e.isObject(s) && (l = e.getProductVariantId(n.target, s.product));
                    }
                    var c = e.generateProductKey(o, !0, r, !1, l, function (t) {
                        F(i, a, n);
                    });
                    if (o !== c) {
                        var d = null,
                            u = null,
                            p = null;
                        if ((("headline" != a && "paragraph" != a) || window.ladi(i).value(c), "image" == a)) {
                            if (((d = document.getElementById(i)), e.isEmpty(d))) return;
                            (p = e.getOptimizeImage(c, d.clientWidth, d.clientHeight, !0, !1, !1, t)), (u = "style_add_to_cart_image_" + i);
                            var m = "";
                            (m = e.isEmpty(p) ? "#" + i + "  > .ladi-image > .ladi-image-background {background-image: none;}" : "#" + i + '  > .ladi-image > .ladi-image-background {background-image: url("' + p + '");}'),
                                e.createStyleElement(u, m);
                        }
                        if ("gallery" == a) {
                            if (!e.isArray(c)) return;
                            if (((d = document.getElementById(i)), e.isEmpty(d))) return;
                            for (var g = d.getElementsByClassName("ladi-gallery-view-item"); g.length < c.length; ) {
                                var y = e.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + g.length + '"></div>', null, !0);
                                d.getElementsByClassName("ladi-gallery-view")[0].appendChild(y);
                            }
                            for (; g.length > c.length; ) g[g.length - 1].parentElement.removeChild(g[g.length - 1]);
                            for (
                                var _ = d.getElementsByClassName("ladi-gallery-control-item"),
                                    f = function (t) {
                                        D(t, i, d);
                                    };
                                _.length < c.length;

                            ) {
                                var h = e.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + _.length + '"></div>', null, !0);
                                h.addEventListener("click", f), d.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(h);
                            }
                            for (; _.length > c.length; ) _[_.length - 1].parentElement.removeChild(_[_.length - 1]);
                            u = "style_add_to_cart_gallery_" + i;
                            var v = "";
                            c.length <= 1 &&
                                ((v += "#" + i + " .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {display: none;}"),
                                (v += "#" + i + " > .ladi-gallery > .ladi-gallery-view {height: 100%;}"),
                                (v += "#" + i + " > .ladi-gallery > .ladi-gallery-control {display: none;}"));
                            var E = d.getElementsByClassName("ladi-gallery-view")[0],
                                L = d.getElementsByClassName("ladi-gallery-control-item")[0];
                            c.forEach(function (a, n) {
                                (p = e.getOptimizeImage(a.src, E.clientWidth, E.clientHeight, !0, !1, !1, t)),
                                    (v += "#" + i + ' .ladi-gallery .ladi-gallery-view-item[data-index="' + n + '"] {background-image: url("' + p + '");}'),
                                    (p = e.getOptimizeImage(a.src, L.clientWidth, L.clientHeight, !0, !1, !1, t)),
                                    (v += "#" + i + ' .ladi-gallery .ladi-gallery-control-item[data-index="' + n + '"] {background-image: url("' + p + '");}');
                            }),
                                d.setAttribute("data-max-item", c.length),
                                e.isEmpty(v) || e.createStyleElement(u, v);
                        }
                    }
                }
            };
        (this.runtime.tmp.generateLadiSaleProduct = function (t) {
            var i = function () {
                    p.forEach(function (i) {
                        var a = e.runtime.eventData[i];
                        F(i, a.type, t);
                    });
                },
                a = function (n) {
                    if (n && e.isEmpty(t)) i();
                    else {
                        var r = t.target,
                            o = e.findAncestor(r, "ladi-element");
                        if (!e.isEmpty(o)) {
                            var l = e.findAncestor(o, "ladi-form");
                            if (!e.isEmpty(l)) {
                                var s = e.findAncestor(l, "ladi-element");
                                if (!e.isEmpty(s)) {
                                    var c = e.runtime.eventData[s.id];
                                    if (!e.isEmpty(c)) {
                                        var d = c["option.product_id"];
                                        if (!e.isEmpty(d)) {
                                            var u = e.generateVariantProduct(c, !1, null, null, null, null, !0, !0, function (t) {
                                                a(!1);
                                            });
                                            if (e.isObject(u) && e.isObject(u.store_info) && e.isObject(u.product)) {
                                                var p = e.getProductVariantIndex(s.id, c),
                                                    m = document.querySelectorAll('[data-variant="true"]');
                                                if (-1 != p)
                                                    for (var g = 0; g < m.length; g++)
                                                        if (m[g].id != o.id && e.isEmpty(e.findAncestor(m[g], "ladi-collection"))) {
                                                            var y = e.runtime.eventData[m[g].id];
                                                            if (!e.isEmpty(y)) {
                                                                var _ = e.findAncestor(m[g], "ladi-form");
                                                                if (!e.isEmpty(_)) {
                                                                    var f = e.findAncestor(_, "ladi-element");
                                                                    if (!e.isEmpty(f)) {
                                                                        var h = e.runtime.eventData[f.id];
                                                                        if (!e.isEmpty(h) && !e.isEmpty(h["option.product_variant_id"])) continue;
                                                                    }
                                                                    var v = null;
                                                                    if (y["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.combobox) {
                                                                        if (!e.isArray(u.product.variants)) continue;
                                                                        var E = u.product.variants[p];
                                                                        if (e.isString(E.option_ids))
                                                                            for (var L = E.option_ids.split("/"), P = 0; P < L.length; P++)
                                                                                (v = document.querySelector("#" + m[g].id + ' .ladi-form-item select[data-product-variant-id="' + L[P] + '"]')),
                                                                                    e.isEmpty(v) ||
                                                                                        v.getAttribute("data-store-id") != u.store_info.id ||
                                                                                        v.getAttribute("data-product-id") != E.product_id ||
                                                                                        (v.value = E["option" + (P + 1)]);
                                                                    }
                                                                    if (y["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.combined) {
                                                                        if (
                                                                            ((v = m[g].querySelector("select.ladi-form-control")),
                                                                            e.isEmpty(v) || v.getAttribute("data-store-id") != u.store_info.id || v.getAttribute("data-product-id") != u.product.product_id)
                                                                        )
                                                                            continue;
                                                                        var A = e.getProductVariantId(o, u);
                                                                        if (!e.isEmpty(A)) {
                                                                            var w = v.querySelector('option[data-product-variant-id="' + A + '"]');
                                                                            e.isEmpty(w) || (p = w.getAttribute("value"));
                                                                        }
                                                                        v.value = p + "";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                for (var S = 0; S < m.length; S++) {
                                                    var b = e.findAncestor(m[S], "ladi-form");
                                                    if (!e.isEmpty(b)) {
                                                        var T = b.querySelector('input[name="quantity"]');
                                                        e.isEmpty(T) || e.fireEvent(T, "input");
                                                    }
                                                }
                                                i();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            a(!0);
        }),
            (this.runtime.tmp.generateCart = function () {
                p.forEach(function (i) {
                    !(function (i, a) {
                        if ("cart" == a) {
                            var n = e.runtime.eventData[i];
                            if (!e.isEmpty(n)) {
                                var r = document.getElementById(i);
                                e.isEmpty(r) ||
                                    e.showParentVisibility(r, function () {
                                        var i = parseFloatLadiPage(getComputedStyle(r).height) || 0,
                                            a = parseFloatLadiPage(r.getAttribute("data-height")) || 0;
                                        r.hasAttribute("data-height") || (r.setAttribute("data-height", i), (a = i));
                                        var o = e.generateHtmlCart(n["option.cart_layout"], n["option.message_no_product"], t);
                                        r.getElementsByClassName("ladi-cart")[0].innerHTML = o;
                                        var l = r.getElementsByClassName("ladi-cart")[0].scrollHeight;
                                        if (i != (l = l < a ? a : l)) {
                                            r.style.setProperty("height", l + "px");
                                            var s = e.findAncestor(r.parentElement, "ladi-element");
                                            e.isEmpty(s) && (s = e.findAncestor(r.parentElement, "ladi-section")), e.updateHeightElement(!0, r, s, i, l);
                                        }
                                    });
                            }
                        }
                    })(i, e.runtime.eventData[i].type);
                });
            }),
            this.runtime.tmp.generateLadiSaleProduct(),
            (this.runtime.tmp.runOptionAction = O),
            (this.runtime.tmp.runOptionHover = N),
            (this.runtime.tmp.runTrackingAnalytics = I),
            this.createCartData(),
            this.loadDataset(null, null, null, null, null, !0, t),
            p.forEach(function (i) {
                var a,
                    n = e.runtime.eventData[i],
                    r = LadiPageApp[n.type + e.const.APP_RUNTIME_PREFIX];
                e.isEmpty(r)
                    ? (!(function (t, i, a, n, r, o) {
                          if ("section" == i && !e.isEmpty(r) && !e.isEmpty(o)) {
                              var l = document.getElementById(t);
                              if (!e.isEmpty(l)) {
                                  var s = l.getElementsByClassName("ladi-section-background")[0];
                                  e.isEmpty(s) ||
                                      (e.runtime.list_scroll_func[t] = function () {
                                          if ((!e.runtime.isDesktop || a == e.const.BACKGROUND_STYLE.video) && (e.runtime.isDesktop || n == e.const.BACKGROUND_STYLE.video)) {
                                              var i = "",
                                                  l = t + "_background_video";
                                              r == e.const.VIDEO_TYPE.youtube &&
                                                  ((i =
                                                      '<iframe id="' +
                                                      l +
                                                      '" class="ladi-section-background-video" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>'),
                                                  (s.innerHTML += i),
                                                  e.runEventPlayVideo(l, r, o, !0, !0, !1)),
                                                  r == e.const.VIDEO_TYPE.direct &&
                                                      ((i = '<video id="' + l + '" class="ladi-section-background-video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>'),
                                                      (s.innerHTML += i),
                                                      e.runEventPlayVideo(l, r, o, !0, !0, !1));
                                          }
                                      });
                              }
                          }
                      })(i, n.type, n[e.const.DESKTOP + ".option.background-style"], n[e.const.MOBILE + ".option.background-style"], n["option.background_video.video_type"], n["option.background_video.video_value"]),
                      O(null, i, n.type, n),
                      (a = n["option.data_action"]),
                      e.isEmpty(a) || a.type != LadiPageScript.const.DATA_ACTION_TYPE.collapse || e.isEmpty(a.action) || (!e.isNull(a.collapse_start_is_show) && a.collapse_start_is_show) || window.ladi(a.action).collapse(!1),
                      N(null, i, n.type, n["option.data_hover"]),
                      (function (t, i, a, n, r, o, l) {
                          if ("video" == i && !e.isEmpty(a)) {
                              var s = document.getElementById(t);
                              if (!e.isEmpty(s)) {
                                  var c = (u && o) || (!u && l);
                                  if (c) {
                                      var d = function () {
                                              e.playVideo(t, n, a, r, c);
                                          },
                                          p = e.findAncestor(s, "ladi-popup");
                                      e.isEmpty(p)
                                          ? (e.runtime.list_scroll_func[t] = d)
                                          : ((p = e.findAncestor(p, "ladi-element")), e.isArray(e.runtime.list_show_popup_func[p.id]) || (e.runtime.list_show_popup_func[p.id] = []), e.runtime.list_show_popup_func[p.id].push(d));
                                  } else {
                                      var m = document.querySelectorAll("#" + t + ".preload").length > 0;
                                      m && e.playVideo(t, n, a, r, !1, m);
                                  }
                                  s.addEventListener("click", function (i) {
                                      i.stopPropagation(), (n == e.const.VIDEO_TYPE.direct && "VIDEO" == i.target.tagName) || (n == e.const.VIDEO_TYPE.youtube && "IFRAME" == i.target.tagName) || e.playVideo(t, n, a, r);
                                  });
                              }
                          }
                      })(i, n.type, n["option.video_value"], n["option.video_type"], n["option.video_control"], n[e.const.DESKTOP + ".option.video_autoplay"], n[e.const.MOBILE + ".option.video_autoplay"]),
                      (function (t, i, a, n) {
                          "popup" == i &&
                              a &&
                              ((e.isEmpty(n) || n < 0) && (n = 0),
                              e.runTimeout(function () {
                                  window.ladi(t).show();
                              }, 1e3 * n));
                      })(i, n.type, n["option.show_popup_welcome_page"], n["option.delay_popup_welcome_page"]),
                      (function (t, i, a, n, r, o, l) {
                          if ("countdown" == i && !e.isEmpty(a)) {
                              var s = document.getElementById(t);
                              e.isEmpty(s) ||
                                  (s.setAttribute("data-type", a),
                                  a != e.const.COUNTDOWN_TYPE.countdown || e.isEmpty(n) || s.setAttribute("data-minute", n),
                                  a != e.const.COUNTDOWN_TYPE.endtime || e.isEmpty(l) || s.setAttribute("data-endtime", l),
                                  a != e.const.COUNTDOWN_TYPE.daily || e.isEmpty(r) || e.isEmpty(o) || (s.setAttribute("data-daily-start", r), s.setAttribute("data-daily-end", o)));
                          }
                      })(i, n.type, n["option.countdown_type"], n["option.countdown_minute"], n["option.countdown_daily_start"], n["option.countdown_daily_end"], n["option.countdown_endtime"]),
                      (function (t, i, a) {
                          if ("countdown_item" == i && !e.isEmpty(a)) {
                              var n = document.getElementById(t);
                              e.isEmpty(n) || n.setAttribute("data-item-type", a);
                          }
                      })(i, n.type, n["option.countdown_item_type"]),
                      (function (t, i, a, n) {
                          if ("section" == i) {
                              var r = document.getElementById(t);
                              if (!e.isEmpty(r)) {
                                  var o = r.getElementsByClassName("ladi-section-arrow-down")[0];
                                  if (e.isEmpty(o)) {
                                      if (u) {
                                          if (e.isEmpty(a)) return void r.removeAttribute("data-opacity");
                                          var l = (parseFloatLadiPage(a) || 0) + 50;
                                          if (l > r.clientHeight) return void r.removeAttribute("data-opacity");
                                          r.style.setProperty("height", l + "px"), r.classList.add("overflow-hidden");
                                      } else {
                                          if (e.isEmpty(n)) return void r.removeAttribute("data-opacity");
                                          var s = (parseFloatLadiPage(n) || 0) + 50;
                                          if (s > r.clientHeight) return void r.removeAttribute("data-opacity");
                                          r.style.setProperty("height", s + "px"), r.classList.add("overflow-hidden");
                                      }
                                      ((o = document.createElement("div")).className = "ladi-section-arrow-down"),
                                          r.appendChild(o),
                                          r.removeAttribute("data-opacity"),
                                          o.addEventListener("click", function (t) {
                                              t.stopPropagation(),
                                                  r.classList.add("ladi-section-readmore"),
                                                  r.style.removeProperty("height"),
                                                  r.classList.remove("overflow-hidden"),
                                                  o.parentElement.removeChild(o),
                                                  e.runTimeout(function () {
                                                      r.classList.remove("ladi-section-readmore"), e.runTimeout(e.removeSticky, 100);
                                                  }, 1e3 * parseFloatLadiPage(getComputedStyle(r).transitionDuration));
                                          });
                                  }
                              }
                          }
                      })(i, n.type, n[e.const.DESKTOP + ".option.readmore_range"], n[e.const.MOBILE + ".option.readmore_range"]),
                      (function (t, i, a) {
                          if ("form_item" == i) {
                              var n = null;
                              if (a == e.const.INPUT_TYPE.select || a == e.const.INPUT_TYPE.select_multiple)
                                  for (var r = document.getElementById(t).getElementsByClassName("ladi-form-control"), o = 0; o < r.length; o++)
                                      r[o].addEventListener("change", function (t) {
                                          t.target.setAttribute("data-selected", t.target.value);
                                      });
                              if (a == e.const.INPUT_TYPE.checkbox) {
                                  n = document.getElementById(t).getElementsByClassName("ladi-form-checkbox-item");
                                  for (
                                      var l = function (t) {
                                              t.stopPropagation();
                                              var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                              e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked);
                                          },
                                          s = function (t) {
                                              t.stopPropagation();
                                              var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                              e.isEmpty(i) || i.getElementsByTagName("input")[0].click();
                                          },
                                          c = 0;
                                      c < n.length;
                                      c++
                                  ) {
                                      var d = n[c].getElementsByTagName("input")[0];
                                      n[c].getElementsByTagName("span")[0].addEventListener("click", s), d.addEventListener("change", l);
                                  }
                              }
                              if (a == e.const.INPUT_TYPE.radio) {
                                  n = document.getElementById(t).getElementsByClassName("ladi-form-checkbox-item");
                                  for (
                                      var u = function (t) {
                                              var i = e.findAncestor(t.target, "ladi-form-checkbox-item"),
                                                  a = e.findAncestor(i, "ladi-form-checkbox");
                                              if (!e.isEmpty(a)) {
                                                  for (var n = a.querySelectorAll(".ladi-form-checkbox-item span"), r = 0; r < n.length; r++) n[r].setAttribute("data-checked", !1);
                                                  e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked);
                                              }
                                          },
                                          p = function (t) {
                                              t.stopPropagation();
                                              var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                              e.isEmpty(i) || i.getElementsByTagName("input")[0].click();
                                          },
                                          m = 0;
                                      m < n.length;
                                      m++
                                  ) {
                                      var g = n[m].getElementsByTagName("input")[0];
                                      n[m].getElementsByTagName("span")[0].addEventListener("click", p), g.addEventListener("change", u);
                                  }
                              }
                          }
                      })(i, n.type, n["option.input_type"]),
                      (function (t, i) {
                          if ("gallery" == i) {
                              var a = document.getElementById(t);
                              if (!e.isEmpty(a)) {
                                  var n = a.getElementsByClassName("ladi-gallery-control-item").length;
                                  a.setAttribute("data-max-item", n);
                                  var r = function (e) {
                                          e.stopPropagation(), x(t, e.target, !1);
                                      },
                                      o = document.querySelectorAll("#" + t + ".preload").length > 0;
                                  if (n > 0) {
                                      for (var l = 0; l < n; l++) {
                                          var s = a.getElementsByClassName("ladi-gallery-view-item")[l];
                                          e.isEmpty(s) || (o && x(t, s, o), s.classList.contains("play-video") && s.addEventListener("click", r));
                                      }
                                      if (n <= 1) for (var c = a.getElementsByClassName("ladi-gallery-view-arrow"), d = 0; d < c.length; d++) c[d].classList.add("ladi-hidden");
                                      a.setAttribute("data-current", 0), a.setAttribute("data-is-next", !0);
                                  }
                              }
                          }
                      })(i, n.type),
                      e.startAutoScroll(i, n.type, n[e.const.DESKTOP + ".option.auto_scroll"], n[e.const.MOBILE + ".option.auto_scroll"]),
                      M(i, n.type),
                      (function (t, i) {
                          if ("form" == i) {
                              var a = e.runtime.eventData[t];
                              if (!e.isEmpty(a) && a["option.is_add_to_cart"]) {
                                  var n = document.getElementById(t);
                                  if (!e.isEmpty(n)) {
                                      var r = n.querySelector('input[name="quantity"]');
                                      if (!e.isEmpty(r)) {
                                          var o = function (i) {
                                              if (!e.isEmpty(i.target.value)) {
                                                  var n = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function () {
                                                      o(i);
                                                  });
                                                  if (!(e.isEmpty(n) || e.isEmpty(n.store_info) || e.isEmpty(n.product))) {
                                                      var r = e.getProductVariantIndex(t, a);
                                                      if (-1 != r) {
                                                          var l = n.product.variants[r].quantity,
                                                              s = parseInt(i.target.value) || 0;
                                                          s <= 0 && ((s = 0), (0 == n.product.variants[r].inventory_checked || l > 0) && (s = 1), (i.target.value = s)),
                                                              1 == n.product.variants[r].inventory_checked && (s > l || 0 == l) && (i.target.value = l);
                                                      }
                                                  }
                                              }
                                          };
                                          r.addEventListener("input", o);
                                          var l = n.querySelectorAll("button")[0],
                                              s = n.querySelectorAll("button")[1];
                                          e.isEmpty(l) ||
                                              e.isEmpty(s) ||
                                              (l.addEventListener("click", function (t) {
                                                  (r.value = (parseFloatLadiPage(r.value) || 0) - 1), e.fireEvent(r, "input");
                                              }),
                                              s.addEventListener("click", function (t) {
                                                  (r.value = (parseFloatLadiPage(r.value) || 0) + 1), e.fireEvent(r, "input");
                                              }));
                                      }
                                  }
                              }
                          }
                      })(i, n.type),
                      (function (t, i) {
                          if ("collection" == i) {
                              var a = document.getElementById(t);
                              if (!e.isEmpty(a)) {
                                  var n = e.runtime.eventData[t];
                                  if (!e.isEmpty(n)) {
                                      var r = n["option.collection_setting.type"],
                                          o = a.getElementsByClassName("ladi-collection")[0];
                                      if ((r == e.const.COLLECTION_TYPE.carousel && o.classList.add("carousel"), e.loadCollectionData(t, n, 1, !0), r == e.const.COLLECTION_TYPE.carousel)) {
                                          var l = document.createElement("div");
                                          l.className = "ladi-collection-arrow ladi-collection-arrow-left";
                                          var s = document.createElement("div");
                                          (s.className = "ladi-collection-arrow ladi-collection-arrow-right"),
                                              o.appendChild(l),
                                              o.appendChild(s),
                                              l.addEventListener("click", function (i) {
                                                  i.stopPropagation();
                                                  var r = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                  (r = (r -= 1) < 1 ? 1 : r), e.loadCollectionData(t, n, r, !1);
                                              }),
                                              s.addEventListener("click", function (i) {
                                                  i.stopPropagation();
                                                  var r = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                  if (((r += 1), a.hasAttribute("data-max-page"))) {
                                                      var o = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                      r = r > o ? o : r;
                                                  }
                                                  e.loadCollectionData(t, n, r, !1);
                                              });
                                      }
                                      if (r == e.const.COLLECTION_TYPE.readmore) {
                                          var c = document.createElement("div");
                                          (c.className = "ladi-collection-button-next"),
                                              o.appendChild(c),
                                              c.addEventListener("click", function (i) {
                                                  i.stopPropagation();
                                                  var r = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                  if (((r += 1), a.hasAttribute("data-max-page"))) {
                                                      var o = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                      r = r > o ? o : r;
                                                  }
                                                  e.loadCollectionData(t, n, r, !1, !0);
                                              });
                                      }
                                  }
                              }
                          }
                      })(i, n.type))
                    : r(n, t).run(i, u);
            }),
            B(Date.now() + 1e3),
            (function () {
                var i,
                    a = document.getElementsByClassName("ladi-form"),
                    n = null,
                    l = null,
                    s = null,
                    c = null,
                    d = null,
                    u = null,
                    p = null,
                    m = null,
                    g = null,
                    y = null,
                    _ = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                    f = ["name", "email", "phone", "address", "ward", "district", "state", "country"],
                    h = ["email", "phone"],
                    E = e.copy(e.runtime.list_set_value_name_country).reverse(),
                    L = function (t, i) {
                        var a = window.ladi("_capture_" + t).get_cookie();
                        return e.isEmpty(a) && ((a = i + "|" + e.runtime.ladipage_id + "|" + Date.now() + "|" + e.randomId()), window.ladi("_capture_" + t).set_cookie(a, 3e5 / 864e5, window.location.pathname)), a;
                    },
                    P = function (t, i, a) {
                        if (i && e.isEmpty(n[a])) return !1;
                        var r = [];
                        if (
                            (m.forEach(function (t) {
                                e.isEmpty(n[t]) && r.push(t);
                            }),
                            i && (r = r.only([a])),
                            r.length > 0)
                        )
                            return (
                                i ||
                                    e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR, null, function () {
                                        var i = t.querySelector('[name="' + r[0] + '"]');
                                        e.isEmpty(i) || i.focus();
                                    }),
                                !1
                            );
                        var o = !0,
                            l = 0,
                            s = function () {
                                var i = t.querySelector('[name="' + g[l].name + '"]');
                                e.isEmpty(i) || i.focus();
                            };
                        for (l = 0; l < g.length; l++)
                            if (!i || g[l].name == a) {
                                var c = n[g[l].name];
                                if (!e.isEmpty(c))
                                    try {
                                        if (!new RegExp("^" + g[l].pattern + "$", g[l].pattern_flag).test(c)) {
                                            i || e.showMessage(g[l].title, null, s), (o = !1);
                                            break;
                                        }
                                    } catch (t) {}
                            }
                        return o;
                    },
                    A = function (t, i) {
                        (n = {}), (l = {});
                        for (var a = t.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), o = {}, d = null, u = 0; u < a.length; u++) (d = a[u].getAttribute("name")), (o[d] = parseInt(a[u].getAttribute("tabindex")) || 0);
                        var p = Object.keys(o).sort(function (t, e) {
                            return o[t] - o[e];
                        });
                        if (p.only(e.runtime.list_set_value_name_country).length == e.runtime.list_set_value_name_country.length)
                            for (var y = 0; y < p.length; y++) {
                                var _ = e.runtime.list_set_value_name_country.indexOf(p[y]);
                                -1 != _ && (p[y] = E[_]);
                            }
                        for (var h = 0; h < p.length; h++) n[p[h]] = "";
                        c = Object.keys(n);
                        for (var v = 0; v < a.length; v++) {
                            if (((d = a[v].getAttribute("name")), a[v].required && -1 == m.indexOf(d) && m.push(d), "INPUT" == a[v].tagName)) {
                                var L = a[v].getAttribute("type").trim().toLowerCase(),
                                    P = a[v].getAttribute("pattern"),
                                    A = a[v].getAttribute("title");
                                if (
                                    ("email" == L
                                        ? g.push({
                                              name: d,
                                              pattern: '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
                                              pattern_flag: "gi",
                                              title: e.const.LANG.FORM_INPUT_EMAIL_REGEX,
                                          })
                                        : e.isEmpty(P) || g.push({ name: d, pattern: P, title: e.isEmpty(A) ? e.const.LANG.FORM_INPUT_TEXT_REGEX : A }),
                                    "checkbox" == L)
                                ) {
                                    e.isArray(n[d]) || (n[d] = []), a[v].checked && n[d].push(a[v].value);
                                    continue;
                                }
                                if ("radio" == L) {
                                    a[v].checked && (n[d] = a[v].value);
                                    continue;
                                }
                            }
                            (n[d] = a[v].value), a[v].hasAttribute("data-path-file") && ((n[d] = JSON.parse(a[v].getAttribute("data-path-file"))), (l[d] = !0));
                        }
                        i ||
                            f.forEach(function (t) {
                                e.isNull(n[t]) ||
                                    (window.ladi("_ladipage_" + t).set_cookie(n[t], 365, null, window.location.host),
                                    e.isArray(e.runtime.DOMAIN_SET_COOKIE) &&
                                        e.runtime.DOMAIN_SET_COOKIE.forEach(function (e) {
                                            e != window.location.host && window.ladi("_ladipage_" + t).set_cookie(n[t], 365, null, e);
                                        }));
                            }),
                            (s = r(n));
                    },
                    w = function (t, i, a) {
                        var r = { form_config_id: d, ladipage_id: e.runtime.ladipage_id, tracking_form: [], form_data: [], data_key: i };
                        if (t) r.status_send = 1;
                        else {
                            r.status_send = 2;
                            var o = window.ladi("_checkout_token").get_cookie();
                            e.isEmpty(o) || (r.checkout_token = o);
                        }
                        e.isEmpty(p) || (r.captcha_token = p), e.isEmpty(u) || (r.total_revenue = u), e.isEmpty(e.runtime.time_zone) || (r.time_zone = e.runtime.time_zone);
                        var s = Object.keys(LadiFormApi);
                        c.forEach(function (t) {
                            var i = n[t];
                            e.isArray(i) && 0 == i.length && (i = "");
                            var a = { name: t, value: (i = -1 != s.indexOf(t) ? LadiFormApi[t] : i) };
                            l[t] && (a.is_file = !0), r.form_data.push(a);
                        }),
                            (s = s.except(c)).forEach(function (t) {
                                r.form_data.push({ name: t, value: LadiFormApi[t] });
                            }),
                            r.tracking_form.push({ name: "url_page", value: window.location.href }),
                            _.forEach(function (t) {
                                var i = y[t];
                                (i = e.isNull(i) ? "" : i), r.tracking_form.push({ name: t, value: i });
                            }),
                            r.tracking_form.push({ name: "variant_url", value: v }),
                            r.tracking_form.push({ name: "variant_content", value: e.generateVariantContentString(T, !0) }),
                            e.isFunction(a) && a(r);
                    },
                    S = function (t) {
                        t.reset();
                        for (var i = t.querySelectorAll(".ladi-element .ladi-form-item-container .ladi-form-checkbox-item input"), a = 0; a < i.length; a++) {
                            var n = e.findAncestor(i[a], "ladi-form-checkbox-item").querySelector("span");
                            e.isEmpty(n) || n.setAttribute("data-checked", i[a].checked);
                        }
                    },
                    b = function (t, i) {
                        A(t, !1),
                            P(t, !1, null) &&
                                (w(!1, i, function (t) {
                                    e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, { "Content-Type": "application/json" });
                                }),
                                e.showMessage(e.const.LANG.FORM_SEND_DATA_NO_CONFIG),
                                S(t));
                    },
                    O = function () {
                        e.showMessage(e.const.LANG.FORM_CAPTCHA_ERROR);
                    },
                    N = function (i, a, r, o, f) {
                        (y = e.getURLSearchParams(window.location.search)), (n = {}), (l = {}), (s = {}), (c = []), (d = null), (u = null), (p = a.captcha_token), (m = []), (g = []);
                        var h = i.getElementsByClassName("ladi-form")[0];
                        if (!e.isEmpty(h)) {
                            var v = e.runtime.eventData[i.id];
                            if (!e.isEmpty(v)) {
                                if (v["option.is_add_to_cart"]) return;
                                (d = v["option.form_config_id"]), (u = parseFloatLadiPage(v["option.form_purchase_value"]) || 0), (u = e.getCartCheckoutPrice(u));
                            }
                            if (r) {
                                if (e.isEmpty(o)) return;
                                if ((A(h, r), !P(h, r, f))) return;
                                return a.captcha && !e.isEmpty(v) && v["option.form_captcha"] && e.isObject(e.runtime.tmp.google_captcha)
                                    ? void (
                                          window.grecaptcha &&
                                          window.grecaptcha.ready(function () {
                                              try {
                                                  window.grecaptcha.execute(e.runtime.tmp.google_captcha.api_key, { action: "submit" }).then(function (t) {
                                                      N(i, { captcha_token: t }, r, o, f);
                                                  });
                                              } catch (t) {}
                                          })
                                      )
                                    : void w(r, o, function (t) {
                                          var i = t.form_data.findIndex(function (t) {
                                                  return t.name == f;
                                              }),
                                              a = -1 != i ? t.form_data[i].value : null;
                                          (!e.isEmpty(e.runtime.tmp.capture_form_data_last[o + "_" + f]) && e.equals(e.runtime.tmp.capture_form_data_last[o + "_" + f], a)) ||
                                              ((e.runtime.tmp.capture_form_data_last[o + "_" + f] = a), e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, { "Content-Type": "application/json" }));
                                      });
                            }
                            if (e.isEmpty(v)) b(h, o);
                            else if (
                                (e.isNull(e.runtime.tmp.form_sending) && (e.runtime.tmp.form_sending = {}), e.isNull(e.runtime.tmp.form_button_headline) && (e.runtime.tmp.form_button_headline = {}), !e.runtime.tmp.form_sending[i.id])
                            ) {
                                var E = function () {
                                        e.runtime.tmp.form_sending[i.id] = !0;
                                        var t = h.querySelector(".ladi-button > .ladi-element > .ladi-headline");
                                        e.isNull(e.runtime.tmp.form_button_headline[i.id]) && (e.runtime.tmp.form_button_headline[i.id] = t.innerHTML), (t.innerHTML = "● ● ●");
                                    },
                                    L = function () {
                                        delete e.runtime.tmp.form_sending[i.id], (h.querySelector(".ladi-button > .ladi-element > .ladi-headline").innerHTML = e.runtime.tmp.form_button_headline[i.id]);
                                    };
                                if (a.captcha && !e.isEmpty(v) && v["option.form_captcha"] && e.isObject(e.runtime.tmp.google_captcha))
                                    window.grecaptcha
                                        ? (E(),
                                          window.grecaptcha.ready(function () {
                                              try {
                                                  window.grecaptcha
                                                      .execute(e.runtime.tmp.google_captcha.api_key, { action: "submit" })
                                                      .then(function (t) {
                                                          L(), N(i, { captcha_token: t }, r, o, f);
                                                      })
                                                      .catch(function () {
                                                          O(), L();
                                                      });
                                              } catch (t) {
                                                  O(), L();
                                              }
                                          }))
                                        : e.showMessage(e.const.LANG.FORM_CAPTCHA_LOADING);
                                else {
                                    var T = v["option.form_send_ladipage"],
                                        k = v["option.form_api_data"],
                                        x = v["option.thankyou_type"],
                                        D = v["option.thankyou_value"],
                                        R = v["option.deeplink_value"],
                                        B = v["option.form_auto_funnel"],
                                        M = v["option.form_thankyou_funnel"];
                                    if (e.isEmpty(d)) b(h, o);
                                    else if ((A(h, r), P(h, r, f))) {
                                        var F = 0,
                                            V = 0,
                                            Y = [],
                                            q = !1,
                                            H = !1,
                                            U = !0,
                                            j = function (t) {
                                                t && S(h), L();
                                            },
                                            G = function (a, r, o, l) {
                                                if (o.readyState == XMLHttpRequest.DONE) {
                                                    if (l == e.const.API_FORM_DATA) {
                                                        var c = {};
                                                        try {
                                                            c = JSON.parse(a);
                                                        } catch (t) {}
                                                        200 == c.code ? F++ : (V++, (U = !1));
                                                    } else 200 == r || 201 == r ? F++ : e.getElementAHref(l).host == e.const.DOMAIN_GOOGLE_DOCS ? F++ : V++;
                                                    F + V == Y.length &&
                                                        (U && !q && F >= 1
                                                            ? ((q = !0),
                                                              (function (t, i) {
                                                                  var a = null,
                                                                      n = !1,
                                                                      r = function (t, r) {
                                                                          n || (e.isFunction(i) && i(t, r), e.removeTimeout(a), (n = !0));
                                                                      };
                                                                  (a = e.runTimeout(r, 3e3)), I("FormSubmit", { total_revenue: t }, r);
                                                              })(u, function (a, r) {
                                                                  window.ladi("_capture_" + i.id).delete_cookie(),
                                                                      window.ladi("_cart_token").delete_cookie(),
                                                                      window.ladi("_checkout_token").delete_cookie(),
                                                                      e.createCartData(),
                                                                      e.runEventTracking(i.id, !0),
                                                                      j(!0);
                                                                  var o = e.findAncestor(i, "ladi-popup");
                                                                  if (!e.isEmpty(o)) {
                                                                      var l = e.findAncestor(o, "ladi-element").id;
                                                                      e.runRemovePopup(l, t);
                                                                  }
                                                                  !(function () {
                                                                      var t = 0;
                                                                      if (!e.runtime.isDesktop && !e.isEmpty(R)) {
                                                                          t = 1e3;
                                                                          var i = e.convertDataReplaceStr(R, !0, null, !1, s);
                                                                          window.ladi(i).open_url();
                                                                      }
                                                                      if (!M || e.isEmpty(C)) {
                                                                          if (
                                                                              (x == e.const.FORM_THANKYOU_TYPE.default && (e.isEmpty(D) || e.showMessage(D, s)),
                                                                              x == e.const.FORM_THANKYOU_TYPE.popup && (B && e.setDataReplaceElement(!1, !1, s, D), window.ladi(D).show()),
                                                                              x == e.const.FORM_THANKYOU_TYPE.url && !e.isEmpty(D))
                                                                          ) {
                                                                              var a = window.ladi(D).get_url(n, B);
                                                                              e.runTimeout(function () {
                                                                                  window.ladi(a).open_url();
                                                                              }, t);
                                                                          }
                                                                      } else {
                                                                          var r = window.ladi(C).get_url(n, B);
                                                                          e.runTimeout(function () {
                                                                              window.ladi(r).open_url();
                                                                          }, t);
                                                                      }
                                                                  })();
                                                              }))
                                                            : !H && V >= 1 && ((H = !0), e.showMessage(e.const.LANG.FORM_SEND_DATA_ERROR), j(!1)));
                                                }
                                            },
                                            W = function (t) {
                                                Y.push({ url: e.const.API_FORM_DATA, data: JSON.stringify(t), async: !0, headers: { "Content-Type": "application/json" }, callback: G });
                                            };
                                        T && w(r, o, W),
                                            e.isArray(k) &&
                                                k.forEach(function (t) {
                                                    if (!e.isEmpty(t.api_url) && e.isArray(t.custom_fields)) {
                                                        var i = e.getElementAHref(t.api_url).host == e.const.DOMAIN_GOOGLE_DOCS,
                                                            a = {};
                                                        t.custom_fields.forEach(function (t) {
                                                            if (!l[t.ladi_name]) {
                                                                var i = s[t.ladi_name];
                                                                e.isNull(i) || (e.isArray(i) ? (0 == i.length ? (a[t.name] = "") : (a[t.name] = JSON.stringify(i))) : (a[t.name] = i));
                                                            }
                                                        });
                                                        var n = {};
                                                        if (!e.isEmpty(t.api_request_header))
                                                            try {
                                                                var r = JSON.parse(t.api_request_header);
                                                                Object.keys(r).forEach(function (t) {
                                                                    n[t] = r[t];
                                                                });
                                                            } catch (t) {}
                                                        i ||
                                                            ((a.link = window.location.href),
                                                            Object.keys(LadiFormApi).forEach(function (t) {
                                                                a[t] = LadiFormApi[t];
                                                            }),
                                                            _.forEach(function (t) {
                                                                var i = y[t];
                                                                e.isNull(i) || (a[t] = i);
                                                            }));
                                                        var o = null,
                                                            c = t.content_type || e.const.CONTENT_TYPE.form_urlencoded;
                                                        c == e.const.CONTENT_TYPE.form_urlencoded &&
                                                            ((n["Content-Type"] = "application/x-www-form-urlencoded"),
                                                            (o = Object.keys(a)
                                                                .reduce(function (t, e) {
                                                                    return t.push(e + "=" + encodeURIComponent(a[e])), t;
                                                                }, [])
                                                                .join("&"))),
                                                            c == e.const.CONTENT_TYPE.json && ((n["Content-Type"] = "application/json"), (o = JSON.stringify(a))),
                                                            c == e.const.CONTENT_TYPE.form_data &&
                                                                ((o = new FormData()),
                                                                Object.keys(a).forEach(function (t) {
                                                                    o.append(t, a[t]);
                                                                })),
                                                            Y.push({ url: t.api_url, data: o, async: !0, headers: n, callback: G });
                                                    }
                                                }),
                                            Y.length > 0 ? E() : T ? b(h, o) : (E(), w(r, o, W)),
                                            Y.forEach(function (t) {
                                                e.sendRequest("POST", t.url, t.data, t.async, t.headers, t.callback);
                                            });
                                    }
                                }
                            }
                        }
                    },
                    k = function (t) {
                        var i = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(i)) for (var a = i.querySelectorAll('[type="checkbox"]'), n = 0; n < a.length; n++) a[n].removeAttribute("required");
                    },
                    x = function (t) {
                        var i = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(i)) {
                            for (var a = i.querySelectorAll('[ladi-checkbox-required="true"]'), n = -1, r = 0; r < a.length; r++)
                                if (0 == a[r].querySelectorAll('[type="checkbox"]:checked').length) {
                                    n = r;
                                    break;
                                }
                            if (-1 == n) {
                                var o = null,
                                    l = e.runtime.eventData[i.id];
                                e.isEmpty(l) || !l["option.form_auto_capture"] || e.isEmpty(l["option.form_config_id"]) || (o = L(i.id, l["option.form_config_id"])), N(i, { captcha: !0 }, !1, o);
                            } else {
                                var s = a[n].querySelectorAll('[type="checkbox"]');
                                if (s.length > 0) {
                                    s[0].setAttribute("required", "required");
                                    for (var c = 0; c < s.length; c++) s[c].removeEventListener("change", k), s[c].addEventListener("change", k);
                                    i.querySelector(".ladi-form").reportValidity();
                                }
                            }
                        }
                        return !1;
                    },
                    D = function (t, i, a, n) {
                        var r = e.findAncestor(t.target, "ladi-form");
                        if (!e.isEmpty(r)) {
                            var o = e.findAncestor(r, "ladi-element");
                            if (
                                !(
                                    e.isEmpty(o) ||
                                    ((a = i ? a : e.runtime.eventData[o.id]), e.isEmpty(a) || (!a["option.is_buy_now"] && !a["option.is_add_to_cart"]) || e.isEmpty(a["option.product_type"]) || e.isEmpty(a["option.product_id"]))
                                )
                            ) {
                                var l = function () {
                                    var t = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, l);
                                    if (e.isEmpty(t) || e.isEmpty(t.store_info) || e.isEmpty(t.product))
                                        e.isEmpty(e.runtime.tmp.timeout_product_info[a["option.product_type"]][a["option.product_id"]]) && e.showMessage(e.const.LANG.ADD_TO_CART_NO_PRODUCT);
                                    else {
                                        var r = -1,
                                            s = null;
                                        if (i) {
                                            var c = o.querySelector('[data-variant="true"]');
                                            (s = e.getProductVariantId(c, t.product)),
                                                e.isEmpty(s) ||
                                                    (r = t.product.variants.findIndex(function (t) {
                                                        return t.product_variant_id == s;
                                                    }));
                                        } else r = e.getProductVariantIndex(o.id, a);
                                        if (-1 != r) {
                                            var d = t.product.variants[r].product_id;
                                            s = t.product.variants[r].product_variant_id;
                                            var u = t.product.name,
                                                p = t.product.variants[r].title,
                                                m = t.product.variants[r].price,
                                                g = t.product.variants[r].quantity,
                                                y = e.isEmpty(t.product.variants[r].src) ? "" : t.product.variants[r].src;
                                            e.isEmpty(y) || (y = "https://" + e.const.STATIC_W_DOMAIN + "/" + y);
                                            var _ = e.runtime.tmp.cart.findIndex(function (t) {
                                                    return t.product_variant_id == s;
                                                }),
                                                f = !1;
                                            -1 == _ &&
                                                ((f = !0),
                                                e.runtime.tmp.cart.push({
                                                    store_id: t.store_info.id,
                                                    product_id: d,
                                                    product_variant_id: s,
                                                    name: u,
                                                    title: p,
                                                    price: m,
                                                    image: y,
                                                    quantity: 0,
                                                    inventory_checked: t.product.variants[r].inventory_checked,
                                                    available_quantity: g,
                                                    currency: t.store_info.currency,
                                                }),
                                                (_ = e.runtime.tmp.cart.length - 1));
                                            var h = o.querySelector('input[name="quantity"]');
                                            if (e.isEmpty(h) || e.isEmpty(h.value)) e.showMessage(e.const.LANG.ADD_TO_CART_QUANTITY_REQUIRED);
                                            else {
                                                var v = parseInt(h.value) || 0;
                                                if ((1 == t.product.variants[r].inventory_checked && e.runtime.tmp.cart[_].quantity + v > g && (v = g - e.runtime.tmp.cart[_].quantity), v > 0)) {
                                                    var E = function () {
                                                        (e.runtime.tmp.cart[_].quantity += v),
                                                            e.addCartCookie(
                                                                t.store_info.id,
                                                                { type: "LP", product_variant_id: s, quantity: v },
                                                                n,
                                                                function (t) {
                                                                    (e.runtime.tmp.cart[_].quantity -= v), f && e.runtime.tmp.cart.splice(_, 1), e.showMessage(t.message);
                                                                },
                                                                function () {
                                                                    e.runtime.tmp.generateCart(),
                                                                        e.changeTotalPriceCart(),
                                                                        (e.runtime.tmp.is_click_add_to_cart = !1),
                                                                        0 == e.runtime.tmp.cart.length && (window.ladi("_cart_token").delete_cookie(), window.ladi("_checkout_token").delete_cookie()),
                                                                        e.runResizeAll();
                                                                }
                                                            );
                                                    };
                                                    if (e.isEmpty(window.ladi("_cart_token").get_cookie()))
                                                        if (e.runtime.tmp.is_click_add_to_cart) {
                                                            var L = function () {
                                                                e.runTimeout(function () {
                                                                    if (e.runtime.tmp.is_click_add_to_cart) return L();
                                                                    l();
                                                                }, 100);
                                                            };
                                                            L();
                                                        } else (e.runtime.tmp.is_click_add_to_cart = !0), E();
                                                    else E();
                                                } else e.showMessage(e.const.LANG.ADD_TO_CART_NO_QUANTITY);
                                            }
                                        } else e.showMessage(e.const.LANG.ADD_TO_CART_NO_QUANTITY);
                                    }
                                };
                                l();
                            }
                        }
                    },
                    R = function (t) {
                        D(t, !1, null, function () {
                            var i = e.findAncestor(t.target, "ladi-button");
                            i = e.findAncestor(i || t.target, "ladi-element");
                            var a = e.runtime.eventData[i.id];
                            if (!e.isEmpty(a) && e.isObject(a["option.data_action"])) {
                                var n = null;
                                a["option.data_action"].type == e.const.DATA_ACTION_TYPE.popup_cart && (n = document.getElementById("POPUP_CART")),
                                    a["option.data_action"].type == e.const.DATA_ACTION_TYPE.popup_checkout && (n = document.getElementById("POPUP_CHECKOUT")),
                                    e.isEmpty(n) || window.ladi(n.id).show(),
                                    e.runEventTracking(i.id, !1);
                            }
                        });
                    },
                    B = function (t) {
                        var i = e.findAncestor(t.target, "ladi-form");
                        e.isEmpty(i) || ((i = e.findAncestor(i, "ladi-element")), e.isEmpty(i) || window.ladi(i.id).submit());
                    },
                    M = function (t) {
                        var i = e.findAncestor(t.target, "ladi-form");
                        if (!e.isEmpty(i)) {
                            var a = e.findAncestor(i, "ladi-element");
                            if (!e.isEmpty(a)) {
                                var n = e.runtime.eventData[a.id];
                                if (!e.isEmpty(n) && n["option.form_auto_capture"] && !e.isEmpty(n["option.form_config_id"])) {
                                    var r = L(a.id, n["option.form_config_id"]);
                                    N(a, { captcha: !0 }, !0, r, t.target.getAttribute("name"));
                                }
                            }
                        }
                    },
                    F = {};
                f.forEach(function (t) {
                    (F[t] = window.ladi("_ladipage_" + t).get_cookie()), e.isEmpty(o[t]) || (F[t] = o[t]);
                }),
                    (i = r(F));
                var V = 0,
                    Y = !1,
                    q = function (t) {
                        for (var n = a[V].querySelectorAll('.ladi-element .ladi-form-item-container [name="' + t + '"]'), r = 0; r < n.length; r++) {
                            var o = F[t];
                            if (!e.isEmpty(o))
                                if (("true" != n[r].getAttribute("data-is-select-country") && (o = i[t]), "SELECT" == n[r].tagName))
                                    n[r].querySelectorAll('option[value="' + o + '"]').length > 0 && ((n[r].value = o), Y && e.fireEvent(n[r], "change"));
                                else {
                                    if ("country" == t && "true" == n[r].getAttribute("data-is-select-country")) continue;
                                    (n[r].value = o), Y && e.fireEvent(n[r], "change");
                                }
                        }
                    };
                for (V = 0; V < a.length; V++) {
                    a[V].onsubmit = x;
                    for (var H = e.findAncestor(a[V], "ladi-element"), U = a[V].getElementsByClassName("ladi-button"), j = 0; j < U.length; j++) {
                        var G = a[V].getElementsByClassName("ladi-button")[j];
                        if (!e.isEmpty(G)) {
                            var W = e.findAncestor(G, "ladi-element");
                            e.isEmpty(H) || e.isEmpty(e.runtime.eventData[H.id]) || !e.runtime.eventData[H.id]["option.is_add_to_cart"] ? W.addEventListener("click", B) : (W.setAttribute("data-click", !1), W.addEventListener("click", R));
                        }
                    }
                    var z = a[V].querySelector('[data-is-select-country="true"][name="country"]');
                    if (!e.isEmpty(z) && -1 != ["TH", "MY"].indexOf(z.value.split(":")[0])) {
                        var X = a[V].querySelector('select[data-is-select-country="true"][name="ward"]');
                        e.isEmpty(X) || X.removeAttribute("required");
                    }
                    for (var J = a[V].querySelectorAll("[tabindex]"), K = 0, Z = 0; Z < J.length; Z++) {
                        var $ = parseInt(J[Z].getAttribute("tabindex")) || 0;
                        $ > K && (K = $), J[Z].setAttribute("tabindex", e.runtime.tabindexForm + $);
                    }
                    e.runtime.tabindexForm += K;
                    for (var Q = 0; Q < h.length; Q++) {
                        var tt = a[V].querySelector('.ladi-element .ladi-form-item-container input[name="' + h[Q] + '"]');
                        e.isEmpty(tt) || tt.addEventListener("focusout", M);
                    }
                }
                var et = function (t, i) {
                    for (Y = i, V = 0; V < a.length; V++) {
                        var n = e.findAncestor(a[V], "ladi-element");
                        !e.isEmpty(e.runtime.eventData[n.id]) && e.runtime.eventData[n.id]["option.form_auto_complete"] && t.forEach(q);
                    }
                };
                et(e.copy(f).except(e.runtime.list_set_value_name_country));
                e.runtime.tmp.runAfterLocation.push(function () {
                    var t = "",
                        i = "",
                        n = "",
                        r = "",
                        o = function (e) {
                            var a = window.LadiLocation[i].data[e];
                            t += '<option value="' + a.id + ":" + a.name + '">' + a.name + "</option>";
                        },
                        l = function (t) {
                            var i = window.LadiLocation[t.target.getAttribute("data-country")].data[t.target.value.split(":")[0]];
                            (n = ""),
                                e.isEmpty(i) ||
                                    Object.keys(i.data).forEach(function (t) {
                                        var e = i.data[t];
                                        n += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>";
                                    });
                            var a = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(a)) {
                                var r = a.querySelector('select[name="district"]');
                                e.isEmpty(r) || (r.setAttribute("data-selected", ""), (r.innerHTML = r.querySelector("option").outerHTML + n));
                                var o = a.querySelector('select[name="ward"]');
                                e.isEmpty(o) || (o.setAttribute("data-selected", ""), (o.innerHTML = o.querySelector("option").outerHTML));
                            }
                        },
                        s = function (t) {
                            var i = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(i)) {
                                var a = i.querySelector('select[name="ward"]');
                                if (!e.isEmpty(a)) {
                                    a.setAttribute("data-selected", ""), (r = "");
                                    var n = i.querySelector('select[name="state"]');
                                    if (!e.isEmpty(n)) {
                                        var o = n.getAttribute("data-selected");
                                        if (!e.isEmpty(o)) {
                                            o = o.split(":")[0];
                                            var l = window.LadiLocation[n.getAttribute("data-country")].data[o];
                                            if (!e.isEmpty(l)) {
                                                var s = l.data[t.target.value.split(":")[0]];
                                                e.isEmpty(s) ||
                                                    Object.keys(s.data).forEach(function (t) {
                                                        var e = s.data[t];
                                                        r += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>";
                                                    });
                                            }
                                        }
                                    }
                                    a.innerHTML = a.querySelector("option").outerHTML + r;
                                }
                                e.reloadFeeShipping({ target: a });
                            }
                        };
                    for (V = 0; V < a.length; V++) {
                        var c = a[V].querySelectorAll('.ladi-element .ladi-form-item-container [name="state"]'),
                            d = 0,
                            u = null;
                        for (d = 0; d < c.length; d++)
                            if (
                                ((u = e.findAncestor(c[d], "ladi-element")), !e.isEmpty(u) && ((i = e.runtime.eventData[u.id]["option.input_country"]), !e.isEmpty(i) && ((t = ""), (i = i.split(":")[0]), !e.isEmpty(window.LadiLocation[i]))))
                            ) {
                                var p = window.LadiLocation[i].data;
                                Object.keys(p).forEach(o), (c[d].innerHTML = c[d].querySelector("option").outerHTML + t), c[d].setAttribute("data-country", i), c[d].addEventListener("change", l);
                            }
                        var m = a[V].querySelectorAll('.ladi-element .ladi-form-item-container [name="district"]');
                        for (d = 0; d < m.length; d++) m[d].addEventListener("change", s);
                    }
                }),
                    e.runtime.tmp.runAfterLocation.push(function () {
                        et(E, !0);
                    }),
                    (e.runtime.tmp.buttonAddToCartClick = D);
            })(),
            (function () {
                for (
                    var t = document.querySelectorAll(".ladi-form .ladi-element .ladi-form-control-file"),
                        i = function (t) {
                            var i = t.target,
                                a = document.getElementById("input-file-tmp");
                            e.isEmpty(a) &&
                                (((a = document.createElement("input")).id = "input-file-tmp"),
                                (a.multiple = !0),
                                (a.type = "file"),
                                (a.className = "ladi-hidden"),
                                n.setAttribute("accept", ".jpg, .jpeg, .png, .gif, .svg, .ico, .mp3, .mp4, .ttf, .otf, .woff2, .txt, .doc, .docx, .xls, .xlsx, .pdf"),
                                document.body.appendChild(a),
                                a.addEventListener("change", function (t) {
                                    !(function (t, i, a) {
                                        if (i.length > e.const.FORM_UPLOAD_FILE_LENGTH) e.showMessage(e.const.LANG.FORM_UPLOAD_FILE_MAX_LENGTH_ERROR, { max_length: e.const.FORM_UPLOAD_FILE_LENGTH });
                                        else {
                                            for (var n = new FormData(), r = 0, o = 0; o < i.length; o++) (r += i[o].size), n.append("file[]", i[o]);
                                            if (r > 1024 * e.const.FORM_UPLOAD_FILE_SIZE * 1024) e.showMessage(e.const.LANG.FORM_UPLOAD_FILE_MAX_SIZE_ERROR, { max_size: e.const.FORM_UPLOAD_FILE_SIZE });
                                            else {
                                                var l = { ladipage_id: e.runtime.ladipage_id, lang: e.runtime.lang };
                                                n.append("json_data", JSON.stringify(l)),
                                                    e.showLoadingBlur(),
                                                    e.sendRequest("POST", e.const.API_FILE_UPLOAD, n, !0, null, function (i, a, n) {
                                                        if (n.readyState == XMLHttpRequest.DONE) {
                                                            if ((e.hideLoadingBlur(), 200 == a))
                                                                try {
                                                                    var r = JSON.parse(i);
                                                                    if (200 == r.code) {
                                                                        var o = [],
                                                                            l = [];
                                                                        return (
                                                                            r.data.success.forEach(function (t) {
                                                                                o.push(t.name), l.push({ id: t._id, path: t.path });
                                                                            }),
                                                                            (t.value = o.length > 0 ? "[" + o.join(", ") + "]" : ""),
                                                                            void t.setAttribute("data-path-file", JSON.stringify(l))
                                                                        );
                                                                    }
                                                                    if (!e.isEmpty(r.message)) return void e.showMessage(r.message);
                                                                } catch (t) {}
                                                            e.showMessage(e.const.LANG.FORM_SEND_DATA_ERROR);
                                                        }
                                                    }),
                                                    e.isFunction(a) && a();
                                            }
                                        }
                                    })(i, t.target.files, function () {
                                        t.target.parentElement.removeChild(t.target);
                                    });
                                })),
                                a.click();
                        },
                        a = 0;
                    a < t.length;
                    a++
                ) {
                    var n = t[a],
                        r = e.findAncestor(n, "ladi-form");
                    r = e.findAncestor(r, "ladi-element");
                    var o = e.runtime.eventData[r.id];
                    !e.isEmpty(o) && o["option.form_send_ladipage"] && ((n.readOnly = !0), n.style.setProperty("cursor", "pointer"), n.addEventListener("click", i));
                }
            })(),
            (d = function () {
                p.forEach(function (t) {
                    if ("countdown" == e.runtime.eventData[t].type) {
                        var i = document.getElementById(t);
                        if (!e.isEmpty(i)) {
                            var a = i.getAttribute("data-type"),
                                n = 0,
                                r = 0,
                                o = Date.now();
                            if (i.hasAttribute("data-date-start") || i.hasAttribute("data-date-end")) (n = parseFloatLadiPage(i.getAttribute("data-date-start")) || 0), (r = parseFloatLadiPage(i.getAttribute("data-date-end")) || 0);
                            else {
                                if (a == e.const.COUNTDOWN_TYPE.countdown) {
                                    var l = parseInt(i.getAttribute("data-minute")) || 0;
                                    if (l <= 0) return;
                                    for (r = e.runtime.timenow; r <= o; ) r += 60 * l * 1e3;
                                }
                                if ((a == e.const.COUNTDOWN_TYPE.endtime && (r = parseInt(i.getAttribute("data-endtime")) || 0), a == e.const.COUNTDOWN_TYPE.daily)) {
                                    var s = i.getAttribute("data-daily-start"),
                                        c = i.getAttribute("data-daily-end");
                                    if (!e.isEmpty(s) && !e.isEmpty(c)) {
                                        var d = new Date().toDateString();
                                        (n = new Date(d + " " + s).getTime()), (r = new Date(d + " " + c).getTime());
                                    }
                                }
                                i.setAttribute("data-date-start", n), i.setAttribute("data-date-end", r);
                            }
                            if (!(n > o)) {
                                var u = r - o;
                                u < 0 && (u = 0);
                                for (var p = e.getCountdownTime(u), m = i.querySelectorAll("[data-item-type]"), g = 0; g < m.length; g++)
                                    m[g].querySelectorAll(".ladi-countdown-text span")[0].textContent = p[m[g].getAttribute("data-item-type")];
                            }
                        }
                    }
                });
            })(),
            (e.runtime.interval_countdown = e.runInterval(d, 1e3)),
            p.forEach(function (t) {
                var i = e.runtime.eventData[t];
                if ("gallery" == i.type) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a)) {
                        a.hasAttribute("data-scrolled") ||
                            (a.setAttribute("data-scrolled", !1),
                            (e.runtime.list_scroll_func[t] = function () {
                                a.setAttribute("data-scrolled", !0);
                            }));
                        var n = i[e.runtime.device + ".option.gallery_control.autoplay"],
                            r = i[e.runtime.device + ".option.gallery_control.autoplay_time"],
                            o = 0;
                        n && !e.isEmpty(r) && (o = r);
                        var l = function (e) {
                                D(e, t, a);
                            },
                            s = function (i) {
                                i.stopPropagation(),
                                    (i = e.getEventCursorData(i)),
                                    e.isEmpty(e.runtime.timeout_gallery[t]) && ((e.runtime.current_element_mouse_down_gallery_view = t), (e.runtime.current_element_mouse_down_gallery_view_position_x = i.pageX));
                            },
                            c = function (i) {
                                i.stopPropagation(),
                                    (i = e.getEventCursorData(i)),
                                    (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) &&
                                        ((e.runtime.current_element_mouse_down_gallery_control = t),
                                        (e.runtime.current_element_mouse_down_gallery_control_time = Date.now()),
                                        (e.runtime.current_element_mouse_down_gallery_control_position_x = i.pageX),
                                        a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("transition-duration", "0ms"),
                                        a.getElementsByClassName("ladi-gallery-control-box")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).left));
                            };
                        a.getElementsByClassName("ladi-gallery-view-arrow-left")[0].addEventListener("click", function (e) {
                            e.stopPropagation(), a.setAttribute("data-is-next", !1), a.setAttribute("data-next-time", Date.now() + 1e3 * o), k(t, !1);
                        }),
                            a.getElementsByClassName("ladi-gallery-view-arrow-right")[0].addEventListener("click", function (e) {
                                e.stopPropagation(), a.setAttribute("data-is-next", !0), a.setAttribute("data-next-time", Date.now() + 1e3 * o), k(t, !1);
                            }),
                            a.getElementsByClassName("ladi-gallery-control-arrow-left")[0].addEventListener("click", function (t) {
                                t.stopPropagation();
                                var i = a.getElementsByClassName("ladi-gallery-control-item")[0];
                                if (!e.isEmpty(i)) {
                                    var n = getComputedStyle(i);
                                    if (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                        var r = (parseFloatLadiPage(n.width) || 0) + (parseFloatLadiPage(n.marginRight) || 0);
                                        (r += parseFloatLadiPage(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 && (r = 0),
                                            a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", r + "px");
                                    } else {
                                        var l = (parseFloatLadiPage(n.height) || 0) + (parseFloatLadiPage(n.marginBottom) || 0);
                                        (l += parseFloatLadiPage(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 && (l = 0),
                                            a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", l + "px");
                                    }
                                    a.setAttribute("data-next-time", Date.now() + 1e3 * o);
                                }
                            }),
                            a.getElementsByClassName("ladi-gallery-control-arrow-right")[0].addEventListener("click", function (t) {
                                t.stopPropagation();
                                var i = a.getElementsByClassName("ladi-gallery-control-item")[0];
                                if (!e.isEmpty(i)) {
                                    var n = getComputedStyle(i);
                                    if (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                        var r = (parseFloatLadiPage(n.width) || 0) + (parseFloatLadiPage(n.marginRight) || 0);
                                        r = -r + (parseFloatLadiPage(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0);
                                        var l = parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                        r < (l = (l = -(l -= parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : l) && (r = l),
                                            a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", r + "px");
                                    } else {
                                        var s = (parseFloatLadiPage(n.height) || 0) + (parseFloatLadiPage(n.marginBottom) || 0);
                                        s = -s + (parseFloatLadiPage(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0);
                                        var c = parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                        s < (c = (c = -(c -= parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : c) && (s = c),
                                            a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", s + "px");
                                    }
                                    a.setAttribute("data-next-time", Date.now() + 1e3 * o);
                                }
                            }),
                            a.getElementsByClassName("ladi-gallery-view")[0].addEventListener("mousedown", s),
                            a.getElementsByClassName("ladi-gallery-view")[0].addEventListener("touchstart", s),
                            a.getElementsByClassName("ladi-gallery-control")[0].addEventListener("mousedown", c),
                            a.getElementsByClassName("ladi-gallery-control")[0].addEventListener("touchstart", c);
                        for (var d = a.getElementsByClassName("ladi-gallery-control-item"), u = 0; u < d.length; u++) d[u].addEventListener("click", l);
                    }
                }
            }),
            (e.runtime.interval_gallery = e.runInterval(function () {
                p.forEach(function (t) {
                    var i = e.runtime.eventData[t];
                    if ("gallery" == i.type) {
                        var a = document.getElementById(t);
                        if (!e.isEmpty(a) && "true" == a.getAttribute("data-scrolled")) {
                            var n = i[e.runtime.device + ".option.gallery_control.autoplay"],
                                r = i[e.runtime.device + ".option.gallery_control.autoplay_time"],
                                o = 0;
                            if ((n && !e.isEmpty(r) && (o = r), o > 0)) {
                                var l = a.getAttribute("data-next-time"),
                                    s = Date.now();
                                e.isEmpty(l) && ((l = s + 1e3 * (o - 1)), a.setAttribute("data-next-time", l)), s >= l && (k(t, !0), a.setAttribute("data-next-time", s + 1e3 * o));
                            }
                        }
                    }
                });
            }, 1e3)),
            p.forEach(function (t) {
                var i = e.runtime.eventData[t];
                if ("carousel" == i.type) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a)) {
                        a.hasAttribute("data-scrolled") ||
                            (a.setAttribute("data-scrolled", !1),
                            (e.runtime.list_scroll_func[t] = function () {
                                a.setAttribute("data-scrolled", !0);
                            }));
                        var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                            r = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                            o = 0;
                        n && !e.isEmpty(r) && (o = r);
                        var l = function (i) {
                            i.stopPropagation(),
                                (i = e.getEventCursorData(i)),
                                (!e.isEmpty(e.runtime.timenext_carousel[t]) && e.runtime.timenext_carousel[t] > Date.now()) ||
                                    ((e.runtime.timenext_carousel[t] = Date.now() + 864e5),
                                    (e.runtime.current_element_mouse_down_carousel = t),
                                    (e.runtime.current_element_mouse_down_carousel_position_x = i.pageX),
                                    a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "0ms"),
                                    a.getElementsByClassName("ladi-carousel-content")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).left));
                        };
                        a.getElementsByClassName("ladi-carousel-arrow-left")[0].addEventListener("click", function (e) {
                            e.stopPropagation(),
                                a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"),
                                a.setAttribute("data-is-next", !1),
                                a.setAttribute("data-next-time", Date.now() + 1e3 * o),
                                R(t, !1);
                        }),
                            a.getElementsByClassName("ladi-carousel-arrow-right")[0].addEventListener("click", function (e) {
                                e.stopPropagation(),
                                    a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"),
                                    a.setAttribute("data-is-next", !0),
                                    a.setAttribute("data-next-time", Date.now() + 1e3 * o),
                                    R(t, !1);
                            }),
                            a.getElementsByClassName("ladi-carousel")[0].addEventListener("mousedown", l),
                            a.getElementsByClassName("ladi-carousel")[0].addEventListener("touchstart", l);
                    }
                }
            }),
            (e.runtime.interval_carousel = e.runInterval(function () {
                p.forEach(function (t) {
                    var i = e.runtime.eventData[t];
                    if ("carousel" == i.type) {
                        var a = document.getElementById(t);
                        if (!e.isEmpty(a) && "true" == a.getAttribute("data-scrolled")) {
                            var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                                r = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                                o = 0;
                            if ((n && !e.isEmpty(r) && (o = r), o > 0)) {
                                var l = a.getAttribute("data-next-time"),
                                    s = Date.now();
                                e.isEmpty(l) && ((l = s + 1e3 * (o - 1)), a.setAttribute("data-next-time", l)), s >= l && (R(t, !0), a.setAttribute("data-next-time", s + 1e3 * o));
                            }
                        }
                    }
                });
            }, 1e3)),
            (function () {
                var t = ["email", "coupon"],
                    i = document.querySelectorAll(".ladi-form .ladi-button");
                e.runtime.tmp.list_form_checkout = [];
                for (
                    var a = function (t, i) {
                            var a = e.findAncestor(t.target, "ladi-form");
                            if (!e.isEmpty(a) && ((a = a.querySelector("[data-submit-form-id]")), !e.isEmpty(a))) {
                                var n = a.getAttribute("data-submit-form-id");
                                if (!e.isEmpty(n)) {
                                    var r = document.querySelector("#" + n + ' .ladi-form-item input[name="coupon"]');
                                    e.isEmpty(r) || ((r.value = t.target.value), e.fireEvent(r, i));
                                }
                            }
                        },
                        n = function (t) {
                            a(t, "change");
                        },
                        r = function (t) {
                            a(t, "input");
                        },
                        o = 0;
                    o < i.length;
                    o++
                ) {
                    var l = e.findAncestor(i[o], "ladi-element");
                    if (!e.isEmpty(l)) {
                        var s = e.findAncestor(i[o], "ladi-form");
                        if (!e.isEmpty(s)) {
                            var c = e.findAncestor(s, "ladi-element");
                            if (!e.isEmpty(c)) {
                                var d = e.runtime.eventData[l.id];
                                if (!e.isEmpty(d) && !e.isEmpty(d["option.data_submit_form_id"])) {
                                    var u = e.runtime.eventData[c.id];
                                    if (!e.isEmpty(u) && u["option.is_form_coupon"]) {
                                        l.setAttribute("data-submit-form-id", d["option.data_submit_form_id"]),
                                            l.addEventListener("click", e.reloadPriceDiscount),
                                            (s.onsubmit = function () {
                                                return !1;
                                            });
                                        var p = s.querySelector('.ladi-form-item input[name="coupon"]');
                                        e.isEmpty(p) || (p.addEventListener("change", n), p.addEventListener("input", r)), e.runtime.tmp.list_form_checkout.push(d["option.data_submit_form_id"]);
                                    }
                                }
                            }
                        }
                    }
                }
                e.runtime.tmp.list_form_checkout = e.runtime.tmp.list_form_checkout.unique();
                for (
                    var m = function (t) {
                            e.reloadPriceDiscount();
                        },
                        g = 0;
                    g < e.runtime.tmp.list_form_checkout.length;
                    g++
                )
                    for (var y = document.querySelectorAll("#" + e.runtime.tmp.list_form_checkout[g] + " .ladi-form-item input.ladi-form-control"), _ = 0; _ < y.length; _++)
                        -1 != t.indexOf(y[_].getAttribute("name")) && (y[_].addEventListener("change", m), y[_].addEventListener("input", m));
            })(),
            (function () {
                p.forEach(function (t) {
                    var i = e.runtime.eventData[t];
                    if (!e.isEmpty(i["option.data_action"])) {
                        var a = document.getElementById(t);
                        if (!e.isEmpty(a) && "true" != a.getAttribute("data-action") && i["option.data_action"].type == e.const.DATA_ACTION_TYPE.link) {
                            var n = e.getLinkUTMRedirect(a.href, window.location.search);
                            a.setAttribute("data-replace-href", n), (a.href = e.convertDataReplaceStr(n, !0));
                        }
                    }
                });
                for (var t = document.querySelectorAll(".ladi-headline a[href], .ladi-paragraph a[href], .ladi-list-paragraph a[href]"), i = 0; i < t.length; i++) {
                    var a = e.getLinkUTMRedirect(t[i].href, window.location.search);
                    t[i].setAttribute("data-replace-href", a), (t[i].href = e.convertDataReplaceStr(a, !0));
                }
            })(),
            t &&
                e.const.TIME_ONPAGE_TRACKING.forEach(function (t) {
                    e.runTimeout(function () {
                        e.isFunction(window.gtag) && window.gtag("event", "TimeOnPage_" + t + "_seconds", { event_category: "LadiPageTimeOnPage", event_label: window.location.host + window.location.pathname, non_interaction: !0 }),
                            e.isFunction(window.fbq);
                    }, 1e3 * t);
                }),
            p.forEach(function (t) {
                var i = document.getElementById(t);
                if (!e.isEmpty(i)) {
                    var a = e.runtime.eventData[t],
                        n = a["option.data_tooltip.text"];
                    if (!e.isEmpty(n)) {
                        var r = a["option.data_tooltip.type"] || e.const.TOOLTIP_TYPE.default,
                            o = a["option.data_tooltip.position"] || e.const.TOOLTIP_POSITION.top_middle,
                            l = a["option.data_tooltip.size"] || e.const.TOOLTIP_SIZE.medium;
                        i.setAttribute("data-hint", n);
                        var s = "hint";
                        o == e.const.TOOLTIP_POSITION.top_middle && (s += "-top-middle"),
                            o == e.const.TOOLTIP_POSITION.top_left && (s += "-top-left"),
                            o == e.const.TOOLTIP_POSITION.top_right && (s += "-top-right"),
                            o == e.const.TOOLTIP_POSITION.bottom_middle && (s += "-bottom-middle"),
                            o == e.const.TOOLTIP_POSITION.bottom_left && (s += "-bottom-left"),
                            o == e.const.TOOLTIP_POSITION.bottom_right && (s += "-bottom-right"),
                            o == e.const.TOOLTIP_POSITION.left_middle && (s += "-left-middle"),
                            o == e.const.TOOLTIP_POSITION.left_top && (s += "-left-top"),
                            o == e.const.TOOLTIP_POSITION.left_bottom && (s += "-left-bottom"),
                            o == e.const.TOOLTIP_POSITION.right_middle && (s += "-right-middle"),
                            o == e.const.TOOLTIP_POSITION.right_top && (s += "-right-top"),
                            o == e.const.TOOLTIP_POSITION.right_bottom && (s += "-right-bottom"),
                            r == e.const.TOOLTIP_TYPE.info && (s += "-t-info"),
                            r == e.const.TOOLTIP_TYPE.success && (s += "-t-success"),
                            r == e.const.TOOLTIP_TYPE.error && (s += "-t-error"),
                            r == e.const.TOOLTIP_TYPE.notice && (s += "-t-notice"),
                            l == e.const.TOOLTIP_SIZE.small && (s += "-s-small"),
                            l == e.const.TOOLTIP_SIZE.medium && (s += "-s-med"),
                            l == e.const.TOOLTIP_SIZE.big && (s += "-s-big"),
                            (s += "-hint-anim-d-short"),
                            i.classList.add(s);
                    }
                }
            }),
            (function () {
                for (
                    var t = 2500,
                        i = 3800,
                        a = 800,
                        n = 50,
                        r = 150,
                        o = 500,
                        l = 1300,
                        s = 600,
                        c = 1500,
                        d = t,
                        u = function (i, a, n, r) {
                            e.isEmpty(i) || (i.classList.remove("in"), i.classList.add("out"));
                            var o = e.isEmpty(i) ? null : i.nextSibling;
                            if (
                                (e.isEmpty(o)
                                    ? n &&
                                      e.runTimeout(function () {
                                          _(m(a));
                                      }, t)
                                    : e.runTimeout(function () {
                                          u(o, a, n, r);
                                      }, r),
                                e.isEmpty(o) && document.querySelectorAll("html")[0].classList.contains("no-csstransitions"))
                            ) {
                                var l = m(a);
                                g(a, l);
                            }
                        },
                        p = function (i, a, n, r) {
                            var o = a.parentElement,
                                l = o.parentElement;
                            l.classList.contains("ladipage-animated-headline") || (l = l.parentElement), e.isEmpty(i) || (i.classList.add("in"), i.classList.remove("out"));
                            var s = e.isEmpty(i) ? null : i.nextSibling;
                            e.isEmpty(s)
                                ? ((l.classList.contains("rotate-2") || l.classList.contains("rotate-3") || l.classList.contains("scale")) && o.style.setProperty("width", a.clientWidth + "px"),
                                  e.isEmpty(e.findAncestor(a, "type")) ||
                                      e.runTimeout(function () {
                                          var t = e.findAncestor(a, "ladipage-animated-words-wrapper");
                                          e.isEmpty(t) || t.classList.add("waiting");
                                      }, 200),
                                  n ||
                                      e.runTimeout(function () {
                                          _(a);
                                      }, t))
                                : e.runTimeout(function () {
                                      p(s, a, n, r);
                                  }, r);
                        },
                        m = function (t) {
                            var i = t.nextSibling;
                            return e.isEmpty(i) || i.classList.contains("after") ? t.parentElement.firstChild : i;
                        },
                        g = function (t, e) {
                            t.classList.remove("is-visible"), t.classList.add("is-hidden"), e.classList.remove("is-hidden"), e.classList.add("is-visible");
                        },
                        y = function (t, i) {
                            e.isEmpty(e.findAncestor(t, "type"))
                                ? e.isEmpty(e.findAncestor(t, "clip")) ||
                                  (e.findAncestor(t, "ladipage-animated-words-wrapper").style.setProperty("width", t.clientWidth + 5 + "px"),
                                  e.runTimeout(function () {
                                      _(t);
                                  }, s + c))
                                : (p(t.querySelectorAll("i")[0], t, !1, i), t.classList.add("is-visible"), t.classList.remove("is-hidden"));
                        },
                        _ = function (c) {
                            if (!e.isEmpty(c)) {
                                var d = m(c);
                                if (e.isEmpty(e.findAncestor(c, "type")))
                                    if (e.isEmpty(e.findAncestor(c, "letters")))
                                        e.isEmpty(e.findAncestor(c, "clip"))
                                            ? e.isEmpty(e.findAncestor(c, "loading-bar"))
                                                ? (g(c, d),
                                                  e.runTimeout(function () {
                                                      _(d);
                                                  }, t))
                                                : (e.findAncestor(c, "ladipage-animated-words-wrapper").classList.remove("is-loading"),
                                                  g(c, d),
                                                  e.runTimeout(function () {
                                                      _(d);
                                                  }, i),
                                                  e.runTimeout(function () {
                                                      e.findAncestor(c, "ladipage-animated-words-wrapper").classList.add("is-loading");
                                                  }, a))
                                            : (e.findAncestor(c, "ladipage-animated-words-wrapper").style.setProperty("width", "2px"),
                                              e.runTimeout(function () {
                                                  g(c, d), y(d);
                                              }, s));
                                    else {
                                        var f = c.querySelectorAll("i").length >= d.querySelectorAll("i").length;
                                        u(c.querySelectorAll("i")[0], c, f, n), p(d.querySelectorAll("i")[0], d, f, n);
                                    }
                                else {
                                    var h = e.findAncestor(c, "ladipage-animated-words-wrapper");
                                    h.classList.add("selected"),
                                        h.classList.remove("waiting"),
                                        e.runTimeout(function () {
                                            h.classList.remove("selected"), c.classList.remove("is-visible"), c.classList.add("is-hidden");
                                            for (var t = c.querySelectorAll("i"), e = 0; e < t.length; e++) t[e].classList.remove("in"), t[e].classList.add("out");
                                        }, o),
                                        e.runTimeout(function () {
                                            y(d, r);
                                        }, l);
                                }
                            }
                        },
                        f = function (t) {
                            var n = !1;
                            if (
                                (e.const.ANIMATED_LIST.forEach(function (e) {
                                    t.classList.contains(e) && (n = !0);
                                }),
                                n)
                            ) {
                                var r = t.getElementsByClassName("ladipage-animated-words-wrapper")[0];
                                if (!e.isEmpty(r)) {
                                    var o = e.isEmpty(r.getAttribute("data-word")) ? [] : JSON.parse(r.getAttribute("data-word"));
                                    if (0 != o.length) {
                                        var l = r.textContent.trim();
                                        if (
                                            ((r.textContent = ""),
                                            (r.innerHTML = r.innerHTML + '<b class="is-visible">' + l + "</b>"),
                                            o.forEach(function (t) {
                                                e.isEmpty(t) ? (r.innerHTML = r.innerHTML + "<b>" + l + "</b>") : (r.innerHTML = r.innerHTML + "<b>" + t.trim() + "</b>");
                                            }),
                                            !e.isEmpty(e.findAncestor(r, "type")) || !e.isEmpty(e.findAncestor(r, "loading-bar")) || !e.isEmpty(e.findAncestor(r, "clip")))
                                        ) {
                                            r.innerHTML = r.innerHTML + '<div class="after"></div>';
                                            for (var s = getComputedStyle(r).color, c = r.getElementsByClassName("after"), u = 0; u < c.length; u++) c[u].style.setProperty("background-color", s);
                                        }
                                        if (
                                            (t.classList.contains("type") && r.classList.add("waiting"),
                                            (t.classList.contains("type") || t.classList.contains("rotate-2") || t.classList.contains("rotate-3") || t.classList.contains("scale")) && t.classList.add("letters"),
                                            (function (t) {
                                                for (var i = 0; i < t.length; i++) {
                                                    var a = t[i],
                                                        n = a.textContent.trim().split(""),
                                                        r = a.classList.contains("is-visible");
                                                    for (var o in n) {
                                                        " " == n[o] && (n[o] = "&nbsp;");
                                                        var l = e.findAncestor(a, "rotate-2");
                                                        e.isEmpty(l) || (n[o] = "<em>" + n[o] + "</em>"), (n[o] = r ? '<i class="in">' + n[o] + "</i>" : "<i>" + n[o] + "</i>");
                                                    }
                                                    var s = n.join("");
                                                    (a.innerHTML = s), a.style.setProperty("opacity", 1);
                                                }
                                            })(document.querySelectorAll(".letters b")),
                                            t.classList.contains("loading-bar"))
                                        )
                                            (d = i),
                                                e.runTimeout(function () {
                                                    r.classList.add("is-loading");
                                                }, a);
                                        else if (t.classList.contains("clip")) {
                                            var p = r.clientWidth + 5;
                                            r.style.setProperty("width", p + "px");
                                        }
                                        e.runTimeout(function () {
                                            _(t.getElementsByClassName("is-visible")[0]);
                                        }, d);
                                    }
                                }
                            }
                        },
                        h = document.getElementsByClassName("ladipage-animated-headline"),
                        v = 0;
                    v < h.length;
                    v++
                )
                    f(h[v]);
            })(),
            (function () {
                for (
                    var t = document.querySelectorAll(".ladi-button-group > .ladi-element"),
                        i = function (t) {
                            var i = e.findAncestor(t.target, "ladi-button");
                            (i = e.isEmpty(i) ? t.target : e.findAncestor(i, "ladi-element")).classList.add("selected");
                            var a = e.findAncestor(t.target, "ladi-button-group");
                            if (!e.isEmpty(a)) for (var n = (a = e.findAncestor(a, "ladi-element")).querySelectorAll(".ladi-button-group > .ladi-element"), r = 0; r < n.length; r++) n[r].id != i.id && n[r].classList.remove("selected");
                        },
                        a = 0;
                    a < t.length;
                    a++
                )
                    t[a].addEventListener("click", i);
            })(),
            document.addEventListener("mouseleave", e.runEventMouseLeave),
            document.addEventListener("mousemove", e.runEventMouseMove),
            document.addEventListener("touchmove", e.runEventMouseMove),
            document.addEventListener("mouseup", e.runEventMouseUp),
            document.addEventListener("touchend", e.runEventMouseUp),
            window.addEventListener("scroll", e.runEventScroll),
            window.addEventListener("resize", e.runEventResize),
            window.addEventListener("orientationchange", e.runEventOrientationChange),
            document.getElementById(e.runtime.backdrop_popup_id).addEventListener("click", e.runEventBackdropClick),
            e.reloadLazyload(),
            (function () {
                if (t) {
                    var i = function () {
                            if (((e.runtime.ladipage_powered_by_classname = e.randomString(e.randomInt(6, 32))), e.runtime.isClient)) {
                                var t = document.createElement(e.randomString(6));
                                document.body.insertBefore(t, document.body.childNodes[e.randomInt(0, document.body.childNodes.length)]), (t.className = e.runtime.ladipage_powered_by_classname);
                                var i =
                                        "." +
                                        e.runtime.ladipage_powered_by_classname +
                                        ' {width: 0px; height: 0px; position: fixed; bottom: 0px; right: 0px; z-index: 10000000000; background: url("' +
                                        e.const.POWERED_BY_IMAGE +
                                        '") no-repeat center #fafafa; background-size: 0px; border-radius: 0px 0px 0 0; display: block; animation: ' +
                                        e.runtime.ladipage_powered_by_classname +
                                        " 5s;} @keyframes " +
                                        e.runtime.ladipage_powered_by_classname +
                                        " {0% {bottom: 0px;} 20% {bottom: 0;} 80% {bottom: 0;} 100% {bottom: 0px;}}",
                                    a = document.createElement("style");
                                (a.type = "text/css"),
                                    document.head.insertBefore(a, document.head.childNodes[e.randomInt(0, document.head.childNodes.length)]),
                                    (a.innerHTML = i),
                                    e.runTimeout(function () {
                                        e.isEmpty(t) || t.parentElement.removeChild(t), e.isEmpty(a) || a.parentElement.removeChild(a);
                                    }, 5e3);
                            }
                        },
                        a = !1,
                        n = e.isArray(e.runtime.DOMAIN_FREE) ? e.runtime.DOMAIN_FREE : [],
                        r = window.location.href;
                    ["/", ".", "/"].forEach(function (t) {
                        for (; r.endsWith(t); ) r = r.substr(0, r.length - t.length);
                    });
                    var o = e.getElementAHref(r).host.toLowerCase();
                    n.forEach(function (t) {
                        a || (a = o.endsWith(t.toLowerCase()));
                    }),
                        a && e.runTimeout(i, 3e3),
                        I("PageView", {}, function (t, n) {
                            if ((-1 != t || a || e.runTimeout(i, 3e3), 200 == t)) {
                                var r = JSON.parse(n),
                                    o = !1,
                                    l = null;
                                e.isObject(r.data) ? ((o = 1 == r.data.verified_domain), (l = r.data.google_captcha)) : (o = 1 == r.data),
                                    a || o || e.runTimeout(i, 3e3),
                                    e.isObject(l) && ((s = l.site_key), e.isEmpty(s) || ((e.runtime.tmp.google_captcha = { api_key: s }), e.loadScript("//www.google.com/recaptcha/api.js?render=" + s)));
                            }
                            var s;
                        });
                }
            })(),
            e.setDataReplaceStart(),
            e.resetViewport(),
            e.runConversionApi(),
            t || e.runAfterLocation(),
            "complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll) ? e.documentLoaded() : document.addEventListener("DOMContentLoaded", e.documentLoaded);
    }),
    (LadiPageScriptV2.prototype.equals = function (t, e) {
        return typeof t == typeof e && JSON.stringify(t) == JSON.stringify(e);
    }),
    (LadiPageScriptV2.prototype.copy = function (t) {
        return this.isNull(t) ? t : JSON.parse(JSON.stringify(t));
    }),
    (LadiPageScriptV2.prototype.showLoadingBlur = function () {
        var t = document.getElementsByClassName("ladi-loading")[0];
        this.isEmpty(t) &&
            (((t = document.createElement("div")).className = "ladi-loading"),
            (t.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"),
            document.body.appendChild(t));
    }),
    (LadiPageScriptV2.prototype.hideLoadingBlur = function () {
        var t = document.getElementsByClassName("ladi-loading")[0];
        this.isEmpty(t) || t.parentElement.removeChild(t);
    }),
    (LadiPageScriptV2.prototype.loadDataset = function () {}),
    (LadiPageScriptV2.prototype.updateHeightElement = function (t, e, i, a, n, r) {
        for (var o = this, l = [], s = [], c = e.parentElement.children, d = 0; d < c.length; d++) c[d].id != e.id && c[d].classList.contains("ladi-element") && s.push(c[d]);
        var u = "style_update_height_element";
        if (t) {
            var p = "#" + o.runtime.builder_section_popup_id + " > .ladi-container > .ladi-element{ max-height: none !important;}";
            LadiPageScript.createStyleElement(u, p);
        }
        for (
            var m = function (t) {
                    var e = !o.isArray(r) || -1 != r.indexOf(t.id);
                    return (e = e ? t.id != o.runtime.builder_section_popup_id : e) && "fixed" == getComputedStyle(t).position && ((t.classList.contains("ladi-element") && 0 != t.getElementsByClassName("ladi-popup").length) || (e = !1)), e;
                },
                g = n - a,
                y = parseFloatLadiPage(getComputedStyle(e).top) || 0,
                _ = 0;
            _ < s.length;
            _++
        )
            if (m(s[_])) {
                var f = parseFloatLadiPage(getComputedStyle(s[_]).top) || 0;
                f >= y + a && (s[_].style.setProperty("top", (parseFloatLadiPage(f + g) || 0) + "px"), l.push(s[_].id));
            }
        var h = 0,
            v = 0;
        if ((!this.isEmpty(i) && 0 != g && m(i) && ((h = parseFloatLadiPage(getComputedStyle(i).height) || 0), (v = parseFloatLadiPage(h + g) || 0), i.style.setProperty("height", v + "px"), l.push(i.id)), h != v)) {
            var E = this.findAncestor(i.parentElement, "ladi-element");
            this.isEmpty(E) && (E = this.findAncestor(i.parentElement, "ladi-section")), (l = l.concat(this.updateHeightElement(!1, i, E, h, v, r)));
        }
        if (t) {
            var L = document.getElementById(u);
            this.isEmpty(L) || L.parentElement.removeChild(L);
        }
        return l.unique();
    }),
    (LadiPageScriptV2.prototype.showParentVisibility = function (t, e) {
        var i = this.findAncestor(t, "ladi-popup");
        if (!this.isEmpty(i) && ((i = this.findAncestor(i, "ladi-element")), !this.isEmpty(i)))
            return "none" == getComputedStyle(i).display && i.classList.add("hide-visibility"), this.isFunction(e) && e(), void i.classList.remove("hide-visibility");
        this.isFunction(e) && e();
    }),
    (LadiPageScriptV2.prototype.pauseAllVideo = function (t) {
        var e = document.getElementById(this.runtime.lightbox_screen_id).getElementsByClassName("lightbox-close")[0];
        if (!this.isEmpty(e)) return e.click(), this.pauseAllVideo(t);
        delete this.runtime.tmp.gallery_playing_video;
        for (var i = (t = t || document).querySelectorAll(".iframe-video-preload:not(.no-pause)"), a = 0; a < i.length; a++) this.runEventReplayVideo(i[a].id, i[a].getAttribute("data-video-type"), !1);
    }),
    (LadiPageScriptV2.prototype.runEventReplayVideo = function (t, e, i) {
        var a = document.getElementById(t);
        if (!this.isEmpty(a)) {
            if (e == this.const.VIDEO_TYPE.youtube) {
                var n = i ? "playVideo" : "pauseVideo",
                    r = !1;
                if (this.runtime.isYouTubeIframeAPIReady) {
                    var o = window.YT.get(t);
                    this.isEmpty(o) || (i && o.unMute(), o[n](), (r = !0));
                }
                r || (i && a.contentWindow.postMessage(JSON.stringify({ event: "command", func: "unMute", args: [] }), "*"), a.contentWindow.postMessage(JSON.stringify({ event: "command", func: n, args: [] }), "*"));
            }
            e == this.const.VIDEO_TYPE.direct && (i ? ((a.muted = !1), a.play()) : a.pause()), i ? a.classList.remove("ladi-hidden") : a.classList.add("ladi-hidden");
        }
    }),
    (LadiPageScriptV2.prototype.runEventPlayVideo = function (t, e, i, a, n, r, o, l, s) {
        var c = this,
            d = document.getElementById(t);
        if (!c.isEmpty(d)) {
            var u = c.findAncestor(d, "ladi-video");
            c.isEmpty(u) || (u = c.findAncestor(u, "ladi-element")), !a || r || c.isEmpty(u) || (u.classList.add("pointer-events-none"), d.classList.add("no-pause")), o && d.classList.add("ladi-hidden");
            var p = "";
            if (!c.isEmpty(u)) {
                var m = u.getElementsByClassName("ladi-video-background")[0];
                if (!c.isEmpty(m)) {
                    var g = getComputedStyle(m).backgroundImage;
                    g.toLowerCase().startsWith('url("') && g.toLowerCase().endsWith('")') && ((g = (g = g.substr('url("'.length)).substr(0, g.length - '")'.length)), c.isEmpty(g) || (p = g));
                }
            }
            var y = !0;
            if (e == c.const.VIDEO_TYPE.youtube) {
                var _ = c.getVideoId(e, i),
                    f = function () {
                        try {
                            if (
                                ((c.runtime.isLoadYouTubeIframeAPI && c.runtime.isYouTubeIframeAPIReady) ||
                                    !c.isObject(window.YT) ||
                                    !c.isFunction(window.YT.Player) ||
                                    ((c.runtime.isLoadYouTubeIframeAPI = !0), (c.runtime.isYouTubeIframeAPIReady = !0)),
                                c.runtime.isLoadYouTubeIframeAPI ||
                                    ((c.runtime.isLoadYouTubeIframeAPI = !0),
                                    (window.onYouTubeIframeAPIReady = function () {
                                        c.runtime.isYouTubeIframeAPIReady = !0;
                                        for (; c.runtime.list_youtube_ready_exec.length > 0; ) c.runtime.list_youtube_ready_exec.shift()();
                                    }),
                                    c.loadScript("//www.youtube.com/iframe_api")),
                                !c.runtime.isYouTubeIframeAPIReady)
                            )
                                return void c.runtime.list_youtube_ready_exec.push(f);
                            (d.outerHTML = d.outerHTML.replaceAll("<iframe", "<div").replaceAll("</iframe>", "</div>")), (d = document.getElementById(t)), n && d.classList.add("opacity-0");
                            var e = function () {
                                    (d = document.getElementById(t)).classList.remove("opacity-0");
                                },
                                i = e,
                                u = function (e) {
                                    d = document.getElementById(t);
                                    var i = window.YT.get(t);
                                    c.isEmpty(i) || c.isEmpty(d) ? c.runTimeout(u, 100) : (c.runResizeAll(), a ? i.mute() : i.unMute(), o || l || i.playVideo(), c.isFunction(s) && s());
                                };
                            new window.YT.Player(t, {
                                videoId: _,
                                playerVars: { rel: 0, modestbranding: 0, playsinline: n || a ? 1 : 0, controls: !n && r ? 1 : 0 },
                                events: {
                                    onReady: u,
                                    onStateChange: function (i) {
                                        if (y && i.data == window.YT.PlayerState.PLAYING) {
                                            y = !1;
                                            var a = function () {
                                                window.YT.get(t).getCurrentTime() >= 0.1 ? e() : c.runTimeout(a, 100);
                                            };
                                            n && a();
                                        }
                                        i.data == window.YT.PlayerState.ENDED && window.YT.get(t).playVideo();
                                    },
                                    onError: i,
                                },
                            });
                        } catch (t) {}
                    };
                f();
            }
            e == c.const.VIDEO_TYPE.direct &&
                (c.isEmpty(p) || d.setAttribute("poster", p),
                d.setAttribute("preload", "auto"),
                d.setAttribute("controlslist", "nodownload"),
                d.setAttribute("loop", ""),
                o || l || d.setAttribute("autoplay", ""),
                (n || a) && (d.setAttribute("playsinline", ""), d.setAttribute("webkit-playsinline", "")),
                !n && r && d.setAttribute("controls", ""),
                a ? d.setAttribute("muted", "") : d.removeAttribute("muted"),
                d.removeAttribute("src"),
                d.setAttribute("data-src", i),
                (d.outerHTML = d.outerHTML.replaceAll("data-src=", "src=")),
                (d = document.getElementById(t)),
                c.isFunction(s) && s(d));
        }
    }),
    (LadiPageScriptV2.prototype.playVideo = function (t, e, i, a, n, r) {
        var o = document.getElementById(t);
        if (!this.isEmpty(o)) {
            var l = document.getElementById(t + "_player");
            if ((r || n || this.pauseAllVideo(), this.isEmpty(l))) {
                var s = o.getElementsByClassName("ladi-video")[0],
                    c = t + "_player";
                e == this.const.VIDEO_TYPE.youtube &&
                    ((s.innerHTML =
                        s.innerHTML +
                        '<iframe id="' +
                        c +
                        '" class="iframe-video-preload" data-video-type="' +
                        e +
                        '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
                    this.runEventPlayVideo(c, e, i, n, !1, a, r)),
                    e == this.const.VIDEO_TYPE.direct &&
                        ((s.innerHTML = s.innerHTML + '<video id="' + c + '" class="iframe-video-preload" data-video-type="' + e + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>'),
                        this.runEventPlayVideo(c, e, i, n, !1, a, r));
            } else this.runEventReplayVideo(l.id, e, !0);
        }
    }),
    (LadiPageScriptV2.prototype.checkResizeImage = function (t) {
        var e = [".jpg", ".jpeg", ".png"],
            i = function (t) {
                for (var i = !1, a = 0; a < e.length; a++)
                    if (t.endsWith(e[a])) {
                        i = !0;
                        break;
                    }
                return i;
            };
        if (!i(t.toLowerCase())) {
            var a = this.getElementAHref(t, !0);
            return (a.search = ""), i(a.href);
        }
        return !0;
    }),
    (LadiPageScriptV2.prototype.getOptimizeImage = function (t, e, i, a, n, r, o) {
        if (this.isEmpty(t) || !this.isString(t)) return t;
        var l = t.split("/"),
            s = l.indexOf("");
        if (
            (-1 != s && l.length > s + 1 && (l[s + 1] = l[s + 1].toLowerCase()),
            (s = l.indexOf(this.const.STATIC_W_DOMAIN.toLowerCase())),
            this.checkResizeImage(t) && -1 != s && (l.length == s + 3 || (l.length == s + 6 && "ls" == l[3] && "product" == l[5]) || (l.length == s + 4 && "luid" == l[3] && "avatar" == l[4]) || (l.length == s + 4 && "rbg" == l[4])))
        ) {
            var c = l[s + 1].toLowerCase(),
                d = !0;
            if (c.startsWith("s")) {
                var u = c.split("x");
                2 == u.length && parseFloatLadiPage(u[1]) == u[1] && (d = !1);
            }
            if (d) {
                if (o || n) {
                    if (((e = parseInt(e) || 0), (i = parseInt(i) || 0), a)) {
                        var p = this.const.RESIZE_RANGE + (r ? this.const.RESIZE_ADD_PIXEL_THUMB : this.const.RESIZE_ADD_PIXEL);
                        (e = e - (e % this.const.RESIZE_RANGE) + p), (i = i - (i % this.const.RESIZE_RANGE) + p);
                    }
                } else (e = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen]), (i = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen]);
                l.insert(s + 1, "s" + e + "x" + i);
            }
        }
        return (t = l.join("/"));
    }),
    (LadiPageScriptV2.prototype.historyReplaceState = function (t) {
        try {
            window.history.replaceState(null, null, t);
        } catch (t) {}
    }),
    (LadiPageScriptV2.prototype.resetViewport = function () {
        this.isEmpty(this.runtime.tmp.timeoutViewport) || this.removeTimeout(this.runtime.tmp.timeoutViewport), this.isFunction(window.ladi_viewport) && (this.runtime.tmp.timeoutViewport = this.runTimeout(window.ladi_viewport, 10));
    }),
    (LadiPageScriptV2.prototype.runResizeSectionBackground = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        try {
            for (var e = document.querySelectorAll(".ladi-section .ladi-section-background iframe.ladi-section-background-video"), i = 0; i < e.length; i++) {
                var a = e[i],
                    n = parseFloatLadiPage(a.getAttribute("width")) || 0,
                    r = parseFloatLadiPage(a.getAttribute("height")) || 0;
                if (!(n <= 0 || r <= 0)) {
                    var o = t.findAncestor(a, "ladi-section-background"),
                        l = o.clientWidth,
                        s = (r / n) * l;
                    s < o.clientHeight && ((l = (o.clientHeight / s) * l), (s = o.clientHeight));
                    var c = (o.clientHeight - s) / 2,
                        d = (o.clientWidth - l) / 2;
                    a.style.setProperty("top", (parseFloatLadiPage(c) || 0) + "px"),
                        a.style.setProperty("left", (parseFloatLadiPage(d) || 0) + "px"),
                        a.style.setProperty("width", (parseFloatLadiPage(l) || 0) + "px"),
                        a.style.setProperty("height", (parseFloatLadiPage(s) || 0) + "px");
                }
            }
        } catch (t) {}
    }),
    (LadiPageScriptV2.prototype.runResizeAll = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        try {
            t.isFunction(window.ladi_viewport) && window.ladi_viewport(), t.runtime.tmp.generateCart();
            for (var e = document.querySelectorAll("#" + t.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < e.length; i++) "block" == getComputedStyle(e[i]).display && window.ladi(e[i].id).show();
            t.runResizeSectionBackground();
        } catch (t) {}
    }),
    (LadiPageScriptV2.prototype.runEventResize = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.isEmpty(e.runtime.tmp.timeoutResizeAll) || e.removeTimeout(e.runtime.tmp.timeoutResizeAll), (e.runtime.tmp.timeoutResizeAll = e.runTimeout(e.runResizeAll, 10));
    }),
    (LadiPageScriptV2.prototype.runEventOrientationChange = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runEventResize(t);
    }),
    (LadiPageScriptV2.prototype.runAfterLocation = function () {
        var t = this;
        for (t instanceof LadiPageScriptV2 || (t = LadiPageScript); t.runtime.tmp.runAfterLocation.length > 0; ) {
            t.runtime.tmp.runAfterLocation.shift()();
        }
        t.reloadFeeShipping();
    }),
    (LadiPageScriptV2.prototype.randomId = function (t) {
        var e = Date.now(),
            i = (window.performance && window.performance.now && 1e3 * window.performance.now()) || 0,
            a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                var a = 16 * Math.random();
                return e > 0 ? ((a = (e + a) % 16 | 0), (e = Math.floor(e / 16))) : ((a = (i + a) % 16 | 0), (i = Math.floor(i / 16))), ("x" === t ? a : (3 & a) | 8).toString(16);
            });
        if (t) for (; "-" == a[0] || a[0] == parseInt(a[0]); ) a = a.substr(1);
        return a;
    }),
    (LadiPageScriptV2.prototype.removeLazyloadPopup = function (t) {
        var e = document.getElementById(t);
        if (!this.isEmpty(e)) for (var i = e.getElementsByClassName("ladi-lazyload"); i.length > 0; ) i[0].classList.remove("ladi-lazyload");
    }),
    (LadiPageScriptV2.prototype.reloadLazyload = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        for (var e = document.getElementsByClassName("ladi-lazyload"), i = [], a = 0; a < e.length; a++) {
            var n = t.getElementBoundingClientRect(e[a]).y + window.scrollY;
            window.scrollY + t.getHeightDevice() > n && n + e[a].offsetHeight > window.scrollY && i.push(e[a]);
        }
        i.forEach(function (t) {
            t.classList.remove("ladi-lazyload");
        });
        for (var r = document.querySelectorAll(".ladi-gallery .ladi-gallery-view-item.selected:not(.ladi-lazyload)"), o = 0; o < r.length; o++)
            if (t.isEmpty(r[o].getAttribute("data-lazyload"))) {
                r[o].setAttribute("data-lazyload", !0);
                for (var l = r[o].parentElement.getElementsByClassName("ladi-lazyload"); l.length > 0; ) l[0].classList.remove("ladi-lazyload");
            }
    }),
    (LadiPageScriptV2.prototype.documentLoaded = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        var e = t.getURLSearchParams(window.location.search, null, !0),
            i = e.ladishow,
            a = e.ladihide,
            n = e.laditop,
            r = window.location.hash;
        t.isEmpty(i) ? (i = []) : t.isArray(i) || (i = i.split(",").removeSpace()),
            t.isEmpty(a) ? (a = []) : t.isArray(a) || (a = a.split(",").removeSpace()),
            t.isEmpty(n) ? (n = []) : t.isArray(n) || (n = n.split(",").removeSpace().reverse());
        try {
            var o = window.ladi("LADI_CAMP_END_DATE").get_cookie(),
                l = window.ladi("LADI_CAMP_CONFIG").get_cookie();
            if (!t.isEmpty(o) && !t.isEmpty(l)) {
                l = JSON.parse(Base64.decode(l));
                var s = ((o = parseInt(o) || 0) - Date.now()) / 24 / 60 / 60 / 1e3;
                if (s > 0 && t.isArray(l.dynamic_content.cookie)) {
                    var c = [];
                    l.dynamic_content.cookie.forEach(function (e) {
                        var i = e.split("=");
                        2 != (i = i.removeSpace()).length || t.isEmpty(i[0]) || t.isEmpty(i[1]) || c.push({ name: i[0], value: i[1] });
                    }),
                        c.forEach(function (t) {
                            window.ladi(t.name).set_cookie(t.value, s, window.location.pathname);
                        });
                }
                (a = l.dynamic_content.hide || []),
                    (i = l.dynamic_content.show || []),
                    (n = l.dynamic_content.top || []),
                    t.isArray(l.dynamic_content.scroll) && l.dynamic_content.scroll.length > 0 && (r = "#" + l.dynamic_content.scroll.pop());
            }
        } catch (t) {}
        if (
            (a.forEach(function (t) {
                window.ladi(t).hide();
            }),
            i.forEach(function (t) {
                window.ladi(t).show();
            }),
            n.forEach(function (t) {
                window.ladi(t).top();
            }),
            !t.isEmpty(r))
        )
            try {
                var d = document.querySelector(r);
                t.isEmpty(d) ||
                    t.isEmpty(d.id) ||
                    t.runTimeout(function () {
                        window.ladi(d.id).scroll();
                    }, 300);
            } catch (t) {}
        if ((t.resetViewport(), t.runEventScroll(), !t.isEmpty(t.runtime.tracking_global_url))) {
            var u = !1,
                p = function () {
                    u || ((u = !0), t.loadScript(t.runtime.tracking_global_url + "?v=" + Date.now()));
                };
            document.addEventListener("scroll", p), document.addEventListener("mousemove", p), document.addEventListener("touchstart", p), t.runTimeout(p, t.runtime.tracking_global_delay);
        }
    }),
    (LadiPageScriptV2.prototype.runConversionApi = function (t, e, i) {
        !this.isEmpty(t) && !this.isEmpty(e) && this.isObject(window.ladi_conversion_api) && this.isObject(window.ladi_conversion_api[t]) && (window.ladi_conversion_api[t][e] = i),
            this.isObject(window.ladi_conversion_api) &&
                this.isObject(window.ladi_conversion_api.facebook) &&
                this.isArray(window.ladi_conversion_api.facebook.pixels) &&
                this.isArray(window.ladi_conversion_api.facebook.events) &&
                ((window.ladi_conversion_api.facebook.pixels = window.ladi_conversion_api.facebook.pixels.unique()),
                this.runtime.tmp.runTrackingAnalytics("ConversionApi", { data: window.ladi_conversion_api }),
                delete window.ladi_conversion_api.facebook.events);
    }),
    (LadiPageScriptV2.prototype.getWidthDevice = function () {
        if (this.runtime.isMobileOnly) {
            var t = document.getElementsByClassName("ladi-wraper")[0];
            if (!this.isEmpty(t)) return t.clientWidth;
        }
        return window.outerWidth > 0 ? window.outerWidth : window.screen.width;
    }),
    (LadiPageScriptV2.prototype.getHeightDevice = function (t) {
        return window.outerHeight > 0 && !this.runtime.isDesktop && ((t && window.outerHeight > window.innerHeight) || (!t && window.innerHeight > window.outerHeight)) ? window.outerHeight : window.innerHeight;
    }),
    (LadiPageScriptV2.prototype.startAutoScroll = function (t, e, i, a) {
        if (this.runtime.isDesktop ? i : a) {
            var n = document.getElementById(t);
            if (!this.isEmpty(n) && !n.classList.contains("ladi-auto-scroll")) {
                var r = 0;
                if ("section" != e) {
                    if (n.clientWidth <= this.getWidthDevice()) return;
                    r = (r = parseFloatLadiPage(getComputedStyle(n).left) || 0) > 0 ? 0 : -1 * r;
                } else {
                    for (var o = n.querySelectorAll(".ladi-container > .ladi-element"), l = 0; l < o.length; l++) {
                        var s = parseFloatLadiPage(getComputedStyle(o[l]).left) || 0;
                        s < r && (r = s);
                    }
                    (r = r > 0 ? 0 : -1 * r), n.querySelector(".ladi-container").style.setProperty("margin-left", r + "px");
                }
                n.classList.add("ladi-auto-scroll"), (n.scrollLeft = r);
            }
        }
    }),
    (LadiPageScriptV2.prototype.getLinkUTMRedirect = function (t, e) {
        var i = this.createTmpElement("a", "", { href: t }),
            a = this.getURLSearchParams(e),
            n = a.utm_source;
        if (!this.isEmpty(n)) {
            n = "utm_source=" + encodeURIComponent(n);
            var r = a.utm_medium,
                o = a.utm_campaign,
                l = a.utm_term,
                s = a.utm_content;
            this.isEmpty(r) || (n += "&utm_medium=" + encodeURIComponent(r)),
                this.isEmpty(o) || (n += "&utm_campaign=" + encodeURIComponent(o)),
                this.isEmpty(l) || (n += "&utm_term=" + encodeURIComponent(l)),
                this.isEmpty(s) || (n += "&utm_content=" + encodeURIComponent(s)),
                this.isEmpty(i.href) || this.isEmpty(i.host) || !this.isEmpty(this.getURLSearchParams(i.search, "utm_source")) || (i.search = i.search + (this.isEmpty(i.search) ? "?" : "&") + n);
        }
        return i.href;
    }),
    (LadiPageScriptV2.prototype.randomInt = function (t, e) {
        return (t = Math.ceil(t)), (e = Math.floor(e)), Math.floor(Math.random() * (e - t + 1)) + t;
    }),
    (LadiPageScriptV2.prototype.randomString = function (t) {
        for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = i.length, n = 0; n < t; n++) e += i.charAt(Math.floor(Math.random() * a));
        return e;
    }),
    (LadiPageScriptV2.prototype.runCallback = function (t, e) {
        if (this.isFunction(e)) {
            var i = this;
            if (t) {
                var a = i.runInterval(function () {
                    i.removeInterval(a), i.runCallback(!1, e);
                }, 0);
                return;
            }
            e();
        }
    }),
    (LadiPageScriptV2.prototype.runTimeout = function (t, e) {
        if (this.isFunction(t)) {
            if (!this.isEmpty(e) && e > 0) return setTimeout(t, e);
            t();
        }
    }),
    (LadiPageScriptV2.prototype.removeTimeout = function (t) {
        return clearTimeout(t);
    }),
    (LadiPageScriptV2.prototype.removeInterval = function (t) {
        return clearInterval(t);
    }),
    (LadiPageScriptV2.prototype.runInterval = function (t, e) {
        if (this.isFunction(t)) return setInterval(t, e);
    }),
    (LadiPageScriptV2.prototype.getURLSearchParams = function (t, e, i) {
        var a = {};
        if (((t = this.isNull(t) ? window.location.search : t), !this.isEmpty(t)))
            for (var n = t.substr(1).split("&"), r = 0; r < n.length; ++r) {
                var o = n[r].split("=", 2);
                this.isNull(a[o[0]])
                    ? 1 == o.length
                        ? (a[o[0]] = "")
                        : (a[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                    : i && (this.isArray(a[o[0]]) || (a[o[0]] = [a[o[0]]]), 1 == o.length ? a[o[0]].push("") : a[o[0]].push(decodeURIComponent(o[1].replace(/\+/g, " "))));
            }
        return this.isEmpty(e) ? a : a[e];
    }),
    (LadiPageScriptV2.prototype.getVideoId = function (t, e) {
        if (this.isEmpty(e)) return e;
        if (t == this.const.VIDEO_TYPE.youtube) {
            var i = this.createTmpElement("a", "", { href: e });
            -1 != e.toLowerCase().indexOf("watch")
                ? (e = this.getURLSearchParams(i.search, "v"))
                : -1 != e.toLowerCase().indexOf("embed/")
                ? (e = i.pathname.substring("/embed/".length))
                : -1 != e.toLowerCase().indexOf("youtu.be") && (e = i.pathname.substring("/".length));
        }
        return e;
    }),
    (LadiPageScriptV2.prototype.sendRequest = function (t, e, i, a, n, r) {
        this.sendRequestWithOption(t, e, i, a, n, null, r);
    }),
    (LadiPageScriptV2.prototype.sendRequestWithOption = function (t, e, i, a, n, r, o) {
        var l = new XMLHttpRequest();
        try {
            this.isFunction(o) &&
                (l.onreadystatechange = function () {
                    var t = null;
                    try {
                        t = l.responseText;
                    } catch (t) {}
                    o(t, l.status, l, e);
                }),
                l.open(t, e, a);
            this.isObject(n) &&
                Object.keys(n).forEach(function (t) {
                    l.setRequestHeader(t, n[t]);
                }),
                this.isObject(r) &&
                    Object.keys(r).forEach(function (t) {
                        l[t] = r[t];
                    }),
                l.send(i);
        } catch (t) {
            this.isFunction(o) && o(t, 0, l, e);
        }
    }),
    (LadiPageScriptV2.prototype.deleteCookie = function (t) {
        return window.ladi(t).delete_cookie();
    }),
    (LadiPageScriptV2.prototype.setCookie = function (t, e, i, a, n, r) {
        return window.ladi(e).set_cookie(i, a, r, t, n);
    }),
    (LadiPageScriptV2.prototype.getCookie = function (t) {
        return window.ladi(t).get_cookie();
    }),
    (LadiPageScriptV2.prototype.removeSticky = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        for (var e = document.querySelectorAll('[data-sticky="true"]'), i = 0; i < e.length; i++)
            e[i].removeAttribute("data-top"),
                e[i].removeAttribute("data-left"),
                e[i].style.removeProperty("top"),
                e[i].style.removeProperty("left"),
                e[i].style.removeProperty("width"),
                e[i].style.removeProperty("position"),
                e[i].style.removeProperty("z-index");
        t.runEventScroll();
    }),
    (LadiPageScriptV2.prototype.runEventBackdropClick = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n]).display && (i = a[n].id);
        e.runRemovePopup(i, e.runtime.isClient);
    }),
    (LadiPageScriptV2.prototype.runEventMouseMove = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), (t = e.getEventCursorData(t));
        var i = null,
            a = 0,
            n = 0,
            r = 0;
        e.isEmpty(e.runtime.current_element_mouse_down_carousel) ||
            ((i = document.getElementById(e.runtime.current_element_mouse_down_carousel)),
            (a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x),
            (n = parseFloatLadiPage(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")) || 0),
            (n += a) < (r = -((parseFloatLadiPage(e.runtime.eventData[e.runtime.current_element_mouse_down_carousel][e.runtime.device + ".option.carousel_crop.width"]) || 0) - i.clientWidth)) && (n = r),
            n > 0 && (n = 0),
            i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n + "px"));
        if (!e.isEmpty(e.runtime.current_element_mouse_down_gallery_view)) {
            (i = document.getElementById(e.runtime.current_element_mouse_down_gallery_view)), (a = t.pageX - e.runtime.current_element_mouse_down_gallery_view_position_x);
            var o = parseFloatLadiPage(i.getAttribute("data-current")) || 0;
            o == (parseFloatLadiPage(i.getAttribute("data-max-item")) || 0) - 1 && a < 0 && (a = 0),
                a > 0 && 0 == o && (a = 0),
                a >= e.runtime.current_element_mouse_down_gallery_view_diff
                    ? ((e.runtime.current_element_mouse_down_gallery_view = null), (e.runtime.current_element_mouse_down_gallery_view_position_x = 0), i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].click())
                    : a <= -e.runtime.current_element_mouse_down_gallery_view_diff
                    ? ((e.runtime.current_element_mouse_down_gallery_view = null), (e.runtime.current_element_mouse_down_gallery_view_position_x = 0), i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].click())
                    : i.querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.setProperty("left", a + "px");
        }
        e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) ||
            ((i = document.getElementById(e.runtime.current_element_mouse_down_gallery_control)),
            (a = t.pageX - e.runtime.current_element_mouse_down_gallery_control_position_x),
            (n = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].getAttribute("data-left")) || 0),
            (n += a) <
                (r = (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0) - (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0)) &&
                (n = r),
            n > 0 && (n = 0),
            i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"));
    }),
    (LadiPageScriptV2.prototype.runEventMouseUp = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), (t = e.getEventCursorData(t));
        var i = null,
            a = 0;
        if (!e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
            delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], (a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x);
            var n = (i = document.getElementById(e.runtime.current_element_mouse_down_carousel)).getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left");
            i.getElementsByClassName("ladi-carousel-content")[0].removeAttribute("data-left"),
                i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"),
                (e.runtime.current_element_mouse_down_carousel = null),
                a >= e.runtime.current_element_mouse_down_carousel_diff
                    ? i.getElementsByClassName("ladi-carousel-arrow-left")[0].click()
                    : a <= -e.runtime.current_element_mouse_down_carousel_diff
                    ? i.getElementsByClassName("ladi-carousel-arrow-right")[0].click()
                    : i.getElementsByClassName("ladi-carousel-content").length > 0 &&
                      (i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "100ms"),
                      i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n),
                      e.runTimeout(function () {
                          i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration");
                      }, 1));
        }
        e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) ||
            ((i = document.getElementById(e.runtime.current_element_mouse_down_gallery_view)).querySelectorAll(".ladi-gallery-view-item.selected").length > 0 &&
                i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.removeProperty("left")),
            e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) ||
                ((i = document.getElementById(e.runtime.current_element_mouse_down_gallery_control)).getElementsByClassName("ladi-gallery-control-box")[0].removeAttribute("data-left"),
                i.getElementsByClassName("ladi-gallery-control-box")[0].style.removeProperty("transition-duration")),
            (e.runtime.current_element_mouse_down_carousel_position_x = 0),
            (e.runtime.current_element_mouse_down_gallery_view = null),
            (e.runtime.current_element_mouse_down_gallery_view_position_x = 0);
        var r = 0;
        e.runtime.current_element_mouse_down_gallery_control_time + e.runtime.current_element_mouse_down_gallery_control_time_click < Date.now() && (r = 5),
            e.runTimeout(function () {
                (e.runtime.current_element_mouse_down_gallery_control = null), (e.runtime.current_element_mouse_down_gallery_control_time = 0), (e.runtime.current_element_mouse_down_gallery_control_position_x = 0);
            }, r);
    }),
    (LadiPageScriptV2.prototype.runEventMouseLeave = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript),
            Object.keys(e.runtime.eventData).forEach(function (t) {
                var i = e.runtime.eventData[t];
                "popup" == i.type && i["option.show_popup_exit_page"] && window.ladi(t).show();
            });
    }),
    (LadiPageScriptV2.prototype.runEventScroll = function (t) {
        var e = this;
        if ((e instanceof LadiPageScriptV2 || (e = LadiPageScript), !e.isEmpty(e.runtime.eventData) && !e.runtime.tmp.is_run_show_popup)) {
            for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n]).display && (i = a[n].id);
            var r = [];
            if (!e.isEmpty(i)) for (var o = document.querySelectorAll("#" + i + " .ladi-element"), l = 0; l < o.length; l++) r.push(o[l].id);
            var s = e.runtime.isDesktop;
            if (
                (Object.keys(e.runtime.eventData).forEach(function (t) {
                    var a = e.runtime.eventData[t],
                        n = null,
                        o = null,
                        l = null;
                    if (-1 != Object.keys(e.runtime.list_scroll_func).indexOf(t) && ((n = document.getElementById(t)), !e.isEmpty(n))) {
                        var c = !1;
                        "section" == a.type
                            ? ((o = n.offsetTop),
                              ((window.scrollY >= o && window.scrollY <= o + n.offsetHeight) ||
                                  (window.scrollY + e.getHeightDevice() >= o && window.scrollY + e.getHeightDevice() <= o + n.offsetHeight) ||
                                  (o >= window.scrollY && window.scrollY + e.getHeightDevice() >= o)) &&
                                  (c = !0))
                            : ((o = e.getElementBoundingClientRect(n).y + window.scrollY),
                              ((window.scrollY >= o && window.scrollY <= o + n.offsetHeight) ||
                                  (window.scrollY + e.getHeightDevice(!0) >= o && window.scrollY + e.getHeightDevice(!0) <= o + n.offsetHeight) ||
                                  (o >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= o)) &&
                                  (c = !0)),
                            c && ((l = e.runtime.list_scroll_func[t]), delete e.runtime.list_scroll_func[t], l());
                    }
                    var d = a[e.runtime.device + ".style.animation-name"];
                    if (!e.isEmpty(d) && ((n = document.getElementById(t)), !e.isEmpty(n) && !n.classList.contains("ladi-animation"))) {
                        var u = parseFloatLadiPage(a[e.runtime.device + ".style.animation-delay"]) || 0;
                        o = e.getElementBoundingClientRect(n).y + window.scrollY;
                        var p =
                            (window.scrollY >= o && window.scrollY <= o + n.offsetHeight) ||
                            (window.scrollY + e.getHeightDevice(!0) >= o && window.scrollY + e.getHeightDevice(!0) <= o + n.offsetHeight) ||
                            (o >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= o);
                        e.runtime.tmp.isFirstScroll && u > 0 && !p && n.classList.add("ladi-animation-hidden"),
                            p &&
                                (n.classList.add("ladi-animation"),
                                e.runTimeout(function () {
                                    n.classList.remove("ladi-animation-hidden");
                                }, 1e3 * u));
                    }
                    if (e.isEmpty(i) || -1 != r.indexOf(t)) {
                        var m = null,
                            g = null,
                            y = null;
                        if (
                            (a[e.runtime.device + ".option.sticky"] &&
                                ((m = a[e.runtime.device + ".option.sticky_position"]),
                                (g = parseFloatLadiPage(a[e.runtime.device + ".option.sticky_position_top"])),
                                (y = parseFloatLadiPage(a[e.runtime.device + ".option.sticky_position_bottom"]))),
                            !e.isEmpty(m))
                        ) {
                            var _ = document.getElementById(t);
                            if (!e.isEmpty(_) && -1 != ["default", "top", "bottom"].indexOf(m)) {
                                var f = e.getElementBoundingClientRect(_),
                                    h = _.getAttribute("data-top"),
                                    v = _.getAttribute("data-left");
                                e.isEmpty(h) ? (_.setAttribute("data-top", f.y + window.scrollY), (h = f.y)) : (h = parseFloatLadiPage(h)),
                                    e.isEmpty(v) ? (_.setAttribute("data-left", f.x + window.scrollX), (v = f.x)) : (v = parseFloatLadiPage(v));
                                var E = null,
                                    L = null;
                                if (
                                    ("default" == m &&
                                        (g > h - window.scrollY ? ((E = g + "px"), (L = v + "px")) : e.getHeightDevice() - y - _.clientHeight < h - window.scrollY && ((E = "calc(100% - " + (y + _.clientHeight) + "px)"), (L = v + "px"))),
                                    "top" == m && (g > h - window.scrollY || e.getHeightDevice() - 0 < h - window.scrollY) && ((E = g + "px"), (L = v + "px")),
                                    "bottom" == m && (e.getHeightDevice() - y - _.clientHeight < h - window.scrollY || 0 > h + _.clientHeight - window.scrollY) && ((E = "calc(100% - " + (y + _.clientHeight) + "px)"), (L = v + "px")),
                                    e.isEmpty(E) || e.isEmpty(L))
                                )
                                    _.style.removeProperty("top"), _.style.removeProperty("left"), _.style.removeProperty("width"), _.style.removeProperty("position"), _.style.removeProperty("z-index");
                                else if (
                                    (_.style.setProperty("top", E),
                                    _.style.setProperty("left", L),
                                    "section" == a.type && (e.runtime.isMobileOnly ? _.style.setProperty("width", document.getElementsByClassName("ladi-wraper")[0].clientWidth + "px") : s && _.style.setProperty("width", "100%")),
                                    _.style.setProperty("position", "fixed"),
                                    _.style.setProperty("z-index", "90000050"),
                                    !_.hasAttribute("data-sticky"))
                                ) {
                                    _.setAttribute("data-sticky", !0), _.classList.contains("ladi-animation-hidden") && (_.classList.remove("ladi-animation-hidden"), _.classList.add("ladi-animation"));
                                    for (var P = _.getElementsByClassName("ladi-animation-hidden"); P.length > 0; ) P[0].classList.add("ladi-animation"), P[0].classList.remove("ladi-animation-hidden");
                                    _.classList.remove("ladi-lazyload");
                                    for (var A = _.getElementsByClassName("ladi-lazyload"); A.length > 0; ) A[0].classList.remove("ladi-lazyload");
                                }
                            }
                        }
                    }
                    if ("popup" == a.type) {
                        if (!e.isEmpty(e.runtime.scroll_show_popup[t])) return;
                        e.isEmpty(a["option.popup_welcome_page_scroll_to"]) ||
                            ((n = document.getElementById(a["option.popup_welcome_page_scroll_to"])),
                            e.isEmpty(n) ||
                                ((o = n.offsetTop),
                                ((window.scrollY >= o && window.scrollY <= o + n.offsetHeight) ||
                                    (window.scrollY + e.getHeightDevice() >= o && window.scrollY + e.getHeightDevice() <= o + n.offsetHeight) ||
                                    (o >= window.scrollY && window.scrollY + e.getHeightDevice() >= o)) &&
                                    ((e.runtime.scroll_show_popup[t] = !0), window.ladi(t).show())));
                    }
                    if ("section" == a.type) {
                        if (!e.isEmpty(e.runtime.scroll_to_section[t])) return;
                        (n = document.getElementById(t)),
                            e.isEmpty(n) ||
                                ((o = n.offsetTop),
                                ((window.scrollY >= o && window.scrollY <= o + n.offsetHeight) ||
                                    (window.scrollY + e.getHeightDevice() >= o && window.scrollY + e.getHeightDevice() <= o + n.offsetHeight) ||
                                    (o >= window.scrollY && window.scrollY + e.getHeightDevice() >= o)) &&
                                    ((e.runtime.scroll_to_section[t] = !0), e.runEventTracking(t, !1)));
                    }
                }),
                e.runtime.isClient)
            )
                for (var c = Math.round(((window.scrollY + e.getHeightDevice()) / document.body.clientHeight) * 100), d = 1; d < e.const.PERCENT_TRACKING_SCROLL.length; d++)
                    c > e.const.PERCENT_TRACKING_SCROLL[d - 1] &&
                        c <= e.const.PERCENT_TRACKING_SCROLL[d] &&
                        -1 == e.runtime.scroll_depth.indexOf(e.const.PERCENT_TRACKING_SCROLL[d]) &&
                        (e.runtime.scroll_depth.push(e.const.PERCENT_TRACKING_SCROLL[d]),
                        e.isFunction(window.gtag) &&
                            window.gtag("event", "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[d] + "_percent", {
                                event_category: "LadiPageScrollDepth",
                                event_label: window.location.host + window.location.pathname,
                                non_interaction: !0,
                            }),
                        e.isFunction(window.fbq));
            e.runtime.tmp.isFirstScroll = !1;
        }
    }),
    (LadiPageScriptV2.prototype.runRemovePopup = function (t, e, i, a) {
        var n = this,
            r = document.querySelectorAll("#" + this.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"),
            o = !1;
        e || (LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilder(), LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilderScroll());
        var l = function () {
                var t = document.getElementById("style_popup");
                n.isEmpty(t) || t.parentElement.removeChild(t);
            },
            s = [];
        if (this.isEmpty(t)) for (var c = 0; c < r.length; c++) s.push(r[c].id);
        else s.push(t);
        s.forEach(function (t) {
            var i = document.getElementById(t);
            if (!n.isEmpty(i)) {
                n.pauseAllVideo(i), n.isEmpty(i.style.getPropertyValue("display")) || (o = !0), i.style.removeProperty("display"), i.style.removeProperty("z-index");
                var a = i.getElementsByClassName("popup-close")[0];
                if ((n.isEmpty(a) || a.style.removeProperty("display"), i.hasAttribute("data-popup-backdrop"))) {
                    l(), e && (n.isEmpty(n.runtime.tmp.bodyScrollY) || window.scrollTo(0, n.runtime.tmp.bodyScrollY)), (n.runtime.tmp.bodyScrollY = null);
                    for (var s = 0; s < r.length; s++) r[s].style.removeProperty("z-index");
                }
                i.removeAttribute("data-scroll"), i.style.removeProperty("overflow-y"), i.style.removeProperty("overflow-x"), i.getElementsByClassName("ladi-popup")[0].style.removeProperty("height"), i.style.removeProperty("max-height");
            }
        }),
            o && this.isFunction(i) && i(),
            a && l();
    }),
    (LadiPageScriptV2.prototype.runShowPopup = function (t, e, i, a, n, r) {
        var o = this,
            l = "";
        if (!o.isEmpty(e)) {
            var s = document.getElementById(e),
                c = null;
            if (!n || (!o.isEmpty(s) && o.isObject(o.runtime.eventData) && !o.isEmpty(o.runtime.eventData[e]))) {
                o.runtime.tmp.is_run_show_popup = !0;
                var d = 0;
                n || LadiPagePlugin.getPlugin("popup").showStyleShowPopupBuilder(e),
                    n && ((i = o.runtime.eventData[e][o.runtime.device + ".option.popup_position"]), (a = o.runtime.eventData[e][o.runtime.device + ".option.popup_backdrop"]));
                var u = function () {
                    if (n) {
                        var t = window.scrollY;
                        if (!o.isEmpty(o.runtime.tmp.bodyScrollY)) {
                            var i = getComputedStyle(document.body);
                            "fixed" == i.position && (parseFloatLadiPage(i.top) || 0) == -1 * o.runtime.tmp.bodyScrollY && (t = o.runtime.tmp.bodyScrollY);
                        }
                        "block" != s.style.getPropertyValue("display") || o.isEmpty(o.runtime.tmp.bodyScrollY) || (t = o.runtime.tmp.bodyScrollY),
                            (l += "body {"),
                            (l += "position: fixed !important;"),
                            (l += "width: 100% !important;"),
                            (l += "top: -" + t + "px"),
                            (l += "}"),
                            (o.runtime.tmp.bodyScrollY = t),
                            (c = function () {
                                o.runtime.tmp.bodyScrollY = t;
                            });
                    }
                    for (var a = document.querySelectorAll("#" + o.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), r = 0; r < a.length; r++) a[r].id != e && a[r].style.setProperty("z-index", "1", "important");
                    d = 500;
                };
                i == o.const.POSITION_TYPE.default
                    ? ((l += "#" + o.runtime.backdrop_popup_id + " { display: block !important; " + a + "}"), s.setAttribute("data-popup-backdrop", !0), u())
                    : n || ((l += "#" + o.runtime.backdrop_popup_id + " { display: block !important;}"), s.setAttribute("data-popup-backdrop", !0), u());
                var p = "block" == s.style.getPropertyValue("display");
                if ((o.isFunction(r) && !p && (r(), o.isFunction(c) && c()), o.isArray(o.runtime.list_show_popup_func[e])))
                    for (; o.runtime.list_show_popup_func[e].length > 0; ) {
                        o.runtime.list_show_popup_func[e].shift()();
                    }
                s.style.setProperty("display", "block", "important");
                var m = s.hasAttribute("data-scroll"),
                    g = !1;
                if (
                    (t &&
                        (!m &&
                            s.clientHeight > 0.9 * o.getHeightDevice() &&
                            (n ? (s.setAttribute("data-scroll", !0), s.style.setProperty("overflow-y", "auto", "important"), s.style.setProperty("overflow-x", "hidden", "important"), (m = !0)) : (g = !0)),
                        m &&
                            n &&
                            (s.getElementsByClassName("ladi-popup")[0].style.removeProperty("height"),
                            s.style.removeProperty("max-height"),
                            s.getElementsByClassName("ladi-popup")[0].style.setProperty("height", s.clientHeight + "px", "important"),
                            s.style.setProperty("max-height", 0.9 * o.getHeightDevice() + "px"))),
                    !n && g && LadiPagePlugin.getPlugin("popup").styleShowPopupBuilderScroll(e),
                    o.isEmpty(l) || o.createStyleElement("style_popup", l),
                    n && !o.isEmpty(s))
                ) {
                    var y = s.getElementsByClassName("popup-close")[0];
                    o.isEmpty(y) &&
                        (((y = document.createElement("div")).className = "popup-close"),
                        s.appendChild(y),
                        y.addEventListener("click", function (t) {
                            t.stopPropagation(), o.runRemovePopup(e, n);
                        })),
                        s.getElementsByClassName("popup-close")[0].style.setProperty("display", "block", "important");
                    var _ = function () {
                        var t = s.getElementsByClassName("popup-close")[0];
                        if (!o.isEmpty(t)) {
                            var e = o.getElementBoundingClientRect(s),
                                i = e.y,
                                a = window.innerWidth - e.x - e.width;
                            m && (a += o.runtime.widthScrollBar), t.style.setProperty("right", a + "px"), t.style.setProperty("top", i + "px"), t.style.setProperty("position", "fixed");
                        }
                    };
                    _(), m && (s.hasAttribute("data-resize-scroll") || (s.setAttribute("data-resize-scroll", !0), window.addEventListener("resize", _)));
                }
                n && !p && o.runEventTracking(e, !1),
                    t
                        ? o.runTimeout(function () {
                              delete o.runtime.tmp.is_run_show_popup, o.runEventScroll();
                          }, d)
                        : o.runTimeout(function () {
                              o.runShowPopup(!0, e, i, a, n, r);
                          }, 100);
            }
        }
    }),
    (LadiPageScriptV2.prototype.runEventTracking = function (t, e) {
        if (this.runtime.isClient && !this.isEmpty(t)) {
            var i = this.runtime.eventData[t],
                a = i.type,
                n = null,
                r = null,
                o = null,
                l = null,
                s = null,
                c = this.runtime.currency;
            if (
                (e && "form" == a
                    ? ((n = i["option.form_conversion_name"]),
                      (r = i["option.form_google_ads_conversion"]),
                      (o = i["option.form_google_ads_label"]),
                      (l = i["option.form_event_custom_script"]),
                      (s = this.isEmpty(i["option.form_purchase_value"]) ? null : parseFloatLadiPage(i["option.form_purchase_value"]) || 0),
                      (s = this.getCartCheckoutPrice(s)))
                    : ((n = i["option.conversion_name"]), (r = i["option.google_ads_conversion"]), (o = i["option.google_ads_label"]), (l = i["option.event_custom_script"])),
                this.isFunction(window.fbq) && !this.isEmpty(n))
            ) {
                var d = "trackCustom";
                -1 !=
                    [
                        "AddPaymentInfo",
                        "AddToCart",
                        "AddToWishlist",
                        "CompleteRegistration",
                        "Contact",
                        "CustomizeProduct",
                        "Donate",
                        "FindLocation",
                        "InitiateCheckout",
                        "Lead",
                        "PageView",
                        "Purchase",
                        "Schedule",
                        "Search",
                        "StartTrial",
                        "SubmitApplication",
                        "Subscribe",
                        "ViewContent",
                    ].indexOf(n) && (d = "track");
                var u = null;
                this.isEmpty(s) || this.isEmpty(c) || (((u = {}).value = s), (u.currency = c)), window.fbq(d, n, u), this.runConversionApi("facebook", "events", [{ key: d, name: n, data: u }]);
            }
            if (this.isFunction(window.gtag) && (this.isEmpty(r) || this.isEmpty(o) || window.gtag("event", "conversion", { send_to: "AW-" + r + "/" + o }), !this.isEmpty(n))) {
                var p = "";
                p = "section" == a ? "LadiPageSection" : "popup" == a ? "LadiPagePopup" : "form" == a ? "LadiPageConversion" : "LadiPageClick";
                var m = LadiPageApp[i.type + this.const.APP_RUNTIME_PREFIX];
                if (!this.isEmpty(m)) {
                    var g = m(i, this.runtime.isClient);
                    this.isFunction(g.getEventTrackingCategory) && (p = m(i, this.runtime.isClient).getEventTrackingCategory());
                }
                var y = { event_category: p, event_label: window.location.host + window.location.pathname };
                this.isEmpty(s) || this.isEmpty(c) || ((y.value = s), (y.currency = c)), window.gtag("event", n, y);
            }
            this.isEmpty(l) || this.runFunctionString(l);
        }
    }),
    (LadiPageScriptV2.prototype.runFunctionString = function (t) {
        try {
            new Function(t)();
        } catch (t) {}
    }),
    (LadiPageScriptV2.prototype.loadCollectionData = function (t, e, i, a, n) {
        var r = this,
            o = e["option.product_type"],
            l = e["option.ladisale_store_id"],
            s = e["option.product_tag_id"],
            c = e["option.collection_setting.type"],
            d = r.runtime.eventData[t];
        if (!r.isEmpty(d) && "collection" == d.type) {
            var u = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE,
                p = d[u + ".option.collection_setting.row"],
                m = d[u + ".option.collection_setting.column"],
                g = function (t, e, i, a, n, o) {
                    if (
                        ((i = r.copy(i)),
                        Object.keys(a).forEach(function (t) {
                            i[t] = a[t];
                        }),
                        a["option.input_type"] == r.const.INPUT_TYPE.product_variant)
                    ) {
                        var l = r.generateVariantProduct(i, !0, a["option.product_variant_type"], a["option.product_variant_title"], a["option.product_variant_price"], a["option.input_tabindex"], r.runtime.isClient, !0, function (r) {
                            g(t, e, i, a, n, o);
                        });
                        if (r.isEmpty(l)) return;
                        var s = function (e) {
                            var i = r.getProductVariantId(e.target, n);
                            o(t, n, !1, i, !0);
                        };
                        r.showParentVisibility(e, function () {
                            for (var t = e.clientHeight, i = t, n = e.querySelectorAll("select.ladi-form-control"), o = {}, c = 0; c < n.length; c++)
                                o[n[c].getAttribute("data-store-id") + "_" + n[c].getAttribute("data-product-id") + "_" + n[c].getAttribute("data-product-variant-id")] = n[c].value;
                            e.innerHTML = l;
                            for (var d = e.querySelectorAll("select.ladi-form-control"), u = 0; u < d.length; u++) {
                                d[u].removeEventListener("change", s), d[u].addEventListener("change", s);
                                var p = o[d[u].getAttribute("data-store-id") + "_" + d[u].getAttribute("data-product-id") + "_" + d[u].getAttribute("data-product-variant-id")];
                                if (r.isNull(p)) {
                                    var m = d[u].querySelector("option");
                                    r.isEmpty(m) || (p = m.getAttribute("value"));
                                }
                                d[u].value = p;
                            }
                            if (a["option.product_variant_type"] != r.const.PRODUCT_VARIANT_TYPE.combined && (e.style.setProperty("height", "auto"), (i = e.clientHeight), e.style.removeProperty("height"), t != i)) {
                                e.style.setProperty("height", i + "px");
                                var g = r.findAncestor(e, "ladi-form");
                                r.isEmpty(g) || ((g = r.findAncestor(g, "ladi-element")), r.updateHeightElement(!0, e, g, t, i));
                            }
                        });
                    }
                    if (a["option.input_type"] == r.const.INPUT_TYPE.number) {
                        var c = e.querySelector('input[name="quantity"]'),
                            d = function (t) {
                                if (!r.isEmpty(t.target.value)) {
                                    var e = r.generateVariantProduct(i, !1, null, null, null, null, !0, !0, function () {
                                        d(t);
                                    });
                                    if (!(r.isEmpty(e) || r.isEmpty(e.store_info) || r.isEmpty(e.product))) {
                                        var a = t.target;
                                        a = (a = r.findAncestor(a, "ladi-form")).querySelector('[data-variant="true"]');
                                        var n = r.getProductVariantId(a, e.product),
                                            o = e.product.variants.findIndex(function (t) {
                                                return t.product_variant_id == n;
                                            });
                                        if (-1 != o) {
                                            var l = e.product.variants[o].quantity,
                                                s = parseInt(t.target.value) || 0;
                                            s <= 0 && ((s = 0), (0 == e.product.variants[o].inventory_checked || l > 0) && (s = 1), (t.target.value = s)),
                                                1 == e.product.variants[o].inventory_checked && (s > l || 0 == l) && (t.target.value = l);
                                        }
                                    }
                                }
                            };
                        c.addEventListener("input", d);
                        var u = e.querySelectorAll("button")[0],
                            p = e.querySelectorAll("button")[1];
                        if (r.isEmpty(u) || r.isEmpty(p)) return;
                        u.addEventListener("click", function (t) {
                            (c.value = (parseFloatLadiPage(c.value) || 0) - 1), r.fireEvent(c, "input");
                        }),
                            p.addEventListener("click", function (t) {
                                (c.value = (parseFloatLadiPage(c.value) || 0) + 1), r.fireEvent(c, "input");
                            });
                    }
                    if ("button" == a.type && (a["option.is_buy_now"] || a["option.is_add_to_cart"])) {
                        var m = function () {
                            if (r.isObject(i["option.data_action"])) {
                                var t = null;
                                i["option.data_action"].type == r.const.DATA_ACTION_TYPE.popup_cart && ((t = document.getElementById("POPUP_CART")), r.isEmpty(t) || window.ladi(t.id).show(), r.runEventTracking(e.id, !1)),
                                    i["option.data_action"].type == r.const.DATA_ACTION_TYPE.popup_checkout && ((t = document.getElementById("POPUP_CHECKOUT")), r.isEmpty(t) || window.ladi(t.id).show(), r.runEventTracking(e.id, !1));
                            }
                        };
                        e.setAttribute("data-click", !1),
                            e.addEventListener("click", function (t) {
                                r.runtime.tmp.buttonAddToCartClick(t, !0, i, m);
                            });
                    }
                },
                y = function (t, e, i, a) {
                    var n = e["option.product_id"],
                        o = JSON.stringify(e),
                        l = null;
                    if (a && r.isEmpty(i)) l = "";
                    else if (
                        !r.isEmpty(n) &&
                        o ===
                            (l = r.generateProductKey(o, !0, e, !0, i, function (n) {
                                y(t, e, i, a);
                            }))
                    )
                        return;
                    var s = null,
                        c = e.type,
                        d = null;
                    if (
                        ("headline" == c && ((d = t.getElementsByClassName("ladi-headline")[0]), r.isEmpty(d) || (d.innerHTML = l)),
                        "paragraph" == c && ((d = t.getElementsByClassName("ladi-paragraph")[0]), r.isEmpty(d) || (d.innerHTML = l)),
                        "image" == c)
                    ) {
                        s = r.getOptimizeImage(l, t.clientWidth, t.clientHeight, !0, !1, !1, !0);
                        var u = t.getElementsByClassName("ladi-image-background")[0];
                        r.isEmpty(u) || (r.isEmpty(s) ? u.style.setProperty("background-image", "none") : u.style.setProperty("background-image", 'url("' + s + '")'));
                    }
                },
                _ = function (t, e) {
                    var d = p * m,
                        u = r.getListProductByTagId(e, d, i, !0, function () {
                            _(t, e);
                        });
                    if (r.isObject(u) && r.isArray(u.products)) {
                        var f = document.getElementById(t);
                        if (r.isEmpty(f)) return;
                        if (f.getAttribute("data-page") == i) return;
                        var h = i,
                            v = !1;
                        if (!r.isEmpty(u.total_record) && i * d >= u.total_record) {
                            if (c == r.const.COLLECTION_TYPE.readmore) {
                                var E = f.getElementsByClassName("ladi-collection-button-next")[0];
                                r.isEmpty(E) || E.setAttribute("data-opacity", "0");
                            }
                            f.setAttribute("data-max-page", h), (v = !0);
                        }
                        if ((f.setAttribute("data-page", i > h ? h : i), h < i)) return;
                        var L = f.getElementsByClassName("ladi-collection-item");
                        if (0 == L.length) return;
                        var P = 0,
                            A = 0;
                        if (f.hasAttribute("data-max-option-length")) P = parseFloatLadiPage(f.getAttribute("data-max-option-length"));
                        else {
                            var w = f.querySelectorAll('.ladi-form [data-variant="true"]');
                            for (A = 0; A < w.length; A++) {
                                var S = w[A].getElementsByClassName("ladi-form-item-box");
                                S.length > P && (P = S.length);
                            }
                        }
                        var b = f.getElementsByClassName("ladi-collection-content")[0],
                            T = { className: L[0].className, innerHTML: L[0].innerHTML };
                        a && L[0].parentElement.removeChild(L[0]);
                        for (var C = b.getElementsByClassName("ladi-collection-page"); C.length < i; ) {
                            var I = document.createElement("div");
                            (I.className = "ladi-collection-page"), b.appendChild(I);
                        }
                        var O = C[i - 1],
                            N = O.getElementsByClassName("ladi-collection-item");
                        if (N.length != u.products.length) for (; N.length > 0; ) N[0].parentElement.removeChild(N[0]);
                        var k = function (t, i, a, n, c) {
                            o == r.const.FORM_CONFIG_TYPE.ladisales && (i.id = i.product_id);
                            for (var d = 0; d < t.length; d++) {
                                var u = r.copy(r.runtime.eventData[t[d].id]);
                                r.isEmpty(u) ||
                                    ((u["option.product_type"] = o),
                                    (u["option.ladisale_store_id"] = l),
                                    (u["option.product_tag_id"] = s),
                                    (u["option.product_id"] = i.id),
                                    r.isFunction(r.runtime.tmp.runOptionAction) && r.runtime.tmp.runOptionAction(t[d], t[d].id, u.type, u),
                                    r.isFunction(r.runtime.tmp.runOptionHover) && r.runtime.tmp.runOptionHover(t[d], t[d].id, u.type, u["option.data_hover"]),
                                    a && g(t, t[d], e, u, i, k),
                                    r.isEmpty(u["option.product_mapping_name"]) || y(t[d], u, n, c));
                            }
                        };
                        for (A = 0; A < u.products.length; A++) r.isArray(u.products[A].options) && u.products[A].options.length > P && (P = u.products[A].options.length);
                        for (f.setAttribute("data-max-option-length", P), A = 0; A < u.products.length; A++)
                            if (!(N.length > A)) {
                                var x = document.createElement("div");
                                (x.className = T.className), O.appendChild(x), (x.innerHTML = T.innerHTML);
                                for (var D = x.getElementsByClassName("ladi-element"); r.isArray(u.products[A].options) && u.products[A].options.length < P; ) u.products[A].options.push({ is_tmp: !0 });
                                k(D, u.products[A], !0, null, !1);
                            }
                        v && O.classList.add("last"),
                            c == r.const.COLLECTION_TYPE.carousel &&
                                (function (t) {
                                    var e = document.getElementById(t);
                                    if (!r.isEmpty(e) && e.hasAttribute("data-page")) {
                                        var i = "0",
                                            a = "100%",
                                            n = parseFloatLadiPage(e.getAttribute("data-page")) || 1,
                                            o = e.getElementsByClassName("ladi-collection-content")[0].getElementsByClassName("ladi-collection-page"),
                                            l = o[o.length - 1].getElementsByClassName("ladi-collection-item"),
                                            s = m - l.length,
                                            c = "";
                                        s > 0
                                            ? (n != o.length ? n > 1 && (i = -(n - 1) + "00%") : (i = "calc(-" + (n - 1) + "00% + (100% / " + m + " * " + s + "))"),
                                              (a = "calc(" + o.length + "00% - (100% / " + m + " * " + s + "))"),
                                              (c += "#" + t + " .ladi-collection-content .ladi-collection-page.last {"),
                                              (c += "width: calc(" + getComputedStyle(e).width + " / " + m + " * " + s + ");"),
                                              (c += "}"))
                                            : (n > 1 && (i = -(n - 1) + "00%"), (a = o.length + "00%"));
                                        var d = "style_collection_" + t,
                                            u = document.getElementById(d);
                                        r.isEmpty(u) || u.parentElement.removeChild(u);
                                        var p = "#" + t + " .ladi-collection-content {";
                                        (p += "width: " + a + ";"), (p += "left: " + i + ";"), (p += "}"), (p += c), r.createStyleElement(d, p);
                                    }
                                })(t),
                            n &&
                                c == r.const.COLLECTION_TYPE.readmore &&
                                (function (t) {
                                    var e = document.getElementById(t);
                                    if (!r.isEmpty(e)) {
                                        var i = e.getElementsByClassName("ladi-collection-content")[0];
                                        if (e.hasAttribute("data-max-page")) {
                                            var a = i.querySelector(".ladi-collection-page.last"),
                                                n = a.getElementsByClassName("ladi-collection-item"),
                                                o = Math.ceil(n.length / m);
                                            a.style.setProperty("height", (parseFloatLadiPage(((parseFloatLadiPage(getComputedStyle(a).height) || 0) / p) * o) || 0) + "px");
                                        }
                                        var l = parseFloatLadiPage(getComputedStyle(e).height) || 0,
                                            s = i.scrollHeight;
                                        if (l != s) {
                                            e.style.setProperty("height", s + "px");
                                            var c = r.findAncestor(e.parentElement, "ladi-element");
                                            r.isEmpty(c) && (c = r.findAncestor(e.parentElement, "ladi-section")), r.updateHeightElement(!0, e, c, l, s);
                                        }
                                    }
                                })(t),
                            r.runResizeAll();
                    }
                },
                f = d["option.product_tag_id"],
                h = d["option.data_setting.value"];
            (!r.isArray(f) && r.isEmpty(h)) || _(t, d);
        }
    }),
    (LadiPageScriptV2.prototype.formatCurrency = function (t, e, i, a) {
        var n = { VND: "{0}đ", USD: "${0}", EUR: "€{0}", GBP: "₤{0}", CNY: "¥{0}", MYR: "RM{0}", THB: "฿{0}", IDR: "Rp {0}" };
        if (a) return this.isEmpty(n[e]) ? e : n[e].format("").trim();
        var r = this.formatNumber(t, 3, null, { VND: 0, USD: 2, EUR: 2, GBP: 2, CNY: 0, MYR: 0, THB: 0, IDR: 0 }[e] || 0);
        return i && (r = this.isEmpty(n[e]) ? r + " " + e : n[e].format(r)), r;
    }),
    (LadiPageScriptV2.prototype.formatNumber = function (t, e, i, a) {
        if (void 0 != t) {
            void 0 == i && (i = 0), void 0 == a && (a = 0);
            var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (a > 0 ? "\\." : "$") + ")";
            t = t.toFixed(Math.max(0, ~~a)).replace(new RegExp(n, "g"), "$&,");
            var r = null,
                o = null;
            i >= 1 && ((o = (r = t.split("."))[0]), (t = o = new Array(i - o.length + 1).join("0") + o), 2 == r.length && (t += "." + r[1])),
                a >= 1 && 2 == (r = t.split(".")).length && ((o = r[1]), (o = new Array(a - o.length + 1).join("0") + o), (t = r[0] + "." + o));
        }
        return t;
    }),
    (LadiPageScriptV2.prototype.setDataReplaceStr = function (t, e) {
        this.runtime.replaceStr[t] = e;
    }),
    (LadiPageScriptV2.prototype.getDataReplaceStr = function (t, e) {
        var i = null;
        return this.isNull(e) || (i = e[t]), this.isNull(i) && (i = this.runtime.replaceStr[t]), i;
    }),
    (LadiPageScriptV2.prototype.highlightText = function (t, e, i, a) {
        if (!this.isEmpty(t) && 0 != e.length) {
            var n = i ? "gi" : "g",
                r = [];
            e.forEach(function (t) {
                r.push(t.replaceAll("|", "\\|"));
            }),
                r.sort(function (t, e) {
                    return e.length - t.length;
                });
            var o = this;
            Array.from(t.childNodes).forEach(function (t) {
                var l = new RegExp(r.join("|"), n);
                if (3 !== t.nodeType) o.highlightText(t, e, i, a);
                else if (l.test(t.textContent)) {
                    var s = document.createDocumentFragment(),
                        c = 0;
                    t.textContent.replace(l, function (e, i) {
                        var n = document.createTextNode(t.textContent.slice(c, i)),
                            r = null;
                        o.isFunction(a) ? (r = a(e)) : ((r = document.createElement("span")).textContent = e), s.appendChild(n), s.appendChild(r), (c = i + e.length);
                    });
                    var d = document.createTextNode(t.textContent.slice(c));
                    s.appendChild(d), t.parentNode.replaceChild(s, t);
                }
            });
        }
    }),
    (LadiPageScriptV2.prototype.convertDataReplaceStr = function (t, e, i, a, n) {
        for (
            var r = this,
                o = t,
                l = new RegExp(r.runtime.replacePrefixStart + "[^" + r.runtime.replacePrefixStart + "$" + r.runtime.replacePrefixEnd + "]*" + r.runtime.replacePrefixEnd, "gi"),
                s = null,
                c = [],
                d = function (t) {
                    if (a) c.push(t);
                    else {
                        var i = t,
                            l = i.split("|");
                        (i = l[0].substr(r.runtime.replacePrefixStart.length)), 1 == l.length && (i = i.substr(0, i.length - r.runtime.replacePrefixEnd.length));
                        var s = r.getDataReplaceStr(i, n);
                        if (r.isEmpty(s))
                            if (l.length > 1) {
                                var d = r.randomInt(1, l.length - 1);
                                (s = l[d]), d == l.length - 1 && (s = s.substr(0, s.length - r.runtime.replacePrefixEnd.length));
                            } else s = "";
                        e && (s = encodeURIComponent(s)), (o = o.replaceAll(t, s));
                    }
                };
            null !== (s = l.exec(t));

        )
            s.index === l.lastIndex && l.lastIndex++, s.forEach(d);
        return (
            (c = c.unique()),
            r.highlightText(i, c, !0, function (t) {
                var e = document.createElement("span");
                return e.setAttribute("data-replace-str", t), e;
            }),
            o
        );
    }),
    (LadiPageScriptV2.prototype.setDataReplaceElement = function (t, e, i, a, n) {
        for (var r = this.isEmpty(a) ? document : document.getElementById(a), o = r.querySelectorAll("span[data-replace-str]"), l = 0; l < o.length; l++) {
            var s = o[l].getAttribute("data-replace-str");
            o[l].innerHTML = this.convertDataReplaceStr(s, !1, null, !1, i);
        }
        for (var c = r.querySelectorAll("a[data-replace-href]"), d = 0; d < c.length; d++) {
            var u = c[d].getAttribute("data-replace-href");
            (u = this.convertDataReplaceStr(u, !0, null, !1, i)), (c[d].href = u);
        }
        for (var p = r.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), m = 0; m < p.length; m++) {
            var g = null,
                y = null,
                _ = !1,
                f = null;
            if (t) {
                var h = p[m].getAttribute("name").trim();
                (_ = !0) && -1 == n.indexOf(h) && (_ = !1), _ && "country" == h && "true" == p[m].getAttribute("data-is-select-country") && (_ = !1), _ && (g = this.getDataReplaceStr(h, i));
            }
            if (!_) {
                var v = this.findAncestor(p[m], "ladi-element");
                if (this.isEmpty(v)) continue;
                var E = this.runtime.eventData[v.id];
                if (this.isEmpty(E)) continue;
                var L = E["option.input_default_value"];
                if (this.isEmpty(L)) continue;
                g = this.convertDataReplaceStr(L, !1, null, !1, i);
            }
            if (!this.isNull(g)) {
                if (((y = this.isArray(g) ? g[0] : g), (y = this.isNull(y) ? "" : y), (y += ""), "INPUT" == p[m].tagName))
                    if ("checkbox" == (f = p[m].getAttribute("type").trim()) || "radio" == f) {
                        var P = !1;
                        if ("checkbox" == f) {
                            var A = g;
                            this.isArray(A) || (A = [A]), (P = -1 != A.indexOf(p[m].getAttribute("value")));
                        }
                        "radio" == f && (P = p[m].getAttribute("value") == y.trim()), P ? ((p[m].checked = !0), e && p[m].setAttribute("checked", "checked")) : ((p[m].checked = !1), e && p[m].removeAttribute("checked"));
                        var w = this.findAncestor(p[m], "ladi-form-checkbox-item");
                        if (!this.isEmpty(w)) {
                            var S = w.querySelector("span");
                            this.isEmpty(S) || S.setAttribute("data-checked", p[m].checked);
                        }
                    } else (p[m].value = y.trim()), e && p[m].setAttribute("value", p[m].value);
                if (("TEXTAREA" == p[m].tagName && ((p[m].value = y.trim()), e && (p[m].innerHTML = p[m].value)), "SELECT" == p[m].tagName)) {
                    var b = p[m].querySelector('option[value="' + y.trim() + '"]');
                    if (!this.isEmpty(b) && ((p[m].value = b.getAttribute("value")), e && !b.hasAttribute("selected"))) {
                        for (var T = p[m].querySelectorAll("option"), C = 0; C < T.length; C++) T[C].removeAttribute("selected");
                        b.setAttribute("selected", "selected");
                    }
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.setDataReplaceStart = function () {
        for (var t = document.querySelectorAll(".ladi-headline, .ladi-paragraph, .ladi-list-paragraph ul"), e = 0; e < t.length; e++) this.convertDataReplaceStr(t[e].innerHTML, !1, t[e], !0);
        this.setDataReplaceElement(!0, !0, null, null, Object.keys(this.runtime.replaceStr));
    }),
    (LadiPageScriptV2.prototype.generateVariantContentString = function (t, e, i, a) {
        var n = [];
        i = this.isEmpty(i) ? " | " : i;
        try {
            this.isEmpty(t) ||
                (e && (t = Base64.decode(t)),
                (t = JSON.parse(t)),
                this.isArray(t.dynamic_content.hide) && t.dynamic_content.hide.length > 0 && n.push(this.const.LANG.HIDE_ELEMENT + " " + t.dynamic_content.hide.join(", ")),
                this.isArray(t.dynamic_content.show) && t.dynamic_content.show.length > 0 && n.push(this.const.LANG.SHOW_ELEMENT + " " + t.dynamic_content.show.join(", ")),
                this.isArray(t.dynamic_content.top) && t.dynamic_content.top.length > 0 && n.push(this.const.LANG.TOP_ELEMENT + " " + t.dynamic_content.top.join(", ")),
                this.isArray(t.dynamic_content.scroll) && t.dynamic_content.scroll.length > 0 && n.push(this.const.LANG.SCROLL_ELEMENT + " " + t.dynamic_content.scroll.join(", ")),
                this.isArray(t.dynamic_content.cookie) && t.dynamic_content.cookie.length > 0 && n.push(this.const.LANG.SET_COOKIE + " " + t.dynamic_content.cookie.join("; ")));
        } catch (t) {}
        return a ? n : n.join(i);
    }),
    (LadiPageScriptV2.prototype.reloadFeeShipping = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.isEmpty(e.runtime.tmp.timeout_reload_fee_shipping) || e.removeTimeout(e.runtime.tmp.timeout_reload_fee_shipping);
        var i = function (t) {
            (e.runtime.tmp.add_to_cart_fee_shipping = t), e.changeTotalPriceCart();
        };
        e.runtime.tmp.timeout_reload_fee_shipping = e.runTimeout(function () {
            var a = window.ladi("_cart_token").get_cookie(),
                n = window.ladi("_checkout_token").get_cookie();
            if (e.isEmpty(a) || e.isEmpty(n)) i(0);
            else if (0 != e.runtime.tmp.list_form_checkout.length) {
                var r = null;
                if (((r = e.isEmpty(t) ? document.getElementById(e.runtime.tmp.list_form_checkout[0]) : e.findAncestor(t.target, "ladi-form")), e.isEmpty(r))) i(0);
                else {
                    var o = null,
                        l = r.querySelector('.ladi-form-item select[name="state"]'),
                        s = r.querySelector('.ladi-form-item select[name="district"]');
                    if (e.isEmpty(l) || e.isEmpty(s)) i(0);
                    else {
                        var c = l.value,
                            d = s.value;
                        if (e.isEmpty(c) || e.isEmpty(d)) return void i(0);
                        ((o = { state_id: c.split(":")[0], district_id: d.split(":")[0] }).state_id = parseInt(o.state_id) || o.state_id), (o.district_id = parseInt(o.district_id) || o.district_id);
                    }
                }
            }
        }, 1e3);
    }),
    (LadiPageScriptV2.prototype.reloadPriceDiscount = function (t) {
        var e = this;
        if ((e instanceof LadiPageScriptV2 || (e = LadiPageScript), !(e.runtime.tmp.is_click_check_price_discount || (e.isEmpty(t) && e.isEmpty(e.runtime.tmp.current_use_coupon))))) {
            e.isEmpty(e.runtime.tmp.timeout_reload_price_discount) || e.removeTimeout(e.runtime.tmp.timeout_reload_price_discount);
            var i = function (t) {
                (e.runtime.tmp.add_to_cart_discount = t), (e.runtime.tmp.is_click_check_price_discount = !1), e.changeTotalPriceCart();
            };
            e.runtime.tmp.timeout_reload_price_discount = e.runTimeout(
                function () {
                    var a = window.ladi("_cart_token").get_cookie(),
                        n = window.ladi("_checkout_token").get_cookie();
                    if (e.isEmpty(a) || e.isEmpty(n)) i(0);
                    else if (0 != e.runtime.tmp.list_form_checkout.length) {
                        var r = null;
                        if (
                            (e.isEmpty(t)
                                ? (r = document.getElementById(e.runtime.tmp.list_form_checkout[0]))
                                : ((r = e.findAncestor(t.target, "ladi-form")), e.isEmpty(r) || ((r = r.querySelector("[data-submit-form-id]")), e.isEmpty(r) || (r = document.getElementById(r.getAttribute("data-submit-form-id"))))),
                            e.isEmpty(r))
                        )
                            i(0);
                        else {
                            var o = { "Content-Type": "application/json", "cart-token": a },
                                l = null,
                                s = r.querySelector('.ladi-form-item input[name="email"]'),
                                c = r.querySelector('.ladi-form-item input[name="coupon"]');
                            if (e.isEmpty(s) || e.isEmpty(c)) i(0);
                            else {
                                var d = s.value,
                                    u = c.value;
                                if (e.isEmpty(u)) return void i(0);
                                if (e.isEmpty(t) && u != e.runtime.tmp.current_use_coupon) return void i(0);
                                (l = { discount_code: u, email: d }),
                                    (e.runtime.tmp.is_click_check_price_discount = !0),
                                    (e.runtime.tmp.current_use_coupon = null),
                                    e.sendRequest("POST", e.const.API_LADISALE_VALIDATE_DISCOUNT.format(n), JSON.stringify(l), !0, o, function (a, n, r) {
                                        if (r.readyState == XMLHttpRequest.DONE) {
                                            if (200 == n)
                                                try {
                                                    var o = JSON.parse(a);
                                                    if (200 == o.code) return e.isEmpty(o.data.discount_error) ? (e.runtime.tmp.current_use_coupon = u) : e.isEmpty(t) || e.showMessage(o.data.discount_error), void i(o.data.discount_price);
                                                } catch (t) {}
                                            i(0);
                                        }
                                    });
                            }
                        }
                    }
                },
                e.isEmpty(t) ? 1e3 : 0
            );
        }
    }),
    (LadiPageScriptV2.prototype.addCartCookie = function (t, e, i, a, n) {
        var r = window.ladi("_cart_token").get_cookie(),
            o = { "Content-Type": "application/json", "store-id": t };
        this.isEmpty(r) || (o["cart-token"] = r);
        var l = this,
            s = {};
        this.sendRequest("POST", this.const.API_LADISALE_ADD, JSON.stringify(e), !0, o, function (t, e, r) {
            if (r.readyState == XMLHttpRequest.DONE) {
                if (200 == e)
                    try {
                        if (200 == (s = JSON.parse(t)).code)
                            return (
                                window.ladi("_cart_token").set_cookie(s.data.cart_token, 30, window.location.pathname),
                                window.ladi("_checkout_token").set_cookie(s.data.checkout_token, 30, window.location.pathname),
                                l.isFunction(i) && i(),
                                l.isFunction(n) && n(),
                                l.reloadPriceDiscount(),
                                void l.reloadFeeShipping()
                            );
                    } catch (t) {}
                l.isFunction(a) && a(s), l.isFunction(n) && n();
            }
        });
    }),
    (LadiPageScriptV2.prototype.updateCartCookie = function (t, e, i, a) {
        var n = window.ladi("_cart_token").get_cookie(),
            r = { "Content-Type": "application/json" };
        this.isEmpty(n) || (r["cart-token"] = n);
        var o = this,
            l = {};
        this.sendRequest("POST", this.const.API_LADISALE_UPDATE, JSON.stringify(t), !0, r, function (t, n, r) {
            if (r.readyState == XMLHttpRequest.DONE) {
                if (200 == n)
                    try {
                        if (200 == (l = JSON.parse(t)).code) return o.isFunction(e) && e(), o.isFunction(a) && a(), o.reloadPriceDiscount(), void o.reloadFeeShipping();
                    } catch (t) {}
                o.isFunction(i) && i(l), o.isFunction(a) && a();
            }
        });
    }),
    (LadiPageScriptV2.prototype.createCartData = function () {
        (this.runtime.tmp.cart = []), (this.runtime.tmp.add_to_cart_discount = 0), (this.runtime.tmp.add_to_cart_fee_shipping = 0);
        var t = this,
            e = function () {
                t.runtime.tmp.generateCart(), t.changeTotalPriceCart(), t.runResizeAll();
            },
            i = window.ladi("_cart_token").get_cookie(),
            a = { "Content-Type": "application/json" };
        if (!this.isEmpty(i))
            return (
                (a["cart-token"] = i),
                void this.sendRequest("GET", this.const.API_LADISALE_SHOW, null, !0, a, function (i, a, n) {
                    if (n.readyState == XMLHttpRequest.DONE) {
                        if (200 == a)
                            try {
                                var r = JSON.parse(i);
                                200 == r.code &&
                                    r.data.items.forEach(function (e) {
                                        var i = t.isEmpty(e.src) ? "" : e.src;
                                        t.isEmpty(i) || (i = "https://" + t.const.STATIC_W_DOMAIN + "/" + i),
                                            -1 ==
                                                t.runtime.tmp.cart.findIndex(function (t) {
                                                    return t.store_id == e.store_id && t.product_id == e.product_id && t.product_variant_id == e.product_variant_id;
                                                }) &&
                                                t.runtime.tmp.cart.push({
                                                    store_id: e.store_id,
                                                    product_id: e.product_id,
                                                    product_variant_id: e.product_variant_id,
                                                    name: e.product_name,
                                                    title: e.option_name,
                                                    price: e.price,
                                                    image: i,
                                                    quantity: e.quantity,
                                                    inventory_checked: e.inventory_checked,
                                                    available_quantity: e.available_quantity,
                                                    currency: r.data.store_info.currency,
                                                });
                                    });
                            } catch (t) {}
                        e();
                    }
                })
            );
        e();
    }),
    (LadiPageScriptV2.prototype.changeTotalPriceCart = function (t) {
        var e = 0,
            i = 0;
        this.runtime.tmp.cart.forEach(function (t) {
            (e += t.price * t.quantity), (i += t.quantity);
        }),
            (e = e < 0 ? 0 : e);
        var a = this.runtime.tmp.add_to_cart_fee_shipping || 0,
            n = this.runtime.tmp.add_to_cart_discount || 0,
            r = e + a - n;
        if (((r = r < 0 ? 0 : r), t)) return { cart_price: e, cart_checkout_price: r, cart_fee_shipping: a, cart_discount: n, total_quantity: i };
        var o = this.formatNumber(e, 3),
            l = this.formatNumber(r, 3),
            s = this.formatNumber(a, 3),
            c = this.formatNumber(n, 3);
        if (this.runtime.tmp.cart.length > 0 && !this.isEmpty(this.runtime.tmp.cart[0].currency) && !this.isEmpty(this.runtime.tmp.cart[0].currency.symbol)) {
            var d = this.runtime.tmp.cart[0].currency.symbol;
            (o = this.formatCurrency(e, d, !0)), (l = this.formatCurrency(r, d, !0)), (s = this.formatCurrency(a, d, !0)), (c = this.formatCurrency(n, d, !0));
        }
        this.setDataReplaceStr("cart_price", o),
            this.setDataReplaceStr("cart_checkout_price", l),
            this.setDataReplaceStr("cart_fee_shipping", s),
            this.setDataReplaceStr("cart_discount", c),
            this.setDataReplaceStr("cart_quantity", i),
            this.setDataReplaceElement(!1);
    }),
    (LadiPageScriptV2.prototype.removeAddToCartProduct = function (t) {
        var e = this.runtime.tmp.cart.findIndex(function (e) {
                return e.product_variant_id == t;
            }),
            i = this;
        -1 != e &&
            this.updateCartCookie(
                { type: "LP", product_variant_id: t, quantity: 0 },
                function () {
                    i.runtime.tmp.cart.splice(e, 1),
                        i.runtime.tmp.generateCart(),
                        i.changeTotalPriceCart(),
                        0 == i.runtime.tmp.cart.length && (window.ladi("_cart_token").delete_cookie(), window.ladi("_checkout_token").delete_cookie()),
                        i.runResizeAll();
                },
                function (t) {
                    i.showMessage(t.message);
                }
            );
    }),
    (LadiPageScriptV2.prototype.buttonAddToCartProductQuantity = function (t, e) {
        if (this.isArray(this.runtime.tmp.cart) && 0 != this.runtime.tmp.cart.length) {
            var i = this.findAncestor(t, "ladi-cart-quantity");
            if (!this.isEmpty(i)) {
                var a = i.querySelector("input");
                if (!this.isEmpty(a)) {
                    var n = parseInt(a.value) || 0;
                    (a.value = n + e < a.getAttribute("min") ? a.getAttribute("min") : n + e), a.value != n && this.fireEvent(a, "input");
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.changeAddToCartProductQuantity = function (t, e, i) {
        var a = this.runtime.tmp.cart.findIndex(function (t) {
                return t.product_variant_id == e;
            }),
            n = this,
            r = !1,
            o = -1;
        if (-1 != a) {
            var l = this.runtime.tmp.cart[a].quantity;
            if (this.isEmpty(t.value)) i && (t.value = 1), (this.runtime.tmp.cart[a].quantity = 1);
            else {
                var s = parseInt(t.value) || 0;
                1 == this.runtime.tmp.cart[a].inventory_checked ? (s > (o = this.runtime.tmp.cart[a].available_quantity) && ((s = o), (r = !0)), s <= 0 && ((s = 0), o > 0 && (s = 1))) : (s = s <= 0 ? 1 : s),
                    (this.runtime.tmp.cart[a].quantity = s),
                    (t.value = s);
            }
            r && this.showMessage(this.const.LANG.ADD_TO_CART_MAX_QUANTITY, { max: o });
            var c = this.runtime.tmp.cart[a].quantity;
            if (l == c) return void (t.value = l);
            this.updateCartCookie(
                { type: "LP", product_variant_id: this.runtime.tmp.cart[a].product_variant_id, quantity: c },
                null,
                function (t) {
                    (n.runtime.tmp.cart[a].quantity -= c - l), n.showMessage(t.message);
                },
                function () {
                    n.changeTotalPriceCart();
                    var i = n.runtime.tmp.cart[a].price * n.runtime.tmp.cart[a].quantity,
                        r = n.formatNumber(i, 3);
                    n.isObject(n.runtime.tmp.cart[a].currency) && !n.isEmpty(n.runtime.tmp.cart[a].currency.symbol) && (r = n.formatCurrency(i, n.runtime.tmp.cart[a].currency.symbol, !0));
                    for (var o = document.querySelectorAll('.ladi-cart-price span[data-product-variant-id="' + e + '"]'), l = 0; l < o.length; l++)
                        if (o[l].getAttribute("data-store-id") == n.runtime.tmp.cart[a].store_id && o[l].getAttribute("data-product-id") == n.runtime.tmp.cart[a].product_id) {
                            o[l].innerHTML = r;
                            var s = n.findAncestor(o[l], "ladi-cart-row");
                            if (!n.isEmpty(s)) {
                                var c = n.findAncestor(t, "ladi-element"),
                                    d = n.findAncestor(s, "ladi-element");
                                if (!n.isEmpty(c) && !n.isEmpty(d) && c.id == d.id) continue;
                                var u = s.querySelector(".ladi-cart-image-quantity");
                                n.isEmpty(u) || (u.innerHTML = n.runtime.tmp.cart[a].quantity);
                                var p = s.querySelector(".ladi-cart-quantity input");
                                n.isEmpty(p) || (p.value = n.runtime.tmp.cart[a].quantity);
                            }
                        }
                }
            );
        }
    }),
    (LadiPageScriptV2.prototype.generateHtmlCart = function (t, e, i) {
        var a = this,
            n = [];
        n = i
            ? a.runtime.tmp.cart
            : [
                  {
                      store_id: 0,
                      product_id: 0,
                      product_variant_id: 0,
                      name: "Product Name",
                      title: "Product Variant",
                      price: 9999,
                      image: LadiPage.getRootScope().logoUrlColor,
                      quantity: 1,
                      inventory_checked: 0,
                      available_quantity: 999,
                      currency: { symbol: LadiPage.getRootScope().getStoreCurrency() },
                  },
              ];
        var r = "";
        if (((r += "<tbody>"), 0 == n.length)) r += '<tr><td class="ladi-cart-no-product">' + e + "</td></tr>";
        else {
            n.forEach(function (e) {
                var n = a.getOptimizeImage(e.image, 60, 60, !0, !1, !0, i);
                (r += '<tr class="ladi-cart-row"><td class="ladi-cart-image"><img src="' + n + '" />'),
                    t == a.const.CART_LAYOUT.viewonly && (r += '<span class="ladi-cart-image-quantity">' + e.quantity + "</span>"),
                    (r += "</td>"),
                    (r += '<td class="ladi-cart-title"><span class="ladi-cart-title-name">' + e.name + '</span><span class="ladi-cart-title-variant">' + (e.title || "") + "</span></td>"),
                    t == a.const.CART_LAYOUT.editable &&
                        (r +=
                            '<td class="ladi-cart-quantity"><div class="ladi-cart-quantity-content"><button onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, -1);" type="button"><span>-</span></button><input' +
                            (i ? "" : " disabled") +
                            ' type="number" min="1" value="' +
                            e.quantity +
                            '" oninput="javascript: LadiPageScript.changeAddToCartProductQuantity(this, ' +
                            e.product_variant_id +
                            ', true);" /><button onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, 1);" type="button"><span>+</span></button></div></td>'),
                    (r += '<td class="ladi-cart-price"><span data-store-id="' + e.store_id + '" data-product-id="' + e.product_id + '" data-product-variant-id="' + e.product_variant_id + '">');
                var o = e.price * e.quantity,
                    l = a.formatNumber(o, 3);
                a.isObject(e.currency) && !a.isEmpty(e.currency.symbol) && (l = a.formatCurrency(o, e.currency.symbol, !0)),
                    (r += l + "</span></td>"),
                    t == a.const.CART_LAYOUT.editable &&
                        ((r += '<td class="ladi-cart-action"><button onclick="javascript: LadiPageScript.removeAddToCartProduct(' + e.product_variant_id + ');" type="button"><span>X</span></button></td>'), (r += "</tr>"));
            });
        }
        return (r += "</tbody>");
    }),
    (LadiPageScriptV2.prototype.getProductVariantId = function (t, e) {
        var i = null,
            a = this.findAncestor(t, "ladi-element"),
            n = this;
        if (!this.isEmpty(a)) {
            var r = this.runtime.eventData[a.id];
            if (!this.isEmpty(r) && r["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combined) {
                var o = a.querySelector("select.ladi-form-control");
                if (!this.isEmpty(o) && !this.isEmpty(o.value)) {
                    var l = o.querySelector('option[value="' + o.value + '"]');
                    this.isEmpty(l) || (i = l.getAttribute("data-product-variant-id"));
                }
            }
            if (!this.isEmpty(r) && r["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combobox) {
                for (var s = a.querySelectorAll(".ladi-form-item select[data-product-variant-id]"), c = {}, d = 0; d < s.length; d++) c[s[d].getAttribute("data-product-variant-id")] = (s[d].value || "").trim();
                this.isArray(e.variants) &&
                    e.variants.forEach(function (t) {
                        if (n.isEmpty(i)) {
                            var e = !0;
                            if (n.isString(t.option_ids))
                                for (var a = t.option_ids.split("/"), r = 0; r < a.length; r++)
                                    if (c[a[r].trim()] != (t["option" + (r + 1)] || "").trim()) {
                                        e = !1;
                                        break;
                                    }
                            e && (i = t.product_variant_id);
                        }
                    });
            }
        }
        return i;
    }),
    (LadiPageScriptV2.prototype.getProductVariantIndex = function (t, e) {
        var i = this,
            a = -1,
            n = e["option.product_type"],
            r = e["option.ladisale_store_id"] || null,
            o = e["option.product_id"],
            l = i.generateVariantProduct(e, !1, null, null, null, null, !0, !0);
        if (!(i.isObject(l) && i.isObject(l.store_info) && i.isObject(l.product) && i.isArray(l.product.variants))) return a;
        this.runtime.isClient
            ? Object.keys(this.runtime.eventData).forEach(function (e) {
                  if ((i.isEmpty(t) || t == e) && -1 == a) {
                      var s = i.runtime.eventData[e];
                      if ("form" == s.type && s["option.is_add_to_cart"] && s["option.product_type"] == n && s["option.product_id"] == o && s["option.ladisale_store_id"] == r) {
                          var c = document.getElementById(e);
                          if (!i.isEmpty(c)) {
                              var d = c.querySelector('[data-variant="true"]');
                              if (!i.isEmpty(d)) {
                                  var u = i.runtime.eventData[d.id];
                                  if (!i.isEmpty(u)) {
                                      if (u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combobox) {
                                          var p = d.querySelectorAll(".ladi-form-item select[data-product-variant-id]");
                                          a = l.product.variants.findIndex(function (t) {
                                              for (
                                                  var e = !0,
                                                      a = null,
                                                      n = function (t) {
                                                          return t == a;
                                                      },
                                                      r = 0;
                                                  r < p.length;
                                                  r++
                                              )
                                                  if (p[r].getAttribute("data-store-id") == l.store_info.id && p[r].getAttribute("data-product-id") == t.product_id) {
                                                      a = p[r].getAttribute("data-product-variant-id");
                                                      var o = p[r].value;
                                                      if (i.isString(t.option_ids)) {
                                                          var s = t.option_ids.split("/").findIndex(n);
                                                          if (-1 != s && t["option" + (s + 1)] != o) {
                                                              e = !1;
                                                              break;
                                                          }
                                                      }
                                                  }
                                              return e;
                                          });
                                      }
                                      if (u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combined) {
                                          var m = d.querySelector(".ladi-form-control");
                                          if (m.getAttribute("data-store-id") != l.store_info.id || m.getAttribute("data-product-id") != l.product.product_id) return;
                                          (a = m.value), (a = i.isEmpty(a) ? -1 : parseInt(a));
                                      }
                                  }
                              }
                          }
                      }
                  }
              })
            : (a = LadiPage.getProductVariantIndex(t, e, l));
        return a;
    }),
    (LadiPageScriptV2.prototype.generateProductKey = function (t, e, i, a, n, r) {
        var o = this,
            l = i["option.product_type"],
            s = i["option.product_mapping_name"],
            c = o.generateVariantProduct(i, !1, null, null, null, null, !0, !0, function (e) {
                o.generateProductKey(t, !1, i, a, n, r);
            });
        function d(t) {
            return (t >= 10 ? "" : "0") + t;
        }
        if (o.isObject(c) && o.isObject(c.product)) {
            var u = null,
                p = function () {
                    if (l == o.const.FORM_CONFIG_TYPE.ladisales) {
                        if (
                            (-1 != ["name", "content"].indexOf(s) && ((u = c.product[s]), (t = u)),
                            -1 != ["description"].indexOf(s) && ((u = c.product[s]), (t = u)),
                            -1 != ["image"].indexOf(s) && ((u = c.product[s]), o.isObject(u) && ((t = u.src), o.isEmpty(t) || (t = "https://" + o.const.STATIC_W_DOMAIN + "/" + t))),
                            -1 != ["images"].indexOf(s) &&
                                ((u = c.product[s]),
                                o.isArray(u) &&
                                    ((t = []),
                                    u.forEach(function (e) {
                                        o.isEmpty(e.src) || t.push({ src: "https://" + o.const.STATIC_W_DOMAIN + "/" + e.src });
                                    }))),
                            o.isArray(c.product.variants) && c.product.variants.length > 0)
                        ) {
                            var m = a ? 0 : o.getProductVariantIndex(null, i);
                            if (
                                (o.isEmpty(n) ||
                                    (m = c.product.variants.findIndex(function (t) {
                                        return t.product_variant_id == n;
                                    })),
                                -1 != m)
                            ) {
                                var g = c.product.variants[m];
                                if (
                                    (-1 != ["sku"].indexOf(s) && ((u = g[s]), (t = u)),
                                    -1 != ["title"].indexOf(s) && ((u = g[s] || g.product_name), (t = u)),
                                    -1 != ["text_quantity"].indexOf(s) && ((u = 1 == g.inventory_checked ? g[s] : ""), (t = u)),
                                    -1 != ["weight"].indexOf(s) && ((u = g[s]), o.isEmpty(g.weight_unit) || (u += g.weight_unit), (t = u)),
                                    -1 != ["price"].indexOf(s) &&
                                        ((u = o.formatNumber(g[s], 3)),
                                        o.isObject(c.store_info) && o.isObject(c.store_info.currency) && !o.isEmpty(c.store_info.currency.symbol) && (u = o.formatCurrency(g[s], c.store_info.currency.symbol, !0)),
                                        (t = u)),
                                    -1 != ["src"].indexOf(s))
                                ) {
                                    if (((u = g[s]), o.isEmpty(u))) return (s = "image"), p();
                                    (u = "https://" + o.const.STATIC_W_DOMAIN + "/" + u), (t = u);
                                }
                                -1 != ["description"].indexOf(s) && ((u = g[s]), o.isEmpty(u) || (t = u));
                            } else t = u = "";
                        }
                        if (-1 != ["description"].indexOf(s) && o.isEmpty(t)) return (s = "content"), p();
                    } else {
                        if (((u = c.product[s]), o.isBoolean(u))) u = u ? o.const.LANG.OPTION_TRUE : o.const.LANG.OPTION_FALSE;
                        else
                            try {
                                var y = new Date(u);
                                y.toISOString() == u && (u = y.getFullYear() + "-" + d(y.getMonth() + 1) + "-" + d(y.getDate()) + " " + d(y.getHours()) + ":" + d(y.getMinutes()) + ":" + d(y.getSeconds()));
                            } catch (t) {}
                        t = u;
                    }
                    !e && o.isFunction(r) && r(t);
                };
            p();
        }
        return t;
    }),
    (LadiPageScriptV2.prototype.generateVariantProduct = function (t, e, i, a, n, r, o, l, s) {
        var c = e ? "" : null,
            d = this,
            u = t["option.product_type"],
            p = t["option.ladisale_store_id"] || null,
            m = t["option.product_id"],
            g = t["option.data_setting.value"],
            y = t["option.data_setting.type_dataset"],
            _ = t["option.data_setting.sort_name"],
            f = t["option.data_setting.sort_by"],
            h = null,
            v = null;
        if (u == d.const.FORM_CONFIG_TYPE.ladisales) {
            if (!d.isEmpty(m) && !d.isEmpty(p)) {
                if (
                    (d.isEmpty(d.runtime.tmp.product_info[p]) && (d.runtime.tmp.product_info[p] = {}),
                    d.isEmpty(d.runtime.tmp.timeout_product_info[p]) && (d.runtime.tmp.timeout_product_info[p] = {}),
                    (m = parseInt(m) || m),
                    (h = d.runtime.tmp.product_info[p][m]),
                    (v = function () {
                        if (!e) return d.isObject(h) ? h : null;
                        var t = "";
                        if (d.isObject(h)) {
                            if (!d.isObject(h.product)) return t;
                            i == d.const.PRODUCT_VARIANT_TYPE.combined &&
                                ((t +=
                                    '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select data-store-id="' +
                                    h.store_info.id +
                                    '" data-product-id="' +
                                    h.product.product_id +
                                    '" required tabindex="' +
                                    r +
                                    '" class="ladi-form-control ladi-form-control-select" data-selected=""' +
                                    (o ? "" : ' onmousedown="javascript: event.preventDefault();"') +
                                    ">"),
                                d.isArray(h.product.variants) &&
                                    h.product.variants.forEach(function (e, i) {
                                        var a = e.title || e.product_name;
                                        if (n) {
                                            var r = d.formatNumber(e.price, 3);
                                            d.isObject(h.store_info) && d.isObject(h.store_info.currency) && !d.isEmpty(h.store_info.currency.symbol) && (r = d.formatCurrency(e.price, h.store_info.currency.symbol, !0)), (a += " - " + r);
                                        }
                                        t += '<option value="' + i + '" data-product-variant-id="' + e.product_variant_id + '">' + a + "</option>";
                                    }),
                                (t += "</select></div></div>")),
                                i == d.const.PRODUCT_VARIANT_TYPE.combobox &&
                                    d.isArray(h.product.options) &&
                                    h.product.options.forEach(function (e) {
                                        e.is_tmp
                                            ? (t += '<div class="ladi-form-item-box"></div>')
                                            : 0 != e.values.length &&
                                              ((t += '<div class="ladi-form-item-box">'),
                                              d.isEmpty(a) || (t += '<div class="ladi-form-item-title"><span>' + e.name + "</span></div>"),
                                              (t +=
                                                  '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select data-store-id="' +
                                                  h.store_info.id +
                                                  '" data-product-id="' +
                                                  e.product_id +
                                                  '" data-product-variant-id="' +
                                                  e.product_option_id +
                                                  '" required tabindex="' +
                                                  r +
                                                  '" class="ladi-form-control ladi-form-control-select" data-selected=""' +
                                                  (o ? "" : ' onmousedown="javascript: event.preventDefault();"') +
                                                  ">"),
                                              e.values.forEach(function (e) {
                                                  t += '<option value="' + e.name + '">' + e.name + "</option>";
                                              }),
                                              (t += "</select></div></div></div>"));
                                    });
                        }
                        return t;
                    }),
                    d.isNull(h))
                ) {
                    d.runtime.tmp.product_info[p][m] = !0;
                    var E = { product_id: m };
                    return (
                        d.sendRequest("POST", d.const.API_SHOW_PRODUCT, JSON.stringify(E), !0, { "Content-Type": "application/json", "Store-Id": p }, function (t, e, i) {
                            if (i.readyState == XMLHttpRequest.DONE)
                                try {
                                    if (d.isObject(d.runtime.tmp.product_info[p][m])) h = d.runtime.tmp.product_info[p][m];
                                    else {
                                        var a = JSON.parse(t);
                                        h = a.data;
                                    }
                                    d.isObject(h)
                                        ? ((d.runtime.tmp.product_info[p][m] = h), (c = v()), d.isFunction(s) && s(c))
                                        : ((d.runtime.tmp.product_info[p][m] = !1),
                                          d.isEmpty(d.runtime.tmp.timeout_product_info[p][m]) || (d.removeTimeout(d.runtime.tmp.timeout_product_info[p][m]), delete d.runtime.tmp.timeout_product_info[p][m]));
                                } catch (t) {
                                    (d.runtime.tmp.product_info[p][m] = !1),
                                        d.isEmpty(d.runtime.tmp.timeout_product_info[p][m]) || (d.removeTimeout(d.runtime.tmp.timeout_product_info[p][m]), delete d.runtime.tmp.timeout_product_info[p][m]);
                                }
                        }),
                        c
                    );
                }
                !0 === h
                    ? (d.runtime.tmp.timeout_product_info[p][m] = d.runTimeout(function () {
                          d.generateVariantProduct(t, e, i, a, n, r, o, !1, s);
                      }, 100))
                    : ((c = v()), !l && d.isFunction(s) && s(c));
            }
        } else if (!d.isEmpty(m)) {
            if (
                (d.isEmpty(d.runtime.tmp.product_info[p]) && (d.runtime.tmp.product_info[p] = {}),
                d.isEmpty(d.runtime.tmp.timeout_product_info[p]) && (d.runtime.tmp.timeout_product_info[p] = {}),
                (m += ""),
                (h = d.runtime.tmp.product_info[p][m]),
                (v = function () {
                    return e ? "" : d.isObject(h) ? h : null;
                }),
                d.isNull(h))
            )
                return (
                    (d.runtime.tmp.product_info[p][m] = !0),
                    d.loadDataset(g, g, y, _, f, !0, d.runtime.isClient, function (t) {
                        (c = v()), d.isFunction(s) && s(c);
                    }),
                    c
                );
            !0 === h
                ? (d.runtime.tmp.timeout_product_info[p][m] = d.runTimeout(function () {
                      d.generateVariantProduct(t, e, i, a, n, r, o, !1, s);
                  }, 100))
                : ((c = v()), !l && d.isFunction(s) && s(c));
        }
        return c;
    }),
    (LadiPageScriptV2.prototype.getListProductByTagId = function (t, e, i, a, n) {
        var r = this,
            o = t["option.product_type"],
            l = t["option.ladisale_store_id"] || null,
            s = t["option.product_tag_id"],
            c = t["option.data_setting.value"],
            d = t["option.data_setting.type_dataset"],
            u = t["option.collection_setting.type"],
            p = t["option.data_setting.sort_name"],
            m = t["option.data_setting.sort_by"],
            g = null,
            y = null,
            _ = null,
            f = null,
            h = null;
        if (r.isArray(s) && s.length > 0 && !r.isEmpty(l)) {
            if (
                (r.isEmpty(r.runtime.tmp.product_tag_info[o]) && (r.runtime.tmp.product_tag_info[o] = {}),
                r.isEmpty(r.runtime.tmp.timeout_product_tag_info[o]) && (r.runtime.tmp.timeout_product_tag_info[o] = {}),
                s.sort(),
                (_ = JSON.stringify(s) + "_page_" + i + "_limit_" + e),
                (f = r.runtime.tmp.product_tag_info[o][_]),
                (y = function () {
                    var t = null;
                    return (
                        r.isObject(f) &&
                            r.isArray(f.products) &&
                            ((t = { products: f.products, total_record: f.total_record }),
                            r.isEmpty(r.runtime.tmp.product_info[l]) && (r.runtime.tmp.product_info[l] = {}),
                            t.products.forEach(function (t) {
                                r.runtime.tmp.product_info[l][t.product_id] = { store_info: f.store_info, product: t };
                            })),
                        t
                    );
                }),
                r.isNull(f))
            ) {
                r.runtime.tmp.product_tag_info[o][_] = !0;
                var v = { product_tag_ids: s, limit: e };
                r.isEmpty(u) ? (v.type = "group") : (v.paged = i);
                var E = function (t) {
                    (f = t.data),
                        r.isObject(f)
                            ? ((r.runtime.tmp.product_tag_info[o][_] = f), (g = y()), r.isFunction(n) && n(g))
                            : ((r.runtime.tmp.product_tag_info[o][_] = !1),
                              r.isEmpty(r.runtime.tmp.timeout_product_tag_info[o][_]) || (r.removeTimeout(r.runtime.tmp.timeout_product_tag_info[o][_]), delete r.runtime.tmp.timeout_product_tag_info[o][_]));
                };
                if (r.runtime.isClient)
                    r.sendRequest("POST", r.const.API_COLLECTION_PRODUCT, JSON.stringify(v), !0, { "Content-Type": "application/json", "Store-Id": l }, function (t, e, i) {
                        if (i.readyState == XMLHttpRequest.DONE)
                            try {
                                var a = JSON.parse(t);
                                E(a);
                            } catch (t) {
                                (r.runtime.tmp.product_tag_info[o][_] = !1),
                                    r.isEmpty(r.runtime.tmp.timeout_product_tag_info[o][_]) || (r.removeTimeout(r.runtime.tmp.timeout_product_tag_info[o][_]), delete r.runtime.tmp.timeout_product_tag_info[o][_]);
                            }
                    });
                else {
                    var L = function (t) {
                            if (r.isArray(t) && t.length > 1) {
                                var e = { products: [] };
                                t.forEach(function (t) {
                                    if (r.isNull(t.product) && !r.isNull(t.store_info) && !r.isNull(t.total_record)) return (e.store_info = t.store_info), void (e.total_record = t.total_record);
                                    e.products.push(t.product);
                                }),
                                    E({ data: e });
                            }
                        },
                        P = LadiPage.mapping_attribute_option_product_id(t.element, "", s, e, i, !1, !0, function (t) {
                            L(t);
                        });
                    L(P);
                }
                return g;
            }
        } else
            r.isEmpty(c) ||
                ((y = function () {
                    var t = null;
                    if (r.isArray(h)) {
                        var a = r.copy(h);
                        (t = { products: (a = a.splice((i - 1) * e, e)), total_record: h.length }),
                            r.isEmpty(r.runtime.tmp.product_info[l]) && (r.runtime.tmp.product_info[l] = {}),
                            h.forEach(function (t) {
                                r.runtime.tmp.product_info[l][t.id] = { store_info: {}, product: t };
                            });
                    }
                    return t;
                }),
                (h = r.loadDataset(c, c, d, p, m, !0, r.runtime.isClient, function (t) {
                    (h = t), (g = y()), r.isFunction(n) && n(g);
                })));
        return (
            r.isFunction(y) &&
                (!0 === f
                    ? (r.runtime.tmp.timeout_product_tag_info[o][_] = r.runTimeout(function () {
                          r.getListProductByTagId(t, e, i, !1, n);
                      }, 100))
                    : ((g = y()), !a && r.isFunction(n) && n(g))),
            g
        );
    }),
    (LadiPageScriptV2.prototype.getCartCheckoutPrice = function (t) {
        return this.isArray(this.runtime.tmp.cart) && this.runtime.tmp.cart.length > 0 ? this.changeTotalPriceCart(!0).cart_checkout_price : t;
    }),
    (LadiPageScriptV2.prototype.showMessage = function (t, e, i) {
        if (this.isEmpty(t)) this.isFunction(i) && i();
        else {
            var a = document.getElementsByClassName("ladipage-message")[0];
            if (this.isEmpty(a)) {
                var n = this;
                (t = n.convertDataReplaceStr(t, !1, null, !1, e)), ((a = document.createElement("div")).className = "ladipage-message"), document.body.appendChild(a);
                var r = document.createElement("div");
                (r.className = "ladipage-message-box"), a.appendChild(r);
                var o = document.createElement("h1");
                r.appendChild(o), (o.textContent = this.const.LANG.ALERT_TITLE);
                var l = document.createElement("div");
                (l.className = "ladipage-message-text"), r.appendChild(l), (l.innerHTML = t);
                var s = document.createElement("button");
                (s.className = "ladipage-message-close"),
                    r.appendChild(s),
                    (s.textContent = this.const.LANG.ALERT_BUTTON_TEXT),
                    s.focus(),
                    s.addEventListener("click", function (t) {
                        t.stopPropagation(), a.parentElement.removeChild(a), n.isFunction(i) && i();
                    });
            } else this.isFunction(i) && i();
        }
    }),
    (LadiPageScriptV2.prototype.findAncestor = function (t, e) {
        if (this.isNull(t) || this.isNull(t.classList) || !t.classList.contains(e)) for (; (t = t.parentElement) && !t.classList.contains(e); );
        return t;
    }),
    (LadiPageScriptV2.prototype.createStyleElement = function (t, e) {
        var i = document.getElementById(t);
        return this.isEmpty(i) && (((i = document.createElement("style")).id = t), (i.type = "text/css"), document.head.appendChild(i)), i.innerHTML != e && (i.innerHTML = e), i;
    }),
    (LadiPageScriptV2.prototype.createTmpElement = function (t, e, i, a, n) {
        var r = document.createElement(t);
        this.isEmpty(i) ||
            Object.keys(i).forEach(function (t) {
                r.setAttribute(t, i[t]);
            });
        var o = document.createElement("div");
        return o.appendChild(r), a ? (r.outerHTML = e) : (r.innerHTML = e), n ? o : o.firstChild;
    }),
    (LadiPageScriptV2.prototype.getCountdownTime = function (t, e) {
        var i = Math.floor(t / 1e3),
            a = i % 86400,
            n = a % 3600,
            r = Math.floor(i / 86400),
            o = Math.floor(a / 3600),
            l = Math.floor(n / 60),
            s = n % 60;
        (r = r < 0 ? 0 : r), (o = o < 0 ? 0 : o), (l = l < 0 ? 0 : l), (s = s < 0 ? 0 : s), (r = r < 10 ? "0" + r : r), (o = o < 10 ? "0" + o : o), (l = l < 10 ? "0" + l : l), (s = s < 10 ? "0" + s : s);
        var c = {};
        return (c[this.const.COUNTDOWN_ITEM_TYPE.day] = r), (c[this.const.COUNTDOWN_ITEM_TYPE.hour] = o), (c[this.const.COUNTDOWN_ITEM_TYPE.minute] = l), (c[this.const.COUNTDOWN_ITEM_TYPE.seconds] = s), this.isEmpty(e) ? c : c[e];
    }),
    (LadiPageScriptV2.prototype.getElementBoundingClientRect = function (t) {
        var e = t.getBoundingClientRect();
        return (this.isNull(e.x) || this.isNull(e.y)) && ((e.x = e.left), (e.y = e.top)), e;
    }),
    (LadiPageScriptV2.prototype.getElementViewBox = function (t) {
        var e = { x: 0, y: 0, width: 0, height: 0 },
            i = t.getAttribute("viewBox").split(" ");
        return (e.x = parseFloatLadiPage(i[0]) || 0), (e.y = parseFloatLadiPage(i[1]) || 0), (e.width = parseFloatLadiPage(i[2]) || 0), (e.height = parseFloatLadiPage(i[3]) || 0), e;
    }),
    (LadiPageScriptV2.prototype.getEventCursorData = function (t) {
        return (
            (this.isNull(t.pageX) || this.isNull(t.pageY)) &&
                (!this.isEmpty(t.touches) && t.touches.length > 0
                    ? ((t.pageX = t.touches[0].pageX), (t.pageY = t.touches[0].pageY))
                    : !this.isEmpty(t.targetTouches) && t.targetTouches.length > 0
                    ? ((t.pageX = t.targetTouches[0].pageX), (t.pageY = t.targetTouches[0].pageY))
                    : !this.isEmpty(t.changedTouches) && t.changedTouches.length > 0 && ((t.pageX = t.changedTouches[0].pageX), (t.pageY = t.changedTouches[0].pageY))),
            t
        );
    }),
    (LadiPageScriptV2.prototype.getElementAHref = function (t, e) {
        var i = document.createElement("a");
        return !e || t.toLowerCase().startsWith("http://") || t.toLowerCase().startsWith("https://") || (t = "http://" + t), (i.href = t), i;
    }),
    (LadiPageScriptV2.prototype.loadScript = function (t, e, i, a) {
        var n = document.createElement("script");
        ((n.type = "text/javascript"), this.isFunction(i) && ((a = i), (i = e), (e = null)), i && (n.async = !0), this.isObject(e)) &&
            Object.keys(e).forEach(function (t) {
                n.setAttribute(t, e[t]);
            });
        n.addEventListener("load", a), (n.src = t), document.head.appendChild(n);
    }),
    (LadiPageScriptV2.prototype.isObject = function (t) {
        return !this.isFunction(t) && !this.isArray(t) && t instanceof Object;
    }),
    (LadiPageScriptV2.prototype.isArray = function (t) {
        return t instanceof Array;
    }),
    (LadiPageScriptV2.prototype.isFunction = function (t) {
        return "function" == typeof t || t instanceof Function;
    }),
    (LadiPageScriptV2.prototype.isBoolean = function (t) {
        return "boolean" == typeof t;
    }),
    (LadiPageScriptV2.prototype.isString = function (t) {
        return "string" == typeof t || t instanceof String;
    }),
    (LadiPageScriptV2.prototype.isEmpty = function (t) {
        return !!this.isNull(t) || (this.isString(t) ? 0 == (t = t.trim()).length || "undefined" == t.toLowerCase() : !!this.isArray(t) && 0 == t.length);
    }),
    (LadiPageScriptV2.prototype.isNull = function (t) {
        return void 0 === t || void 0 == t;
    }),
    (LadiPageScriptV2.prototype.fireEvent = function (t, e) {
        var i = null;
        return document.createEventObject ? ((i = document.createEventObject()), t.fireEvent("on" + e, i)) : ((i = document.createEvent("HTMLEvents")).initEvent(e, !0, !0), !t.dispatchEvent(i));
    });
var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (t) {
            var e,
                i,
                a,
                n,
                r,
                o,
                l,
                s = "",
                c = 0;
            for (t = Base64._utf8_encode(t); c < t.length; )
                (n = (e = t.charCodeAt(c++)) >> 2),
                    (r = ((3 & e) << 4) | ((i = t.charCodeAt(c++)) >> 4)),
                    (o = ((15 & i) << 2) | ((a = t.charCodeAt(c++)) >> 6)),
                    (l = 63 & a),
                    isNaN(i) ? (o = l = 64) : isNaN(a) && (l = 64),
                    (s = s + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(r) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(l));
            return s;
        },
        decode: function (t) {
            var e,
                i,
                a,
                n,
                r,
                o,
                l = "",
                s = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < t.length; )
                (e = (Base64._keyStr.indexOf(t.charAt(s++)) << 2) | ((n = Base64._keyStr.indexOf(t.charAt(s++))) >> 4)),
                    (i = ((15 & n) << 4) | ((r = Base64._keyStr.indexOf(t.charAt(s++))) >> 2)),
                    (a = ((3 & r) << 6) | (o = Base64._keyStr.indexOf(t.charAt(s++)))),
                    (l += String.fromCharCode(e)),
                    64 != r && (l += String.fromCharCode(i)),
                    64 != o && (l += String.fromCharCode(a));
            return (l = Base64._utf8_decode(l));
        },
        _utf8_encode: function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i);
                a < 128
                    ? (e += String.fromCharCode(a))
                    : a > 127 && a < 2048
                    ? ((e += String.fromCharCode((a >> 6) | 192)), (e += String.fromCharCode((63 & a) | 128)))
                    : ((e += String.fromCharCode((a >> 12) | 224)), (e += String.fromCharCode(((a >> 6) & 63) | 128)), (e += String.fromCharCode((63 & a) | 128)));
            }
            return e;
        },
        _utf8_decode: function (t) {
            for (var e = "", i = 0, a = 0, n = 0, r = 0; i < t.length; )
                (a = t.charCodeAt(i)) < 128
                    ? ((e += String.fromCharCode(a)), i++)
                    : a > 191 && a < 224
                    ? ((r = t.charCodeAt(i + 1)), (e += String.fromCharCode(((31 & a) << 6) | (63 & r))), (i += 2))
                    : ((r = t.charCodeAt(i + 1)), (n = t.charCodeAt(i + 2)), (e += String.fromCharCode(((15 & a) << 12) | ((63 & r) << 6) | (63 & n))), (i += 3));
            return e;
        },
    },
    LadiPageScript = LadiPageScript || new LadiPageScriptV2();
LadiPageScript.init();
var LadiFormApi = LadiFormApi || {},
    parseFloatLadiPage = function (t, e) {
        var i = parseFloat(t);
        return parseFloat(LadiPageScript.formatNumber(i, 21, null, e || 6));
    },
    lightbox_run = function (t, e, i, a, n, r, o, l) {
        var s = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!LadiPageScript.isEmpty(s)) {
            var c = JSON.stringify({ html: t, url: e, is_video: i, video_type: r, video_value: o }),
                d = Object.keys(LadiPageScript.runtime.list_lightbox_id);
            -1 == d.indexOf(c) && (LadiPageScript.runtime.list_lightbox_id[c] = d.length + 1);
            var u = LadiPageScript.runtime.list_lightbox_id[c];
            n = n + "_" + u;
            var p = document.getElementById(n),
                m = !1;
            LadiPageScript.isEmpty(p) ? ((p = document.createElement("div")), s.appendChild(p), (p.outerHTML = t), (p = s.lastChild), (m = !0)) : i && LadiPageScript.runEventReplayVideo(n, r, !0);
            var g = document.createElement("div");
            (g.className = "lightbox-close"), g.setAttribute("data-hidden", !0), s.appendChild(g), p.setAttribute("id", n), p.setAttribute("data-hidden", !0), p.classList.remove("lightbox-hidden");
            var y = function () {
                    if (((p = p = document.getElementById(n)), !LadiPageScript.isEmpty(p))) {
                        if ("IFRAME" == p.tagName) {
                            var t = parseFloatLadiPage(getComputedStyle(p).width) || 0,
                                e = parseFloatLadiPage(getComputedStyle(p).height) || 0;
                            if (t > 0 || e > 0) {
                                var i = 0.9 * document.body.clientWidth,
                                    a = 0.9 * LadiPageScript.getHeightDevice(),
                                    r = i,
                                    o = (e / t) * r;
                                o > a && (r = (o = a) * (t / e)), p.style.setProperty("width", (parseFloatLadiPage(r) || 0) + "px"), p.style.setProperty("height", (parseFloatLadiPage(o) || 0) + "px");
                            }
                        }
                        if (((g = s.getElementsByClassName("lightbox-close")[0]), !LadiPageScript.isEmpty(g))) {
                            var l = LadiPageScript.getElementBoundingClientRect(p),
                                c = 10,
                                d = 10;
                            l.x - 5 - g.clientWidth > d && (d = l.x - 5 - g.clientWidth),
                                l.y - 5 - g.clientHeight > c && (c = l.y - 5 - g.clientHeight),
                                (d += LadiPageScript.runtime.widthScrollBar),
                                g.style.setProperty("right", d + "px"),
                                g.style.setProperty("top", c + "px");
                        }
                    }
                },
                _ = function () {
                    LadiPageScript.runTimeout(function () {
                        (p = p = document.getElementById(n)),
                            LadiPageScript.isEmpty(p) || (p.setAttribute("data-opacity", 0), p.removeAttribute("data-hidden")),
                            (g = s.getElementsByClassName("lightbox-close")[0]),
                            LadiPageScript.isEmpty(g) || (g.setAttribute("data-opacity", 0), g.removeAttribute("data-hidden")),
                            y(),
                            LadiPageScript.isEmpty(p) || p.removeAttribute("data-opacity"),
                            LadiPageScript.isEmpty(g) || g.removeAttribute("data-opacity");
                    }, 100);
                };
            g.style.setProperty("top", "-100px"), g.style.setProperty("right", "-100px");
            var f = "load";
            if ((i && r == LadiPageScript.const.VIDEO_TYPE.direct && (f = "loadedmetadata"), m && (p.addEventListener(f, _), p.addEventListener("error", _)), i)) {
                var h = e;
                r == LadiPageScript.const.VIDEO_TYPE.youtube && ((e = null), (h = o)),
                    m
                        ? LadiPageScript.runEventPlayVideo(n, r, h, !1, !1, !0, !1, l, function (t) {
                              LadiPageScript.isEmpty(t) ? _() : (t.addEventListener(f, _), t.addEventListener("error", _));
                          })
                        : _();
            }
            l || s.style.setProperty("display", "block"), LadiPageScript.isEmpty(e) || (m ? (p.src = e) : _());
            var v = function () {
                    var t = document.getElementById(LadiPageScript.runtime.backdrop_popup_id);
                    return LadiPageScript.isEmpty(t) || "none" == getComputedStyle(t).display;
                },
                E = 0;
            v() ? ((E = window.scrollY), (LadiPageScript.runtime.tmp.bodyScrollY = E)) : (E = LadiPageScript.runtime.tmp.bodyScrollY);
            var L = function () {
                s.style.removeProperty("display"),
                    (p = p = document.getElementById(n)),
                    LadiPageScript.isEmpty(p) || (a && !i ? p.parentElement.removeChild(p) : (p.classList.add("lightbox-hidden"), i && LadiPageScript.runEventReplayVideo(n, r, !1))),
                    (g = s.getElementsByClassName("lightbox-close")[0]),
                    LadiPageScript.isEmpty(g) || g.parentElement.removeChild(g);
                var t = document.getElementById("style_lightbox");
                LadiPageScript.isEmpty(t) || t.parentElement.removeChild(t);
                var e = v();
                e && !LadiPageScript.isEmpty(LadiPageScript.runtime.tmp.bodyScrollY) && window.scrollTo(0, LadiPageScript.runtime.tmp.bodyScrollY), e && (LadiPageScript.runtime.tmp.bodyScrollY = null);
            };
            if (
                (g.addEventListener("click", function (t) {
                    t.stopPropagation(), L();
                }),
                !l)
            ) {
                var P = "body {";
                (P += "position: fixed !important;"), (P += "width: 100% !important;"), (P += "top: -" + E + "px"), (P += "}"), LadiPageScript.createStyleElement("style_lightbox", P);
            }
            LadiPageScript.isEmpty(s.getAttribute("data-load-event")) &&
                (s.setAttribute("data-load-event", !0),
                s.addEventListener("click", function (t) {
                    t.stopPropagation(), t.target.id == s.id && ((g = s.getElementsByClassName("lightbox-close")[0]), LadiPageScript.isEmpty(g) || g.click());
                }),
                window.addEventListener("resize", y)),
                l && L();
        }
    },
    lightbox_iframe = function (t, e, i, a, n, r) {
        if (!LadiPageScript.isEmpty(t)) {
            var o = "margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 90%; max-height: 90%;",
                l = '<iframe id="' + (i = i || "lightbox_iframe") + '" class="lightbox-item" style="' + o + '" frameborder="0" allowfullscreen></iframe>',
                s = t,
                c = LadiPageScript.createTmpElement("iframe", s, null, !0);
            LadiPageScript.isEmpty(c) || "IFRAME" != c.tagName || ((s = c.src), (i = c.id || i), c.removeAttribute("src"), c.setAttribute("style", o), c.classList.add("lightbox-item"), (l = c.outerHTML)),
                lightbox_run(l, s, e, !0, i, a, n, r);
        }
    },
    lightbox_image = function (t) {
        if (!LadiPageScript.isEmpty(t)) {
            lightbox_run('<img class="lightbox-item" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; object-fit: scale-down; max-width: 90%; max-height: 90%;" />', t, !1, !1, "lightbox_image");
        }
    },
    lightbox_video = function (t, e, i) {
        if (!LadiPageScript.isEmpty(t) && !LadiPageScript.isEmpty(e)) {
            LadiPageScript.pauseAllVideo();
            var a = "lightbox_player";
            if (
                (e == LadiPageScript.const.VIDEO_TYPE.youtube &&
                    lightbox_iframe('<iframe id="' + a + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', !0, a, e, t, i),
                e == LadiPageScript.const.VIDEO_TYPE.direct)
            ) {
                lightbox_run(
                    '<video class="lightbox-item" id="lightbox_player" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 90%; max-height: 90%; object-fit: cover;"></video>',
                    t,
                    !0,
                    !1,
                    a,
                    e,
                    null,
                    i
                );
            }
        }
    },
    LadiPageLibraryV2 = LadiPageLibraryV2 || function () {};
(LadiPageLibraryV2.prototype.get_url = function (t, e) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var i = this.id,
            a = "";
        if (e && LadiPageScript.isObject(t))
            Object.keys(t).forEach(function (e) {
                LadiPageScript.isEmpty(a) || (a += "&"), (a += e + "=" + encodeURIComponent(t[e]));
            });
        if (!LadiPageScript.isEmpty(a)) {
            var n = LadiPageScript.createTmpElement("a", "", { href: i });
            (n.search = n.search + (LadiPageScript.isEmpty(n.search) ? "?" : "&") + a), (i = n.href);
        }
        return (i = LadiPageScript.getLinkUTMRedirect(i, window.location.search)), (i = LadiPageScript.convertDataReplaceStr(i, !0, null, !1, t));
    }
}),
    (LadiPageLibraryV2.prototype.open_url = function (t) {
        if (!LadiPageScript.isEmpty(this.id)) {
            var e = this.id;
            LadiPageScript.isEmpty(t) || "_self" == t.toLowerCase() ? (window.location.href = e) : window.open(e, t);
        }
    }),
    (LadiPageLibraryV2.prototype.delete_cookie = function () {
        LadiPageScript.isEmpty(this.id) ||
            ((document.cookie = this.id + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT; path = /"),
            "/" != window.location.pathname && (document.cookie = this.id + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT; path = " + window.location.pathname));
    }),
    (LadiPageLibraryV2.prototype.get_cookie = function () {
        if (!LadiPageScript.isEmpty(this.id)) {
            for (var t = this.id + "=", e = document.cookie.split(";"), i = "", a = 0; a < e.length; a++) {
                for (var n = e[a]; " " == n.charAt(0); ) n = n.substring(1);
                if (0 == n.indexOf(t)) {
                    i = n.substring(t.length, n.length);
                    break;
                }
            }
            return decodeURIComponent(i);
        }
    }),
    (LadiPageLibraryV2.prototype.set_cookie = function (t, e, i, a, n) {
        if (!LadiPageScript.isEmpty(this.id)) {
            var r = "";
            if (n) r = "0";
            else {
                var o = new Date();
                (e = LadiPageScript.isEmpty(e) ? 365 : e), o.setTime(o.getTime() + 24 * e * 60 * 60 * 1e3), (r = "expires = " + o.toUTCString());
            }
            var l = this.id + " = " + t;
            LadiPageScript.isEmpty(r) || (l += "; " + r), LadiPageScript.isEmpty(a) || (l += "; domain = " + a), LadiPageScript.isEmpty(i) || LadiPageScript.runtime.isIE || (l += "; path = " + i), (document.cookie = l);
        }
    }),
    (LadiPageLibraryV2.prototype.submit = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = t.querySelector('.ladi-form button[type="submit"]');
            LadiPageScript.isEmpty(e) || e.click();
        }
    }),
    (LadiPageLibraryV2.prototype.scroll = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            for (var e = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < e.length; i++)
                e[i].id != this.id && e[i].hasAttribute("data-popup-backdrop") && "block" == e[i].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(e[i].id, !0);
            var a = function () {
                t.scrollIntoView({ behavior: "smooth" });
            };
            try {
                if (!LadiPageScript.isNull(window.jQuery)) return void $("html, body").animate({ scrollTop: $(t).offset().top });
                a();
            } catch (t) {
                a();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.value = function (t) {
        if (!LadiPageScript.isEmpty(this.id)) {
            var e = [],
                i = !1,
                a = document.querySelectorAll("#" + this.id + " > ." + ["ladi-button .ladi-headline", "ladi-headline", "ladi-paragraph", "ladi-list-paragraph"].join(", #" + this.id + " > .")),
                n = document.querySelectorAll(
                    "#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-item > input", "ladi-form-item-container .ladi-form-item > textarea", "ladi-form-item-container .ladi-form-item > select"].join(", #" + this.id + " > .")
                ),
                r = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-checkbox-item > input"].join(", #" + this.id + " > .")),
                o = 0;
            for (o = 0; o < a.length; o++) LadiPageScript.isNull(t) ? e.push(a[o].innerHTML) : (a[o].innerHTML = t);
            for (o = 0; o < n.length; o++) LadiPageScript.isNull(t) ? e.push(n[o].value) : (n[o].value = t);
            var l = LadiPageScript.isArray(t) ? t : [t];
            for (o = 0; o < r.length; o++)
                if (LadiPageScript.isNull(t)) r[o].checked && e.push(r[o].value), "checkbox" == r[o].getAttribute("type").toLowerCase() && (i = !0);
                else {
                    var s = !1;
                    "checkbox" == r[o].getAttribute("type").toLowerCase() && -1 != l.indexOf(r[o].value) && (s = !0),
                        "radio" == r[o].getAttribute("type").toLowerCase() && l.length > 0 && l[0] == r[o].value && (s = !0),
                        s ? r[o].checked || r[o].click() : r[o].checked && r[o].click();
                }
            return i ? e : e.length > 0 ? e[0] : null;
        }
    }),
    (LadiPageLibraryV2.prototype.top = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t) && t.classList.contains("ladi-section"))
            try {
                t.parentElement.insertBefore(t, t.parentElement.firstChild), LadiPageScript.reloadLazyload();
            } catch (t) {}
    }),
    (LadiPageLibraryV2.prototype.pause = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e) && "video" == e.type) {
                var i = t.querySelector(".iframe-video-preload:not(.no-pause)");
                LadiPageScript.isEmpty(i) || LadiPageScript.runEventReplayVideo(i.id, i.getAttribute("data-video-type"), !1);
            }
        }
    }),
    (LadiPageLibraryV2.prototype.play = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e) && "video" == e.type) {
                var i = e["option.video_type"],
                    a = e["option.video_value"],
                    n = e["option.video_control"];
                LadiPageScript.playVideo(this.id, i, a, n);
            }
        }
    }),
    (LadiPageLibraryV2.prototype.prev = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e)) {
                var i = null;
                "gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-left")),
                    "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-left")),
                    "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-left")),
                    LadiPageScript.isEmpty(i) || i.click();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.next = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e)) {
                var i = null;
                "gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-right")),
                    "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-right")),
                    "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-right, .ladi-collection-button-next")),
                    LadiPageScript.isEmpty(i) || i.click();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.index = function (t) {
        var e = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(e)) {
            var i = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(i)) {
                var a = 0;
                if (
                    (("gallery" != i.type && "carousel" != i.type) || ((a = parseFloatLadiPage(e.getAttribute("data-current")) || 0), (a += 1)),
                    "collection" == i.type && (a = parseFloatLadiPage(e.getAttribute("data-page")) || 1),
                    LadiPageScript.isEmpty(t))
                )
                    return a;
                ("gallery" != i.type && "carousel" != i.type) || ((t -= 1), (a -= 1)),
                    t != a &&
                        (t > a
                            ? (("gallery" != i.type && "carousel" != i.type) || e.setAttribute("data-current", t - 1), "collection" == i.type && e.setAttribute("data-page", t - 1), this.next())
                            : (("gallery" != i.type && "carousel" != i.type) || e.setAttribute("data-current", t + 1), "collection" == i.type && e.setAttribute("data-page", t + 1), this.prev()));
            }
        }
    }),
    (LadiPageLibraryV2.prototype.collapse = function (t) {
        var e = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(e)) {
            var i = 0,
                a = 0,
                n = !1;
            if (
                ("none" == getComputedStyle(e).display
                    ? (LadiPageScript.isNull(t) || t) && (this.show(), (a = parseFloatLadiPage(getComputedStyle(e).height) || 0), (n = !0))
                    : (!LadiPageScript.isNull(t) && t) || ((i = parseFloatLadiPage(getComputedStyle(e).height) || 0), this.hide(), (n = !0)),
                n)
            ) {
                var r = LadiPageScript.findAncestor(e.parentElement, "ladi-element");
                LadiPageScript.isEmpty(r) && (r = LadiPageScript.findAncestor(e.parentElement, "ladi-section")),
                    (LadiPageScript.runtime.list_collapse[this.id] = LadiPageScript.updateHeightElement(!0, e, r, i, a, LadiPageScript.runtime.list_collapse[this.id]));
            }
        }
    }),
    (LadiPageLibraryV2.prototype.hide = function () {
        var t = document.getElementById(this.id);
        LadiPageScript.isEmpty(t) ||
            (0 == t.getElementsByClassName("ladi-popup").length
                ? (t.style.setProperty("display", "none", "important"), LadiPageScript.reloadLazyload())
                : LadiPageScript.runRemovePopup(this.id, !0, function () {
                      for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), e = 0; e < t.length; e++)
                          t[e].id != this.id && t[e].hasAttribute("data-popup-backdrop") && "block" == t[e].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(t[e].id, !0);
                  }));
    }),
    (LadiPageLibraryV2.prototype.show = function () {
        var t = document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = this,
                i = function () {
                    if (LadiPageScript.isObject(LadiPageScript.runtime.eventData)) {
                        var i = LadiPageScript.runtime.eventData[e.id];
                        LadiPageScript.isEmpty(i) || LadiPageScript.startAutoScroll(e.id, i.type, i[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], i[LadiPageScript.const.MOBILE + ".option.auto_scroll"]);
                        for (var a = t.getElementsByClassName("ladi-element"), n = 0; n < a.length; n++) {
                            var r = LadiPageScript.runtime.eventData[a[n].id];
                            LadiPageScript.isEmpty(r) || LadiPageScript.startAutoScroll(a[n].id, r.type, r[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], r[LadiPageScript.const.MOBILE + ".option.auto_scroll"]);
                        }
                    }
                };
            0 == t.getElementsByClassName("ladi-popup").length
                ? (t.style.setProperty("display", "block", "important"), i(), LadiPageScript.runResizeSectionBackground(), LadiPageScript.reloadLazyload())
                : (LadiPageScript.runShowPopup(!1, this.id, null, null, !0, function () {
                      for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), e = 0; e < t.length; e++)
                          t[e].id != this.id && t[e].hasAttribute("data-popup-backdrop") && "block" == t[e].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(t[e].id, !0);
                  }),
                  LadiPageScript.removeLazyloadPopup(this.id),
                  i(),
                  LadiPageScript.runResizeSectionBackground());
        }
    }),
    (LadiPageLibraryV2.prototype.element = function () {
        return document.getElementById(this.id);
    }),
    ["start", "add_turn"].forEach(function (t) {
        LadiPageLibraryV2.prototype[t] = function () {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e)) {
                var i = LadiPageApp[e.type + LadiPageScript.const.APP_RUNTIME_PREFIX];
                if (!LadiPageScript.isEmpty(i)) {
                    var a = i(e, !0);
                    LadiPageScript.isFunction(a[t]) && a[t](this.id);
                }
            }
        };
    });
var LadiPageAppV2,
    ladi =
        ladi ||
        function (t) {
            if (!LadiPageScript.isEmpty(t)) {
                var e = new LadiPageLibraryV2();
                return (e.id = t), e;
            }
        };
(LadiPageScript.const.API_ANALYTICS_EVENT = "https://a.ladipage.com/event"),
    (LadiPageScript.const.API_COLLECTION_PRODUCT = "https://api.ladisales.com/2.0/public/collections/products"),
    (LadiPageScript.const.API_SHOW_PRODUCT = "https://api.ladisales.com/2.0/public/product/show"),
    (LadiPageScript.const.API_LADISALE_ADD = "https://api.ladisales.com/2.0/cart/add"),
    (LadiPageScript.const.API_LADISALE_UPDATE = "https://api.ladisales.com/2.0/cart/update"),
    (LadiPageScript.const.API_LADISALE_SHOW = "https://api.ladisales.com/2.0/cart/show"),
    (LadiPageScript.const.API_LADISALE_GET_SHIPPING = "https://api.ladisales.com/2.0/checkout/{0}/get-shipping"),
    (LadiPageScript.const.API_LADISALE_VALIDATE_DISCOUNT = "https://api.ladisales.com/2.0/checkout/{0}/validate-discount"),
    (LadiPageScript.const.API_FORM_DATA = "https://api.form.ladipage.com/sendform"),
    (LadiPageScript.const.API_FILE_UPLOAD = "https://api.files.ladicdn.com/2.0/ladipage-upload-file"),
    (LadiPageScript.const.API_DATASET_DATA = "https://g.ladicdn.com/dataset/{0}.json?id={1}"),
    (LadiPageScript.const.CDN_LIBRARY_JS_URL = "https://w.ladicdn.com/v2/source/"),
    (LadiPageScript.const.CDN_LIBRARY_CSS_URL = "https://w.ladicdn.com/v2/source/"),
    ((LadiPageAppV2 = LadiPageAppV2 || function () {}).prototype.notify_runtime = function (t, e) {
        var i = function () {},
            a = "top_left",
            n = "top_center",
            r = "top_right",
            o = "bottom_left",
            l = "bottom_center",
            s = "bottom_right";
        return (
            (i.prototype.run = function (e, i) {
                LadiPageScript.isObject(LadiPageScript.runtime.tmp.timeout_notify) || (LadiPageScript.runtime.tmp.timeout_notify = {});
                var c = t["option.sheet_id"],
                    d = t.dataset_value,
                    u = document.getElementById(e);
                if ((u.classList.add("ladi-hidden"), !LadiPageScript.isEmpty(c) || !LadiPageScript.isEmpty(d))) {
                    var p = i ? LadiPageScript.const.DESKTOP : LadiPageScript.const.MOBILE,
                        m = t[p + ".option.position"],
                        g = 1e3 * (parseFloatLadiPage(t["option.time_show"]) || 5),
                        y = 1e3 * (parseFloatLadiPage(t["option.time_delay"]) || 10);
                    y = y < 501 ? 501 : y;
                    var _ = "https://static.ladipage.net/source/notify.svg",
                        f = [
                            { key: "gsx$title", className: ".ladi-notify-title" },
                            { key: "gsx$content", className: ".ladi-notify-content" },
                            { key: "gsx$time", className: ".ladi-notify-time" },
                            { key: "gsx$image", className: ".ladi-notify-image img" },
                        ];
                    u.classList.remove("ladi-hidden");
                    var h = function () {
                        u.style.setProperty("opacity", 0),
                            (m != a && m != n && m != r) || u.style.setProperty("top", -u.clientHeight - 100 + "px"),
                            (m != o && m != l && m != s) || u.style.setProperty("bottom", -u.clientHeight - 100 + "px");
                    };
                    h(),
                        f.forEach(function (t) {
                            "gsx$image" == t.key ? (u.querySelectorAll(t.className)[0].src = _) : (u.querySelectorAll(t.className)[0].textContent = "");
                        });
                    var v = function (t) {
                            t = t.sort(function () {
                                return 0.5 - Math.random();
                            });
                            var i = -1,
                                c = function () {
                                    if (i + 1 < t.length) {
                                        var d = t[++i],
                                            p = Object.keys(d);
                                        u.style.removeProperty("opacity"),
                                            (m != a && m != n && m != r) || u.style.removeProperty("top"),
                                            (m != o && m != l && m != s) || u.style.removeProperty("bottom"),
                                            f.forEach(function (t) {
                                                -1 != p.indexOf(t.key) &&
                                                    ("gsx$image" == t.key ? (u.querySelectorAll(t.className)[0].src = LadiPageScript.isEmpty(d[t.key].$t) ? _ : d[t.key].$t) : (u.querySelectorAll(t.className)[0].textContent = d[t.key].$t));
                                            });
                                        var E = function () {
                                            var a = f.findIndex(function (t) {
                                                return "gsx$image" == t.key;
                                            });
                                            if (-1 != a) {
                                                var n = t[i + 1 >= t.length ? 0 : i + 1];
                                                n.hasOwnProperty(f[a].key) && (u.querySelectorAll(f[a].className)[0].src = LadiPageScript.isEmpty(n[f[a].key].$t) ? _ : n[f[a].key].$t);
                                            }
                                            LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(c, y - 500);
                                        };
                                        LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(function () {
                                            h(), (LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(E, 500));
                                        }, g);
                                    } else v(t);
                                };
                            LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(c, y);
                        },
                        E = function (t) {
                            u.querySelector(".ladi-notify").classList.remove("ladi-hidden"), u.classList.add("ladi-notify-transition"), v(t);
                        };
                    LadiPageScript.isEmpty(d) || E(d),
                        LadiPageScript.isEmpty(c) ||
                            LadiPageScript.sendRequest("GET", "https://spreadsheets.google.com/feeds/list/" + c + "/1/public/values?alt=json", null, !0, null, function (t, e, i) {
                                if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                                    var a = JSON.parse(t).feed.entry;
                                    E(a);
                                }
                            });
                }
            }),
            new i()
        );
    }),
    ((LadiPageAppV2 = LadiPageAppV2 || function () {}).prototype.spinlucky_runtime = function (t, e) {
        var i = function () {},
            a = function (t) {
                return parseFloatLadiPage(window.ladi("_total_turn_" + t).get_cookie()) || 0;
            };
        return (
            (i.prototype.getEventTrackingCategory = function () {
                return "LadiPageFinish";
            }),
            (i.prototype.run = function (e, i) {
                var n = t["option.spinlucky_setting.list_value"],
                    r = t.dataset_value,
                    o = t["option.spinlucky_setting.result_popup_id"],
                    l = t["option.spinlucky_setting.result_message"],
                    s = t["option.spinlucky_setting.max_turn"],
                    c = a(e);
                if (!LadiPageScript.isEmpty(n) || !LadiPageScript.isEmpty(r)) {
                    (n = n || r), LadiPageScript.setDataReplaceStr("spin_turn_left", s - c);
                    var d = document.getElementById(e),
                        u = d.getElementsByClassName("ladi-spin-lucky-start")[0],
                        p = d.getElementsByClassName("ladi-spin-lucky-screen")[0],
                        m = "";
                    n.forEach(function (t, e) {
                        var i = Base64.decode(t).split("|");
                        if (3 == i.length) {
                            var a = (360 / n.length) * e + 180 / n.length,
                                r = "rotate(" + (a *= -1) + "deg) translateY(-50%)";
                            m += '<div class="ladi-spin-lucky-label" style="transform: ' + r + "; -webkit-transform: " + r + ';">' + i[1].trim() + "</div>";
                        }
                    }),
                        (p.innerHTML = m);
                    var g = !1;
                    u.addEventListener("click", function (t) {
                        if ((t.stopPropagation(), !g))
                            if ((c = a(e)) >= s) LadiPageScript.showMessage(LadiPageScript.const.LANG.GAME_MAX_TURN_MESSAGE.format(s));
                            else {
                                g = !0;
                                var i = [],
                                    r = 0,
                                    d = 1;
                                n.forEach(function (t, e) {
                                    var a = Base64.decode(t).split("|"),
                                        n = a[0].trim(),
                                        o = a[1].trim(),
                                        l = parseFloatLadiPage(a[2].trim()) || 0;
                                    i.push({ min: d, max: d + l - 1, value: n, text: o, percent: l, index: e }), (d += l), (r += l);
                                });
                                for (var u = LadiPageScript.randomInt(1, r), m = null, y = 0; y < i.length; y++)
                                    if (i[y].min <= u && i[y].max >= u) {
                                        m = i[y];
                                        break;
                                    }
                                if (LadiPageScript.isEmpty(m)) g = !1;
                                else {
                                    var _ = parseFloatLadiPage(p.getAttribute("data-rotate")) || 0,
                                        f = m.index * (360 / i.length) + 360 * (4 + Math.ceil(_ / 360)) + 180 / i.length,
                                        h = "rotate(" + f + "deg)";
                                    p.setAttribute("data-rotate", f),
                                        p.style.setProperty("transform", h),
                                        p.style.setProperty("-webkit-transform", h),
                                        "NEXT_TURN" != m.value.toUpperCase() && (c++, window.ladi("_total_turn_" + e).set_cookie(c, 1, window.location.pathname));
                                    LadiPageScript.runTimeout(function () {
                                        "NEXT_TURN" == m.value.toUpperCase()
                                            ? LadiPageScript.isEmpty(m.text) || LadiPageScript.showMessage(m.text)
                                            : (LadiPageScript.setDataReplaceStr("coupon", m.value),
                                              LadiPageScript.setDataReplaceStr("coupon_code", m.value),
                                              LadiPageScript.setDataReplaceStr("coupon_text", m.text),
                                              LadiPageScript.setDataReplaceStr("spin_turn_left", s - c),
                                              LadiPageScript.setDataReplaceElement(!0, !1, null, null, ["coupon", "coupon_code", "coupon_text", "spin_turn_left"]),
                                              o == LadiPageScript.const.GAME_RESULT_TYPE.default ? LadiPageScript.isEmpty(l) || LadiPageScript.showMessage(l) : window.ladi(o).show(),
                                              LadiPageScript.runEventTracking(e, !1)),
                                            (g = !1);
                                    }, 1e3 * parseFloatLadiPage(getComputedStyle(p).transitionDuration) + 1e3);
                                }
                            }
                    });
                }
            }),
            (i.prototype.start = function (t) {
                var e = document.getElementById(t);
                if (!LadiPageScript.isEmpty(e) && e.getElementsByClassName("ladi-spin-lucky").length > 0) {
                    var i = e.getElementsByClassName("ladi-spin-lucky-start")[0];
                    LadiPageScript.isEmpty(i) || i.click();
                }
            }),
            (i.prototype.add_turn = function (e) {
                var i = t["option.spinlucky_setting.max_turn"],
                    n = a(e);
                n > 0 && n--, window.ladi("_total_turn_" + e).set_cookie(n, 1, window.location.pathname), LadiPageScript.setDataReplaceStr("spin_turn_left", i - n), LadiPageScript.setDataReplaceElement(!1);
            }),
            new i()
        );
    });
(LadiPageScript.runtime.lang = "vi"),
    (LadiPageScript.const.LANG = {
        ALERT_TITLE: "Alert",
        ALERT_BUTTON_TEXT: "OK",
        GAME_RESULT_MESSAGE: "Chúc mừng bạn nhận được {{coupon_text}}. Nhập mã: {{coupon_code}} để sử dụng. Bạn còn {{spin_turn_left}} lượt quay.",
        GAME_MAX_TURN_MESSAGE: "Bạn đã hết lượt quay.",
        FORM_SEND_DATA_ERROR: "Đã xảy ra lỗi, vui lòng thử lại!",
        FORM_SEND_DATA_NO_CONFIG: "Vui lòng kiểm tra lại cấu hình Form!",
        FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "Bạn chỉ được upload file tổng dung lượng tối đa {{max_size}}MB.",
        FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "Bạn chỉ được upload tối đa {{max_length}} file.",
        FORM_CAPTCHA_ERROR: "Mã xác thực Captcha không đúng!",
        FORM_CAPTCHA_LOADING: "Vui lòng chờ xác thực Captcha trong giây lát!",
        FORM_THANKYOU_MESSAGE_DEFAULT: "Cảm ơn bạn đã quan tâm!",
        FORM_INPUT_REQUIRED_ERROR: "Vui lòng nhập đầy đủ các trường thông tin!",
        FORM_INPUT_EMAIL_REGEX: "Vui lòng nhập đúng định dạng email!",
        FORM_INPUT_TEXT_REGEX: "Vui lòng nhập đúng định dạng!",
        ADD_TO_CART_NO_QUANTITY: "Sản phẩm đã hết số lượng!",
        ADD_TO_CART_QUANTITY_REQUIRED: "Vui lòng nhập số lượng!",
        ADD_TO_CART_MAX_QUANTITY: "Vui lòng chọn số lượng tối đa {{max}} sản phẩm.",
        ADD_TO_CART_NO_PRODUCT: "Không tìm thấy thông tin sản phẩm, vui lòng thử lại sau!",
        HIDE_ELEMENT: "Ẩn phần tử",
        SHOW_ELEMENT: "Hiện phần tử",
        TOP_ELEMENT: "Kéo Section lên đầu",
        SCROLL_ELEMENT: "Kéo tới Section",
        SET_COOKIE: "Thiết lập Cookie",
        OPTION_TRUE: "Có",
        OPTION_FALSE: "Không",
    });
