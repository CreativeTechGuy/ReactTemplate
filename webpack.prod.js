/* eslint-env node */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
    return {
        mode: "production",
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(s?)css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
                    sideEffects: true,
                },
            ],
        },
        optimization: {
            minimizer: ["...", new CssMinimizerPlugin(), new HTMLMinimizerPlugin()],
            splitChunks: {
                chunks: "all",
            },
        },
        devtool: false,
    };
};
