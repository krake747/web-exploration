const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: [path.resolve(__dirname, "./src/index.ts"), path.resolve(__dirname, "./src/greeter/greeter.ts")]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./js/[name].bundle.[contenthash].js",
        clean: true,
        assetModuleFilename: "./assets/[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(csv|tsv)$/,
                loader: "csv-loader",
                options: {
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Greeting WebApp",
            filename: "index.html",
            template: "src/index.html"
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
    // optimization: {
    //     splitChunks: {
    //         chunks: "all"
    //     }
    // }
};
