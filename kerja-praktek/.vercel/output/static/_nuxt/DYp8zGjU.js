import{s as $,o as c,c as p,a as i,m as d,B as C,n as P,R as A,p as V,q as m,t as D,u as v,v as B,x as k,w as g,y as K,b as u,z as E,A as U,T as _,C as x,D as y,E as R,F as M,_ as T,G as L}from"./IpR19xIr.js";import{U as w,a as O}from"./C7ELsnLT.js";var I={name:"MinusIcon",extends:$};function F(s,e,n,l,a,t){return c(),p("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.pti()),e[0]||(e[0]=[i("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}I.render=F;var N={name:"PlusIcon",extends:$};function H(s,e,n,l,a,t){return c(),p("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.pti()),e[0]||(e[0]=[i("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}N.render=H;var q=function(e){var n=e.dt;return`
.p-panel {
    border: 1px solid `.concat(n("panel.border.color"),`;
    border-radius: `).concat(n("panel.border.radius"),`;
    background: `).concat(n("panel.background"),`;
    color: `).concat(n("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(n("panel.header.padding"),`;
    background: `).concat(n("panel.header.background"),`;
    color: `).concat(n("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(n("panel.header.border.width"),`;
    border-color: `).concat(n("panel.header.border.color"),`;
    border-radius: `).concat(n("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(n("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(n("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(n("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(n("panel.footer.padding"),`;
}
`)},z={root:function(e){var n=e.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},J=C.extend({name:"panel",theme:q,classes:z}),Z={name:"BasePanel",extends:x,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:J,provide:function(){return{$pcPanel:this,$parentInstance:this}}},S={name:"Panel",extends:Z,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(e){this.id=e||w()},collapsed:function(e){this.d_collapsed=e}},mounted:function(){this.id=this.id||w()},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:N,MinusIcon:I,Button:P},directives:{ripple:A}},G=["id"],Q=["id","aria-labelledby"];function W(s,e,n,l,a,t){var o=V("Button");return c(),p("div",d({class:s.cx("root")},s.ptmi("root")),[i("div",d({class:s.cx("header")},s.ptm("header")),[m(s.$slots,"header",{id:a.id+"_header",class:B(s.cx("title"))},function(){return[s.header?(c(),p("span",d({key:0,id:a.id+"_header",class:s.cx("title")},s.ptm("title")),D(s.header),17,G)):v("",!0)]}),i("div",d({class:s.cx("headerActions")},s.ptm("headerActions")),[m(s.$slots,"icons"),s.toggleable?(c(),k(o,d({key:0,id:a.id+"_header",class:s.cx("pcToggleButton"),"aria-label":t.buttonAriaLabel,"aria-controls":a.id+"_content","aria-expanded":!a.d_collapsed,unstyled:s.unstyled,onClick:t.toggle,onKeydown:t.onKeyDown},s.toggleButtonProps,{pt:s.ptm("pcToggleButton")}),{icon:g(function(h){return[m(s.$slots,s.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed},function(){return[(c(),k(K(a.d_collapsed?"PlusIcon":"MinusIcon"),d({class:h.class},s.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):v("",!0)],16)],16),u(_,d({name:"p-toggleable-content"},s.ptm("transition")),{default:g(function(){return[E(i("div",d({id:a.id+"_content",class:s.cx("contentContainer"),role:"region","aria-labelledby":a.id+"_header"},s.ptm("contentContainer")),[i("div",d({class:s.cx("content")},s.ptm("content")),[m(s.$slots,"default")],16),s.$slots.footer?(c(),p("div",d({key:0,class:s.cx("footer")},s.ptm("footer")),[m(s.$slots,"footer")],16)):v("",!0)],16,Q),[[U,!a.d_collapsed]])]}),_:3},16)],16)}S.render=W;var X={root:function(e){var n=e.instance;return["p-inputmask",{"p-filled":n.filled}]}},Y=C.extend({name:"inputmask",classes:X}),ee={name:"BaseInputMask",extends:x,props:{modelValue:null,slotChar:{type:String,default:"_"},id:{type:String,default:null},class:{type:[String,Object],default:null},mask:{type:String,default:null},placeholder:{type:String,default:null},autoClear:{type:Boolean,default:!0},unmask:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:null},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Y,provide:function(){return{$pcInputMask:this,$parentInstance:this}}},j={name:"InputMask",extends:ee,inheritAttrs:!1,emits:["update:modelValue","focus","blur","keydown","complete","keypress","paste"],inject:{$pcFluid:{default:null}},data:function(){return{currentVal:""}},watch:{mask:function(e,n){n!==e&&this.initMask()}},mounted:function(){this.initMask()},updated:function(){this.isValueUpdated()&&this.updateValue()},methods:{onInput:function(e){e.isComposing||(this.androidChrome?this.handleAndroidInput(e):this.handleInputChange(e),this.updateModelValue(e.target.value))},onFocus:function(e){var n=this;if(!this.readonly){this.focus=!0,clearTimeout(this.caretTimeoutId);var l;this.focusText=this.$el.value,l=this.checkVal(),this.caretTimeoutId=setTimeout(function(){n.$el===document.activeElement&&(n.writeBuffer(),l===n.mask.replace("?","").length?n.caret(0,l):n.caret(l))},10),this.$emit("focus",e)}},onBlur:function(e){if(this.focus=!1,this.checkVal(),this.updateModelValue(e.target.value),this.$el.value!==this.focusText){var n=document.createEvent("HTMLEvents");n.initEvent("change",!0,!1),this.$el.dispatchEvent(n)}this.$emit("blur",e)},onKeyDown:function(e){if(!this.readonly){var n=e.code,l,a,t,o=/iphone/i.test(y());this.oldVal=this.$el.value,n==="Backspace"||n==="Delete"||o&&n==="Escape"?(l=this.caret(),a=l.begin,t=l.end,t-a===0&&(a=n!=="Delete"?this.seekPrev(a):t=this.seekNext(a-1),t=n==="Delete"?this.seekNext(t):t),this.clearBuffer(a,t),this.shiftL(a,t-1),this.updateModelValue(e.target.value),e.preventDefault()):n==="Enter"?(this.$el.blur(),this.updateModelValue(e.target.value)):n==="Escape"&&(this.$el.value=this.focusText,this.caret(0,this.checkVal()),this.updateModelValue(e.target.value),e.preventDefault()),this.$emit("keydown",e)}},onKeyPress:function(e){var n=this;if(!this.readonly){var l=e.code,a=this.caret(),t,o,h,f;if(!(e.ctrlKey||e.altKey||e.metaKey||e.shiftKey||e.key==="CapsLock"||e.key==="Escape"||e.key==="Tab")){if(l&&l!=="Enter"){if(a.end-a.begin!==0&&(this.clearBuffer(a.begin,a.end),this.shiftL(a.begin,a.end-1)),t=this.seekNext(a.begin-1),t<this.len&&(o=e.key,this.tests[t].test(o))){if(this.shiftR(t),this.buffer[t]=o,this.writeBuffer(),h=this.seekNext(t),/android/i.test(y())){var b=function(){n.caret(h)};setTimeout(b,0)}else this.caret(h);a.begin<=this.lastRequiredNonMaskPos&&(f=this.isCompleted())}e.preventDefault()}this.updateModelValue(e.target.value),f&&this.$emit("complete",e),this.$emit("keypress",e)}}},onPaste:function(e){this.handleInputChange(e),this.$emit("paste",e)},caret:function(e,n){var l,a,t;if(!(!this.$el.offsetParent||this.$el!==document.activeElement))if(typeof e=="number")a=e,t=typeof n=="number"?n:a,this.$el.setSelectionRange?this.$el.setSelectionRange(a,t):this.$el.createTextRange&&(l=this.$el.createTextRange(),l.collapse(!0),l.moveEnd("character",t),l.moveStart("character",a),l.select());else return this.$el.setSelectionRange?(a=this.$el.selectionStart,t=this.$el.selectionEnd):document.selection&&document.selection.createRange&&(l=document.selection.createRange(),a=0-l.duplicate().moveStart("character",-1e5),t=a+l.text.length),{begin:a,end:t}},isCompleted:function(){for(var e=this.firstNonMaskPos;e<=this.lastRequiredNonMaskPos;e++)if(this.tests[e]&&this.buffer[e]===this.getPlaceholder(e))return!1;return!0},getPlaceholder:function(e){return e<this.slotChar.length?this.slotChar.charAt(e):this.slotChar.charAt(0)},seekNext:function(e){for(;++e<this.len&&!this.tests[e];);return e},seekPrev:function(e){for(;--e>=0&&!this.tests[e];);return e},shiftL:function(e,n){var l,a;if(!(e<0)){for(l=e,a=this.seekNext(n);l<this.len;l++)if(this.tests[l]){if(a<this.len&&this.tests[l].test(this.buffer[a]))this.buffer[l]=this.buffer[a],this.buffer[a]=this.getPlaceholder(a);else break;a=this.seekNext(a)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,e))}},shiftR:function(e){var n,l,a,t;for(n=e,l=this.getPlaceholder(e);n<this.len;n++)if(this.tests[n])if(a=this.seekNext(n),t=this.buffer[n],this.buffer[n]=l,a<this.len&&this.tests[a].test(t))l=t;else break},handleAndroidInput:function(e){var n=this.$el.value,l=this.caret();if(this.oldVal&&this.oldVal.length&&this.oldVal.length>n.length){for(this.checkVal(!0);l.begin>0&&!this.tests[l.begin-1];)l.begin--;if(l.begin===0)for(;l.begin<this.firstNonMaskPos&&!this.tests[l.begin];)l.begin++;this.caret(l.begin,l.begin)}else{for(this.checkVal(!0);l.begin<this.len&&!this.tests[l.begin];)l.begin++;this.caret(l.begin,l.begin)}this.isCompleted()&&this.$emit("complete",e)},clearBuffer:function(e,n){var l;for(l=e;l<n&&l<this.len;l++)this.tests[l]&&(this.buffer[l]=this.getPlaceholder(l))},writeBuffer:function(){this.$el.value=this.buffer.join("")},checkVal:function(e){this.isValueChecked=!0;var n=this.$el.value,l=-1,a,t,o;for(a=0,o=0;a<this.len;a++)if(this.tests[a]){for(this.buffer[a]=this.getPlaceholder(a);o++<n.length;)if(t=n.charAt(o-1),this.tests[a].test(t)){this.buffer[a]=t,l=a;break}if(o>n.length){this.clearBuffer(a+1,this.len);break}}else this.buffer[a]===n.charAt(o)&&o++,a<this.partialPosition&&(l=a);return e?this.writeBuffer():l+1<this.partialPosition?this.autoClear||this.buffer.join("")===this.defaultBuffer?(this.$el.value&&(this.$el.value=""),this.clearBuffer(0,this.len)):this.writeBuffer():(this.writeBuffer(),this.$el.value=this.$el.value.substring(0,l+1)),this.partialPosition?a:this.firstNonMaskPos},handleInputChange:function(e){var n=e.type==="paste";if(!(this.readonly||n)){var l=this.checkVal(!0);this.caret(l),this.updateModelValue(e.target.value),this.isCompleted()&&this.$emit("complete",e)}},getUnmaskedValue:function(){for(var e=[],n=0;n<this.buffer.length;n++){var l=this.buffer[n];this.tests[n]&&l!==this.getPlaceholder(n)&&e.push(l)}return e.join("")},updateModelValue:function(e){var n=this.unmask?this.getUnmaskedValue():e;this.currentVal=e,this.$emit("update:modelValue",this.defaultBuffer!==n?n:"")},updateValue:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.$el&&(this.modelValue==null?(this.$el.value="",n&&this.updateModelValue("")):(this.$el.value=this.modelValue,this.checkVal(),setTimeout(function(){e.$el&&(e.writeBuffer(),e.checkVal(),n&&e.updateModelValue(e.$el.value))},10)),this.focusText=this.$el.value)},initMask:function(){this.tests=[],this.partialPosition=this.mask.length,this.len=this.mask.length,this.firstNonMaskPos=null,this.defs={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};var e=y();this.androidChrome=/chrome/i.test(e)&&/android/i.test(e);for(var n=this.mask.split(""),l=0;l<n.length;l++){var a=n[l];a==="?"?(this.len--,this.partialPosition=l):this.defs[a]?(this.tests.push(new RegExp(this.defs[a])),this.firstNonMaskPos===null&&(this.firstNonMaskPos=this.tests.length-1),l<this.partialPosition&&(this.lastRequiredNonMaskPos=this.tests.length-1)):this.tests.push(null)}this.buffer=[];for(var t=0;t<n.length;t++){var o=n[t];o!=="?"&&(this.defs[o]?this.buffer.push(this.getPlaceholder(t)):this.buffer.push(o))}this.defaultBuffer=this.buffer.join(""),this.updateValue(!1)},isValueUpdated:function(){return this.unmask?this.modelValue!=this.getUnmaskedValue():this.defaultBuffer!==this.$el.value&&this.$el.value!==this.modelValue}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},inputClass:function(){return[this.cx("root"),this.class]},rootPTOptions:function(){return{root:d(this.ptm("pcInputText",this.ptmParams),this.ptmi("root",this.ptmParams))}},ptmParams:function(){return{context:{filled:this.filled}}},hasFluid:function(){return R(this.fluid)?!!this.$pcFluid:this.fluid}},components:{InputText:M}};function te(s,e,n,l,a,t){var o=V("InputText");return c(),k(o,{id:s.id,value:a.currentVal,class:B(t.inputClass),readonly:s.readonly,disabled:s.disabled,invalid:s.invalid,name:s.name,variant:s.variant,placeholder:s.placeholder,fluid:t.hasFluid,unstyled:s.unstyled,onInput:t.onInput,onCompositionend:t.onInput,onFocus:t.onFocus,onBlur:t.onBlur,onKeydown:t.onKeyDown,onKeypress:t.onKeyPress,onPaste:t.onPaste,pt:t.rootPTOptions},null,8,["id","value","class","readonly","disabled","invalid","name","variant","placeholder","fluid","unstyled","onInput","onCompositionend","onFocus","onBlur","onKeydown","onKeypress","onPaste","pt"])}j.render=te;const se={class:"flex items-center justify-center min-h-screen bg-gray-100"},ne={class:"m-5 w-full max-w-3xl bg-white rounded-lg shadow-lg p-8"},le={class:"grid grid-cols-12 gap-4"},ae={class:"grid grid-cols-12 gap-4"},ie={class:"grid grid-cols-12 gap-4"},oe={class:"grid grid-cols-12 gap-4"},re={class:"grid grid-cols-12 gap-4"},ue={class:"grid grid-cols-12 gap-4"},de={class:"grid grid-cols-12 gap-4"},ce={class:"grid grid-cols-12 gap-4"},he={class:"grid grid-cols-12 gap-4"},pe={class:"grid grid-cols-12 gap-4"},fe={class:"flex justify-between mt-6"},me={__name:"FormDaftarSiswa",setup(s){const e=L({}),n=()=>{window.history.back()},l=async()=>{try{const a=await O.post("http://localhost:5000/api/saveDataSiswa",e);alert(a.data)}catch(a){alert(`Error menyimpan data ${a}`)}};return(a,t)=>{const o=M,h=j,f=S,b=P;return c(),p("div",se,[i("div",ne,[t[20]||(t[20]=i("header",{class:"mb-6"},[i("h1",{class:"text-4xl text-center font-semibold text-green-800"},"FORMULIR PENDAFTARAN")],-1)),i("div",null,[u(f,{header:"Data Siswa",toggleable:""},{default:g(()=>[i("div",le,[t[10]||(t[10]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"Nama Lengkap",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.nama,"onUpdate:modelValue":t[0]||(t[0]=r=>e.nama=r),type:"text",placeholder:"Masukan Nama"},null,8,["modelValue"])]),i("div",ae,[t[11]||(t[11]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"Alamat",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.alamat,"onUpdate:modelValue":t[1]||(t[1]=r=>e.alamat=r),type:"text",placeholder:"Masukan Alamat"},null,8,["modelValue"])]),i("div",ie,[t[12]||(t[12]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"TTL",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.ttl,"onUpdate:modelValue":t[2]||(t[2]=r=>e.ttl=r),type:"text",placeholder:"Tempat, Tanggal Lahir"},null,8,["modelValue"])]),i("div",oe,[t[13]||(t[13]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"No Handphone",-1)),u(h,{id:"telepon",class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.no_hp,"onUpdate:modelValue":t[3]||(t[3]=r=>e.no_hp=r),mask:"9999-9999-9999",placeholder:"No. Telepon"},null,8,["modelValue"])]),i("div",re,[t[14]||(t[14]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"Jenis Kelamin",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.jenis_kelamin,"onUpdate:modelValue":t[4]||(t[4]=r=>e.jenis_kelamin=r),type:"text",placeholder:"Jenis Kelamin"},null,8,["modelValue"])])]),_:1}),u(f,{header:"Data Informasi Orang Tua",toggleable:""},{default:g(()=>[i("div",ue,[t[15]||(t[15]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"Nama Lengkap",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.namaOrtu,"onUpdate:modelValue":t[5]||(t[5]=r=>e.namaOrtu=r),type:"text",placeholder:"Masukan Nama"},null,8,["modelValue"])]),i("div",de,[t[16]||(t[16]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"Alamat",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.alamatOrtu,"onUpdate:modelValue":t[6]||(t[6]=r=>e.alamatOrtu=r),type:"text",placeholder:"Masukan Alamat"},null,8,["modelValue"])]),i("div",ce,[t[17]||(t[17]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"TTL",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.ttlOrtu,"onUpdate:modelValue":t[7]||(t[7]=r=>e.ttlOrtu=r),type:"text",placeholder:"Tempat, Tanggal Lahir"},null,8,["modelValue"])]),i("div",he,[t[18]||(t[18]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"No Handphone",-1)),u(h,{id:"teleponOrtu",class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.no_hpOrtu,"onUpdate:modelValue":t[8]||(t[8]=r=>e.no_hpOrtu=r),mask:"9999-9999-9999",placeholder:"No. Telepon"},null,8,["modelValue"])]),i("div",pe,[t[19]||(t[19]=i("label",{class:"font-medium col-span-3 flex justify-end mt-2"},"Jenis Kelamin",-1)),u(o,{class:"w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500",modelValue:e.jenis_kelaminOrtu,"onUpdate:modelValue":t[9]||(t[9]=r=>e.jenis_kelaminOrtu=r),type:"text",placeholder:"Jenis Kelamin"},null,8,["modelValue"])])]),_:1}),i("div",fe,[u(b,{label:"Kembali",onClick:n,class:"w-full max-w-xs h-12 bg-gray-300 hover:bg-gray-400 text-black rounded-md transition duration-300"}),u(b,{label:"Daftar Sekarang",onClick:l,class:"w-full max-w-xs h-12 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"})])])])])}}},ge=T(me,[["__scopeId","data-v-a3eb4c29"]]),be={},ve={class:"p-4"};function ye(s,e){const n=ge,l=V("components");return c(),p("div",ve,[i("div",null,[u(l,null,{default:g(()=>[u(n)]),_:1})])])}const we=T(be,[["render",ye]]);export{we as default};