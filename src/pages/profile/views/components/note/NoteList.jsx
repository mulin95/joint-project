import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import noteAdd from 'assets/profileImages/noteAdd.png'
import arrowNote from 'assets/profileImages/arrow-note.png';
import axios from 'axios'
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
                        this.state.noteList.map((item)=>{
                            return (
                                <li 
                                    key={item.id} 
                                    onTouchStart={this.touchStart}
                                    onClick={()=>this.clickNote(item.id,item.title,item.content,item.date)
                                }>
                                    <p>{item.title}</p>
                                    <span>{item.date}</span>
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
        let result = await axios.get('/note')
        this.setState({
            noteList : result.data
        })
    }
    touchStart(){
        // setTimeout(()=>{
        //     alert(123)
        // },1000)
    }
    clickNoteAdd(props){
        props.history.push('/profile/note/noteAdd')
    }
    clickNote(id,title,content,date){
        console.log('click')
        let note = {
            id,
            title,
            content,
            date
        }
        this.props.history.push('/profile/note/noteShow',{note})
    }
}

export default NoteList;