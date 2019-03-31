const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    target: "node",
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        libraryTarget: "commonjs2",
        filename: 'index.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts?$/,
                exclude: /(node_modules)|(typings)/,
                options: {
                    transpileOnly: true,
                }
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            tslintAutoFix: true,
            reportFiles: [
                "!src/**/__test__"
            ]
        })
    ]
}