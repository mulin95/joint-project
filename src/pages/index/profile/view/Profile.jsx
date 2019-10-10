import React, { Component } from 'react';

import note     from 'images/note.png';
import order    from 'images/order.png';
import address  from 'images/address.png';
import member   from 'images/member.png';
import service  from 'images/service.png';
import arrow    from 'images/arrow.png';
import user     from 'images/user.png';

import {
    Profile,
    Content,
    Text
}from './StyledProfile'

const MsgList = [
    {
        id:0,
        iconLeft : note,
        text : '我的笔记',
        iconRight : arrow,
        route:'note'
    },
    {
        id:1,
        iconLeft : order,
        text : '我的订单',
        iconRight : arrow,
        route:'order'
    },
    {
        id:2,
        iconLeft : address,
        text : '收货地址',
        iconRight : arrow,
        route:'address'
    },
    {
        id:3,
        iconLeft : member,
        text : '会员中心',
        iconRight : arrow,
        route:'member'
    },
    {
        id:4,
        iconLeft : service,
        text : '售后客服',
        iconRight : arrow,
        route:'service'
    },
]

class ProfileContainer extends Component {
    render() {
        const {history,match} = this.props;
        return (
            <Profile>
            <header>
                <span onClick={()=>history.push("/profile/setUp")}></span>
                <dl>
                    <dt>
                        <img src={user} alt=""/>
                    </dt>
                    <dd>yn2019-10-7</dd>
                </dl>
            </header>
            <Content>
               {
                MsgList.map((item,index)=>{
                    return (
                        <li 
                        key={item.id + index}
                        onClick={()=>history.push("/profile/"+item.route)}
                        >
                            <img src={item.iconLeft} alt=""/>
                            <Text>
                                <span>{item.text}</span>
                                <img className="iconRight" src={item.iconRight} alt=""/>
                            </Text>
                        </li>
                    )
                })
               }
            </Content>
        </Profile>
        )
    }
}

export default ProfileContainer;