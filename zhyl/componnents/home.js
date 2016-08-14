/**
 * Created by ivan on 16/8/14.
 */
import React from 'react';
import './home.less';
import FooterFixedBar from './FooterFixedBar';

class Home extends React.Component{
    render(){
        return (
            <div className="page1">

                {this.props.children}
                <FooterFixedBar />
            </div>
        );
    }
}
export default Home;