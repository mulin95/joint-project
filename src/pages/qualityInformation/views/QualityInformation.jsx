import React, { Component } from 'react' 

//组件
import TitleBack from 'components/titleBack/TitleBack'
import Swiper from '../../index/home/contents/Swiper'
import Detail from '../components/Detail'

//样式
import {
    QIContainer,
    ContentsContainer,
    SwiperContainer,
    Main,
    Div
} from './StyledQI'

//图片
import searchBtn from 'images/searchBtn.png'
import cz from 'images/cz.png'
import cj from 'images/cj.png'
import gz from 'images/gz.png'
import gj from 'images/gj.png'
import topBar from 'images/topBar.png'

import http from 'utils/http'

export default class QualityInformation extends Component{
    state={
        topiclist:[],
        swiperlist:[]
    }

    async componentDidMount(){
        let res= await http.get('/huileme/a/m/JingPinTopController/jingpintop')
        this.setState({
            topiclist:res.data.topiclist,
            swiperlist:res.data.rotationchartlist
        })
    }

    render(){
        let {history}=this.props
        return(
            <Div>
                <QIContainer>
                    <TitleBack title='精品资料' rightEvent={(props) => {
                        props.history.push('/search')
                    }}> 
                        <div className="btn">
                            <img src={searchBtn} alt=""/>
                        </div>
                    </TitleBack>                  
                </QIContainer>
                <ContentsContainer>
                    <SwiperContainer>
                        <Swiper list={this.state.swiperlist}></Swiper>
                        <ul className='navBar'>
                            <li onClick={()=>history.push("/middleExercises")}>
                                <img src={cz} alt=""/>
                                <span>初中真题</span>
                            </li>
                            <li onClick={()=>history.push("/middleExercises")}>
                                <img src={cj} alt=""/>
                                <span>初中教程</span>
                            </li>
                            <li onClick={()=>history.push("/heightExercises")}>
                                <img src={gz} alt=""/>
                                <span>高中真题</span>
                            </li>
                            <li onClick={()=>history.push("/heightExercises")}>
                                <img src={gj} alt=""/>
                                <span>高中教程</span>
                            </li>
                        </ul>
                    </SwiperContainer>
                    <Main>
                        <div className="topBar">
                            <img src={topBar} alt="" />
                        </div>
                        <Detail list={this.state.topiclist}></Detail>         
                    </Main>
                </ContentsContainer>
            </Div>
        )
    }
}