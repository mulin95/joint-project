import React, { Component } from 'react';

import user from 'assets/profileImages/user-5.png'
import member from 'assets/profileImages/member-9.png'

import {
    MemberOppenCom
} from './StyledMember'

import TitleBack from 'components/titleBack/TitleBack'
import ButtonCom from '../titleCom/ButtonCom'

class MemberOppen extends Component {
    render() {
        return (
            <MemberOppenCom>
                <TitleBack title="会了么会员" />
                <div className="user">
                    <img src={user} alt=""/>
                    <div className="til">
                        <div className="name">学员20</div>
                        <span>当前未开通VIP</span>
                        <img src={member} alt=""/>
                    </div>
                </div>
                <div className="member">
                    <p className="vip">VIP专属特权</p>
                    <div>
                        <div className="first">
                            <p>
                                <span>连续包月</span>
                                <em>新用户专享首月优惠，每月自动续费10元可随时取消。</em>
                            </p>
                            <i>￥10</i>
                        </div>
                        <div>
                            <p>12个月</p>
                            <i>￥158</i>
                        </div>
                        <div>
                            <p>3个月</p>
                            <i>￥45</i>
                        </div>
                        <div>
                            <p>1个月</p>
                            <i>￥18</i>
                        </div>
                    </div>
                </div>
                <div className="title">
                    《VIP服务协议》《连续包月服务协议》
                </div>
                <ButtonCom bottom="1" clickBtn={()=>this.handleClick()}/>
            </MemberOppenCom>
        );
    }
    handleClick(){
        this.props.history.push({
            pathname:'/profile/member/back'
        })
    }
}

export default MemberOppen;