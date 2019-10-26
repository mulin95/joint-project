import React from 'react'
import LargeButtonContainer from './largeButtonStyled'
import { withRouter } from 'react-router-dom'
import lgutils from 'lgutils/http.js'
class largeButton extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <LargeButtonContainer onClick={this.getVerify} className="btn">
                <p>{this.props.retry === false ? this.props.text : this.props.retryText}</p>
            </LargeButtonContainer>
        )
    }

    getVerify = async () => {

        if (this.props.retry === false) {
            if (this.props.rout === "wu" && this.props.regRout === "undefined") {
                await lgutils.post("/huileme/a/m/UserController/phoneLogin", {
                    body: `phoneNumber=${this.props.phoneNum}&verificationCode=${this.props.code.join('')}`,
                    headers: {
                        'content-type': "application/x-www-form-urlencoded"
                    }
                }).then(
                    (res) => {
                        if (res.message === "登录成功") {
                            alert("嘻嘻，登陆成功啦")
                            this.props.history.push('/index')
                        } else {
                            alert("哦豁，不知什么原因失败了")
                            this.props.history.push('/login/getVerify')
                        }
                    }
                )
            } else if (this.props.regRout === "" && this.props.emailReg !== "e") {
                await lgutils.post("/huileme/a/m/UserController/phoneLogin", {
                    body: `email=${this.props.setEmail}&userPassWord=${this.props.newWord}&verificationCode=${this.props.verifyCode}`,
                })
                this.props.history.push('/login/email')
            }
            else if (this.props.regRout === "" && this.props.emailReg == "e") {
                
                await lgutils.post("/huileme/a/m/UserController/emailRegister", {
                    body: `email=${this.props.setEmail}&userPassWord=${this.props.newWord}&verificationCode=${this.props.verifyCode}`,
                    headers: {
                        'content-type': "application/x-www-form-urlencoded"
                    }
                })
                this.props.history.push('/login/email')
            }

            else if (this.props.emailLog === "") {
                //邮箱密码登录
                await lgutils.post("/huileme/a/m/UserController/emailLogin", {
                    body: `email=${this.props.emailLogNum}&userPassWord=${this.props.emailLogWord}`,
                    headers: {
                        'content-type': "application/x-www-form-urlencoded"
                    }
                }).then(
                    (res) => {
                        if (res.message === "登录成功") {
                            alert("嘻嘻，登陆成功啦")
                            this.props.history.push('/index')
                        } else {
                            alert("哦豁，不知什么原因失败了")
                            this.props.history.push('/login/email')
                        }
                    }
                )



            }
            else {
            
                if (this.props.type === "get" && this.props.data != "") {
                    await lgutils.get(`${this.props.url}?${Object.keys(this.props.data)}=${Object.values(this.props.data)}`)
                    this.props.history.push(this.props.skipToGetVerify.rout)
                } else {
                    alert("请输入")
                }
            }
        } else if (this.props.retry === true) {
            this.props.history.push('/login')
        }

    }
    // https://www.jianshu.com/p/0fa8c7456c15




}
export default withRouter(largeButton)