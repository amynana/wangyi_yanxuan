import {
  GETSORTLISTS,
  GETSCROLLIMG,
  GETCATEGROYS,
  GETRECOMMENDS,
  GETSEESORTS,
  GETSEETWOS,
  GETSMSCODE,
  GETBEFORETEXT,
  GETAFTERTEXT,
  GETLISTSHOPS,
  GETSESRCHSHOPS
} from "./mutations-type.js"
import {
  reqSortLists,
  reqscrollImg,
  reqCategroy,
  reqRecommend,
  reqSeeSorts,
  reqSeeTwos,
  reqSendCode,
  reqBeforeText,
  reqTextOnline,
  reqListShops,
  reqSearchShops
} from "../api/index.js"

export default{
 async getSortLists({commit}){
    const result  = await reqSortLists()
    if(result.code === 0){
      const sortLists = result.data
      commit(GETSORTLISTS,{sortLists})
    }

  },
  async getScrollImg({commit}){
   const result = await reqscrollImg()
    if(result.code===0){
     const scrollImgs = result.data
      commit(GETSCROLLIMG,{scrollImgs})
    }
  },
  async getCategroys({commit}){
   const result = await reqCategroy()
    if(result.code===0){
     const categroys = result.data
      commit(GETCATEGROYS,{categroys})
    }
  },
  async getRecommends({commit}){
    const result = await reqRecommend()
    if(result.code ==='200'){ //这里的响应码是字符串所以要用这个字符
     const recommends = result.data
      commit(GETRECOMMENDS,{recommends})
    }
  },
  async getSeeSorts({commit}){
    const result = await reqSeeSorts()
    if(result.code === "200"){
      const seeSorts = result.data
      commit(GETSEESORTS,{seeSorts})
    }
  },
  async getSeeTwos({commit}){
    const result = await reqSeeTwos()
    if(result.code === "200"){
      const seeTwos = result.data
      commit(GETSEETWOS,{seeTwos})
    }
  },

  async  getBeforeText({commit}){//得到搜索之前的数据
    const result = await reqBeforeText()
    if(result.code === "200"){
      const beforeTexts = result.data
      commit(GETBEFORETEXT,{beforeTexts})
    }
  },

  async getTextOnline({commit},{keywordPrefix}){
   const result =   await reqTextOnline({keywordPrefix})
    if(result.code === "200"){
     const afterTexts = result.data
      commit(GETAFTERTEXT,{afterTexts})
    }
  },
  async getListShops({commit},{url}){

   const result = await  reqListShops({url})
    console.log("result为",result)
    if(result.code === '200'){
     const listShops = result.data
      commit(GETLISTSHOPS,{listShops})
    }
  },
  async getSearchShop({commit},{url}){
   const result = await reqSearchShops({url})

    if(result.code === '200'){
     const SearchShops = result.data
      commit(GETSESRCHSHOPS,{SearchShops})
    }
  }





}
