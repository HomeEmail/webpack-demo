/**
 * Created by ivan on 16/5/1.
 */

// es6
import React from 'react';

class Hello extends React.Component {
    render(){
        return (
            <h1>Hello {this.props.name}!!!</h1>
        );
    }
}
export default  Hello;


// es5
//var React = require('react');
//var Hello = React.createClass({
//
//    render : function(){
//        return (
//            <h1>Hello {this.props.name}!!!</h1>
//        );
//    }
//});
//module.exports=Hello;
