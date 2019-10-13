import React, { PureComponent } from 'react'


import OrderUI from './OrderUI'
import connect from './connect'
import GoodImg from 'images/good.jpg'

@connect
class OrderContainer extends PureComponent {
    constructor (props) {
        super(props) 
        console.log(props)
    }

     static getDerivedStateFromProps(props, state) {
        let pathName = props.location.pathname

        switch (pathName) {
            case '/order/all':
                return {
                    dNum : 0
                };
            case '/order/unpaid' :
                return {
                    dNum : 1
                };
            case '/order/shipped' :
                return {
                    dNum : 2
                };
            case '/order/receiving' :
                return {
                    dNum : 3
                };
            default: 
                return null;
        }
    }

    state = {
        dNum : 0
    }

    render() {
    let path = this.props.match.path
    let obj = {
        topicImg: GoodImg,
        topicName: '学而思秘籍',
        applyGrade: '初二',
        topicSketch: '物理习题集',
        price: 100,
        VIPPrice: 92,
        topicNumber: 7
    }
        return (
            <OrderUI
            path={path}
            handleClick={this.handleClick}
            list={obj}
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