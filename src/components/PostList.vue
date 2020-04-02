<template>
  <div class="post-list">
    <hr class="line" />
    <g-link :to="post.path">
      <h1 v-html="post.title" />
    </g-link>
    <b class="date" v-html="post.date" />
    <p class="description" v-html="post.description" />
    <!-- TODO: I'd like to get this back somehow. -->
    <!-- <b> {{ post.timeToRead }} min read </b> &#38;nbsp -->
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
