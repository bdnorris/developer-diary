(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{215:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"june-19-2019"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#june-19-2019","aria-hidden":"true"}},[t._v("#")]),t._v(" June 19, 2019")]),t._v(" "),s("h2",{attrs:{id:"working-on-brands-list-for-tap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-on-brands-list-for-tap","aria-hidden":"true"}},[t._v("#")]),t._v(" Working on brands list for TAP")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/vue-marquee-text-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("Used this package"),s("OutboundLink")],1),t._v(" to make the brands scroll")])]),t._v(" "),s("h2",{attrs:{id:"it-s-client-side-only-so-found-some-new-ways-in-nuxt-to-make-this-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#it-s-client-side-only-so-found-some-new-ways-in-nuxt-to-make-this-work","aria-hidden":"true"}},[t._v("#")]),t._v(" It's client side only, so found some new ways in Nuxt to make this work")]),t._v(" "),s("p",[t._v("Use the no-ssr component")]),t._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("no-ssr")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showBanner"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("marquee-text")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":duration")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("30"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":repeat")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("marquee-text")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("no-ssr")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Import inside components method")]),t._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("  components: {\n    'MarqueeText': () => import('vue-marquee-text-component')\n  },\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Then only show the no-ssr component after mount")]),t._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("  mounted() {\n    if (process.client) {\n      this.showBanner = true\n    }\n  }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"working-on-navigation-on-tap-and-sass-loops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-on-navigation-on-tap-and-sass-loops","aria-hidden":"true"}},[t._v("#")]),t._v(" Working on navigation on TAP and Sass loops")]),t._v(" "),s("ul",[s("li",[t._v("Weird rotation and lots of z-index issues here.")]),t._v(" "),s("li",[t._v("Used my first production sass loop to indent at an angle")])]),t._v(" "),s("div",{staticClass:"language-scss line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v("li ")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("padding")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.666em 0.5em 0.666em 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("@for")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 1 "),s("span",{attrs:{class:"token keyword"}},[t._v("through")]),t._v(" "),s("span",{attrs:{class:"token selector"}},[t._v("7 ")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    &"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("nth-child")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("#{$i}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("padding-left")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0.125*"),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("em"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"eli-led-our-weekly-lunch-and-we-talked-about-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eli-led-our-weekly-lunch-and-we-talked-about-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" Eli led our weekly lunch and we talked about Docker.")]),t._v(" "),s("ul",[s("li",[t._v("Learned about the difference between images and containers, and some commands")]),t._v(" "),s("li",[s("code",[t._v("docker image -ls")]),t._v(" and "),s("code",[t._v("docker ps")])]),t._v(" "),s("li",[t._v("compose files and volumes")])]),t._v(" "),s("h2",{attrs:{id:"back-to-tap-navigation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back-to-tap-navigation","aria-hidden":"true"}},[t._v("#")]),t._v(" Back to TAP navigation")]),t._v(" "),s("ul",[s("li",[t._v("wondering if I should abandon the UI kit and just use the Nuxt site")]),t._v(" "),s("li",[t._v("Got navigation done, had to add a wrapper to control animation overflow, but that's fine, added a click handler for it close.")]),t._v(" "),s("li",[t._v("Used some wonky stuff to communicate between child components, normal pattern, ok, but maybe I should have used vuex?")])])])},[],!1,null,null,null);e.options.__file="19.md";a.default=e.exports}}]);