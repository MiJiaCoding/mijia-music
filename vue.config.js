const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  productionSourceMap: false,
  // publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/'
  publicPath: process.env.NODE_ENV === 'production' ? '/mijia-music/' : '/' // 区分开发环境和生产环境
  //  例如https://127.0.0. 1/。如果应用被部署在一个 子路径上，你就需要用这个选项指定这个子路径。
  //  例如，如果你的应用被部署在https://127. 0.0.1/mijia-music/,则设置baseUrL 为/mijia-music/。

}
