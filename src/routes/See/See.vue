<template>
  <div class="see">
      <!--头部分-->
      <div class="see-top">
        <div class="top-watch">
          <div class="top-home">
            <a href="">
              <i class="iconfont icon-jianyuede icon-one"></i>
            </a>
          </div>
          <div class="top-select">
            <a href="">
              <p>发现</p>
              <span>甄选家</span>
            </a>
          </div>
          <div class="top-cart">
            <a href="">
              <i class="iconfont icon-listgouwu icon-two"></i>
            </a>
          </div>
          <div class="top-search">
            <a href="">
              <i class="iconfont icon-sousuo icon-three"></i>
            </a>
          </div>

        </div>
        <div class="sort-list">
          <ul class="sort-ul">
            <li class="sort-li on">推荐</li>
            <li class="sort-li">达人</li>
            <li class="sort-li">上新</li>
            <li class="sort-li">晒单</li>
            <li class="sort-li">HOME</li>
          </ul>
        </div>
      </div>
      <!--内容部分-->
    <div class="Scroll">
      <div class="content-scroll">
        <div class="content">
          <div class="main-one">
            <div class="one-img">
              <img
                src="https://yanxuan.nosdn.127.net/b7db4d98e47a94adda8b4d61bc5f4af0.jpg?imageView&quality=65&thumbnail=690y376"
                alt="">
            </div>
          </div>
          <div class="wrap-all">
            <see-between></see-between>
            <split/>
            <up-down></up-down>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import seeBetween from "../../components/SeeBetween/SeeBetween.vue"
  import Split from "../../components/Split/Split.vue"
  import UpDown from "../../components/UpDown/UpDown.vue"
  import BScroll from "better-scroll"
  export default {
    name: "see",
    components: {
      UpDown,
      seeBetween,
      Split
    },
    mounted(){
      this.$store.dispatch('getRecommends')

      new BScroll('.Scroll',{
        click:true,
      })
    },
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .see
    width 100%
    .see-top
      width 100%
      height .96rem
      position relative
      z-index 10
      .top-watch
        width 93%
        height .8rem
        background-color white
        border-radius 0.09rem
        margin auto
        position relative
        .top-home
          width .23rem
          height .8rem
          font-size .24rem
          text-align center
          line-height .8rem
          position absolute
          z-index 10
          left 0
          .icon-one
            font-size .45rem
        .top-select
          width 2.5rem
          height .8rem
          position absolute
          left 2.5rem
          p
            width 1rem
            height .7rem
            font-size .4rem
            color rgb(180, 40, 45)
            position absolute
            left .3rem
            text-align center
            line-height .7rem
            font-weight bold
          span
            display inline-block
            width .8rem
            height .7rem
            font-size .16rem
            color rgb(127, 127, 127)
            position absolute
            left 1.5rem
            text-align center
            line-height .7rem
        .top-cart
          width .23rem
          height .8rem
          text-align center
          line-height .8rem
          position absolute
          right 1rem
          .icon-two
            font-size .45rem
        .top-search
          width .23rem
          height .8rem
          font-size .50rem
          text-align center
          line-height .8rem
          position absolute
          right 0.2rem
          .icon-three
            font-size .45rem

      .sort-list
        width 100%
        height .7rem
        z-index 12
        background-color rgb(250, 250, 250)
        bottom-border-1px(rgb(127, 127, 127))
        .sort-ul
          width 90%
          height .7rem
          margin auto
          display flex
          justify-content space-between
          flex-flow row nowrap
          .sort-li
            width .8rem
            height .7rem
            font-size .16rem
            color rgb(127, 127, 127)
            line-height .7rem
            text-align center
            &.on
              border-bottom 0.04rem solid rgb(180, 40, 45)
              color rgb(180, 40, 45)


    .Scroll
      width 100%
      height 11rem
      overflow hidden
      .content-scroll
        width 100%
        .content
          width 100%
          margin-top .8rem
          .main-one
            width 100%
            height 4.5rem
            background-color white
            display flex
            justify-items center
            .one-img
              width 92%
              margin auto
              img
                width 100%
          .wrap-all
            width 100%
            border 1px solid red

</style>
