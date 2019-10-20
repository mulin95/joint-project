import React, { Component } from 'react'

import Back from 'components/titleBack/TitleBack'
import EmailContainer from './emailStyled'
import Input from 'components/login/input/input'

import LargeButton from 'components/login/largeButton/largeButton'
import {withRouter } from 'react-router-dom'
class email extends Component {
    render() {
        return (
            <EmailContainer>
                <Back title="邮箱登录"></Back>
                <div className="inputText">
                    <Input text="请输入邮箱号码"></Input>
                    <Input showPassword text="请输入邮箱密码"></Input>
                </div>
                <LargeButton retry={false} text="登录" rout="wu"></LargeButton>
                <p className="textSkip" onClick={this.skipRout}>忘记密码</p>
            </EmailContainer>
        )
    }

    skipRout=() => {
        this.props.history.push("/login/email/forget")
    }
}

export default withRouter(email)