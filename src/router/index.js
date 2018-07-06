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
            path: '/login',
            name: 'login',
            component: resolve => require(['@/components/user/Login.vue'], resolve)
        },
        {
            path: '/regist',
            name: 'regist',
            component: resolve => require(['@/components/user/Regist.vue'], resolve)
        }
    ]
})