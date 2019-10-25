import React, { PureComponent} from 'react'

import animate from 'components/hoc/animate'

import {withRouter} from 'react-router-dom'

import ListUI from 'components/list/ListUI'

import connect from './connect'

@connect
class Receiving extends PureComponent {
    render() {
        return (
            <ListUI list={this.props.listt}>

            </ListUI>
        )
    }
}

export default withRouter(animate(Receiving))