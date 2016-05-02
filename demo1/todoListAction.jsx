/**
 * Created by ivan on 16/5/1.
 */

import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './todoList';
//
//var React = require('react');
//var ReactDom = require('react-dom');
//var TodoList = require('./todoList');

ReactDom.render(
    <TodoList />,
    document.getElementById('example')
);
