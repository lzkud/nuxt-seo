<template>
  <div class="layout">
    <CommonHeader />
    <main class="main-content">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px 0;
}
</style>