const path = require('path');
const webpack = require('webpack');

console.log("dirname = "+__dirname)

module.exports = {
    entry:"./src/app.js",
    output:{
        path: path.join(__dirname,'public'),
        filename: "bundle.js",
        publicPath: '/'
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
            test: /\.s?css$/,
            use:['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },

    devtool:'eval-cheap-module-source-map',
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
//     plugins: [
//     new webpack.ProvidePlugin({
//       process: 'process/browser'
//     })
//   ]
}