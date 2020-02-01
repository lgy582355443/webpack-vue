const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = merge(webpackConfig, {
    //编译模式,'development'不会压缩代码，'production'压缩代码
    mode: 'production',
    //优化
    // optimization: {
    //     minimize: true, //是否进行代码压缩
    //     splitChunks: {
    //         chunks: "async",
    //         minSize: 30000, //模块大于30k会被抽离到公共模块
    //         minChunks: 1, //模块出现1次就会被抽离到公共模块
    //         maxAsyncRequests: 5, //异步模块，一次最多只能被加载5个
    //         maxInitialRequests: 3, //入口模块最多只能加载3个
    //         name: true,
    //         cacheGroups: {
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //             },
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10
    //             },
    //             common: {
    //                 name: 'chunk-common',
    //                 minChunks: 2,
    //                 priority: -20,
    //                 chunks: 'initial',
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     },
    //     runtimeChunk: {
    //         name: "runtime"
    //     }
    // },
    plugins: [
        //定义环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                VUE_APP_BASE_URL: JSON.stringify('http://localhost:80')
            }
        }),
        //抽离css，生产css文件
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        //压缩打包的css文件
        new OptimizeCssnanoPlugin({
            sourceMap: true,
            cssnanoOptions: {
                preset: [
                    'default',
                    {
                        mergeLonghand: false,
                        cssDeclarationSorter: false
                    }
                ]
            }
        }),
        // //拷贝 public文件夹 到 dist 
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, '../public'),
        //     to: path.resolve(__dirname, '../dist')
        // }]),
        //打包前清空dist文件夹
        new CleanWebpackPlugin(),
        //打包完成后，生成打包分析页面
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    // MiniCssExtractPlugin提取css
                    {
                        loader: MiniCssExtractPlugin.loader
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
                        loader: MiniCssExtractPlugin.loader
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
            },
        ]
    }
})