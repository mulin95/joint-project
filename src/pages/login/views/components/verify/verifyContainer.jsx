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
            loading: true,
            yztime: 59,
            retry: false
        }
    }
    // count = () => {
    //     let { yztime } = this.state;
    //     let siv = setInterval(() => {
    //         this.setState({ yztime: (yztime--) }, () => {
    //             if (yztime <= 0) {
    //                 clearInterval(siv);　　//倒计时( setInterval() 函数会每秒执行一次函数)，用 clearInterval() 来停止执行:
    //                 this.setState({ loading: true, yztime: 59 })
    //             }
    //         });
    //     }, 1000);
    // }


    count = () => {
        console.log(1)
        let siv = setInterval(() => {
            this.setState()
        },1000)
    }
    render() {

        return (
            <>

                <VerifyContanier>
                    <Back></Back>
                    <Welcome text="输入验证码"></Welcome>
                    <Tip text="验证码已发送至您的手机"></Tip>
                    <div className="verifyLineContainer">
                        {
                            this.state.verifyLine.map((value, index) => (
                                <img key={value} className="verifyLine" src={verifyLine} alt="" />
                            ))
                        }
                    </div>
                    <p>
                        {this.count()}秒后重试
                        </p>
                    <LargeButton text="登录/注册" ></LargeButton>
                </VerifyContanier>

            </>
        )
    }



}

export default withRouter(Verify) 