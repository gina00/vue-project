// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueResource from 'vue-resource'
import ECharts from 'vue-echarts'
import 'font-awesome/css/font-awesome.css'
import axios from "axios"

// 此处引入静态资源
require('../static/css/style.css')
Vue.use(ElementUI)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.config.silent = true
    //组件将通过 window.VueECharts 变量暴露接口： 
    //注册组件后即可使用
Vue.component('chart', ECharts)
Vue.prototype.$echarts = ECharts
Vue.prototype.$axios = axios
    // 引入mockjs
require('../node_modules/mockjs/dist/mock.js')
Vue.filter('getYMD', function(input) {
        return input.split(' ')[0];
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app2',
    render: h => h(App),
    router,
    components: { App },
    template: '<App/>'
})