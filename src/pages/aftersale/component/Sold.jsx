import React, { PureComponent } from 'react'

import animate from 'components/hoc/animate'

import { withRouter } from 'react-router-dom'

import ListUI from 'components/list/ListUI'

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;

class Shipped extends PureComponent {
    render() {
        // console.log(this.props)
        return (
                <ListUI
                    list={this.props.list}
                    onTouchStart={this.handleStart}
                    onTouchMove={this.handleMove}
                    onTouchEnd={this.handleEnd}
                >

                </ListUI>


        )
    }

    state = {
        Ltime: null,
        num: 0,
        st: false
    }

    handleEnd = () => {
        clearInterval(this.state.Ltime)
        console.log(this.state.num)
        if (this.state.num > 7) {
            alert('提示', '确认申请退货？', [
                { text: '否'},
                { text: '是', onPress: () => console.log('ok') },
            ])
        }
        this.setState({
            num: 0
        })
    }

    handleMove = () => {

    }

    handleStart = () => {
        this.setState({
            Ltime: setInterval(() => {
                this.setState({
                    num: this.state.num + 1
                })
            }, 100)
        })
    }

}

export default withRouter(animate(Shipped))