const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env = {}, argv = {}) => {
	const isProduction = argv.mode === "production";

	const plugins = [
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash].css",
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
			minify: {
				removeScriptTypeAttributes: true,
			}
		}),
		new OptimizeCssAssetsPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "static" }
			]
		})
	];
	if (env.showBundleAnalysis) {
		plugins.push(new BundleAnalyzerPlugin({
			analyzerMode: "static",
			reportFilename: "../temp/bundleAnalysis.html",
			defaultSizes: "stat",
			openAnalyzer: true
		}));
	}
	return {
		mode: isProduction ? "production" : "development",
		context: path.resolve(__dirname, "src"),
		entry: "./index.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name]-[contenthash].js",
			libraryTarget: "umd"
		},
		plugins: plugins,
		resolve: {
			modules: [
				"src",
				"node_modules"
			],
			extensions: [".js"]
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: [
								["@babel/react", {
									useBuiltIns: true
								}],
								["@babel/preset-env", {
									useBuiltIns: "usage",
									corejs: 3
								}]
							]
						}
					}
				},
				{
					test: /\.s?css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: !isProduction
							}
						},
						"css-loader",
						"sass-loader"
					]
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						"file-loader",
					]
				}
			]
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					extractComments: false,
					terserOptions: {
						output: {
							comments: /@license/i,
						}
					},
					parallel: true
				})
			],
			usedExports: true
		},
		devServer: {
			https: true,
			port: 7579,
			host: "localhost"
		},
		devtool: "inline-source-map"
	};
};
