import React, { Component } from 'react'

import longVline from 'loginImages/longVline.png'
import showPassword from 'loginImages/showPassword.png'
import InputContainer from './inputStyled.js'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
        }
    }
    render() {
        console.log(this.props)
        return (
            <InputContainer>
                <input className="text" type="text" placeholder={this.props.text} value={this.state.value} onChange={this.getEmail} />
                {
                    this.props.showPassword && <img className="showPassword" src={showPassword} alt="" />
                }{

                    this.props.tip && <p className="tip" onClick={this.verifyCode}>{this.props.tip}</p>
                }
                <img className="longVline" src={longVline} alt="" />
            </InputContainer>
        )
    }
    getEmail = (e) => {
        if (this.props.showPassword) {
            this.setState({
                value: e.target.value
            })
            setTimeout(() => {
                this.props.comfirmPwd(this.state.value)
            },0)


        } else if(this.props.tip){
            this.setState({
                value: e.target.value
            })
            setTimeout(() => {

                this.props.comfirmVerify(this.state.value)
            }, 1)
        }
        else {

            this.setState({
                value: e.target.value
            })

            setInterval(() => {
                localStorage.setItem("email", this.state.value)
            }, 0)
        }
    }

    verifyCode = () => {
        this.props.verify()
    }
}

export default Input