import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginUI from './loginUI'
import Verify from './components/verify/verifyContainer'
import Email from './components/email/email'
import Forget from './components/forget/forget'
import PasswLogin from './components/passwLogin/passwLogin.jsx'
import { Redirect, withRouter } from 'react-router-dom'

class Login extends PureComponent {
    constructor() {
        super()
        this.state = {
            text: "获取验证码",
            rout: "/login/getVerify",
        }
    }

    render() {
        return (
            <>
                <Route exact path={"/login/skipPassword"} render={() => (
                    <PasswLogin></PasswLogin>
                )}></Route>

                <Route exact path={"/login/email/forget"} render={() => (
                    <Forget></Forget>
                )}></Route>

                <Route exact path={"/login/email"} render={() => (
                    <Email></Email>
                )}></Route>
                <Route exact path={this.state.rout} render={() => (
                    <Verify></Verify>
                )}>
                </Route>
                <Route exact path={"/login"} render={() => (
                    <LoginUI
                        skipToBack={this.skipToBack}
                        text={this.state.text}
                        skipToGetVerify={this.skipToGetVerify}
                        rout={this.state.rout}
                        passwLogin={this.skipPassword}
                    >
                    </LoginUI>
                )}>
                </Route>
            </>
        )
    }
    skipPassword = () => {
        this.props.history.push('/login/skipPassword')
    }
    skipToBack = () => {
        this.props.history.goBack();
    }

}

export default withRouter(Login)