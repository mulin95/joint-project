import React, { PureComponent } from 'react'

import {withRouter} from 'react-router-dom'

//样式
import {Detaill} from './StyledC'

//图片
// import book from 'images/book.png'

import http from 'utils/http'

class Detail extends PureComponent{
    state={
        list:[]
    }

    handleClick(id){
        // console.log(id)
        this.props.history.push("/information/"+id)
    }
    async componentDidMount(){
        let res= await http.get('/huileme/a/m/JingPinTopController/jingpintop')
        console.log(res)
        this.setState({
            list:res.data.topiclist
        })
    }

    render(){
        return(
            <div>
                <div>
                    {
                        this.state.list.map((item)=>(
                            <Detaill
                                key={item.topicId}
                                onClick={this.handleClick.bind(this,item.topicId)}
                            >
                                <img src={item.topicImg} alt=""/>
                                <div>
                                    <span className="ti">{item.topicName}</span>
                                    <div>
                                        <div className="msg">
                                            <div className='grade'>{item.applyStage+item.topicSubject}</div>
                                            <div className="advantage">{item.sketch}</div>
                                        </div>
                                        <div className="price">
                                            <div className="price1">
                                                <span>￥</span>{item.price}
                                            </div>
                                            <div className="vip">
                                                <span className="vipprice">￥{item.vipPrice}</span>
                                                <span className="vipp">VIP</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Detaill>
                        ))
                    }
                 </div>
                 {/* <Detaill>
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
                 </Detaill>                */}
            </div>           
        )      
    }
}

export default withRouter(Detail)