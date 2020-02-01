const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // //编译模式,'development'不会压缩代码，'production'压缩代码
    // mode: 'development',
    entry: {
        // 配置入口文件
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        // 配置打包文件输出的目录
        path: path.resolve(__dirname, '../dist'),
        // 生成的 js 文件名称，可以指定子目录,以下会打包在dist文件夹下的js文件夹中，
        //[name]模块的名字，[hash]模块标识符的 hash,:8指定长度为8个字符，默认20个
        filename: 'js/[name].[hash:8].js',
        // 生成的 chunk 名称
        chunkFilename: 'js/[name].[hash:8].js',
        // 资源引用的路径
        //例如 publicPath:'../',在打包后的html文件在引入js文件时
        //会输出成 <script src="../js/main.js"/>  
        //src里的路径前会自动加上'../'
        //默认写空 '' 就好
        publicPath: ''
    },
    resolve: {
        //省略后缀名
        extensions:['.js','.vue','.json'],
        //设置别名 比如路径 @/compontents 就指向 ./src/compontents 
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js',
            "@": path.resolve(__dirname,'../src')
        },
        extensions: [
            '.js',
            '.vue'
        ]
    },
    plugins: [
        //生成预览页面
        new HtmlWebpackPlugin({
            //指定要使用的模板文件
            template: path.join(__dirname, '../public/index.html'),
            //生成的文件名
            filename: 'index.html',
            // //生成的js文件插入的位置
            inject: 'body'
        }),
        //这个插件的作用是在热加载时直接返回更新文件名
        new webpack.NamedModulesPlugin(),
        //修改内容后不用刷新页面，保存就自动更新
        new webpack.HotModuleReplacementPlugin(),
        //vue
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //小于4096 转化为bese64
                        limit: 4096,
                        //大于则使用file-loader，输出到指定目录
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[hash:8].[ext]',
                                //因为打包后的路径问题，会在路径前面添加'../'
                                publicPath:'../'
                            }
                        }
                    }
                }]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'media/[name].[hash:8].[ext]',
                                publicPath:'../'
                            }
                        }
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[hash:8].[ext]',
                                publicPath:'../'
                            }
                        }
                    }
                }]
            },
        ]
    }
}