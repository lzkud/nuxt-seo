<template>
  <div class="input-component">
    <h3>v-model 双向绑定组件</h3>
    
    <div class="input-wrapper">
      <label>输入内容：</label>
      <input 
        :value="modelValue" 
        @input="handleInput"
        placeholder="请输入内容"
        class="custom-input"
      />
    </div>

    <div class="display">
      <p>当前值: <strong>{{ modelValue }}</strong></p>
      <p>字符长度: <strong>{{ modelValue.length }}</strong></p>
    </div>

    <div class="actions">
      <button @click="clear">清空</button>
      <button @click="setDefault">设置默认值</button>
    </div>
  </div>
</template>

<script setup>
// 定义 v-model 的 props
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

// 定义 v-model 的 emit
const emit = defineEmits(['update:modelValue'])

// 处理输入事件
const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

// 清空
const clear = () => {
  emit('update:modelValue', '')
}

// 设置默认值
const setDefault = () => {
  emit('update:modelValue', 'Hello Nuxt 3!')
}
</script>

<style scoped>
.input-component {
  border: 2px solid #3b82f6;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background: #eff6ff;
}

h3 {
  color: #3b82f6;
  margin-top: 0;
}

.input-wrapper {
  margin: 15px 0;
}

.input-wrapper label {
  display: block;
  margin-bottom: 8px;
  color: #1e40af;
  font-weight: 500;
}

.custom-input {
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s;
  box-sizing: border-box;
}

.custom-input:focus {
  outline: none;
  border-color: #1d4ed8;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.display {
  background: white;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
}

.display p {
  margin: 8px 0;
  color: #2c3e50;
}

.display strong {
  color: #3b82f6;
}

.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.actions button:hover {
  background: #2563eb;
}

.actions button:active {
  transform: scale(0.98);
}
</style>