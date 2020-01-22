const path = require('path');

module.exports = {
    entry: {
        'popup': ['./src/pages/popup/index.js'],
        'background': ['./src/pages/background/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), // 模版路径
            filename: 'index.html', // 打包后的文件名
            title: 'webpack4.0', // 顾名思义，设置生成的 html 文件的标题
            /**  
                注入选项。有四个选项值 true, body, head, false
                
                true 默认值，script标签位于html文件的 
                body 底部body 同 true
                head script 标签位于 head 标签内
                false 不插入生成的 js 文件，只是单纯的生成一个 html 文件
            */
            inject: true,
            // favicon: 'xxx.ico' // 给生成的 html 文件生成一个 favicon
            minify: { // 压缩
                removeAttributeQuotes: true, // 去掉属性的双引号
                collapseWhitespace: true // 代码压缩成一行
            },
            hash: true, // hash选项的作用是 给生成的 js 文件一个独特的 hash 值，该 hash 值是该次 webpack 编译的 hash 值
            cahe: true, // 默认值是 true。表示只有在内容变化时才生成一个新的文件
            showErrors: true, // 如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内，属性的默认值为 true 

            /**
                chunks 选项的作用主要是针对多入口(entry)文件。当你有多个入口文件的时候，对应就会生成多个编译后的 js 文件。那么 chunks 选项就可以决定是否都使用这些生成的 js 文件。
                chunks 默认会在生成的 html 文件中引用所有的 js 文件，当然你也可以指定引入哪些特定的文件。
            **/
            // chunks: ['index','index2'], 
        })
    ]
};