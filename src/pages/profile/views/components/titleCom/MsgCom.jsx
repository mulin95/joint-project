import React, { Component } from 'react';
import {MsgContai} from './StyledMsg'
import msg from 'assets/profileImages/msg.png'

class MsgCom extends Component {
    render() {
        return (
            <MsgContai>
                <img src={msg} alt=""/>
                <span>{this.props.title || ''}</span>
            </MsgContai>
        );
    }
}

export default MsgCom;