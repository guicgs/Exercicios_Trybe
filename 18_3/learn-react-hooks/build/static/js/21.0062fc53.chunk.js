(this["webpackJsonplearn-react-hooks"]=this["webpackJsonplearn-react-hooks"]||[]).push([[21],{78:function(t,e,n){"use strict";n.r(e);var r=n(98),a=n(0),o=n.n(a);function u(t){var e=t.initialName,n=void 0===e?"":e,a=o.a.useState((function(){return window.localStorage.getItem("name")||n})),u=Object(r.a)(a,2),i=u[0],c=u[1];return o.a.useEffect((function(){window.localStorage.setItem("name",i)})),o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"name"},"Name: "),o.a.createElement("input",{value:i,onChange:function(t){c(t.target.value)},id:"name"})),i?o.a.createElement("strong",null,"Hello ",i):"Please type your name")}e.default=function(){return o.a.createElement(u,null)}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(97);function a(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},97:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(96);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=21.0062fc53.chunk.js.map