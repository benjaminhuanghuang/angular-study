const path = require('path');

module.exports = {
    entry:{
        'subject-demo': "./subject-demo.ts",
        'behaviorSubject-demo': "./behaviorSubject-demo.ts",
        'loading-state': "./loading-state.ts",
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