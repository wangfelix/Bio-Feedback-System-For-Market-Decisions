const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./AppIndex/main.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            { test: /\.png/, type: "asset/resource" },
            { test: /\.jpg/, type: "asset/resource" },
            { test: /\.svg/, type: "asset/resource" },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        // keep in sync with tsconfig.json
        alias: {
            Components: path.resolve(__dirname, "Components"),
            Pages: path.resolve(__dirname, "Pages"),
            Illustrations: path.resolve(__dirname, "Illustrations"),
            Utils: path.resolve(__dirname, "Utils"),
            State: path.resolve(__dirname, "State"),
            process: "process/browser",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./AppIndex/index.html",
        }),
    ],
};
