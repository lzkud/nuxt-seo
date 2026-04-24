# Nuxt 3 基础功能使用指南

## 1. 路由系统

### 1.1 基础路由
Nuxt 3 使用文件系统路由，`pages/` 目录下的文件自动生成路由。

```
pages/
  index.vue          → /
  about.vue          → /about
  user/
    index.vue        → /user
    profile.vue      → /user/profile
```

### 1.2 动态路由
使用方括号创建动态路由参数。

```
pages/
  user/
    [id].vue         → /user/:id
  blog/
    [slug].vue       → /blog/:slug
```

**获取路由参数：**
```vue
<script setup>
const route = useRoute()
const id = route.params.id
</script>
```

### 1.3 路由导航

**使用 NuxtLink：**
```vue
<template>
  <!-- 基础导航 -->
  <NuxtLink to="/about">关于我们</NuxtLink>
  
  <!-- 动态路由 -->
  <NuxtLink :to="`/user/${userId}`">用户详情</NuxtLink>
  
  <!-- 带查询参数 -->
  <NuxtLink :to="{ path: '/search', query: { q: 'nuxt' } }">搜索</NuxtLink>
</template>
```

**编程式导航：**
```vue
<script setup>
const router = useRouter()

// 跳转到指定路由
const goToAbout = () => {
  router.push('/about')
}

// 带参数跳转
const goToUser = (id) => {
  router.push(`/user/${id}`)
}

// 带查询参数
const goToSearch = () => {
  router.push({ path: '/search', query: { q: 'nuxt' } })
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>
```

### 1.4 路由传参

**方式1：URL 参数（params）**
```vue
<!-- pages/user/[id].vue -->
<script setup>
const route = useRoute()
const userId = route.params.id
</script>
```

**方式2：查询参数（query）**
```vue
<!-- 跳转 -->
<NuxtLink :to="{ path: '/search', query: { keyword: 'vue', page: 1 } }">
  搜索
</NuxtLink>

<!-- 接收 -->
<script setup>
const route = useRoute()
const keyword = route.query.keyword
const page = route.query.page
</script>
```

**方式3：路由 meta 数据**
```vue
<script setup>
definePageMeta({
  title: '用户中心',
  requiresAuth: true
})
</script>
```

## 2. 数据遍历

### 2.1 v-for 基础用法

**遍历数组：**
```vue
<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      {{ index + 1 }}. {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
const items = ref([
  { id: 1, name: '项目1' },
  { id: 2, name: '项目2' },
  { id: 3, name: '项目3' }
])
</script>
```

**遍历对象：**
```vue
<template>
  <div v-for="(value, key, index) in user" :key="key">
    {{ index }}. {{ key }}: {{ value }}
  </div>
</template>

<script setup>
const user = ref({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com'
})
</script>
```

**遍历数字范围：**
```vue
<template>
  <span v-for="n in 10" :key="n">{{ n }} </span>
</template>
```

### 2.2 条件渲染配合遍历

```vue
<template>
  <div v-for="item in items" :key="item.id">
    <div v-if="item.status === 'active'">
      活跃：{{ item.name }}
    </div>
    <div v-else-if="item.status === 'pending'">
      待处理：{{ item.name }}
    </div>
    <div v-else>
      已完成：{{ item.name }}
    </div>
  </div>
</template>
```

## 3. 样式设置

### 3.1 Scoped 样式
```vue
<template>
  <div class="container">
    <h1 class="title">标题</h1>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.title {
  color: #333;
  font-size: 24px;
}
</style>
```

### 3.2 动态 Class

**对象语法：**
```vue
<template>
  <div :class="{ active: isActive, 'text-danger': hasError }">
    内容
  </div>
</template>

<script setup>
const isActive = ref(true)
const hasError = ref(false)
</script>
```

**数组语法：**
```vue
<template>
  <div :class="[activeClass, errorClass]">内容</div>
</template>

<script setup>
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>
```

### 3.3 动态 Style

**对象语法：**
```vue
<template>
  <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
    内容
  </div>
</template>

<script setup>
const textColor = ref('#ff0000')
const fontSize = ref(16)
</script>
```

**数组语法：**
```vue
<template>
  <div :style="[baseStyles, overridingStyles]">内容</div>
</template>

<script setup>
const baseStyles = ref({ color: 'red' })
const overridingStyles = ref({ fontSize: '20px' })
</script>
```

### 3.4 全局样式
在 `nuxt.config.js` 中配置：
```js
export default defineNuxtConfig({
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/common.css'
  ]
})
```

### 3.5 CSS Modules
```vue
<template>
  <div :class="$style.container">
    <h1 :class="$style.title">标题</h1>
  </div>
</template>

<style module>
.container {
  padding: 20px;
}

.title {
  color: #333;
}
</style>
```

## 4. 组件通信

### 4.1 Props（父传子）
```vue
<!-- 父组件 -->
<template>
  <ChildComponent :title="pageTitle" :count="10" />
</template>

<script setup>
const pageTitle = ref('首页')
</script>

<!-- 子组件 -->
<script setup>
const props = defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  }
})
</script>
```

### 4.2 Emits（子传父）
```vue
<!-- 子组件 -->
<template>
  <button @click="handleClick">点击</button>
</template>

<script setup>
const emit = defineEmits(['update', 'delete'])

const handleClick = () => {
  emit('update', { id: 1, name: '更新' })
}
</script>

<!-- 父组件 -->
<template>
  <ChildComponent @update="handleUpdate" />
</template>

<script setup>
const handleUpdate = (data) => {
  console.log('收到更新', data)
}
</script>
```

### 4.3 v-model
```vue
<!-- 子组件 -->
<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<!-- 父组件 -->
<template>
  <ChildComponent v-model="inputValue" />
</template>

<script setup>
const inputValue = ref('')
</script>
```

## 5. 状态管理（Pinia）

### 5.1 创建 Store
```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Counter'
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2
  },
  
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
```

### 5.2 使用 Store
```vue
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">+1</button>
    <button @click="counter.decrement()">-1</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
```

## 6. 数据请求

### 6.1 useFetch
```vue
<script setup>
// 基础用法
const { data, pending, error, refresh } = await useFetch('/api/users')

// 带参数
const { data: user } = await useFetch(`/api/users/${userId}`)

// POST 请求
const { data } = await useFetch('/api/users', {
  method: 'POST',
  body: { name: '张三', age: 25 }
})
</script>
```

### 6.2 useAsyncData
```vue
<script setup>
const { data, pending, error, refresh } = await useAsyncData(
  'users',
  () => $fetch('/api/users')
)
</script>
```

### 6.3 Axios（自定义封装）
```vue
<script setup>
const { $axios } = useNuxtApp()

const fetchUsers = async () => {
  try {
    const response = await $axios.get('/api/users')
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
</script>
```

## 7. 生命周期

### 7.1 组件生命周期
```vue
<script setup>
import { onMounted, onBeforeMount, onUpdated, onBeforeUnmount } from 'vue'

onBeforeMount(() => {
  console.log('组件挂载前')
})

onMounted(() => {
  console.log('组件已挂载')
})

onUpdated(() => {
  console.log('组件已更新')
})

onBeforeUnmount(() => {
  console.log('组件卸载前')
})
</script>
```

### 7.2 Nuxt 生命周期钩子
```vue
<script setup>
// 页面级别的钩子
definePageMeta({
  middleware: 'auth'
})

// 在页面导航前执行
onBeforeRouteLeave((to, from) => {
  console.log('离开页面')
})
</script>
```

## 8. 常用 Composables

### 8.1 响应式数据
```vue
<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ref - 基础类型
const count = ref(0)

// reactive - 对象
const user = reactive({
  name: '张三',
  age: 25
})

// computed - 计算属性
const doubleCount = computed(() => count.value * 2)

// watch - 监听
watch(count, (newVal, oldVal) => {
  console.log(`count 从 ${oldVal} 变为 ${newVal}`)
})
</script>
```

### 8.2 Nuxt 内置 Composables
```vue
<script setup>
// 路由
const route = useRoute()
const router = useRouter()

// 运行时配置
const config = useRuntimeConfig()

// Head 管理
useHead({
  title: '页面标题',
  meta: [
    { name: 'description', content: '页面描述' }
  ]
})

// SEO
useSeoMeta({
  title: '页面标题',
  description: '页面描述',
  ogImage: '/og-image.jpg'
})
</script>
```

## 9. 环境变量

### 9.1 配置文件
```
# .env.development
NUXT_PUBLIC_API_BASE=http://localhost:8080
NUXT_PUBLIC_APP_NAME=开发环境

# .env.production
NUXT_PUBLIC_API_BASE=https://api.example.com
NUXT_PUBLIC_APP_NAME=生产环境
```

### 9.2 使用环境变量
```vue
<script setup>
const config = useRuntimeConfig()
const apiBase = config.public.apiBase
const appName = config.public.appName
</script>
```

## 10. 常见问题

### 10.1 页面刷新 404
确保使用 `NuxtLink` 而不是 `<a>` 标签进行内部导航。

### 10.2 样式不生效
检查是否使用了 `scoped`，确保选择器正确。

### 10.3 数据不响应
确保使用 `ref` 或 `reactive` 包裹数据。

### 10.4 组件未自动导入
检查组件是否在 `components/` 目录下，文件名是否符合规范。

## 参考资源

- [Nuxt 3 官方文档](https://nuxt.com)
- [Vue 3 官方文档](https://vuejs.org)
- [Pinia 官方文档](https://pinia.vuejs.org)