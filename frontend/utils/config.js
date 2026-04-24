// 通用配置文件
export const config = {
  // 应用名称
  appName: 'Nuxt SEO',
  
  // 分页配置
  pagination: {
    pageSize: 10,
    pageSizes: [10, 20, 50, 100]
  },
  
  // 上传配置
  upload: {
    maxSize: 5 * 1024 * 1024, // 5MB
    acceptTypes: ['image/jpeg', 'image/png', 'image/gif']
  },
  
  // 其他配置
  timeout: 10000
}