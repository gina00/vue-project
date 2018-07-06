// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueResource from 'vue-resource'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'font-awesome/css/font-awesome.css'

// 此处引入静态资源
require('../static/css/style.css')
Vue.use(ElementUI)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.config.silent = true
    // 注册组件后即可使用
Vue.component('chart', ECharts)

/* eslint-disable no-new */
new Vue({
    el: '#app2',
    render: h => h(App),
    router,
    components: { App },
    template: '<App/>'
})