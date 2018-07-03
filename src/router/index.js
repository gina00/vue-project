import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import mkinforData from '@/components/TotalInfor.vue'
import Header from '@/views/Header'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Header',
            component: Header
        },
        {
            path: '/total',
            name: 'totalinfor',
            component: mkinforData
        }
    ]
})