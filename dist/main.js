(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"@font-face {\n    font-family: 'Roboto', sans-serif;\n    src: url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    border: 1px solid red;\n    font-family: 'Roboto', sans-serif;\n    color: #8B4513;\n    \n}\n\n#container {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 10fr;\n    border: 1px solid blue;\n}\n\n#sideBar {\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n    border: 1px solid #f7f7f7;\n    background-color: #f7f7f7;\n    font-size: 2em;\n    font-weight: 700;\n    box-shadow: 0px 10px 15px #6b6969;\n    display: flex;\n    flex-direction: column;\n    padding-left: 10%;\n    padding-top: 10%;\n    gap: 2em;\n    min-width: 250px;\n}\n\n#newTask button{\n    font-size: 1em;\n    background: none;\n    border: none;\n    color: #8B4513; /* Dark brown text color */\n    cursor: pointer;\n    border: 1px solid #8B4513;\n    border-radius: 20px;\n}\n\n#sideBarList ul{\n    list-style-type: none;\n    padding: 0;\n}\n#topBar {\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),d=n(216),u=n.n(d),l=n(589),p=n.n(l),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=[];document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("content")})),document.getElementById("newTask").addEventListener("click",(function(){const e=["Title","Description","Start Date","Due Date","Priority"],t=["title","description","startDate","dueDate","priority"],n=document.getElementById("content");if(n.style.cssText="display: flex; justify-content: center; align-items: center;",document.getElementById("inputContainer"))return;const r=document.createElement("div");r.setAttribute("id","inputContainer"),r.style.cssText="border 1px grey; background-color: #f7f7f7; border-radius: 25px; padding: 2rem; box-shadow: 10px 15px 20px #8E8E8E; font-size: 2em;",n.appendChild(r);const o=document.createElement("form");o.setAttribute("id","newTaskForm"),r.appendChild(o),o.style.cssText="display: flex; flex-direction: column; gap: 5px;";for(let n=0;n<t.length;n++){const r=document.createElement("label");if(r.textContent=e[n],"description"===t[n]){const e=document.createElement("textarea");e.setAttribute("name",t[n]),e.setAttribute("required","required"),e.style.cssText="height: 100px; width: 500px; font-size: 20px;",o.appendChild(r),o.appendChild(e)}else{const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("required","required"),e.setAttribute("name",t[n]),e.style.cssText="height: 30px; width: 500px; font-size: 20px;",o.appendChild(r),o.appendChild(e)}}const i=document.createElement("button");i.setAttribute("type","submit"),i.setAttribute("id","addEventButton"),i.textContent="ADD A TASK",i.style.cssText="font-size: 20px; border: 1px solid #8B4513; border-radius: 15px; color: #f7f7f7; background-color: #8B4513;",o.appendChild(i),o.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(o),n={};t.forEach(((e,t)=>{n[t]=e})),function(e){class t{constructor(e,t,n,r,o){this.title=e,this.description=t,this.startDate=n,this.dueDate=r,this.priority=o}}if(Object.keys(e).length>0){const n=new t(e.title,e.description,e.startDate,e.dueDate,e.priority);h.push(n)}!function(e){const t=document.getElementById("content");t.innerHTML="",document.createElement("div").setAttribute("id","todaysTasksDisplay"),e.forEach((e=>{const n=document.createElement("div");n.setAttribute("id","task"),n.style.cssText="border: 1px solid black; background: light-grey;",t.appendChild(n);const r=document.createElement("h4");r.textContent=e.title,n.appendChild(r),e.description,e.startDate,e.dueDate,e.priority}))}(h)}(n),o.reset()}))}))})()})();