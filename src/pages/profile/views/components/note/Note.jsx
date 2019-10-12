import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'

import noteAdd from 'images/noteAdd.png'
import {
    NoteCom,
    NoteHeader
    }  from './StyleNote'
import arrowNote from 'images/arrow-note.png';

const noteList = [
    {
        id:'01',
        title:'小程序萌宠乐圈',
        date:'10.11',
        icon:arrowNote
    },
    {
        id:'02',
        title:'公众号悦读i',
        date:'10.02',
        icon:arrowNote
    },
    {
        id:'03',
        title:'小程序',
        date:'10.12',
        icon:arrowNote
    }
]

class Note extends Component {
    render() {
        return (
            <NoteCom>
                <NoteHeader>
                    <TitleBack title="我的笔记" back rightEvent={(props)=>{}}>
                        <img className="add" src={noteAdd} alt="" />
                    </TitleBack>
                </NoteHeader>
                <ul>
                    {
                        noteList.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <p>{item.title}</p>
                                    <span>{item.date}</span>
                                    <img src={item.icon} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </NoteCom>
        )
    }
}

export default Note;