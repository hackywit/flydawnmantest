/**
 * Created by hackywit on 2017/10/9.
 */
//path是node的一个对象,有对应的path处理函数
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//exports指向的是module.export对象
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[hash].bundle2.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            "root": path.dirname(__dirname),
            "verbose": true,
            "dry": false,
        }),
        new HtmlWebpackPlugin({
            title: 'flydawnman',
            filename: 'index.html',
            template: 'index.html'
        })
    ],
};
//说到底整个的webpack配置文件是导出为了一个对象