<template>
  <div>
    <div class="myLogin" v-if="beforeLogin">
      <div class="login-wrap" v-if="isShow">
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
        <div class="main" >
          <div class="main-img">
            <img src="./yanxuan2.png" alt="">
          </div>
          <div class="login">
            <div class="phone-login" @click="showPhone">
              <i class="iconfont icon-shouji myicon"></i>
              <span class="phone-s">手机号码登录</span>
            </div>
            <div class="emil-login" @click="showEmil">
              <i class="iconfont icon-duanxin myicon"></i>
              <span emil-s>邮箱账号登录</span>
            </div>
            <div class="speed-login" @click="isShow = false">
              <span class="speed-s">手机快捷注册</span>
              <i class="iconfont icon-xiayibu myicon"></i>
            </div>
          </div>
          <div class="foot">
            <div class="foot-one">
              <span class="foot-xin">微信</span>
            </div>
            <div class="foot-two">
              <span class="foot-xin">QQ</span>
            </div>
            <div class="foot-three">
              <span class="foot-xin">微博</span>
            </div>
          </div>
        </div>
      </div>
      <PhoneLogin v-if="onlyPhone" @goPhone="goPhone"  @sussess="sussess"></PhoneLogin>
      <EmilLogin v-if="onlyEmil" @goEmil="goEmil"></EmilLogin>
    </div>
    <div class="susscess" v-else>
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
     <span class="sus-s">{{username}}欢迎你</span>
      <button @click="$router.replace('/home')">去首页</button>
    </div>
  </div>

</template>

<script>
  import PhoneLogin from "../../components/PhoneLogin/PhoneLogin.vue"
  import EmilLogin from "../../components/EmilLogin/EmilLogin.vue"
    export default {
        name: "profile",
        data(){
          return {
            isShow:true, //表示显示登录界面
            onlyPhone:false,//表示显示手机登录界面
            onlyEmil:false, //表示显示邮箱登录
            beforeLogin:true, //表示还没有登录
            username:"",
          }
        },
        components:{
          PhoneLogin,
          EmilLogin,
        },
        methods:{
          showPhone(){
            this.isShow = false
            this.onlyPhone = true
            this.onlyEmil = false
          },
          showEmil(){
            this.isShow = false
            this.onlyEmil = true
            this.onlyPhone = false
          },
          goPhone(){
            this.isShow = true
            this.onlyPhone = false
          },
          goEmil(){
            this.isShow = true
            this.onlyEmil = false
          },
          sussess(phone){
            this.beforeLogin = !this.beforeLogin//表示已经登录
            return this.username = phone
          }
        },
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .myLogin
    width 100%
    height 12rem
    position relative
    .see-top
      width 100%
      height .96rem
      position relative
      z-index 10
      .top-watch
        width 100%
        height .8rem
        background-color white
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




    .main
      width 100%
      height 11.6rem
      .main-img
       width 80%
       height 2.2rem
       margin auto
       margin-top .9rem
       text-align center

      .login
        width 92%
        height 3.4rem
        margin auto
        .phone-login
          width 100%
          height .9rem
          background-color rgb(180, 40, 45)
          color white
          text-align center
          line-height .9rem
          .myicon
            font-size .4rem
          .phone-s
            font-size .30rem


        .emil-login
            width 100%
            height .9rem
            border 1px solid rgb(180, 40, 45)
            color rgb(180, 40, 45)
            text-align center
            line-height .9rem
            margin-top .23rem
            .myicon
              font-size .4rem
            .emil-s
              font-size .30rem
        .speed-login
          width 100%
          height .9rem

          color rgb(51,51,51)
          text-align center
          line-height .9rem
          .myicon
            font-size .4rem
          .speed-s
            font-size .30rem

      .foot
        width 70%
        height 1rem

        position absolute
        bottom 0
        left 0
        right 0
        margin 0 auto
        display flex
        justify-content space-around
        flex-flow row nowrap
        font-size .24rem
        color rgb(127,127,127)
        .foot-one
          width 1.7rem
          height .7rem
          text-align center
          line-height .7rem
        .foot-two
          width 1.7rem
          height .7rem
          text-align center
          line-height .7rem
        .foot-three
          width 1.7rem
          height .7rem
          text-align center
          line-height .7rem
  .susscess
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
        background-color white
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




    .sus-s
      margin-top 4rem
      margin-left 0.3rem
      width 92%
      height 1rem
      display block
      background-color rgb(180, 40, 45)
      color white
      font-size .4rem
      text-align center
      line-height 1rem
    button
      margin-top .2rem
      margin-left 0.3rem
      width 92%
      height 1rem
      display block
      color rgb(180, 40, 45)
      font-size .4rem
      text-align center
      line-height 1rem
</style>
