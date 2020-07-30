(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),i=(n(0),n(75)),o=n(79),c=n(80),s={title:"Emoji picker"},l={unversionedId:"exts/emoji-picker",id:"exts/emoji-picker",isDocsHomePage:!1,title:"Emoji picker",description:"A React based emoji picker powered by Interweave and",source:"@site/docs/exts/emoji-picker.mdx",permalink:"/docs/exts/emoji-picker",editUrl:"https://github.com/milesj/interweave/edit/master/website/docs/exts/emoji-picker.mdx",sidebar:"docs",previous:{title:"Emoji extension",permalink:"/docs/exts/emoji"},next:{title:"Composition",permalink:"/docs/compose"}},b=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Allow and block lists",id:"allow-and-block-lists",children:[]},{value:"Commonly used",id:"commonly-used",children:[]},{value:"Changing appearance",id:"changing-appearance",children:[]},{value:"Customizing icons",id:"customizing-icons",children:[]},{value:"Customizing styles",id:"customizing-styles",children:[]},{value:"Translating messages",id:"translating-messages",children:[]}],p={rightToc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A React based emoji picker powered by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave"}),"Interweave")," and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/emojibase"}),"Emojibase"),". Supports the following features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Customizable theme, styles, and icons."),Object(i.b)("li",{parentName:"ul"},"Configurable element and render order."),Object(i.b)("li",{parentName:"ul"},"Localized emoji annotations."),Object(i.b)("li",{parentName:"ul"},"Emoji grouping and categorization."),Object(i.b)("li",{parentName:"ul"},"Multi-word deep search."),Object(i.b)("li",{parentName:"ul"},"Skin tone palette selector."),Object(i.b)("li",{parentName:"ul"},"Variation gallery selector."),Object(i.b)("li",{parentName:"ul"},"Enlarged preview on hover."),Object(i.b)("li",{parentName:"ul"},"Emoticons and shortcodes."),Object(i.b)("li",{parentName:"ul"},"Recently and frequently used."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bvaughn/react-window"}),"Virtualized rendering"),"."),Object(i.b)("li",{parentName:"ul"},"And much more!")),Object(i.b)("img",{src:"https://raw.githubusercontent.com/milesj/interweave/master/docs/img/slack.png",height:"350"})," ",Object(i.b)("img",{src:"https://raw.githubusercontent.com/milesj/interweave/master/docs/img/twitter.png",height:"350"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave/blob/master/tests/slack.css"}),"Slack")," and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave/blob/master/tests/twitter.css"}),"Twitter")," themes provided as\nan example of the library's robustness.")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"React 16.8+"),Object(i.b)("li",{parentName:"ul"},"Interweave + Emoji"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/milesj/emojibase"}),"Emojibase"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add interweave interweave-emoji interweave-emoji-picker emojibase\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install interweave interweave-emoji interweave-emoji-picker emojibase\n")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"To utilize the emoji picker, import and render the ",Object(i.b)("inlineCode",{parentName:"p"},"<EmojiPicker />")," component. The picker renders\nin place, so any positioning or display toggling should be done manually."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import EmojiPicker from 'interweave-emoji-picker';\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker emojiSize={24} emojiLargeSize={48} emojiPath={getSvgPathForEmoji} />\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./emoji.md#displaying-svgs-or-pngs"}),"sizing and path emoji props")," are required. View the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave/blob/master/packages/emoji-picker/src/Picker.tsx"}),"TypeScript interface"),"\nfor a list of all available props."),Object(i.b)("h2",{id:"allow-and-block-lists"},"Allow and block lists"),Object(i.b)("p",null,"Sometimes specific emojis should not be used, like the poop emoji. This can easily be achieved with\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"blockList")," prop, which accepts an array of hexcodes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker\n  blockList={[\n    '1F4A9', // poop\n    '1F52B', // gun\n  ]}\n/>\n")),Object(i.b)("p",null,"The inverse, the ",Object(i.b)("inlineCode",{parentName:"p"},"allowList")," prop, can be used for situations where a restricted list of emojis\nshould ",Object(i.b)("em",{parentName:"p"},"only")," be used. This also accepts an array of hexcodes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Only trees\n<EmojiPicker\n  allowList={[\n    '1F332', // evergreen\n    '1F333', // deciduous\n    '1F334', // palm\n    '1F384', // christmas\n    '1F38B', // tanabata\n  ]}\n/>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Not sure where to find a hexcode? Dig around ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/emojibase"}),"Emojibase"),".")),Object(i.b)("h2",{id:"commonly-used"},"Commonly used"),Object(i.b)("p",null,'When an emoji is selected (clicked on), we keep a history known as "commonly used", and display a\ncustom group within the emoji list. This history has two modes, recently used and frequently used,\nand can be customized with the ',Object(i.b)("inlineCode",{parentName:"p"},"commonMode")," prop. Selected emojis that fall past the\n",Object(i.b)("inlineCode",{parentName:"p"},"maxCommonlyUsed")," prop are trimmed from the history."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"recently-used")," - Tracks selected emojis from most recently selected to oldest."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"frequently-used")," - Tracks selected emojis using a counter, in descending order.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<EmojiPicker commonMode="frequently-used" />\n')),Object(i.b)("p",null,"The commonly used feature can be disabled with the ",Object(i.b)("inlineCode",{parentName:"p"},"disableCommonlyUsed")," prop."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Commonly used emojis are stored in local storage.")),Object(i.b)("h2",{id:"changing-appearance"},"Changing appearance"),Object(i.b)("p",null,"This picker is quite customizable, if not the most customizable, when it comes to its visual\nappearance. Every aspect of the picker can be changed, whether it be the order of elements, hiding\nor showing elements, the number of emojis to render, and more. I'll try to keep this rather short."),Object(i.b)("p",null,"To change the number of visible emojis rendered in the list, define the ",Object(i.b)("inlineCode",{parentName:"p"},"columnCount")," and ",Object(i.b)("inlineCode",{parentName:"p"},"rowCount"),"\nprops."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker columnCount={15} rowCount={5} />\n")),Object(i.b)("p",null,"To change the default selected group tab or skin tone palette, define the ",Object(i.b)("inlineCode",{parentName:"p"},"defaultGroup")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"defaultSkinTone")," props respectively."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<EmojiPicker defaultGroup="food-drink" defaultSkinTone="medium" />\n')),Object(i.b)("p",null,"By default, the picker renders elements in the following order: emoji being hovered preview at the\ntop, followed by the list of emojis, the search bar, and the group tabs. This order can be changed\nwith the ",Object(i.b)("inlineCode",{parentName:"p"},"displayOrder")," prop, which accepts an array of strings."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker displayOrder={['groups', 'search', 'emojis', 'preview']} />\n")),Object(i.b)("p",null,"To disable one of the elements mentioned previously, pass a ",Object(i.b)("inlineCode",{parentName:"p"},"disableGroups"),", ",Object(i.b)("inlineCode",{parentName:"p"},"disablePreview"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"disableSearch"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"disableSkinTones")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker disableSearch disableSkinTones />\n")),Object(i.b)("p",null,"To hide emoticons or shortcodes within the preview, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"hideEmoticon")," or ",Object(i.b)("inlineCode",{parentName:"p"},"hideShortcodes"),"\nprops. Furthermore, to hide group headers (but still use group tabs), pass ",Object(i.b)("inlineCode",{parentName:"p"},"hideGroupHeaders"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker hideEmoticon hideGroupHeaders />\n")),Object(i.b)("h2",{id:"customizing-icons"},"Customizing icons"),Object(i.b)("p",null,"To customize the icons displayed in the group tabs, pass an object of nodes to the ",Object(i.b)("inlineCode",{parentName:"p"},"groupIcons"),"\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave/blob/master/packages/emoji-picker/src/constants.ts#L56"}),"list"),")\nprop. By default the picker uses native emoji but can render React components."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker\n  groupIcons={{\n    activities: <IconBasketball />,\n  }}\n/>\n")),Object(i.b)("h2",{id:"customizing-styles"},"Customizing styles"),Object(i.b)("p",null,"The picker is not styled by default as it allows consumers to easily customize the CSS to match\ntheir application. There are 2 approaches to styling the picker, the first by writing CSS that\nfollows the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave/blob/master/packages/emoji-picker/src/constants.ts#L101"}),"class names provided by Interweave"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".interweave-picker__picker {\n  position: 'absolute';\n  bottom: 100%;\n}\n")),Object(i.b)("p",null,"The second by writing CSS and passing an object of custom class names to the ",Object(i.b)("inlineCode",{parentName:"p"},"classNames")," prop. This\napproach enables non-standard solutions, like CSS modules and CSS-in-JS."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker\n  classNames={{\n    picker: 'picker-7sa92dsd',\n  }}\n/>\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"emojiPadding")," prop is an exception to the CSS pattern, as it pads the emoji button using inline\nstyles. This is necessary for accurately computing of widths and heights."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker emojiPadding={5} />\n")),Object(i.b)("h2",{id:"translating-messages"},"Translating messages"),Object(i.b)("p",null,"Localization is important, and thus, all messages within the picker can be translated with the\n",Object(i.b)("inlineCode",{parentName:"p"},"messages")," prop. This prop accepts an object of message keys to translated strings. The list of\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/interweave/blob/master/packages/emoji-picker/src/constants.ts#L132"}),"available messages can be found here"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<EmojiPicker\n  locale=\"ja\"\n  messages={{\n    search: '\u30b5\u30fc\u30c1',\n  }}\n/>\n")))}m.isMDXComponent=!0},74:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},78:function(e,t,n){"use strict";var a=n(0),r=n(77);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},79:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(78),o=n(74),c=n(47),s=n.n(c);const l=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:m}=e,{tabGroupChoices:u,setTabGroupChoices:d}=Object(i.a)(),[j,h]=Object(a.useState)(c);if(null!=m){const e=u[m];null!=e&&e!==j&&p.some(t=>t.value===e)&&h(e)}const O=e=>{h(e),null!=m&&d(m,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===j)[0]))}},80:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);