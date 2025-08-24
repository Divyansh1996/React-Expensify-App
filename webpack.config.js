const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'})
}
else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'})
}

module.exports = (env) => {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    return {
        entry:"./src/app.js",
        output:{
            path: path.join(__dirname,'public','dist'),
            // filename: "bundle.js",
            filename: "[name].[contenthash].js",
            publicPath: "/",
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
                // filename: path.resolve(__dirname, 'public/index.html')
                filename:'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
            // optional if you need "process" polyfill
            new webpack.ProvidePlugin({
                process: 'process/browser'
            }),
            new webpack.DefinePlugin ({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL)
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
            directory: path.join(__dirname, 'public', 'dist')
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