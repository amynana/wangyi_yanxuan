<template>
    <div class="updown">
      <div class="u-name">
              <span class="s-avar">
                <img :src="top.avatar" alt="">
              </span>
        <span class="s-name">{{top.nickname}}</span>
      </div>
      <div class="u-title">{{top.title}}</div>
      <div class="u-pic">
        <img :src="top.picUrl" alt="">
      </div>
      <div class="u-rcount">
        <i class="iconfont icon-kanguos myicon"></i>
        <span>{{top.readCount}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UpDown",
        props:["top"]
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .updown
    width 100%
    height 6.2rem
    background-color white
    margin-top .2rem
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

    .u-title
      width 92%
      margin auto
      height .7rem
      font-size .34rem
      color rgb(51,51,51)
      margin-bottom .2rem
      white-space nowrap
        overflow hidden
        text-overflow ellipsis
    .u-pic
      width 92%
      height 3.5rem
      margin auto
      img
        width 100%
        height 100%
    .u-rcount
      width 3rem
      margin-left .3rem
      height .6rem
      font-size .28rem
      color rgb(127,127,127)
      line-height .6rem
      .myicon
        font-size .30rem
</style>
