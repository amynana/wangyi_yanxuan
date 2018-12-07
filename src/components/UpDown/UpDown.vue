<template>
    <div class="updown">
      <div class="u-name">
              <span class="s-avar">
                <img src="https://yanxuan.nosdn.127.net/6311ec4540ebe620ddcd49b10e08a8f6.png?imageView&quality=65&thumbnail=56y56" alt="">
              </span>
        <span class="s-name">服装组&nbsp;小服</span>
      </div>
      <div class="u-title">揭秘2018严选商品线隐藏进阶之路，为美好生活品质加分</div>
      <div class="u-pic">
        <img src="https://yanxuan.nosdn.127.net/2dad391fc894261717d59c1e31e221f8.jpg?imageView&quality=65&thumbnail=690y376" alt="">
      </div>
      <div class="u-rcount">
        <i class="iconfont icon-kanguos myicon"></i>
        <span>33k人看过</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UpDown"
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .updown
    width 100%
    background-color white
    height 8rem
    .u-name
      width 4rem
      height .85rem
      margin .3rem
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
