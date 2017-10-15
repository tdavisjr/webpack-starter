var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
    ROOT: path.resolve(__dirname),
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src/js'),
    SCSS: path.resolve(__dirname, 'src/scss'),
    CSS: path.resolve(__dirname, 'src/css'),
};

const config = {
    entry: [ 
        path.join(paths.JS, 'app.js'), 
        path.join(paths.CSS, 'custom.css'),
        path.join(paths.SCSS, 'main.scss'),
    ],
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

    ],
    module:{
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            },            
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