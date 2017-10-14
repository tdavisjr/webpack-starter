var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths = {
    ROOT: path.resolve(__dirname),
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src/js')
};

const config = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module:{
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        contentBase: paths.DIST
    }
};

module.exports = config;