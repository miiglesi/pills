webpackJsonp([10],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default[0]:t("div",{class:{"no-ssr-placeholder":!0}},this.placeholder)}}},"2WoO":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params):this.$route.fullPath.split("#")[0]}},components:{NuxtChild:o.a,NuxtError:a.a}}},C5YA:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},CVUJ:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},F88d:function(t,e,n){"use strict";function r(t){n("Oxa/")}var o=n("rMJV"),a=n("wVfQ"),i=n("VU/8"),s=r,u=i(o.a,a.a,s,null,null);e.a=u.exports},"FZ+f":function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},GZzL:function(t,e){t.exports={default:{about:"About",login:"Log in",language:"Language",spanish:"Spanish",english:"English"}}},Goz6:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.nuxt.err?"nuxt":t.layout,{tag:"component"}):t._e()],1)},o=[],a={render:r,staticRenderFns:o};e.a=a},"HBB+":function(t,e,n){"use strict";var r=(n("/5sW"),["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,a=e.data;a.nuxtChild=!0;for(var i=n,s=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;a.nuxtChildDepth=c;var l=s[c]||u,f={};r.forEach(function(t){void 0!==l[t]&&(f[t]=l[t])});var p={};return o.forEach(function(t){"function"==typeof l[t]&&(p[t]=l[t].bind(i))}),t("transition",{props:f,on:p},[t("router-view",a)])}}},J2Ti:function(t,e,n){"use strict";function r(t){var e=f(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function o(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},o(t.modules[n],e)}n.d(e,"a",function(){return C});var a=n("woOf"),i=n.n(a),s=n("BO1k"),u=n.n(s),c=n("/5sW"),l=n("NYxO");c.default.use(l.default);var f=n("kRpp"),p=f.keys(),d={},h=void 0;if(p.forEach(function(t){-1!==t.indexOf("./index.")&&(h=t)}),h&&(d=r(h)),"function"!=typeof d){d.modules||(d.modules={});var m=!0,v=!1,g=void 0;try{for(var y,x=u()(p);!(m=(y=x.next()).done);m=!0){var w=y.value,b=w.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==b){var _=b.split(/\//),t=o(d,_);b=_.pop(),t[b]=r(w),t[b].namespaced=!0}}}catch(t){v=!0,g=t}finally{try{!m&&x.return&&x.return()}finally{if(v)throw g}}}var C=d instanceof Function?d:function(){return new l.default.Store(i()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))}},MU8w:function(t,e,n){"use strict";t.exports=n("hKoQ").polyfill()},OKoX:function(t,e){t.exports={default:{about:"Acerca de",login:"Acceder",language:"Idioma",spanish:"Español",english:"Inglés"}}},"Oxa/":function(t,e,n){var r=n("C5YA");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("8bf4a886",r,!0)},SldL:function(t,e){!function(e){"use strict";function n(t,e,n,r){var a=e&&e.prototype instanceof o?e:o,i=Object.create(a.prototype),s=new d(r||[]);return i._invoke=c(t,n,s),i}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function a(){}function i(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(n,o,a,i){var s=r(t[n],t,o);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&y.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(c).then(function(t){u.value=t,a(u)},i)}i(s.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function c(t,e,n){var o=j;return function(a,i){if(o===O)throw new Error("Generator is already running");if(o===R){if("throw"===a)throw i;return m()}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var u=l(s,n);if(u){if(u===$)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===j)throw o=R,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=O;var c=r(t,e,n);if("normal"===c.type){if(o=n.done?R:k,c.arg===$)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=R,n.method="throw",n.arg=c.arg)}}}function l(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,l(t,e),"throw"===e.method))return $;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return $}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,$;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,$):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,$)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function h(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(y.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:m}}function m(){return{value:v,done:!0}}var v,g=Object.prototype,y=g.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},w=x.iterator||"@@iterator",b=x.asyncIterator||"@@asyncIterator",_=x.toStringTag||"@@toStringTag",C="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(C&&(t.exports=E));E=e.regeneratorRuntime=C?t.exports:{},E.wrap=n;var j="suspendedStart",k="suspendedYield",O="executing",R="completed",$={},L={};L[w]=function(){return this};var T=Object.getPrototypeOf,S=T&&T(T(h([])));S&&S!==g&&y.call(S,w)&&(L=S);var F=i.prototype=o.prototype=Object.create(L);a.prototype=F.constructor=i,i.constructor=a,i[_]=a.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(F),t},E.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[b]=function(){return this},E.AsyncIterator=u,E.async=function(t,e,r,o){var a=new u(n(t,e,r,o));return E.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},s(F),F[_]="Generator",F[w]=function(){return this},F.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},E.values=h,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=y.call(o,"catchLoc"),s=y.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,$):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),$},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),$}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),$}}}(function(){return this}()||Function("return this")())},T23V:function(t,e,n){"use strict";function r(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}function o(t,e,n){var o=function(t){var o=r(t,"transition",e,n)||{};return"string"==typeof o?{name:o}:o};return t.map(function(t){var e=_()({},o(t));if(n&&n.matched.length&&n.matched[0].components.default){var r=o(n.matched[0].components.default);w()(r).filter(function(t){return r[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=r[t]})}return e})}function a(t,e){return A.serverRendered&&e&&Object(k.a)(t,e),t._Ctor=t,t}function i(t){var e=Object(k.e)(t.options.base,t.options.mode);return Object(k.c)(t.match(e),function(t,e,n,r,o){if("function"!=typeof t||t.options){var i=a(Object(k.j)(t),A.data?A.data[o]:null);return n.components[r]=i,i}return t().then(function(t){var e=a(Object(k.j)(t),A.data?A.data[o]:null);return n.components[r]=e,e})})}function s(t,e,n){var r=this,o=["i18n"],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof E.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),E.a[t]}),!a)return Object(k.h)(o,e)}function u(t,e){Object(k.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":p()(t))||t.options||(t=C.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function c(t,e){var n=this;this._hashChanged||C.default.nextTick(function(){var e=Object(k.g)(t);T=e.map(function(t,e){if(!t)return"";if(L[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)C.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),n._hadError&&n._dateLastError===n.$options._nuxt.dateErr&&n.error();var r=n.$options._nuxt.err?j.a.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(n._context)),n.setLayout(r)})}function l(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),F.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var f=n("pFYg"),p=n.n(f),d=n("Xxa5"),h=n.n(d),m=n("//Fk"),v=n.n(m),g=n("exGp"),y=n.n(g),x=n("fZjL"),w=n.n(x),b=n("woOf"),_=n.n(b),C=n("/5sW"),E=n("unZF"),j=n("qcny"),k=n("YLfZ"),O=function(){var t=y()(h.a.mark(function t(e,n,r){var o,a,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.fullPath.split("#")[0],a=e.fullPath.split("#")[0],this._hashChanged=o===a,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,v.a.all(Object(k.c)(e,function(t,e,n,r){if("function"!=typeof t||t.options){var o=Object(k.j)(t);return n.components[r]=o,o}return t().then(function(t){var e=Object(k.j)(t);return n.components[r]=e,e})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,n,r){return t.apply(this,arguments)}}(),R=function(){var t=y()(h.a.mark(function t(e,n,r){var a,i,u,c,l,f,p,d,m=this;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(a=!1,i=function(t){m.$loading.finish&&m.$loading.finish(),a||(a=!0,r(t))},u=Object(k.d)({to:e,from:n,store:N,isClient:!0,next:i.bind(this),error:this.error.bind(this)},S),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=Object(k.f)(e),c.length){t.next=23;break}return t.next=12,s.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof j.a.layout?j.a.layout(u):j.a.layout);case 16:return l=t.sent,t.next=19,s.call(this,c,u,l);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(o(c,e,n)),t.prev=25,t.next=28,s.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return f=c[0].options.layout,"function"==typeof f&&(f=f(u)),t.next=34,this.loadLayout(f);case 34:return f=t.sent,t.next=37,s.call(this,c,u,f);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(p=!0,c.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{},store:u.store}))}),p){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 44:return t.next=46,v.a.all(c.map(function(t,n){if(t._path=Object(k.b)(e.matched[n].path)(e.params),!m._hadError&&m._isMounted&&t._path===L[n]&&n+1!==c.length)return v.a.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,i=o&&a?30:45;if(o){var s=Object(k.i)(t.options.asyncData,u).then(function(e){Object(k.a)(t,e),m.$loading.increase&&m.$loading.increase(i)});r.push(s)}if(a){var l=t.options.fetch(u);l&&(l instanceof v.a||"function"==typeof l.then)||(l=v.a.resolve(l)),l.then(function(t){m.$loading.increase&&m.$loading.increase(i)}),r.push(l)}return v.a.all(r)}));case 46:L=c.map(function(t,n){return Object(k.b)(e.matched[n].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),a||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),L=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,d=j.a.layout,"function"==typeof d&&(d=d(u)),t.next=60,this.loadLayout(d);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(e,n,r){return t.apply(this,arguments)}}(),$=function(){var t=y()(h.a.mark(function t(e){var n,r,a,s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return S=e.app,F=e.router,N=e.store,t.next=5,v.a.all(i(F));case 5:return n=t.sent,r=new C.default(S),a=A.layout||"default",t.next=10,r.loadLayout(a);case 10:if(r.setLayout(a),s=function(){r.$mount("#__nuxt"),C.default.nextTick(function(){l(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(o(n,F.currentRoute)),L=F.currentRoute.matched.map(function(t){return Object(k.b)(t.path)(F.currentRoute.params)}),T=n.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},A.error&&r.error(A.error),F.beforeEach(O.bind(r)),F.beforeEach(R.bind(r)),F.afterEach(u),F.afterEach(c.bind(r)),!A.serverRendered){t.next=24;break}return s(),t.abrupt("return");case 24:R.call(r,F.currentRoute,F.currentRoute,function(t){if(!t)return u(F.currentRoute,F.currentRoute),c.call(r,F.currentRoute,F.currentRoute),void s();var e=!1;F.afterEach(function(){e||(e=!0,s())}),F.push(t)});case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),L=[],T=[],S=void 0,F=void 0,N=void 0,A=window.__NUXT__||{};Object(j.b)().then($).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},"VU/8":function(t,e){t.exports=function(t,e,n,r,o){var a,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,i=t.default);var u="function"==typeof i?i.options:i;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(t,e){return c.call(e),f(t,e)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:i,options:u}}},WRRc:function(t,e,n){"use strict";n("/5sW");e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";function r(t,e){var n=t.options.data||L;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),R()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=$.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function a(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.components).map(function(e){return t.components[e]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.instances).map(function(e){return t.instances[e]})}))}function s(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return k()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function u(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isStatic:!0,isDev:!1,isHMR:t.isHMR||!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/pills/",env:{}},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":E()(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),t.from&&(n.from=t.from),n.isServer&&t.beforeRenderFns&&(n.beforeNuxtRender=function(e){return t.beforeRenderFns.push(e)}),n.isClient&&window.__NUXT__&&(n.nuxtState=window.__NUXT__),n}function c(t,e){return!t.length||e._redirected?_.a.resolve():l(t[0],e).then(function(){return c(t.slice(1),e)})}function l(t,e){var n=void 0;return n=2===t.length?new _.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof _.a||"function"==typeof n.then)||(n=_.a.resolve(n)),n}function f(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function p(t,e){return v(d(t,e))}function d(t,e){for(var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";null!=(n=T.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var f=t[a],p=n[2],d=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var w=null!=p&&null!=f&&f!==p,b="+"===v||"*"===v,_="?"===v||"*"===v,C=n[2]||s,E=h||m;r.push({name:d||o++,prefix:p||"",delimiter:C,optional:_,repeat:b,partial:w,asterisk:!!x,pattern:E?y(E):x?".*":"[^"+g(C)+"]+?"})}}return a<t.length&&(i+=t.substr(a)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function v(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===E()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,f=a[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+w()(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(l=s(f[p]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+w()(l)+"`");o+=(0===p?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?m(f):s(f),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}function g(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function y(t){return t.replace(/([=!:$\/()])/g,"\\$1")}e.a=r,e.j=o,e.f=a,e.g=i,e.c=s,e.d=u,e.h=c,e.i=l,e.e=f,e.b=p;var x=n("mvHQ"),w=n.n(x),b=n("//Fk"),_=n.n(b),C=n("pFYg"),E=n.n(C),j=n("fZjL"),k=n.n(j),O=n("Dd8w"),R=n.n(O),$=n("/5sW"),L=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var T=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},ZXve:function(t,e,n){var r=n("iFjy");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("37275957",r,!0)},cs8z:function(t,e,n){"use strict";var r=n("2WoO"),o=n("wFWm"),a=n("VU/8"),i=a(r.a,o.a,null,null,null);e.a=i.exports},ct3O:function(t,e,n){"use strict";function r(t){n("ZXve")}var o=n("CVUJ"),a=n("yZln"),i=n("VU/8"),s=r,u=i(o.a,a.a,s,null,null);e.a=u.exports},"gXG+":function(t,e,n){"use strict";var r=n("hqVJ"),o=n("Goz6"),a=n("VU/8"),i=a(r.a,o.a,null,null,null);e.a=i.exports},hqVJ:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s={_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},u={};e.a={head:{htmlAttrs:{lang:"es-ES"},title:" ",titleTemplate:"%s - Pills: Aprende mucho en poco tiempo",meta:[{charset:"utf-8"},{hid:"description",name:"description",content:"Proyecto Pills"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"theme-color",content:"#42B883"},{property:"og:url",content:"http://your-url.com/"},{property:"og:type",content:"article"},{property:"og:title",content:"Pills — Aprende mucho en poco tiempo"},{property:"og:description",content:"Pills es una plataforma de microvídeos formativos. Aprende una forma más flexible y cómoda"},{property:"og:updated_time",content:"2017-10-04T17:20:50"},{property:"og:image",content:"/pills/favicon.ico"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@jdonsan"},{name:"twitter:creator",content:"@jdonsan"},{name:"twitter:title",content:"Pills — Aprende mucho en poco tiempo"},{name:"twitter:description",content:"Pills es una plataforma de microvídeos formativos. Aprende una forma más flexible y cómoda"},{name:"twitter:image",content:"/pills/favicon.ico"}],link:[{rel:"icon",type:"image/x-icon",href:"/pills/favicon.ico"},{rel:"manifest",type:"application/manifest+json",href:"/pills/manifest.json"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options._nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?o.a.resolve(u[n]):s[n]().then(function(t){return u[n]=t,delete s[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},iFjy:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},kRpp:function(t,e,n){function r(t){return n(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./index.js":"vdRI"};r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="kRpp"},mtxM:function(t,e,n){"use strict";function r(){return new a.default({mode:"history",base:"/pills/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:h,routes:[{path:"/",component:i,name:"index"},{path:"/about",component:s,name:"about"},{path:"/login",component:u,name:"login"},{path:"/pill/:id?",component:c,name:"pill-id"},{path:"/:lang",component:l,name:"lang"},{path:"/:lang/about",component:f,name:"lang-about"},{path:"/:lang/login",component:p,name:"lang-login"},{path:"/:lang/pill/:id?",component:d,name:"lang-pill-id"}],fallback:!1})}e.a=r;var o=n("/5sW"),a=n("/ocq");o.default.use(a.default);var i=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},s=function(){return n.e(3).then(n.bind(null,"hSk2")).then(function(t){return t.default||t})},u=function(){return n.e(6).then(n.bind(null,"bIR0")).then(function(t){return t.default||t})},c=function(){return n.e(4).then(n.bind(null,"w3SO")).then(function(t){return t.default||t})},l=function(){return n.e(2).then(n.bind(null,"VRz5")).then(function(t){return t.default||t})},f=function(){return n.e(5).then(n.bind(null,"PR1p")).then(function(t){return t.default||t})},p=function(){return n.e(8).then(n.bind(null,"nIi+")).then(function(t){return t.default||t})},d=function(){return n.e(7).then(n.bind(null,"Bnvj")).then(function(t){return t.default||t})},h=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},p5rU:function(t,e,n){function r(t){return n(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./i18n.js":"w1mq"};r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="p5rU"},pxFO:function(t,e,n){"use strict";var r=n("/5sW"),o=n("TXmL");r.default.use(o.default),e.a=function(t){var e=t.app,r=(t.isClient,t.store);e.i18n=new o.default({locale:r.state.locale,fallbackLocale:"es",messages:{en:n("GZzL"),es:n("OKoX")}})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),l=n("Dd8w"),f=n.n(l),p=n("exGp"),d=n.n(p),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),g=n.n(v),y=n("mtxM"),x=n("0F0d"),w=n("HBB+"),b=n("WRRc"),_=n("ct3O"),C=n("cs8z"),E=n("gXG+"),j=n("YLfZ"),k=n("J2Ti"),O=n("pxFO");n.d(e,"a",function(){return _.a});var R=function(){var t=d()(o.a.mark(function t(e){var n,r,a,i,u,l,p,d;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Object(y.a)(),r=Object(k.a)(),a=f()({router:n,store:r,_nuxt:{defaultTransition:$,transitions:[$],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},$,{name:t}):c()({},$,t):$}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var e=this._nuxt||this.$options._nuxt;return e.dateErr=Date.now(),e.err=t,t}}},E.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(l=Object(j.e)(n.options.base),u=n.resolve(l).route),p=Object(j.d)({isServer:!!e,isClient:!e,route:u,next:i,error:a._nuxt.error.bind(a),store:r,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0},a),d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");t="$"+t,a[t]=e,m.default.use(function(){var e="__nuxt_"+t+"_installed__";m.default[e]||(m.default[e]=!0,m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}}))}),r[t]=a[t]},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof O.a){t.next=13;break}return t.next=13,Object(O.a)(p,d);case 13:t.next=16;break;case 16:return t.abrupt("return",{app:a,router:n,store:r});case 17:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(x.a.name,x.a),m.default.component(w.a.name,w.a),m.default.component(b.a.name,b.a),m.default.component(C.a.name,C.a),m.default.use(g.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var $={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},rMJV:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},rjj0:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(v){var a=d++;r=p||(p=o()),e=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n("tTVk"),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=c(t,e);return r(o),function(e){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=l[i.id];s.refs--,n.push(s)}e?(o=c(t,e),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},tTVk:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],s=a[1],u=a[2],c=a[3],l={id:t+":"+o,css:s,media:u,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("p5rU"),i=a.keys(),s={},u=!0,c=!1,l=void 0;try{for(var f,p=o()(i);!(u=(f=p.next()).done);u=!0){var d=f.value;s[d.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=a(t);return e.default?e.default:e}(d)}}catch(t){c=!0,l=t}finally{try{!u&&p.return&&p.return()}finally{if(c)throw l}}e.a=s},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{locales:["en","es"],locale:"es"}},o={SET_LANG:function(t,e){-1!==t.locales.indexOf(e)&&(t.locale=e)}}},w1mq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.isHMR,n=t.app,r=t.store,o=t.route,a=t.params,i=t.error,s=t.redirect;if(!e){var u=a.lang||"es";return-1===r.state.locales.indexOf(u)?i({message:"This page could not be found.",statusCode:404}):(r.commit("SET_LANG",u),n.i18n.locale=r.state.locale,"es"===u&&0===o.fullPath.indexOf("/es")?s(o.fullPath.replace(/^\/es/,"/")):void 0)}}},wFWm:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child",{key:t.routerViewKey})},o=[],a={render:r,staticRenderFns:o};e.a=a},wVfQ:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"nuxt-progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},o=[],a={render:r,staticRenderFns:o};e.a=a},yZln:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt.js")])])}],a={render:r,staticRenderFns:o};e.a=a}},["T23V"]);
//# sourceMappingURL=app.d3259a44dc047142e36d.js.map