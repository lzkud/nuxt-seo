# frontend
# nuxt-seo
 - assets          ------webpack配置目录
 - config          ------webpack打包配置目录
 - .nuxt           ------npm run build后实际布署代码目录
 - components      ------公共组件目录
 - pages           ------页面目录级结构（也是最终的路由结构）
 - plugins         ------公共函数或插件目录
 - store           ------状态存储
 - layouts         ------页面布局管理
 - middleware      ------路由权鉴页面
 - node_modules    ------依赖文件
 - utils           ------前端静态配置文件
 - nuxt.config.js  ------nuxt配置文件
 - package.json    ------webpack配置文件  （高级配置请进入 node_moudules/nuxt/lib/builder修改）


# clone
 - $ git clone https://github.com/lzkud/nuxt-seo.git

# 环境要求 
   * node > = 8 
   * npm > = 5

# 安装依赖
 - $ cd nuxt-seo/frontend
 - $ npm install

# 开发模式(热更新代码，自动刷新页面，不支持IE8调试)
 $ npm run dev

# 打包部署 
 - $ npm run build
 - $ npm start
 - 整个项目代码打包到dist目录,已启用Gzip压缩，打开其中index.html就是项目 首页


如果想详细了解该项目如何运作请跳转： [Nuxt.js docs](https://nuxtjs.org).
