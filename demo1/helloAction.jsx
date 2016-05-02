/**
 * Created by ivan on 16/5/1.
 */

import React from 'react';
import ReactDom from 'react-dom';
import Hello from './hello';
//
//var React = require('react');
//var ReactDom = require('react-dom');
//var Hello = require('./hello');

ReactDom.render(
    <Hello name="IvanLao" />,
    document.getElementById('example')
);
