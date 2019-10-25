import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import noteAdd from 'assets/profileImages/noteAdd.png'
import arrowNote from 'assets/profileImages/arrow-note.png'
import http from 'utils/http'
import MsgCom from '../titleCom/MsgCom'
import {
    NoteCom,
    NoteHeader
}  from './StyleNote'

class NoteList extends Component {
    state = {
        noteList : []
    }
    render() {
        return (
            <NoteCom>
                <NoteHeader>
                    <TitleBack title="我的笔记" back rightEvent={this.clickNoteAdd}>
                        <img className="add" src={noteAdd} alt="" />
                    </TitleBack>
                </NoteHeader>
                <ul>
                    {
                        this.state.noteList.length === 0 ?
                            <MsgCom title="点击右上角添加你喜欢的笔记吧😊"/>
                        :
                            this.state.noteList.map((item)=>{

                                return (
                                    <li 
                                        key={item.usernoteid} 
                                        onTouchStart={this.touchStart}
                                        onClick={()=>this.clickNote(item.usernoteid,item.notetitle,item.notecontent)
                                    }>
                                        <p>{item.notetitle}</p>
                                        <span>{new Date().toLocaleDateString()}</span>
                                        <img src={arrowNote} alt=""/>
                                    </li>
                                )
                            })
                    }
                </ul>
            </NoteCom>
        )
    }
    async componentDidMount(){
        let url = '/huileme/a/u/NoteController/myNote';
        let result = await http.get(url,{
            headers:{
                'x-access-token': localStorage.getItem('token')
            }
        })
        console.log(result)
        if(result.message === "数据没有查询到"){

        }else{
            this.setState({
                noteList : result.data
            })
        }
    }
    touchStart(){
    }
    clickNoteAdd(props){
        props.history.push('/profile/note/noteAdd')
    }
    clickNote(id,title,content){
        let note = {
            id,
            title,
            content
        }
        this.props.history.push('/profile/note/noteShow',{note})
    }
}

export default NoteList;