<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Nuxt SEO. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 50px;
}

.footer p {
  margin: 0;
  font-size: 14px;
}
</style>