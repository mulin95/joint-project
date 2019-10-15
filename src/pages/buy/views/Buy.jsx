import React, { PureComponent } from 'react'

//组件
import TitleBack from 'components/titleBack/TitleBack'

//图片
import arrow from '../../../assets/images/arrow.png'

//样式
import {
    BuyBar,
    Div,
} from './StyledBuy'


export default class Buy extends PureComponent{
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

                </div>
            </div>
            <div className="footer">
                <button>支付￥92</button>
            </div>
        
        </Div>
        )
    }
}