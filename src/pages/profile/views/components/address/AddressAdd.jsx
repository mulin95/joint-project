import React, { Component } from 'react';

import {AddressAddCom} from './styledAddress';
import TitleBack from 'components/titleBack/TitleBack';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class AddressAdd extends Component {
    state = {
        userName:'',
        userTel:''
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
                            onChange={this.changeName
                        } />
                    </label>
                    <label htmlFor="tel">
                        <p>手机号码:</p>
                        <input 
                            id="tel" 
                            type="text" 
                            name="userTel" 
                            value={this.state.userTel}
                            onChange={this.changeTel
                        }/>
                    </label>
                    <label htmlFor="address_1">
                        <p>所在地区:</p>
                        <input id="address_1" type="text"/>
                    </label>
                    <label htmlFor="address_1">
                        <p>详细地址:</p>
                        <input id="address_2" type="text" name="userAddress"/>
                    </label>
                </form>
            </AddressAddCom>
        );
    }
    componentDidMount(){
        const query = this.props.location.query;
        this.setState({
            userName:query.name,
            userTel:query.tel
        })
    }
    successToast=()=> {
        Toast.success('保存收货地址成功', 0.6,()=>{
            this.props.history.goBack();
        });
    }
    changeTel=(e)=>{
        console.log(e.target.value)
        this.setState({
            userTel:e.target.value
        })
    }
    changeName=(e)=>{
        console.log(e.target.value)
        this.setState({
            userName:e.target.value
        })
    }
}

export default AddressAdd;