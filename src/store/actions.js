import {GETSORTLISTS,GETSCROLLIMG,GETCATEGROYS,GETRECOMMENDS} from "./mutations-type.js"
import {reqSortLists,reqscrollImg,reqCategroy,reqRecommend} from "../api/index.js"

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
      console.log(recommends)
      commit(GETRECOMMENDS,{recommends})
    }
  }



}
