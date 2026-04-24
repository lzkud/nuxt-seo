<template>
  <div class="error-page">
    <div class="container">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <NuxtLink to="/" class="btn btn-primary">返回首页</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.error-page h1 {
  font-size: 72px;
  color: #409eff;
  margin-bottom: 20px;
}

.error-page p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}
</style>