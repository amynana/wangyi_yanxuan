<template>
  <div>
    <h2>你所访问的连接不存在</h2>
    <button @click="$router.replace('/home')">回到首页</button>
  </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>

</style>
