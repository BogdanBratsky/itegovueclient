const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8081 // Укажите желаемый порт здесь
  }
})
