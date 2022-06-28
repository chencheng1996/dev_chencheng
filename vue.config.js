'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  indexPath: 'index.html',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV === 'development',
  // 生产环境是否开启SourceMap文件
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    https: false,
    open: true,
    port: 8888,
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: process.env.VUE_APP_BASE_API,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
  },

  configureWebpack: {
    name: '后台管理系统',
    resolve: {
      extensions: ['.js', '.vue', '.css', '.json', '.scss'],
      alias: {
        '@': resolve('src')
      }
    }
  }
})
