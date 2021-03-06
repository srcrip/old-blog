<template>
  <div class="post-list">
    <hr class="line" />
    <g-link :to="post.path">
      <h3 class="h1" v-html="post.title" />
      <div class="subheading" v-html="post.date" />
    </g-link>
    <p class="description" v-html="post.description" />
    <g-link :to="post.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ["post"]
};
</script>

<style scoped>
h3:hover {
  text-decoration: underline;
}

h3 {
  color: var(--text-color);
  font-family: var(--font-serif);
}

.read {
  margin-top: 1.2em;
  font-size: .8em;
  display: block;
}
</style>
