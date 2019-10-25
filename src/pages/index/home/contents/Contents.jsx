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

export default class Contents extends PureComponent{
  render(){
    let {history}=this.props
    console.log(this.props)
      return(
        <ContentsContainer>
          <SwiperContainer>
            <Swiper></Swiper>
            <ul>
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
            <Detail></Detail>
          </Main>
        </ContentsContainer>
      )
  }
}