import {GETSORTLISTS,GETSCROLLIMG,GETCATEGROYS} from "./mutations-type.js"



export default {
  [GETSORTLISTS](state,{sortLists}){
    state.sortLists = sortLists
  },
  [GETSCROLLIMG](state,{scrollImgs}){
    state.scrollImgs = scrollImgs
  },
  [GETCATEGROYS](state,{categroys}){
    state.categroys = categroys
  }
}
