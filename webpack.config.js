const path = require("path")
const webpack = require("webpack")
const terserPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        sourceMapFilename: "vue-clone.min.map",
        filename: "vue-clone.min.js",
        library: "VueClone",
        libraryTarget: "umd",
        umdNamedDefine: true,
        libraryExport: "default"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `VueClone\nCopyright 2021 Emre BALCI <emre-balci@outlook.com.tr>\nThis code licensed under the MIT license\nfound in https://opensource.org/licenses/MIT`
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new terserPlugin({
                extractComments: false,
            })
        ]
    }
}