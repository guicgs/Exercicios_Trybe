(this["webpackJsonplearn-react-hooks"]=this["webpackJsonplearn-react-hooks"]||[]).push([[30],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||r;return n?o.a.createElement(h,c({ref:t},s,{components:n})):o.a.createElement(h,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},102:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))},65:function(e,t,n){"use strict";n.r(t),n.d(t,"readingTime",(function(){return r})),n.d(t,"default",(function(){return c})),n.d(t,"tableOfContents",(function(){return l})),n.d(t,"frontMatter",(function(){return s}));var a=n(102),o=(n(0),n(101)),r={text:"4 min read",minutes:3.14,time:188400,words:628},i={};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"useeffect-persistent-state"},"useEffect: persistent state"),Object(o.a)("h2",{id:"background"},"Background"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"React.useEffect")," is a built-in hook that allows you to run some custom code\nafter React renders (and re-renders) your component to the DOM. It accepts a\ncallback function which React will call after the DOM has been updated:"),Object(o.a)("pre",null,Object(o.a)("code",Object.assign({parentName:"pre"},{className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// your side-effect code here.</span>\n  <span class="token comment">// this is where you can make HTTP requests or interact with browser APIs.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n'}}))),Object(o.a)("p",null,"Feel free to take a look at ",Object(o.a)("inlineCode",{parentName:"p"},"02-hook-flow.png")," if you\u2019re interested in the\ntiming of when your functions are run. This will make more sense after finishing\nthe exercises/extra credit/instruction."),Object(o.a)("h2",{id:"exercise"},"Exercise"),Object(o.a)("p",null,"In this exercise, we\u2019re going to enhance our ",Object(o.a)("inlineCode",{parentName:"p"},"<Greeting />")," component to get\nit\u2019s initial state value from localStorage (if available) and keep localStorage\nupdated as the ",Object(o.a)("inlineCode",{parentName:"p"},"name")," is updated."),Object(o.a)("h2",{id:"extra-credit"},"Extra Credit"),Object(o.a)("h3",{id:"-lazy-state-initialization"},"\ud83d\udcaf lazy state initialization"),Object(o.a)("p",null,"Right now, every time our component function is run, our function reads from\nlocalStorage. This is problematic because it could be a performance bottleneck\n(reading from localStorage can be slow). And what\u2019s more we only actually need\nto know the value from localStorage the first time this component is rendered!\nSo the additional reads are wasted effort."),Object(o.a)("p",null,"To avoid this problem, React\u2019s useState hook allows you to pass a function\ninstead of the actual value, and then it will only call that function to get the\nstate value when the component is rendered the first time. So you can go from\nthis: ",Object(o.a)("inlineCode",{parentName:"p"},"React.useState(someExpensiveComputation())")," To this:\n",Object(o.a)("inlineCode",{parentName:"p"},"React.useState(() => someExpensiveComputation())")),Object(o.a)("p",null,"And the ",Object(o.a)("inlineCode",{parentName:"p"},"someExpensiveComputation")," function will only be called when it\u2019s\nneeded!"),Object(o.a)("p",null,"Make the ",Object(o.a)("inlineCode",{parentName:"p"},"React.useState")," call use lazy initialization to avoid a performance\nbottleneck of reading into localStorage on every render."),Object(o.a)("h3",{id:"-effect-dependencies"},"\ud83d\udcaf effect dependencies"),Object(o.a)("p",null,"The callback we\u2019re passing to ",Object(o.a)("inlineCode",{parentName:"p"},"React.useEffect")," is called after ",Object(o.a)("em",{parentName:"p"},"every")," render\nof our component (including re-renders). This is exactly what we want because we\nwant to make sure that the ",Object(o.a)("inlineCode",{parentName:"p"},"name")," is saved into localStorage whenever it\nchanges, but there are various reasons a component can be re-rendered (for\nexample, when a parent component in the application tree gets re-rendered)."),Object(o.a)("p",null,"Really, we ",Object(o.a)("em",{parentName:"p"},"only")," want localStorage to get updated when the ",Object(o.a)("inlineCode",{parentName:"p"},"name")," state\nactually changes. It doesn\u2019t need to re-run any other time. Luckily for us,\n",Object(o.a)("inlineCode",{parentName:"p"},"React.useEffect"),' allows you to pass a second argument called the "dependency\narray" which signals to React that your effect callback function should be\ncalled when (and only when) those dependencies change. So we can use this to\navoid doing unnecessary work!'),Object(o.a)("p",null,"Add a dependencies array for ",Object(o.a)("inlineCode",{parentName:"p"},"React.useEffect")," to avoid the callback being\ncalled too frequently."),Object(o.a)("h3",{id:"-advanced-custom-hooks"},"\ud83d\udcaf advanced custom hooks"),Object(o.a)("p",null,"The best part of hooks is that if you find a bit of logic inside your component\nfunction that you think would be useful elsewhere, you can put that in another\nfunction and call it from the components that need it (just like regular\nJavaScript). These functions you create are called \u201ccustom hooks\u201d."),Object(o.a)("p",null,"Create a custom hook called ",Object(o.a)("inlineCode",{parentName:"p"},"useLocalStorageState")," for reusability of all this\nlogic."),Object(o.a)("h3",{id:"-flexible-localstorage-hook"},"\ud83d\udcaf flexible localStorage hook"),Object(o.a)("p",null,"Take your custom ",Object(o.a)("inlineCode",{parentName:"p"},"useLocalStorageState")," hook and make it generic enough to\nsupport any data type (remember, you have to serialize objects to strings\u2026 use\n",Object(o.a)("inlineCode",{parentName:"p"},"JSON.stringify")," and ",Object(o.a)("inlineCode",{parentName:"p"},"JSON.parse"),"). Go wild with this!"),Object(o.a)("h2",{id:"notes"},"Notes"),Object(o.a)("p",null,"If you\u2019d like to learn more about when different hooks are called and the order\nin which they\u2019re called, then open up ",Object(o.a)("inlineCode",{parentName:"p"},"src/examples/hook-flow.png")," and\n",Object(o.a)("inlineCode",{parentName:"p"},"src/examples/hook-flow.js"),". Play around with that a bit and hopefully that will\nhelp solidify this for you. Note that understanding this isn\u2019t absolutely\nnecessary for you to understand hooks, but it ",Object(o.a)("em",{parentName:"p"},"will")," help you in some situations\nso it\u2019s useful to understand."),Object(o.a)("h2",{id:"\ud83e\udd89-elaboration-and-feedback"},"\ud83e\udd89 Elaboration and Feedback"),Object(o.a)("div",null,Object(o.a)("span",null,"After the instruction, if you want to remember what you've just learned, then "),Object(o.a)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://ws.kcd.im/?ws=React%20Hooks%20%F0%9F%8E%A3&e=02%3A%20useEffect%3A%20persistent%20state&em="},"fill out the elaboration and feedback form.")))}c.isMDXComponent=!0;var l=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"background",level:2,title:"Background",children:[]},{id:"exercise",level:2,title:"Exercise",children:[]},{id:"extra-credit",level:2,title:"Extra Credit",children:[{id:"-lazy-state-initialization",level:3,title:"\ud83d\udcaf lazy state initialization",children:[]},{id:"-effect-dependencies",level:3,title:"\ud83d\udcaf effect dependencies",children:[]},{id:"-advanced-custom-hooks",level:3,title:"\ud83d\udcaf advanced custom hooks",children:[]},{id:"-flexible-localstorage-hook",level:3,title:"\ud83d\udcaf flexible localStorage hook",children:[]}]},{id:"notes",level:2,title:"Notes",children:[]},{id:"\ud83e\udd89-elaboration-and-feedback",level:2,title:"\ud83e\udd89 Elaboration and Feedback",children:[]}]},s={}}}]);
//# sourceMappingURL=30.508e1621.chunk.js.map