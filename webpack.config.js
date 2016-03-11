var webpack = require("webpack");

module.exports = {
    entry: ['./react-marginotes.js'],
    output: {
        publicPath: '/dist/',
        filename: 'dist/bundle.js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};
