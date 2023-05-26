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
          "2019/june/",
          "2019/july/",
          "2019/august/",
          "2019/september/",
          "2019/october/",
          "2019/november/",
          "2019/december/"
        ]
      },
      {
        title: "2020",
        collapsable: true,
        children: [
          "2020/january/",
          "2020/february/",
          "2020/march/",
          "2020/april/",
          "2020/may/",
          "2020/june/",
          "2020/july/",
          "2020/august/",
          "2020/september/",
          "2020/october/",
          "2020/november/",
          "2020/december/",
        ]
      },
      {
        title: "2021",
        collapsable: true,
        children: [
          "2021/january/",
          "2021/february/",
          "2021/march/",
          "2021/april/",
          "2021/may/",
          "2021/june/",
          "2021/july/",
          "2021/august/",
          "2021/september/",
          "2021/october/",
          "2021/november/",
          "2021/december/",
        ]
      },
      {
        title: "2022",
        collapsable: true,
        children: [
          "2022/january/",
          "2022/february/",
          "2022/march/",
          "2022/april/",
          "2022/may/",
          "2022/june/",
          "2022/july/",
          "2022/august/",
          "2022/september/",
          "2022/october/",
          "2022/november/",
          "2022/december/",
        ]
      },
      {
        title: "2023",
        collapsable: true,
        children: [
          "2023/january/",
          "2023/february/",
          "2023/march/",
          "2023/april/",
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