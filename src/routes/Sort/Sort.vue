<template>
  <div class="container">
    <!--头部搜索-->
      <div class="m-topSearchIpt">
        <i class="iconfont icon-sousuo myicon"></i>
        <span class="top-text">搜索商品,共19009款好物</span>
      </div>
    <!--头部搜索结束-->
    <!--主体部分开始-->
      <div class="main">
        <div class="main-left">
          <div class="list-left">
            <ul class="list-ul-left">
              <li class="list-li-left" v-for="(categroy,index) in categroys" :key="index" @click="leftLiIndex(index)" :class="{on:currentIndex===index}">
                {{categroy.name}}
              </li>
            </ul>
          </div>
        </div>
        <div class="main-right">
          <div class="main-right-banner"  v-for="(categroy,index) in categroys" :key="index"
               :style="{backgroundImage:`url(${categroy.wapBannerUrl})`}"  v-show="currentIndex ===index">
          </div>
          <div class="right-list">
            <ul class="list-ul" v-for="(cates,index) in categroys" :key="index"  v-show="currentIndex === index">
              <li class="list-li" v-for="(shop,index) in cates.subCateList" :key="index"  >
                <a href="#" class="list-a">
                  <div class="li-img">
                    <img :src="shop.wapBannerUrl" alt="">
                  </div>
                  <div class="li-name">
                      {{shop.name}}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    import {mapState} from "vuex"
    import BScroll from "better-scroll"
    export default {
        name: "sort",
        data(){
          return {
            currentIndex:0,
            toggleOn:false,
          }
        },
        mounted(){
          this.$store.dispatch('getCategroys')
        },
        computed:{
          ...mapState(["categroys"]),

        },
      watch:{
        categroys(){
          this.$nextTick(()=>{
            new BScroll('.list-left',{
              click:true

            })
          })
        }
      },
      methods:{
        leftLiIndex(index){
          this.currentIndex = index
          if(this.currentIndex = index){
            this.toggleOn = ! this.toggleOn
          }

          return this.currentIndex
        }
      }

    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
.container
  width 100%
  height 100%
  .m-topSearchIpt
    width 92%
    height .56rem
    margin auto
    margin-top .2rem
    background-color white
    border-radius 0.08rem
    line-height .56rem
    position relative
    font-size .27998rem
    margin-bottom .2rem
    .myicon
      position absolute
      left 1.8rem
    .top-text
      position absolute
      left 2.3rem
      color rgb(51,51,51)


  .main
    width 100%
    height 100%
    position relative
    .main-left
      width 1.62rem
      .list-left
        width 100%
        height 100%
        position relative
        top-border-1px(rgb(white))
        .list-ul-left
          width 100%
          .list-li-left
            width 1.62rem
            height .5rem
            margin-bottom 0.4rem
            font-size .24rem
            color rgb(51,51,51)
            text-align center
            line-height .5rem
            &.on
              font-size .28rem
              color rgb(171,43,43)
              border-left 0.03rem solid rgb(171,43,43)


    .main-right
      width 77%
      position absolute
      top 0
      right 0
      .main-right-banner
        width 5.28rem
        height 1.92rem
        margin-left .24rem
        background-size 100% 100%
        background-position 0 0
        position absolute
      .right-list
        width 5.28rem
        height 10rem
        margin-top 2rem
        margin-left .24rem
        position relative
        .list-ul
          width 100%
          height 100%
          display flex
          justify-content space-between
          flex-wrap wrap
          align-content flex-start
          position absolute
          top 0
          left 0
          .list-li
            width 1.44rem
            height 2.16rem
            .list-a
              display inline-block
              .li-img
                width 1.44rem
                height 1.44rem
                img
                  width 100%
                  height 100%
              .li-name
                width 1.44rem
                height .5rem
                font-size .24rem
                color rgb(51,51,51)
                text-align center
                line-height .5rem


</style>
