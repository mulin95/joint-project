import React from 'react'



import VLine from 'loginImages/vLine.png'
import LoginContainer from './loginStyle'
import Welcome from "components/login/welcome/welcome"
import Tip from "components/login/tip/tip"

import LargeButton from 'components/login/largeButton/largeButton'
import mail from 'loginImages/mail.png'
import Email from 'components/login/email/email'


export default (props) => {
    return (
        
        <LoginContainer>
           
            <span className='skip' onClick={props.skipToBack}>跳过</span>
            <Welcome text="欢迎来到会了么"></Welcome>
            <Tip text="若该手机号未注册，我们将自动为你注册"></Tip>
            <input type="text" placeholder="请输入手机号" />
            <img className="VLine" src={VLine} alt="" />
            <LargeButton text={props.text} skipToGetVerify={props} retry={false}></LargeButton>
            <p className='passw' onClick={props.passwLogin}>密码登录</p>
            <p className="otherlogin">其他方式登录</p>
            <Email src={mail} alt="" />
            <p id='email'>邮箱</p>
        </LoginContainer>
    )
}
