import React, { PureComponent } from 'react'

import {withRouter} from 'react-router-dom'

//样式
import {Detaill} from './StyledC'

//图片
import book from 'images/book.png'

class Detail extends PureComponent{
    render(){
        let {history}=this.props
        return(
            <div>
                <div onClick={()=>history.push("/information")}>
                <Detaill>
                    <img src={book} alt=""/>
                    <div>
                        <span className="ti">习题习题习题习题习题习题习题习题习题</span>
                        <div>
                            <div className="msg">
                                <div className='grade'>高一数学</div>
                                <div className="advantage">习题优点简述习题优点简述</div>
                            </div>
                            <div className="price">
                                <div className="price1">
                                    <span>￥</span>100
                                </div>
                                <div className="vip">
                                    <span className="vipprice">￥92</span>
                                    <span className="vipp">VIP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </Detaill>
                 </div>
                 <Detaill>
                    <img src={book} alt=""/>
                    <div>
                        <span className="ti">习题习题习题习题习题习题习题习题习题</span>
                        <div>
                            <div className="msg">
                                <div className='grade'>高一数学</div>
                                <div className="advantage">习题优点简述习题优点简述</div>
                            </div>
                            <div className="price">
                                <div className="price1">
                                    <span>￥</span>100
                                </div>
                                <div className="vip">
                                    <span className="vipprice">￥92</span>
                                    <span className="vipp">VIP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </Detaill>
                 <Detaill>
                    <img src={book} alt=""/>
                    <div>
                        <span className="ti">习题习题习题习题习题习题习题习题习题</span>
                        <div>
                            <div className="msg">
                                <div className='grade'>高一数学</div>
                                <div className="advantage">习题优点简述习题优点简述</div>
                            </div>
                            <div className="price">
                                <div className="price1">
                                    <span>￥</span>100
                                </div>
                                <div className="vip">
                                    <span className="vipprice">￥92</span>
                                    <span className="vipp">VIP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </Detaill>
                 <Detaill>
                    <img src={book} alt=""/>
                    <div>
                        <span className="ti">习题习题习题习题习题习题习题习题习题</span>
                        <div>
                            <div className="msg">
                                <div className='grade'>高一数学</div>
                                <div className="advantage">习题优点简述习题优点简述</div>
                            </div>
                            <div className="price">
                                <div className="price1">
                                    <span>￥</span>100
                                </div>
                                <div className="vip">
                                    <span className="vipprice">￥92</span>
                                    <span className="vipp">VIP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </Detaill>               
            </div>
            
        )      
    }
}

export default withRouter(Detail)