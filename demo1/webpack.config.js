var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
//require('stack-source-map')();

const IS_PRO_MODE = true;

module.exports ={
	entry: {
		//hot:['webpack/hot/only-dev-server','./entry.js'],
		jquery:['jquery'],
		react:['react'],
		pro:['./entry.js']
	}
	,output: {
		path: __dirname+'/build/'
		,filename: '[hash:8].[name].js' //8是指hash长度为8
		,chunkFilename : 'chunk.[name].[hash:8].js'
		,publicPath : ''
	}
	//,devtool: '#cheap-module-eval-source-map' //上线编译要注释这个，避免map冗余代码
    ,devServer: {
        contentBase: "./build", // webpack-dev-server --inline --hot
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
                test: /\.(js|jsx)$/
                ,exclude: /node_modules/
                ,loaders: ['react-hot','babel']
            }
            , {
                //文件加载器，处理文件静态资源
                test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
			,{
				test:/\.(png|jpg|svg|gif)$/
				,loader:'url-loader?limit=8192' //inline base64 URLs for <=8k images, direct URLs for the rest
			}
		]
	}
	,resolve:{
		extensions:['','.js','.json','.jsx']//想要加载一个js文件时，只要require('common')就可以加载common.js文件了
	}
	,externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		//"jquery": "$"
	}
	,plugins:(function(){
		const plus = [];
		if(IS_PRO_MODE){
			// 清除上一版本带md5更名的文件
			plus.push(new Clean(['build']));
			plus.push(new webpack.BannerPlugin('Build at ' + new Date()));

			plus.push(new webpack.DefinePlugin({
				'process.env':{
					'NODE_ENV': JSON.stringify('production') //此设置让react编译成上线版本
				}
			}));

		}
        plus.push(new webpack.ProvidePlugin({ //加载jq 不需要require就可以直接使用$
            $: 'jquery'
        }));
		plus.push(new webpack.optimize.CommonsChunkPlugin({
			name : ['jquery','react'],//将公共模块提取
			//filename : "common.[id].js",
			minChunks: Infinity //提取所有entry共同依赖的模块
		}));

		if(IS_PRO_MODE){
			plus.push(new webpack.optimize.UglifyJsPlugin({
				minimize : true,
				compress: {
					warnings: false
				},
				mangle: {
					except: ['$super', '$', 'exports', 'require']
				}
			}));
		}
		plus.push(new ExtractTextPlugin('[name].[hash:8].css'));

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
			chunks:['react','jquery','pro'],//js文件按此排序
			//排序
			chunksSortMode:function(a,b){
				var index={'pro':1,'react':3,'jquery':2},
					aI=index[a.origins[0].name],
					bI=index[b.origins[0].name];
				return aI&&bI?bI-aI:-1;
			}

		}));
		if(!IS_PRO_MODE) {
			plus.push(new webpack.HotModuleReplacementPlugin());
		}
		plus.push(new webpack.NoErrorsPlugin());//用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误

		return plus;
	})()
};