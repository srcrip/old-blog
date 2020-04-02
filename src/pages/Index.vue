<template>
  <Layout>
    <section class="posts">
      <PostList
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<page-query>
query {
  allPost(filter: { published: { eq: true }}) {
    totalCount
    edges {
      node {
        id
        title
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
import PostList from "~/components/PostList.vue";

export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "Sevensidedmarble's blog"
  }
};
</script>
