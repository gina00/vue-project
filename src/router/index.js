import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/layout/Index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            name: 'Home',
            component: Home,
            children: [{
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: resolve => require(['@/views/user/Login.vue'], resolve)
            }],
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/user/Login.vue'], resolve)
        },
        {
            path: '/regist',
            name: 'regist',
            component: resolve => require(['@/views/user/Regist.vue'], resolve)
        }
    ]
})