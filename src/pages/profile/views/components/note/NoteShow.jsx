import React, { Component } from 'react';

import TitleCom from '../titleCom/TitleCom'
import {NoteShowCom} from'./StyleNote';
import ButtonCom from '../titleCom/ButtonCom'
import http from 'utils/http'

class NoteShow extends Component {
    state = {
        id:'',
        title:'',
        content:''
    }
    render() {
        return (
            <>
                <NoteShowCom>
                    <TitleCom 
                        title='笔记详情'
                    />
                    <div className="content">
                        <p>
                            <span>{this.state.title}</span>
                        </p>
                        <p>
                            <span>{this.state.content}</span>
                        </p>
                        <p>
                            <span>{new Date().toLocaleDateString()}</span>
                        </p>
                    </div>
                </NoteShowCom>
                <ButtonCom title="删除笔记" bottom="1" clickBtn={()=>this.handleClick()}/>
            </>
        )
    }
    async handleClick(){
        let url = '/huileme/a/u/NoteController/myNoteAddOrUpdate1?usernoteid='+this.props.location.state.note.id;
        await http.delete(url,{
        　　headers: {
        　　　　'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token':localStorage.getItem('token')
        　　},
        })
        this.props.history.goBack();
    }
    componentDidMount(){
        let note = this.props.location.state.note
        this.setState({
            id:note.id,
            title:note.title,
            content:note.content
        })
    }
}

export default NoteShow;