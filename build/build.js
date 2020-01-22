process.env.NODE_ENV = 'production';

const chalkAnimation = require('chalk-animation');
const shell = require('shelljs');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config')

const animation = chalkAnimation.rainbow('building for production...');
animation.start();

const assetsPath = path.join('../dist', 'static');
shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.config.silent = true;
shell.cp('-R', 'static/*', assetsPath);
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