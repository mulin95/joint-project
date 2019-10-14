import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginUI from './loginUI'
import Verify from './components/verify/verifyContainer'
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
                <Switch>
                    <Route path={this.state.rout} render={() => (
                        <Verify></Verify>
                    )}>
                    </Route>
                    <Route path={"/login"} render={() => (
                        <LoginUI
                            skipToBack={this.skipToBack}
                            text={this.state.text}
                            skipToGetVerify={this.skipToGetVerify}
                            rout={this.state.rout}
                        >
                        </LoginUI>
                    )}>
                    </Route>
                </Switch>
            </>
        )
    }
    skipToBack = () => {
        this.props.history.goBack();
    }

}

export default Login