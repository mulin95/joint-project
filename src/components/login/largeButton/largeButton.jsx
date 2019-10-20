import React from 'react'
import LargeButtonContainer from './largeButtonStyled'
import { withRouter } from 'react-router-dom'

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

    getVerify = () => {
        if (this.props.retry === false) {
            if (this.props.rout === "wu") {
                console.log("正式登陆")
                return
            } else {
                this.props.history.push(this.props.skipToGetVerify.rout)
            }
        } else if (this.props.retry === true) {
            this.props.history.push('/login')
        }

    }
// https://www.jianshu.com/p/0fa8c7456c15




}
export default withRouter(largeButton)