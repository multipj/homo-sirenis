const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/homo-sirenis/'
    : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/grid/grid.default.scss";
          @import "@/styles/grid/grid.lg.scss";
          @import "@/styles/grid/grid.md.scss";
          @import "@/styles/grid/grid.sm.scss";
          @import "@/styles/grid/grid.xs.scss";
        `
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          loader: "raw-loader",
        },
      ],
    },
  },
})
