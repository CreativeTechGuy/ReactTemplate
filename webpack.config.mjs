import process from "node:process";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge as webpackMerge } from "webpack-merge";
import webpackCommon from "./webpack.common.mjs";
import webpackDev from "./webpack.dev.mjs";
import webpackProd from "./webpack.prod.mjs";

export default function (env = {}) {
    const isProduction = process.env.NODE_ENV === "production";

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
}
