(function(e){function t(t){for(var s,i,a=t[0],p=t[1],l=t[2],c=0,d=[];c<a.length;c++)i=a[c],o[i]&&d.push(o[i][0]),o[i]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(e[s]=p[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(s=!1)}s&&(r.splice(t--,1),e=p(p.s=n[0]))}return e}var s={},i={app:0},o={app:0},r=[];function a(e){return p.p+"js/"+({}[e]||e)+"."+{"chunk-12002374":"81484d9e","chunk-1c7fa8a3":"50b0df6b","chunk-2d20ed92":"fe7b2db1","chunk-2d2375a0":"f285befe"}[e]+".js"}function p(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,p),n.l=!0,n.exports}p.e=function(e){var t=[],n={"chunk-12002374":1,"chunk-1c7fa8a3":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-12002374":"c61b7dac","chunk-1c7fa8a3":"3f9a7458","chunk-2d20ed92":"31d6cfe0","chunk-2d2375a0":"31d6cfe0"}[e]+".css",o=p.p+s,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var l=r[a],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===s||c===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],c=l.getAttribute("data-href");if(c===s||c===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var s=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.request=s,delete i[e],u.parentNode.removeChild(u),n(r)},u.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(u)}).then(function(){i[e]=0}));var s=o[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise(function(t,n){s=o[e]=[t,n]});t.push(s[2]=r);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,p.nc&&c.setAttribute("nonce",p.nc),c.src=a(e),l=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,n[1](r)}o[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},p.m=e,p.c=s,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)p.d(n,s,function(t){return e[t]}.bind(null,s));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0243":function(e,t,n){},"0b19":function(e,t,n){"use strict";var s=n("1c84"),i=n("64aa"),o=n("2877"),r=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=r.exports},"1c84":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-top navbar-expand-md navbar-dark",attrs:{id:"navbar-main"}},[n("div",{staticClass:"container-fluid"},[n("router-link",{staticClass:"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block",attrs:{to:"/"}},[e._v(e._s(e.description.appName))])],1)])},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},"22bd":function(e){e.exports=[{id:1,title:"1st User",color:"#0000FF",size:"60%"},{id:2,title:"2st User",color:"#DC143C",size:"20%"},{id:3,title:"3st User",color:"#FF8C00",size:"50%"},{id:4,title:"4st User",color:"#00FFFF",size:"90%"},{id:5,title:"5st User",color:"#FF69B4",size:"30%"}]},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("cebc"),i=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-content"},[n("router-view",{attrs:{name:"navbar"}}),n("router-view",{attrs:{name:"header"}}),n("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[n("router-view")],1),n("router-view",{attrs:{name:"footer"}})],1)])},r=[],a=n("7c76"),p={components:{FadeTransition:a["a"]}},l=p,c=n("2877"),d=Object(c["a"])(l,o,r,!1,null,null,null),u=d.exports,b=n("8c4f"),h={index:"/",test1:{path:"/test1",name:"Test1"},test2:{path:"/test2",name:"Test2"},test3:{path:"/test3",name:"Test3"},test4:{path:"/test4",name:"Test5"}},f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header bg-gradient-primary py-5 pt-md-6"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"header-body"},[n("h3",{domProps:{innerHTML:e._s(e.description.disclaimer)}})])])]),n("div",{staticClass:"text-center pt-3"},[n("router-link",{attrs:{tag:"base-button",to:"/",type:"neutral"}},[e._v("Go back home")])],1),n("div",{staticClass:"container text-center pt-5"},e._l(e.tabs,function(t,s){return n("router-link",{key:s,attrs:{tag:"base-button",to:t.link,type:"neutral"}},[e._v(e._s(t.name))])}),1)])},m=[],g=(n("7f7f"),{data:function(){return{tabs:[]}},mounted:function(){for(var e=1;e<=4;e++)this.tabs.push(v({name:"".concat(e)}))}});function v(e){var t=e.name;return{link:"/test".concat(t),name:"Test ".concat(t)}}var y=g,_=Object(c["a"])(y,f,m,!1,null,null,null),S=_.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},w=[],k={},I=k,x=Object(c["a"])(I,C,w,!1,null,null,null),O=x.exports,P=n("0b19"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container pt-3 pb-5"},[n("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[n("router-view")],1)],1)},A=[],$={components:{FadeTransition:a["a"]}},E=$,B=Object(c["a"])(E,j,A,!1,null,null,null),T=B.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("test-card",{attrs:{number:"home"}},[e.description.description.length?n("div",{domProps:{innerHTML:e._s(e.description.description)}}):n("div",{staticClass:"p-5"},[n("h3",[e._v('This is result of I-ON Communication coding challenge. The test provided only a source code "vue-test.zip" without any target to archive.')]),n("h3",[e._v("Therefore, I took the liberty of freely completing this from what i perceived.")]),n("br"),n("p",[e._v("▶ From what I see, the code includes JSON data files, 4 tests, with different hidden meanings.")]),n("p",[e._v("▶ The structure and UI were changed to become like this. If you don't think this is interesting, please contact me for original implemented version.")]),n("p",[e._v("▶ Each test had been done with something in my mind and noted on top title.")]),n("p",[e._v("▶ Mobile consideration.")]),n("p",[e._v("▶ The web uses router and animation to make transition between pages.")]),n("p",[e._v("▶ Until this last version, I can still see many features to add and things to improve. That what make this very interesting.")]),n("br"),n("p",[e._v("Finally, thank you for your visit.")])])])},N=[],q=n("afcd"),H={components:{TestCard:q["a"]}},W=H,z=Object(c["a"])(W,M,N,!1,null,null,null),F=z.exports,R=function(){return n.e("chunk-1c7fa8a3").then(n.bind(null,"535d"))},D=function(){return n.e("chunk-2d2375a0").then(n.bind(null,"fb6d"))},L=function(){return n.e("chunk-2d20ed92").then(n.bind(null,"b0b0"))},U=function(){return n.e("chunk-12002374").then(n.bind(null,"5071"))};i["a"].use(b["a"]);var V,G=new b["a"]({base:"/",routes:[{path:h.index,components:{default:T,header:S,footer:O,navbar:P["default"]},children:[{path:"",component:F},Object(s["a"])({},h.test1,{component:R}),Object(s["a"])({},h.test2,{component:D}),Object(s["a"])({},h.test3,{component:L}),Object(s["a"])({},h.test4,{component:U})]},{path:"*",redirect:h.index}],scrollBehavior:function(e,t,n){return n||(e.hash?{selector:e.hash}:{x:0,y:0})}}),Q=n("bd86"),J=n("2f62"),Y=n("0e44"),K="SET_LOGGED_IN",X="SET_PROFILE";i["a"].use(J["a"]);var Z=new J["a"].Store({state:{account:{isLoggedIn:!1},profile:{},value:{}},mutations:(V={},Object(Q["a"])(V,K,function(e,t){e.account.isLoggedIn=t}),Object(Q["a"])(V,X,function(e,t){e.profile=t}),V),actions:{},plugins:[Object(Y["a"])()]}),ee=(n("0243"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"badge",class:["badge-"+e.type,e.rounded?"badge-pill":"",e.circle&&"badge-circle"]},[e._t("default",[e.icon?n("i",{class:e.icon}):e._e()])],2)}),te=[],ne={name:"badge",props:{tag:{type:String,default:"span",description:"Html tag to use for the badge."},rounded:{type:Boolean,default:!1,description:"Whether badge is of pill type"},circle:{type:Boolean,default:!1,description:"Whether badge is circle"},icon:{type:String,default:"",description:"Icon name. Will be overwritten by slot if slot is used"},type:{type:String,default:"default",description:"Badge type (primary|info|danger|default|warning|success)"}}},se=ne,ie=Object(c["a"])(se,ee,te,!1,null,null,null),oe=ie.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fade-transition",[e.visible?n("div",{staticClass:"alert",class:["alert-"+e.type,{"alert-dismissible":e.dismissible}],attrs:{role:"alert"}},[e.dismissible?[e._t("default",[e.icon?n("span",{staticClass:"alert-inner--icon"},[n("i",{class:e.icon})]):e._e(),e.$slots.text?n("span",{staticClass:"alert-inner--text"},[e._t("text")],2):e._e()]),e._t("dismiss-icon",[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.dismissAlert}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])]:e._t("default",[e.icon?n("span",{staticClass:"alert-inner--icon"},[n("i",{class:e.icon})]):e._e(),e.$slots.text?n("span",{staticClass:"alert-inner--text"},[e._t("text")],2):e._e()])],2):e._e()])},ae=[],pe={name:"base-alert",components:{FadeTransition:a["a"]},props:{type:{type:String,default:"default",description:"Alert type"},icon:{type:String,default:"",description:"Alert icon. Will be overwritten by default slot"},dismissible:{type:Boolean,default:!1,description:"Whether alert is closes when clicking"}},data:function(){return{visible:!0}},methods:{dismissAlert:function(){this.visible=!1}}},le=pe,ce=Object(c["a"])(le,re,ae,!1,null,null,null),de=ce.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"btn",class:e.classes,attrs:{type:"button"===e.tag?e.nativeType:""},on:{click:e.handleClick}},[e.$slots.icon||e.icon&&e.$slots.default?n("span",{staticClass:"btn-inner--icon"},[e._t("icon",[n("i",{class:e.icon})])],2):e._e(),e.$slots.default?e._e():n("i",{class:e.icon}),e.$slots.icon||e.icon&&e.$slots.default?n("span",{staticClass:"btn-inner--text"},[e._t("default",[e._v("\n        "+e._s(e.text)+"\n      ")])],2):e._e(),e.$slots.icon||e.icon?e._e():e._t("default")],2)},be=[],he={name:"base-button",props:{tag:{type:String,default:"button",description:"Button tag (default -> button)"},type:{type:String,default:"default",description:"Button type (e,g primary, danger etc)"},size:{type:String,default:"",description:"Button size lg|sm"},textColor:{type:String,default:"",description:"Button text color (e.g primary, danger etc)"},nativeType:{type:String,default:"button",description:"Button native type (e.g submit,button etc)"},icon:{type:String,default:"",description:"Button icon"},text:{type:String,default:"",description:"Button text in case not provided via default slot"},outline:{type:Boolean,default:!1,description:"Whether button style is outline"},rounded:{type:Boolean,default:!1,description:"Whether button style is rounded"},iconOnly:{type:Boolean,default:!1,description:"Whether button contains only an icon"},block:{type:Boolean,default:!1,description:"Whether button is of block type"}},computed:{classes:function(){var e=[{"btn-block":this.block},{"rounded-circle":this.rounded},{"btn-icon-only":this.iconOnly},Object(Q["a"])({},"text-".concat(this.textColor),this.textColor),{"btn-icon":this.icon||this.$slots.icon},this.type&&!this.outline?"btn-".concat(this.type):"",this.outline?"btn-outline-".concat(this.type):""];return this.size&&e.push("btn-".concat(this.size)),e}},methods:{handleClick:function(e){this.$emit("click",e)}}},fe=he,me=Object(c["a"])(fe,ue,be,!1,null,null,null),ge=me.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-control custom-checkbox",class:[{disabled:e.disabled},e.inlineClass]},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:e.cbId,type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:function(t){var n=e.model,s=t.target,i=!!s.checked;if(Array.isArray(n)){var o=null,r=e._i(n,o);s.checked?r<0&&(e.model=n.concat([o])):r>-1&&(e.model=n.slice(0,r).concat(n.slice(r+1)))}else e.model=i}}}),n("label",{staticClass:"custom-control-label",attrs:{for:e.cbId}},[e._t("default",[e.inline?n("span",[e._v(" ")]):e._e()])],2)])},ye=[],_e=(n("6b54"),{name:"base-checkbox",model:{prop:"checked"},props:{checked:{type:[Array,Boolean],description:"Whether checkbox is checked"},disabled:{type:Boolean,description:"Whether checkbox is disabled"},inline:{type:Boolean,description:"Whether checkbox is inline"}},data:function(){return{cbId:"",touched:!1}},computed:{model:{get:function(){return this.checked},set:function(e){this.touched||(this.touched=!0),this.$emit("input",e)}},inlineClass:function(){if(this.inline)return"form-check-inline"}},created:function(){this.cbId=Math.random().toString(16).slice(2)}}),Se=_e,Ce=Object(c["a"])(Se,ve,ye,!1,null,null,null),we=Ce.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group",class:[{"input-group":e.hasIcon},{"has-danger":e.error},{focused:e.focused},{"input-group-alternative":e.alternative},{"has-label":e.label||e.$slots.label},{"has-success":!0===e.valid},{"has-danger":!1===e.valid}]},[e._t("label",[e.label?n("label",{class:e.labelClasses},[e._v("\n            "+e._s(e.label)+"\n            "),e.required?n("span",[e._v("*")]):e._e()]):e._e()]),e.addonLeftIcon||e.$slots.addonLeft?n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[e._t("addonLeft",[n("i",{class:e.addonLeftIcon})])],2)]):e._e(),e._t("default",[n("input",e._g(e._b({staticClass:"form-control",class:[{"is-valid":!0===e.valid},{"is-invalid":!1===e.valid},e.inputClasses],attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:e.value}},"input",e.$attrs,!1),e.listeners))],null,e.slotData),e.addonRightIcon||e.$slots.addonRight?n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text"},[e._t("addonRight",[n("i",{class:e.addonRightIcon})])],2)]):e._e(),e._t("infoBlock"),e._t("helpBlock",[e.error?n("div",{staticClass:"text-danger invalid-feedback",class:{"mt-2":e.hasIcon},staticStyle:{display:"block"}},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e()])],2)},Ie=[],xe=(n("c5f6"),{inheritAttrs:!1,name:"base-input",props:{required:{type:Boolean,description:"Whether input is required (adds an asterix *)"},valid:{type:Boolean,description:"Whether is valid",default:void 0},alternative:{type:Boolean,description:"Whether input is of alternative layout"},label:{type:String,description:"Input label (text before input)"},error:{type:String,description:"Input error (below input)"},labelClasses:{type:String,description:"Input label css classes"},inputClasses:{type:String,description:"Input css classes"},value:{type:[String,Number],description:"Input value"},addonRightIcon:{type:String,description:"Addon right icon"},addonLeftIcon:{type:String,description:"Addont left icon"}},data:function(){return{focused:!1}},computed:{listeners:function(){return Object(s["a"])({},this.$listeners,{input:this.updateValue,focus:this.onFocus,blur:this.onBlur})},slotData:function(){return Object(s["a"])({focused:this.focused},this.listeners)},hasIcon:function(){var e=this.$slots,t=e.addonRight,n=e.addonLeft;return void 0!==t||void 0!==n||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}},methods:{updateValue:function(e){var t=e.target.value;this.$emit("input",t)},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.$emit("blur",e)}}}),Oe=xe,Pe=Object(c["a"])(Oe,ke,Ie,!1,null,null,null),je=Pe.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"pagination",class:[e.size&&"pagination-"+e.size,e.align&&"justify-content-"+e.align]},[n("li",{staticClass:"page-item prev-page",class:{disabled:1===e.value}},[n("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:e.prevPage}},[e._m(0)])]),e._l(e.range(e.minPage,e.maxPage),function(t){return n("li",{key:t,staticClass:"page-item",class:{active:e.value===t}},[n("a",{staticClass:"page-link",on:{click:function(n){return e.changePage(t)}}},[e._v(e._s(t))])])}),n("li",{staticClass:"page-item next-page",class:{disabled:e.value===e.totalPages}},[n("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:e.nextPage}},[e._m(1)])])],2)},$e=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{"aria-hidden":"true"}},[n("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{"aria-hidden":"true"}},[n("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])}],Ee={name:"base-pagination",props:{pageCount:{type:Number,default:0,description:"Pagination page count. This should be specified in combination with perPage"},perPage:{type:Number,default:10,description:"Pagination per page. Should be specified with total or pageCount"},total:{type:Number,default:0,description:"Can be specified instead of pageCount. The page count in this case will be total/perPage"},value:{type:Number,default:1,description:"Pagination value"},size:{type:String,default:"",description:"Pagination size"},align:{type:String,default:"",description:"Pagination alignment (e.g center|start|end)"}},computed:{totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var e=Math.floor(this.pagesToDisplay/2),t=e+this.value;return t>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-e}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var e=Math.floor(this.pagesToDisplay/2),t=e+this.value;return t<this.totalPages?t:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(e,t){for(var n=[],s=e;s<=t;s++)n.push(s);return n},changePage:function(e){this.$emit("input",e)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}},Be=Ee,Te=Object(c["a"])(Be,Ae,$e,!1,null,null,null),Me=Te.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress-wrapper"},[n("div",{class:"progress-"+e.type},[n("div",{staticClass:"progress-label"},[e._t("label",[n("span",[e._v(e._s(e.label))])])],2),n("div",{staticClass:"progress-percentage"},[e._t("default",[n("span",[e._v(e._s(e.value)+"%")])])],2)]),n("div",{staticClass:"progress",style:"height: "+e.height+"px"},[n("div",{staticClass:"progress-bar",class:e.computedClasses,style:e.computedStyles,attrs:{role:"progressbar","aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"}})])])},qe=[],He={name:"base-progress",props:{striped:{type:Boolean,description:"Whether progress is striped"},animated:{type:Boolean,description:"Whether progress is animated (works only with `striped` prop together)"},label:{type:String,description:"Progress label (shown on the left above progress)"},height:{type:Number,default:8,description:"Progress line height"},type:{type:String,description:"Progress type (e.g danger, primary etc)"},value:{type:[Number,String],default:0,validator:function(e){return e>=0&&e<=100},description:"Progress value"},color:{type:String,description:"Bar color"}},computed:{computedClasses:function(){return[{"progress-bar-striped":this.striped},{"progress-bar-animated":this.animated},Object(Q["a"])({},"bg-".concat(this.type),this.type)]},computedStyles:function(){return{width:"".concat(this.value,"%"),backgroundColor:this.color}}}},We=He,ze=Object(c["a"])(We,Ne,qe,!1,null,null,null),Fe=ze.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-control custom-radio",class:[e.inlineClass,{disabled:e.disabled}]},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:e.cbId,type:"radio",disabled:e.disabled},domProps:{value:e.name,checked:e._q(e.model,e.name)},on:{change:function(t){e.model=e.name}}}),n("label",{staticClass:"custom-control-label",attrs:{for:e.cbId}},[e._t("default")],2)])},De=[],Le={name:"base-radio",props:{name:{type:[String,Number],description:"Radio label"},disabled:{type:Boolean,description:"Whether radio is disabled"},value:{type:[String,Boolean],description:"Radio value"},inline:{type:Boolean,description:"Whether radio is inline"}},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},inlineClass:function(){return this.inline?"form-check-inline":""}},created:function(){this.cbId=Math.random().toString(16).slice(2)}},Ue=Le,Ve=Object(c["a"])(Ue,Re,De,!1,null,null,null),Ge=Ve.exports,Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-slider-container"},[n("div",{ref:"slider",staticClass:"input-slider",class:["slider-"+e.type],attrs:{disabled:e.disabled}})])},Je=[],Ye=n("a745"),Ke=n.n(Ye),Xe=n("e9fa"),Ze=n.n(Xe),et={name:"base-slider",props:{value:{type:[String,Array,Number],description:"Slider value"},disabled:{type:Boolean,description:"Whether slider is disabled"},range:{type:Object,default:function(){return{min:0,max:100}},description:"Slider range (defaults to 0-100)"},type:{type:String,default:"",description:"Slider type (e.g primary, danger etc)"},options:{type:Object,default:function(){return{}},description:"noUiSlider options"}},computed:{connect:function(){return Ke()(this.value)||[!0,!1]}},data:function(){return{slider:null}},methods:{createSlider:function(){var e=this;Ze.a.create(this.$refs.slider,Object(s["a"])({start:this.value,connect:this.connect,range:this.range},this.options));var t=this.$refs.slider.noUiSlider;t.on("slide",function(){var n=t.get();n!==e.value&&e.$emit("input",n)})}},mounted:function(){this.createSlider()},watch:{value:function(e,t){var n=this.$refs.slider.noUiSlider,s=n.get();e!==t&&s!==e&&(Ke()(s)&&Ke()(e)?t.length===e.length&&t.every(function(t,n){return t===e[n]})&&n.set(e):n.set(e))}}},tt=et,nt=Object(c["a"])(tt,Qe,Je,!1,null,null,null),st=nt.exports,it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"custom-toggle"},[n("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:function(t){var n=e.model,s=t.target,i=!!s.checked;if(Array.isArray(n)){var o=null,r=e._i(n,o);s.checked?r<0&&(e.model=n.concat([o])):r>-1&&(e.model=n.slice(0,r).concat(n.slice(r+1)))}else e.model=i}}},"input",e.$attrs,!1),e.$listeners)),n("span",{staticClass:"custom-toggle-slider rounded-circle"})])},ot=[],rt={name:"base-switch",inheritAttrs:!1,props:{value:{type:Boolean,default:!1,description:"Switch value"}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},at=rt,pt=Object(c["a"])(at,it,ot,!1,null,null,null),lt=pt.exports,ct=function(){var e,t,n,s=this,i=s.$createElement,o=s._self._c||i;return o("div",{staticClass:"card",class:[{"card-lift--hover":s.hover},{shadow:s.shadow},(e={},e["shadow-"+s.shadowSize]=s.shadowSize,e),(t={},t["bg-gradient-"+s.gradient]=s.gradient,t),(n={},n["bg-"+s.type]=s.type,n)]},[s.$slots.header?o("div",{staticClass:"card-header",class:s.headerClasses},[s._t("header")],2):s._e(),s.noBody?s._e():o("div",{staticClass:"card-body",class:s.bodyClasses},[s._t("default")],2),s.noBody?s._t("default"):s._e(),s.$slots.footer?o("div",{staticClass:"card-footer",class:s.footerClasses},[s._t("footer")],2):s._e()],2)},dt=[],ut={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},bt=ut,ht=Object(c["a"])(bt,ct,dt,!1,null,null,null),ft=ht.exports,mt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon icon-shape",class:[e.size&&"icon-"+e.size,e.type&&"icon-shape-"+e.type,e.gradient&&"bg-gradient-"+e.gradient,e.shadow&&"shadow",e.rounded&&"rounded-circle",e.color&&"text-"+e.color]},[e._t("default",[n("i",{class:e.name})])],2)},gt=[],vt={name:"icon",props:{name:{type:String,default:"",description:"Icon name"},size:{type:String,default:"",description:"Icon size"},type:{type:String,default:"",description:"Icon type (primary, warning etc)"},gradient:{type:String,default:"",description:"Icon gradient type (primary, warning etc)"},color:{type:String,default:"",description:"Icon color (primary, warning etc)"},shadow:{type:Boolean,default:!1,description:"Whether icon has shadow"},rounded:{type:Boolean,default:!1,description:"Whether icon is rounded"}}},yt=vt,_t=Object(c["a"])(yt,mt,gt,!1,null,null,null),St=_t.exports,Ct={install:function(e){e.component(oe.name,oe),e.component(de.name,de),e.component(ge.name,ge),e.component(je.name,je),e.component(we.name,we),e.component(Me.name,Me),e.component(Fe.name,Fe),e.component(Ge.name,Ge),e.component(st.name,st),e.component(lt.name,lt),e.component(ft.name,ft),e.component(St.name,St)}},wt={bind:function(e,t,n){e.clickOutsideEvent=function(s){e==s.target||e.contains(s.target)||n.context[t.expression](s)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},kt={install:function(e){e.directive("click-outside",wt)}},It=kt,xt=n("283e"),Ot=n.n(xt),Pt={install:function(e){e.use(Ct),e.use(It),e.use(Ot.a)}},jt={bind:function(e,t,n){e.style.background="url(".concat(t.value,") no-repeat center"),e.style.backgroundSize="cover"}},At={install:function(e){e.directive("bg-img",jt)}},$t=At,Et=n("93c5"),Bt={install:function(e){e.filter("searchQuestion",Et["a"])}},Tt=Bt,Mt=n("5a40"),Nt={data:function(){return{get Sitemap(){return h},get description(){return Mt}}}},qt=n("795b"),Ht=n.n(qt),Wt=n("d225"),zt=n("b0b4"),Ft=function e(t){var n=t.data;Object(Wt["a"])(this,e),this.success=null!=n,this.data=n},Rt=function(){function e(){Object(Wt["a"])(this,e)}return Object(zt["a"])(e,null,[{key:"getData",value:function(e){return new Ht.a(function(t){t(new Ft({data:n("9320")("./"+e+".json")}))})}}]),e}(),Dt={TestService:Rt};n("b6ea"),i["a"].config.productionTip=!1,i["a"].use(Pt),i["a"].use($t),i["a"].use(Tt),i["a"].mixin(Nt),new i["a"]({provide:Object(s["a"])({},Dt),router:G,store:Z,render:function(e){return e(u)}}).$mount("#app")},"5a40":function(e){e.exports={appName:"I-ON Communications Vue Test",disclaimer:"Do it with passion",description:"",testhome:{title:"I-ON Communication coding challenge",note:"You can start by selecting a test"},test1:{title:"A simple Q&A  HTML table content",note:"Select row, see v-html and scroll to top"},test2:{title:"Cards and Images",note:"Rows and Columns, image using vue directive to cover center"},test3:{title:"Simple Progress bars",note:"Data from afar, random to animate"},test4:{title:"Q&A with search feature",note:"Case insensitive, highlight result"}}},"64aa":function(e,t,n){"use strict";var s=n("88c4"),i=n.n(s);t["default"]=i.a},"6d25":function(e){e.exports={rows:[{order:1,type:"product",question:"How do I write a product review?"},{order:2,type:"mobile",question:"How do I use the mobile remote control service?"},{order:3,type:"product",question:"How do I write a product review?"},{order:4,type:"mobile",question:"How do I use the mobile remote control service?"},{order:5,type:"product",question:"How do I write a product review?"},{order:6,type:"mobile",question:"How do I use the mobile remote control service?"},{order:7,type:"product",question:"How do I write a product review?"},{order:8,type:"mobile",question:"How do I use the mobile remote control service?"}],columns:[{label:"NO",field:"order"},{label:"TYPE",field:"type"},{label:"Q&A",field:"question"}]}},"766e":function(e){e.exports={rows:[{title:{order:1,type:"product",question:"How do I write a product review?"},content:'<p>There are two ways to apply for a rebate payment. </p><p>&nbsp;</p><p>1) In the product details screen <strong>of the products under the event&nbsp;<br>&nbsp; ①[reserve fund </strong><strong>Banner]Click → ② Click on [Apply reserve fund] button</strong>&nbsp;</p><p>&nbsp;<br>{e.g.) Mobile product details&nbsp; :<br>&nbsp; </p><p><img width=100% src="https://cdn.clien.net/web/api/file/F01/5086123/5b9cae5bdaa24aef96b.PNG?w=780&h=30000"></p><p>&nbsp;</p><p>&nbsp;</p><p>2) [PC] <strong>Events/Coupons &gt; reserve fund </strong></p><p>&nbsp;&nbsp;&nbsp; [Mobile] <strong>Event &gt; reserve fund &gt; in progress&nbsp;</strong>screen <strong>button after selecting the corresponding event'},{title:{order:2,type:"mobile",question:"How do I use the mobile remote control service?"},content:"<p>&nbsp;</p><p>&nbsp;It depends on the smartphone model and OS. </p><p>&nbsp;</p><p>&nbsp;&nbsp; [Android]</p><p>&nbsp;&nbsp;&nbsp; ① Samsung Smart Phone : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support (Samsung) - Remote Call]&nbsp; App Installation&nbsp;&nbsp; </p><p><br>&nbsp;&nbsp;&nbsp; ② Other smartphones : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support - Remote Call]&nbsp; App Installation </p><p><br>&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp; [iOS] </p><p>&nbsp;&nbsp;&nbsp; ① Search for Mobile Support in the App Store&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶[Mobile Support - Remote Call]&nbsp; App Installation </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ※ Airplay mirroring function needs to be turned on.</p>"},{title:{order:3,type:"product",question:"How do I write a product review?"},content:'<p>There are two ways to apply for a rebate payment. </p><p>&nbsp;</p><p>1) In the product details screen <strong>of the products under the event&nbsp;<br>&nbsp; ①[reserve fund </strong><strong>Banner]Click → ② Click on [Apply reserve fund] button</strong>&nbsp;</p><p>&nbsp;<br>{e.g.) Mobile product details&nbsp; :<br>&nbsp; </p><p><img width=100% src="https://cdn.clien.net/web/api/file/F01/5086123/5b9cae5bdaa24aef96b.PNG?w=780&h=30000"></p><p>&nbsp;</p><p>&nbsp;</p><p>2) [PC] <strong>Events/Coupons &gt; reserve fund </strong></p><p>&nbsp;&nbsp;&nbsp; [Mobile] <strong>Event &gt; reserve fund &gt; in progress&nbsp;</strong>screen <strong>button after selecting the corresponding event'},{title:{order:4,type:"mobile",question:"How do I use the mobile remote control service?"},content:"<p>&nbsp;</p><p>&nbsp;It depends on the smartphone model and OS. </p><p>&nbsp;</p><p>&nbsp;&nbsp; [Android]</p><p>&nbsp;&nbsp;&nbsp; ① Samsung Smart Phone : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support (Samsung) - Remote Call]&nbsp; App Installation&nbsp;&nbsp; </p><p><br>&nbsp;&nbsp;&nbsp; ② Other smartphones : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support - Remote Call]&nbsp; App Installation </p><p><br>&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp; [iOS] </p><p>&nbsp;&nbsp;&nbsp; ① Search for Mobile Support in the App Store&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶[Mobile Support - Remote Call]&nbsp; App Installation </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ※ Airplay mirroring function needs to be turned on.</p>"},{title:{order:5,type:"product",question:"How do I write a product review?"},content:'<p>There are two ways to apply for a rebate payment. </p><p>&nbsp;</p><p>1) In the product details screen <strong>of the products under the event&nbsp;<br>&nbsp; ①[reserve fund </strong><strong>Banner]Click → ② Click on [Apply reserve fund] button</strong>&nbsp;</p><p>&nbsp;<br>{e.g.) Mobile product details&nbsp; :<br>&nbsp; </p><p><img width=100% src="https://cdn.clien.net/web/api/file/F01/5086123/5b9cae5bdaa24aef96b.PNG?w=780&h=30000"></p><p>&nbsp;</p><p>&nbsp;</p><p>2) [PC] <strong>Events/Coupons &gt; reserve fund </strong></p><p>&nbsp;&nbsp;&nbsp; [Mobile] <strong>Event &gt; reserve fund &gt; in progress&nbsp;</strong>screen <strong>button after selecting the corresponding event'},{title:{order:6,type:"mobile",question:"How do I use the mobile remote control service?"},content:"<p>&nbsp;</p><p>&nbsp;It depends on the smartphone model and OS. </p><p>&nbsp;</p><p>&nbsp;&nbsp; [Android]</p><p>&nbsp;&nbsp;&nbsp; ① Samsung Smart Phone : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support (Samsung) - Remote Call]&nbsp; App Installation&nbsp;&nbsp; </p><p><br>&nbsp;&nbsp;&nbsp; ② Other smartphones : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support - Remote Call]&nbsp; App Installation </p><p><br>&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp; [iOS] </p><p>&nbsp;&nbsp;&nbsp; ① Search for Mobile Support in the App Store&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶[Mobile Support - Remote Call]&nbsp; App Installation </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ※ Airplay mirroring function needs to be turned on.</p>"},{title:{order:7,type:"product",question:"How do I write a product review?"},content:'<p>There are two ways to apply for a rebate payment. </p><p>&nbsp;</p><p>1) In the product details screen <strong>of the products under the event&nbsp;<br>&nbsp; ①[reserve fund </strong><strong>Banner]Click → ② Click on [Apply reserve fund] button</strong>&nbsp;</p><p>&nbsp;<br>{e.g.) Mobile product details&nbsp; :<br>&nbsp; </p><p><img width=100% src="https://cdn.clien.net/web/api/file/F01/5086123/5b9cae5bdaa24aef96b.PNG?w=780&h=30000"></p><p>&nbsp;</p><p>&nbsp;</p><p>2) [PC] <strong>Events/Coupons &gt; reserve fund </strong></p><p>&nbsp;&nbsp;&nbsp; [Mobile] <strong>Event &gt; reserve fund &gt; in progress&nbsp;</strong>screen <strong>button after selecting the corresponding event'},{title:{order:8,type:"mobile",question:"How do I use the mobile remote control service?"},content:"<p>&nbsp;</p><p>&nbsp;It depends on the smartphone model and OS. </p><p>&nbsp;</p><p>&nbsp;&nbsp; [Android]</p><p>&nbsp;&nbsp;&nbsp; ① Samsung Smart Phone : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support (Samsung) - Remote Call]&nbsp; App Installation&nbsp;&nbsp; </p><p><br>&nbsp;&nbsp;&nbsp; ② Other smartphones : Search for [Mobile Support] in the Play Store</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶ [Mobile Support - Remote Call]&nbsp; App Installation </p><p><br>&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp; [iOS] </p><p>&nbsp;&nbsp;&nbsp; ① Search for Mobile Support in the App Store&nbsp;&nbsp; </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶[Mobile Support - Remote Call]&nbsp; App Installation </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ※ Airplay mirroring function needs to be turned on.</p>"}],columns:[{label:"NO",field:"order"},{label:"TYPE",field:"type"},{label:"Q&A",field:"question"}]}},"88c4":function(e,t){},9320:function(e,t,n){var s={"./description.json":"5a40","./test1.json":"766e","./test2.json":"a48d","./test3.json":"22bd","./test4.json":"6d25"};function i(e){var t=o(e);return n(t)}function o(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id="9320"},"93c5":function(e,t,n){"use strict";n("a481"),n("ac6a");t["a"]=function(e){var t=e.question;return e.searchTerms&&e.searchTerms.length&&e.searchTerms.forEach(function(e){t=t.replace(e,"<b>".concat(e,"</b>"))}),t}},a48d:function(e){e.exports=[{id:1,category:"Universe",title:" 1 - Is the Earth Healthy?",description:"Increasing the amount of trash in the universe",image:"http://img.seoul.co.kr/img/upload/2018/09/12/SSI_20180912174000_V.jpg",author:"By I-ON Communications"},{id:2,category:"Universe",title:" 2 - Is the Earth Healthy?",description:"Increasing the amount of trash in the universe",image:"http://img.seoul.co.kr/img/upload/2018/09/12/SSI_20180912174000_V.jpg",author:"By I-ON Communications"},{id:3,category:"Universe",title:" 3 - Is the Earth Healthy?",description:"Increasing the amount of trash in the universe",image:"http://img.seoul.co.kr/img/upload/2018/09/12/SSI_20180912174000_V.jpg",author:"By I-ON Communications"},{id:4,category:"Universe",title:" 4 - Is the Earth Healthy?",description:"Increasing the amount of trash in the universe",image:"http://img.seoul.co.kr/img/upload/2018/09/12/SSI_20180912174000_V.jpg",author:"By I-ON Communications"},{id:5,category:"Universe",title:" 5 - Is the Earth Healthy?",description:"Increasing the amount of trash in the universe",image:"http://img.seoul.co.kr/img/upload/2018/09/12/SSI_20180912174000_V.jpg",author:"By I-ON Communications"}]},afcd:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card shadow"},[n("div",{staticClass:"card-header border-0"},[n("h3",{staticClass:"mb-0"},[e._v(e._s(e.title))]),n("p",[n("small",[e._v(e._s(e.note))])])]),n("div",{staticClass:"card"},[e._t("default")],2)])},i=[],o=(n("cadf"),n("551c"),n("f751"),n("097d"),{props:{number:String},computed:{title:function(){return(this.description["test".concat(this.number)]||{}).title},note:function(){return(this.description["test".concat(this.number)]||{}).note}}}),r=o,a=n("2877"),p=Object(a["a"])(r,s,i,!1,null,null,null);t["a"]=p.exports},b6ea:function(e,t,n){"use strict";n.r(t);n("a481");String.prototype.format||(String.prototype.format=function(){var e=arguments;return this.replace(/{(\d+)}/g,function(t,n){return"undefined"!==typeof e[n]?e[n]:t})})}});
//# sourceMappingURL=app.32454a01.js.map