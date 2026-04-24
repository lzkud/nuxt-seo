<template>
  <div class="child-component">
    <h3>子组件</h3>
    
    <!-- 显示接收到的 props -->
    <div class="props-display">
      <h4>接收到的 Props：</h4>
      <p><strong>title:</strong> {{ title }}</p>
      <p><strong>count:</strong> {{ count }}</p>
      <p><strong>user:</strong> {{ user.name }} ({{ user.age }}岁)</p>
    </div>

    <!-- 触发事件 -->
    <div class="actions">
      <button @click="handleIncrement">触发 increment 事件</button>
      <button @click="handleSendMessage">发送消息给父组件</button>
    </div>

    <!-- 内部状态 -->
    <div class="internal-state">
      <p>子组件内部计数: {{ internalCount }}</p>
      <button @click="internalCount++">内部计数+1</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义 props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  user: {
    type: Object,
    default: () => ({ name: '未知', age: 0 })
  }
})

// 定义 emits
const emit = defineEmits(['increment', 'sendMessage'])

// 内部状态
const internalCount = ref(0)

// 触发事件的方法
const handleIncrement = () => {
  emit('increment')
}

const handleSendMessage = () => {
  emit('sendMessage', `来自子组件的消息，当前时间：${new Date().toLocaleTimeString()}`)
}
</script>

<style scoped>
.child-component {
  border: 2px solid #42b983;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background: #f0f9ff;
}

h3 {
  color: #42b983;
  margin-top: 0;
}

h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.props-display {
  background: white;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
}

.props-display p {
  margin: 8px 0;
  color: #2c3e50;
}

.actions {
  margin: 15px 0;
}

.actions button {
  margin-right: 10px;
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.actions button:hover {
  background: #35a372;
}

.internal-state {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
}

.internal-state p {
  margin: 0 0 10px 0;
  color: #856404;
}

.internal-state button {
  padding: 6px 12px;
  background: #ffc107;
  color: #856404;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.internal-state button:hover {
  background: #e0a800;
}
</style>