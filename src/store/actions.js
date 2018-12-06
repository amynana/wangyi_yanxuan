import {GETSORTLISTS,GETSCROLLIMG,GETCATEGROYS} from "./mutations-type.js"
import {reqSortLists,reqscrollImg,reqCategroy} from "../api/index.js"

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
      console.log("数据你")
      console.log(scrollImgs)
    }
  },
  async getCategroys({commit}){
   const result = await reqCategroy()
    if(result.code===0){
     const categroys = result.data
      commit(GETCATEGROYS,{categroys})
    }
  }



}
