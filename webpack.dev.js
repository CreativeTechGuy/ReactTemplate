/* eslint-env node */

module.exports = function () {
    return {
        mode: "development",
        devServer: {
            hot: false,
            port: 7579,
            static: false,
            compress: true,
            host: "localhost",
            allowedHosts: "all",
            client: {
                logging: "verbose",
                overlay: false,
            },
            historyApiFallback: true,
        },
        devtool: "source-map",
    };
};
