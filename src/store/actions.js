import {GETSORTLISTS} from "./mutations-type.js"
import {r} from "../api/index.js"
export default{
  getSortLists({commit}){

    commit(GETSORTLISTS)
  }


}
