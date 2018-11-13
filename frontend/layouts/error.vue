<template>
  <div>
    <div>
      <div>
        <nuxt-link to="/" tag="a">回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['error'],
    head() {
      return {
        title:`哎呀出错了~`
      }
    }
  }
</script>

<style scoped>
</style>
