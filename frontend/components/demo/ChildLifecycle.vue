<template>
  <div class="child-component">
    <h3>子组件</h3>
    <p>这是一个演示生命周期的子组件</p>
    <p>子组件内部计数: {{ childCounter }}</p>
    <button @click="childCounter++">子组件 +1</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const emit = defineEmits(['log'])
const childCounter = ref(0)

onBeforeMount(() => {
  emit('log', 'onBeforeMount', '子组件即将挂载', 'lifecycle')
})

onMounted(() => {
  emit('log', 'onMounted', '子组件已挂载', 'lifecycle')
})

onBeforeUpdate(() => {
  emit('log', 'onBeforeUpdate', '子组件即将更新', 'lifecycle')
})

onUpdated(() => {
  emit('log', 'onUpdated', '子组件已更新', 'lifecycle')
})

onBeforeUnmount(() => {
  emit('log', 'onBeforeUnmount', '子组件即将卸载', 'lifecycle')
})

onUnmounted(() => {
  emit('log', 'onUnmounted', '子组件已卸载', 'lifecycle')
})
</script>

<style scoped>
.child-component {
  background: #e7f5ff;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  padding: 20px;
}

.child-component h3 {
  color: #3b82f6;
  margin-top: 0;
}

.child-component p {
  color: #2c3e50;
  margin: 10px 0;
}

.child-component button {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.child-component button:hover {
  background: #2563eb;
}
</style>