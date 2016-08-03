
import app_less from './base.less';
import './index.less';
//
//require('./style.css');
//require('./app.less');

//var $ = require('jquery');//webpack.config.js里配置好插件后不需要require就可以直接使用$
//
//
$('body').append('<div class="loadingTips">loading...</div>');

import defaultUserPic from './images/default_user_pic@2x.png';

$('body').append('<img src="'+defaultUserPic+'" />');



import bgImg from './images/bg@3x.png';

$('body').append('<img src="'+bgImg+'" />');
//
//var React = require('react');
//var ReactDom = require('react-dom');
//ReactDom.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('example')
//);

//require('./helloAction');
//require('./todoListAction');

//
//var content=require("./content.js");
//
//document.write(content);
//$('body').append('<h1>xxoo 22</h1>');