module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  lintOnSave: 'default',
  productionSourceMap: false,
  configureWebpack: (config) => {
    //调试JS
    config.devtool = process.env.NODE_ENV === 'production' ? 'none' : 'eval-source-map'
  },
  css: {
    //查看CSS属于哪个css文件
    sourceMap: true,
  },
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.fix = true
        return options
      })
  },
}
