import React, { Component } from 'react'

import Back from 'components/titleBack/TitleBack'
import EmailContainer from './emailStyled'
import Input from 'components/login/input/input'

import LargeButton from 'components/login/largeButton/largeButton'
import { withRouter } from 'react-router-dom'
class email extends Component {
    constructor() {
        super()
        this.state = {
            emailLogWord: "",
        }
    }
    render() {
        return (
            <EmailContainer>
                <Back title="邮箱登录"></Back>
                <div className="inputText">
                    <Input text="请输入邮箱号码"></Input>
                    <Input showPassword text="请输入邮箱密码" comfirmPwd={(e) => this.comfirmPwd(e)}></Input>
                </div>
                
                <LargeButton
                    emailLogWord={this.state.emailLogWord}
                    emailLogNum={localStorage.getItem("email")}
                    retry={false}
                    text="登录"
                    rout="wu"
                    emailLog=""
                ></LargeButton>
                {console.log(this.state.emailLogWord)}
                <p className="textSkip" onClick={this.skipRout}>忘记密码</p>
            </EmailContainer>
        )
    }
    comfirmPwd = (e) => {
        this.state.emailLogWord = e
        console.log(this.state.emailLogWord)
    }
    skipRout = () => {
        this.props.history.push("/login/email/forget")
    }
}

export default withRouter(email)