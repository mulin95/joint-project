import React, { Component } from 'react';

import note     from 'assets/profileImages/note.png';
import order    from 'assets/profileImages/order.png';
import address  from 'assets/profileImages/address.png';
import member   from 'assets/profileImages/member.png';
import service  from 'assets/profileImages/service.png';
import arrow    from 'assets/profileImages/arrow.png';
import user_5   from 'assets/profileImages/user-5.png'

import http from 'utils/http'

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
        text : '我的售后',
        iconRight : arrow,
        route:'service'
    },
]

class ProfileContainer extends Component {
    state={
        userId:'',
        userName:''
    }
    render() {
        const {history} = this.props;
        return (
            <Profile>
            <header>
                <span onClick={()=>history.push("/profile/setUp")}></span>
                <dl>
                    <dt>
                        <img src={user_5} alt=""/>
                    </dt>
                    <dd onClick={()=>this.changeName()}>{this.state.userName}</dd>
                </dl>
            </header>    
            <Content>
               {
                MsgList.map((item,index)=>{
                    return (
                        <li 
                        key={item.id + index}
                        onClick={()=>this.handlerClick(item.route)}
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
    async componentDidMount(){
        let userToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4ZGNsYXNzIiwiaWQiOiI1OGVjNTEzNTAxMzI0NWI1OWM5ZDEyNWY0OGM0ZWM1MCIsInBob25lIjoiMTUyMzU2ODIyODgiLCJpYXQiOjE1NzE5OTAzMTgsImV4cCI6MTU3MjU5NTExOH0.CihVzf6JJlOnN2VlQT8yszvI97lR1yv-IjwDIX2-mYo";
        localStorage.setItem('token',userToken)
        // let url = '/huileme/a/u/wode/UserController/FindByid';
        let url = '/huileme/a/u/userManagementController/accountu';
        let result = await http.get(url,{
            headers: {
        　　　　'x-access-token': localStorage.getItem('token',userToken)
        　　},
        })
        this.setState({
            userName:result.data.userNickname
        })
    }
    handlerClick(route){
        if(route === 'order'){
            this.props.history.push('/'+route);
        }else if(route === 'service'){
            this.props.history.push('/aftersale');
        }else{
            this.props.history.push('/profile/'+route);
        }
    }
    changeName(){
        let user = {
            userName:this.state.userName
        }
        this.props.history.push('/profile/user/add',{user:user})
    }
}

export default ProfileContainer;