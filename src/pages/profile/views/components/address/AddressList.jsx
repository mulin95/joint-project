import React, { Component } from 'react';

import {AddressListCom} from './styledAddress'
import TitleBack from 'components/titleBack/TitleBack'
import ButtonCom from '../titleCom/ButtonCom'
import http from 'utils/http'
import MsgCom from '../titleCom/MsgCom'

// import user from 'assets/profileImages/user.png';
// import user_2 from 'assets/profileImages/user-2.jpg';
// import user_3 from 'assets/profileImages/user-3.jpg';
import line from 'assets/profileImages/line.png';

// const addressUser = [
//     {
//         userID:'01',
//         userImg:user,
//         userName:'Dream.',
//         userTel:15874523015,
//         userAddress:'北京市昌平区老牛湾北京职业技术学院北京市昌平区老平区老'
//     },
//     {
//         userID:'02',
//         userImg:user_2,
//         userName:'Dream.',
//         userTel:15874523015,
//         userAddress:'北京市昌平区老牛湾北京职业技术学院北京市昌平区老平区老'
//     },
//     {
//         userID:'03',
//         userImg:user_3,
//         userName:'Dream.',
//         userTel:15874523015,
//         userAddress:'北京市昌平区老牛湾北京职业技术学院北京市昌平区老平区老'
//     }
// ]

class AddressList extends Component {
    state = {
        addressList:[]
    }
    render() {
        return (
            <AddressListCom>
                <TitleBack title="收货地址"/>
                <ul>
                    {
                        this.state.addressList.length === 0?
                            <MsgCom title="快来添加一个收获地址吧😊"/>
                        :
                            this.state.addressList.map((item)=>{
                                return (
                                    <li key={item.shippingid}>
                                        {/* <img className="user" src={item.userImg} alt=""/> */}
                                        <div className="info">
                                            <span className="userName">{item.shippingpeople}</span>
                                            <span className="tel">{item.shippingphone}</span>
                                            <p>{item.address}</p>
                                        </div>
                                        <img className="line" src={line} alt=""/>
                                        <div 
                                            className="add" 
                                            onClick={()=>this.addressUpdate(item.shippingid,item.shippingpeople,item.shippingphone,item.address)}
                                        >编辑</div>
                                    </li>
                                )
                            })
                    }
                </ul>
                <ButtonCom title="添加新的收获地址" bottom="1.6" clickBtn={()=>this.addressAdd()}/>
            </AddressListCom>
        );
    }
    async componentDidMount(){
        let url = '/huileme/a/u/ShippingaddressController/shippingaddress';
        let result = await http.get(url,{
            headers:{
                'x-access-token':localStorage.getItem('token')
            }
        })
        console.log(result)
        if(result.message === "数据没有查询到"){

        }else{
            this.setState({
                addressList:result.data
            })
        }
    }
    addressAdd(id,name,tel,add){
        let address = {
            id : id?id:'',
            name : name?name:'',
            tel : tel?tel:'',
            add : add?add:''
        }
        this.props.history.push('/profile/address/addressAdd',{address})
    }
    addressUpdate(id,name,tel,add){
        let address = {
            id ,
            name ,
            tel ,
            add
        }
        this.props.history.push('/profile/address/addressUpdate',{address})
    }
}

export default AddressList;