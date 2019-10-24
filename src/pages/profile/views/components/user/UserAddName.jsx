import React, { Component } from 'react';

import TitleCom from '../titleCom/TitleCom'
import {UserNameCom} from './StyledUser'
import axios from 'axios'
import warning from 'assets/profileImages/warning.png'
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
                            ref="name"
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
        let id = this.props.location.state.user.userId;
        let username = this.refs.name.value;
        if(username.length < 2 || username.length > 8){
            Toast.offline('您输入的昵称字数不对', 0.8);
        }else{
            await axios.patch('/user/'+id,{
                username
            })
            Toast.success('更换昵称成功', 0.8,()=>{
                this.props.history.goBack();
            });
        }
    }
}

export default UserAddName;