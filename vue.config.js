const path = require('path')

module.exports = {
  publicPath: "./",
  outputDir: "docs",
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
             hack: `true; @import "${path.join(__dirname,'./src/assets/resetLess.less')}";`,
          },
        },
      },
    },
  },
  devServer: {
    port: 8010,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    Proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target: process.env.NODE_ENV === 'production' ? '线上地址':'测试地址'
      }
    }
    
  }
}