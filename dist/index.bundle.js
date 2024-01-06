(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,"html, \nbody {\n    display: flex;\n    justify-content: center;\n    min-height: 100%;\n    background-color: palegoldenrod;\n}\n\np {\n    margin: 0;\n}\n\nimg {\n    margin-top: 25px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#content,\n.page-select,\n.main {\n    display: flex;\n    padding: 50px;\n    border: 1px solid black;\n    border-radius: 5px;\n    gap: 50px;\n}\n\n#content {\n    flex-direction: column;\n    margin: 50px;\n    width: 500px;\n}\n\n.page-select {\n    justify-content: center;\n}\n\n.page-select button {\n    background-color: palegoldenrod;\n    border: 1px solid black;\n    border-radius: 5px;\n    height: 50px;\n    width: 100px;\n    font-weight: bold;\n    font-style: italic;\n}\n\n.main {\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.main > div,\n.main > p {\n    box-sizing: border-box;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 30px;\n    width: 100%;\n}\n\n.main > div > p + p {\n    padding-top: 10px;\n}\n\n.title {\n    font-size: 50px;\n    font-style: italic;\n    text-align: center;\n    color: brown;\n}\n\n#lasagna,\n#pasta {\n    width: 50%;\n}\n\n#phone-number {\n    text-align: center;\n    font-size: 30px;\n    font-weight: bold;\n    color: red;\n}\n\n\n\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=o(e,a),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},637:(e,t,n)=>{function o(){const e=document.querySelector(".main"),t=document.createElement("p");t.className="title",t.textContent="Contact Number",e.appendChild(t);const n=document.createElement("p");n.id="phone-number",n.textContent="1233211234567",e.appendChild(n)}n.d(t,{s:()=>o})},666:(e,t,n)=>{function o(){const e=document.querySelector(".main"),t=document.createElement("p");t.className="title",t.textContent="Yumyum Bakery",e.appendChild(t);const n=document.createElement("p");n.className="intro",n.textContent="Yumyum Bakery is the best bakery in the world. If I had to take a guess, I’d say she’s about 35 years old. She didn't drink, but she didn't want people to realize that, so she ordered a ginger ale at the bar. If you don't get me a cheetah for Christmas, I will tell everyone you are the worst parents ever.",e.appendChild(n);const o=document.createElement("div");o.className="work-hour",e.appendChild(o);const a=document.createElement("p");a.className="subtitle",a.textContent="Working Hours",o.appendChild(a);const r=document.createElement("p");r.className="content",r.textContent="7 / 24 all the time! We employ workers to serve you till their death for 100% efficiency!",o.appendChild(r);const i=document.createElement("div");i.className="location",e.appendChild(i);const c=document.createElement("p");c.className="subtitle",c.textContent="Location",i.appendChild(c);const s=document.createElement("p");s.className="content",s.textContent="Mars",i.appendChild(s)}n.d(t,{h:()=>o})},769:(e,t,n)=>{n.d(t,{C:()=>r});const o=n.p+"30d08d5ae7bc46724af5.jpg",a=n.p+"ad9930596a4e3f7325d7.jpg";function r(){const e=document.querySelector(".main"),t=document.createElement("p");t.className="title",t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");n.className="lasagna",e.appendChild(n);const r=document.createElement("p");r.className="subtitle",r.textContent="Bitch Lasagna $123",n.appendChild(r);const i=document.createElement("p");i.className="content",i.textContent="This recipe is a blend of flavors that will transport you to the heart of Italy. It starts with a base of meatballs and onions, followed by a layer of tomato sauce, lasagna noodles, and a sprinkle of cottage cheese. The final touch is a generous amount of mozzarella cheese that gives the soup a rich, creamy texture.",n.appendChild(i);const c=document.createElement("img");c.id="lasagna",c.src=o,n.appendChild(c);const s=document.createElement("div");s.className="pasta",e.appendChild(s);const l=document.createElement("p");l.className="subtitle",l.textContent="Skadoodle $321",s.appendChild(l);const d=document.createElement("p");d.className="content",d.textContent="This pasta is made from a blend of flour and water or eggs, forming a dough that is then molded into a variety of shapes before being cooked. The unique texture of Skadoodle is a result of the use of durum wheat, which gives it a high gluten content and low moisture, making it perfectly suited to pasta production.",s.appendChild(d);const p=document.createElement("img");p.id="pasta",p.src=a,s.appendChild(p)}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(666),t=n(769),o=n(637),a=n(379),r=n.n(a),i=n(795),c=n.n(i),s=n(569),l=n.n(s),d=n(565),p=n.n(d),u=n(216),m=n.n(u),h=n(589),f=n.n(h),g=n(426),v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),r()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const b=document.querySelector("#content"),y=document.createElement("div");y.className="page-select",b.appendChild(y);const C=document.createElement("button");C.className="home",C.textContent="Home",y.appendChild(C);const x=document.createElement("button");x.className="menu",x.textContent="Menu",y.appendChild(x);const w=document.createElement("button");w.className="contact",w.textContent="Contact",y.appendChild(w);const E=document.createElement("div");E.className="main",b.appendChild(E);let N="home";(0,e.h)(),C.addEventListener("click",(()=>{if("home"!=N){for(;E.firstChild;)E.removeChild(E.firstChild);(0,e.h)(),N="home"}})),x.addEventListener("click",(()=>{if("menu"!=N){for(;E.firstChild;)E.removeChild(E.firstChild);(0,t.C)(),N="menu"}})),w.addEventListener("click",(()=>{if("contact"!=N){for(;E.firstChild;)E.removeChild(E.firstChild);(0,o.s)(),N="contact"}}))})()})();