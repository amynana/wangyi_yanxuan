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
          <div class="list">
            <ul class="list-ul">
              <li class="list-li" v-for="(categroy,index) in categroys" :key="index">
                <a href="#">{{categroy.name}}</a>
              </li>

            </ul>
          </div>
        </div>
        <div class="main-right">
          <div class="main-right-banner">
          </div>
          <div class="right-list">
            <ul class="list-ul">
              <li class="list-li">
                <a href="#" class="list-a">
                  <div class="li-img">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </div>
                  <div class="li-name">
                      三石福利价
                  </div>
                </a>
              </li>
              <li class="list-li">
                <a href="#" class="list-a">
                  <div class="li-img">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </div>
                  <div class="li-name">
                    三石福利价
                  </div>
                </a>
              </li>
              <li class="list-li">
                <a href="#" class="list-a">
                  <div class="li-img">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </div>
                  <div class="li-name">
                    三石福利价
                  </div>
                </a>
              </li>
              <li class="list-li">
                <a href="#" class="list-a">
                  <div class="li-img">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </div>
                  <div class="li-name">
                    三石福利价
                  </div>
                </a>
              </li>
              <li class="list-li">
                <a href="#" class="list-a">
                  <div class="li-img">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </div>
                  <div class="li-name">
                    三石福利价
                  </div>
                </a>
              </li>
              <li class="list-li">
                <a href="#" class="list-a">
                  <div class="li-img">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </div>
                  <div class="li-name">
                    三石福利价
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
    export default {
        name: "sort",
        mounted(){
          this.$store.dispatch('getCategroys')
        },
        computed:{
          ...mapState(["categroys"])
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
      .list
        width 100%
        height 100%
        position relative
        top-border-1px(rgb(white))
        .list-ul
          width 100%
          height 100%
          .list-li
            width 1.62rem
            height .5rem
            margin-bottom 0.4rem
            font-size .24rem
            color rgb(51,51,51)
            text-align center
            line-height .5rem

    .main-right
      width 77%
      border 1px solid red
      position absolute
      top 0
      right 0
      .main-right-banner
        width 5.28rem
        height 1.92rem
        margin-left .24rem
        background-image:url(http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75);
        background-size 100% 100%

      .right-list
        width 5.28rem
        height 10rem
        margin-top .4rem
        margin-left .24rem
        .list-ul
          width 100%
          height 100%
          display flex
          justify-content space-between
          flex-wrap wrap
          align-content flex-start
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
