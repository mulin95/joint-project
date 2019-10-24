import React, { Component } from 'react';

import TitleCom from '../titleCom/TitleCom'
import {NoteShowCom} from'./StyleNote';

class NoteShow extends Component {
    state = {
        id:'',
        title:'',
        content:'',
        date:''
    }
    render() {
        return (
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
                        <span>{this.state.date}</span>
                    </p>
                </div>
            </NoteShowCom>
        )
    }
    componentDidMount(){
        let note = this.props.location.state.note
        this.setState({
            id:note.id,
            title:note.title,
            content:note.content,
            date:note.date
        })
    }
}

export default NoteShow;