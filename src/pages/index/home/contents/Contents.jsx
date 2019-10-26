import React, { PureComponent } from 'react'

//组件
import Swiper from './Swiper'
import Detail from './Detail'

//样式
import {
  ContentsContainer,
  SwiperContainer,
  Main,
} from './StyledContents'

//图片
import z from 'images/Z.png'
import t from 'images/T.png'
import n from 'images/N.png'
import y from 'images/Y.png'
import j from 'images/J.png'
import topBar from 'images/topBar.png'
import http from 'utils/http'

const subMap={
  math:1,
  physics:2,
  chemistry:3
}

export default class Contents extends PureComponent{
  state={
    topicList:[],
    swiperList:[]
  }
  async loadData(){
    let {subject}=this.props.match.params
    let res= await http.get('/huileme/a/m/TopicController/homePage?subjectId='+subMap[subject]+'&&gradeid='+(localStorage.getItem('grade')||1))
    this.setState({
      topicList:res.data.topicList,
      swiperList:res.data.rotationchartList
    })
  }
  componentDidMount(){
    this.loadData()
  }
  componentDidUpdate(prvProps){
    if(prvProps.match.params.subject!==this.props.match.params.subject){
      this.loadData()
    }
  }
  render(){
    let {history}=this.props
      return(
        <ContentsContainer>
          <SwiperContainer>
            <Swiper list={this.state.swiperList}></Swiper>
            <ul className='navBar'>
              <li onClick={()=>history.push("/index/practice")}>
                <img src={z} alt=""/>
                <span>综合练习</span>
              </li>
              <li onClick={()=>history.push("/index/practice")}>
                <img src={t} alt=""/>
                <span>突破练习</span>
              </li>
              <li onClick={()=>history.push("/index/practice")}>
                <img src={n} alt=""/>
                <span>难点练习</span>
              </li>
              <li onClick={()=>history.push("/index/practice")}>
                <img src={y} alt=""/>
                <span>易错练习</span>
              </li>
              <li onClick={()=>history.push("/qualityInformation")}>
                <img src={j} alt=""/>
                <span>精品资料</span>
              </li>
            </ul>
          </SwiperContainer>
          <Main>
            <div className="topBar">
              <img src={topBar} alt="" />
            </div>           
            <Detail list={this.state.topicList}></Detail>
          </Main>
        </ContentsContainer>
      )
  }
}