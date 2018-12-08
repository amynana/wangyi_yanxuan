import Vue from "vue"
import Router from "vue-router"
import Home from '../routes/Home/Home.vue'
import Sort from '../routes/Sort/Sort.vue'
import See from '../routes/See/See'
import Shop from '../routes/Shop/Shop'
import Profile from '../routes/Profile/Profile'
import NotFound from "../routes/NotFound/NotFound.vue"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        isShow:true
      }
    },
    {
      path:'/sort',
      component:Sort,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path:'/see',
      component:See,
      meta:{
        isShow:true
      },
    },
    {
      path:'/shop',
      component:Shop,
      meta:{
        isShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
    },
    {
      path:'/',
      redirect:"/home",
      meta:{
        isShow:true
      }
    },
    {
      path:'/*',  //表示没有匹配的路径
      component:NotFound
    }
  ]
})
