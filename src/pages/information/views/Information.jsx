import React, { PureComponent } from 'react'

//组件
import TitleBack from 'components/titleBack/TitleBack'

//样式
import{
    Div,
    MEContainer
} from './StyleInformation'

import http from 'utils/http'

//图片
import bg1 from '../../../assets/images/bg1.png'
import sdetail from '../../../assets/images/sdetail.png'
import spt1 from '../../../assets/images/spt1.png'
import spt2 from '../../../assets/images/spt2.png'
import spt3 from '../../../assets/images/spt3.png'
import spt4 from '../../../assets/images/spt4.png'
import earphone from '../../../assets/images/earphone.png'

export default class Information extends PureComponent{
    state={
        data:{}
    }

    async componentDidMount(){
        let res= await http.get('/huileme/a/m/TopicDetailController/topdetail?topicId='+this.props.match.params.id)
        console.log(res)
        this.setState({
            data:res.data
        })
    }

    render(){
        let {history}=this.props
        return(
            <Div>
                
                <div className="main">
                    <div>
                    <MEContainer>
                    <TitleBack rightEvent={(props) => {
                            props.history.push('/search')
                        }}> 
                        </TitleBack>    
                    </MEContainer>
                        <img src={this.state.data.topicImg} alt="" className="bg1"/>
                        <div className="fit">
                            <div className="price">
                                <div className="price1">￥{this.state.data.price}</div>
                                <div className="vip">
                                    <span className="vipprice">￥{this.state.data.vipPrice}</span>
                                    <span className="vipp">VIP</span>
                                </div>
                            </div>
                            <div className="title">{this.state.data.topicName}</div>
                            <div className="fitgrade">
                                <span className="grade1">适用年级</span>
                                <span className="grade2">{this.state.data.applyStage}</span>
                            </div>
                            <div className="fitgrade">
                                <span className="grade1">适用科目</span>
                                <span className="grade2">{this.state.data.topicSubject}</span>
                            </div>
                        </div>
                        <div className="center">
                            <div><img src={sdetail} alt="" className="sdetail" /></div>
                            <div><img src={this.state.data.commoditypicture} alt="" className="spt1" /> </div>
                        </div>
                        <img src={spt2} alt="" className="spt2" />
                        <img src={spt3} alt="" className="spt3" />
                        <img src={spt4} alt="" className="spt4" />
                    </div>
                    
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