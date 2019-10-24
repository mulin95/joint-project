import React, { Component } from 'react';

import TitleCom from '../titleCom/TitleCom'
import {NoteAddCom} from './StyleNote'
import axios from 'axios'
import warning from 'assets/profileImages/warning.png'
import { 
    Toast, 
    WhiteSpace, 
    WingBlank, 
    Button 
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
                <div className="content">
                    <div>
                        <span>标题：</span>
                        <div>
                            <input 
                                type="text" 
                                placeholder="请输入笔记标题" 
                                value={this.state.title} 
                                onChange={(e)=>this.changeTitle(e)}
                            />
                        </div>
                    </div>
                    <div>
                        <span>内容：</span>
                        <div>
                            <textarea 
                                placeholder="想发表点什么内容呢" 
                                value={this.state.content}
                                onChange={(e)=>this.changeContent(e)}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <p>
                    <img src={warning} alt=""/>
                    <span>笔记标题需输入2-8个字</span>
                    <br/>
                    <span>笔记内容至少输入6个字哦~ </span>
                </p>
            </NoteAddCom>
        )
    }
    changeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    changeContent(e){
        this.setState({
            content:e.target.value
        })
    }
    componentDidMount(){
        let id = '02'
        localStorage.getItem('id')  || localStorage.setItem('id',id)
    }
    successToast=()=> {
        let id = localStorage.getItem('id')
        let {title,content} = this.state
        if(title.length>=2 && title.length<=8 && content.length>=5){
            id++
            localStorage.setItem('id','0'+id)
            axios.post('/note',{
                id:'0'+id,
                title,
                date:`${new Date().getMonth()+1}.${new Date().getDate()}`,
                content
            })
            Toast.success('添加笔记成功', 0.8,()=>{
                this.props.history.goBack();
            });
        }else{
            Toast.offline('您输入的笔记字数不对', 0.8);
        }
    }
}

export default NoteAdd;