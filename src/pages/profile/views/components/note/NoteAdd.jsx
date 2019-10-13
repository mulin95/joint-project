import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import {NoteAddCom} from './StyleNote'

class NoteAdd extends Component {
    render() {
        return (
            <NoteAddCom>
                <TitleBack back title="添加" rightEvent={this.handlerFinish}>
                    <span>完成</span>
                </TitleBack>
                <form action="">
                    <p>
                        标题：<input className="inp" type="text" placeholder=""/>
                    </p>
                    <p>
                        内容：<textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                </form>
            </NoteAddCom>
        )
    }
    handlerFinish(props){
        // console.log(props)
        props.history.goBack();
    }
}

export default NoteAdd;