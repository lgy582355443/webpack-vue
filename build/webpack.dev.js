const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')

module.exports = merge(webpackConfig, {
    //编译模式,'development'不会压缩代码，'production'压缩代码
    mode: 'development',
    //此选项控制是否生成，以及如何生成 source map。这里选原始源代码
    devtool: 'cheap-module-eval-source-map',
    //开启本地服务
    devServer: {
        hot: true, //启用 webpack 的模块热替换特性：
        host: 'localhost', //指定使用一个 host。默认是 localhost
        port: 8080, //服务端口
        open: true, //启动时打开默认浏览器
        // contentBase: path.resolve(__dirname,'../dist'),//告诉服务器从哪里提供内容，设置文件根目录
    },
    plugins: [
        //定义环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                VUE_APP_BASE_URL: JSON.stringify('http://localhost:80')
            }
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
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
            }
        ]
    }
})