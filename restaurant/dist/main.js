(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(667),l=n.n(c),d=new URL(n(528),n.b),s=i()(r()),u=l()(d);s.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* -- CSS Reset -- */\n\n#content {\n    background-image: url("+u+");\n    min-height: 100vh;\n    background-size: cover;\n\n    display: flex;\n    flex-direction: column;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    height: 50px;\n    padding-top: 20px;\n    gap: 20px;\n    background-color: whitesmoke;\n}\n\nnav > * {\n    border: 2px solid black;\n    border-radius: 10px 10px 0 0;\n    border-bottom: none;\n\n    width: 100px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    background-color: whitesmoke;\n\n    font-weight: bold;\n}\n\nfooter {\n    margin-top: auto;\n    padding: 1vh auto;\n    background-color: whitesmoke;\n}\n\n.tab-content {\n    margin: 50px 20vw;\n    background-color: whitesmoke;\n\n    border: 3px solid #0055f1;\n    border-radius: 2px;\n}\n\n.tab-header {\n    color: white;\n    font-weight: bold;\n    background-color: #0055f1;\n}\n\n.tab-main {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.tab-main > * {\n    margin-bottom: 20px;\n    width: 75%;\n}\n\n.hook {\n    text-align: center;\n    width: 75%;\n    font-weight: bold;\n    font-size: 2.5rem;\n}",""]);const m=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=o(e,r),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},528:(e,t,n)=>{e.exports=n.p+"a350117ca1026a89d060.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),l=n.n(c),d=n(216),s=n.n(d),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const b=()=>{document.querySelector(".tab-content").textContent="";let e=document.createElement("div");e.classList.add("tab-header"),e.textContent="Dummy text";let t=document.createElement("div");t.classList.add("tab-main"),document.querySelector(".tab-content").append(e,t)},h=()=>{b(),document.querySelector(".tab-header").textContent="Home";let e=document.querySelector(".tab-main"),t=document.createElement("h1");t.classList.add("hook"),t.textContent="Welcome to Big Bytes, where you'll fill your storage up!";let n=document.createElement("div");n.classList.add("desc"),n.textContent="Megabytes, gigabytes, terabytes, even petrabytes, we've got it all! Been craving to fill up your empty, empty storage? Don't worry, we have you!";let o=document.createElement("h2");o.classList.add("hours-header"),o.textContent="Hours",o.style.textAlign="center",o.style.fontWeight="bold",o.style.fontSize="1.2em";let r=document.createElement("div");r.classList.add("hours"),r.innerHTML="Saturday-Sunday: Closed<br>Monday-Thursday: 11pm - 5am<br>Friday: 12am - 8am",r.style.textAlign="center";let a=document.createElement("h2");a.classList.add("location-header"),a.innerHTML="Location",a.style.textAlign="center",a.style.fontWeight="bold",a.style.fontSize="1.2em";let i=document.createElement("div");i.classList.add("location"),i.innerHTML="wanning-lu.github.io/the-odin-project/restaurant",i.style.textAlign="center",e.append(t,n,o,r,a,i)},y=()=>{b(),document.querySelector(".tab-header").textContent="Menu";let e=document.querySelector(".tab-main"),t=document.createElement("h1");t.classList.add("title"),t.textContent="Our Menu";let n=document.createElement("div");n.classList.add("menu-content"),n.innerHTML="Small Bytes<br>1 byte<br>1 kilobyte<br>1 megabyte<br><br>Big Bytes<br>1 gigabyte<br>1 terabyte<br>1 petrabyte",e.append(t,n)},g=()=>{b(),document.querySelector(".tab-header").textContent="Contact Us";let e=document.querySelector(".tab-main"),t=document.createElement("h1");t.classList.add("email"),t.textContent="Email";let n=document.createElement("div");n.classList.add("email-content"),n.innerHTML="yummybites@coolcoder.com",e.append(t,n)};document.addEventListener("DOMContentLoaded",(()=>{let e=document.createElement("nav"),t=document.createElement("div");t.textContent="Home";let n=document.createElement("div");n.textContent="Menu";let o=document.createElement("div");o.textContent="Contact",t.addEventListener("click",h),n.addEventListener("click",y),o.addEventListener("click",g),e.append(t,n,o);let r=document.createElement("div");r.classList.add("tab-content");let a=document.createElement("div");a.classList.add("tab-header"),a.textContent="Dummy text";let i=document.createElement("div");i.classList.add("tab-main"),r.append(a,i);let c=document.createElement("footer");c.textContent="Background image 'Bliss' from Windows",document.querySelector("#content").append(e,r,c),h()}))})()})();