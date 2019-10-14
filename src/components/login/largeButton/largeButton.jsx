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
            <LargeButtonContainer onClick={this.getVerify}>
                <p>{this.props.text}</p>
            </LargeButtonContainer>
        )
    }

    getVerify = () => {
 
            this.props.history.push(this.props.skipToGetVerify.rout)
      
    }

    // login = () => {
    //     console.log(1)
    //     this.setState({
    //         retry: !this.state.retry
    //     })
    // }



}
export default withRouter(largeButton)