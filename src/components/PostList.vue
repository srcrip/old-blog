<template>
  <div class="post-list">
    <hr class="line" />
    <p class="date" v-html="post.date" />
    <g-link :to="post.path">
      <h1 v-html="post.title" />
    </g-link>
    <p class="description" v-html="post.description" />
    <b> {{ post.timeToRead }} min read </b> &nbsp
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
h1:hover {
  text-decoration: underline;
}
</style>
