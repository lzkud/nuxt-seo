module.exports = {
  apps: [{
    name: 'nuxt-seo',
    script: './frontend/.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}