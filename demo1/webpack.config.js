var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');//提取公共的js
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

const IS_PRO_MODE = false;

module.exports ={
	entry: './entry.js'
	,output: {
		path: __dirname+'/build/'
		,filename: 'bundle.[name].js'
		,chunkFilename : 'chunk.[id].js'
		,publicPath : ''
	}
	,module: {
		loaders: [
			{
				test:/\.css$/
				,loader:ExtractTextPlugin.extract("css-loader") //为了使用ExtractTextPlugin提取css
			}
			,{
				test:/\.less$/
				,loader:ExtractTextPlugin.extract(['css','less'])//为了使用ExtractTextPlugin提取css,原来是 style!css!less
			}
			,{
				test:/\.(png|jpg|woff|woff2|eot|ttf|svg)$/
				,loader:'url-loader?limit=8192' //inline base64 URLs for <=8k images, direct URLs for the rest
			}
		]
	}
	,plugins:(function(){
		const plus = [];
		if(IS_PRO_MODE){
			// 清除上一版本带md5更名的文件
			plus.push(new Clean(['build']));
			plus.push(new webpack.BannerPlugin('Build at ' + new Date()));

			plus.push(new webpack.optimize.UglifyJsPlugin({
				minimize : true,
				compress: {
					warnings: false
				}
				/*

				 mangle: {
				 except: ['$super', '$', 'exports', 'require']
				 }
				 */
			}));
		}
		plus.push(new webpack.optimize.CommonsChunkPlugin({
			name : "common",
			filename : "common.[id].js",
			minChunks: 2,
		}));
		plus.push(new ExtractTextPlugin('app.[name].css'));

		plus.push(new HtmlWebpackPlugin({
			title : 'webpack test',
			minify : {
				removeComments : IS_PRO_MODE, // 线上环境开启删除注释
				collapseWhitespace : IS_PRO_MODE // 线上环境开启压缩
			},
			filename : 'index.html',
			inject : 'body',
			hash : !IS_PRO_MODE, // 开发环境 添加query hash，避免缓存
			template : 'index.template.html',
		}));

		plus.push(new webpack.HotModuleReplacementPlugin());
		plus.push(new webpack.NoErrorsPlugin());
		//plus.push(new CommonsChunkPlugin('common.js'));
		return plus;
	})()
};