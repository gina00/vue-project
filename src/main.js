// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueResource from 'vue-resource'
import 'font-awesome/css/font-awesome.css'

// 此处引入静态资源
require('./assets/css/style.css')
Vue.use(ElementUI)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.config.silent = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
