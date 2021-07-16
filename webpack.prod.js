/* eslint-env node */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = function () {
    return {
        mode: "production",
        optimization: {
            minimizer: ["...", new CssMinimizerPlugin()],
            splitChunks: {
                chunks: "all",
            },
        },
        devtool: false,
    };
};
