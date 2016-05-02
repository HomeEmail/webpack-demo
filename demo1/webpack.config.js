var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
//require('stack-source-map')();

const IS_PRO_MODE = false;

module.exports ={
	entry: ['webpack/hot/only-dev-server','./entry.js']
	,output: {
		path: __dirname+'/build/'
		,filename: 'bundle.[name].js'
		,chunkFilename : 'chunk.[id].js'
		,publicPath : ''
	}
	,devtool: '#cheap-module-eval-source-map'
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
				test:/\.(png|jpg|woff|woff2|eot|ttf|svg)$/
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
        plus.push(new webpack.ProvidePlugin({ //加载jq 不需要require就可以直接使用$
            $: 'jquery'
        }));
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
		plus.push(new webpack.NoErrorsPlugin());//用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误

		return plus;
	})()
};