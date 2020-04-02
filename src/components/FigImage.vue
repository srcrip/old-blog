<!-- Wraps g-image components in the figure tag, among other things. -->
<template>
  <figure>
    <g-image ref="img" :src="src" :alt="caption" data-zoomable @click="zoom" />
    <figcaption>
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
import mediumZoom from 'medium-zoom'

export default {
  name: 'FigImage',
  props: {
    src: String,
    caption: String
  },
  methods: {
    zoom () {
      this.zoom.open()
    }
  },
  mounted () {
    this.zoom = mediumZoom(this.$refs.img)
  },
};
</script>

<style scoped>
</style>
