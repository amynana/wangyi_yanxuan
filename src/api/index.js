/*
* 包含n个接口请求函数的模块，每个模块都是暴露promise对象
* */
import ajax from "./ajax"
const BASE = '/api'
export const reqSortLists = ()=> ajax('/home')  //记住用mock模拟的数据，这里的路径只能是在mockServer.js中定义的路径
export const reqscrollImg = ()=>ajax('/scrollImg')//获取首页轮播图的数据
export const reqCategroy = ()=>ajax('/categroy') //获取分类页的列表数据
export const reqRecommend =()=>ajax(BASE +'/recManual.json') //获取推荐列表
export const reqSeeSorts = ()=>ajax(BASE +'/getTabs.json') //获取see组件的列表
export const reqSeeTwos = ()=>ajax(BASE + '/getTabData.json?page=1&size=5&tabId=4') //获取see的第二页的数据
