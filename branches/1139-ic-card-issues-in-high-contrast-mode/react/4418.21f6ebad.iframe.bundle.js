/*! For license information please see 4418.21f6ebad.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4418],{"../web-components/dist/esm/ic-popover-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_popover_menu:()=>PopoverMenu});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.some.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../web-components/dist/esm/index-b006ae9d.js"),_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("../web-components/dist/esm/helpers-b0e80358.js"),_popper_0fbeff6d_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../web-components/dist/esm/popper-0fbeff6d.js");__webpack_require__("../web-components/dist/esm/types-b2398b37.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var PopoverMenu=function(){function PopoverMenu(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PopoverMenu),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.r)(this,hostRef),this.ARIA_LABEL="aria-label",this.firstRender=!0,this.popoverMenuEls=[],this.setButtonFocus=function(){var _a;null===(_a=_this.popoverMenuEls[_this.currentFocus])||void 0===_a||_a.focus()},this.findAnchorEl=function(anchor){var anchorElement=null;return null==anchor?void 0===_this.submenuId&&console.error("No anchor specified for popover component"):null===(anchorElement=document.querySelector(0===anchor.indexOf("#")?anchor:"#"+anchor))&&console.error("Popover anchor element '"+anchor+"' not found"),anchorElement},this.isNotPopoverMenuEl=function(ev){var target=ev.target;return target.id!==_this.anchor&&"IC-MENU-ITEM"!==target.tagName&&"IC-MENU-GROUP"!==target.tagName&&"IC-POPOVER-MENU"!==target.tagName},this.closeMenu=function(){var _a;_this.open=!1,null===(_a=_this.anchorEl)||void 0===_a||_a.focus()},this.getNextItemToSelect=function(currentItem,movingDown){var numButtons=_this.popoverMenuEls.length-1;currentItem<1&&(currentItem=0);var nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numButtons:nextItem>numButtons&&(nextItem=0),nextItem},this.addMenuItems=function(elements){for(var i=0;i<elements.length;i++){var el=elements[i];if("IC-MENU-ITEM"===el.tagName)_this.popoverMenuEls.push(el);else if("IC-MENU-GROUP"===el.tagName){var groupSlotWrapper=el.shadowRoot.querySelector("ul"),menuGroupElements=(0,_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_29__.u)(groupSlotWrapper);_this.addMenuItems(menuGroupElements)}}},this.getMenuAriaLabel=function(){var ariaLabel=_this.host.getAttribute(_this.ARIA_LABEL);return void 0!==_this.submenuId?ariaLabel+", within nested level "+_this.submenuLevel+" "+_this.parentLabel+" submenu,":ariaLabel},this.handleBackButtonClick=function(){_this.parentPopover.openFromChild(),_this.open=!1},this.openingFromChild=!1,this.openingFromParent=!1,this.anchor=void 0,this.parentLabel=void 0,this.parentPopover=void 0,this.submenuId=void 0,this.submenuLevel=1,this.open=void 0}var _openFromParent,_openFromChild;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PopoverMenu,[{key:"watchOpenHandler",value:function watchOpenHandler(){this.open&&(void 0===this.parentPopover||this.popoverMenuEls.some((function(menuItem){return menuItem.id}))||this.popoverMenuEls.unshift(this.backButton),this.currentFocus=void 0!==this.submenuId?1:0,setTimeout(this.setButtonFocus,50))}},{key:"disconnectedCallback",value:function disconnectedCallback(){void 0!==this.popperInstance&&this.popperInstance.destroy()}},{key:"componentDidLoad",value:function componentDidLoad(){var slotWrapper=this.host.shadowRoot.querySelector("ul.button"),popoverMenuElements=(0,_helpers_b0e80358_js__WEBPACK_IMPORTED_MODULE_29__.u)(slotWrapper);null!==popoverMenuElements&&this.addMenuItems(popoverMenuElements),void 0===this.submenuId&&null===this.host.getAttribute(this.ARIA_LABEL)&&console.error("No aria-label specified for popover menu component - aria-label required")}},{key:"componentWillRender",value:function componentWillRender(){this.anchorEl=this.findAnchorEl(this.anchor)}},{key:"componentDidRender",value:function componentDidRender(){if(this.firstRender&&this.open){this.firstRender=!1;var adjust=!1,dialogEl=this.host.closest("ic-dialog");if(null!==dialogEl){this.host.classList.add("on-dialog");var offset,menu=this.host.getBoundingClientRect(),dialogBottom=dialogEl.getBoundingClientRect().bottom,anchorHeight=this.anchorEl.getBoundingClientRect().height;"false"===dialogEl.getAttribute("data-overflow")?dialogBottom-menu.top<menu.height&&(adjust=!0,offset=menu.height+anchorHeight+8):(adjust=!0,offset=menu.height+anchorHeight+8+100),!1===adjust?this.host.classList.add("on-dialog-fix-translate"):(this.host.style.setProperty("--translate-y",offset+"px","important"),this.host.classList.add("on-dialog-translate-y"))}this.popperInstance=adjust?(0,_popper_0fbeff6d_js__WEBPACK_IMPORTED_MODULE_30__.c)(this.anchorEl,this.host,{placement:"top"}):(0,_popper_0fbeff6d_js__WEBPACK_IMPORTED_MODULE_30__.c)(this.anchorEl,this.host,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"flip",options:{fallbackPlacements:["top-start","top-end","bottom-end"],rootBoundary:"viewport"}}]})}else this.open&&this.popperInstance.update()}},{key:"handleMenuItemClick",value:function handleMenuItemClick(ev){ev.detail.hasSubMenu||"Back"===ev.detail.label||this.closeMenu()}},{key:"handleSubmenuChange",value:function handleSubmenuChange(ev){var target=ev.target;this.open=!1;var childEl=document.querySelector("ic-popover-menu[submenu-id="+target.submenuTriggerFor+"]");childEl.parentPopover=this.host,childEl.anchor=this.anchor,childEl.ariaLabel=this.host.getAttribute(this.ARIA_LABEL),childEl.openFromParent(),childEl.submenuLevel=this.submenuLevel+1,childEl.parentLabel=target.label}},{key:"handleClick",value:function handleClick(ev){this.open&&this.isNotPopoverMenuEl(ev)&&this.closeMenu()}},{key:"handleKeyDown",value:function handleKeyDown(ev){switch(ev.key){case"ArrowDown":ev.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,!0),this.setButtonFocus();break;case"ArrowUp":ev.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,!1),this.setButtonFocus();break;case"Home":this.currentFocus=0,this.setButtonFocus();break;case"End":this.currentFocus=this.popoverMenuEls.length-1,this.setButtonFocus();break;case"Escape":case"Tab":this.open&&(this.closeMenu(),this.host.blur())}}},{key:"openFromChild",value:(_openFromChild=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var _this2=this;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.open=!0,this.openingFromChild=!0,setTimeout((function(){return _this2.openingFromChild=!1}),1e3);case 3:case"end":return _context.stop()}}),_callee,this)}))),function openFromChild(){return _openFromChild.apply(this,arguments)})},{key:"openFromParent",value:(_openFromParent=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){var _this3=this;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.open=!0,this.openingFromParent=!0,setTimeout((function(){return _this3.openingFromParent=!1}),1e3);case 3:case"end":return _context2.stop()}}),_callee2,this)}))),function openFromParent(){return _openFromParent.apply(this,arguments)})},{key:"render",value:function render(){var _this4=this;return(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)(_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.H,{class:{open:this.open}},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{id:void 0===this.parentPopover?"ic-popover-submenu-"+this.submenuId:"",class:{menu:!0},tabindex:open?"0":"-1"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{class:{"opening-from-parent":this.openingFromParent,"opening-from-child":this.openingFromChild}},void 0!==this.submenuId&&(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",null,(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("ic-menu-item",{class:"ic-popover-submenu-back-button",ref:function ref(el){return _this4.backButton=el},label:"Back",onClick:this.handleBackButtonClick,id:"ic-popover-submenu-back-button-"+this.submenuLevel},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("svg",{slot:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"submenu-back-icon"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"currentColor"}))),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("ic-typography",{variant:"subtitle-small",class:"parent-label"},this.parentLabel)),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("ul",{class:"button","aria-label":this.getMenuAriaLabel(),role:"menu","aria-owns":void 0!==this.submenuId&&"ic-popover-submenu-back-button-"+this.submenuLevel,"aria-controls":void 0!==this.submenuId&&"ic-popover-submenu-back-button-"+this.submenuLevel},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.h)("slot",null)))))}},{key:"host",get:function get(){return(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_28__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{open:["watchOpenHandler"]}}}]),PopoverMenu}();PopoverMenu.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host .opening-from-parent{animation:slide-in var(--ic-transition-duration-slow) ease-in-out}:host .opening-from-child{animation:slide-out var(--ic-transition-duration-slow) ease-in-out}}:host{border-radius:var(--ic-border-radius);color:var(--ic-color-primary-text);background-color:var(--ic-architectural-white);position:relative;z-index:var(--ic-z-index-popover);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);display:none}:host(.on-dialog){inset:auto !important}:host(.on-dialog-fix-translate){transform:translate(0, var(--ic-space-xs)) !important}:host(.on-dialog-translate-y){transform:translate(0, calc(-1 * var(--translate-y))) !important}.menu{border:var(--ic-border-default);border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);visibility:hidden;height:0}.button{text-decoration:none;list-style-type:none}:host(:focus-within){box-shadow:var(--ic-border-focus)}.menu:focus-visible{outline:none}:host(.open){display:block;min-width:calc(20rem - var(--ic-space-xl));width:var(--popover-width, 20rem);max-width:calc(100vw - var(--ic-space-xl))}:host(.open) .menu{visibility:visible;height:-moz-fit-content;height:fit-content;max-height:var(--max-height, -moz-fit-content);max-height:var(--max-height, fit-content);overflow-y:auto;overflow-x:hidden}.parent-label{color:var(--ic-color-tertiary-text);margin:var(--ic-space-xs) var(--ic-space-xs) 0}@keyframes slide-in{from{opacity:0;transform:translateX(10rem)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out{from{opacity:0;transform:translateX(-10rem)}to{opacity:1;transform:translateX(0)}}'},"./node_modules/core-js/modules/es.string.anchor.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("anchor")},{anchor:function anchor(name){return createHTML(this,"a","name",name)}})}}]);