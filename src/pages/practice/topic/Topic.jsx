import React, { Component } from 'react'

import {TopicContainer} from '../Styled'

import Collection from 'components/practice/Collection'
import TitleBack from 'components/titleBack/TitleBack'

import xiti1 from 'prcimg/demo/xiti1.png'
import xiti2 from 'prcimg/demo/xiti2.png'

export default class Topic extends Component {
  render() {
    return (
      <TopicContainer>
        <TitleBack title='今日习题'>
          <Collection open />
        </TitleBack>
        <div className='container'>
          <img src={xiti2} alt=""/>
          <img src={xiti1} alt=""/>
          <img src={xiti1} alt=""/>
        </div>
      </TopicContainer>
    )
  }
}
