### 初始化项目

```
npm init
```

### 安装webpack

```
npm i webpack wepack-cli -D
```

创建webpack.config.js文件配置wepack

### 热更新

```
npm i webpack-dev-server html-wepack-plugin -D
```

webpack.config.js

```javascript
  devServer: {
        hot: true, //启用 webpack 的模块热替换特性：
        host: 'localhost', //指定使用一个 host。默认是 localhost
        port: 8080, //服务端口
        open: true, //启动时打开默认浏览器
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
       ]
```

在package.json文件的script,添加dev脚本

```
"dev": "webpack-dev-server --config ./build/webpack.config.js",
```

### 配置loader

css

```
npm i css-loader style-loader -D
```

sass

```
npm i sass-loader dart-sass -D
```

less

```
npm i less-loader less -D
```

静态静态资源

```
npm i file-loader url-loader -D
```

添加css前缀

```
npm i autoprefixer postcss-loader -D
```

创建postcss.config.js

```javascript
module.exports = {
  plugins: [
  	require(autoprefixer)
  ]
}
```

### 配置bable

配置bable转换

```
npm i babel-loader @babel/core @babel/preset-env -D
```

配置语法插件

```
npm i @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators core-js@2 -D
```

```
npm i @babel/runtime 
```

创建bable.config.js

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        "useBuiltIns": "usage", //使用的api 会自动转化,并且是按需加载
        "corejs": 2
      }
    ]
  ],
  plugins: [
    //解析装饰器
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }],
    //解析类的属性
    ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }],
    ["@babel/plugin-transform-runtime"]
  ]
}
```

### 配置vue

```
npm install vue-loader vue-template-compiler cache-loader thread-loader -D
```

```
npm install vue -S
```

#### 配置vue-router、vuex

```
npm i vue-router vuex 
```

#### 配置路由懒加载

```
npm i @babel/plugin-syntax-dynamic-import -D
```

修改babel.config.js

```
  plugins: [
     // 添加这个
    ['@babel/plugin-syntax-dynamic-import']
  ]
```



### 定义环境变量

```
plugins: [
   new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
]
```

### 区分开发环境与生产环境

新建两个文件

- `webpack.dev.js`  开发环境使用
- `webpack.prod.js`  生产环境使用
- `webpack.config.js` 公用配置
- 开发环境与生产环境的不同

#### 开发环境

1. 不需要压缩代码
2. 需要热更新
3. css不需要提取到css文件
4. sourceMap
5. ...

#### 生产环境

1. 压缩代码
2. 不需要热更新
3. 提取css，压缩css文件
4. 不需要sourceMap，不配置devtool项
5. 构建前清除上一次构建的内容
6. ...

安装依赖

```
npm i @intervolga/optimize-cssnano-plugin mini-css-extract-plugin clean-webpack-plugin webpack-merge copy-webpack-plugin -D
```

修改package.json

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config ./build/webpack.dev.js",
    "build": "webpack  --config ./build/webpack.prod.js"
  },
```

