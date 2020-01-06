(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/common"), require("devexpress-dashboard/model/index.metadata"), require("devexpress-dashboard")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/common", "devexpress-dashboard/model/index.metadata", "devexpress-dashboard" ], factory); else {
        var a = typeof exports === "object" ? factory(require("devexpress-dashboard/common"), require("devexpress-dashboard/model/index.metadata"), require("devexpress-dashboard")) : factory(root["DevExpress"]["Dashboard"], root["DevExpress"]["Dashboard"]["Metadata"], root["DevExpress"]["Dashboard"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__) {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 30);
    }({
        0: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
        },
        1: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
        },
        3: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__3__;
        },
        30: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var meta_1 = __webpack_require__(8);
            var sliding_text_viewer_1 = __webpack_require__(31);
            var icon_1 = __webpack_require__(32);
            __webpack_require__(33);
            var SlidingTextItemExtension = function() {
                function SlidingTextItemExtension(dashboardControl) {
                    this.name = meta_1.ONLINE_SLIDING_TEXT_EXTENSION_NAME;
                    this.metaData = meta_1.slidingTextMeta;
                    dashboardControl.registerIcon(icon_1.SLIDING_TEXT_ICON);
                }
                SlidingTextItemExtension.prototype.createViewerItem = function(model, element, content) {
                    return new sliding_text_viewer_1.SlidingTextItem(model, element, content);
                };
                return SlidingTextItemExtension;
            }();
            exports.SlidingTextItemExtension = SlidingTextItemExtension;
        },
        31: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    };
                    return extendStatics(d, b);
                };
                return function(d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            exports.__esModule = true;
            var common_1 = __webpack_require__(0);
            var getCustomizedFlashStyle = function(backgroundStartColor, backgroundEndColor, duration) {
                return "\n.quadrat {\n    width: inherit;\n    height: inherit;\n    -webkit-animation: FLASH " + duration + "s infinite; /* Safari 4+ */\n    -moz-animation:    FLASH " + duration + "s infinite; /* Fx 5+ */\n    -o-animation:      FLASH " + duration + "s infinite; /* Opera 12+ */\n    animation:         FLASH " + duration + "s infinite; /* IE 10+, Fx 29+ */\n}\n  \n@-webkit-keyframes FLASH {\n    0%, 49% {\n        background-color: " + backgroundStartColor + ";\n    }\n    50%, 100% {\n        background-color: " + backgroundEndColor + ";\n    }\n}";
            };
            var getCustomizedFontStyle = function(fontFamily) {
                return "\n.fontFamilyCustom {\n    font-family: '" + fontFamily + "';\n}";
            };
            var SlidingTextItem = function(_super) {
                __extends(SlidingTextItem, _super);
                function SlidingTextItem(model, container, options) {
                    var _this = _super.call(this, model, container, options) || this;
                    _this.textViewer = null;
                    _this.$element = null;
                    _this.settings = undefined;
                    _this.maxDataItemCount = 1e3;
                    _this._subscribeProperties();
                    return _this;
                }
                SlidingTextItem.prototype.setSize = function(width, height) {
                    _super.prototype.setSize.call(this, width, height);
                };
                SlidingTextItem.prototype.setSelection = function(values) {
                    _super.prototype.setSelection.call(this, values);
                    this._updateSelection();
                };
                SlidingTextItem.prototype.clearSelection = function() {
                    _super.prototype.clearSelection.call(this);
                    this._updateSelection();
                };
                SlidingTextItem.prototype.renderContent = function(element, changeExisting, afterRenderCallback) {
                    var $element = $(element);
                    var $marquee = null;
                    if (!changeExisting) {
                        $element.empty();
                        $element.css("overflow", "auto");
                        $marquee = $("<marquee/>", {
                            direction: "left"
                        });
                        $element.append($marquee);
                    }
                    this.$element = $element;
                    this._update();
                };
                SlidingTextItem.prototype._subscribeProperties = function() {
                    var _this = this;
                    this.subscribe("Text", function(text) {
                        _this.settings.text = text;
                        _this._update();
                    });
                    this.subscribe("Behavior", function(behavior) {
                        _this.settings.behavior = behavior;
                        _this._update();
                    });
                    this.subscribe("Direction", function(direction) {
                        _this.settings.direction = direction;
                        _this._update();
                    });
                    this.subscribe("BackgroundColor", function(backgroundColor) {
                        _this.settings.backgroundColor = backgroundColor;
                        _this._update();
                    });
                    this.subscribe("FontFamily", function(fontFamily) {
                        _this.settings.fontFamily = fontFamily;
                        _this._update();
                    });
                    this.subscribe("FontColor", function(fontColor) {
                        _this.settings.fontColor = fontColor;
                        _this._update();
                    });
                    this.subscribe("FontStyle", function(fontStyle) {
                        _this.settings.fontStyle = fontStyle;
                        _this._update();
                    });
                    this.subscribe("FontSize", function(fontSize) {
                        _this.settings.fontSize = fontSize;
                        _this._update();
                    });
                    this.subscribe("ScrollDelay", function(scrollDelay) {
                        _this.settings.scrollDelay = scrollDelay;
                        _this._update();
                    });
                    this.subscribe("Flash", function(flash) {
                        _this.settings.flash = flash;
                        _this._update();
                    });
                    this.subscribe("FlashStartColor", function(flashStartColor) {
                        _this.settings.flashStartColor = flashStartColor;
                        _this._update();
                    });
                    this.subscribe("FlashEndColor", function(flashEndColor) {
                        _this.settings.flashEndColor = flashEndColor;
                        _this._update();
                    });
                    this.subscribe("FlashDuration", function(flashDuration) {
                        _this.settings.flashDuration = flashDuration;
                        _this._update();
                    });
                };
                SlidingTextItem.prototype._updateSelection = function() {};
                SlidingTextItem.prototype._update = function() {
                    this._ensureSettings();
                    var $marquee = null;
                    this.$element.empty();
                    this.$element.css("overflow", "hidden");
                    var scrollDelay = this.settings.scrollDelay || 85;
                    $marquee = $("<marquee/>", {
                        id: "slidingTextContainer",
                        direction: "left",
                        scrolldelay: scrollDelay
                    });
                    $marquee.css("height", "inherit");
                    if (this.settings.direction) {
                        $marquee.attr("direction", this.settings.direction.toLowerCase());
                    }
                    if (this.settings.backgroundColor) {
                        $marquee.css("background-color", this.settings.backgroundColor);
                    }
                    if (this.settings.fontFamily) {
                        $("#fontFamilyStyle").remove();
                        $("<style id=\"fontFamilyStyle\" type='text/css'>" + getCustomizedFontStyle(this.settings.fontFamily) + "</style>").appendTo("head");
                        $marquee.addClass("fontFamilyCustom");
                    }
                    if (this.settings.fontColor) {
                        $marquee.css("color", this.settings.fontColor);
                    }
                    if (this.settings.fontSize) {
                        $marquee.css("font-size", this.settings.fontSize + "px");
                    }
                    if (this.settings.flash === "On") {
                        $("#flashStyle").remove();
                        var startColor = this.settings.flashStartColor || "#337ab7";
                        var endColor = this.settings.flashEndColor || "#000000";
                        var duration = this.settings.flashDuration || 4;
                        $("<style id=\"flashStyle\" type='text/css'>" + getCustomizedFlashStyle(startColor, endColor, duration) + "</style>").appendTo("head");
                        $marquee.addClass("quadrat");
                    }
                    var fontStyleTagName = this.getFontStyleTagName(this.settings.fontStyle);
                    if (this.settings.text) {
                        $marquee.html("<" + fontStyleTagName + ">" + this.settings.text + "</" + fontStyleTagName + ">");
                    } else {
                        var currentDataItemsCounter_1 = 0;
                        var self_1 = this;
                        this.iterateData(function(rowDataObject) {
                            currentDataItemsCounter_1++;
                            if (currentDataItemsCounter_1 > self_1.maxDataItemCount) {
                                return;
                            }
                            var valueTexts = rowDataObject.getDisplayText("Text");
                            $marquee.html($marquee.html() + valueTexts.join());
                        });
                        $marquee.html("<" + fontStyleTagName + ">" + $marquee.html() + "</" + fontStyleTagName + ">");
                    }
                    if (this.settings.behavior) {
                        $marquee.attr("behavior", this.settings.behavior.toLowerCase());
                        if (this.settings.behavior.toLowerCase() === "alternate") {
                            $marquee.attr("direction", "down");
                            $marquee.html('<marquee behavior="alternate">' + $marquee.html() + "</marquee>");
                        }
                    }
                    this.$element.append($marquee);
                };
                SlidingTextItem.prototype.getFontStyleTagName = function(fontStyle) {
                    switch (fontStyle) {
                      case "Bold":
                        return "b";

                      case "Italic":
                        return "i";

                      case "Normal":
                      default:
                        return "span";
                    }
                };
                SlidingTextItem.prototype._ensureSettings = function() {
                    if (!this.settings) {
                        this.settings = {
                            text: this.getPropertyValue("Text"),
                            behavior: this.getPropertyValue("Behavior"),
                            direction: this.getPropertyValue("Direction"),
                            backgroundColor: this.getPropertyValue("BackgroundColor"),
                            fontFamily: this.getPropertyValue("FontFamily"),
                            fontColor: this.getPropertyValue("FontColor"),
                            fontStyle: this.getPropertyValue("FontStyle"),
                            fontSize: this.getPropertyValue("FontSize"),
                            scrollDelay: this.getPropertyValue("ScrollDelay"),
                            flash: this.getPropertyValue("Flash"),
                            flashStartColor: this.getPropertyValue("FlashStartColor"),
                            flashEndColor: this.getPropertyValue("FlashEndColor"),
                            flashDuration: this.getPropertyValue("FlashDuration")
                        };
                    }
                };
                return SlidingTextItem;
            }(common_1.CustomItemViewer);
            exports.SlidingTextItem = SlidingTextItem;
        },
        32: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var meta_1 = __webpack_require__(8);
            exports.SLIDING_TEXT_ICON = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="' + meta_1.slidingTextMeta.icon + '" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>';
        },
        33: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var devexpress_dashboard_1 = __webpack_require__(3);
            function getDefaultCustomLocalization() {
                return {
                    "DashboardWebCustomItemStringId.DefaultNameSlidingText": "Sliding Text",
                    "DashboardWebCustomItemStringId.Text": "Text",
                    "DashboardWebCustomItemStringId.Behavior": "Behavior",
                    "DashboardWebCustomItemStringId.Binding.SetText": "Set Text",
                    "DashboardWebCustomItemStringId.Binding.ConfigureText": "Configure Text",
                    "DashboardWebCustomItemStringId.SectionName": "Settings",
                    "DashboardWebCustomItemStringId.BehaviorText": "Text",
                    "DashboardWebCustomItemStringId.BehaviorToRight": "Left to Right",
                    "DashboardWebCustomItemStringId.BehaviorToLeft": "Right to Left",
                    "DashboardWebCustomItemStringId.BehaviorScroll": "Scroll",
                    "DashboardWebCustomItemStringId.BehaviorSlide": "Slide",
                    "DashboardWebCustomItemStringId.BehaviorAlternate": "Alternate",
                    "DashboardWebCustomItemStringId.Direction": "Direction",
                    "DashboardWebCustomItemStringId.DirectionLeft": "Left",
                    "DashboardWebCustomItemStringId.DirectionRight": "Right",
                    "DashboardWebCustomItemStringId.DirectionUp": "Up",
                    "DashboardWebCustomItemStringId.DirectionDown": "Down",
                    "DashboardWebCustomItemStringId.BackgroundColor": "Background Color",
                    "DashboardWebCustomItemStringId.FontColor": "Font Color",
                    "DashboardWebCustomItemStringId.ScrollDelay": "Scroll Delay",
                    "DashboardWebCustomItemStringId.Font.Family": "Font Family",
                    "DashboardWebCustomItemStringId.Font.Family.Arial": "Arial",
                    "DashboardWebCustomItemStringId.Font.Family.SegoeUI": "Segoe UI",
                    "DashboardWebCustomItemStringId.Font.Family.HelveticaNeue": "Helvetica Neue",
                    "DashboardWebCustomItemStringId.Font.Family.Verdana": "Verdana",
                    "DashboardWebCustomItemStringId.Font.Family.SansSerif": "sans-serif",
                    "DashboardWebCustomItemStringId.Font.Style": "Font Style",
                    "DashboardWebCustomItemStringId.Font.Style.Normal": "Normal",
                    "DashboardWebCustomItemStringId.Font.Style.Bold": "Bold",
                    "DashboardWebCustomItemStringId.Font.Style.Italic": "Italic",
                    "DashboardWebCustomItemStringId.FontSize": "Font Size",
                    "DashboardWebCustomItemStringId.SectionNameFlash": "Flash",
                    "DashboardWebCustomItemStringId.Flash": "Flash",
                    "DashboardWebCustomItemStringId.Flash.On": "On",
                    "DashboardWebCustomItemStringId.Flash.Off": "Off",
                    "DashboardWebCustomItemStringId.Flash.StartColor": "Flash Start Color",
                    "DashboardWebCustomItemStringId.Flash.EndColor": "Flash End Color",
                    "DashboardWebCustomItemStringId.Flash.Duration": "Flash Duration (s)",
                    "DashboardWebCustomItemStringId.Tips.Prop": "some tips",
                    "DashboardWebCustomItemStringId.SectionNameTips": "Tips"
                };
            }
            devexpress_dashboard_1.ResourceManager.setLocalizationMessages(getDefaultCustomLocalization());
        },
        8: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var index_metadata_1 = __webpack_require__(1);
            exports.ONLINE_SLIDING_TEXT_EXTENSION_NAME = "SlidingText";
            exports.slidingTextMeta = {
                bindings: [ {
                    propertyName: "Text",
                    dataItemType: "Dimension",
                    array: true,
                    enableInteractivity: true,
                    displayName: "DashboardWebCustomItemStringId.Text",
                    emptyPlaceholder: "DashboardWebCustomItemStringId.Binding.SetText",
                    selectedPlaceholder: "DashboardWebCustomItemStringId.Binding.ConfigureText"
                } ],
                properties: [ {
                    propertyName: "Text",
                    editor: index_metadata_1.editorTemplates.textFile,
                    displayName: "DashboardWebCustomItemStringId.BehaviorText",
                    defaultVal: ""
                }, {
                    propertyName: "Behavior",
                    editor: index_metadata_1.editorTemplates.buttonGroup,
                    displayName: "DashboardWebCustomItemStringId.Behavior",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    values: {
                        Scroll: "DashboardWebCustomItemStringId.BehaviorScroll",
                        Slide: "DashboardWebCustomItemStringId.BehaviorSlide",
                        Alternate: "DashboardWebCustomItemStringId.BehaviorAlternate"
                    },
                    defaultVal: "Scroll"
                }, {
                    propertyName: "Direction",
                    editor: index_metadata_1.editorTemplates.buttonGroup,
                    displayName: "DashboardWebCustomItemStringId.Direction",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    values: {
                        Left: "DashboardWebCustomItemStringId.DirectionLeft",
                        Right: "DashboardWebCustomItemStringId.DirectionRight",
                        Up: "DashboardWebCustomItemStringId.DirectionUp",
                        Down: "DashboardWebCustomItemStringId.DirectionDown"
                    },
                    defaultVal: "Left"
                }, {
                    propertyName: "ScrollDelay",
                    editor: index_metadata_1.editorTemplates.toggleNumeric,
                    displayName: "DashboardWebCustomItemStringId.ScrollDelay",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    defaultVal: 85
                }, {
                    propertyName: "BackgroundColor",
                    editor: index_metadata_1.editorTemplates.text,
                    displayName: "DashboardWebCustomItemStringId.BackgroundColor",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    defaultVal: "#ffffff"
                }, {
                    propertyName: "FontFamily",
                    editor: index_metadata_1.editorTemplates.list,
                    values: {
                        Arial: "DashboardWebCustomItemStringId.Font.Family.Arial",
                        "Segoe UI": "DashboardWebCustomItemStringId.Font.Family.SegoeUI",
                        "Helvetica Neue": "DashboardWebCustomItemStringId.Font.Family.HelveticaNeue",
                        Verdana: "DashboardWebCustomItemStringId.Font.Family.Verdana",
                        "sans-serif": "DashboardWebCustomItemStringId.Font.Family.SansSerif"
                    },
                    displayName: "DashboardWebCustomItemStringId.Font.Family",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    defaultVal: "Arial"
                }, {
                    propertyName: "FontColor",
                    editor: index_metadata_1.editorTemplates.text,
                    displayName: "DashboardWebCustomItemStringId.FontColor",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    defaultVal: "#000000"
                }, {
                    propertyName: "FontStyle",
                    editor: index_metadata_1.editorTemplates.buttonGroup,
                    values: {
                        Normal: "DashboardWebCustomItemStringId.Font.Style.Normal",
                        Bold: "DashboardWebCustomItemStringId.Font.Style.Bold",
                        Italic: "DashboardWebCustomItemStringId.Font.Style.Italic"
                    },
                    displayName: "DashboardWebCustomItemStringId.FontColor",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    defaultVal: "Normal"
                }, {
                    propertyName: "FontSize",
                    editor: index_metadata_1.editorTemplates.numeric,
                    displayName: "DashboardWebCustomItemStringId.FontSize",
                    sectionName: "DashboardWebCustomItemStringId.SectionName",
                    defaultVal: 14
                }, {
                    propertyName: "Flash",
                    editor: index_metadata_1.editorTemplates.buttonGroup,
                    values: {
                        On: "DashboardWebCustomItemStringId.Flash.On",
                        Off: "DashboardWebCustomItemStringId.Flash.Off"
                    },
                    displayName: "DashboardWebCustomItemStringId.Flash",
                    sectionName: "DashboardWebCustomItemStringId.SectionNameFlash",
                    defaultVal: "Off"
                }, {
                    propertyName: "FlashStartColor",
                    editor: index_metadata_1.editorTemplates.text,
                    displayName: "DashboardWebCustomItemStringId.Flash.StartColor",
                    sectionName: "DashboardWebCustomItemStringId.SectionNameFlash",
                    defaultVal: "#337ab7"
                }, {
                    propertyName: "FlashEndColor",
                    editor: index_metadata_1.editorTemplates.text,
                    displayName: "DashboardWebCustomItemStringId.Flash.EndColor",
                    sectionName: "DashboardWebCustomItemStringId.SectionNameFlash",
                    defaultVal: "#ffffff"
                }, {
                    propertyName: "FlashDuration",
                    editor: index_metadata_1.editorTemplates.numeric,
                    displayName: "DashboardWebCustomItemStringId.Flash.Duration",
                    sectionName: "DashboardWebCustomItemStringId.SectionNameFlash",
                    defaultVal: 3
                }, {
                    propertyName: "Tips",
                    editor: {
                        header: "tips-section-template"
                    },
                    displayName: "",
                    sectionName: "DashboardWebCustomItemStringId.SectionNameTips",
                    defaultVal: ""
                } ],
                interactivity: {
                    filter: true,
                    drillDown: false
                },
                icon: exports.ONLINE_SLIDING_TEXT_EXTENSION_NAME,
                title: "DashboardWebCustomItemStringId.DefaultNameSlidingText",
                index: 1
            };
        }
    });
});