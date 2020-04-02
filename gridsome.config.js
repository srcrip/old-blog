module.exports = {
  siteName: "Marble Zone",
  siteUrl: "https://sevensidedmarble.com/",
  siteDescription:
    "Developer blog for sevensidedmarble, full stack developer, game dev, musician, and more.",
  icon: "./static/favicon-32.png",
  port: 7777,
  transformers: {
    remark: {}
  },
  plugins: [
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "static/posts/**/*.md",
    //     typeName: "Post",
    //     route: "/:slug"
    //   }
    // },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: 'static/posts',
        template: './src/templates/Post.vue'
      }
    }
  ]
};
