/*
* 包含n个接口请求函数的模块，每个模块都是暴露promise对象
* */
import ajax from "./ajax"

export const getSortLists = ()=> ajax('/home')  //记住用mock模拟的数据，这里的路径只能是在mockServer.js中定义的路径
