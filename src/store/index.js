import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        show: false,
        count: 1
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})