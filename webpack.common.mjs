import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import svgToMiniDataURI from "mini-svg-data-uri";

export default function () {
    return {
        context: path.resolve("./src"),
        entry: ["./index"],
        output: {
            path: path.resolve("./dist"),
            filename: "[name].[contenthash].js",
            assetModuleFilename: "[name].[contenthash][ext]",
            publicPath: "/",
            hashDigestLength: 10,
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    configFile: path.resolve("./tsconfig.json"),
                    configOverwrite: {
                        compilerOptions: {
                            skipLibCheck: true,
                            sourceMap: false,
                            inlineSourceMap: false,
                            declarationMap: false,
                        },
                        exclude: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx", "test/**"],
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: "./index.html",
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: "static", noErrorOnMissing: true }],
            }),
        ],
        resolve: {
            alias: {
                "~": path.resolve("./src"),
            },
            extensionAlias: {
                ".mjs": [".mts", ".mjs"],
            },
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
        node: false,
        module: {
            rules: [
                {
                    test: /\.(j|t)s(x?)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.(woff2|woff|ttf|png|jpg|jpeg|gif|bmp|webp)$/,
                    type: "asset",
                },
                {
                    test: /\.svg$/,
                    type: "asset",
                    generator: {
                        dataUrl: (content) => svgToMiniDataURI(content.toString()),
                    },
                },
            ],
        },
        stats: "errors-warnings",
    };
}
