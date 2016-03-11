module.exports = {
    entry: ['./app.js'],
    output: {
        publicPath: '/',
        filename: 'bundle.js'
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
    }
};
