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
                <div className="content">
                    <p>
                        <span>标题：</span>
                        <div>
                            <input type="text" placeholder=""/>
                        </div>
                    </p>
                    <p>
                        <span>内容：</span>
                        <div>
                            <textarea></textarea>
                        </div>
                    </p>
                </div>
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