/* eslint-env node */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLMinimizerPlugin = require("html-minimizer-webpack-plugin");
const { LicenseWebpackPlugin } = require("license-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const packageJson = require("./package.json");

const ACCEPTABLE_LICENSES = ["MIT", "BSD-2-Clause", "BSD-3-Clause", "APACHE-2.0", "ISC", "Unlicense"];

module.exports = function () {
    return {
        mode: "production",
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
            }),
            new LicenseWebpackPlugin({
                outputFilename: "third-party-licenses.txt",
                unacceptableLicenseTest: (licenseIdentifier) => {
                    return !ACCEPTABLE_LICENSES.includes(licenseIdentifier);
                },
                perChunkOutput: false,
                skipChildCompilers: true,
                excludedPackageTest: (packageName) => {
                    return packageName === packageJson.name;
                },
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
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        format: {
                            comments: false,
                            preamble: "/* See third-party-licenses.txt for licenses of any bundled software. */",
                        },
                    },
                }),
                new CssMinimizerPlugin(),
                new HTMLMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: "all",
            },
        },
        devtool: false,
    };
};
