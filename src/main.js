// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"
import "~/assets/tufte.css"
import VueGtag from "vue-gtag"

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  // Google Analytics
  Vue.use(VueGtag, {
    config: {id: "UA-157959256-1"}
  })
}
