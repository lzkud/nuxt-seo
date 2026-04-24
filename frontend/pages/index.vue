<template>
  <div class="home">
    <div class="container">
      <h1>欢迎使用 Nuxt 3 SEO 脚手架</h1>
      <p>这是一个干净、现代化的 Nuxt 3 项目模板</p>
      
      <div class="features">
        <div class="feature-item">
          <h3>⚡ Vite 驱动</h3>
          <p>极速开发体验</p>
        </div>
        <div class="feature-item">
          <h3>🎨 Vue 3</h3>
          <p>Composition API</p>
        </div>
        <div class="feature-item">
          <h3>📦 Pinia</h3>
          <p>现代状态管理</p>
        </div>
        <div class="feature-item">
          <h3>🔌 Axios</h3>
          <p>HTTP 请求封装</p>
        </div>
      </div>

      <div class="actions">
        <button class="btn btn-primary" @click="testStore">测试 Store</button>
        <button class="btn btn-primary" @click="testApi">测试 API</button>
        <NuxtLink to="/demo" class="btn btn-demo">🎯 功能演示</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores'

const store = useMainStore()

const testStore = () => {
  store.increment()
  alert(`当前计数: ${store.count}`)
}

const testApi = async () => {
  try {
    const config = useRuntimeConfig()
    alert(`API 地址: ${config.public.apiBase}`)
  } catch (error) {
    console.error('API 测试失败:', error)
  }
}
</script>

<style scoped>
.home {
  padding: 40px 0;
}

h1 {
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.home > .container > p {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-bottom: 50px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.feature-item {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-item h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #409eff;
}

.feature-item p {
  color: #666;
  font-size: 14px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}
</style>