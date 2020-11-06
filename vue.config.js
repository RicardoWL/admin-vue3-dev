module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ladmin.dev.ehafo.com/phalapi/public/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/variables.scss";`,
      },
    },
  },
}
