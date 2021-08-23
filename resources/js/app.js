
require('./bootstrap');

/*
|----------------------------------------------------------------
| Vue 3
|----------------------------------------------------------------
*/

import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { Head, Link } from '@inertiajs/inertia-vue3'
import Layout from './Shared/Layout'
InertiaProgress.init()

const el = document.getElementById('app')

createApp({
  title: title => `${title} - My App`,
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => {
      const page = require(`./Pages/${name}`).default;
      page.layout = page.layout || Layout
      return page
    },
  })
}).mixin({
  methods: {
    route: (name, params, absolute) => route(name, params, absolute, Ziggy),
  },
})
  .component('InertiaHead', Head)
  .component('InertiaLink', Link)
  .use(plugin)
  .mount(el)