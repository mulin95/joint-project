import React, { Component } from 'react'

import longVline from 'loginImages/longVline.png'
import showPassword from 'loginImages/showPassword.png'
import InputContainer from './inputStyled.js'

 class Input extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
       
        return (
            <InputContainer>
                <input className="text" type="text" placeholder={this.props.text} />
                {
                    this.props.showPassword && <img className="showPassword" src={showPassword} alt="" />
                }{

                    this.props.tip && <p className="tip" onClick={this.verifyCode}>{this.props.tip}</p>
                }
                <img className="longVline" src={longVline} alt="" />

            </InputContainer>
        )
    }
    verifyCode= () => {
        console.log("已经得到验证码")
    }
}

export default Input