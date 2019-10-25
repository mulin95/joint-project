import React, { PureComponent} from 'react'

import animate from 'components/hoc/animate'

import {withRouter} from 'react-router-dom'

import ListUI from 'components/list/ListUI'

import connect from './connect'

import http from 'utils/http'

@connect
class All extends PureComponent {
    render() {
        return (
            <ListUI 
            list={this.props.listt}
            dir={this.props.dir}
            >
            </ListUI>
        )
    }
    async componentDidMount() {
        this.props.loadData()
    }
}

export default withRouter(animate(All))