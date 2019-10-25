import React, { PureComponent } from 'react'


import ASUI from './ASUI'
import connect from './connect'
import GoodImg from 'images/good.jpg'

@connect
class ASContainer extends PureComponent {
    constructor (props) {
        super(props) 
    }

     static getDerivedStateFromProps(props, state) {
        let pathName = props.location.pathname
        switch (pathName) {
            case '/aftersale/sold':
                return {
                    dNum : 0
                };
            case '/aftersale/service' :
                return {
                    dNum : 1
                };
            default: 
                return null;
        }
    }

    state = {
        dNum : 7
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
            <ASUI
            path={path}
            handleClick={this.handleClick}
            list={obj}
            dNum={this.state.dNum}

            >
            
            </ASUI>
        )
    }

    handleClick (tar) {
        let path = this.match.path
        let tNum = 0
        switch (tar) {
            case 'sold':
                tNum = 0
                break;
            case 'service' :
                tNum = 1
                break;
            default: 
                tNum = 0;
                break;
        }
        let dir = this.dNum < tNum ? 'left' : 'right'
        this.history.push(path + '/' + tar + "?dir=" + dir)
    }
}

export default ASContainer