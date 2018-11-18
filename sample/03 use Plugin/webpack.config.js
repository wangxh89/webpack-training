const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    // JavaScript 执行入口文件
    entry: './main.js',
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist')
    },
    module: {
      rules: [{
          // 用正则去匹配要用该 loader 转换的 CSS 文件
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,  // replace ExtractTextPlugin.extract({..})
            // 转换 .css 文件需要使用的 Loader
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // 这里和output的配置很像, 都是可选的
        filename: "[name]_[contenthash:8].css"
      })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]        
    }
};