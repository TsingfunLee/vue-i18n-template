'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 1000

module.exports = {
  outputDir: 'dist', // 生成的生产环境构建文件的目录
  assetsDir: './static', // 放置生成的静态资源
  indexPath: 'index.html', // 入口文件
  lintOnSave: process.env.NODE_ENV === 'development', // 开发环境下，每次保存lint代码
  productionSourceMap: false, // 不需要生产时的源映射，那么将此设置为false可以加速生产构建
  devServer: {
    hot: true, // 热加载
    host: '0.0.0.0', // ip地址
    port: port, // 端口号
    https: false, // false关闭https,true为开启
    open: true, // 配置自动启动浏览器
    overlay: {
      warnings: false,
      errors: true // 编译错误时全屏覆盖
    },
    proxy: {
      [process.env.VUE_APP_API_BASE_URL]: {
        target: 'http://172.18.28.117:8000',//示例target
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
