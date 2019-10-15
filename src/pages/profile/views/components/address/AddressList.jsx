import React, { Component } from 'react';

import {AddressListCom} from './styledAddress'
import TitleBack from 'components/titleBack/TitleBack'

import user from 'assets/profileImages/user.png';
import user_2 from 'assets/profileImages/user-2.jpg';
import user_3 from 'assets/profileImages/user-3.jpg';
import line from 'assets/profileImages/line.png';

const addressUser = [
    {
        userID:'01',
        userImg:user,
        userName:'Dream.',
        userTel:15874523015,
        userAddress:'北京市昌平区老牛湾北京职业技术学院北京市昌平区老平区老'
    },
    {
        userID:'02',
        userImg:user_2,
        userName:'Dream.',
        userTel:15874523015,
        userAddress:'北京市昌平区老牛湾北京职业技术学院北京市昌平区老平区老'
    },
    {
        userID:'03',
        userImg:user_3,
        userName:'Dream.',
        userTel:15874523015,
        userAddress:'北京市昌平区老牛湾北京职业技术学院北京市昌平区老平区老'
    },
]

class AddressList extends Component {
    render() {
        return (
            <AddressListCom>
                <TitleBack title="收货地址"/>
                <ul>
                    {
                        addressUser.map((item)=>{
                            return (
                                <li key={item.userID}>
                                    <img className="user" src={item.userImg} alt=""/>
                                    <div className="info">
                                        <span className="userName">{item.userName}</span>
                                        <span className="tel">{item.userTel}</span>
                                        <p>{item.userAddress}</p>
                                    </div>
                                    <img className="line" src={line} alt=""/>
                                    <div className="add" onClick={()=>this.addressAdd(item.userID,item.userName,item.userTel)}>编辑</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </AddressListCom>
        );
    }
    addressAdd(id,name,tel){
        this.props.history.push({
            pathname:'/profile/address/addressAdd',
            query:{
                id,
                name,
                tel
            }
        })
    }
}

export default AddressList;