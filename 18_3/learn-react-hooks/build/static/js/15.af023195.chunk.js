(this["webpackJsonplearn-react-hooks"]=this["webpackJsonplearn-react-hooks"]||[]).push([[15],{61:function(e,o,t){"use strict";t.r(o);var n=t(98),r=t(0),c=t.n(r);function u(){console.log("%c    Child: render start","color: MediumSpringGreen");var e=c.a.useState((function(){return console.log("%c    Child: useState(() => 0)","color: tomato"),0})),o=Object(n.a)(e,2),t=o[0],r=o[1];c.a.useEffect((function(){return console.log("%c    Child: useEffect(() => {})","color: LightCoral"),function(){console.log("%c    Child: useEffect(() => {}) cleanup \ud83e\uddf9","color: LightCoral")}})),c.a.useEffect((function(){return console.log("%c    Child: useEffect(() => {}, [])","color: MediumTurquoise"),function(){console.log("%c    Child: useEffect(() => {}, []) cleanup \ud83e\uddf9","color: MediumTurquoise")}}),[]),c.a.useEffect((function(){return console.log("%c    Child: useEffect(() => {}, [count])","color: HotPink"),function(){console.log("%c    Child: useEffect(() => {}, [count]) cleanup \ud83e\uddf9","color: HotPink")}}),[t]);var u=c.a.createElement("button",{onClick:function(){return r((function(e){return e+1}))}},t);return console.log("%c    Child: render end","color: MediumSpringGreen"),u}o.default=function(){console.log("%cApp: render start","color: MediumSpringGreen");var e=c.a.useState((function(){return console.log("%cApp: useState(() => false)","color: tomato"),!1})),o=Object(n.a)(e,2),t=o[0],r=o[1];c.a.useEffect((function(){return console.log("%cApp: useEffect(() => {})","color: LightCoral"),function(){console.log("%cApp: useEffect(() => {}) cleanup \ud83e\uddf9","color: LightCoral")}})),c.a.useEffect((function(){return console.log("%cApp: useEffect(() => {}, [])","color: MediumTurquoise"),function(){console.log("%cApp: useEffect(() => {}, []) cleanup \ud83e\uddf9","color: MediumTurquoise")}}),[]),c.a.useEffect((function(){return console.log("%cApp: useEffect(() => {}, [showChild])","color: HotPink"),function(){console.log("%cApp: useEffect(() => {}, [showChild]) cleanup \ud83e\uddf9","color: HotPink")}}),[t]);var l=c.a.createElement(c.a.Fragment,null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:t,onChange:function(e){return r(e.target.checked)}})," ","show child"),c.a.createElement("div",{style:{padding:10,margin:10,height:50,width:50,border:"solid"}},t?c.a.createElement(u,null):null));return console.log("%cApp: render end","color: MediumSpringGreen"),l}},96:function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));var n=t(97);function r(e,o){if(e){if("string"===typeof e)return Object(n.a)(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(n.a)(e,o):void 0}}},97:function(e,o,t){"use strict";function n(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=e[t];return n}t.d(o,"a",(function(){return n}))},98:function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));var n=t(96);function r(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,c=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(t.push(u.value),!o||t.length!==o);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return t}}(e,o)||Object(n.a)(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=15.af023195.chunk.js.map