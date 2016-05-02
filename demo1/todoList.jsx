
//es6
import React from 'react';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class TodoList extends React.Component {
    //getInitialState(){
    //    return {items:['hello','world','click','me']};
    //};//es6  没有此法，用构造器代替
    constructor(props) {
        super(props);
        this.state = {items:['hello','world','click','mee']};
    };
    handleAdd(){
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    };
    handleRemove(i){
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    };
    render(){
        var items = this.state.items.map(function(item, i) {
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));
        return (
            <div>
                <button onClick={this.handleAdd.bind(this)}>Add Item</button>
                {items}
            </div>
        );
    };
}

export default TodoList;

//es5
//
//var TodoList = React.createClass({
//    getInitialState: function() {
//        return {items: ['hello', 'world', 'click', 'me']};
//    },
//    handleAdd: function() {
//        var newItems =
//            this.state.items.concat([prompt('Enter some text')]);
//        this.setState({items: newItems});
//    },
//    handleRemove: function(i) {
//        var newItems = this.state.items.slice();
//        newItems.splice(i, 1);
//        this.setState({items: newItems});
//    },
//    render: function() {
//        var items = this.state.items.map(function(item, i) {
//            return (
//                <div key={item} onClick={this.handleRemove.bind(this, i)}>
//                    {item}
//                </div>
//            );
//        }.bind(this));
//        return (
//            <div>
//                <button onClick={this.handleAdd}>Add Item</button>
//                {items}
//            </div>
//        );
//    }
//});


//
//<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
//    {items}
//</ReactCSSTransitionGroup>

//module.exports=TodoList;