import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
import {UserAboutCom,TitleCom} from './StyledUser'
import arrow_left from 'assets/profileImages/arrow-left.png'

class UserAbout extends Component {
    render() {
        return (
            <UserAboutCom>
                <TitleCom>
                    <div>
                        <img src={arrow_left} alt="" onClick={()=>this.props.history.goBack()}/>
                        关于我们
                    </div>
                </TitleCom>
                <div className="content">
                    <div>
                        <p>
                            会了么是一家适合初中和高中练习习题
                            的练习平台，帮助学生自主学习，不仅
                            在理解知识的同时让学习更加轻松和愉
                            快。
                        </p>
                        <p>
                            会了么的练习覆盖初中、高中的数学、
                            化学、物理，依照人学习的知识框架设
                            计的APP，引导学生自主跟随交互练习
                            进行思考，换起学生的学习兴趣。达成
                            对知识的理解和掌握，使其对学习的兴
                            趣越来越高。
                        </p>
                        <p>
                            会了么提供的练习的平台，使其学习的
                            成本大大的降低了，会了么成立之初，
                            以提高学生的学习为基础，并会将这一
                            基础延续下去。
                        </p>
                        <p>
                            不会就上会了么，会了么和你一起同舟共济!
                        </p>
                    </div>
                </div>
            </UserAboutCom>
        );
    }
}

export default withRouter(UserAbout);