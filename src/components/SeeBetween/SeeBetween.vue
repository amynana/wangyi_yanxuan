<template>
    <div class="between">
        <div class="between-left">
            <div class="u-name">
              <span class="s-avar">
                <img src="https://yanxuan.nosdn.127.net/6311ec4540ebe620ddcd49b10e08a8f6.png?imageView&quality=65&thumbnail=56y56" alt="">
              </span>
              <span class="s-name">服装组&nbsp;小服</span>
            </div>
            <div class="u-title">双11忘买羽绒服？没关系，还有双12！</div>
            <div class="u-describe">双12时髦保暖羽绒服低至6折</div>
            <div class="u-rcount">
              <i class="iconfont icon-kanguos myicon"></i>
              <span>33k人看过</span>
            </div>
        </div>
        <div class="between-right">
          <div class="between-img">
            <img src="https://yanxuan.nosdn.127.net/affbdf2116ad47ae5fc904b02ab145f6.jpg?imageView&quality=65&thumbnail=272y272" alt="">
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SeeBetween"
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .between
    position relative
    .between-left
      width 100%
      height 3.5rem
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
        width 4rem
        margin-left .3rem
        height .7rem
        font-size .34rem
        color rgb(51,51,51)
      .u-describe
        width 4rem
        margin-left .3rem
        height .6rem
        font-size .28rem
        color rgb(127,127,127)
        line-height .6rem
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
