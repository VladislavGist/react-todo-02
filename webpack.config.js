let webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public/build",
		publicPath: "build/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: ["/node_modules/", "/public/"]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer-loader",
				exclude: ["/node_modules/", "/public/"]
			},
			{
				test: /\.sass$/,
				loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
				exclude: ["/node_modules/", "/public/"]
			},
			{
				test: /\.jsx$/,
				loader: "react-hot-loader!babel",
				exclude: ["/node_modules/", "/public/"]
			},
			{
				test: /\.gif$/,
				loader: "url-loader?limit=1000&mimetype=image/gif"
			},
			{
				test: /\.jpg$/,
				loader: "url-loader?limit=1000&mimetype=image/jpg"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=1000&mimetype=image/png"
			},
			{
				test: /\.svg$/,
				loader: "url-loader?limit=1000&mimetype=image/svg"
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	}
}