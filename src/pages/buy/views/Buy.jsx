import React, { PureComponent } from 'react'

//组件
import TitleBack from 'components/titleBack/TitleBack'

//图片
import arrow from '../../../assets/images/arrow.png'
import book from 'images/book.png'

import http from 'utils/http'

//样式
import {
    BuyBar,
    Div,
} from './StyledBuy'

export default class Buy extends PureComponent{
    // state={
    //     data:{}
    // }

    // async componentDidMount(){
    //     let res= await http.get('/huileme/a/m/TopicDetailController/topdetail?topicId='+this.props.match.params.id)
    //     console.log(res)
    //     this.setState({
    //         data:res.data
    //     })
    // }

    render(){
        return(
        <Div>
            <BuyBar>
                <TitleBack title='确认订单' rightEvent={(props) => {
                    props.history.push('/search')
                }}> 
                </TitleBack>                  
            </BuyBar>
            <div className="main">
                <div className="information">
                    <div className="vip">VIP</div>
                    <div className="detail">
                        <span className="name">张三</span>
                        <span className="number">130****6589</span>
                        <div className="address">沙河沙河沙河沙河沙河沙河沙河沙河沙河沙河沙河沙河沙河</div>
                        {/* <img src={arrow} alt=""/> */}
                    </div>
                    <img src={arrow} alt=""/>
                </div>
                <div className="freight">
                    <div className="top">
                        <img src={book} alt=""/>
                        <div className="msg">
                            <div className="name">商品商品商品商品商品商品商品商品商品商品</div>
                            <div className="fit">适用年级</div>
                        </div>
                        <div className="price">
                            <div className="price1">￥92</div>
                            <div className="num">×1</div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="left">
                            <div>购买数量</div>
                            <div>运费险</div>
                            <div>配送方式 <span>普通快递</span></div>
                            <i>订单备注</i>
                            <input type="text" placeholder="输入备注" />
                        </div>
                        <div className="right">
                            <div>
                                <button>-</button><i>1</i><button>+</button>
                            </div>
                            <div className="song">平台送</div>
                            <div className="song">免邮</div>
                        </div>
                    </div>
                    <div className="bottom">
                         <span className="num">共<i>1</i>件</span>
                         <span className="money">小计：<i>￥92</i></span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button>支付￥92</button>
            </div>
        
        </Div>
        )
    }
}