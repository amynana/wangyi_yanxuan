<template>
    <div class="Recommend">
      <!--内容部分-->
      <div class="Scroll">
        <div class="content-scroll">
          <div class="content">
            <see-between></see-between>
            <split/>
            <div class="main-one">
              <div class="one-img">
                <img
                  src="https://yanxuan.nosdn.127.net/b7db4d98e47a94adda8b4d61bc5f4af0.jpg?imageView&quality=65&thumbnail=690y376"
                  alt="">
              </div>
            </div>
            <div class="wrap-all">
              <see-between></see-between>
              <split/>
              <up-down></up-down>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import Split from "../../../components/Split/Split.vue"
  import SeeBetween from "../../../components/SeeBetween/SeeBetween.vue"
  import UpDown from "../../../components/UpDown/UpDown.vue"
  import {mapState} from "vuex"
  import BScroll from "better-scroll"
    export default {
        name: "Recommend",
        components:{
          Split,
          SeeBetween,
          UpDown,
        },
        computed:{
          ...mapState(["recommends"])
        },
        mounted(){
          new BScroll('.Scroll',{
            click:true,
          })
    },

    }
</script>

<style scoped lang="stylus">
  .Recommend
    width 100%
    .Scroll
      width 100%
      height 12rem
      overflow hidden
      border 2px solid blue
      .content-scroll
         width 100%
        .content
          width 100%
          margin-top .8rem
          .main-one
            width 100%
            height 4.5rem
            background-color white
            display flex
            justify-items center
            .one-img
              width 92%
              margin auto
              img
                width 100%
          .wrap-all
            width 100%
            height 10rem
            border 1px solid red




</style>
