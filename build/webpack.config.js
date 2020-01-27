const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, "..", dir);
}
module.exports = {
    entry: {
        'popup': ['./src/pages/popup/index.jsx'],
        'background': ['./src/pages/background/index.jsx'],
    },
    output: {
        filename: 'js/[name].js',
        path: resolve('dist')
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
            // include: resolve("/src")
            exclude: /node_modules/,
        },
        {
            test: /\.js?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
            exclude: /node_modules/,
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader'
            ]
        }]
    },
    plugins: [//插件数组
        new htmlWebpackPlugin({ //创建一个在内存中生成html页面插件的配置对象
            template: path.join(__dirname, '../src/pages/background/background.html'),    //指定模版页面生成内存中的hmtl
            filename: 'background.html', //指定生成的页面名称
            chunks: ['background']
        }),
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../src/pages/popup/popup.html'),
            filename: 'popup.html',
            chunks: ['popup']
        })
    ]
};