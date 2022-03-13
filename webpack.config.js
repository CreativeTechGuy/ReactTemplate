/* eslint-env node */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge: webpackMerge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const webpackDev = require("./webpack.dev");
const webpackProd = require("./webpack.prod");

module.exports = function (env = {}, argv = {}) {
    const isProduction = argv.mode === "production";
    process.env.NODE_ENV = isProduction ? "production" : "development";

    const commonWebpackConfig = webpackCommon();

    if (env.showBundleAnalysis) {
        return webpackMerge(commonWebpackConfig, webpackProd(), {
            plugins: [
                new BundleAnalyzerPlugin({
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
