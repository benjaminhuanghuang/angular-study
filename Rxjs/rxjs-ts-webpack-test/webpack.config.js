const path = require('path');

module.exports = {
    entry:{
        mail: "./main.ts",
        mouse: "./mouse.ts",
        movies: "./movies.ts",
        movies_v1: "./movies_v1.ts",
        movies_v2: "./movies_v2.ts",
        movies_retry: "./movies_retry.ts",
        movies_retryWhen: "./movies_retryWhen.ts",
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,  
            }
        ]
    }
}