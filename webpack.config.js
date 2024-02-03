const path = require('path');

module.exports = {
    watch: true,
    mode: 'production',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, '.'),
        filename: 'main.min.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};