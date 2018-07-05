import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index.vue'
import Login from '@/components/user/Login.vue'


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
            component: Login
        },
        {
            path: '/regist',
            name: 'regist',
            component: resolve => require(['@/components/user/Regist.vue'], resolve)
        }
    ]
})