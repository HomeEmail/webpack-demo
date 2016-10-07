/**
 * Created by ivan on 16/8/3.
 */




// es6
import React from 'react';
import {Link} from 'react-router';
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
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);//绑定在这里效率更高

    };
    handleClick(e,addr){
        //console.log(this);
        //console.log(addr);
        //console.log(e.target.className);
        //alert(e.target.className);
        //location.href=addr;
    };
    //<!-- 根路由只会在精确匹配时，才具有activeClassName  -->
    render() {
        return (
            <div className="footerFixedBar" style={boxStyle}>
                <div className="footerFixedBar-item item1">
                    <Link to="/" activeClassName="on" onlyActiveOnIndex={true}>
                        <div className="img"></div>
                        <p className="text">健康档案</p>
                    </Link>
                </div>
                <div className="footerFixedBar-item item2">
                    <Link to="register" activeClassName="on">
                        <div className="img"></div>
                        <p className="text">预约挂号</p>
                    </Link>
                </div>
                <div className="footerFixedBar-item item3">
                    <Link to="charge" activeClassName="on">
                        <div className="img"></div>
                        <p className="text">缴费充值</p>
                    </Link>
                </div>
                <div className="footerFixedBar-item item4">
                    <Link to="healthLife" activeClassName="on">
                        <div className="img"></div>
                        <p className="text">养生知识</p>
                    </Link>
                </div>
            </div>
        );
    }
}
export default  FooterFixedBar;
