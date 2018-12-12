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



export default {
  [GETSORTLISTS](state,{sortLists}){
    state.sortLists = sortLists
  },
  [GETSCROLLIMG](state,{scrollImgs}){
    state.scrollImgs = scrollImgs
  },
  [GETCATEGROYS](state,{categroys}){
    state.categroys = categroys
  },
  [GETRECOMMENDS](state,{recommends}){
    state.recommends = recommends
  },
  [GETSEESORTS](state,{seeSorts}){
    state.seeSorts = seeSorts
  },
  [GETSEETWOS](state,{seeTwos}){
    state.seeTwos = seeTwos
  },
  [GETSMSCODE](state,{SmsCode}){
    state.SmsCode = SmsCode
  },
  [GETBEFORETEXT](state,{beforeTexts}){
    state.beforeTexts = beforeTexts
  },
  [GETAFTERTEXT](state,{afterTexts}){
    state.afterTexts = afterTexts
  },
  [GETLISTSHOPS](state,{listShops}){
    state.listShops = listShops
  },
  [GETSESRCHSHOPS](state,{SearchShops}){
    state.listShops = SearchShops
  }
}
