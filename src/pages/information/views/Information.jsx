import React, { PureComponent } from 'react'

//样式
import{
    Div
} from './StyleInformation'

//图片
import bg1 from '../../../assets/images/bg1.png'
import sdetail from '../../../assets/images/sdetail.png'
import spt1 from '../../../assets/images/spt1.png'
import spt2 from '../../../assets/images/spt2.png'
import spt3 from '../../../assets/images/spt3.png'
import spt4 from '../../../assets/images/spt4.png'
import earphone from '../../../assets/images/earphone.png'

export default class Information extends PureComponent{
    render(){
        let {history}=this.props
        return(
            <Div>
                <div className="main">
                    <img src={bg1} alt="" className="bg1"/>
                    <div className="fit">
                        <div className="price">
                            <div className="price1">￥100</div>
                            <div className="vip">
                                <span className="vipprice">￥92</span>
                                <span className="vipp">VIP</span>
                            </div>
                        </div>
                        <div className="title">商品名称商品名称商品名称商品名称商品名称商品名称商品名称</div>
                        <div className="fitgrade">
                            <span className="grade1">适用年级</span>
                            <span className="grade2">初中</span>
                        </div>
                        <div className="fitgrade">
                            <span className="grade1">适用阶段</span>
                            <span className="grade2">初一</span>
                        </div>
                    </div>
                    <div className="center">
                        <img src={sdetail} alt="" className="sdetail" />
                        <img src={spt1} alt="" className="spt1" />
                    </div>
                    <img src={spt2} alt="" className="spt2" />
                    <img src={spt3} alt="" className="spt3" />
                    <img src={spt4} alt="" className="spt4" />
                </div>
                <div className="footer">
                    <div className="service">
                        <img src={earphone} alt="" />
                        客服
                    </div>
                    <div className="buy" onClick={()=>history.push("/buy")}>立即购买</div>
                </div>
            </Div>
        )
    }
}