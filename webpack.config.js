var path = require('path');

module.exports = {
    entry: path.join(__dirname, "main.js"),
    mode:'development',
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
    },
    output: {
        path: __dirname + "/dist",
        filename: 'main.bundle.js'
    }
};