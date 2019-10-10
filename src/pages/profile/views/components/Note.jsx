import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'

import noteAdd from 'images/noteAdd.png'
import {NoteCom}  from './StyleComponent'

class Note extends Component {
    render() {
        return (
            <NoteCom>
                <TitleBack title="我的笔记" back rightEvent={(props)=>{console.log(props)}}>
                    <img src={noteAdd} alt="" />
                </TitleBack>
            </NoteCom>
        );
    }
}

export default Note;