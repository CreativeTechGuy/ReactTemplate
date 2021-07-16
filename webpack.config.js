/* eslint-env node */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge: webpackMerge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const webpackDev = require("./webpack.dev");
const webpackProd = require("./webpack.prod");

module.exports = function (env = {}, argv = {}) {
    const isProduction = argv.mode === "production";

    const commonWebpackConfig = webpackCommon();

    if (env.showBundleAnalysis) {
        return webpackMerge(commonWebpackConfig, webpackProd(), {
            plugins: [
                new BundleAnalyzerPlugin({
                    analyzerMode: "static",
                    reportFilename: "../temp/bundleAnalysis.html",
                    defaultSizes: "parsed",
                    openAnalyzer: true,
                }),
            ],
        });
    }
    if (isProduction) {
        return webpackMerge(commonWebpackConfig, webpackProd());
    }
    return webpackMerge(commonWebpackConfig, webpackDev());
};
