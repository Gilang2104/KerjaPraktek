import { B as BaseStyle, _ as _export_sfc, s as script$2$1, c as script$4$1, b as script$7, R as Ripple, a as script$8 } from './server.mjs';
import { getUserAgent } from '@primeuix/utils/dom';
import { isEmpty } from '@primeuix/utils/object';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, reactive, openBlock, createBlock, normalizeClass, createElementBlock, createElementVNode, renderSlot, toDisplayString, createCommentVNode, resolveDynamicComponent, Transition, withDirectives, vShow } from 'vue';
import { U as UniqueComponentId } from './index-B-eWB_iB.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import axios from 'axios';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/utils/uuid';

var classes$1 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-inputmask", {
      "p-filled": instance.filled
    }];
  }
};
var InputMaskStyle = BaseStyle.extend({
  name: "inputmask",
  classes: classes$1
});
var script$1$1 = {
  name: "BaseInputMask",
  "extends": script$8,
  props: {
    modelValue: null,
    slotChar: {
      type: String,
      "default": "_"
    },
    id: {
      type: String,
      "default": null
    },
    "class": {
      type: [String, Object],
      "default": null
    },
    mask: {
      type: String,
      "default": null
    },
    placeholder: {
      type: String,
      "default": null
    },
    autoClear: {
      type: Boolean,
      "default": true
    },
    unmask: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      "default": null
    },
    variant: {
      type: String,
      "default": null
    },
    fluid: {
      type: Boolean,
      "default": null
    }
  },
  style: InputMaskStyle,
  provide: function provide() {
    return {
      $pcInputMask: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "InputMask",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "focus", "blur", "keydown", "complete", "keypress", "paste"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  data: function data() {
    return {
      currentVal: ""
    };
  },
  watch: {
    mask: function mask(newMask, oldMask) {
      if (oldMask !== newMask) {
        this.initMask();
      }
    }
  },
  mounted: function mounted() {
    this.initMask();
  },
  updated: function updated() {
    if (this.isValueUpdated()) {
      this.updateValue();
    }
  },
  methods: {
    onInput: function onInput(event) {
      if (!event.isComposing) {
        if (this.androidChrome)
          this.handleAndroidInput(event);
        else
          this.handleInputChange(event);
        this.updateModelValue(event.target.value);
      }
    },
    onFocus: function onFocus(event) {
      var _this = this;
      if (this.readonly) {
        return;
      }
      this.focus = true;
      clearTimeout(this.caretTimeoutId);
      var pos;
      this.focusText = this.$el.value;
      pos = this.checkVal();
      this.caretTimeoutId = setTimeout(function() {
        if (_this.$el !== (void 0).activeElement) {
          return;
        }
        _this.writeBuffer();
        if (pos === _this.mask.replace("?", "").length) {
          _this.caret(0, pos);
        } else {
          _this.caret(pos);
        }
      }, 10);
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focus = false;
      this.checkVal();
      this.updateModelValue(event.target.value);
      if (this.$el.value !== this.focusText) {
        var e = (void 0).createEvent("HTMLEvents");
        e.initEvent("change", true, false);
        this.$el.dispatchEvent(e);
      }
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.readonly) {
        return;
      }
      var k = event.code, pos, begin, end;
      var iPhone = /iphone/i.test(getUserAgent());
      this.oldVal = this.$el.value;
      if (k === "Backspace" || k === "Delete" || iPhone && k === "Escape") {
        pos = this.caret();
        begin = pos.begin;
        end = pos.end;
        if (end - begin === 0) {
          begin = k !== "Delete" ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
          end = k === "Delete" ? this.seekNext(end) : end;
        }
        this.clearBuffer(begin, end);
        this.shiftL(begin, end - 1);
        this.updateModelValue(event.target.value);
        event.preventDefault();
      } else if (k === "Enter") {
        this.$el.blur();
        this.updateModelValue(event.target.value);
      } else if (k === "Escape") {
        this.$el.value = this.focusText;
        this.caret(0, this.checkVal());
        this.updateModelValue(event.target.value);
        event.preventDefault();
      }
      this.$emit("keydown", event);
    },
    onKeyPress: function onKeyPress(event) {
      var _this2 = this;
      if (this.readonly) {
        return;
      }
      var k = event.code, pos = this.caret(), p, c, next, completed;
      if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey || event.key === "CapsLock" || event.key === "Escape" || event.key === "Tab") {
        return;
      } else if (k && k !== "Enter") {
        if (pos.end - pos.begin !== 0) {
          this.clearBuffer(pos.begin, pos.end);
          this.shiftL(pos.begin, pos.end - 1);
        }
        p = this.seekNext(pos.begin - 1);
        if (p < this.len) {
          c = event.key;
          if (this.tests[p].test(c)) {
            this.shiftR(p);
            this.buffer[p] = c;
            this.writeBuffer();
            next = this.seekNext(p);
            if (/android/i.test(getUserAgent())) {
              var proxy = function proxy2() {
                _this2.caret(next);
              };
              setTimeout(proxy, 0);
            } else {
              this.caret(next);
            }
            if (pos.begin <= this.lastRequiredNonMaskPos) {
              completed = this.isCompleted();
            }
          }
        }
        event.preventDefault();
      }
      this.updateModelValue(event.target.value);
      if (completed) {
        this.$emit("complete", event);
      }
      this.$emit("keypress", event);
    },
    onPaste: function onPaste(event) {
      this.handleInputChange(event);
      this.$emit("paste", event);
    },
    caret: function caret(first, last) {
      var range, begin, end;
      if (!this.$el.offsetParent || this.$el !== (void 0).activeElement) {
        return;
      }
      if (typeof first === "number") {
        begin = first;
        end = typeof last === "number" ? last : begin;
        if (this.$el.setSelectionRange) {
          this.$el.setSelectionRange(begin, end);
        } else if (this.$el["createTextRange"]) {
          range = this.$el["createTextRange"]();
          range.collapse(true);
          range.moveEnd("character", end);
          range.moveStart("character", begin);
          range.select();
        }
      } else {
        if (this.$el.setSelectionRange) {
          begin = this.$el.selectionStart;
          end = this.$el.selectionEnd;
        } else if ((void 0)["selection"] && (void 0)["selection"].createRange) {
          range = (void 0)["selection"].createRange();
          begin = 0 - range.duplicate().moveStart("character", -1e5);
          end = begin + range.text.length;
        }
        return {
          begin,
          end
        };
      }
    },
    isCompleted: function isCompleted() {
      for (var i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
        if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
          return false;
        }
      }
      return true;
    },
    getPlaceholder: function getPlaceholder(i) {
      if (i < this.slotChar.length) {
        return this.slotChar.charAt(i);
      }
      return this.slotChar.charAt(0);
    },
    seekNext: function seekNext(pos) {
      while (++pos < this.len && !this.tests[pos])
        ;
      return pos;
    },
    seekPrev: function seekPrev(pos) {
      while (--pos >= 0 && !this.tests[pos])
        ;
      return pos;
    },
    shiftL: function shiftL(begin, end) {
      var i, j;
      if (begin < 0) {
        return;
      }
      for (i = begin, j = this.seekNext(end); i < this.len; i++) {
        if (this.tests[i]) {
          if (j < this.len && this.tests[i].test(this.buffer[j])) {
            this.buffer[i] = this.buffer[j];
            this.buffer[j] = this.getPlaceholder(j);
          } else {
            break;
          }
          j = this.seekNext(j);
        }
      }
      this.writeBuffer();
      this.caret(Math.max(this.firstNonMaskPos, begin));
    },
    shiftR: function shiftR(pos) {
      var i, c, j, t;
      for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
        if (this.tests[i]) {
          j = this.seekNext(i);
          t = this.buffer[i];
          this.buffer[i] = c;
          if (j < this.len && this.tests[j].test(t)) {
            c = t;
          } else {
            break;
          }
        }
      }
    },
    handleAndroidInput: function handleAndroidInput(event) {
      var curVal = this.$el.value;
      var pos = this.caret();
      if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
        this.checkVal(true);
        while (pos.begin > 0 && !this.tests[pos.begin - 1])
          pos.begin--;
        if (pos.begin === 0) {
          while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin])
            pos.begin++;
        }
        this.caret(pos.begin, pos.begin);
      } else {
        this.checkVal(true);
        while (pos.begin < this.len && !this.tests[pos.begin])
          pos.begin++;
        this.caret(pos.begin, pos.begin);
      }
      if (this.isCompleted()) {
        this.$emit("complete", event);
      }
    },
    clearBuffer: function clearBuffer(start, end) {
      var i;
      for (i = start; i < end && i < this.len; i++) {
        if (this.tests[i]) {
          this.buffer[i] = this.getPlaceholder(i);
        }
      }
    },
    writeBuffer: function writeBuffer() {
      this.$el.value = this.buffer.join("");
    },
    checkVal: function checkVal(allow) {
      this.isValueChecked = true;
      var test = this.$el.value, lastMatch = -1, i, c, pos;
      for (i = 0, pos = 0; i < this.len; i++) {
        if (this.tests[i]) {
          this.buffer[i] = this.getPlaceholder(i);
          while (pos++ < test.length) {
            c = test.charAt(pos - 1);
            if (this.tests[i].test(c)) {
              this.buffer[i] = c;
              lastMatch = i;
              break;
            }
          }
          if (pos > test.length) {
            this.clearBuffer(i + 1, this.len);
            break;
          }
        } else {
          if (this.buffer[i] === test.charAt(pos)) {
            pos++;
          }
          if (i < this.partialPosition) {
            lastMatch = i;
          }
        }
      }
      if (allow) {
        this.writeBuffer();
      } else if (lastMatch + 1 < this.partialPosition) {
        if (this.autoClear || this.buffer.join("") === this.defaultBuffer) {
          if (this.$el.value)
            this.$el.value = "";
          this.clearBuffer(0, this.len);
        } else {
          this.writeBuffer();
        }
      } else {
        this.writeBuffer();
        this.$el.value = this.$el.value.substring(0, lastMatch + 1);
      }
      return this.partialPosition ? i : this.firstNonMaskPos;
    },
    handleInputChange: function handleInputChange(event) {
      var isPasteEvent = event.type === "paste";
      if (this.readonly || isPasteEvent) {
        return;
      }
      var pos = this.checkVal(true);
      this.caret(pos);
      this.updateModelValue(event.target.value);
      if (this.isCompleted()) {
        this.$emit("complete", event);
      }
    },
    getUnmaskedValue: function getUnmaskedValue() {
      var unmaskedBuffer = [];
      for (var i = 0; i < this.buffer.length; i++) {
        var c = this.buffer[i];
        if (this.tests[i] && c !== this.getPlaceholder(i)) {
          unmaskedBuffer.push(c);
        }
      }
      return unmaskedBuffer.join("");
    },
    updateModelValue: function updateModelValue(value) {
      var val = this.unmask ? this.getUnmaskedValue() : value;
      this.currentVal = value;
      this.$emit("update:modelValue", this.defaultBuffer !== val ? val : "");
    },
    updateValue: function updateValue() {
      var _this3 = this;
      var updateModel = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (this.$el) {
        if (this.modelValue == null) {
          this.$el.value = "";
          updateModel && this.updateModelValue("");
        } else {
          this.$el.value = this.modelValue;
          this.checkVal();
          setTimeout(function() {
            if (_this3.$el) {
              _this3.writeBuffer();
              _this3.checkVal();
              if (updateModel)
                _this3.updateModelValue(_this3.$el.value);
            }
          }, 10);
        }
        this.focusText = this.$el.value;
      }
    },
    initMask: function initMask() {
      this.tests = [];
      this.partialPosition = this.mask.length;
      this.len = this.mask.length;
      this.firstNonMaskPos = null;
      this.defs = {
        9: "[0-9]",
        a: "[A-Za-z]",
        "*": "[A-Za-z0-9]"
      };
      var ua = getUserAgent();
      this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
      var maskTokens = this.mask.split("");
      for (var i = 0; i < maskTokens.length; i++) {
        var c = maskTokens[i];
        if (c === "?") {
          this.len--;
          this.partialPosition = i;
        } else if (this.defs[c]) {
          this.tests.push(new RegExp(this.defs[c]));
          if (this.firstNonMaskPos === null) {
            this.firstNonMaskPos = this.tests.length - 1;
          }
          if (i < this.partialPosition) {
            this.lastRequiredNonMaskPos = this.tests.length - 1;
          }
        } else {
          this.tests.push(null);
        }
      }
      this.buffer = [];
      for (var _i = 0; _i < maskTokens.length; _i++) {
        var _c = maskTokens[_i];
        if (_c !== "?") {
          if (this.defs[_c])
            this.buffer.push(this.getPlaceholder(_i));
          else
            this.buffer.push(_c);
        }
      }
      this.defaultBuffer = this.buffer.join("");
      this.updateValue(false);
    },
    isValueUpdated: function isValueUpdated() {
      return this.unmask ? this.modelValue != this.getUnmaskedValue() : this.defaultBuffer !== this.$el.value && this.$el.value !== this.modelValue;
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    inputClass: function inputClass() {
      return [this.cx("root"), this["class"]];
    },
    rootPTOptions: function rootPTOptions() {
      return {
        root: mergeProps(this.ptm("pcInputText", this.ptmParams), this.ptmi("root", this.ptmParams))
      };
    },
    ptmParams: function ptmParams() {
      return {
        context: {
          filled: this.filled
        }
      };
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    InputText: script$2$1
  }
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = resolveComponent("InputText");
  return openBlock(), createBlock(_component_InputText, {
    id: _ctx.id,
    value: $data.currentVal,
    "class": normalizeClass($options.inputClass),
    readonly: _ctx.readonly,
    disabled: _ctx.disabled,
    invalid: _ctx.invalid,
    name: _ctx.name,
    variant: _ctx.variant,
    placeholder: _ctx.placeholder,
    fluid: $options.hasFluid,
    unstyled: _ctx.unstyled,
    onInput: $options.onInput,
    onCompositionend: $options.onInput,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onKeypress: $options.onKeyPress,
    onPaste: $options.onPaste,
    pt: $options.rootPTOptions
  }, null, 8, ["id", "value", "class", "readonly", "disabled", "invalid", "name", "variant", "placeholder", "fluid", "unstyled", "onInput", "onCompositionend", "onFocus", "onBlur", "onKeydown", "onKeypress", "onPaste", "pt"]);
}
script$4.render = render$3;
var script$3 = {
  name: "MinusIcon",
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
    d: "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$3.render = render$2;
var script$2 = {
  name: "PlusIcon",
  "extends": script$7
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-panel {\n    border: 1px solid ".concat(dt("panel.border.color"), ";\n    border-radius: ").concat(dt("panel.border.radius"), ";\n    background: ").concat(dt("panel.background"), ";\n    color: ").concat(dt("panel.color"), ";\n}\n\n.p-panel-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: ").concat(dt("panel.header.padding"), ";\n    background: ").concat(dt("panel.header.background"), ";\n    color: ").concat(dt("panel.header.color"), ";\n    border-style: solid;\n    border-width: ").concat(dt("panel.header.border.width"), ";\n    border-color: ").concat(dt("panel.header.border.color"), ";\n    border-radius: ").concat(dt("panel.header.border.radius"), ";\n}\n\n.p-panel-toggleable .p-panel-header {\n    padding: ").concat(dt("panel.toggleable.header.padding"), ";\n}\n\n.p-panel-title {\n    line-height: 1;\n    font-weight: ").concat(dt("panel.title.font.weight"), ";\n}\n\n.p-panel-content {\n    padding: ").concat(dt("panel.content.padding"), ";\n}\n\n.p-panel-footer {\n    padding: ").concat(dt("panel.footer.padding"), ";\n}\n");
};
var classes = {
  root: function root2(_ref2) {
    var props = _ref2.props;
    return ["p-panel p-component", {
      "p-panel-toggleable": props.toggleable
    }];
  },
  header: "p-panel-header",
  title: "p-panel-title",
  headerActions: "p-panel-header-actions",
  pcToggleButton: "p-panel-toggle-button",
  contentContainer: "p-panel-content-container",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
var PanelStyle = BaseStyle.extend({
  name: "panel",
  theme,
  classes
});
var script$1 = {
  name: "BasePanel",
  "extends": script$8,
  props: {
    header: String,
    toggleable: Boolean,
    collapsed: Boolean,
    toggleButtonProps: {
      type: Object,
      "default": function _default() {
        return {
          severity: "secondary",
          text: true,
          rounded: true
        };
      }
    }
  },
  style: PanelStyle,
  provide: function provide2() {
    return {
      $pcPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Panel",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:collapsed", "toggle"],
  data: function data2() {
    return {
      id: this.$attrs.id,
      d_collapsed: this.collapsed
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    collapsed: function collapsed(newValue) {
      this.d_collapsed = newValue;
    }
  },
  mounted: function mounted2() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    toggle: function toggle(event) {
      this.d_collapsed = !this.d_collapsed;
      this.$emit("update:collapsed", this.d_collapsed);
      this.$emit("toggle", {
        originalEvent: event,
        value: this.d_collapsed
      });
    },
    onKeyDown: function onKeyDown2(event) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.toggle(event);
        event.preventDefault();
      }
    }
  },
  computed: {
    buttonAriaLabel: function buttonAriaLabel() {
      return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.header;
    }
  },
  components: {
    PlusIcon: script$2,
    MinusIcon: script$3,
    Button: script$4$1
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header", {
    id: $data.id + "_header",
    "class": normalizeClass(_ctx.cx("title"))
  }, function() {
    return [_ctx.header ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      id: $data.id + "_header",
      "class": _ctx.cx("title")
    }, _ctx.ptm("title")), toDisplayString(_ctx.header), 17, _hoisted_1)) : createCommentVNode("", true)];
  }), createElementVNode("div", mergeProps({
    "class": _ctx.cx("headerActions")
  }, _ctx.ptm("headerActions")), [renderSlot(_ctx.$slots, "icons"), _ctx.toggleable ? (openBlock(), createBlock(_component_Button, mergeProps({
    key: 0,
    id: $data.id + "_header",
    "class": _ctx.cx("pcToggleButton"),
    "aria-label": $options.buttonAriaLabel,
    "aria-controls": $data.id + "_content",
    "aria-expanded": !$data.d_collapsed,
    unstyled: _ctx.unstyled,
    onClick: $options.toggle,
    onKeydown: $options.onKeyDown
  }, _ctx.toggleButtonProps, {
    pt: _ctx.ptm("pcToggleButton")
  }), {
    icon: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, _ctx.$slots.toggleicon ? "toggleicon" : "togglericon", {
        collapsed: $data.d_collapsed
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent($data.d_collapsed ? "PlusIcon" : "MinusIcon"), mergeProps({
          "class": slotProps["class"]
        }, _ctx.ptm("pcToggleButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["id", "class", "aria-label", "aria-controls", "aria-expanded", "unstyled", "onClick", "onKeydown", "pt"])) : createCommentVNode("", true)], 16)], 16), createVNode(Transition, mergeProps({
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        id: $data.id + "_content",
        "class": _ctx.cx("contentContainer"),
        role: "region",
        "aria-labelledby": $data.id + "_header"
      }, _ctx.ptm("contentContainer")), [createElementVNode("div", mergeProps({
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        "class": _ctx.cx("footer")
      }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16, _hoisted_2), [[vShow, !$data.d_collapsed]])];
    }),
    _: 3
  }, 16)], 16);
}
script.render = render;
const _sfc_main$1 = {
  __name: "FormDaftarSiswa",
  __ssrInlineRender: true,
  setup(__props) {
    const formdata = reactive({});
    const goBack = () => {
      (void 0).history.back();
    };
    const submitForm = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/saveDataSiswa", formdata);
        alert(response.data);
      } catch (error) {
        alert(`Error menyimpan data ${error}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Panel = script;
      const _component_InputText = script$2$1;
      const _component_InputMask = script$4;
      const _component_Button = script$4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen bg-gray-100" }, _attrs))} data-v-a3eb4c29><div class="m-5 w-full max-w-3xl bg-white rounded-lg shadow-lg p-8" data-v-a3eb4c29><header class="mb-6" data-v-a3eb4c29><h1 class="text-4xl text-center font-semibold text-green-800" data-v-a3eb4c29>FORMULIR PENDAFTARAN</h1></header><div data-v-a3eb4c29>`);
      _push(ssrRenderComponent(_component_Panel, {
        header: "Data Siswa",
        toggleable: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>Nama Lengkap</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.nama,
              "onUpdate:modelValue": ($event) => formdata.nama = $event,
              type: "text",
              placeholder: "Masukan Nama"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>Alamat</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.alamat,
              "onUpdate:modelValue": ($event) => formdata.alamat = $event,
              type: "text",
              placeholder: "Masukan Alamat"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>TTL</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.ttl,
              "onUpdate:modelValue": ($event) => formdata.ttl = $event,
              type: "text",
              placeholder: "Tempat, Tanggal Lahir"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>No Handphone</label>`);
            _push2(ssrRenderComponent(_component_InputMask, {
              id: "telepon",
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.no_hp,
              "onUpdate:modelValue": ($event) => formdata.no_hp = $event,
              mask: "9999-9999-9999",
              placeholder: "No. Telepon"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>Jenis Kelamin</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.jenis_kelamin,
              "onUpdate:modelValue": ($event) => formdata.jenis_kelamin = $event,
              type: "text",
              placeholder: "Jenis Kelamin"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "Nama Lengkap"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.nama,
                  "onUpdate:modelValue": ($event) => formdata.nama = $event,
                  type: "text",
                  placeholder: "Masukan Nama"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "Alamat"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.alamat,
                  "onUpdate:modelValue": ($event) => formdata.alamat = $event,
                  type: "text",
                  placeholder: "Masukan Alamat"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "TTL"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.ttl,
                  "onUpdate:modelValue": ($event) => formdata.ttl = $event,
                  type: "text",
                  placeholder: "Tempat, Tanggal Lahir"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "No Handphone"),
                createVNode(_component_InputMask, {
                  id: "telepon",
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.no_hp,
                  "onUpdate:modelValue": ($event) => formdata.no_hp = $event,
                  mask: "9999-9999-9999",
                  placeholder: "No. Telepon"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "Jenis Kelamin"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.jenis_kelamin,
                  "onUpdate:modelValue": ($event) => formdata.jenis_kelamin = $event,
                  type: "text",
                  placeholder: "Jenis Kelamin"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Panel, {
        header: "Data Informasi Orang Tua",
        toggleable: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>Nama Lengkap</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.namaOrtu,
              "onUpdate:modelValue": ($event) => formdata.namaOrtu = $event,
              type: "text",
              placeholder: "Masukan Nama"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>Alamat</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.alamatOrtu,
              "onUpdate:modelValue": ($event) => formdata.alamatOrtu = $event,
              type: "text",
              placeholder: "Masukan Alamat"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>TTL</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.ttlOrtu,
              "onUpdate:modelValue": ($event) => formdata.ttlOrtu = $event,
              type: "text",
              placeholder: "Tempat, Tanggal Lahir"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>No Handphone</label>`);
            _push2(ssrRenderComponent(_component_InputMask, {
              id: "teleponOrtu",
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.no_hpOrtu,
              "onUpdate:modelValue": ($event) => formdata.no_hpOrtu = $event,
              mask: "9999-9999-9999",
              placeholder: "No. Telepon"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-12 gap-4" data-v-a3eb4c29${_scopeId}><label class="font-medium col-span-3 flex justify-end mt-2" data-v-a3eb4c29${_scopeId}>Jenis Kelamin</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
              modelValue: formdata.jenis_kelaminOrtu,
              "onUpdate:modelValue": ($event) => formdata.jenis_kelaminOrtu = $event,
              type: "text",
              placeholder: "Jenis Kelamin"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "Nama Lengkap"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.namaOrtu,
                  "onUpdate:modelValue": ($event) => formdata.namaOrtu = $event,
                  type: "text",
                  placeholder: "Masukan Nama"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "Alamat"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.alamatOrtu,
                  "onUpdate:modelValue": ($event) => formdata.alamatOrtu = $event,
                  type: "text",
                  placeholder: "Masukan Alamat"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "TTL"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.ttlOrtu,
                  "onUpdate:modelValue": ($event) => formdata.ttlOrtu = $event,
                  type: "text",
                  placeholder: "Tempat, Tanggal Lahir"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "No Handphone"),
                createVNode(_component_InputMask, {
                  id: "teleponOrtu",
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.no_hpOrtu,
                  "onUpdate:modelValue": ($event) => formdata.no_hpOrtu = $event,
                  mask: "9999-9999-9999",
                  placeholder: "No. Telepon"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("label", { class: "font-medium col-span-3 flex justify-end mt-2" }, "Jenis Kelamin"),
                createVNode(_component_InputText, {
                  class: "w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",
                  modelValue: formdata.jenis_kelaminOrtu,
                  "onUpdate:modelValue": ($event) => formdata.jenis_kelaminOrtu = $event,
                  type: "text",
                  placeholder: "Jenis Kelamin"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-between mt-6" data-v-a3eb4c29>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Kembali",
        onClick: goBack,
        class: "w-full max-w-xs h-12 bg-gray-300 hover:bg-gray-400 text-black rounded-md transition duration-300"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Daftar Sekarang",
        onClick: submitForm,
        class: "w-full max-w-xs h-12 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormDaftarSiswa.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a3eb4c29"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_components = resolveComponent("components");
  const _component_FormDaftarSiswa = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_components, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FormDaftarSiswa, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FormDaftarSiswa)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/FormPendaftaran.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormPendaftaran = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FormPendaftaran as default };
//# sourceMappingURL=FormPendaftaran-LXsGUH31.mjs.map
