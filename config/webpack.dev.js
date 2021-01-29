const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    proxy: {
      '/api': {
        target: 'https://lengyuexin.github.io',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    historyApiFallback: true,
    open: true,
    inline: true,
    open: true,
    stats: "minimal",
    port: "520"
  }
});