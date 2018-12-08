<template>
  <div class="left-right" >
    <div class="between" >
      <div class="between-left">
        <div class="u-name">
              <span class="s-avar">
                <img :src="top.avatar" alt="">
              </span>
          <span class="s-name">{{top.nickname}}</span>
        </div>
        <div class="u-title">{{top.title}}</div>
        <div class="u-describe">{{top.subTitle}}</div>
        <div class="u-rcount">
          <i class="iconfont icon-kanguos myicon"></i>
          <span>{{top.readCount}}</span>
        </div>
      </div>
      <div class="between-right">
        <div class="between-img">
          <img :src="top.picUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        name: "SeeBetween",
        computed:{
          ...mapState(["recommends"])
        },
      props:["top"],



    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .between
    position relative
    background-color white
    margin-top .2rem
    .between-left
      width 100%
      height 3.5rem
      .u-name
        width 4rem
        height .85rem
        margin-left .3rem
        display flex
        justify-content flex-start
        .s-avar
          display inline-block
          width .60rem
          height .60rem
          border-radius 50%
          margin-right .2rem
          img
            display inline-block
            width .60rem
            height .60rem
            border-radius 50%
        .s-name
            display inline-block
            width 2rem
            height .6rem
            line-height .6rem
            font-size .28rem
            color rgb(51,51,51)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
      .u-title
        width 4rem
        margin-left .3rem
        height .7rem
        font-size .34rem
        color rgb(51,51,51)
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .u-describe
        width 4rem
        margin-left .3rem
        height .6rem
        font-size .28rem
        color rgb(127,127,127)
        line-height .6rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .u-rcount
        width 3rem
        margin-left .3rem
        height .6rem
        font-size .28rem
        color rgb(127,127,127)
        line-height .6rem
        .myicon
          font-size .30rem
    .between-right
      width 2.7rem
      height 2.83rem
      position absolute
      right .3rem
      top 0
      .between-img
        width 2.7rem
        height 2.83rem
        img
          width 100%
          height 100%
</style>
