/*! @silexlabs/grapesjs-fonts - 1.0.0 */
!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define([],e):'object'==typeof exports?exports["@silexlabs/grapesjs-fonts"]=e():t["@silexlabs/grapesjs-fonts"]=e()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{var t={609:(t,e,n)=>{var r=n(425)["default"];function i(){"use strict";t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},l="function"==typeof Symbol?Symbol:{},a=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),l=new C(r||[]);return s(o,"_invoke",{value:w(t,n,l)}),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function v(){}function y(){}function g(){}var m={};h(m,a,(function(){return this}));var _=Object.getPrototypeOf,$=_&&_(_(E([])));$&&$!==n&&o.call($,a)&&(m=$);var b=g.prototype=v.prototype=Object.create(m);function A(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(i,s,l,a){var c=d(t[i],t,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==r(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,l,a)}),(function(t){n("throw",t,l,a)})):e.resolve(h).then((function(t){u.value=t,l(u)}),(function(t){return n("throw",t,l,a)}))}a(c.arg)}var i;s(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}})}function w(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var l=O(s,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var a=d(t,e,n);if("normal"===a.type){if(r=n.done?"completed":"suspendedYield",a.arg===p)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r="completed",n.method="throw",n.arg=a.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=d(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:N}}function N(){return{value:void 0,done:!0}}return y.prototype=g,s(b,"constructor",{value:g,configurable:!0}),s(g,"constructor",{value:y,configurable:!0}),y.displayName=h(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,h(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},A(x.prototype),h(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new x(f(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},A(b),h(b,u,"Generator"),h(b,a,(function(){return this})),h(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=E,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),a=o.call(i,"finallyLoc");if(l&&a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},425:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports["default"]=t.exports},841:(t,e,n)=>{var r=n(609)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t['default']:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0})};var r={};return(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,n||"default");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}function i(t,n,r){return(n=e(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function o(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function s(t,e,n,r,i,o,s){try{var l=t[o](s),a=l.value}catch(t){return void n(t)}l.done?e(a):Promise.resolve(a).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function l(t){s(o,r,i,l,a,"next",t)}function a(t){s(o,r,i,l,a,"throw",t)}l(void 0)}))}}n.r(r),n.d(r,{default:()=>Wt});var a,c=n(841),u=n.n(c);const h=window,f=h.trustedTypes,d=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,p=`lit$${(Math.random()+"").slice(9)}$`,v="?"+p,y=`<${v}>`,g=document,m=(t="")=>g.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,b=t=>$(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,w=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),S=/'/g,j=/"/g,C=/^(?:script|style|textarea|title)$/i,E=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),N=E(1),k=(E(2),Symbol.for("lit-noChange")),M=Symbol.for("lit-nothing"),T=new WeakMap,P=g.createTreeWalker(g,129,null,!1),H=(t,e)=>{const n=t.length-1,r=[];let i,o=2===e?"<svg>":"",s=A;for(let e=0;e<n;e++){const n=t[e];let l,a,c=-1,u=0;for(;u<n.length&&(s.lastIndex=u,a=s.exec(n),null!==a);)u=s.lastIndex,s===A?"!--"===a[1]?s=x:void 0!==a[1]?s=w:void 0!==a[2]?(C.test(a[2])&&(i=RegExp("</"+a[2],"g")),s=O):void 0!==a[3]&&(s=O):s===O?">"===a[0]?(s=null!=i?i:A,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?O:'"'===a[3]?j:S):s===j||s===S?s=O:s===x||s===w?s=A:(s=O,i=void 0);const h=s===O&&t[e+1].startsWith("/>")?" ":"";o+=s===A?n+y:c>=0?(r.push(l),n.slice(0,c)+"$lit$"+n.slice(c)+p+h):n+p+(-2===c?(r.push(void 0),e):h)}const l=o+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==d?d.createHTML(l):l,r]};class L{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let i=0,o=0;const s=t.length-1,l=this.parts,[a,c]=H(t,e);if(this.el=L.createElement(a,n),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=P.nextNode())&&l.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(p)){const n=c[o++];if(t.push(e),void 0!==n){const t=r.getAttribute(n.toLowerCase()+"$lit$").split(p),e=/([.?@])?(.*)/.exec(n);l.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?G:"@"===e[1]?z:R})}else l.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(C.test(r.tagName)){const t=r.textContent.split(p),e=t.length-1;if(e>0){r.textContent=f?f.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],m()),P.nextNode(),l.push({type:2,index:++i});r.append(t[e],m())}}}else if(8===r.nodeType)if(r.data===v)l.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(p,t+1));)l.push({type:7,index:i}),t+=p.length-1}i++}}static createElement(t,e){const n=g.createElement("template");return n.innerHTML=t,n}}function I(t,e,n=t,r){var i,o,s,l;if(e===k)return e;let a=void 0!==r?null===(i=n._$Co)||void 0===i?void 0:i[r]:n._$Cl;const c=_(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,n,r)),void 0!==r?(null!==(s=(l=n)._$Co)&&void 0!==s?s:l._$Co=[])[r]=a:n._$Cl=a),void 0!==a&&(e=I(t,a._$AS(t,e.values),a,r)),e}class Y{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:n},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:g).importNode(n,!0);P.currentNode=i;let o=P.nextNode(),s=0,l=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new D(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new F(o,this,t)),this.u.push(e),a=r[++l]}s!==(null==a?void 0:a.index)&&(o=P.nextNode(),s++)}return i}p(t){let e=0;for(const n of this.u)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class D{constructor(t,e,n,r){var i;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cm=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),_(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==k&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):b(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==M&&_(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){var e;const{values:n,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=L.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.p(n);else{const t=new Y(i,this),e=t.v(this.options);t.p(n),this.T(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new L(t)),e}k(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const i of t)r===e.length?e.push(n=new D(this.O(m()),this.O(m()),this,this.options)):n=e[r],n._$AI(i),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class R{constructor(t,e,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,r){const i=this.strings;let o=!1;if(void 0===i)t=I(this,t,e,0),o=!_(t)||t!==this._$AH&&t!==k,o&&(this._$AH=t);else{const r=t;let s,l;for(t=i[0],s=0;s<i.length-1;s++)l=I(this,r[n+s],e,s),l===k&&(l=this._$AH[s]),o||(o=!_(l)||l!==this._$AH[s]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+i[s+1]),this._$AH[s]=l}o&&!r&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const B=f?f.emptyScript:"";class G extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class z extends R{constructor(t,e,n,r,i){super(t,e,n,r,i),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=I(this,t,e,0))&&void 0!==n?n:M)===k)return;const r=this._$AH,i=t===M&&r!==M||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==M&&(r===M||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const W={P:"$lit$",A:p,M:v,C:1,L:H,R:Y,D:b,V:I,I:D,H:R,N:G,U:z,B:U,F},V=h.litHtmlPolyfillSupport;null==V||V(L,D),(null!==(a=h.litHtmlVersions)&&void 0!==a?a:h.litHtmlVersions=[]).push("2.6.1");const q=(t,e,n)=>{var r,i;const o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:e;let s=o._$litPart$;if(void 0===s){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new D(e.insertBefore(m(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s},Z=1,J=2,Q=3,K=4,X=t=>(...e)=>({_$litDirective$:t,values:e});class tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:et}=W,nt=t=>void 0===t.strings,rt={},it=X(class extends tt{constructor(t){if(super(t),t.type!==Q&&t.type!==Z&&t.type!==K)throw Error("The `live` directive is not allowed on child or event bindings");if(!nt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===k||e===M)return e;const n=t.element,r=t.name;if(t.type===Q){if(e===n[r])return k}else if(t.type===K){if(!!e===n.hasAttribute(r))return k}else if(t.type===Z&&n.getAttribute(r)===e+"")return k;return((t,e=rt)=>{t._$AH=e})(t),e}});function*ot(t,e){if(void 0!==t){let n=0;for(const r of t)yield e(r,n++)}}const st=X(class extends tt{constructor(t){var e;if(super(t),t.type!==Z||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const r=t[n];return null==r?e:e+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.vt.add(t),t.includes("-")?n.setProperty(t,r):n[t]=r)}return k}}),lt=(t,e)=>{var n,r;const i=t._$AN;if(void 0===i)return!1;for(const t of i)null===(r=(n=t)._$AO)||void 0===r||r.call(n,e,!1),lt(t,e);return!0},at=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===(null==n?void 0:n.size))},ct=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),ft(e)}};function ut(t){void 0!==this._$AN?(at(this),this._$AM=t,ct(this)):this._$AM=t}function ht(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(let t=n;t<r.length;t++)lt(r[t],!1),at(r[t]);else null!=r&&(lt(r,!1),at(r));else lt(this,t)}const ft=t=>{var e,n,r,i;t.type==J&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=ht),null!==(n=(i=t)._$AQ)&&void 0!==n||(i._$AQ=ut))};class dt extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),ct(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,r;t!==this.isConnected&&(this.isConnected=t,t?null===(n=this.reconnected)||void 0===n||n.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(lt(this,t),at(this))}setValue(t){if(nt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const pt=()=>new vt;class vt{}const yt=new WeakMap,gt=X(class extends dt{render(t){return M}update(t,[e]){var n;const r=e!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(n=t.options)||void 0===n?void 0:n.host,this.rt(this.ct=t.element)),M}rt(t){var e;if("function"==typeof this.Y){const n=null!==(e=this.dt)&&void 0!==e?e:globalThis;let r=yt.get(n);void 0===r&&(r=new WeakMap,yt.set(n,r)),void 0!==r.get(this.Y)&&this.Y.call(this.dt,void 0),r.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,n;return"function"==typeof this.Y?null===(e=yt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(n=this.Y)||void 0===n?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var mt,_t,$t,bt,At,xt,wt,Ot=document.createElement('div'),St='open-fonts',jt='silex-loaded-fonts-list';try{xt=JSON.parse(localStorage.getItem(jt))}catch(d){console.error('Could not get fonts from local storage:',d)}function Ct(){return Et.apply(this,arguments)}function Et(){return Et=l(u().mark((function t(){var e,n=arguments;return u().wrap((function(t){for(;1;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:0,t.abrupt("return",new Promise((function(t){return setTimeout((function(){return t()}),e)})));case 2:case"end":return t.stop()}}),t)}))),Et.apply(this,arguments)}function Nt(){return(Nt=l(u().mark((function t(e){return u().wrap((function(t){for(;1;)switch(t.prev=t.next){case 0:wt=structuredClone(e.getModel().get('fonts')||[]);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function kt(){return(kt=l(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;1;)switch(t.prev=t.next){case 0:if(null===(n=xt)||void 0===n){t.next=4;break}t.t0=n,t.next=18;break;case 4:return t.next=6,fetch(e);case 6:return t.next=8,t.sent.json();case 8:if(t.t2=r=t.sent,t.t1=null===t.t2,t.t1){t.next=12;break}t.t1=void 0===r;case 12:if(!t.t1){t.next=16;break}t.t3=void 0,t.next=17;break;case 16:t.t3=r.items;case 17:t.t0=t.t3;case 18:return xt=t.t0,localStorage.setItem(jt,JSON.stringify(xt)),t.next=22,Ct();case 22:return t.abrupt("return",xt);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Mt=function(t,e){if(!e.api_key)throw new Error('You must provide Google font api key, see https://developers.google.com/fonts/docs/developer_api#APIKey');t.Commands.add(St,{run:function(n,r){return(At=t.Modal.open({title:'Fonts',content:'',attributes:{class:'fonts-dialog'}}).onceClose((function(){t.stopCommand(St)}))).setContent(Ot),function(t){Nt.apply(this,arguments)}(t),Ht(t,e,[]),function(t){return kt.apply(this,arguments)}('https://www.googleapis.com/webfonts/v1/webfonts?key='+e.api_key).then((function(n){var r;Ht(t,e,n);var i=Ot.querySelector('form');i.onsubmit=function(e){e.preventDefault(),function(t,e){var n=t.getModel();n.set('fonts',wt),Ut(t,wt),Bt(t,wt),n.set('changesCount',t.getDirtyCount()+1)}(t),t.stopCommand(St)},null===(r=i.querySelector('input'))||void 0===r||r.focus()})),At},stop:function(){At.close()}}),t.on('storage:start:store',(function(e){e.fonts=t.getModel().get('fonts')})),t.on('storage:end:load',(function(e){t.getModel().set('fonts',e.fonts||[]),setTimeout((function(){Ut(t,e.fonts),Bt(t,e.fonts)}))}))};var Tt=pt(),Pt=pt();function Ht(t,e,n){t.getModel();var r=Tt.value,i=n.filter((function(t){return function(t,e){var n,r=t.toLowerCase(),i=0,o=-1;for(e=e.toLowerCase();n=e[i++];)if(!~(o=r.indexOf(n,o+1)))return!1;return!0}(t.family,(null==r?void 0:r.value)||'')}));null==r||r.focus(),q(N(mt||(mt=o(["\n    <form class=\"silex-form grapesjs-fonts\">\n      <div class=\"silex-form__group\">\n        <div class=\"silex-bar\">\n          <input\n            style=","\n            placeholder=\"Search fonts...\"\n            type=\"text\"\n            ","\n            @keydown=","/>\n          <select\n            style=","\n            ","\n          >\n            ","\n          </select>\n          <button class=\"silex-button\"\n            ?disabled=","\n            type=\"button\" @click=",">\n            Add&nbsp;to&nbsp;website\n          </button>\n        </div>\n      </div>\n      <hr/>\n      <div\n        class=\"silex-form__element\">\n        <h2>Installed fonts</h2>\n        <ol class=\"silex-list\">\n        ","\n        </ol>\n      </div>\n      <footer>\n        <input class=\"silex-button\" type=\"button\" @click="," value=\"Cancel\">\n        <input class=\"silex-button\" type=\"submit\" value=\"Ok\">\n      </footer>\n    </form>\n  "])),st({width:'100%'}),gt(Tt),(function(r){setTimeout((function(){return Ht(t,e,n)}))}),st({width:'150px'}),gt(Pt),ot(i,(function(t){return N(_t||(_t=o(["\n              <option value=",">","</option>\n            "])),t['family'],t['family'])})),!Pt.value||0===i.length,(function(r){!function(t,e,n,r){var i=r.family,o="\"".concat(r.family,"\", ").concat(r.category);n.push({name:i,value:o,variants:[]})}(0,0,wt,i[Pt.value.selectedIndex]),Ht(t,e,n)}),ot(wt,(function(r){var i,s;return N($t||($t=o(["\n          <li>\n            <div class=\"silex-list__item__header\">\n              <h4>","</h4>\n            </div>\n            <div class=\"silex-list__item__body\">\n              <fieldset class=\"silex-group--simple full-width\">\n                <legend>CSS rules</legend>\n                <input\n                  class=\"full-width\"\n                  type=\"text\"\n                  name=\"name\"\n                  .value=","\n                  @change=","\n                />\n              </fieldset>\n              <fieldset class=\"silex-group--simple full-width\">\n                <legend>Variants</legend>\n                ","\n              </fieldset>\n            </div>\n            <div class=\"silex-list__item__footer\">\n              <button class=\"silex-button\" type=\"button\" @click=",">Remove</button>\n            </div>\n          </li>\n        "])),r.name,it(r.value),(function(i){var o,s;o=r,s=i.target.value,o.value=s,Ht(t,e,n)}),ot(null===(s=r,i=n.find((function(t){return s.name===t.family})))||void 0===i?void 0:i.variants.filter((function(t){return''===t.replace(/[a-z]/g,'')})),(function(i){var s;return N(bt||(bt=o(["\n                  <div>\n                    <input\n                      id=","\n                      type=\"checkbox\"\n                      value=","\n                      ?checked=","\n                      @change=","\n                    /><label for=",">","</label>\n                  </div>\n                "])),r.name+i,i,null===(s=r.variants)||void 0===s?void 0:s.includes(i),(function(o){!function(t,e,n,r,i){var o,s=null===(o=n.variants)||void 0===o?void 0:o.includes(r);s&&!i?n.variants=n.variants.filter((function(t){return t!==r})):!s&&i&&n.variants.push(r)}(0,0,r,i,o.target.checked),Ht(t,e,n)}),r.name+i,i)})),(function(i){!function(t,e,n){var r=e.findIndex((function(t){return t===n}));e.splice(r,1)}(0,wt,r),Ht(t,e,n)}))})),(function(e){return t.stopCommand(St)})),Ot)}function Lt(t,e,n,r){t.head.querySelector("[".concat(e,"]"))||It(t,e,n,r)}function It(t,e,n,r){var i=t.createElement(n);i.setAttribute(e,''),Object.keys(r).forEach((function(t){return i.setAttribute(t,r[t])})),t.head.appendChild(i)}var Yt='data-silex-google-apis',Dt='data-silex-gstatic',Rt='data-silex-gstatic';function Ut(t,e){var n=t.Canvas.getDocument();Lt(n,Yt,'link',{href:'https://fonts.googleapis.com',rel:'preconnect'}),Lt(n,Dt,'link',{href:'https://fonts.gstatic.com',rel:'preconnect',crossorigin:''}),function(t,e){Array.from(t.head.querySelector("[".concat(e,"]"))).forEach((function(t){return t.remove()}))}(n,Rt),e.forEach((function(t){var e=(t.variants.length?':':'')+t.variants.map((function(t){return t.replace(/\d+/g,'')})).filter((function(t){return!!t})).join(',');It(n,Rt,'link',{href:"https://fonts.googleapis.com/css?family=".concat(t.name.replace(/ /g,'+')).concat(e,"&display=swap"),rel:'stylesheet'})}))}function Bt(t,e){var n=t.StyleManager;n.getProperty('typography','font-family').setOptions(e),n.render()}const Gt={'grapesjs-fonts':{}};function zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?zt(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const Wt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Ft(Ft({},{i18n:{}}),e);t.I18n&&t.I18n.addMessages(Ft({en:Gt},n.i18n)),Mt(t,e)}})(),r})()));
//# sourceMappingURL=index.js.map