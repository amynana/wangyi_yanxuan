<template>
    <div>profile</div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped lang="stylus">
  .slideWarp
    width 100%
    height 100%
    img
      width 100%
      height auto
  .g-grow
    width 100%
    height .72rem
    background-color rgb(255, 237, 219)
    margin auto
    display flex
    justify-content space-around
    align-items center
    .icon-grow
      width .273rem
      height .273rem
      font-size .24rem
      display inline-block
      background-image url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
      background-size 100% 100%
      vertical-align middle
    .grow
      font-size .2048rem
      display inline-block
      color rgb(180,40,45)
      vertical-align middle

  .swiper-container
    width 100%
    height 3.40rem
    background-color rgb(255, 237, 219)
    .kong
      display flex
      justify-content space-around
      flex-wrap wrap
      .icon-sort
        display inline-block
        width 1.10rem
        height 1.56rem
        margin-left .1rem
        margin-right .1rem
        .sort-img
          width 1.10rem
          height 1.10rem
          display block
        .icon-content
          display block
          color rgb(51,51,51)
          font-size .24rem
          margin-top 0.099rem
          text-align center


  .m-category
    width 92%
    height 3.60rem
    border 1px solid red
    margin auto
    .sort-hot
      width 100%
      height .4998rem
      color rgb(51,51,51)
      font-size .16rem
      line-height .4998rem
    .content
      width 100%
      border 1px solid green
      .line1
        width 100%
        height 2rem
        display flex
        justify-content space-between
        .line1-a
          width 49%
          height 2rem
          background-color rgb(255, 237, 219)
          display inline-block
          .name
            width .8398rem
            border 1px solid blue
            line-height 2rem
            span
              display inline-block
              color rgb(51,51,51)
              font-size .139999rem
              border 1px solid red





</style>
