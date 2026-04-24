import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', {
  // State
  state: () => ({
    // 计数器
    counter: 0,
    
    // 用户信息
    userInfo: {
      name: '游客',
      email: '',
      isLoggedIn: false
    },
    
    // 购物车
    cart: [],
    
    // 待办事项
    todos: [
      { id: 1, text: '学习 Nuxt 3', completed: false },
      { id: 2, text: '学习 Pinia', completed: false },
      { id: 3, text: '构建项目', completed: false }
    ],
    
    // 下一个 todo ID
    nextTodoId: 4
  }),

  // Getters
  getters: {
    // 双倍计数
    doubleCounter: (state) => state.counter * 2,
    
    // 购物车总价
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    
    // 购物车商品数量
    cartItemCount: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    
    // 待办事项统计
    todosStats: (state) => {
      const total = state.todos.length
      const completed = state.todos.filter(todo => todo.completed).length
      const pending = total - completed
      const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0
      
      return {
        total,
        completed,
        pending,
        completionRate
      }
    },
    
    // 未完成的待办事项
    pendingTodos: (state) => {
      return state.todos.filter(todo => !todo.completed)
    },
    
    // 已完成的待办事项
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed)
    }
  },

  // Actions
  actions: {
    // 计数器操作
    increment() {
      this.counter++
    },
    
    decrement() {
      this.counter--
    },
    
    incrementBy(amount) {
      this.counter += amount
    },
    
    reset() {
      this.counter = 0
    },
    
    // 用户操作
    login(name, email) {
      this.userInfo = {
        name,
        email,
        isLoggedIn: true
      }
    },
    
    logout() {
      this.userInfo = {
        name: '游客',
        email: '',
        isLoggedIn: false
      }
      // 登出时清空购物车
      this.cart = []
    },
    
    updateUserName(name) {
      this.userInfo.name = name
    },
    
    // 购物车操作
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({
          ...product,
          quantity: 1
        })
      }
    },
    
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    },
    
    updateCartItemQuantity(productId, quantity) {
      const item = this.cart.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
        }
      }
    },
    
    clearCart() {
      this.cart = []
    },
    
    // 待办事项操作
    addTodo(text) {
      if (text.trim()) {
        this.todos.push({
          id: this.nextTodoId++,
          text: text.trim(),
          completed: false
        })
      }
    },
    
    removeTodo(id) {
      const index = this.todos.findIndex(todo => todo.id === id)
      if (index > -1) {
        this.todos.splice(index, 1)
      }
    },
    
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    
    updateTodoText(id, text) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo && text.trim()) {
        todo.text = text.trim()
      }
    },
    
    clearCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    
    toggleAllTodos() {
      const allCompleted = this.todos.every(todo => todo.completed)
      this.todos.forEach(todo => {
        todo.completed = !allCompleted
      })
    }
  }
})