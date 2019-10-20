import React, { PureComponent} from 'react'

import animate from 'components/hoc/animate'

import {withRouter} from 'react-router-dom'

import ListUI from 'components/list/ListUI'

import connect from './connect'

@connect
class All extends PureComponent {
    render() {
        return (
            <ListUI 
            list={this.props.list}
            dir={this.props.dir}
            >
            </ListUI>
        )
    }
}

export default withRouter(animate(All))