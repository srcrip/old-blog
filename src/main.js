// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"
import "~/assets/main.css"
import VueGtag from "vue-gtag"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  // Google Analytics
  Vue.use(VueGtag, {
    config: {id: "UA-157959256-1"}
  })

  // fixes from https://github.com/gridsome/gridsome/issues/1361
  router.options.scrollBehavior = async (to, from, savedPosition) => {
    console.log(to.hash)
    const elem = document.querySelector(to.hash)
    // vue-router does not incorporate scroll-margin-top on its own.
    if (elem) {
      const offset = parseFloat(getComputedStyle(elem).scrollMarginTop)
      return {
        selector: to.hash,
        offset: { y: offset }
      }
    }

    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  }
}
