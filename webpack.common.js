/* eslint-env node */

const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = function () {
	return {
		context: path.resolve(__dirname, "src"),
		entry: ["./index"],
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].[contenthash].js",
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "[name].[contenthash].css",
			}),
			new ForkTsCheckerWebpackPlugin({
				typescript: {
					configFile: "../tsconfig.json",
				},
			}),
			new HtmlWebpackPlugin({
				template: "./index.html",
			}),
		],
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "src"),
			},
			extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
		},
		module: {
			rules: [
				{
					test: /\.(j|t)s(x?)$/,
					exclude: /node_modules/,
					use: ["babel-loader"],
				},
				{
					test: /\.(s?)css$/,
					use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
					sideEffects: true,
				},
				{
					test: /\.(woff2|woff|ttf)$/,
					loader: "file-loader",
					options: {
						name: "[name].[contenthash].[ext]",
					},
				},
				{
					test: /\.(png|jpg|jpeg|gif|bmp|webp)$/,
					loader: "url-loader",
					options: {
						limit: 4096,
						name: "[name].[contenthash].[ext]",
					},
				},
				{
					test: /\.svg$/,
					loader: "url-loader",
					options: {
						generator: (content) => svgToMiniDataURI(content.toString()),
						name: "[name].[contenthash].[ext]",
					},
				},
			],
		},
		stats: "errors-warnings",
	};
};
