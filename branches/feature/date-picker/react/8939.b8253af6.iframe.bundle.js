/*! For license information please see 8939.b8253af6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8939],{"../web-components/dist/esm/ic-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination:()=>Pagination});__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../web-components/dist/esm/index-14c9f375.js"),_helpers_897cb869_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../web-components/dist/esm/helpers-897cb869.js");__webpack_require__("../web-components/dist/esm/types-5c4edec9.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var paginationNextPrevious='<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.08748 0L0.912476 1.175L4.72914 5L0.912476 8.825L2.08748 10L7.08748 5L2.08748 0Z" fill="currentColor"/>\n</svg>\n',paginationFirstLast='<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.1709 8.825L7.34589 5L11.1709 1.175L9.99589 0L4.99589 5L9.99589 10L11.1709 8.825ZM0.829224 0H2.49589V10H0.829224V0Z" fill="currentColour"/>\n</svg>',Pagination=function(){function Pagination(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Pagination),(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.r)(this,hostRef),this.icPageChange=(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.c)(this,"icPageChange",7),this.handleClickFirst=function(){_this.currentPage=1,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickPrevious=function(){_this.currentPage--,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickNext=function(){_this.currentPage++,_this.icPageChange.emit({value:_this.currentPage})},this.handleClickLast=function(){_this.currentPage=_this.pages,_this.icPageChange.emit({value:_this.currentPage})},this.firstButton=function(){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-button",{id:"first-page-button","aria-label":"Go to first page",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickFirst,class:"page-button first-last",disabled:1===_this.currentPage||_this.disabled,variant:"icon",innerHTML:paginationFirstLast})},this.previousButton=function(){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-button",{id:"previous-page-button","aria-label":"Go to previous page",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickPrevious,class:"page-button next-previous flip",disabled:1===_this.currentPage||_this.disabled,variant:"icon",innerHTML:paginationNextPrevious})},this.nextButton=function(){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-button",{id:"next-page-button","aria-label":"Go to next page",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickNext,class:"page-button next-previous",disabled:_this.currentPage===_this.pages||_this.disabled,variant:"icon",innerHTML:paginationNextPrevious})},this.lastButton=function(){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-button",{id:"last-page-button","aria-label":"Go to last page",disableTooltip:!0,appearance:_this.appearance,onClick:_this.handleClickLast,class:"page-button first-last flip",disabled:_this.currentPage===_this.pages||_this.disabled,variant:"icon",innerHTML:paginationFirstLast})},this.renderStartEllipsis=function(){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-pagination-item",{appearance:_this.appearance,type:"ellipsis",id:"start-ellipsis",disabled:_this.disabled})},this.renderEndEllipsis=function(){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-pagination-item",{appearance:_this.appearance,type:"ellipsis",id:"end-ellipsis",disabled:_this.disabled})},this.renderStartItems=function(){return _this.startItems.map((function(page){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-"+page,type:"page",page,disabled:_this.disabled})}))},this.renderEndItems=function(){return _this.endItems.map((function(page){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-"+page,type:"page",page,disabled:_this.disabled})}))},this.renderMiddleItems=function(){return _this.midItems.map((function(page){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-pagination-item",{appearance:_this.appearance,selected:page===_this.currentPage,id:"pagination-item-"+page,type:"page",page,disabled:_this.disabled})}))},this.endEllipsis=!1,this.endItems=[],this.midItems=[],this.startEllipsis=!1,this.startItems=[],this.adjacentCount=1,this.appearance="default",this.boundaryCount=1,this.defaultPage=1,this.disabled=!1,this.hideCurrentPage=!1,this.hideFirstAndLastPageButton=!1,this.label="Page",this.pages=void 0,this.type="simple",this.currentPage=this.defaultPage}var _setCurrentPage;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Pagination,[{key:"watchNumberPagesHandler",value:function watchNumberPagesHandler(){this.watchPageChangeHandler()}},{key:"watchPageChangeHandler",value:function watchPageChangeHandler(){if("simple"!==this.type){this.startEllipsis=!1,this.endEllipsis=!1,this.startItems=[],this.endItems=[],this.midItems=[];var startItemCount,midStart,midEnd,startItems=[],endItems=[],endStart=this.pages,midItems=[],startEllipsis=!1,endEllipsis=!1;if(this.pages<=2*this.boundaryCount+2*this.adjacentCount+3){this.startEllipsis=!1,this.endEllipsis=!1;for(var i=1;i<=this.pages;i++)startItems.push(i);this.startItems=startItems}else{if(startItemCount=0===this.boundaryCount?1:this.boundaryCount,endStart=0===this.boundaryCount?this.pages:this.pages-this.boundaryCount+1,this.currentPage<=this.adjacentCount+this.boundaryCount+2){startEllipsis=!1,endEllipsis=!0;var numItems=2*this.adjacentCount+1;0===this.boundaryCount&&numItems--,midEnd=(midStart=startItemCount+1)+numItems}else if(startEllipsis=!0,this.currentPage>this.pages-(this.adjacentCount+this.boundaryCount+2)){var _numItems=2*this.adjacentCount+1;0===this.boundaryCount&&_numItems--,midStart=(midEnd=0===this.boundaryCount?this.pages-1:this.pages-this.boundaryCount)-_numItems}else endEllipsis=!0,midStart=this.currentPage-this.adjacentCount,midEnd=this.currentPage+this.adjacentCount;if(this.boundaryCount>0||0===this.boundaryCount&&!1===startEllipsis)for(var _i2=1;_i2<=startItemCount;_i2++)startItems.push(_i2);if(this.boundaryCount>0||0===this.boundaryCount&&!1===endEllipsis)for(var _i4=endStart;_i4<=this.pages;_i4++)endItems.push(_i4);for(var _i6=midStart;_i6<=midEnd;_i6++)midItems.push(_i6);this.startEllipsis=startEllipsis,this.endEllipsis=endEllipsis,this.startItems=startItems,this.endItems=endItems,this.midItems=midItems}}}},{key:"componentWillLoad",value:function componentWillLoad(){this.watchPageChangeHandler(),this.boundaryCount>2&&(this.boundaryCount=2),this.adjacentCount>2&&(this.adjacentCount=2),(0,_helpers_897cb869_js__WEBPACK_IMPORTED_MODULE_26__.r)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_897cb869_js__WEBPACK_IMPORTED_MODULE_26__.a)([{prop:this.pages,propName:"pages"}],"Pagination")}},{key:"paginationItemClickHandler",value:function paginationItemClickHandler(ev){var page=ev.detail.page;this.currentPage=page,this.icPageChange.emit({value:this.currentPage})}},{key:"setCurrentPage",value:(_setCurrentPage=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(page){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:"number"==typeof page&&page>0&&page<=this.pages?this.currentPage=page:console.error("Current page must be a number greater than zero but less than or equal to the total number of pages");case 1:case"end":return _context.stop()}}),_callee,this)}))),function setCurrentPage(_x){return _setCurrentPage.apply(this,arguments)})},{key:"render",value:function render(){var _class,_class2,_class3,type=this.type,pages=this.pages,currentPage=this.currentPage,hideCurrentPage=this.hideCurrentPage,disabled=this.disabled,hideFirstAndLastPageButton=this.hideFirstAndLastPageButton,label=this.label;return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)(_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.H,null,"simple"===type&&(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("nav",{class:(_class={},_class.disabled=disabled,_class),role:"navigation","aria-label":"Pagination Navigation"},hideFirstAndLastPageButton?null:this.firstButton(),this.previousButton(),(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-pagination-item",{pages,appearance:this.appearance,type:"simple-current",page:currentPage,label,class:(_class2={},_class2["hide-current-page"]=hideCurrentPage,_class2)}),this.nextButton(),hideFirstAndLastPageButton?null:this.lastButton()),"complex"===type&&(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.h)("nav",{class:(_class3={},_class3.disabled=disabled,_class3),role:"navigation","aria-label":"Pagination Navigation"},hideFirstAndLastPageButton?null:this.firstButton(),this.previousButton(),this.renderStartItems(),this.startEllipsis&&this.renderStartEllipsis(),this.renderMiddleItems(),this.endEllipsis&&this.renderEndEllipsis(),this.renderEndItems(),this.nextButton(),hideFirstAndLastPageButton?null:this.lastButton()))}},{key:"el",get:function get(){return(0,_index_14c9f375_js__WEBPACK_IMPORTED_MODULE_25__.g)(this)}}],[{key:"watchers",get:function get(){return{pages:["watchNumberPagesHandler"],currentPage:["watchPageChangeHandler"]}}}]),Pagination}();Pagination.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{box-sizing:border-box;width:100%;display:flex;justify-content:center}nav{width:100%;display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center}ic-button{cursor:pointer}ic-button.next-previous{--icon-width:var(--ic-space-xs);--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs));padding:0 var(--ic-space-xxs) 0 var(--ic-space-xxxs)}ic-button.first-last{--icon-width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs))}.disabled{color:var(--ic-architectural-200);pointer-events:none;cursor:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hide-current-page{display:none}'}}]);