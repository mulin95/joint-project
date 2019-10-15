import React, { Component } from 'react';

import {UserListCom} from './StyledUser'
import TitleBack from 'components/titleBack/TitleBack'
import user_5   from 'assets/profileImages/user-5.png'
import arrow from 'assets/profileImages/arrow-note.png'

class UserList extends Component {
    render() {
        return (
            <UserListCom>
                <TitleBack title="账户中心"/>
                <ul>
                    <li>
                        <span>头像</span>
                        <div>
                            <img src={user_5} alt=""/>
                        </div>
                        <img className="arrow" src={arrow} alt=""/>
                    </li>
                    <li>
                        <span>昵称</span>
                        <div>
                            <span>学员21</span>
                        </div>
                        <img className="arrow" src={arrow} alt=""/>
                    </li>
                    <li>
                        <span>账户名称</span>
                        <div className="user">
                            <span>12312312356@sina.com</span>
                        </div>
                    </li>
                    <li>
                        <span>绑定手机</span>
                        <div>
                            <span>137****2698</span>
                        </div>
                        <img className="arrow" src={arrow} alt=""/>
                    </li>
                    <li>
                        <span>邮箱登录找回</span>
                        <div></div>
                        <img className="arrow" src={arrow} alt=""/>
                    </li>
                </ul>
            </UserListCom>
        );
    }
}

export default UserList;