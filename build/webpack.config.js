const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
module.exports = {
    //指定打包模式
    mode: 'development',
    entry: {
        //配置入口文件
        main: ["@babel/polyfill", path.resolve(__dirname, '../src/main.js')]
    },
    output: {
        //配置打包文件输出目录
        path: path.resolve(__dirname, '../dist'),
        //生成的 js 文件名称
        filename: 'js/[name].[hash:8].js',
        //生成的 chunk 名称
        chunkFilename: 'js/[name].[hash:8].js',
        //资源引用的路径
        publicPath: './'
    },
    devserver: {
        hot: true,
        port: 8080,
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(scss|sass)$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 4096,
                      fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]'
                        }
                      }
                    }
                  }
                ]
              },
        ]
    },
    plugins: [
        //使用 html-webpack-plugin来创建html页面，并自动引入打包生成的js文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        //实现热更新
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
   
}