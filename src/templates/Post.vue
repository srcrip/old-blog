<template>
  <Layout>
    <h1 v-if="$page.post">{{ $page.post.title }}</h1>
    <div v-if="$page.post" class="h4 pb-3">
      Written by:
      <g-link to="/resume">{{ $page.post.author }}</g-link>
      - {{ $page.post.date }}
    </div>
    <div v-if="$page.post" v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    author
    published
    date (format: "D. MMMM YYYY")
    description
    keywords
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style scoped>
pre code {
  width: 100%;
}
</style>
