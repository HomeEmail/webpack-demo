/**
 * Created by ivan on 16/8/14.
 */
import React from 'react';

import UserItem from './UserItem';


import defaultUserPic from '../images/default_user_pic@2x.png';
import add_friend_btn from '../images/add_friend_btn2.png';





class HomeContent extends React.Component{
    render(){
        return (
            <div className="userItemWrapper overflow-scroll-y">
                <UserItem name="黄小花" img={defaultUserPic} male="false" idno="395893284"/>
                <UserItem name="李小敏" img={defaultUserPic} male="false" idno="395593284"/>
                <UserItem name="小明" img={defaultUserPic} male="true" idno="3958944284"/>
                <div className="add_friend_btn">
                    <a href="../html/addUser.html"><img src={add_friend_btn} className="add_friend_btn_icon" />
                        <span>添加用户</span></a>
                </div>
            </div>
        );
    }
}
export default HomeContent;