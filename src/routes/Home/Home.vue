<template>
  <div class="hdWraper">
    <div class="m-hd">
      <div class="line">
        <a href="#" class="logo"></a>
        <div class="m-topSearchIpt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共19914款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="tabWrap">
        <div class="m-tabs">
           <ul class="nav">
             <li>
               <a href="#">推荐</a>
             </li>
             <li>
               <a href="#">居家</a>
             </li>
             <li>
               <a href="#">鞋包</a>
             </li>
             <li>
               <a href="#">服装</a>
             </li>
             <li>
               <a href="#">电器</a>
             </li>
             <li>
               <a href="#">推荐</a>
             </li>
             <li>
               <a href="#">推荐</a>
             </li>
             <li>
               <a href="#">推荐</a>
             </li>
             <li>
               <a href="#">推荐</a>
             </li>
             <li>
               <a href="#">推荐</a>
             </li>
           </ul>
        </div>
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "home",

  }
</script>

<style scoped lang="stylus">
.hdWraper
  height 1.48rem
  .m-hd
    position fixed!important
    left 0
    top 0
    z-index 5
    width 100%
    background-color #fff
    border-bottom 1px solid #d9d9d9
    .line
      position relative
      z-index 2
      display flex
      flex-flow row nowrap
      -webkit-box-align: center
      align-items center
      background #fff
      padding .16rem .3rem
      .logo
        width 1.38rem
        height .4rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        display inline-block
        margin-right .2rem
        background-size cover
        background-position center
      .m-topSearchIpt
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items center
        -webkit-box-pack center
        justify-content center
        height .56rem
        font-size .28rem
        background-color #ededed
        border-radius .08rem
        flex-grow 1
        .icon
          display inline-block
          vertical-align middle
          width .28rem
          height .28rem
          margin-right .1rem
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
          background-repeat no-repeat
          background-size 100% 100%
        .placeholder
          color #666
      .loginBtn
        width .72rem
        height .38rem
        line-height .4rem
        text-align center
        color #b4282d;
        border 1px solid #b4282d
        border-radius .08rem
        margin-left 0.16rem
        font-size 0.24rem
    .tabWrap
      position relative
      z-index 2
      background #fff
      margin-top -.01rem
      .m-tabs
        display inline-block
        padding-right 1rem
        background-color #fff
        position relative
        width 6.5rem
        .nav
          display flex
          flex-flow row nowrap
          overflow hidden
          li
            flex-shrink 0
            font-size .28rem
            flex-grow 1
            width .88rem
            height .6rem
            line-height .6rem
            margin-left .4rem
            text-align: center
            a
              color #1E1E1E
      .arrow
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
        margin-top .2rem
        display inline-block
        vertical-align middle
        background-repeat no-repeat
        background-size 100% 100%
        width 1rem
        height .6rem
</style>

