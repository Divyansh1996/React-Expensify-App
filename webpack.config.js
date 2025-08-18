const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log("dirname = "+__dirname)

module.exports = (env) => {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    return {
        entry:"./src/app.js",
        output:{
            path: path.join(__dirname,'public'),
            // filename: "bundle.js",
            filename: "[name].[contenthash].js",
            publicPath: '/',
            clean:true
        },
    

    // module:{
    //     rules:[{
    //         loader: 'babel-loader',
    //         test:/\.js$/,
    //         exclude: /node_modules/
    //     }]
    // },

    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use:[MiniCssExtractPlugin.loader, 
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
            ]
        },
        {
            test: /\.scss$/,
            // use:['style-loader', 'css-loader', 'sass-loader']
            use:[MiniCssExtractPlugin.loader, 
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
        }
      ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
            // optional if you need "process" polyfill
            new webpack.ProvidePlugin({
                process: 'process/browser'
            })
    ],
    optimization: {
        usedExports: true,   // tree-shaking
        minimize: true,
        splitChunks: {
            chunks: "all",     // vendor splitting
        },
    },
    

    devtool:env === 'production'? 'source-map': 'inline-source-map',
    devServer:{
        static: {
            directory: path.join(__dirname, 'public')
        },
        port:8080,
        historyApiFallback:true,
        open:true
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "fs": false,
            "tty": false,
            "util": require.resolve("util/"),
            "process": require.resolve("process/browser")
        }
    },
    }
} 