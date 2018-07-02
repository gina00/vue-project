import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import hover from '@/components/definition-components/hover.vue'
import Header from '@/views/Header'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Header',
            component: Header
        },
        {
            path: '/hover',
            name: 'Hover',
            component: hover
        }
    ]
})