const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const theme = require("../src/assets/style/theme")

module.exports = {
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "app-[contenthash:8].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Amazing",
      favicon: path.join(__dirname, "../public/favicon.ico"),
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css-[contenthash:8].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js(x|on)?$/,
        use: "babel-loader",
        exclude: path.join(__dirname, "../node_modules")
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: theme,
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path][name]-[local]-[hash:base64:5]'
              }
            }
          },
          { loader: "sass-loader" },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                path.join(__dirname, "../src/assets/style/mixin.scss"),
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: "url-loader?limit=5000"
      }
    ]
  },
  resolve: {
    alias: {
      "@api": path.resolve("src/api"),
      "@page": path.resolve("src/page"),
      "@assets": path.resolve("src/assets"),
      "@routes": path.resolve("src/routes"),
      "@component": path.resolve("src/component")
    }
  }
}