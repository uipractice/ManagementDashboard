const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'STABLE_FEATURE': JSON.stringify(true),
            'EXPERIMENTAL_FEATURE': JSON.stringify(false),
            'process.env.NODE_ENV': JSON.stringify('production') //change to development/production to fix - Conflicting values for 'process.env.NODE_ENV'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
};