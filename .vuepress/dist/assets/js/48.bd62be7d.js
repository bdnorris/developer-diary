(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{272:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-effects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-effects","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Effects")]),t._v(" "),a("h2",{attrs:{id:"shadows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadows","aria-hidden":"true"}},[t._v("#")]),t._v(" Shadows")]),t._v(" "),a("p",[t._v("There are two kinds of shadows we can use. One for text, and the other for elements (boxes).")]),t._v(" "),a("h3",{attrs:{id:"text-shadows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-shadows","aria-hidden":"true"}},[t._v("#")]),t._v(" Text shadows")]),t._v(" "),a("p",[t._v("You can define shadows on your text by using the "),a("code",[t._v("text-shadow")]),t._v(" property, and giving it four values.")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{attrs:{class:"token property"}},[t._v("text-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px 1px 1px #000"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("The first value is the x, or horizontal offset, the second is the y, or vertical offset. Positive values push the shadow right, then down respectively. You can specify 0s here for no offset, or negative numbers to move left and up.")]),t._v(" "),a("p",[t._v("The third value is the blur. A higher number here results in a more diffuse shadow.")]),t._v(" "),a("p",[t._v("The last value is the color. It's actually pretty useful to use RGBA or HSLA values here, so you can have transparent shadows.")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{attrs:{class:"token property"}},[t._v("text-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px 2px 2px "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255, 255, 255, 0.4"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("You can stack shadows with commas, leading to some more elaborate effects. Obviously, there's a lot of good reasons to not use shadows with your type, and I would rarely recommend them for body fonts. But, they can be good to add to headers and larger text to achieve certain effects, or if you're not sure what kind of background the text might appear on.")]),t._v(" "),a("p",[t._v("Keep in mind, you can use lighter colors too, achieving more of a glow effect.")]),t._v(" "),a("h3",{attrs:{id:"box-shadows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box-shadows","aria-hidden":"true"}},[t._v("#")]),t._v(" Box Shadows")]),t._v(" "),a("p",[t._v("To add shadows to your elements, you can use the "),a("code",[t._v("box-shadow")]),t._v(" property. It uses similar values to "),a("code",[t._v("text-shadow")]),t._v(': "x", "y", blur, color.')]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 5px 2px "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0, 0, 0, 0.5"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("You can make glow affects with this property as well, by using lighter colors.")]),t._v(" "),a("p",[t._v("There's one more value we can pass to "),a("code",[t._v("box-shadow")]),t._v(" though, and that's "),a("code",[t._v("inner")]),t._v(". By setting "),a("code",[t._v("inner")]),t._v(" as the first value in the list, we can create an inner shadow that runs along the inside of the box.")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inner 0 0 15px "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255, 255, 255, 0.4"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Shadows like this can be a pain to get right, so I often use a generator to help out.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cssmatic.com/box-shadow",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSSMatic Box-Shadow"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters","aria-hidden":"true"}},[t._v("#")]),t._v(" Filters")]),t._v(" "),a("p",[a("code",[t._v("filter")]),t._v(" is a newer property that allows you to use Photoshop like filters on your elements. It has decent browser support, but notably, doesn't work in IE.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://caniuse.com/#search=filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Can I Use: Filter"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("It works similarly to the "),a("code",[t._v("transform")]),t._v(" property we'll discuss in the next lecture, where the property is "),a("code",[t._v("filter")]),t._v(", then you give it a function with a value in parenthesis.")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("blur")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Here's all of the filters you can try on your elements...")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("grayscale")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* 0% is normal, 100% is black and white */")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("sepia")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("50%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("saturation")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* 100% is normal, lower is less saturated, higher is more */")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("contrast")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("500%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* 100% is normal */")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("brightness")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* 100% is normal */")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("invert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* 0% is normal */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("You can also combine filters by separating them with spaces. "),a("strong",[t._v("Do not repeat the property")]),t._v(", it will overwrite your previous declaration.")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".my-class")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("contrast")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("grayscale")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("blur")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("brightness")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("150%"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* this would overwrite all of the above */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("There are technically more, and I expect they will keep adding them.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN CSS Filter"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://css-tricks.com/almanac/properties/f/filter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here's a good set of examples from CSS Tricks"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://alligator.io/css/css-filter-examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here's another from Alligator.io"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://css-tricks.com/almanac/properties/t/text-shadow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Tricks text-shadow"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cssreference.io/property/text-shadow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Reference text-shadow"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cssreference.io/property/box-shadow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Reference box-shadow"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cssmatic.com/box-shadow",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSSMatic Box-Shadow Generator"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.options.__file="lecture23-effects.md";s.default=e.exports}}]);