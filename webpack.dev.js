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
            firewall: false,
            client: {
                port: 7579,
                logging: "verbose",
            },
            historyApiFallback: true,
        },
        devtool: "source-map",
    };
};
