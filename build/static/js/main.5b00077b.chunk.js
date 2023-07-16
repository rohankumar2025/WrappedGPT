(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,n){t.exports=n(272)},147:function(t,e,n){},179:function(t,e,n){},182:function(t,e){},184:function(t,e){},194:function(t,e){},196:function(t,e){},221:function(t,e){},222:function(t,e){},227:function(t,e){},229:function(t,e){},236:function(t,e){},255:function(t,e){},271:function(t,e,n){},272:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(138),i=n.n(o),c=n(6),s=(n(147),n(21)),u=n(20);var l=function(t){var e=Object(r.useState)(!1),n=Object(c.a)(e,2),o=n[0],i=n[1],l=function(e){t.setSearchLength(e),i(!1)};return a.a.createElement("nav",{className:"Navbar"},a.a.createElement("div",{className:"Navbar-left"},a.a.createElement("button",{className:"Navbar-button",onClick:function(){t.setSearchQuery("artists"),t.setIsGettingRecommendations(!1)}},"Artists"),a.a.createElement("button",{className:"Navbar-button",onClick:function(){t.setSearchQuery("tracks"),t.setIsGettingRecommendations(!1)}},"Songs"),t.isLoading&&a.a.createElement("div",{className:"loading-circle"})),a.a.createElement("div",{className:"Navbar-right"},a.a.createElement("div",{className:"Navbar-dropdown ".concat(o?"open":"")},a.a.createElement("button",{className:"Navbar-button",onClick:function(){i(!o)}},"Options"),a.a.createElement("div",{className:"Navbar-dropdown-content"},a.a.createElement("button",{className:"Navbar-dropdown-button",onClick:function(){return l("short_term")}},"Short Term","short_term"===t.searchLength&&a.a.createElement(s.a,{icon:u.a,className:"Navbar-dropdown-checkmark"})),a.a.createElement("button",{className:"Navbar-dropdown-button",onClick:function(){return l("medium_term")}},"Medium Term","medium_term"===t.searchLength&&a.a.createElement(s.a,{icon:u.a,className:"Navbar-dropdown-checkmark"})),a.a.createElement("button",{className:"Navbar-dropdown-button",onClick:function(){return l("long_term")}},"Long Term","long_term"===t.searchLength&&a.a.createElement(s.a,{icon:u.a,className:"Navbar-dropdown-checkmark"})))),a.a.createElement("button",{className:"Navbar-login-button",onClick:function(){window.localStorage.removeItem("token"),t.setToken("")}},"Log Out")))},m=n(33),h=n(139);n(72);var f=function(t){var e=Object(r.useState)(!1),n=Object(c.a)(e,2),o=n[0],i=n[1];return Object(r.useEffect)(function(){var t;return o&&(t=setTimeout(function(){i(!1)},1e3)),function(){return clearTimeout(t)}},[o]),a.a.createElement("div",{className:"ListItem"},a.a.createElement("div",{className:"number"},t.number,"."),a.a.createElement("img",{className:"box",src:t.track.picture,alt:""}),a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"songName"},t.track.name),a.a.createElement("div",{className:"artist"},t.track.explicit&&a.a.createElement("span",{className:"explicit"},"E"),t.track.artist)),a.a.createElement("div",{className:"duration"},function(e){if(null==t.track.duration)return"";var n=Math.floor(e/6e4),r=Math.floor(e/1e3%60),a=r.toString();return r<10&&(a="0"+a),n.toString()+":"+a}(t.track.duration)),a.a.createElement("div",{className:"ellipsis",onClick:function(){return i(!o)}},a.a.createElement(s.a,{icon:u.b}),o&&a.a.createElement("div",{className:"popup",onClick:function(){window.open(t.track.link,"_blank"),i(!1)}},a.a.createElement("span",{className:"popupText"},"Open With Spotify"))))},p=n(274),d=n(70),v=new d.Configuration({organization:"org-3WYeVyMmjbH45Ue2uzXNHMA5",apiKey:"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"});new d.OpenAIApi(v);function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(_){s=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new j(a||[]);return r(i,"_invoke",{value:k(t,n,c)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var m={};function h(){}function f(){}function p(){}var d={};s(d,o,function(){return this});var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==e&&n.call(b,o)&&(d=b);var y=p.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?e.resolve(m.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(m).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function k(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=N(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function N(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:f,configurable:!0}),f.displayName=s(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(E.prototype),s(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(y),s(y,c,"Generator"),s(y,o,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=x,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},t}var b=function(t){var e=Object(r.useState)(""),n=Object(c.a)(e,2),o=n[0],i=n[1],s=Object(r.useState)(""),u=Object(c.a)(s,2),l=u[0],d=u[1],v=Object(r.useState)([]),b=Object(c.a)(v,2),y=(b[0],b[1],Object(r.useState)([])),w=Object(c.a)(y,2),E=w[0],k=w[1],N=Object(r.useState)([]),L=Object(c.a)(N,2),O=L[0],j=L[1],x=Object(r.useState)(null),S=Object(c.a)(x,2),_=S[0],T=S[1],I=Object(r.useCallback)(Object(h.a)(g().mark(function e(){var n,r,a,o,i,c,s,u;return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.setIsLoading(!0),e.next=4,p.a.get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(t.token)},params:{limit:50,time_range:t.searchLength}});case 4:return n=e.sent,e.next=7,p.a.get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(t.token)},params:{limit:50,offset:49,time_range:t.searchLength}});case 7:return r=e.sent,e.next=10,p.a.get("https://api.spotify.com/v1/me/top/artists",{headers:{Authorization:"Bearer ".concat(t.token)},params:{limit:50,time_range:t.searchLength}});case 10:return a=e.sent,e.next=13,p.a.get("https://api.spotify.com/v1/me/top/artists",{headers:{Authorization:"Bearer ".concat(t.token)},params:{limit:50,offset:49,time_range:t.searchLength}});case 13:o=e.sent,i=n.data.items.map(function(t){return{name:t.name,artist:t.artists[0].name,picture:t.album.images[0].url,explicit:t.explicit,duration:t.duration_ms,popularity:t.popularity,link:t.external_urls.spotify}}),c=r.data.items.slice(1).map(function(t){return{name:t.name,artist:t.artists[0].name,picture:t.album.images[0].url,explicit:t.explicit,duration:t.duration_ms,popularity:t.popularity,link:t.external_urls.spotify}}),k([].concat(Object(m.a)(i),Object(m.a)(c))),s=a.data.items.map(function(t,e){return{name:t.name,picture:t.images[0].url,link:t.external_urls.spotify}}),u=o.data.items.slice(1).map(function(t,e){return{name:t.name,picture:t.images[0].url,link:t.external_urls.spotify}}),j([].concat(Object(m.a)(s),Object(m.a)(u))),console.log("Performed API Calls"),t.setIsLoading(!1),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),console.error(e.t0),window.localStorage.setItem("token","");case 28:case"end":return e.stop()}},e,null,[[0,24]])})),[t.searchLength]),G=Object(r.useCallback)(function(){_&&clearTimeout(_);var t=setTimeout(function(){I()},500);T(t)},[I]);return Object(r.useEffect)(function(){o===t.searchQuery&&l===t.searchLength||(G(),i(t.searchQuery),d(t.searchLength))},[t.searchLength,G]),a.a.createElement("div",null,"artists"===t.searchQuery&&0!==O.length&&!t.isGettingRecommendations&&a.a.createElement("ul",{className:"song-list"},O.map(function(t,e){return a.a.createElement(f,{key:e,track:t,number:e+1})})),"tracks"===t.searchQuery&&0!==E.length&&!t.isGettingRecommendations&&a.a.createElement("ul",{className:"song-list"},E.map(function(t,e){return a.a.createElement(f,{key:e,track:t,number:e+1})})))},y=(n(179),n(180).randomBytes(20).toString("hex")),w="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("78be0496eccd4f789d4872bb3b0a1c6d","&scope=").concat(["user-top-read"],"&redirect_uri=").concat("https://rohankumar2025.github.io/WrappedGPT/","&response_type=").concat("token","&show_dialog=true&state=").concat(y);var E=function(){return a.a.createElement("div",{className:"Login"},a.a.createElement("div",{className:"Login-container"},a.a.createElement("h1",{className:"Login-title"},"WrappedGPT"),a.a.createElement("a",{className:"Login-button",href:w}," Connect to Spotify")))};n(271);var k=function(){var t=Object(r.useState)(""),e=Object(c.a)(t,2),n=e[0],o=e[1],i=Object(r.useState)("tracks"),s=Object(c.a)(i,2),u=s[0],m=s[1],h=Object(r.useState)("short_term"),f=Object(c.a)(h,2),p=f[0],d=f[1],v=Object(r.useState)(!0),g=Object(c.a)(v,2),y=g[0],w=g[1],k=Object(r.useState)(!1),N=Object(c.a)(k,2),L=N[0],O=N[1];return Object(r.useEffect)(function(){var t=window.location.hash,e=window.localStorage.getItem("token");!e&&t&&(e=t.substring(1).split("&").find(function(t){return t.startsWith("access_token")}).split("=")[1],window.location.hash="",window.localStorage.setItem("token",e)),o(e),console.log(e)},[]),""===n?a.a.createElement(E,null):a.a.createElement("div",{className:"App"},a.a.createElement(l,{setToken:o,setSearchQuery:m,isLoading:y,setSearchLength:d,searchLength:p,setIsGettingRecommendations:O}),a.a.createElement(b,{token:n,searchQuery:u,setIsLoading:w,searchLength:p,isGettingRecommendations:L}))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)))},72:function(t,e,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.5b00077b.chunk.js.map