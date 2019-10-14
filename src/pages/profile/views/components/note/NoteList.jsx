import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'

import noteAdd from 'assets/profileImages/noteAdd.png'
import {
    NoteCom,
    NoteHeader
    }  from './StyleNote'
import arrowNote from 'assets/profileImages/arrow-note.png';

const noteList = [
    {
        id:'01',
        title:'小程序萌宠乐圈',
        date:'10.11',
        icon:arrowNote,
        text:'尽管春风拂过脸庞 以认真的态度，滋润万物 激动的情绪，花香鸟语 看到你伫立广袤的原野 我将用何等的词汇描述你 - 春的赞歌，只在 盛世引吭，这繁华美景 也被氤氲的光彩夺目 任和风拂过，万物萌发 怀疑这春雨已变节 并将春的秘密，走漏消息 - 在春天，向前 就是积极的亢奋 拔节是不可抵挡的趋势 像芬芳，飘过这个季节 将春的肌肤修饰 稚嫩的生命在破土 每一缕春风，都在数落 梦里的慈祥，母亲和春天 永远不可分割 -'
    },
    {
        id:'02',
        title:'公众号悦读i',
        date:'10.02',
        icon:arrowNote,
        text:'的慈祥，母亲和春天 永远不可分割 - 在春天，我时常于清明聆听 天堂的物语，以及被春意 晕染的悲伤，只是遇见你 和蔼的目光，在和煦中书写 纠结的诗行。 - 我的情思 像一泓'
    },
    {
        id:'03',
        title:'小程序',
        date:'10.12',
        icon:arrowNote,
        text:'儿 整个春天，都那么澄澈，妩媚 听春光吟哦明快的情致 每一句，都那么富有韵律 - 你看，每一朵花蕊 都与笑脸相呼应，激动地 都是春意律动的的慈祥，母亲和春天 永远不可分割 - 在春天，我时常于清明聆听 天堂的物语，以及被春意 晕染的悲伤，只是遇见你 和蔼的目光，在和煦中书写 纠结的诗行。 - 我的情思 像一泓'
    }
]

class NoteList extends Component {
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
                        noteList.map((item)=>{
                            return (
                                <li key={item.id} onClick={()=>this.clickNote(item.id,item.title,item.text)}>
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
    clickNoteAdd(props){
        props.history.push({
            pathname:'/profile/note/noteAdd'
        })
    }
    clickNote(id,title,text){
        this.props.history.push({
            pathname:'/profile/note/noteShow',
            query:{
                id,
                title,
                text
            }
        })
    }
}

export default NoteList;