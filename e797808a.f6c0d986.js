(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=(n(0),n(75)),o=n(79),c=n(80);const i={title:"Server-side rendering"},l={unversionedId:"ssr",id:"ssr",isDocsHomePage:!1,title:"Server-side rendering",description:"Interweave utilizes the DOM to parse and validate HTML, and as such, requires a polyfill for",source:"@site/docs/ssr.mdx",permalink:"/docs/ssr",editUrl:"https://github.com/milesj/interweave/edit/master/website/docs/ssr.mdx",sidebar:"docs",previous:{title:"HTML parsing",permalink:"/docs/parser"}},s=[{value:"Interweave",id:"interweave",children:[]},{value:"JSDOM",id:"jsdom",children:[]}],u={rightToc:s};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Interweave utilizes the DOM to parse and validate HTML, and as such, requires a polyfill for\nserver-side rendering to work correctly. There are 2 options to solve this."),Object(r.b)("h2",{id:"interweave"},"Interweave"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/interweave-ssr"}),"interweave-ssr")," package provides a simple DOM\npolyfill, based on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/parse5"}),"parse5")," HTML parser."),Object(r.b)(o.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add interweave-ssr --dev\n"))),Object(r.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install interweave-ssr --save-dev\n")))),Object(r.b)("p",null,"Begin by importing and executing the ",Object(r.b)("inlineCode",{parentName:"p"},"polyfill()")," function ",Object(r.b)("em",{parentName:"p"},"before")," rendering React. This requires\nInterweave v12.5+ and will intercept the document parser with a custom implementation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { polyfill } from 'interweave-ssr';\n\npolyfill();\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This option is very ",Object(r.b)("em",{parentName:"p"},"lightweight")," and only supports the bare minimum. For example, nodes in the\ntree only support the ",Object(r.b)("inlineCode",{parentName:"p"},"getAttribute()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"hasAttribute()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"removeAttribute()"),", and\n",Object(r.b)("inlineCode",{parentName:"p"},"setAttribute()")," methods\n(",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave/blob/master/packages/ssr/src/index.ts#L67"}),"view all available"),").\nIf you encounter a situation where you need more functionality, please submit a pull request!")),Object(r.b)("h2",{id:"jsdom"},"JSDOM"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tmpvar/jsdom"}),"JSDOM")," is a full DOM implementation within Node, and as such, can\neasily polyfill the document. This approach may be heavy but is the most robust."),Object(r.b)(o.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add jsdom --dev\n"))),Object(r.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install jsdom --save-dev\n")))),Object(r.b)("p",null,"Begin by creating an instance and setting the ",Object(r.b)("inlineCode",{parentName:"p"},"window")," and ",Object(r.b)("inlineCode",{parentName:"p"},"document")," globals before rendering\nReact."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import JSDOM from 'jsdom';\n\nglobal.window = new JSDOM('', { url: 'http://localhost' });\nglobal.document = global.window.document;\n")))}p.isMDXComponent=!0},74:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},78:function(e,t,n){"use strict";var a=n(0),r=n(77);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},79:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(78),c=n(74),i=n(47),l=n.n(i);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(o.a)(),[f,O]=Object(a.useState)(i);if(null!=b){const e=m[b];null!=e&&e!==f&&p.some(t=>t.value===e)&&O(e)}const v=e=>{O(e),null!=b&&d(b,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>v(e),onClick:()=>v(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},80:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);