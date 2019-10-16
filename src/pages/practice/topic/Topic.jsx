import React, { Component } from 'react'

import {TopicContainer} from '../Styled'

import Collection from 'components/practice/Collection'
import TitleBack from 'components/titleBack/TitleBack'

export default class Topic extends Component {
  render() {
    return (
      <TopicContainer>
        <TitleBack title='今日习题'>
          <Collection open />
        </TitleBack>
        <div></div>
      </TopicContainer>
    )
  }
}
