// In Webpack we have 4 major configs, entry point, output, loaders and plugins
// Use a NODE package for getting system absolute path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // For sourcing your html files
// module.exports -- Node's export syntax. 
// Exports config in an object
module.exports = {
    // The `entry point`, where webpack starts looking for 
    // ALL your app dependencies which it will then bundle.
    // It is usually the FIRST property
    // babel-polyfill is a dependency that provides some ES6 features that were never present in ES5 e.g promises
    entry: ['babel-polyfill', './src/js/index.js'],
    // Where webpack will bundle our files
    output: {
        // Method for concatenating absolute path and our dist folder
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    // Webpack dev server config.
    // Property `contentBase` with value `./dist`, means serve up index.html in ./dist
    devServer: {
        contentBase: './dist'
    },
    // The plugins property usually accepts an array of plugins
    // The plugins are usually function constructors, then we initialize them
    // By passing a config. object
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    // Loaders -- `module: { rules: (define config) }`
    module: {
        rules: [
            {
                test: /\.js$/, // Regex for only JS files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}