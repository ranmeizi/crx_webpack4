process.env.NODE_ENV = 'production';

const chalkAnimation = require('chalk-animation');
const chalk = require('chalk');
const shell = require('shelljs');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs')
const webpackConfig = require('./webpack.config.js')

const text = fs.readFileSync(path.join(__dirname, 'wenzi.txt')).toString()

const animation = chalkAnimation.rainbow(text);
animation.start();

const assetsPath = path.join(__dirname, '../dist');
console.log(assetsPath)
shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.config.silent = true;
shell.cp('-R', 'src/static/*', assetsPath);
shell.config.silent = false;

webpack(webpackConfig, function (err, stats) {
    animation.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ));
})