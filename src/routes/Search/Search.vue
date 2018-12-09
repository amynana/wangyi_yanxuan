<template>
    <div class="search">
      <div class="wrap">
        <div class="top">
          <div class="top-search">
            <i class="iconfont icon-sousuo  icon-two"></i>
            <input type="text" class="s-input">
          </div>

        </div>
        <span class="cancel">取消</span>
        <div class="before-s" v-if="isShowBefore">
          <ul>
            <li>hahah</li>
          </ul>
        </div>
        <div class="after-s" v-else>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
          return {
            isShowBefore:true
          }

        },

    }
</script>

<style scoped lang="stylus">
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
     width 70%
     height .6rem
     border 1px solid red
     margin-left .3rem
     line-height .6rem
     .icon-two
       font-size .4rem
     .s-input
       outline none
       border none


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

</style>
