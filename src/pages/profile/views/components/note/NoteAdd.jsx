import React, { Component } from 'react';

import TitleCom from '../titleCom/TitleCom'
import {NoteAddCom} from './StyleNote'
import http from 'utils/http'
import qs from 'qs'
import { 
    Toast, 
    WhiteSpace, 
    WingBlank, 
    Button ,
    TextareaItem,
    List
} from 'antd-mobile'

class NoteAdd extends Component {
    state={
        title:'',
        content:''
    }
    render() {
        return (
            <NoteAddCom>
                <TitleCom title="添加">
                    <WingBlank className="and-com">
                        <WhiteSpace />
                            <Button onClick={this.successToast}>完成</Button>
                    </WingBlank>
                </TitleCom>
                <List renderHeader={() => '今天又是元气满满的一天'}>
                    <TextareaItem
                        title="标题"
                        placeholder="请输入笔记标题"
                        ref={el => this.autoFocusInst = el}
                        clear
                        count={10}
                        value={this.state.title}
                        onChange={(e)=>this.changeTitle(e)}
                    />
                </List>
                <List>
                    <TextareaItem
                        title="内容"
                        placeholder="请输入笔记内容"
                        rows={6}
                        count={120}
                        value={this.state.content}
                        onChange={(e)=>this.changeContent(e)}
                    />
                    </List>
            </NoteAddCom>
        )
    }
    changeTitle(title){
        this.setState({
            title
        })
    }
    changeContent(content){
        this.setState({
            content
        })
    }
    componentDidMount(){
        this.autoFocusInst.focus();
    }
    successToast=async()=> {
        let {title,content} = this.state
        if(title.length>=2 && content.length>=3){
            let url = '/huileme/a/u/NoteController/add'
            let data = {
                notetitle:title,
                notecontent:content
            }
            await http.post(url,{
            　　headers: {
            　　　　'Content-Type': 'application/x-www-form-urlencoded',
                    'x-access-token': localStorage.getItem('token')
            　　},
                body:qs.stringify(data)
            })
            Toast.success('添加笔记成功', 0.8,()=>{
                this.props.history.goBack();
            });
        }else{
            Toast.offline('请在多写点笔记吧', 0.8);
        }
    }
}

export default NoteAdd;