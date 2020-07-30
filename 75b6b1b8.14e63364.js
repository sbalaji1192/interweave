(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),i=(n(0),n(75)),r=n(79),c=n(80),l={title:"Emoji extension",sidebar_label:"Emojis"},s={unversionedId:"exts/emoji",id:"exts/emoji",isDocsHomePage:!1,title:"Emoji extension",description:"Who loves emojis? Everyone loves emojis! This package provides support for rendering emoji, either",source:"@site/docs/exts/emoji.mdx",permalink:"/docs/exts/emoji",editUrl:"https://github.com/milesj/interweave/edit/master/website/docs/exts/emoji.mdx",sidebar_label:"Emojis",sidebar:"docs",previous:{title:"Autolink extension",permalink:"/docs/exts/autolink"},next:{title:"Emoji picker",permalink:"/docs/exts/emoji-picker"}},b=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Matching emojis",id:"matching-emojis",children:[{value:"Props",id:"props",children:[]},{value:"Result",id:"result",children:[]}]},{value:"Loading emoji data",id:"loading-emoji-data",children:[]},{value:"Converting emoticons",id:"converting-emoticons",children:[]},{value:"Converting shortcodes",id:"converting-shortcodes",children:[]},{value:"Displaying SVGs or PNGs",id:"displaying-svgs-or-pngs",children:[]},{value:"Displaying unicode characters",id:"displaying-unicode-characters",children:[]},{value:"Automatic enlargement",id:"automatic-enlargement",children:[]}],m={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Who loves emojis? Everyone loves emojis! This package provides support for rendering emoji, either\ntheir unicode character, or with SVG/PNGs. It utilizes ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/emojibase"}),"Emojibase")," for accurate and\nup-to-date data."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave\n  content=\"This will convert emoji unicode characters (\ud83c\udf00), shortcodes (:cyclone:), and emoticons to SVGs! :)\"\n  matchers={[\n    new EmojiMatcher('emoji', {\n      convertEmoticon: true,\n      convertShortcode: true,\n    }),\n  ]}\n  emojiPath={getSvgPathForEmoji}\n/>\n")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/milesj/emojibase"}),"Emojibase"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(r.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add interweave interweave-emoji emojibase\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install interweave interweave-emoji emojibase\n")))),Object(i.b)("h2",{id:"matching-emojis"},"Matching emojis"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"EmojiMatcher")," makes use of complex regex patterns provided by Emojibase to find and replace\nemoji unicode sequences with SVG/PNGS."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import Interweave from 'interweave';\nimport { EmojiMatcher } from 'interweave-emoji';\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave content=\"Emoji unicode character: \ud83c\udf00\" matchers={[new EmojiMatcher('emoji')]} />\n")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("p",null,"The following props are available for ",Object(i.b)("inlineCode",{parentName:"p"},"<Emoji />")," components, all of which should be passed to an\n",Object(i.b)("inlineCode",{parentName:"p"},"<Interweave />")," instance."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"emojiSize")," (",Object(i.b)("inlineCode",{parentName:"li"},"string | number"),") - The width and height of emojis. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"1em"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"emojiLargeSize")," (",Object(i.b)("inlineCode",{parentName:"li"},"string | number"),") - The width and height of enlarged emojis. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"3em"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"emojiPath")," (",Object(i.b)("inlineCode",{parentName:"li"},"string | func"),") - A path to the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#displaying-svgs-or-pngs"}),"PNG or SVG file"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enlargeEmoji")," (",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),") - Whether to enlarge the emoji or not. Automatically triggers via the\nmatcher but can be forced with this prop. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"renderUnicode")," (",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),") - Render the unicode character instead of an image. Defaults to\n",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h3",{id:"result"},"Result"),Object(i.b)("p",null,"Both unicode literal characters and escape sequences are supported when matching. If a match is\nfound, an ",Object(i.b)("inlineCode",{parentName:"p"},"<Emoji />")," component will be rendered and passed some of the following props."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"emoticon")," (",Object(i.b)("inlineCode",{parentName:"li"},"string"),") - If applicable, an emoticon for the specific emoji character."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hexcode")," (",Object(i.b)("inlineCode",{parentName:"li"},"string"),") - The hexcode for the specific emoji character."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"shortcode")," (",Object(i.b)("inlineCode",{parentName:"li"},"string"),") - The shortcode for the specific emoji character."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unicode")," (",Object(i.b)("inlineCode",{parentName:"li"},"string"),") - The unicode literal character.")),Object(i.b)("h2",{id:"loading-emoji-data"},"Loading emoji data"),Object(i.b)("p",null,"Before emoji can be rendered, emoji data must be loaded from a CDN. To do this, the ",Object(i.b)("inlineCode",{parentName:"p"},"useEmojiData()"),"\nhook can be used, which will fetch emoji data from Emojibase's CDN. The hook returns a tuple, with\nthe first item being an array of all emoji data, the second item being the source object (locale,\nversion, etc), and the third being the data manager instance."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import BaseInterweave, { InterweaveProps } from 'interweave';\nimport { useEmojiData } from 'interweave-emoji';\n\nexport default function Interweave(props: InterweaveProps) {\n  const [emojis, source, manager] = useEmojiData({ compact: false });\n\n  return <BaseInterweave {...props} emojiSource={source} />;\n}\n")),Object(i.b)("p",null,"The hook supports the following optional options."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"compact")," (",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),") - Whether to load the compact or full dataset. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"locale")," (",Object(i.b)("inlineCode",{parentName:"li"},"string"),") - The localized data to fetch. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"en"),".\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/milesj/emojibase/blob/master/docs/data.md#usage"}),"View supported locales"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"throwErrors")," (",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),") - Throw an error when the fetch fails. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"version")," (",Object(i.b)("inlineCode",{parentName:"li"},"string"),") - The ",Object(i.b)("inlineCode",{parentName:"li"},"emojibase-data")," release version to fetch. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"latest"),".\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/milesj/emojibase/blob/master/docs/api.md#fetchfromcdn"}),"Read more"),".")),Object(i.b)("h2",{id:"converting-emoticons"},"Converting emoticons"),Object(i.b)("p",null,"Emoticons have been around longer than emoji, but emoji are much nicer to look at. Some emoji, not\nall, have an associated emoticon that can be converted to an emoji character. For example, ",Object(i.b)("inlineCode",{parentName:"p"},":)"),"\nwould convert to \ud83d\ude42."),Object(i.b)("p",null,"To enable conversion of an emoticon to a unicode literal character, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"convertEmoticon"),"\noption to the matcher."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave\n  content=\"Smiley faces :) ;p :>]\"\n  matchers={[new EmojiMatcher('emoji', { convertEmoticon: true })]}\n/>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A list of supported emoticons can be found in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/emojibase/blob/master/packages/generator/src/resources/emoticons.ts"}),"Emojibase"),".")),Object(i.b)("h2",{id:"converting-shortcodes"},"Converting shortcodes"),Object(i.b)("p",null,"Shortcodes provide an easy non-unicode alternative for supporting emoji, and are represented by a\nword (or two) surrounded by two colons: ",Object(i.b)("inlineCode",{parentName:"p"},":boy:"),"."),Object(i.b)("p",null,"To enable conversion of a shortcode to a unicode literal character, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"convertShortcode"),"\noption to the matcher constructor."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave\n  content=\"Emoji shortcode: :cyclone:\"\n  matchers={[new EmojiMatcher('emoji', { convertShortcode: true })]}\n/>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A list of supported shortcodes can be found in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/milesj/emojibase/blob/master/packages/generator/src/resources/shortcodes.ts"}),"emojibase"),".")),Object(i.b)("h2",{id:"displaying-svgs-or-pngs"},"Displaying SVGs or PNGs"),Object(i.b)("p",null,"To begin, we must enable conversion of unicode characters to media (images, vector, etc), by\nenabling the ",Object(i.b)("inlineCode",{parentName:"p"},"convertUnicode")," option. Secondly, if you want to support shortcodes or emoticons,\nenable ",Object(i.b)("inlineCode",{parentName:"p"},"convertShortcode")," or ",Object(i.b)("inlineCode",{parentName:"p"},"convertEmoticon")," respectively."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"new EmojiMatcher('emoji', {\n  convertEmoticon: true,\n  convertShortcode: true,\n  convertUnicode: true,\n});\n")),Object(i.b)("p",null,"Now we need to provide an absolute path to the SVG/PNG file using the ",Object(i.b)("inlineCode",{parentName:"p"},"emojiPath")," prop. This path\nmust contain a ",Object(i.b)("inlineCode",{parentName:"p"},"{{hexcode}}")," token, which will be replaced by the hexadecimal codepoint (hexcode) of\nthe emoji."),Object(i.b)("p",null,"Or a function can be passed, which receives the hexcode as the 1st argument, and an object with\n",Object(i.b)("inlineCode",{parentName:"p"},"enlarged"),", ",Object(i.b)("inlineCode",{parentName:"p"},"smallSize"),", ",Object(i.b)("inlineCode",{parentName:"p"},"largeSize"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"size")," (either depending on enlarge state) properties."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Interweave\n  emojiPath=\"https://example.com/images/emoji/{{hexcode}}.png\"\n  matchers={[new EmojiMatcher('emoji')]}\n/>\n\n// OR\n\n<Interweave\n  emojiPath={(hexcode, { size }) => `https://example.com/images/emoji/${size}/${hexcode}.png`}\n  matchers={[new EmojiMatcher('emoji')]}\n/>\n")),Object(i.b)("p",null,"Both media formats make use of the ",Object(i.b)("inlineCode",{parentName:"p"},"img")," tag and will require an individual file, as sprites and\nicon fonts are not supported. The following resources can be used for downloading SVG/PNG icons."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://emojione.com/developers/"}),"JoyPixels")," (formerly EmojiOne)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/twitter/twemoji"}),"Twemoji"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: SVGs require CORS to work correctly, so files will need to be stored locally, or within a\nCDN under the same domain. Linking to remote SVGs will not work -- use PNGs instead.")),Object(i.b)("p",null,"Lastly, to control the width and height of the ",Object(i.b)("inlineCode",{parentName:"p"},"img"),", use the ",Object(i.b)("inlineCode",{parentName:"p"},"emojiSize")," prop, which accepts a\nnumber or string. If a number is provided, it'll be passed down to React, which defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"px"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<Interweave emojiSize={32} emojiLargeSize={96} /> // 32px, 96px\n<Interweave emojiSize="1em" emojiLargeSize="3em" /> // 1em, 3em\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"I suggest using ",Object(i.b)("inlineCode",{parentName:"p"},"em")," scaling as the emoji will scale relative to the text around it.")),Object(i.b)("h2",{id:"displaying-unicode-characters"},"Displaying unicode characters"),Object(i.b)("p",null,"To display native unicode characters as is, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"renderUnicode")," option to the matcher\nconstructor. This option will override the rendering of SVGs or PNGs, and works quite well alongside\nshortcode or emoticon conversion."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"new EmojiMatcher('emoji', { renderUnicode: true });\n")),Object(i.b)("h2",{id:"automatic-enlargement"},"Automatic enlargement"),Object(i.b)("p",null,"When an emoji is the only character within the content, it will automatically be enlarged. To\ndisable this functionality, set ",Object(i.b)("inlineCode",{parentName:"p"},"enlargeThreshold")," to 0. Inversely, if you want to increase the\nthreshold in which emojis are enlarged, increase the count."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"new EmojiMatcher('emoji', { enlargeThreshold: 3 });\n")),Object(i.b)("p",null,"For example, if ",Object(i.b)("inlineCode",{parentName:"p"},"enlargeThreshold")," is set to 3, and 3 emojis are found, all will be enlarged."))}p.isMDXComponent=!0},74:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,u=m["".concat(r,".").concat(d)]||m[d]||p[d]||i;return n?o.a.createElement(u,c(c({ref:t},s),{},{components:n})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},78:function(e,t,n){"use strict";var a=n(0),o=n(77);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},79:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(78),r=n(74),c=n(47),l=n.n(c);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:m,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:u}=Object(i.a)(),[j,h]=Object(a.useState)(c);if(null!=p){const e=d[p];null!=e&&e!==j&&m.some(t=>t.value===e)&&h(e)}const O=e=>{h(e),null!=p&&u(p,e)},f=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},m.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===j)[0]))}},80:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);