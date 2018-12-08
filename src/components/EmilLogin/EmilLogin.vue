<template>
  <div class="myPhone">
    <div class="only-p">
      <div class="see-top">
        <div class="top-watch">
          <div class="top-home" @click="$router.replace('/home')">
            <a href="">
              <i class="iconfont icon-shouye icon-one"></i>
            </a>
          </div>
          <div class="top-select">
            <span class="top-img">
              网易严选
            </span>
          </div>
          <div class="top-cart">
            <a href="">
              <i class="iconfont icon-sousuo  icon-two"></i>
            </a>
          </div>
          <div class="top-search">
            <a href="">
              <i class="iconfont icon-duogouwu icon-three"></i>
            </a>
          </div>

        </div>

      </div>
      <div class="phone-main">
        <div class="p-img">
          <img src="./yanxuan-small.png" alt="">
        </div>
        <div class="login-method">
          <div class="phone-number">
            <input type="text" placeholder="账号">
          </div>
          <div class="message">
            <input type="text" placeholder="密码">
          </div>
          <div class="mes-login">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
          <div class="goto-login">登录</div>
          <div class="other-method" @click="handleC">其他登录方式</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PhoneLogin",
    methods:{
     handleC(){
       this.$emit("goEmil")
     }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .myPhone
    width 100%
    height 100%
    .only-p
      width 100%
      height 100%
      .see-top
        width 100%
        height .96rem
        position relative
        z-index 10
        .top-watch
          width 100%
          height .8rem
          margin auto
          position relative

          .top-home
            width .23rem
            height .8rem
            font-size .45rem
            text-align center
            line-height .8rem
            position absolute
            z-index 10
            left 0
            margin-left .2rem
            .icon-one
              font-size .50rem
          .top-select
            width 2.5rem
            height .8rem
            position absolute
            left 2.5rem
            span
              display inline-block
              width 2rem
              height .7rem
              font-size .45rem
              font-family "楷体"
              color rgb(51,51,51)
              position absolute
              left 0
              right 0
              margin 0 auto
              text-align center
              line-height .7rem
          .top-cart
            width .23rem
            height .8rem
            text-align center
            line-height .8rem
            position absolute
            right 1.5rem
            .icon-two
              font-size .50rem
          .top-search
            width .23rem
            height .8rem
            font-size .50rem
            text-align center
            line-height .8rem
            position absolute
            right .5rem
            .icon-three
              font-size .50rem


      .phone-main
        width 100%
        height 100%
        background-color white
      .p-img
        width 3rem
        height 2rem
        margin auto
        img
          margin-top .4rem
          margin-left .4rem


      .login-method
        width 92%
        height 8rem
        margin auto
        .phone-number
          margin-top 1.5rem
          width 100%
          height 1rem
          bottom-border-1px(rgb(127,127,127))
          input
            width 100%
            height 100%
            font-size .24rem
            color rgb(127,127,127)
            outline none
            border none


        .message
          width 100%
          height 1rem
          bottom-border-1px(rgb(127,127,127))
          position relative
          input
            width 100%
            height 100%
            font-size .24rem
            color rgb(127,127,127)
            outline none
            border none

          button
            width 2rem
            height .6rem
            background-color white
            border 1px solid rgb(127,127,127)
            position absolute
            right .1rem
            top .2rem
            border-radius 0.1rem


        .mes-login
          width 100%
          height 1rem
          font-size .28rem
          color rgb(51,51,51)
          line-height 1rem
          display flex
          justify-content  space-between
        .goto-login
          width 100%
          height .9rem
          background-color rgb(180, 40, 45)
          color white
          text-align center
          line-height .9rem
          font-size .28rem
          border-radius 0.04rem

        .other-method
          width 100%
          height .9rem
          margin-top .3rem
          border 1px solid rgb(180, 40, 45)
          color rgb(180, 40, 45)
          text-align center
          line-height .9rem
          font-size .28rem
          border-radius 0.04rem







</style>
