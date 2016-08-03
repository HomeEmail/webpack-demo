
import app_less from './base.less';
import './index.less';

import React from 'react';
import ReactDom from 'react-dom';
import FooterFixedBar from './componnents/FooterFixedBar';
import UserItem from './componnents/UserItem';


//
//require('./style.css');
//require('./app.less');

//var $ = require('jquery');//webpack.config.js里配置好插件后不需要require就可以直接使用$
//
$('body').append('<div id="homePage"></div>');

//
//$('body').append('<div class="loadingTips">loading...</div>');

import defaultUserPic from './images/default_user_pic@2x.png';

//$('body').append('<img src="'+defaultUserPic+'" />');



//import bgImg from './images/bg@3x.png';

//$('body').append('<img src="'+bgImg+'" />');
//
//var React = require('react');
//var ReactDom = require('react-dom');
//ReactDom.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('example')
//);

//ReactDom.render(
//    <FooterFixedBar />,
//    document.getElementById('homePage')
//);


ReactDom.render(
    <div className="page1 overflow-scroll-y">
        <div className="userItemWrapper">
            <UserItem name="黄小花" img={defaultUserPic} male="false" idno="395893284"/>
            <UserItem name="李小敏" img={defaultUserPic} male="false" idno="395593284"/>
            <UserItem name="小明" img={defaultUserPic} male="true" idno="3958944284"/>
            <UserItem name="黄小花" img={defaultUserPic} male="false" idno="395893284"/>
            <UserItem name="李小敏" img={defaultUserPic} male="false" idno="395593284"/>
            <UserItem name="小明" img={defaultUserPic} male="true" idno="3958944284"/>
            <UserItem name="黄小花" img={defaultUserPic} male="false" idno="395893284"/>
            <UserItem name="李小敏" img={defaultUserPic} male="false" idno="395593284"/>
            <UserItem name="小明" img={defaultUserPic} male="true" idno="3958944284"/>
            <UserItem name="黄小花" img={defaultUserPic} male="false" idno="395893284"/>
            <UserItem name="李小敏" img={defaultUserPic} male="false" idno="395593284"/>
            <UserItem name="小明" img={defaultUserPic} male="true" idno="3958944284"/>
        </div>
        <FooterFixedBar />
    </div>,
    document.getElementById('homePage')
);



//require('./helloAction');
//require('./todoListAction');

//
//var content=require("./content.js");
//
//document.write(content);
//$('body').append('<h1>xxoo 22</h1>');