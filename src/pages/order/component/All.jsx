import React, { PureComponent} from 'react'

import animate from 'components/hoc/animate'

import {withRouter} from 'react-router-dom'

import ListUI from 'components/list/ListUI'

class All extends PureComponent {
    render() {
        // console.log(this.props)
        return (
            <ListUI list={this.props.list}>

            </ListUI>
        )
    }
}

export default withRouter(animate(All))