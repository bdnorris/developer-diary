module.exports = {
  title: "Developer Diary",
  description: "Do, learn, discover",
  themeConfig: {
    displayAllHeaders: false, // Default: false
    lastUpdated: "Last Updated", // string | boolean,
    nav: [
      //   { text: 'Home', link: '/' },
      // { text: "Projects", link: "/projects/" }
      // { text: 'Slack', link: 'https://msuwebdesign.slack.com/' },
    ],
    sidebar: [
      "/",
      {
        title: "2019",
        collapsable: true,
        children: [
          "2019/june/06.md",
          "2019/june/07.md",
          "2019/june/10.md",
          "2019/june/11.md",
          "2019/june/12.md",
          "2019/june/14.md",
          "2019/june/13.md"
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      // md.use(require('markdown-it-imsize'))
    }
  },
  base: "/"
  // async ready() {
  //   // ...
  // }
};  