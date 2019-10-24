import React, { Component } from 'react';

import {UserListCom} from './StyledUser'
import backImg from 'images/back.png'
import user_5   from 'assets/profileImages/user-5.png'
import arrow from 'assets/profileImages/arrow-note.png'
import ButtonCom from '../titleCom/ButtonCom'
import axios from 'axios'

class UserList extends Component {
    state={
        userId:'',
        poPup:false,
        userName:'',
        account:'',
        userTel:'',
    }
    render() {
        return (
            <UserListCom>
                <div className={this.state.poPup ? 'useCom':''}> 
                    <div className={this.state.poPup ? 'use title':'title'}>
                        <div>
                            <div className="iconLeft" onClick={this.goBack}>
                                <img src={backImg} alt=""/>
                            </div>
                            账户中心
                        </div>
                    </div>
                    <ul>
                        <li onClick={()=>this.changePic()}>
                            <span>头像</span>
                            <div>
                                <img id="userPic" src={user_5} alt=""/>
                            </div>
                            <img className="arrow" src={arrow} alt=""/>
                        </li>
                        <li onClick={()=>this.changeName()}>
                            <span>昵称</span>
                            <div>
                                <span>{this.state.userName}</span>
                            </div>
                            <img className="arrow" src={arrow} alt=""/>
                        </li>
                        <li>
                            <span>账户名称</span>
                            <div className="user">
                                <span>{this.state.account}</span>
                            </div>
                        </li>
                        <li onClick={()=>this.changeTel()}>
                            <span>绑定手机</span>
                            <div>
                                <span>{this.state.userTel}</span>
                            </div>
                            <img className="arrow" src={arrow} alt=""/>
                        </li>
                        <li>
                            <span>邮箱登录找回</span>
                            <div></div>
                            <img className="arrow" src={arrow} alt=""/>
                        </li>
                    </ul>
                    <ButtonCom title="退出登录" bottom=".6" clickBtn={()=>this.clickSignOut()} />
                    {
                        this.state.poPup?
                        (
                            <div className="bottom">
                                <p>
                                    <input 
                                        id="fileID"
                                        type="file" 
                                        onChange={()=>this.photo("fileID","userPic")}
                                        accept="image/*" 
                                        capture="camera" />
                                        拍照
                                </p>
                                <p>
                                    <input 
                                        id="filePIC"
                                        type="file" 
                                        onChange={()=>this.photo("filePIC","userPic")}
                                        accept="image/*" 
                                        multiple />
                                        从相册选择
                                    </p>
                                <p onClick={()=>this.changePic()}>取消</p>
                            </div>
                        ):(
                            <div className="none"></div>
                        )
                    }
                    
                </div>
            </UserListCom>
        );
    }
    async componentDidMount(){
        let result = await axios.get('/user')
        this.setState({
            userId:result.data[0].id,
            userName:result.data[0].username,
            account:result.data[0].account,
            userTel:result.data[0].userTel,
        })
    }
    photo(pic,img) {
        let picId = document.getElementById(pic)
        let picUrl = document.getElementById(img)
        let file = picId.files[0]
        let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function (e) {
                picUrl.setAttribute("src", e.target.result)
                console.log(e.target.result)
             };
    }
    changePic(){
        this.setState({poPup:!this.state.poPup})
    }
    clickSignOut(){
        console.log('退出登录')
    }
    changeName(){
        let {userId,userName} = this.state
        let user = {
            userId,
            userName
        }
        this.props.history.push('/profile/user/add',{user:user})
    }
    changeTel(){
        this.props.history.push({
            pathname:'/profile/user/tel/'+this.state.userTel
        })
    }
    goBack=()=>{
        this.props.history.goBack();
    }
}

export default UserList;