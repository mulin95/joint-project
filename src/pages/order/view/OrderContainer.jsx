import React, { PureComponent } from 'react'

import OrderUI from './OrderUI'
import connect from './connect'

@connect
class OrderContainer extends PureComponent {
    constructor (props) {
        super(props) 
    }

    static getDerivedStateFromProps(props, state) {
        let pathName = props.location.pathname

        switch (pathName) {
            case '/all':
                return {
                    dNum : 0
                };
            case '/unpaid' :
                return {
                    dNum : 1
                };
            case '/shipped' :
                return {
                    dNum : 2
                };
            case '/receiving' :
                return {
                    dNum : 3
                };
        }
    }

    state = {
        dNum : 0
    }

    render() {
    let path = this.props.match.path
    console.log(this.state.dNum)
        return (
            <OrderUI
            path={path}
            handleClick={this.handleClick}
            >
            
            </OrderUI>
        )
    }

    handleClick (tar) {
        let path = this.match.path
        this.history.push(path + '/' + tar, {tar})
    }
}

export default OrderContainer