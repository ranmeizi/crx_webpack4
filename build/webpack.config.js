const path = require('path');
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
            include: resolve("src")
        }]
    }
};