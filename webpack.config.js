const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development', // 开发模式
  devtool: false, // 不生成source-map
  entry: "./src/index.tsx", // 入口文件
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  },
  devServer: { // 开发服务器
    hot: true, //  支持热更新
    contentBase: path.join(__dirname, 'dist'), // 静态文件根目录 因为是编译到dist目录下，所以是根目录
    historyApiFallback: {  // hash路由的处理  browserHash 刷新重定向到index.html 
      index: './index.html'
    }
  },
  resolve: { // 解析 
    extensions: [// 扩展名
      '.ts', '.tsx', '.js', '.json' // 引入文件的时候默认扩展名，会先找.ts 然后是.tsx
    ],
    alias: { // 别名
      "@": path.resolve('src') // ts需要配置 webpack也需要配置
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 文件是以ts 或者tsx结尾的话
        loader: 'ts-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.[hash:5].html' // 访问 http://localhost:8080/index.de0f9.html
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件 更改代码不需要重启，直接生效
  ]
}