// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

import 'common/stylus/index.styl'

import 'common/js/rem.js'
import 'common/font/iconfont.js'

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
