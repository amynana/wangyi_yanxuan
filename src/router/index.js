import Vue from "vue"
import Router from "vue-router"
import Home from '../routes/Home/Home.vue'
import Sort from '../routes/Sort/Sort.vue'
import See from '../routes/See/See'
import Shop from '../routes/Shop/Shop'
import Profile from '../routes/Profile/Profile'

Vue.use(Router)

export default new Router({
  routes:[
    {path:'/home',component:Home},
    {path:'/sort',component:Sort},
    {path:'/see',component:See},
    {path:'/shop',component:Shop},
    {path:'/profile',component:Profile},
    {path:'/',redirect:"/home"}
  ]
})
