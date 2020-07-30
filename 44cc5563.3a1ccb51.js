(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(75)),c=n(79),i=n(80),l={title:"Matchers"},s={unversionedId:"matchers",id:"matchers",isDocsHomePage:!1,title:"Matchers",description:"Matchers are the backbone of Interweave as they allow arbitrary insertion of React elements into",source:"@site/docs/matchers.mdx",permalink:"/docs/matchers",editUrl:"https://github.com/milesj/interweave/edit/master/website/docs/matchers.mdx",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/"},next:{title:"Filters",permalink:"/docs/filters"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Creating a matcher",id:"creating-a-matcher",children:[]},{value:"Rendered elements",id:"rendered-elements",children:[]},{value:"Greedy matching",id:"greedy-matching",children:[]}],p={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Matchers are the backbone of Interweave as they allow arbitrary insertion of React elements into\nstrings, through the use of regex pattern matching. This feature is quite powerful as it opens up\nmany possibilities."),Object(o.b)("p",null,'It works by matching patterns within a string, deconstructing it into tokens, and reconstructing it\nback into an array of strings and React elements, therefore, permitting it to be rendered by React\'s\nvirtual DOM layer. For example, take the following string "Check out my website,\ngithub.com/milesj!", and a ',Object(o.b)("inlineCode",{parentName:"p"},"UrlMatcher"),", you'd get the following array."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"['Check out my website, ', <Url>github.com/milesj</Url>, '!'];\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Matchers can be passed to each render of ",Object(o.b)("inlineCode",{parentName:"p"},"<Interweave />"),". When adding a matcher, a unique\ncamel-case name must be passed to the constructor."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave matchers={[new CustomMatcher('foo')]} />\n")),Object(o.b)("p",null,"To disable all matchers, per render, pass the ",Object(o.b)("inlineCode",{parentName:"p"},"disableMatchers")," prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave disableMatchers />\n")),Object(o.b)("p",null,'To disable a single matcher, you can pass a prop that starts with "no", and ends with the unique\nname of the matcher (the one passed to the constructor). Using the example above, you can pass a\n',Object(o.b)("inlineCode",{parentName:"p"},"noFoo")," prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave noFoo />\n")),Object(o.b)("h2",{id:"creating-a-matcher"},"Creating a matcher"),Object(o.b)("p",null,"To create a custom matcher, implement a class that extends the base ",Object(o.b)("inlineCode",{parentName:"p"},"Matcher")," class, or use a plain\nobject. Both approaches will require the following methods to be defined (excluding callbacks)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"match(string: string)")," - Match the passed string using a regex pattern. This method must return\n",Object(o.b)("inlineCode",{parentName:"li"},"null")," if no match is found (will abort matching), else it must return an object with the\nproperties below. Any additional keys defined in this object will be passed as props to the\nrendered element.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"index")," (",Object(o.b)("inlineCode",{parentName:"li"},"number"),") - The starting index in which the match was found (is provided by the native\n",Object(o.b)("inlineCode",{parentName:"li"},"String#match()"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"length")," (",Object(o.b)("inlineCode",{parentName:"li"},"number"),") - The original length of the match, before it was potentially modified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"match")," (",Object(o.b)("inlineCode",{parentName:"li"},"string"),") - The content that was matched (is usually the 0-index in the result)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"valid")," (",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),") - Whether the match is valid or not. This can be used to control false\npositives."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"void")," (",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),") - Mark the result as a void element. Cannot be nested by other matchers, nor\ncontain children (is self closing)."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"replaceWith(children: ChildrenNode, props: object)")," - Returns a React element that replaces the\nmatched content in the string. The parsed children are passed as the 1st argument, and any matched\nprops or parent props are passed as the 2nd argument."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createElement(children: ChildrenNode, props: object)")," - The same as ",Object(o.b)("inlineCode",{parentName:"li"},"replaceWith")," but used in\nobject matchers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"asTag()")," - The HTML tag name of the replacement element."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onBeforeParse(content: string, props: object)")," - Callback that fires before parsing. Is passed\nthe source string and must return a string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onAfterParse(nodes: Node[], props: object)")," - Callback that fires after parsing. Is passed an\narray of strings/elements and must return an array.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Using the plain object approach requires more implementation and a higher overhead.")),Object(o.b)(c.a,{groupId:"matcher-type",defaultValue:"class",values:[{label:"Class",value:"class"},{label:"Object",value:"object"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"class",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { Matcher, MatchResponse, Node } from 'interweave';\n\nclass CustomMatcher extends Matcher<CustomProps> {\n  match(string: string): MatchResponse<{ extraProp: string }> | null {\n    const result = string.match(/foo/);\n\n    if (!result) {\n      return null;\n    }\n\n    return {\n      index: result.index!,\n      length: result[0].length,\n      match: result[0],\n      extraProp: 'foo', // or result[1], etc\n      valid: true,\n    };\n  }\n\n  replaceWith(children: ChildrenNode, props: CustomProps): Node {\n    return <span {...props}>{children}</span>;\n  }\n\n  asTag(): string {\n    return 'span';\n  }\n}\n\nconst matcher = new CustomMatcher('foo');\n"))),Object(o.b)(i.a,{value:"object",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { MatcherInterface } from 'interweave';\n\nconst matcher: MatcherInterface<CustomProps> = {\n  inverseName: 'noFoo',\n  propName: 'foo',\n  match(string) {\n    const result = string.match(/foo/);\n\n    if (!result) {\n      return null;\n    }\n\n    return {\n      index: result.index!,\n      length: result[0].length,\n      match: result[0],\n      extraProp: 'foo', // or result[1], etc\n      valid: true,\n    };\n  },\n  createElement(children, props) {\n    return <span {...props}>{children}</span>;\n  },\n  asTag() {\n    return 'span';\n  },\n};\n")))),Object(o.b)("p",null,"To ease the matching process, there is a ",Object(o.b)("inlineCode",{parentName:"p"},"doMatch()")," method on ",Object(o.b)("inlineCode",{parentName:"p"},"Matcher")," that handles the ",Object(o.b)("inlineCode",{parentName:"p"},"null")," and\nobject building logic. Simply pass it a regex pattern and a callback to build the object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class CustomMatcher extends Matcher<CustomProps> {\n  // ...\n\n  match(string: string): MatchResponse<{ extraProp: string }> | null {\n    return this.doMatch(string, /foo/, (matches) => ({\n      extraProp: 'foo',\n    }));\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When the matcher finds a match, the parser will temporarily wrap the match in a token that looks\nlike the following: ",Object(o.b)("inlineCode",{parentName:"p"},"{{{foo1}}}matched content{{{/foo1}}}"),". This token ",Object(o.b)("em",{parentName:"p"},"is present")," for subsequent\nmatchers, so be weary of the patterns you're attempting to match, as they may capture the\ntemporary tokens.")),Object(o.b)("h2",{id:"rendered-elements"},"Rendered elements"),Object(o.b)("p",null,"When a match is found, a React element is rendered (from a React component) from either the\nmatcher's ",Object(o.b)("inlineCode",{parentName:"p"},"replaceWith()")," method, or from a factory. What's a factory you ask? Simply put, it's a\ncomponent reference passed to the constructor of a matcher, allowing the rendered element to be\ncustomized for built-in or third-party matchers."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"new CustomMatcher('foo', {}, SomeComponent);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Elements returned from ",Object(o.b)("inlineCode",{parentName:"p"},"replaceWith()")," or the factory must return an HTML element with the same\ntag name as defined by ",Object(o.b)("inlineCode",{parentName:"p"},"asTag()"),".")),Object(o.b)("h2",{id:"greedy-matching"},"Greedy matching"),Object(o.b)("p",null,"By default, a matcher will continually run until it exhausts all matches. However, each iteration\nwill shorten the string being matched until there is no more. This may be problematic if your\nmatcher uses multiple patterns, as they can happen in any order, or can be found at any point in the\nstring."),Object(o.b)("p",null,"To work around this, a matcher can be marked as greedy to continually run against the whole string\neach iteration, until fully exhausted. Set the ",Object(o.b)("inlineCode",{parentName:"p"},"greedy")," property to enable."),Object(o.b)(c.a,{groupId:"matcher-type",defaultValue:"class",values:[{label:"Class",value:"class"},{label:"Object",value:"object"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"class",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { Matcher } from 'interweave';\n\nclass CustomMatcher extends Matcher<CustomProps> {\n  greedy: boolean = true;\n\n  // ...\n}\n"))),Object(o.b)(i.a,{value:"object",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { MatcherInterface } from 'interweave';\n\nconst matcher: MatcherInterface<CustomProps> = {\n  greedy: true,\n\n  // ...\n};\n")))))}u.isMDXComponent=!0},74:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},78:function(e,t,n){"use strict";var a=n(0),r=n(77);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},79:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(78),c=n(74),i=n(47),l=n.n(i);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:p,groupId:u}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(o.a)(),[d,f]=Object(a.useState)(i);if(null!=u){const e=m[u];null!=e&&e!==d&&p.some(t=>t.value===e)&&f(e)}const g=e=>{f(e),null!=u&&h(u,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},80:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);