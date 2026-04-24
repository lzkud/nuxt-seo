# Nuxt SEO 脚手架

基于 Nuxt 3 的现代化前端脚手架，适用于快速开发外包项目。

## 技术栈

- **Nuxt 3.15+** - Vue 3 全栈框架
- **Vue 3.5+** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Pinia** - Vue 3 状态管理
- **Axios** - HTTP 客户端

## 项目结构

```
frontend/
├── assets/              # 静态资源
│   └── css/            # 样式文件
├── components/         # 组件
│   └── common/         # 公共组件
├── composables/        # 组合式函数
├── layouts/            # 布局
├── pages/              # 页面路由
├── plugins/            # 插件
├── public/             # 公共静态文件
├── stores/             # Pinia 状态管理
└── utils/              # 工具函数
```

## 快速开始

### 安装依赖

```bash
cd frontend
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 环境变量

- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置

## 部署

使用 PM2 部署：

```bash
# 构建
npm run build

# 启动
pm2 start ecosystem.config.js
```

## 特性

- ⚡ Vite 驱动，极速开发体验
- 🎨 Vue 3 Composition API
- 📦 Pinia 状态管理
- 🔌 Axios HTTP 封装
- 🎯 自动导入组件和组合式函数
- 📱 响应式设计
- 🚀 生产环境优化

## 开发规范

- 使用 Composition API
- 组件使用 PascalCase 命名
- 文件使用 kebab-case 命名
- 遵循 Vue 3 最佳实践

## License

MIT