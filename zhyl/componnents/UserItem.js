/**
 * Created by ivan on 16/8/4.
 */
/**
 * Created by ivan on 16/8/3.
 */




// es6
import React from 'react';
import './UserItem.less';



class UserItem extends React.Component {
    handleClick(e){
        //console.log(e.target);
        //alert(e.target.className);
        window.location.href='../html/userInfo.html';
    };
    gotoReportPage(e){
        window.location.href='../html/reportInfo.html';
    };
    render(){
        var male=this.props.male||'true';
        var sex='name male';
        if(male=='false'){
            sex='name female';
        }
        return (
            <div className="userItem">
                <img className="img" src={this.props.img} onClick={this.handleClick} />
                <div className="infoWrapper" onClick={this.handleClick} >
                <span className={sex}>{this.props.name}</span><br/>
                <span className="idno">ID:{this.props.idno}</span>
                </div>
                <div className="searchReport" onClick={this.gotoReportPage}>
                    <div className="imgSearch"></div>
                    <p>查询报告</p>
                </div>
            </div>
        );
    }
}
export default  UserItem;
