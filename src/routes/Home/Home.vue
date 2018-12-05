<template>
  <div>
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
            <header>
              <div class="inner">
                <div class="list">
                  <div class="tab active"><span class="txt">居家</span>
                  </div>
                  <div class="tab"><span class="txt">鞋包配饰</span>
                  </div>
                  <div class="tab"><span class="txt">服装</span>
                  </div>
                  <div class="tab"><span class="txt">电器</span>
                  </div>
                  <div class="tab"><span class="txt">洗护</span>
                  </div>
                  <div class="tab"><span class="txt">饮食</span>
                  </div>
                  <div class="tab"><span class="txt">餐厨</span>
                  </div>
                  <div class="tab"><span class="txt">婴童</span>
                  </div>
                  <div class="tab"><span class="txt">文体</span>
                  </div>
                  <div class="tab"><span class="txt">特色区</span>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div class="toggleWrap">
            <div class="linear"></div>
            <div class="toggle">
              <div class="icon"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="slideWarp">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0" alt="tu">
        </div>
      </div>
    </div>
    <div class="g-grow">
      <a href="#" class="grow">
        <i class="icon-grow"></i>
        <span>网易自营品牌</span>
      </a>
      <a href="#" class="grow">
        <i class="icon-grow" ></i>
        <span>网易自营品牌</span>
      </a>
      <a href="#" class="grow">
        <i class="icon-grow"></i>
        <span>网易自营品牌</span>
      </a>
    </div>
    <div class="swiper-container">
      <div class="m-kingKongModule">
        <div class="kong">
          <a href="#" class="icon-sort">
            <img  class="sort-img"  src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img  class="sort-img" src="http://yanxuan.nosdn.127.net/46d33b9a9fbb659fcbac37ec58d51e62.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img  class="sort-img" src="http://yanxuan.nosdn.127.net/31831ada59dc10319cba195620ed9ed0.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img class="sort-img"  src="http://yanxuan.nosdn.127.net/45833c71d4b0d0de0755a20f893fa25f.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img class="sort-img"  src="http://yanxuan.nosdn.127.net/793bca13bb931475ea7f0c00299362bb.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img  class="sort-img"  src="http://yanxuan.nosdn.127.net/fc3e359da08577228354da61ea912c99.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img  class="sort-img" src="http://yanxuan.nosdn.127.net/15e364ca93313bbd6e87dfcba7ae7b74.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img  class="sort-img" src="http://yanxuan.nosdn.127.net/793bca13bb931475ea7f0c00299362bb.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img class="sort-img"  src="http://yanxuan.nosdn.127.net/db5e2ce8c66f7db3f4282ecb24a64236.png" alt="">
            <span class="icon-content">居家</span>
          </a>
          <a href="#" class="icon-sort">
            <img class="sort-img"  src="http://yanxuan.nosdn.127.net/97eb6fd2c7ea76a3a42b9dafa3bd6543.png" alt="">
            <span class="icon-content">居家</span>
          </a>
        </div>
      </div>
    </div>
    <div class="m-category m-indexFloor">
      <p>类目热销榜</p>
      <div class="content">
        <div class="line1">
          <a href="#">
            <div class="name">服装榜</div>
            <div class="imgWrap">
              <img src="" alt="">
            </div>
          </a>
        </div>
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
        padding-right 1rem
        >header
          display flex
          flex-flow row nowrap
          background-color #fff
          position relative
          .inner
            display flex
            flex-flow row nowrap
            overflow hidden
            .list
              display flex
              flex-flow row nowrap
              flex-shrink 0
              padding 0 .3rem
              background-color #fff
              .tab
                margin-left .3rem
                flex-shrink 0
                position relative
                display flex
                flex-flow row nowrap
                align-items center
                justify-content center
                z-index 1
                text-align: center
                &:first-child
                  margin-left: 0
                .txt
                  display inline-block
                  padding 0 .16rem
                  line-height .6rem
                  font-size .28rem
                  color: #333
                  text-align: center
                &.active
                  position relative
                  color #b4282d
                  &::after
                    content ' '
                    position absolute
                    left 0
                    bottom 0
                    width 100%
                    height .04rem
                    background-color #b4282d
      .toggleWrap
        display flex
        flex-grow 0
        align-items center
        justify-content center
        -webkit-box-pack center
        position absolute
        right 0
        top 0
        .linear
          width .6rem
          height .6rem
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
        .toggle
          width 1rem
          height .6rem
          text-align: center
          background-color: #fff;
          .icon
            margin-top .15rem
            display inline-block
            vertical-align middle
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
            background-repeat no-repeat
            background-size 100% 100%
            width .3rem
            height .3rem



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
      margin-right .2rem
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

</style>

