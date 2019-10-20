import React, { PureComponent} from 'react'

import animate from 'components/hoc/animate'

import {withRouter} from 'react-router-dom'

class Unpaid extends PureComponent {
    render() {
        // console.log(this.props)
        return (
           <div>客服</div>
        )
    }
}

export default withRouter(animate(Unpaid))