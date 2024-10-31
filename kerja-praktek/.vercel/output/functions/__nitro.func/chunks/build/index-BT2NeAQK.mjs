import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Ck2YtJST.mjs';
import { ref, withCtx, createTextVNode, unref, useSSRContext, openBlock, createElementBlock, mergeProps, createElementVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-B_BQltvZ.mjs';
import { B as BaseStyle, _ as _export_sfc, a as script$8 } from './server.mjs';
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
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';

const _imports_1 = "" + buildAssetsURL("IsraMiraj.Bpb384Gh.png");
const _imports_2 = "" + buildAssetsURL("Kumpul.YVcZolJT.png");
const _imports_3 = "" + buildAssetsURL("Mc.DrzP3qwI.png");
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: "p-chart"
};
var ChartStyle = BaseStyle.extend({
  name: "chart",
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseChart",
  "extends": script$8,
  props: {
    type: String,
    data: null,
    options: null,
    plugins: null,
    width: {
      type: Number,
      "default": 300
    },
    height: {
      type: Number,
      "default": 150
    },
    canvasProps: {
      type: null,
      "default": null
    }
  },
  style: ChartStyle,
  provide: function provide() {
    return {
      $pcChart: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Chart",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["select", "loaded"],
  chart: null,
  watch: {
    /*
     * Use deep watch to enable triggering watch for changes within structure
     * otherwise the entire data object needs to be replaced to trigger watch
     */
    data: {
      handler: function handler() {
        this.reinit();
      },
      deep: true
    },
    type: function type() {
      this.reinit();
    },
    options: function options() {
      this.reinit();
    }
  },
  mounted: function mounted() {
    this.initChart();
  },
  beforeUnmount: function beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  },
  methods: {
    initChart: function initChart() {
      var _this = this;
      import('chart.js/auto').then(function(module) {
        if (_this.chart) {
          _this.chart.destroy();
          _this.chart = null;
        }
        if (module && module["default"]) {
          _this.chart = new module["default"](_this.$refs.canvas, {
            type: _this.type,
            data: _this.data,
            options: _this.options,
            plugins: _this.plugins
          });
        }
        _this.$emit("loaded", _this.chart);
      });
    },
    getCanvas: function getCanvas() {
      return this.$canvas;
    },
    getChart: function getChart() {
      return this.chart;
    },
    getBase64Image: function getBase64Image() {
      return this.chart.toBase64Image();
    },
    refresh: function refresh() {
      if (this.chart) {
        this.chart.update();
      }
    },
    reinit: function reinit() {
      this.initChart();
    },
    onCanvasClick: function onCanvasClick(event) {
      if (this.chart) {
        var element = this.chart.getElementsAtEventForMode(event, "nearest", {
          intersect: true
        }, false);
        var dataset = this.chart.getElementsAtEventForMode(event, "dataset", {
          intersect: true
        }, false);
        if (element && element[0] && dataset) {
          this.$emit("select", {
            originalEvent: event,
            element: element[0],
            dataset
          });
        }
      }
    },
    generateLegend: function generateLegend() {
      if (this.chart) {
        return this.chart.generateLegend();
      }
    }
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
var _hoisted_1 = ["width", "height"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root")
  }, _ctx.ptmi("root")), [createElementVNode("canvas", mergeProps({
    ref: "canvas",
    width: _ctx.width,
    height: _ctx.height,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.onCanvasClick($event);
    })
  }, _objectSpread(_objectSpread({}, _ctx.canvasProps), _ctx.ptm("canvas"))), null, 16, _hoisted_1)], 16);
}
script.render = render;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const chartData = ref();
    const chartOptions = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><header class="bg-green-800 p-4" data-v-58f80315><div class="container mx-auto flex justify-between items-center" data-v-58f80315><h1 class="text-white text-2xl font-bold" data-v-58f80315>Yayasan Al-Qaaf</h1><nav data-v-58f80315>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/login",
        class: "text-white px-4 py-2 hover:bg-green-600 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="flex flex-col items-center mt-6 p-6 bg-white rounded-lg shadow-md" data-v-58f80315><h2 class="text-xl font-semibold text-green-700 mb-2" data-v-58f80315>Mencetak Generasi Unggul!</h2><p class="text-gray-700 text-center" data-v-58f80315> Kami berkomitmen untuk memberikan pendidikan berkualitas, membangun karakter, dan mempersiapkan siswa untuk masa depan yang gemilang. </p></div></header><div class="container mx-auto p-4 mt-8" data-v-58f80315><h2 class="text-2xl font-bold mb-4 animate-fade-in" data-v-58f80315>Galeri Gambar</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-v-58f80315><div class="group overflow-hidden rounded-lg shadow-lg" data-v-58f80315><img${ssrRenderAttr("src", _imports_0)} alt="Gambar 1" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" data-v-58f80315></div><div class="group overflow-hidden rounded-lg shadow-lg" data-v-58f80315><img${ssrRenderAttr("src", _imports_1)} alt="Gambar 2" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" data-v-58f80315></div><div class="group overflow-hidden rounded-lg shadow-lg" data-v-58f80315><img${ssrRenderAttr("src", _imports_2)} alt="Gambar 3" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" data-v-58f80315></div><div class="group overflow-hidden rounded-lg shadow-lg" data-v-58f80315><img${ssrRenderAttr("src", _imports_3)} alt="Gambar 4" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" data-v-58f80315></div></div></div><div class="container mx-auto p-4 mt-8 bg-white rounded-lg shadow-md" data-v-58f80315><h2 class="text-lg font-bold text-green-800 font-serif animate-fade-in" data-v-58f80315>Visi:</h2><p class="text-gray-700 animate-fade-in" data-v-58f80315> Menjadi lembaga pendidikan terdepan yang membentuk generasi unggul dengan karakter yang kuat, pengetahuan yang luas, dan keterampilan yang relevan untuk menghadapi tantangan masa depan. </p><h2 class="text-lg font-bold text-green-800 mt-2 font-serif animate-fade-in" data-v-58f80315>Misi:</h2><ul class="list-disc list-inside text-gray-700 animate-fade-in" data-v-58f80315><li data-v-58f80315>Memberikan pendidikan berkualitas tinggi yang berfokus pada pengembangan intelektual, emosional, dan spiritual siswa.</li><li data-v-58f80315>Membangun karakter siswa melalui nilai-nilai moral dan etika yang kuat, serta pendidikan karakter yang berkelanjutan.</li><li data-v-58f80315>Mengembangkan kurikulum yang inovatif dan relevan dengan kebutuhan zaman, serta memfasilitasi pembelajaran yang kreatif dan menyenangkan.</li><li data-v-58f80315>Menyediakan lingkungan belajar yang aman, inklusif, dan mendukung, di mana setiap siswa dapat berkembang secara maksimal.</li><li data-v-58f80315>Mendorong keterlibatan orang tua dan masyarakat dalam proses pendidikan untuk menciptakan kolaborasi yang kuat antara sekolah dan lingkungan.</li></ul></div><div class="container mx-auto p-4 mt-8" data-v-58f80315><div class="flex" data-v-58f80315><div class="w-2/3" data-v-58f80315>`);
      _push(ssrRenderComponent(unref(script), {
        type: "bar",
        data: chartData.value,
        options: chartOptions.value
      }, null, _parent));
      _push(`</div><div class="w-1/3 pl-4" data-v-58f80315><h2 class="text-lg font-bold text-green-800 mb-2" data-v-58f80315>Statistik Pendidikan</h2><p class="text-gray-700 mb-4" data-v-58f80315> Kami memiliki 10 guru yang berpengalaman dan 50 siswa yang siap menghadapi tantangan pendidikan. Dengan komitmen untuk memberikan pembelajaran yang berkualitas, kami berharap dapat mencetak generasi unggul. </p><p class="text-gray-700" data-v-58f80315> Mari bergabung bersama kami untuk menciptakan masa depan yang lebih baik melalui pendidikan! </p></div></div></div><div class="flex flex-col items-center mt-8 p-6 bg-green-800 rounded-lg shadow-md" data-v-58f80315><h2 class="text-2xl font-bold text-white mb-2" data-v-58f80315>Ayo Bergabung Bersama Kami!</h2><p class="text-white text-center mb-4" data-v-58f80315> Kami mengundang Anda untuk menjadi bagian dari komunitas kami yang berkomitmen terhadap pendidikan berkualitas dan pengembangan karakter siswa. </p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/FormPendaftaran",
        class: "bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Daftar Sekarang`);
          } else {
            return [
              createTextVNode("Daftar Sekarang")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58f80315"]]);

export { index as default };
//# sourceMappingURL=index-BT2NeAQK.mjs.map
