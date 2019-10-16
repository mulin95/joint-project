import React, { PureComponent } from 'react'

//样式
import{
    Div
} from './StyleInformation'

//图片
import bg1 from '../../../assets/images/bg1.png'

export default class Information extends PureComponent{
    render(){
        return(
            <Div>
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
                <img src="" alt=""/>
            </Div>
        )
    }
}