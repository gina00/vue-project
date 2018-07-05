import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Home',
            component: Home
        },
        {
            path: '/total',
            name: 'totalinfor',
            component: resolve => require(['@/components/TotalInfor.vue'], resolve)
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/components/Login.vue'], resolve)
        }
    ]
})