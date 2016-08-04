
import app_less from './base.less';
import './index.less';

import React from 'react';
import ReactDom from 'react-dom';
import FooterFixedBar from './componnents/FooterFixedBar';
import UserItem from './componnents/UserItem';



//var $ = require('jquery');//webpack.config.js里配置好插件后不需要require就可以直接使用$
//
$('body').append('<div id="homePage"></div>');

//
//$('body').append('<div class="loadingTips">loading...</div>');

import defaultUserPic from './images/default_user_pic@2x.png';
import add_friend_btn from './images/add_friend_btn2.png';


//ReactDom.render(
//    <FooterFixedBar />,
//    document.getElementById('homePage')
//);


ReactDom.render(
    <div className="page1">
        <div className="userItemWrapper overflow-scroll-y">
            <UserItem name="黄小花" img={defaultUserPic} male="false" idno="395893284"/>
            <UserItem name="李小敏" img={defaultUserPic} male="false" idno="395593284"/>
            <UserItem name="小明" img={defaultUserPic} male="true" idno="3958944284"/>
            <div className="add_friend_btn">
            	<a href="../html/addUser.html"><img src={add_friend_btn} className="add_friend_btn_icon" />
            	<span>添加用户</span></a>
            </div>
        </div>
        <FooterFixedBar />
    </div>,
    document.getElementById('homePage')
);


