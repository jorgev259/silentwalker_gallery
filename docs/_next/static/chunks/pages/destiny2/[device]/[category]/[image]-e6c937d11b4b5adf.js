(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{3790:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/destiny2/[device]/[category]/[image]",function(){return t(9667)}])},9459:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(5893),o=t(4184),a=t.n(o),l=t(1664),c=t(605),s=t.n(c);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}var d={desktop:"col-12 col-sm-6 col-md-3",mobile:"col-6 col-sm-4 col-md-2"};function m(e){var n=e.filePath,t=e.name,o=e.device,c=e.urlPath,i=void 0===c?"":c,u="/images/thumbs/".concat(n.replace("wallpapers/",""));return(0,r.jsx)("div",{className:a()("px-0",s().thumb,s()[o],d[o]),children:(0,r.jsx)(l.default,{href:i,scroll:!1,children:(0,r.jsx)("a",{className:"position-relative w-100 h-100 d-block",children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:u.replace(".jpg",".webp"),alt:t,type:"image/webp"}),(0,r.jsx)("img",{src:u,alt:t})]})})})})}function f(e){var n=e.name,t=e.show,o=e.imgPath,c=e.urlPath,i=(void 0===c?"":c).split("/").slice(0,-1).join("/");return(0,r.jsx)("div",{className:a()("modal fade",s().modal,{show:t}),children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsx)("div",{className:a()("modal-body p-0"),children:t&&(0,r.jsx)("img",{className:"w-100",src:o,alt:n})}),(0,r.jsxs)("div",{className:"modal-footer",children:[(0,r.jsx)("div",{className:"mx-auto",children:n}),(0,r.jsxs)("div",{className:"mx-auto",children:[(0,r.jsx)("a",{href:o,className:"modal-btn btn btn-outline-secondary",download:!0,children:"Download"}),(0,r.jsx)(l.default,{href:i||"/",scroll:!1,children:(0,r.jsx)("a",{children:(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary ms-2 modal-btn",children:"Close"})})})]})]})]})})})}function p(e){var n=e.device,t=void 0===n?"Desktop":n,o=e.images,l=void 0===o?[]:o,c=e.parent,i=e.modal,d=e.popup,p=e.sort,b=e.search,h=l.filter((function(e){return e.name.toLowerCase().includes(b)})),v="new"===p?h.sort((function(e,n){return e.mtimeMs-n.mtimeMs})).reverse():h.sort((function(e,n){return e.name<n.name?-1:e.name>n.name?1:0}));return(0,r.jsxs)("div",{className:a()("container-fluid flex-fill px-0",s().root),style:{paddingTop:d?"130px":"60px"},children:[(0,r.jsx)(f,u({},i||{},{device:t,show:!!i,parent:c})),(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("div",{className:"row",children:v.map((function(e){return(0,r.jsx)(m,u({device:t,parent:c},e),e.urlPath)}))})})]})}},9667:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return l},default:function(){return c}});var r=t(5893),o=t(9459);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=!0;function c(e){return(0,r.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},e))}},605:function(e){e.exports={root:"gallery_root__vn8_8",thumb:"gallery_thumb__Aj6DQ",desktop:"gallery_desktop__Qg2_R",mobile:"gallery_mobile__q_f2Q"}}},function(e){e.O(0,[774,888,179],(function(){return n=3790,e(e.s=n);var n}));var n=e.O();_N_E=n}]);