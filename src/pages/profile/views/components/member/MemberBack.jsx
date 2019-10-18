import React, { Component } from 'react';

import {
    MemberBackCom
} from './StyledMember'

import user from 'assets/profileImages/user-5.png'
import member from 'assets/profileImages/member-9.png'

import TitleBack from 'components/titleBack/TitleBack'
import ButtonCom from '../titleCom/ButtonCom'

class MemberBack extends Component {
    render() {
        return (
            <MemberBackCom>
                <TitleBack title="会了么会员" />
                <div className="user">
                    <img src={user} alt=""/>
                    <p>
                        <h3>学员20</h3>
                        <span>当前未开通VIP</span>
                        <img src={member} alt=""/>
                    </p>
                </div>
                <div className="title">
                    恭喜您成为会了么会员
                </div>
                <ButtonCom title="返回" bottom="1" clickBtn={()=>this.handleClick()}/>
            </MemberBackCom>
        );
    }
    handleClick(){
        this.props.history.goBack();
    }
}

export default MemberBack;