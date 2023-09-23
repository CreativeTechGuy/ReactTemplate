// cspell:words pmmmwh
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default function () {
    return {
        mode: "development",
        plugins: [
            new ReactRefreshWebpackPlugin({
                overlay: false,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(s?)css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    auto: true,
                                    localIdentName: "[local]_[hash:base64:5]",
                                },
                            },
                        },
                        "postcss-loader",
                        "sass-loader",
                    ],
                    sideEffects: true,
                },
            ],
        },
        devServer: {
            hot: true,
            port: 7579,
            static: false,
            compress: true,
            host: "localhost",
            allowedHosts: "all",
            client: {
                logging: "warn",
                overlay: false,
            },
            historyApiFallback: true,
        },
        watchOptions: {
            ignored: /node_modules/,
        },
        devtool: "source-map",
    };
}
