import React, { PureComponent } from 'react'

// import getCheckIn from 'loginImages/getCheckIn.png'
// import mail from 'loginImages/mail.png'
import VLine from 'loginImages/vLine.png'
import LoginContainer from './loginStyle'
import Welcome from "components/login/welcome/welcome"
import Tip from "components/login/tip/tip"

import LargeButton from 'components/login/largeButton/largeButton'
import mail from 'loginImages/mail.png'

import {
    Route,
    withRouter,
    Redirect
} from 'react-router-dom'
class Login extends PureComponent {
    constructor() {
        super()
        this.state = {
            text: "获取验证码"
        }
    }

    render() {
        return (
            <LoginContainer>
                <span className='skip' onClick={this.skipToBack}>跳过</span>
                <Welcome></Welcome>
                <Tip></Tip>
                <input onChange={this.getverify} type="text" placeholder="请输入手机号" />
                <img className="VLine" src={VLine} alt="" />
                <LargeButton text={this.state.text}></LargeButton>
                <p className='passw'>密码登录</p>
                <p className="otherlogin">其他方式登录</p>
                <img className="email" src={mail} alt="" />
                <p id='email'>邮箱</p>
            </LoginContainer>
        )
    }
    skipToBack = () => {
        this.props.history.goBack();
    }
}

export default Login