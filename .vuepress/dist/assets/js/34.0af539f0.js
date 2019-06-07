(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{281:function(e,t,s){"use strict";s.r(t);var a=s(2),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"css-text-properties-and-typographic-guidelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-text-properties-and-typographic-guidelines","aria-hidden":"true"}},[e._v("#")]),e._v(" CSS Text Properties and Typographic Guidelines")]),e._v(" "),s("p",[e._v("In this lecture, we will focus on CSS properties that are primarily for text and typography styling as well as some general typography guidelines")]),e._v(" "),s("h2",{attrs:{id:"weight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weight","aria-hidden":"true"}},[e._v("#")]),e._v(" Weight")]),e._v(" "),s("p",[e._v("To make a font bold, we give it a font-weight:")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("font-weight")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 700"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("This number references a family weight. There are essentially nine weights to choose from:")]),e._v(" "),s("ul",[s("li",[e._v("100 thin")]),e._v(" "),s("li",[e._v("200 extra light")]),e._v(" "),s("li",[e._v("300 light")]),e._v(" "),s("li",[e._v("400 regular")]),e._v(" "),s("li",[e._v("500 medium")]),e._v(" "),s("li",[e._v("600 semi bold")]),e._v(" "),s("li",[e._v("700 bold")]),e._v(" "),s("li",[e._v("800 extra bold")]),e._v(" "),s("li",[e._v("900 black")])]),e._v(" "),s("p",[e._v("The above is just a guide, when installing webfonts (which we will review in depth later) you will need to look closely at the font files in question, each weight of the font should correspond to one of these numbers. If your font does not include an extra bold, then setting 800 won't do anything, it will default to the nearest one it can find.")]),e._v(" "),s("p",[e._v("You can also use font keywords: "),s("code",[e._v("normal")]),e._v(" and "),s("code",[e._v("bold")]),e._v(". This works when you are either just quickly experimenting, or if you are using a font that really only has two weights.")]),e._v(" "),s("h2",{attrs:{id:"family"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#family","aria-hidden":"true"}},[e._v("#")]),e._v(" Family")]),e._v(" "),s("p",[e._v("To change the typeface, you will change the font’s family:")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("font-family")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Arial"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("By default, you can only use fonts that are already installed on the user's machine. How do you know what font's the user has? You don't. In the early days of the web, we had to pick a safe font that we could assume a lot of people had on their computers like Arial, Georgia, Helvetica and Times New Roman. This was pretty limiting, but a lot of clever designers managed to be creative regardless. "),s("em",[e._v("Webfonts")]),e._v(" have changed all that, but we're not quite ready to dive in to all the ins-and-outs of installing them yet.")]),e._v(" "),s("h3",{attrs:{id:"font-stacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-stacks","aria-hidden":"true"}},[e._v("#")]),e._v(' Font "Stacks"')]),e._v(" "),s("p",[e._v('You can also stack your font list, and the browser will go down the list until it finds a font it can use. Now that we can use webfonts, this is usually implemented as a "Just in case" feature. As in, "just in case my fonts are broken or otherwise don\'t load."')]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("font-family")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"My Font"')]),e._v(", BackupFont, Helvetica, Arial, sans-serif"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{attrs:{class:"token comment"}},[e._v("/* Use Quotes around font names with spaces */")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v('The "sans-serif" is just a generic catch-all that the operating system will use to pick its default sans-serif font. You can use '),s("code",[e._v("sans-serif")]),e._v(", "),s("code",[e._v("serif")]),e._v(", "),s("code",[e._v("cursive")]),e._v(", or "),s("code",[e._v("monospace")]),e._v(". It's usually a good idea to include this, again, just in case.")]),e._v(" "),s("p",[e._v("Again, We’ll talk later about how to add web fonts to your site.")]),e._v(" "),s("h2",{attrs:{id:"italics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#italics","aria-hidden":"true"}},[e._v("#")]),e._v(" Italics")]),e._v(" "),s("p",[e._v("To make the font italic, we'll use the "),s("code",[e._v("font-style")]),e._v(" property:")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("font-style")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" italic"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("To overwrite an italic font and make it normal again:")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("font-style")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" normal"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"leading-or-line-heights"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leading-or-line-heights","aria-hidden":"true"}},[e._v("#")]),e._v(" Leading or line heights")]),e._v(" "),s("p",[e._v("To change the leading, we use the "),s("code",[e._v("line-height")]),e._v(" property.")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("line-height")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1.5"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("In this case, if the font size was 16px, the leading would be 16 × 1.5 = 24px. You can also specify units for line-height like ems or pixels, but the ratio is preferable. You can set it at a default value for all elements of a certain type, and it will scale if you change the font size on a subset of those elements.")]),e._v(" "),s("h2",{attrs:{id:"letter-spacing-or-tracking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#letter-spacing-or-tracking","aria-hidden":"true"}},[e._v("#")]),e._v(" Letter spacing or tracking")]),e._v(" "),s("p",[e._v("To change the distance between characters in a text, we can change the "),s("code",[e._v("letter-spacing")]),e._v(" property.")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("letter-spacing")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1px"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("The above code would add an additional pixel between every character. You can also use negative values to tighten the letter spacing.")]),e._v(" "),s("h3",{attrs:{id:"tracking-to-letter-spacing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tracking-to-letter-spacing","aria-hidden":"true"}},[e._v("#")]),e._v(" Tracking to letter-spacing")]),e._v(" "),s("p",[e._v("Computing how to translate tracking in an Adobe program to letterspacing in CSS is a bit tricky, but you can follow this formula.")]),e._v(" "),s("p",[e._v("Illustrator Tracking = 100 = 0.1em.")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("letter-spacing")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0.1em"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{attrs:{class:"token comment"}},[e._v("/* tracking of 100 */")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("This is rough though, and relates to the font-size in unpredictable ways, best to use your eyeball as well.")]),e._v(" "),s("h2",{attrs:{id:"aligning-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aligning-text","aria-hidden":"true"}},[e._v("#")]),e._v(" Aligning text")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("text-align")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" left"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Here, there are four different values you can use: "),s("code",[e._v("left")]),e._v(", "),s("code",[e._v("center")]),e._v(", "),s("code",[e._v("right")]),e._v(" and\n"),s("code",[e._v("justify")]),e._v(".")]),e._v(" "),s("p",[e._v("Be very careful with Justify. The reason Justify works in Adobe programs is because they have complex algorithms to figure out where to break the text. Your browser is not as sophisticated, and will not produce the best results.")]),e._v(" "),s("h2",{attrs:{id:"underlining"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#underlining","aria-hidden":"true"}},[e._v("#")]),e._v(" Underlining")]),e._v(" "),s("p",[e._v("To control underlines, you can use the "),s("code",[e._v("text-decoration")]),e._v(" property.")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("text-decoration")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" underline"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("To get rid of the default underlines on links, you can add:")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("a")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("text-decoration")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" none"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("But again, consider whether you should use or turn off underlining carefully, in reference to what we discussed in the "),s("router-link",{attrs:{to:"/lectures/lecture04-clickability-and-affordance.html"}},[e._v("Clickability and Affordance lecture")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"controlling-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controlling-case","aria-hidden":"true"}},[e._v("#")]),e._v(" Controlling case")]),e._v(" "),s("p",[e._v("It's always best to make all caps in your CSS, rather than typing all-caps into your HTML. That way, if you want to change it later, you can. To change, use the text-transform property.")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("text-transform")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" uppercase"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{attrs:{class:"token comment"}},[e._v("/* you can also use lowercase here */")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v('You could also make each first letter capitalized too, but keep in mind, it\'s not "smart" and will capitalize every word, including "a", "the", etc.')]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("p")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("text-transform")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" capitalize"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"vertical-alignment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vertical-alignment","aria-hidden":"true"}},[e._v("#")]),e._v(" Vertical alignment")]),e._v(" "),s("p",[e._v("We'll deal with vertical alignment in layout when we talk about Flexbox, but there is a "),s("code",[e._v("vertical-align")]),e._v(" property that only works on elements that are "),s("em",[e._v("inline")]),e._v(" or "),s("em",[e._v("inline-block")]),e._v(". It only really works when you are mixing text of different sizes.")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("a")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("vertical-align")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" top"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",{staticStyle:{"font-size":"20px"}},[e._v("Vertical alignment example: "),s("a",{staticStyle:{"font-size":"14px","vertical-align":"top"},attrs:{href:"#"}},[e._v("This link is vertically aligned top")])]),e._v(" "),s("p",[e._v('You can also use "middle", "bottom", "baseline", or provide a value.')]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[e._v("a")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v("vertical-align")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 10px"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("This can be useful for styling superscripts and subscripts.")]),e._v(" "),s("h2",{attrs:{id:"hierarchy-and-scale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy-and-scale","aria-hidden":"true"}},[e._v("#")]),e._v(" Hierarchy and scale")]),e._v(" "),s("p",[e._v("Determining hierarchy and scale to your type designs can be tough, as you probably experienced in other design classes, and Project 1A of this class. Whatever your process is, it's good to at least "),s("em",[e._v("have")]),e._v(" a process. I find it useful to adopt someone else's scale or a previous design of your own and then make adjustments for your typeface choices and style.")]),e._v(" "),s("p",[e._v("Google's "),s("strong",[e._v("Material Design")]),e._v(" "),s("a",{attrs:{href:"https://material.io/design/typography/the-type-system.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("typography system guidelines"),s("OutboundLink")],1),e._v(" are extremely useful to remind yourself of what kinds of text elements you should design for on a large project.")]),e._v(" "),s("p",[e._v("Here's a great resource discussing scale and measer in Responsive Design: "),s("a",{attrs:{href:"http://typecast.com/blog/a-more-modern-scale-for-web-typography",target:"_blank",rel:"noopener noreferrer"}},[e._v("A More Modern Scale for Web Typography"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"text-legibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-legibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Text legibility")]),e._v(" "),s("p",[e._v("Google's Material "),s("a",{attrs:{href:"https://material.io/design/color/text-legibility.html#legibility-standards",target:"_blank",rel:"noopener noreferrer"}},[e._v("design guidelines for legibility"),s("OutboundLink")],1),e._v(" are also pretty useful (even though they are more geared to app design than websites).")]),e._v(" "),s("p",[e._v("Remember, the web shares a lot of principles with other graphic design disciplines, but there are also a lot of patterns and specifications people are used to, if you deviate, make sure you have a good reason.")]),e._v(" "),s("p",[e._v("Apple and Google, for better or for worse, are some of the thought leaders and influencers when it comes to these patterns. They create apps and sites that people use all of the time, nearly daily. And other companies reference their design guidelines simply because it makes it easier for the user to not have to re-learn new user-interface queues for every new app or website.")]),e._v(" "),s("p",[e._v("But it's not just the patterns that make these guidelines useful, the people at these companies have spent more time thinking about this stuff than you have, so I encourage you to learn from their work. Just keep in mind that they are guidelines, and don't apply to every solution.")]),e._v(" "),s("h2",{attrs:{id:"the-line-break-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-line-break-tag","aria-hidden":"true"}},[e._v("#")]),e._v(" The line break tag")]),e._v(" "),s("p",[e._v("There's a tag called "),s("code",[e._v("<br>")]),e._v(" that lets you break a line of text. You can use it when you don't need space between something, but the word breaking matters. For instance, when writing something like an address. "),s("em",[e._v("Sometimes")]),e._v(" you can get away with using it to finesse line breaking on a headline. Just make sure to test and make sure it works responsively.")]),e._v(" "),s("blockquote",[s("p",[e._v("The HTML "),s("code",[e._v("<br>")]),e._v(" element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.")])]),e._v(" "),s("blockquote",[s("p",[e._v("The "),s("code",[e._v("<br>")]),e._v(" element has a single, well-defined purpose—to create a line break in a block of text. As such, it has no dimensions or visual output of its own, and there is very little you can do to style it.")])]),e._v(" "),s("blockquote",[s("p",[e._v("Accessibility concerns")])]),e._v(" "),s("blockquote",[s("p",[e._v("Creating separate paragraphs of text using "),s("code",[e._v("<br>")]),e._v(" is not only bad practice, it is problematic for people who navigate with the aid of screen reading technology. Screen readers may announce the presence of the element, but not any content contained within "),s("code",[e._v("<br>")]),e._v("s. This can be a confusing and frustrating experience for the person using the screen reader.")])]),e._v(" "),s("blockquote",[s("p",[e._v("Use "),s("code",[e._v("<p>")]),e._v(" elements, and use CSS properties like margin to control their spacing.")])]),e._v(" "),s("p",[e._v("—MDN")]),e._v(" "),s("p",[e._v("Essentially, "),s("strong",[e._v("do not use the "),s("code",[e._v("<br>")]),e._v(" tag to create whitespace between items")]),e._v(". It does not give you the fine control over spacing you probably need. Use margin and padding on your CSS elements instead.")]),e._v(" "),s("h2",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://cssreference.io/typography/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Reference for Typography"),s("OutboundLink")],1)])])},[],!1,null,null,null);n.options.__file="lecture09-text-and-type.md";t.default=n.exports}}]);