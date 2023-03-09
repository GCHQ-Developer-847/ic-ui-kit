"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[1047],{"../web-components/dist/esm/ic-page-header.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_page_header:()=>PageHeader});__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../web-components/dist/esm/index-90721b3c.js"),_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../web-components/dist/esm/helpers-4f410dc1.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var PageHeader=function(){function PageHeader(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PageHeader),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.r)(this,hostRef),this.resizeObserver=null,this.resizeObserverCallback=function(){_this.reverseOrder&&(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(_this.el,"actions")&&_this.applyReverseOrder()},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.resizeObserverCallback()})),_this.resizeObserver.observe(_this.el)},this.applyReverseOrder=function(){var currSize=(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.g)();currSize!==_this.deviceSize&&(_this.deviceSize=currSize);for(var actionArea=_this.el.shadowRoot.querySelector("div.action-area"),actionHeights=[],i=0;i<_this.actionContent.length;i++){var actionHeight=_this.actionContent[i].offsetHeight;void 0===actionHeight&&(actionHeight=0),actionHeights.push(actionHeight)}var max=Math.max.apply(Math,actionHeights),actionAreaHeight=actionArea.offsetHeight;void 0===actionAreaHeight&&(actionAreaHeight=0),(_this.deviceSize>_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.D.S&&actionAreaHeight<=max&&!_this.areButtonsReversed||(_this.deviceSize>_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.D.S&&actionAreaHeight>max||_this.deviceSize<=_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.D.S)&&_this.areButtonsReversed)&&(_this.actionContent=_this.actionContent.reverse(),_this.actionContent.forEach((function(btn){_this.el.append(btn)})),_this.areButtonsReversed=!_this.areButtonsReversed)},this.heading=void 0,this.subheading=void 0,this.aligned="left",this.small=!1,this.border=!0,this.sticky=!1,this.stickyDesktopOnly=!1,this.reverseOrder=!1,this.deviceSize=_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.D.XL,this.areButtonsReversed=!1,this.actionContent=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PageHeader,[{key:"componentWillLoad",value:function componentWillLoad(){this.actionContent=Array.from(this.el.querySelectorAll('[slot="actions"]'))}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.c)(this.runResizeObserver)}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"render",value:function render(){var _class,_class2,_class3,small=this.small,border=this.border,heading=this.heading,subheading=this.subheading,aligned=this.aligned,sticky=this.sticky,stickyDesktopOnly=this.stickyDesktopOnly;return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.H,{class:(_class={},_class.sticky=sticky,_class["sticky-desktop"]=!sticky&&stickyDesktopOnly,_class)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("header",{class:(_class2={},_class2["border-bottom"]=border,_class2.tabs=(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"tabs"),_class2)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-section-container",{aligned,fullHeight:(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"tabs")},(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"breadcrumbs")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"breadcrumb-area"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"breadcrumbs"})),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"main-content"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"title-area"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"header-content"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"heading"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-typography",{variant:small?"h4":"h2",class:"heading"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("h2",null,heading))),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"heading-adornment"})),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",null,(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"subheading"},subheading&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-typography",{variant:"body",class:(_class3={},_class3.subheading=!0,_class3.small=small,_class3)},subheading)))),(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"actions")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"action-area"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"actions"})),(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"input")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"input-area"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"input"}))),((0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"stepper")||(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"tabs"))&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"navigation-area"},(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"stepper")&&!(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"tabs")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"stepper"}),(0,_helpers_4f410dc1_js__WEBPACK_IMPORTED_MODULE_14__.i)(this.el,"tabs")&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("nav",{"aria-label":"navigation-landmark-page-header"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("ic-horizontal-scroll",null,(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("ul",{class:"tabs-slot"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{name:"tabs"}))))))))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_13__.g)(this)}}]),PageHeader}();PageHeader.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.sticky){position:sticky;top:0;box-shadow:var(--ic-elevation-overlay)}header{background-color:var(--ic-architectural-40)}header.border-bottom{border-bottom:0.063rem solid var(--ic-architectural-300)}header.tabs{padding-top:var(--ic-space-md)}.breadcrumb-area{margin-bottom:var(--ic-space-md)}.main-content{display:grid;grid-template-columns:auto 1fr;grid-template-areas:"title-area action-area"\n    "input-area action-area";-moz-column-gap:var(--ic-space-md);column-gap:var(--ic-space-md);justify-content:space-between;width:100%}.title-area{display:flex;flex-direction:column;flex:1;min-width:19rem;grid-area:title-area}.header-content{display:flex;align-items:center;width:100%;flex-wrap:wrap;row-gap:var(--ic-space-xs);-moz-column-gap:var(--ic-space-md);column-gap:var(--ic-space-md)}.heading{display:inline-block;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}.subheading.small{margin-top:var(--ic-space-xs)}.action-area{display:flex;gap:var(--ic-space-md);flex-flow:row wrap;justify-self:end;justify-content:flex-end;height:-moz-fit-content;height:fit-content;grid-area:action-area}.input-area,.navigation-area{margin-top:var(--ic-space-md);width:100%}.tabs-slot{display:flex;overflow-x:auto;padding:0.5rem;margin:-0.5rem}.tabs-slot::-webkit-scrollbar{display:none}.input-area{grid-area:input-area}@media screen and (max-width: 576px){::slotted(ic-text-field){--input-width:100%;max-width:20rem}.main-content{grid-template-areas:"title-area"\n      "action-area"\n      "input-area";justify-content:flex-start}.title-area{min-width:0}.action-area{min-width:100%;margin-top:var(--ic-space-md);justify-content:start}}@media screen and (min-width: 992px){:host(.sticky-desktop){position:sticky;top:0;box-shadow:var(--ic-elevation-overlay)}}'}}]);