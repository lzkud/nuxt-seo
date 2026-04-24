<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">Nuxt SEO</NuxtLink>
      </div>
      <nav class="nav">
        <NuxtLink to="/">首页</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
}

.nav a {
  margin-left: 30px;
  color: #333;
  transition: color 0.3s;
}

.nav a:hover {
  color: #409eff;
}
</style>