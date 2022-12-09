const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        babelpolyfill: '@babel/polyfill',
        index: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist')
        }
    },
    plugins: [ new HTMLWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }) ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              },
            },
          },
        ],
      },

}