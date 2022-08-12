/* eslint-env node */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = function () {
    return {
        context: path.resolve(__dirname, "src"),
        entry: ["./index"],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[contenthash].js",
            assetModuleFilename: "[name].[contenthash][ext]",
            publicPath: "/",
            hashDigestLength: 10,
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    configFile: path.resolve(__dirname, "tsconfig.json"),
                    configOverwrite: {
                        compilerOptions: {
                            skipLibCheck: true,
                            sourceMap: false,
                            inlineSourceMap: false,
                            declarationMap: false,
                        },
                        exclude: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx", "test/**"],
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: "./index.html",
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: "static", noErrorOnMissing: true }],
            }),
        ],
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "src"),
            },
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
        module: {
            rules: [
                {
                    test: /\.(j|t)s(x?)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.(woff2|woff|ttf|png|jpg|jpeg|gif|bmp|webp)$/,
                    type: "asset",
                },
                {
                    test: /\.svg$/,
                    type: "asset",
                    generator: {
                        dataUrl: (content) => svgToMiniDataURI(content.toString()),
                    },
                },
            ],
        },
        stats: "errors-warnings",
    };
};
