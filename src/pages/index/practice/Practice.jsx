import React, { Component } from 'react'

import { PracticeContainer,Title } from './StyledPractice'

export default class Practice extends Component {
  render() {
    return (
      <PracticeContainer>
        <Title>
          <div className='left'>
            <p>练习中心</p>
            <span>初一</span>
            <img src="" alt=""/>
          </div>
          <div className='right'>
            <img src="" alt=""/>
            收藏
          </div>
        </Title>

        <div>

        </div>
      </PracticeContainer>
    )
  }
}
