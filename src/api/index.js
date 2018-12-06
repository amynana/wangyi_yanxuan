/*
* 包含n个接口请求函数的模块，每个模块都是暴露promise对象
* */
import ajax from "./ajax"
export const reqSortLists = ()=> ajax('/home')  //记住用mock模拟的数据，这里的路径只能是在mockServer.js中定义的路径
export const reqscrollImg = ()=>ajax('/scrollImg')//获取首页轮播图的数据
export const reqCategroy = ()=>ajax('/categroy') //获取分类页的列表数据
