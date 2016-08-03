/**
 * Created by ivan on 16/5/1.
 */
var arguments = process.argv.splice(2);
var isRelease = false;
if(arguments.length>0&&arguments[0]=='-release'){
	isRelease = true;
}
var processCMD = require('child_process');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = null;
config = require("./webpack.config.js");
console.log('isRelease:'+isRelease);

if(isRelease){
	//直接调用命令//cd testweb && md mydir
	processCMD.exec('webpack',
	  function (error, stdout, stderr) {
		if (error !== null) {
		  console.log('exec error: ' + error);
		}
	});
	return;
}
config.entry.pro.unshift("webpack/hot/only-dev-server");
config.entry.pro.unshift("webpack-dev-server/client?http://localhost:8086/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {});
server.listen(8086);