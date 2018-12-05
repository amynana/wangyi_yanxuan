import Mock from "mockjs"
import home from "./mockServer.js"

//暴露接口
//首页home数据
Mock.Mock('/home',{code:0,data:home.kingKongModule.kingKongList})

