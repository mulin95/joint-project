import React from 'react'
import LargeButtonContainer from './largeButtonStyled'
import { withRouter } from 'react-router-dom'
import utils from 'utils/http.js'
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
        {console.log(this.props.phoneNum)}
        if (this.props.retry === false) {
            if (this.props.rout === "wu") {
               let ss=  await utils.post("/huilme/a/m/UserController/phoneLogin",{
                    data:{
                        phoneNumber:this.props.phoneNum,
                        verificationCode:this.props.code.join(''),
                    },
                    headers:{
                        'content-type':"application/x-www-form-urlencoded"
                    }
                })

                console.log(ss)
            } else {
                console.log(utils.get)
                console.log(this.props)

                if (this.props.type === "get" && this.props.data != "") {
                    console.log(this.props)
                    await utils.get(`${this.props.url}?${Object.keys(this.props.data)}=${Object.values(this.props.data)}`)
                    this.props.history.push(this.props.skipToGetVerify.rout)
                } else {
                    alert("请输入您的手机号")
                }
            }
        } else if (this.props.retry === true) {
            this.props.history.push('/login')
        }

    }
    // https://www.jianshu.com/p/0fa8c7456c15




}
export default withRouter(largeButton)