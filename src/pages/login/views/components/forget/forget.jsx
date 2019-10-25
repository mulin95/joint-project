import React, { Component } from 'react'

import Back from 'components/titleBack/TitleBack'
import Input from 'components/login/input/input'
import LargeButton from 'components/login/largeButton/largeButton'

import utils from 'utils/http.js'
import ForgetContainer from './foretStyled'
class Forget extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            verifyCode: "",
        }
    }



    render() {
        return (
            <ForgetContainer>

                <Back title="更换密码"></Back>
                <div className="wrapper">
                    <Input text="请输入邮箱" ></Input>
                    <Input text="请输入短信验证码" tip="获取验证码" verify={this.getVerify} comfirmVerify={(e) => this.comfirmVerify(e)}></Input>
                    <Input text="请输入6-14位新密码" showPassword comfirmPwd={(e) => this.comfirmPwd(e)} ></Input>

                    <LargeButton
                        setEmail={localStorage.getItem("email")}
                        verifyCode={this.state.verifyCode}
                        newWord={this.state.value}
                        retry={false}
                        text="登录"
                        rout="wu"
                        regRout=""
                    ></LargeButton>
                </div>
            </ForgetContainer>

        )
    }
    comfirmVerify = (e) => {
        this.state.verifyCode = e
        console.log(this.state.verifyCode)
    }
    comfirmPwd = (e) => {
        this.state.value = e
        console.log(this.state.value)
    }
    getVerify = async () => {
        let sss = localStorage.getItem("email")
        await utils.get(`/huileme/a/m/UserController/getCode?userName=${encodeURIComponent(sss)}`)


    }




}

export default Forget