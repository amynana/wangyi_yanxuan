import {GETSORTLISTS,GETSCROLLIMG,GETCATEGROYS,GETRECOMMENDS,GETSEESORTS,GETSEETWOS} from "./mutations-type.js"
import {reqSortLists,reqscrollImg,reqCategroy,reqRecommend,reqSeeSorts,reqSeeTwos} from "../api/index.js"

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
  }



}
