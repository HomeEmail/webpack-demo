/**
 * Created by ivan on 16/8/3.
 */




// es6
import React from 'react';
import './FooterFixedBar.less';
var boxStyle={
    position:'absolute',
    width:'100%',
    height:'4.6rem',
    backgroundColor:'#fff',
    borderTop:'1px #eee solid',
    bottom:0,
    left:0,
    textAlign:'center',
    zIndex:9999
};


class FooterFixedBar extends React.Component {
    handleClick(e){
        //console.log(e.target);
        //alert(e.target.className);
    };
    render(){
        return (
            <div className="footerFixedBar" style={boxStyle}>
                <div className="footerFixedBar-item item1 on" onClick={this.handleClick}>
                    <div className="img"></div>
                    <p className="text">健康档案</p>
                </div>
                <div className="footerFixedBar-item item2" onClick={this.handleClick}>
                    <div className="img"></div>
                    <p className="text">预约挂号</p>
                </div>
                <div className="footerFixedBar-item item3" onClick={this.handleClick}>
                    <div className="img"></div>
                    <p className="text">缴费充值</p>
                </div>
                <div className="footerFixedBar-item item4" onClick={this.handleClick}>
                    <div className="img"></div>
                    <p className="text">养生知识</p>
                </div>
            </div>
        );
    }
}
export default  FooterFixedBar;
