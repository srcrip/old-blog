// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Marble Zone",
  siteUrl: "https://sevensidedmarble.com/",
  siteDescription:
    "Developer blog for sevensidedmarble, full stack developer, game dev, musician, and more.",
  icon: "./static/favicon-32.png",
  port: 7777,
  siteUrl: "https://sevensidedmarble.github.io",
  pathPrefix: "/blog",
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "static/posts/**/*.md",
        typeName: "Post",
        route: "/:slug"
      }
    }
  ]
};
