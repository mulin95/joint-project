import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import {NoteAddCom} from './StyleNote'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile'

class NoteAdd extends Component {
    render() {
        return (
            <NoteAddCom>
                <TitleBack back title="添加">
                    <WingBlank className="and-com">
                        <WhiteSpace />
                            <Button onClick={this.successToast}>完成</Button>
                    </WingBlank>
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
    successToast=()=> {
        Toast.success('添加笔记成功', 0.6,()=>{
            this.props.history.goBack();
        });
    }
}

export default NoteAdd;