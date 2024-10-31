import { reactive, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext, openBlock, createElementBlock, renderSlot, createElementVNode, createBlock, Teleport, createCommentVNode, resolveComponent, resolveDynamicComponent, toDisplayString, Transition } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-B_BQltvZ.mjs';
import axios from 'axios';
import { B as BaseStyle, _ as _export_sfc, h as script$3$1, s as script$2$1, c as script$4$1, a as script$8, b as script$7 } from './server.mjs';
import { addStyle, relativePosition, getOuterWidth, absolutePosition, isTouchDevice, isClient } from '@primeuix/utils/dom';
import { isEmpty } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { U as UniqueComponentId, C as ConnectedOverlayScrollHandler } from './index-B-eWB_iB.mjs';
import { EventBus } from '@primeuix/utils/eventbus';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils';
import '@primeuix/utils/uuid';

var classes$1 = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: "inputgroupaddon",
  classes: classes$1
});
var script$1$1 = {
  name: "BaseInputGroupAddon",
  "extends": script$8,
  style: InputGroupAddonStyle,
  provide: function provide() {
    return {
      $pcInputGroupAddon: this,
      $parentInstance: this
    };
  }
};
var script$5 = {
  name: "InputGroupAddon",
  "extends": script$1$1,
  inheritAttrs: false
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$5.render = render$4;
var script$4 = {
  name: "EyeIcon",
  "extends": script$7
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$4.render = render$3;
var script$3 = {
  name: "EyeSlashIcon",
  "extends": script$7
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$3.render = render$2;
var OverlayEventBus = EventBus();
var script$2 = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      mounted: false
    };
  },
  mounted: function mounted() {
    this.mounted = isClient();
  },
  computed: {
    inline: function inline() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.inline ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : $data.mounted ? (openBlock(), createBlock(Teleport, {
    key: 1,
    to: $props.appendTo
  }, [renderSlot(_ctx.$slots, "default")], 8, ["to"])) : createCommentVNode("", true);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-password {\n    display: inline-flex;\n    position: relative;\n}\n\n.p-password .p-password-overlay {\n    min-width: 100%;\n}\n\n.p-password-meter {\n    height: ".concat(dt("password.meter.height"), ";\n    background: ").concat(dt("password.meter.background"), ";\n    border-radius: ").concat(dt("password.meter.border.radius"), ";\n}\n\n.p-password-meter-label {\n    height: 100%;\n    width: 0;\n    transition: width 1s ease-in-out;\n    border-radius: ").concat(dt("password.meter.border.radius"), ";\n}\n\n.p-password-meter-weak {\n    background: ").concat(dt("password.strength.weak.background"), ";\n}\n\n.p-password-meter-medium {\n    background: ").concat(dt("password.strength.medium.background"), ";\n}\n\n.p-password-meter-strong {\n    background: ").concat(dt("password.strength.strong.background"), ";\n}\n\n.p-password-fluid {\n    display: flex;\n}\n\n.p-password-fluid .p-password-input {\n    width: 100%;\n}\n\n.p-password-input::-ms-reveal,\n.p-password-input::-ms-clear {\n    display: none;\n}\n\n.p-password-overlay {\n    padding: ").concat(dt("password.overlay.padding"), ";\n    background: ").concat(dt("password.overlay.background"), ";\n    color: ").concat(dt("password.overlay.color"), ";\n    border: 1px solid ").concat(dt("password.overlay.border.color"), ";\n    box-shadow: ").concat(dt("password.overlay.shadow"), ";\n    border-radius: ").concat(dt("password.overlay.border.radius"), ";\n}\n\n.p-password-content {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("password.content.gap"), ";\n}\n\n.p-password-toggle-mask-icon {\n    right: ").concat(dt("form.field.padding.x"), ";\n    color: ").concat(dt("password.icon.color"), ";\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * calc(").concat(dt("icon.size"), " / 2));\n    width: ").concat(dt("icon.size"), ";\n    height: ").concat(dt("icon.size"), ";\n}\n\n.p-password:has(.p-password-toggle-mask-icon) .p-password-input {\n    padding-right: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n");
};
var inlineStyles = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes = {
  root: function root2(_ref3) {
    var instance = _ref3.instance;
    return ["p-password p-component p-inputwrapper", {
      "p-inputwrapper-filled": instance.filled,
      "p-inputwrapper-focus": instance.focused,
      "p-password-fluid": instance.hasFluid
    }];
  },
  pcInputText: "p-password-input",
  maskIcon: "p-password-toggle-mask-icon p-password-mask-icon",
  unmaskIcon: "p-password-toggle-mask-icon p-password-unmask-icon",
  overlay: "p-password-overlay p-component",
  content: "p-password-content",
  meter: "p-password-meter",
  meterLabel: function meterLabel(_ref4) {
    var instance = _ref4.instance;
    return "p-password-meter-label ".concat(instance.meter ? "p-password-meter-" + instance.meter.strength : "");
  },
  meterText: "p-password-meter-text"
};
var PasswordStyle = BaseStyle.extend({
  name: "password",
  theme,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BasePassword",
  "extends": script$8,
  props: {
    modelValue: String,
    promptLabel: {
      type: String,
      "default": null
    },
    mediumRegex: {
      type: [String, RegExp],
      "default": "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      // eslint-disable-line
    },
    strongRegex: {
      type: [String, RegExp],
      "default": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
      // eslint-disable-line
    },
    weakLabel: {
      type: String,
      "default": null
    },
    mediumLabel: {
      type: String,
      "default": null
    },
    strongLabel: {
      type: String,
      "default": null
    },
    feedback: {
      type: Boolean,
      "default": true
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    toggleMask: {
      type: Boolean,
      "default": false
    },
    hideIcon: {
      type: String,
      "default": void 0
    },
    maskIcon: {
      type: String,
      "default": void 0
    },
    showIcon: {
      type: String,
      "default": void 0
    },
    unmaskIcon: {
      type: String,
      "default": void 0
    },
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    required: {
      type: Boolean,
      "default": false
    },
    fluid: {
      type: Boolean,
      "default": null
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    panelId: {
      type: String,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelProps: {
      type: null,
      "default": null
    },
    overlayId: {
      type: String,
      "default": null
    },
    overlayClass: {
      type: [String, Object],
      "default": null
    },
    overlayStyle: {
      type: Object,
      "default": null
    },
    overlayProps: {
      type: null,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    autofocus: {
      type: Boolean,
      "default": null
    }
  },
  style: PasswordStyle,
  provide: function provide2() {
    return {
      $pcPassword: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Password",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur", "invalid"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  data: function data2() {
    return {
      id: this.$attrs.id,
      overlayVisible: false,
      meter: null,
      infoText: null,
      focused: false,
      unmasked: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  mediumCheckRegExp: null,
  strongCheckRegExp: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  mounted: function mounted2() {
    this.id = this.id || UniqueComponentId();
    this.infoText = this.promptText;
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndex.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.bindScrollListener();
      this.bindResizeListener();
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") {
        relativePosition(this.overlay, this.$refs.input.$el);
      } else {
        this.overlay.style.minWidth = getOuterWidth(this.$refs.input.$el) + "px";
        absolutePosition(this.overlay, this.$refs.input.$el);
      }
    },
    testStrength: function testStrength(str) {
      var level = 0;
      if (this.strongCheckRegExp.test(str))
        level = 3;
      else if (this.mediumCheckRegExp.test(str))
        level = 2;
      else if (str.length)
        level = 1;
      return level;
    },
    onInput: function onInput(event) {
      this.$emit("update:modelValue", event.target.value);
      this.$emit("change", event);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      if (this.feedback) {
        this.setPasswordMeter(this.modelValue);
        this.overlayVisible = true;
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      if (this.feedback) {
        this.overlayVisible = false;
      }
      this.$emit("blur", event);
    },
    onKeyUp: function onKeyUp(event) {
      if (this.feedback) {
        var value = event.target.value;
        var _this$checkPasswordSt = this.checkPasswordStrength(value), meter = _this$checkPasswordSt.meter, label = _this$checkPasswordSt.label;
        this.meter = meter;
        this.infoText = label;
        if (event.code === "Escape") {
          this.overlayVisible && (this.overlayVisible = false);
          return;
        }
        if (!this.overlayVisible) {
          this.overlayVisible = true;
        }
      }
    },
    setPasswordMeter: function setPasswordMeter() {
      if (!this.modelValue) {
        this.meter = null;
        this.infoText = this.promptText;
        return;
      }
      var _this$checkPasswordSt2 = this.checkPasswordStrength(this.modelValue), meter = _this$checkPasswordSt2.meter, label = _this$checkPasswordSt2.label;
      this.meter = meter;
      this.infoText = label;
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    },
    checkPasswordStrength: function checkPasswordStrength(value) {
      var label = null;
      var meter = null;
      switch (this.testStrength(value)) {
        case 1:
          label = this.weakText;
          meter = {
            strength: "weak",
            width: "33.33%"
          };
          break;
        case 2:
          label = this.mediumText;
          meter = {
            strength: "medium",
            width: "66.66%"
          };
          break;
        case 3:
          label = this.strongText;
          meter = {
            strength: "strong",
            width: "100%"
          };
          break;
        default:
          label = this.promptText;
          meter = null;
          break;
      }
      return {
        label,
        meter
      };
    },
    onInvalid: function onInvalid(event) {
      this.$emit("invalid", event);
    },
    bindScrollListener: function bindScrollListener() {
      var _this = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input.$el, function() {
          if (_this.overlayVisible) {
            _this.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this2 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this2.overlayVisible && !isTouchDevice()) {
            _this2.overlayVisible = false;
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    onMaskToggle: function onMaskToggle() {
      this.unmasked = !this.unmasked;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    }
  },
  computed: {
    inputType: function inputType() {
      return this.unmasked ? "text" : "password";
    },
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    weakText: function weakText() {
      return this.weakLabel || this.$primevue.config.locale.weak;
    },
    mediumText: function mediumText() {
      return this.mediumLabel || this.$primevue.config.locale.medium;
    },
    strongText: function strongText() {
      return this.strongLabel || this.$primevue.config.locale.strong;
    },
    promptText: function promptText() {
      return this.promptLabel || this.$primevue.config.locale.passwordPrompt;
    },
    overlayUniqueId: function overlayUniqueId() {
      return this.id + "_overlay";
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    PInputText: script$2$1,
    Portal: script$2,
    EyeSlashIcon: script$3,
    EyeIcon: script$4
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PInputText = resolveComponent("PInputText");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root")
  }, _ctx.ptmi("root")), [createVNode(_component_PInputText, mergeProps({
    ref: "input",
    id: _ctx.inputId,
    type: $options.inputType,
    "class": [_ctx.cx("pcInputText"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.modelValue,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-controls": _ctx.overlayProps && _ctx.overlayProps.id || _ctx.overlayId || _ctx.panelProps && _ctx.panelProps.id || _ctx.panelId || $options.overlayUniqueId,
    "aria-expanded": $data.overlayVisible,
    "aria-haspopup": true,
    placeholder: _ctx.placeholder,
    required: _ctx.required,
    fluid: _ctx.fluid,
    disabled: _ctx.disabled,
    variant: _ctx.variant,
    invalid: _ctx.invalid,
    autofocus: _ctx.autofocus,
    onInput: $options.onInput,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeyup: $options.onKeyUp,
    onInvalid: $options.onInvalid
  }, _ctx.inputProps, {
    pt: _ctx.ptm("pcInputText"),
    unstyled: _ctx.unstyled
  }), null, 16, ["id", "type", "class", "style", "value", "aria-labelledby", "aria-label", "aria-controls", "aria-expanded", "placeholder", "required", "fluid", "disabled", "variant", "invalid", "autofocus", "onInput", "onFocus", "onBlur", "onKeyup", "onInvalid", "pt", "unstyled"]), _ctx.toggleMask && $data.unmasked ? renderSlot(_ctx.$slots, _ctx.$slots.maskicon ? "maskicon" : "hideicon", {
    key: 0,
    toggleCallback: $options.onMaskToggle
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.maskIcon ? "i" : "EyeSlashIcon"), mergeProps({
      "class": [_ctx.cx("maskIcon"), _ctx.maskIcon],
      onClick: $options.onMaskToggle
    }, _ctx.ptm("maskIcon")), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), _ctx.toggleMask && !$data.unmasked ? renderSlot(_ctx.$slots, _ctx.$slots.unmaskicon ? "unmaskicon" : "showicon", {
    key: 1,
    toggleCallback: $options.onMaskToggle
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.unmaskIcon ? "i" : "EyeIcon"), mergeProps({
      "class": [_ctx.cx("unmaskIcon"), _ctx.unmaskIcon],
      onClick: $options.onMaskToggle
    }, _ctx.ptm("unmaskIcon")), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), createElementVNode("span", mergeProps({
    "class": "p-hidden-accessible",
    "aria-live": "polite"
  }, _ctx.ptm("hiddenAccesible"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($data.infoText), 17), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            id: _ctx.overlayId || _ctx.panelId || $options.overlayUniqueId,
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            style: [_ctx.overlayStyle, _ctx.panelStyle],
            onClick: _cache[0] || (_cache[0] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.overlayProps), _ctx.ptm("overlay"))), [renderSlot(_ctx.$slots, "header"), renderSlot(_ctx.$slots, "content", {}, function() {
            return [createElementVNode("div", mergeProps({
              "class": _ctx.cx("content")
            }, _ctx.ptm("content")), [createElementVNode("div", mergeProps({
              "class": _ctx.cx("meter")
            }, _ctx.ptm("meter")), [createElementVNode("div", mergeProps({
              "class": _ctx.cx("meterLabel"),
              style: {
                width: $data.meter ? $data.meter.width : ""
              }
            }, _ctx.ptm("meterLabel")), null, 16)], 16), createElementVNode("div", mergeProps({
              "class": _ctx.cx("meterText")
            }, _ctx.ptm("meterText")), toDisplayString($data.infoText), 17)], 16)];
          }), renderSlot(_ctx.$slots, "footer")], 16, _hoisted_1)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script.render = render;
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const formdata = reactive({
      Admin: "",
      Password: ""
    });
    const statusMessage = ref("");
    const error = ref(false);
    const submitForm = async () => {
      if (!formdata.Admin || !formdata.Password) {
        statusMessage.value = "Username dan password diperlukan";
        error.value = true;
        return;
      }
      try {
        const response = await axios.post("http://localhost:5000/api/login", formdata);
        statusMessage.value = response.data;
        error.value = false;
        (void 0).location.href = "/admin";
      } catch (error2) {
        if (error2.response) {
          console.error("Login error:", error2.response.data);
          statusMessage.value = error2.response.data;
          error2.value = true;
        } else {
          console.error("Error:", error2.message);
          statusMessage.value = "Terjadi kesalahan. Silakan coba lagi.";
          error2.value = true;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen bg-gray-100" }, _attrs))} data-v-a1a749a1><div class="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-md w-full max-w-md" data-v-a1a749a1><h2 class="text-2xl font-bold text-center text-green-800" data-v-a1a749a1>Masuk ke Akun Anda</h2><section class="flex justify-center" data-v-a1a749a1><img${ssrRenderAttr("src", _imports_0)} alt="Deskripsi Gambar" class="w-32 h-32 object-cover mb-4" data-v-a1a749a1></section><section data-v-a1a749a1><p class="text-center font-bold text-sm" data-v-a1a749a1>Username</p>`);
      _push(ssrRenderComponent(unref(script$3$1), { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script$5), { addonClass: "bg-gray-200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-user" data-v-a1a749a1${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-user" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script$2$1), {
              placeholder: "Username",
              class: "w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.Admin,
              "onUpdate:modelValue": ($event) => formdata.Admin = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(script$5), { addonClass: "bg-gray-200" }, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-user" })
                ]),
                _: 1
              }),
              createVNode(unref(script$2$1), {
                placeholder: "Username",
                class: "w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500",
                modelValue: formdata.Admin,
                "onUpdate:modelValue": ($event) => formdata.Admin = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-a1a749a1><p class="text-center font-bold text-sm" data-v-a1a749a1>Password</p>`);
      _push(ssrRenderComponent(unref(script$3$1), { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script$5), { addonClass: "bg-gray-200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-lock" data-v-a1a749a1${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-lock" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script), {
              placeholder: "Password",
              modelValue: formdata.Password,
              "onUpdate:modelValue": ($event) => formdata.Password = $event,
              feedback: false,
              toggleMask: "",
              class: "w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(script$5), { addonClass: "bg-gray-200" }, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-lock" })
                ]),
                _: 1
              }),
              createVNode(unref(script), {
                placeholder: "Password",
                modelValue: formdata.Password,
                "onUpdate:modelValue": ($event) => formdata.Password = $event,
                feedback: false,
                toggleMask: "",
                class: "w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (statusMessage.value) {
        _push(`<section class="text-center" data-v-a1a749a1><p class="${ssrRenderClass({ "text-red-500": error.value, "text-green-500": !error.value })}" data-v-a1a749a1>${ssrInterpolate(statusMessage.value)}</p></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="flex justify-center" data-v-a1a749a1>`);
      _push(ssrRenderComponent(unref(script$4$1), {
        onClick: submitForm,
        class: "w-full py-2 text-lg bg-green-600 hover:bg-green-700 text-white rounded transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Masuk `);
          } else {
            return [
              createTextVNode(" Masuk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="flex justify-center" data-v-a1a749a1><button class="text-gray-500 hover:text-green-600 transition duration-300" data-v-a1a749a1> Kembali ke Halaman Sebelumnya </button></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1a749a1"]]);

export { Login as default };
//# sourceMappingURL=Login-BkB7WnuA.mjs.map
