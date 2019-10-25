import React, { Component } from 'react';

import TitleCom from '../titleCom/TitleCom'
import {UserNameCom} from './StyledUser'
import warning from 'assets/profileImages/warning.png'
import http from 'utils/http'
import qs from 'qs'
import { 
    Toast, 
    WhiteSpace, 
    WingBlank, 
    Button 
} from 'antd-mobile';

class UserAddName extends Component {
    state={
        value:''
    }
    render() {
        return (
            <UserNameCom>
                <TitleCom title="昵称" />
                <div className="user">
                    <div>
                        <input type="text" 
                            placeholder={this.props.location.state.user.userName} 
                            onChange={(e)=>this.handleChange(e)} 
                            value={this.state.value}
                        />
                        <WingBlank className="and-com">
                            <WhiteSpace />
                                <Button onClick={this.successToast}>更换昵称</Button>
                        </WingBlank>
                    </div>
                </div>
                <p>
                    <img src={warning} alt=""/>
                    <span>配昵称需输入2-8个字</span>
                </p>
            </UserNameCom>
        );
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    successToast = async()=> {
        let username = this.state.value;
        if(username.length < 2 || username.length > 8){
            Toast.offline('您输入的昵称字数不对', 0.8);
        }else{
            let url = '/huileme/a/u/userManagementController/userNickName'

            // let formData = new FormData();
            // formData.append("userNickName",this.state.value)
            // formData.append("userToken",userToken)
            // await fetch(url,{
            //         method:'POST',
            //         body:formData
            //     })

            let data = {
                userNickName:this.state.value
            }
            await http.post(url,{
            　　headers: {
            　　　　'Content-Type': 'application/x-www-form-urlencoded',
                    'x-access-token': localStorage.getItem('token')
            　　},
                body:qs.stringify(data)
            })
            Toast.success('更换昵称成功', 0.8,()=>{
                this.props.history.goBack();
            });
        }
    }
}

export default UserAddName;