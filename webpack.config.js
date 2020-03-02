const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifyPlugin = require("html-beautify-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	mode: isProduction ? "production" : "development",
	context: path.resolve(__dirname, "src"),
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name]-[contenthash].js",
		libraryTarget: "umd"
	},
	plugins: [
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM": "react-dom",
			"useState": ["react", "useState"],
			"useEffect": ["react", "useEffect"],
			"useContext": ["react", "useContext"],
			"useReducer": ["react", "useReducer"],
			"useCallback": ["react", "useCallback"],
			"useMemo": ["react", "useMemo"],
			"useRef": ["react", "useRef"],
			"useImperativeHandle": ["react", "useImperativeHandle"],
			"useLayoutEffect": ["react", "useLayoutEffect"],
			"useDebugValue": ["react", "useDebugValue"]
		}),
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash].css",
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
			minify: {
				removeScriptTypeAttributes: true,
			}
		}),
		new HtmlBeautifyPlugin({
			config: {
				html: {
					"extra_liners": [],
					"indent_with_tabs": true,
					"indent_inner_html": false,
					"max_preserve_newlines": 2
				}
			}
		}),
		(process.env.SHOW_BUNDLE_ANALYSIS === "true" ? new BundleAnalyzerPlugin({
			analyzerMode: "static",
			reportFilename: "../build/bundleAnalysis.html",
			defaultSizes: "stat",
			openAnalyzer: true
		}) : null)
	].filter(item => item !== null),
	resolve: {
		alias: {
			assets: path.resolve(__dirname, "src/assets"),
			components: path.resolve(__dirname, "src/components"),
			config: path.resolve(__dirname, "src/config"),
			styles: path.resolve(__dirname, "src/styles"),
			utils: path.resolve(__dirname, "src/utils")
		},
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
								corejs: 3,
								modules: false
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
				parallel: true
			})
		],
		usedExports: true
	},
	devServer: {
		publicPath: "/",
		contentBase: "dist",
		index: "index.html",
		openPage: "index.html",
		historyApiFallback: {
			rewrites: [
				{ from: /^\/$/, to: "index.html" }
			]
		},
		writeToDisk: true,
		serveIndex: false,
		https: true,
		port: 7579,
		host: "localhost"
	},
	devtool: "inline-source-map"
};
