import React, { Component } from 'react';

import {SetUpListCom} from './StyledSetUp'
import TitleBack from 'components/titleBack/TitleBack'
import account   from 'assets/profileImages/account.png'
import about   from 'assets/profileImages/about.png'
import arrow from 'assets/profileImages/arrow-note.png'

const setList = [
    {
        id:'01',
        icon:account,
        text:'账号中心',
        route:'user/list'
    },
    {
        id:'02',
        icon:about,
        text:'关于我们',
        route:'user/about'
    },
]

class SetUpList extends Component {
    render() {
        return (
            <SetUpListCom>
                <TitleBack className="header" title="设置"/>
                <ul>
                    {
                        setList.map((item)=>{
                            return (
                                <li key={item.id} onClick={()=>this.handleClick(item.route)}>
                                    <img src={item.icon} alt=""/>
                                    <p>{item.text}</p>
                                    <img className="arrow" src={arrow} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </SetUpListCom>
        )
    }
    handleClick(route){
        this.props.history.push({
            pathname:'/profile/'+route
        })
    }
}

export default SetUpList;

