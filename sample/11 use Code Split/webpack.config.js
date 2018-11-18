const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('config');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/*-------------------------------------------------*/

module.exports = {
    // webpack optimization mode
    mode: 'development',

    // entry file(s)
    entry: './src/index.js',

    // output file(s) and chunks
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: config.get('publicPath')
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),

        new AsyncChunkNames(),
        new CleanWebpackPlugin(['dist'])
    ],

    // development server configuration
    devServer: {

        // must be `true` for SPAs
        historyApiFallback: true,

        // open browser on server start
        open: config.get('open')
    },

    // generate source map
    devtool: ('production' === process.env.NODE_ENV ? 'source-map' : 'cheap-module-eval-source-map'),






    // optimization

    // optimization: {
    //     splitChunks: {
    //       chunks: 'async',
    //       minSize: 30000,
    //       maxSize: 0,
    //       minChunks: 1,
    //       maxAsyncRequests: 5,
    //       maxInitialRequests: 3,
    //       automaticNameDelimiter: '~',
    //       name: true,
    //       cacheGroups: {
    //         vendors: {
    //           test: /[\\/]node_modules[\\/]/,
    //           priority: -10
    //         },
    //         default: {
    //           minChunks: 2,
    //           priority: -20,
    //           reuseExistingChunk: true
    //         }
    //       }
    //     }
    //   }


    // optimization: {
    //     splitChunks: {    
    //       chunks: 'all',
    //     }
    // }


    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         cacheGroups: {
    //             vendors: false,
    //         }
    //     },
    // }

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             default: false,
    //             vendors: false,

    //             // vendor chunk
    //             vendor: {
    //                 // name of the chunk
    //                 name: 'vendor',

    //                 // async + async chunks
    //                 chunks: 'all',

    //                 // import file path containing node_modules
    //                 test: /node_modules/,

    //                 // priority
    //                 priority: 20
    //             },

    //             // common chunk
    //             common: {
    //                 name: 'common',
    //                 minChunks: 2,
    //                 chunks: 'all',
    //                 priority: 10,
    //                 reuseExistingChunk: true,
    //                 enforce: true
    //             }
    //         }
    //     },
    // }


    // optimization: {
    //     splitChunks: {
    //       // include all types of chunks
    //       chunks: 'all',

    //     // "runtimeChunk": {
    //     //     "name": "manifest"
    //     // }
    //     }}
};


// 1 mode
//  Production模式 
//  会默认采用代码压缩（minification）
//  作用域提升（scope hoisting），
//  tree-shaking，
//  NoEmitOnErrorsPlugin...

//  Development模式
//  如更快的构建速度、调试时的代码易读性、暴露运行时的错误信息等

//  2 0配置
//  默认入口属性为./src，默认输出路径为./dist

 
//  3.plugin
// 内置optimization.minimize来压缩代码，不用再显示引入UglifyJsPlugin；
// 废弃CommonsChunkPlugin插件，使用optimization.splitChunks和optimization.runtimeChunk来代替；
// 使用optimization.noEmitOnErrors来替换NoEmitOnErrorsPlugin插件
// 使用optimization.namedModules来替换NamedModulesPlugin插件

// 4 .sideEffects；更好的支持Type Script