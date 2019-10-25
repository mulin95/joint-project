import React, { Component } from 'react'

import Back from 'components/titleBack/TitleBack'
import Input from 'components/login/input/input'
import LargeButton from 'components/login/largeButton/largeButton'


import ForgetContainer from './foretStyled'
class Forget extends Component {
    render() {
        return (
            <ForgetContainer>

                <Back title="更换密码"></Back>
                <div className="wrapper">
                    <Input text="请输入手机号" ></Input>
                    <Input text="请输入邮箱验证码" tip="获取验证码"></Input>
                    <Input text="请输入6-14位新密码" aaaa="aaa" comfirmPwd={this.comfirmPwd}></Input>
                    <Input text="请再次输入新密码" showPassword></Input>
                    <LargeButton retry={false} text="登录" rout="wu"></LargeButton>
                </div>
            </ForgetContainer>

        )
    }
    comfirmPwd=(e) => {
        console.log(1)
    }
}

export default Forget