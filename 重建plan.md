# Nuxt SEO 脚手架重建计划

## 项目概述

**目标：** 重建一个干净的 Nuxt 3 脚手架，移除所有 haima/haimayun/海马/海马云 相关标识，升级到最新技术栈。

**适用场景：** 外包项目快速开发

## 技术栈选择

### 核心框架
- **Nuxt 3.15+** - 最新稳定版
- **Vue 3.5+** - Composition API
- **Vite** - 快速开发构建

### 状态管理
- **Pinia** - Vue 3 官方推荐，比 Vuex 简单

### HTTP 请求
- **Nuxt Axios 模块** - 集成 Axios
- 请求/响应拦截器
- 环境变量配置

### 样式
- 保留现有 reset.css 和 common.css
- Scoped CSS

### 工具
- localStorage 封装
- 通用工具函数

### 不使用
- ❌ TypeScript（外包项目后端接口不稳定）
- ❌ Element Plus（暂不需要 UI 框架）
- ❌ jQuery（Vue 3 不需要）

## 项目结构

```
nuxt-seo/
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── .gitignore
├── nuxt.config.js            # Nuxt 3 配置
├── package.json
├── README.md
├── ecosystem.config.js       # PM2 配置
│
├── assets/                   # 静态资源
│   └── css/
│       ├── reset.css        # CSS 重置
│       └── common.css       # 公共样式
│
├── components/               # 组件
│   ├── common/
│   │   ├── Header.vue       # 头部组件
│   │   └── Footer.vue       # 底部组件
│   └── README.md
│
├── composables/              # Nuxt 3 组合式函数
│   └── useLocalStorage.js   # localStorage 封装
│
├── layouts/                  # 布局
│   ├── default.vue          # 默认布局
│   └── error.vue            # 错误页面
│
├── pages/                    # 页面路由
│   └── index.vue            # 首页
│
├── plugins/                  # 插件
│   └── axios.js             # Axios 配置
│
├── public/                   # 公共静态文件
│   └── favicon.ico
│
├── stores/                   # Pinia 状态管理
│   └── index.js             # 主 store
│
└── utils/                    # 工具函数
    ├── request.js           # Axios 封装
    └── config.js            # 配置文件
```

## 实施步骤

### 阶段 1：清理旧项目
1. 备份当前 frontend 目录为 frontend_backup
2. 删除 frontend 目录

### 阶段 2：初始化 Nuxt 3 项目
1. 创建新的 Nuxt 3 项目
2. 安装核心依赖

### 阶段 3：配置基础设施
1. 创建 nuxt.config.js 配置文件
2. 创建环境变量文件（.env.development, .env.production）
3. 配置 .gitignore

### 阶段 4：迁移样式文件
1. 创建 assets/css 目录
2. 复制 reset.css 和 common.css

### 阶段 5：创建基础组件
1. 创建 components/common/Header.vue
2. 创建 components/common/Footer.vue

### 阶段 6：创建布局
1. 创建 layouts/default.vue
2. 创建 layouts/error.vue

### 阶段 7：创建页面
1. 创建 pages/index.vue

### 阶段 8：配置 Pinia
1. 安装 @pinia/nuxt
2. 创建 stores/index.js

### 阶段 9：配置 Axios
1. 安装 @nuxtjs/axios
2. 创建 plugins/axios.js
3. 创建 utils/request.js

### 阶段 10：工具函数
1. 创建 composables/useLocalStorage.js
2. 创建 utils/config.js

### 阶段 11：部署配置
1. 创建 ecosystem.config.js（PM2）
2. 更新 README.md

### 阶段 12：测试验证
1. 运行开发服务器
2. 验证所有功能正常

## 核心依赖包

```json
{
  "dependencies": {
    "nuxt": "^3.15.0",
    "vue": "^3.5.0",
    "@pinia/nuxt": "^0.5.0",
    "pinia": "^2.2.0",
    "@nuxtjs/axios": "^5.13.6"
  },
  "devDependencies": {
    "@nuxt/devtools": "latest"
  }
}
```

## 环境变量配置

### .env.development
```env
NODE_ENV=development
API_BASE_URL=http://localhost:8080/api
```

### .env.production
```env
NODE_ENV=production
API_BASE_URL=https://api.example.com
```

## PM2 配置

```js
module.exports = {
  apps: [{
    name: 'nuxt-seo',
    script: '.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

## 移除内容清单

### 完全移除
- ❌ 所有包含 "haima"、"haimayun"、"海马"、"海马云" 的代码
- ❌ HAIMA_ENV 环境变量
- ❌ jQuery 依赖
- ❌ Element UI 依赖
- ❌ 复杂的多环境脚本（run.sh, start.sh, restart.sh）
- ❌ 百度统计硬编码

### 简化
- ✅ 统一使用 NODE_ENV 管理环境
- ✅ 使用 .env 文件管理配置
- ✅ 简化启动脚本

## 预期效果

### 性能提升
- 开发服务器启动速度：**10x 提升**（Vite vs Webpack）
- 构建速度：**5x 提升**
- 热更新速度：**即时响应**

### 代码简化
- 状态管理代码量：**减少 40%**（Pinia vs Vuex）
- 配置文件：**减少 60%**（Nuxt 3 约定优于配置）
- 依赖包数量：**减少 30%**

### 开发体验
- ✅ 自动导入组件和组合式函数
- ✅ 更好的 TypeScript 支持（可选）
- ✅ 更清晰的项目结构
- ✅ 更少的样板代码

## 注意事项

1. **备份重要**：执行前务必备份当前项目
2. **依赖版本**：使用最新稳定版本
3. **环境变量**：根据实际项目调整 API 地址
4. **PM2 配置**：根据服务器资源调整实例数
5. **测试充分**：重建后全面测试所有功能

## 后续优化建议

### 可选增强
- 添加 ESLint + Prettier（代码规范）
- 添加 Husky + lint-staged（Git 钩子）
- 添加单元测试（Vitest）
- 添加 E2E 测试（Playwright）

### 性能优化
- 图片懒加载
- 路由懒加载
- 组件懒加载
- CDN 加速

### SEO 优化
- 使用 @nuxtjs/sitemap
- 使用 @nuxtjs/robots
- 配置 meta 标签
- 结构化数据

## 时间估算

- 阶段 1-2：30 分钟
- 阶段 3-6：1 小时
- 阶段 7-10：1 小时
- 阶段 11-12：30 分钟

**总计：约 3 小时**

## 开始执行

确认此计划后，请切换到 Act Mode，我将按步骤执行重建。