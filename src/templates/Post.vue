<template>
  <Layout>
    <article>
      <h1 v-if="$page.post">{{ $page.post.title }}</h1>
      <div v-if="$page.post" class="subheading">
        written by
        <g-link to="/resume">{{ $page.post.author }}</g-link>
        on {{ $page.post.date }}
      </div>
      <VueRemarkContent />
    </article>
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

<style>
figure {
  text-align: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.note {
  background: rgba(0, 0, 0, 0.05);
  padding: 1.125rem 1.25rem 1.25rem;
}

.note > header {
  text-transform: uppercase;
  padding-bottom: 1em;
  font-weight: 300;
  margin-top: 0;
}
</style>
