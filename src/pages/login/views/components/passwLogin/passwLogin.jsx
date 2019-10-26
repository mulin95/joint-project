import React, { Component } from 'react'

import Back from 'components/titleBack/TitleBack'
import Welcome from "components/login/welcome/welcome"
import Input from 'components/login/input/input'
import LargeButton from 'components/login/largeButton/largeButton'
import Tip from "components/login/tip/tip"


import {withRouter } from 'react-router-dom'
import PasswLoginContainer from './passwLoginStyled'
class Item extends Component {
    render() {
        return (
            <PasswLoginContainer>
                <Back></Back>
                <Welcome text="欢迎来到会了么"></Welcome>
                <Tip text="请输入密码直接登录"></Tip>
                <div className="InputWrapper">
                    <Input className="Input" text="请输入手机号"></Input>
                    <Input className="Input" text="请输入密码" showPassword></Input>
                </div>
                <LargeButton retry={false} text="登录" rout="wu"></LargeButton>
                <p className="textSkip">
                    
                        <span onClick={this.skipVerifyCode}>验证码登录</span>
                        <span onClick={this.skipRout}>设置密码</span>
                
                </p>

            </PasswLoginContainer>
        )
    }
    skipRout=() => {
        this.props.history.push("/login/email/forget")
    }
    skipVerifyCode= () => {
        this.props.history.push("/login")
    }
}

export default withRouter(Item)