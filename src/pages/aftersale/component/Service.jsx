import React, { PureComponent} from 'react'

import animate from 'components/hoc/animate'

import {withRouter} from 'react-router-dom'

import {Ip} from './StyledService'

class Unpaid extends PureComponent {
    render() {
        // console.log(this.props)
        return (
           <Ip>
            <div>11</div>
            <h6>
            <input></input>
           <button>发送</button>
            </h6>
           </Ip>
        )
    }
}

export default withRouter(animate(Unpaid))