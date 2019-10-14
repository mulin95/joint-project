import React from 'react'

import {Title} from '../StyledPractice'
import Collection from 'components/practice/Collection'

import arrow from 'prcimg/arrow.png'

export default function() {
  return (
    <Title>
      <div className='left'>
        <p>练习中心</p>
        <p>
          <span>初一</span>
          <img src={arrow} alt=""/>
        </p>
      </div>
      <Collection></Collection>
    </Title>
  )
}