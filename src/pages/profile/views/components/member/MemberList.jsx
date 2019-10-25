import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import member_3 from 'assets/profileImages/member-3.png'
import member_5 from 'assets/profileImages/member-5.png'
import member_6 from 'assets/profileImages/member-6.png'
import member_7 from 'assets/profileImages/member-7.png'
import member_8 from 'assets/profileImages/member-8.png'
import arrow_left from 'assets/profileImages/arrow-left.png'
import ButtonCom from '../titleCom/ButtonCom'

import {
    MemberListCom
} from './StyledMember'

class MemberList extends Component {
    render() {
        return (
            <MemberListCom>
                <header>
                    <img src={arrow_left} alt="" onClick={()=>this.props.history.goBack()}/>
                    <p>会员中心</p>
                    <span>VIP专属特权 八折优惠哦</span>
                </header>
                <div className="privilege">
                    <p>VIP特权上新</p>
                    <div className="privilege-img">
                        <div>
                            <p>超级全能生数理化28套</p>
                            <img src={member_3} alt=""/>
                        </div>
                        <div>
                            <p>数理化压轴题秘诀直击高考</p>
                            <img src={member_5} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="exercises">
                    <p>热门VIP习题</p>
                    <span>今日最热</span>
                    <div>
                        <img src={member_6} alt=""/>
                        <img src={member_7} alt=""/>
                        <img src={member_8} alt=""/>
                    </div>
                </div>
                {/* <ButtonCom bottom="0" clickBtn={()=>this.handleClick()}/> */}
                <div className="btn" onClick={()=>this.handleClick()}>
                    <div>
                        <span>立即开通</span>
                    </div>
                </div>
            </MemberListCom>
        );
    }
    handleClick(){
        this.props.history.push({
            pathname:'/profile/member/oppen'
        })
    }
}

export default withRouter(MemberList);