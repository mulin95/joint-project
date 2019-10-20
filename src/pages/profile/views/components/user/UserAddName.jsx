import React, { Component } from 'react';

import TitleCom from '../titleCom/TitleCom'
import {UserNameCom} from './StyledUser'
import warning from 'assets/profileImages/warning.png'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class UserAddName extends Component {
    render() {
        return (
            <UserNameCom>
                <TitleCom title="昵称" />
                <div className="user">
                    <p>
                        <input type="text" placeholder="某某某"/>
                        <WingBlank className="and-com">
                            <WhiteSpace />
                                <Button onClick={this.successToast}>更换昵称</Button>
                        </WingBlank>
                    </p>
                </div>
                <p>
                    <img src={warning} alt=""/>
                    <span>配昵称需输入2-14个字</span>
                </p>
            </UserNameCom>
        );
    }
    successToast=()=> {
        Toast.success('更换昵称成功', 0.6,()=>{
            this.props.history.goBack();
        });
    }
}

export default UserAddName;