import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import ButtonCom from '../titleCom/ButtonCom'
import {UserTelCom} from './StyledUser'

class UserTel extends Component {
    render() {
        return (
            <UserTelCom>
               <TitleBack title="手机号码"/> 
                <div className="content">
                    <p>您已经绑定手机号码</p>
                    <div>{this.props.match.params.tel}</div>
                    <span>              
                        提示：更换绑定后，不会对账户内的数据进行迁移，只
                        能使用新手机号观看当前帐号内的课程。
                    </span>
                </div>
               <ButtonCom title="更换手机号" bottom="3.5"/>
            </UserTelCom>
        );
    }
}

export default UserTel;