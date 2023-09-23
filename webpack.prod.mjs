import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HTMLMinimizerPlugin from "html-minimizer-webpack-plugin";
import { LicenseWebpackPlugin } from "license-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import packageJson from "./package.json" assert { type: "json" };

const ACCEPTABLE_LICENSES = ["MIT", "BSD-2-Clause", "BSD-3-Clause", "APACHE-2.0", "ISC", "Unlicense"];

export default function () {
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
}
