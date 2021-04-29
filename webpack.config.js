module.exports = {
	entry: {
		'page1': './test/index.html',
		'page2': './src/index.js'
	},
	output: {
		path: __dirname,
		filename: "apps/[name]/build/bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			chunks: ['page1'],
			filename: 'apps/page1/build/index.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			chunks: ['page2'],
			filename: 'apps/page2/build/index.html'
		})
	]
};