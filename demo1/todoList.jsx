
//es6
import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import './todoList.less';

class TodoList extends React.Component {
    //getInitialState(){
    //    return {items:['hello','world','click','me']};
    //};//es6  没有此法，用构造器代替
    constructor(props) {
        super(props);
        this.state = {items:['hello','world','click','mee'],inputValue:'xxoo'};
        this.handleAdd=this.handleAdd.bind(this);//绑定在这里效率更高
        this.inputChange=this.inputChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
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
    inputChange(e){
        this.setState({inputValue:e.target.value});
    }
    handleClick(e){
        // Explicitly focus the text input using the raw DOM API.
        if (this.myTextInput !== null) {
            this.myTextInput.focus();
        }
    }
    render(){
        var items = this.state.items.map(function(item, i) {
            return (
                <div key={i} onClick={this.handleRemove.bind(this,i)}>
                    {item}
                </div>
            );
        }.bind(this));
        return (
            <div id="todoList1">

                <input type="text" value={this.state.inputValue} ref={(ref) => this.myTextInput = ref} onChange={this.inputChange} />
                <div>
                    {
                        (
                            () => {
                                switch (this.state.inputValue){
                                    case 'xxoo' : return 'xxoo';
                                    case 'ooxx' : return 'xxoo2';
                                    default : return 'aaaa';
                                }
                            }
                        )()
                    }
                </div>
                <button onClick={this.handleClick}>focus input</button>
                <button onClick={this.handleAdd}>Add Item</button>

                <ReactCSSTransitionGroup
                    transitionName={{
                        enter: 'example-enter',
                        enterActive: 'example-enter-active',
                        leave: 'example-leave',
                        leaveActive: 'example-leave-active',
                        appear: 'example-appear',
                        appearActive: 'example-appear-active'
                    }}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {items}
                        <div>end</div>
                </ReactCSSTransitionGroup>
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