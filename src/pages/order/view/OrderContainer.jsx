import React, { PureComponent } from 'react'


import OrderUI from './OrderUI'
import connect from './connect'
import GoodImg from 'images/good.jpg'

@connect
class OrderContainer extends PureComponent {
    constructor (props) {
        super(props) 
    }

    state = {
        dir: '',
        dNum : 7
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
            dNum={this.state.dNum}
            dir={this.state.dir}
            >
            
            </OrderUI>
        )
    }

    handleClick = (tar) => {
        let path = this.props.match.path
        let tNum = 0
        switch (tar) {
            case 'all':
                tNum = 0
                break;
            case 'unpaid' :
                tNum = 1
                break;
            case 'shipped' :
                tNum = 2
                break;
            case 'receiving' :
                tNum = 3
                break;
            default: 
                tNum = 0;
                break;
        }
        let dir = this.state.dNum < tNum ? 'left' : 'right'
        this.props.getDir(dir)
        this.setState({
            dir
        })
        this.props.history.push(path + '/' + tar)
    }
}

export default OrderContainer