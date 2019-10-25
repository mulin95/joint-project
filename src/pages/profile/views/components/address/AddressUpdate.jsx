import React, { Component } from 'react';

import { AddressAddCom } from './styledAddress';
import TitleBack from 'components/titleBack/TitleBack';
import http from 'utils/http'
import qs from 'qs'
import { 
    Toast, 
    WhiteSpace, 
    WingBlank, 
    Button 
} from 'antd-mobile';

class AddressUpdate extends Component {
    state = {
        userId:'',
        userName:'',
        userTel:'',
        userAddress:''
    }
    render() {
        return (
            <AddressAddCom>
                <TitleBack className="title" title="编辑地址" >
                    <WingBlank className="and-com">
                        <WhiteSpace />
                            <Button onClick={this.successToast}>保存</Button>
                    </WingBlank>
                </TitleBack>
                <form>
                    <label htmlFor="name">
                        收货人:
                        <input 
                            id="name" 
                            type="text" 
                            name="userName" 
                            value={this.state.userName} 
                            onChange={this.changeName} 
                        />
                    </label>
                    <label htmlFor="tel">
                        <p>手机号码:</p>
                        <input 
                            id="tel" 
                            type="text" 
                            name="userTel" 
                            value={this.state.userTel}
                            onChange={this.changeTel}
                        />
                    </label>
                    {/* <label htmlFor="address_1">
                        <p>所在地区:</p>
                        <input id="address_1" type="text"/>
                    </label> */}
                    <label htmlFor="address_2">
                        <p>详细地址:</p>
                        <input 
                            id="address_2" 
                            type="text" 
                            name="address_2"
                            value={this.state.userAddress}
                            onChange={this.changeAddress}
                        />
                    </label>
                </form>
            </AddressAddCom>
        );
    }
    componentDidMount(){
        let address= this.props.location.state.address
        // console.log(address)
        this.setState({
            userId:address.id,
            userName:address.name,
            userTel:address.tel,
            userAddress:address.add
        })
    }
    successToast=async()=> {
        let url = '/huileme/a/u/ShippingaddressController/updetshippingAddress'
        let data = {
            shippingid:this.state.userId,
            shippingpeople:this.state.userName,
            shippingphone:this.state.userTel,
            address:this.state.userAddress
        }
        
        // console.log(this.state)
        // console.log(data)
        await http.post(url,{
        　　headers: {
        　　　　'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token':localStorage.getItem('token')
        　　},
            body:qs.stringify(data)
        })

        Toast.success('修改收货地址成功', 0.6,()=>{
            this.props.history.goBack();
        });
    }
    changeName=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }
    changeTel=(e)=>{
        this.setState({
            userTel:e.target.value
        })
    }
    changeAddress=(e)=>{
        this.setState({
            userAddress:e.target.value
        })
    }
}

export default AddressUpdate;