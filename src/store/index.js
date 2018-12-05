import Vue from "vue"
import VueRouter from "vue-router"
import state from "./state.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"
Vue.use(VueRouter)

const store = new VueRouter({
    state,
    mutations,
    getters,
    actions,
})
export default store
