
import app_less from './base.less';

import React from 'react';
//import ReactDom from 'react-dom';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, Link,browserHistory, hashHistory } from 'react-router';


import Home from './componnents/home';
import HomeContent from './componnents/homeContent';
import Register from './componnents/register';

//var $ = require('jquery');//webpack.config.js里配置好插件后不需要require就可以直接使用$
//
$('body').append('<div id="homePage"></div>');

//
//$('body').append('<div class="loadingTips">loading...</div>');


//ReactDom.render(
//    <FooterFixedBar />,
//    document.getElementById('homePage')
//);


render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={HomeContent} />
                <Route path="register" component={Register}>
                    <IndexRoute component={Register} />
                </Route>
                <Route path="*" component={HomeContent} />
            </Route>
        </Router>
    ),
    document.getElementById('homePage')
);

/*
 <Router history={hashHistory}>
 <Route path="/" component={Home}>
 <IndexRoute component={Home} />
 <Route path="about" component={About} />
 <Route path="inbox" component={Inbox} />
 </Route>
 </Router>
 */
