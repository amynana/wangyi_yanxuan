<template>
    <div class="search">
      <div class="wrap">
        <div class="top">
          <div class="top-search">
            <i class="iconfont icon-sousuo  icon-two"></i>
            <input type="text" class="s-input" v-model="searchText" :placeholder="placeVal">
          </div>

        </div>
        <span class="cancel" @click="$router.replace('/home')">取消</span>
        <div class="before-s" v-if="isShowBefore">
          <span class="hotSearch">热门搜索</span>
          <ul class="search-ul">
            <li class="search-li" v-for="(hotkey,index) in beforeTexts.hotKeywordVOList"
                :key="index" :class="{high:hotkey.highlight === 1}">{{hotkey.keyword}}</li>
          </ul>
        </div>
        <div class="after-s" v-if="isShowAfter">
          <ul class="after-ul">
            <li class="after-li" v-for="(afterText,index) in afterTexts" @click="showDetail">{{afterText}}</li>
          </ul>
        </div>
        <div class="Detail" v-if="isShowDetail">
          <div class="filter">
            <span>综合</span>
            <span>价格</span>
            <span>分类</span>
          </div>
          <div class="detail-show">
            <div class="detail-wrap">
              <div class="left">
                <div class="l-img">
                  <img src="http://yanxuan.nosdn.127.net/5f1d15da612ccfc820d42e1510f42dd4.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="l-text">每满200减30</div>
                <div class="l-foot">
                  <span class="des">男童保暖内衣</span>
                  <span class="price">￥99</span>
                </div>
              </div>
              <div class="right">
                <div class="r-img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        name: "Search",
        data(){
          return {
            isShowBefore:true,//表示搜索之前
            isShowAfter:false,//表示搜索之后
            isShowDetail:false,
            searchText:"",

          }

        },
      computed:{
        ...mapState(["beforeTexts","afterTexts"]),
        placeVal(){
          if(this.beforeTexts.defaultKeyword){
            return this.beforeTexts.defaultKeyword.keyword
          }

        }
      },
      mounted(){
          this.$store.dispatch('getBeforeText')
      },
      watch:{
        searchText(val){
          if(val){
            this.isShowBefore = false
            this.isShowAfter = true
          }
          if(this.searchText===""){
            this.isShowBefore = true
            this.isShowAfter = false
            this.isShowDetail = false

          }

          this.$store.dispatch('getTextOnline',{keywordPrefix:this.searchText})


        }
      },
      methods:{
        showDetail(){
          this.isShowBefore = false
          this.isShowAfter = false
          this.isShowDetail = true
        }
      }

    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
.search
  width 100%
  height 100%
 .wrap
   width 100%
   height 100%
   .top
     width 100%
     background-color white
     position relative
   .top-search
     width 80%
     height .6rem
     background-color rgb(244, 244, 244)
     margin-left .3rem
     line-height .6rem
     .icon-two
       font-size .4rem
     .s-input
       outline none
       border none
       background-color rgb(244, 244, 244)
       color rgb(51,51,51)
       font-size .3rem


   .cancel
      display inline-block
      position absolute
      width 1rem
      height .6rem
      right .2rem
      top 0
      text-align center
      line-height .6rem
      font-size .3rem
      color rgb(51,51,51)
   .before-s
      width 100%
      height 100%
      background-color white
      .hotSearch
        margin-top .3rem
        width 1.8rem
        height .6rem
        display inline-block
        text-align center
        line-height .6rem
        font-size .3rem
        color rgb(127,127,127)

      .search-ul
        width 100%
        height 100%
        display flex
        flex-flow row wrap
        .search-li
          margin-left .3rem
          margin-bottom .3rem
          display inline-block
          height .5rem
          border 1px solid rgb(127,127,127)
          font-size .3rem
          color rgb(51,51,51)
          line-height .5rem
          &:nth-child(-n+3)
              margin-top .3rem
        .high
          color rgb(180, 40, 45)
          border 1px solid rgb(180, 40, 45)


   .after-s
      width 100%
      height 100%
      background-color white
      .after-ul
        width 100%
        height 100%
        .after-li
          width 100%
          height .9rem
          bottom-border-1px(rgb(127,127,127))
          line-height .9rem
          margin-left .3rem



   .Detail
      width 100%
      height 100%
      background-color white
      .filter
        width 100%
        background-color white
        height 1rem
        bottom-border-1px(rgb(127,127,127))
        line-height 1rem
        display flex
        justify-content space-around
        span
          font-size .3rem
          color rgb(51,51,51)


      .detail-show
        width 100%
        height 100%
        background-color white
        display flex
        justify-content space-between
        .left
          width 3.7rem
          height 5.2583rem
          border 1px solid red
          float left
          .l-img
              width 3.7rem
              height 3.75rem
              img
                width 3.7rem
                height 3.75rem
          .l-text
            width 100%
            height .5rem
            background-color rgb(198, 16, 16)
            color white
            font-size .24rem
            text-align center
            line-height .5rem
          .l-foot
            width 100%
            height .7rem
            margin-top .2rem
            .des
              width 100%
              height .3rem
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              display inline-block
              font-size .3rem
              color rgb(51,51,51)
            .price
              width 100%
              display inline-block
              font-size .3rem
              color rgb(198, 16, 16)
        .right
          width 3.7rem
          height 5.2583rem
          border 1px solid red
          float right





</style>
