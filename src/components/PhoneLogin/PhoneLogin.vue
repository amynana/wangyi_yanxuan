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
                <input type="text" placeholder="请输入手机号" v-model.lazy="telephone" maxlength="11"
                @focus="getFocus">
              </div>
              <div class="message" v-if="useSms">
                <input type="text" placeholder="请输入短信验证码" v-model="code">
                <button @click="getTelephone" :disabled="!isRightNumber || computedTime > 0">{{getCode}}</button>
              </div>
              <div class="message" v-else>
                <input type="text" placeholder="请输入登录密码">
              </div>
              <div class="mes-login">
                <span>遇到问题?</span>
                <span @click=" useSms = ! useSms">{{useSms?`使用密码登录`:`使用短信登录`}}</span>
              </div>
              <div class="goto-login" @click="login">登录</div>
              <div class="other-method"  @click="handleC">其他登录方式</div>
              <div class="register">
                <span >注册账号</span>
                <i class="iconfont icon-xiayibu myicon"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import {reqSendCode,reqSmsCode} from "../../api";
  import {Toast,MessageBox} from "mint-ui"

  export default {
        name: "PhoneLogin",
        data(){
          return {
            useSms:true,//表示使用手机验证码登录
            getCode:"获取验证码",
            computedTime:0,  //短信发送的时间
            isRightNumber:true, //是否是对的手机号
            telephone:"", //input中的手机号码
            code:"",//短信验证码
          }
        },
        watch:{
          telephone(val){ //监视输入的号码，如果小于11那么每次进来都重置为空
            if(val.length < 11){
             return this.telephone = ""
            }
          }
        },
        methods:{
          handleC(){
            this.$emit("goPhone")
          },
          async  getTelephone(){ //验证手机号是否正确
            if(!(/^\d{10}\d$/.test(this.telephone))){
              this.isRightNumber = !this.isRightNumber
              this.getCode = "手机号不对"
            }else{
              this.isRightNumber = true
              this.computedTime = 30
              //发送请求获得验证码
            const result  = await reqSendCode(this.telephone)
              if(result.code === 0){
                Toast("验证码已发送")
              }else {
                this.computedTime = 0
                MessageBox.alert("发送验证码失败")
              }

             let timer = setInterval(()=>{
                this.computedTime--
                this.getCode = `已发送${this. computedTime}`
               if(this.computedTime<=0){
                 this.computedTime = 0
                 clearInterval(timer)
                 this.getCode = "获取验证码"
               }
               return
              },1000)
            }
          },
          getFocus(){//当input获得焦点时
            this.isRightNumber = true
            this. getCode = "获取验证码"
            return (this.isRightNumber,this. getCode)
          },
          async login(){//用户登录
            //用户登录验证
            if(!this.telephone){
              return  MessageBox.alert("请输入手机号")
            }else if(!this.code){
             return MessageBox.alert("验证码不正确")
            }else{
              const {telephone,code} =this
              console.log(telephone,code)
              const result = await reqSmsCode(telephone,code)
              if(result.code === 0){
                console.log("登录成功")
                const {phone,_id} = result.data
                console.log("手机号为:",phone,_id)
                Toast(`欢迎你${phone}`)
                this.$emit("sussess",phone)
                return (phone,_id)
              }else{
                console.log("登录失败")
               return  MessageBox.alert("登录失败")
              }
            }



          }

        },



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
            font-size .30rem
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
            font-size .30rem
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

        .register
          width 100%
          height .9rem
          margin-top .3rem
          border 1px solid rgb(180, 40, 45)

          text-align center
          line-height .9rem
          font-size .28rem
          border-radius 0.04rem
          span
            color rgb(51,51,51)

          .myicon
            font-size .3rem







</style>
