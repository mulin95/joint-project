import React, { PureComponent } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import VerifyContanier from './verifyStyled'


import verifyLine from 'loginImages/verifyLine.png'
import Welcome from "components/login/welcome/welcome"
import Tip from "components/login/tip/tip"

import LargeButton from 'components/login/largeButton/largeButton'
import Back from 'components/titleBack/TitleBack'
class Verify extends PureComponent {
    constructor() {
        super()
        this.state = {
            verifyLine: [0, 1, 2, 3],
            loading: false,
            yztime: 59,
            retry: false,
            retryText: "重新发送验证码",
            inputClick: 0,
            siv: null
        }
    }

    componentDidMount() {
        this.count()
    }
    count = () => {
        
        this.state.siv = setInterval(() => {
            let tem = this.state.yztime
            this.setState({
                yztime: --tem,
            }, () => {
                if (this.state.yztime <= 0) {
                    clearInterval(this.state.siv)
                    this.setState({
                        retry: !this.state.retry,
                    })
                }
            })

        }
            , 1000)
    }

    componentWillUnmount(){
        clearInterval(this.state.siv)
    }
    render() {
        return (
            <VerifyContanier>
                <Back></Back>
                <Welcome text="输入验证码"></Welcome>
                <Tip text="验证码已发送至您的手机"></Tip>
                <div className="verifyLineContainer">
                    {
                        this.state.verifyLine.map((value, index) => (
                            <div className="verifyLineDiv" key={value}>
                                <input onClick={() => {
                                    this.verifyLineInput()
                                }}
                                    maxLength="1"
                                    key={value + 1}
                                    type="text"
                                    className="verifyLineInput"
                                />
                                <img key={value + 2} className="verifyLine" src={verifyLine} alt="" />
                            </div>
                        ))
                    }
                </div>
                <p className="secondRetry">
                    {this.state.yztime}秒后重试
                    </p>
                {/* retry表示返回发送验证码界面 */}
                <LargeButton  Submit={this.verifySubmit}text="登录/注册" retry={this.state.retry} retryText={this.state.retryText} rout={"wu"} ></LargeButton>
            </VerifyContanier>
        )
    }
    verifyLineInput=() => {
        this.setState({
            verifyLineInput:++this.state.verifyLineInput
        })
    }
}

export default withRouter(Verify) 