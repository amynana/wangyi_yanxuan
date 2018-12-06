import Mock from "mockjs"
import home from "./msite.json"
import categroy from "./category.json"
//暴露接口
//首页home数据
Mock.mock('/home',{code:0,data:home.kingKongModule.kingKongList})
Mock.mock('/scrollImg',{code:0,data:home.focusList})
Mock.mock('/categroy',{code:0,data:categroy})
