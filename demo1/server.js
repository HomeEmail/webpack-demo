/**
 * Created by ivan on 16/5/1.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require("./webpack.config.js");
config.entry.pro.unshift("webpack/hot/only-dev-server");
config.entry.pro.unshift("webpack-dev-server/client?http://localhost:8085/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {});
server.listen(8085);