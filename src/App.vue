<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
  import FooterGuide from "./components/footerGuide/footerGuide"
  export default {
    name: 'App',
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus">

</style>
