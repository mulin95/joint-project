import React from 'react'
import {withRouter} from 'react-router-dom'

import {Title} from '../StyledPractice'
import Collection from 'components/practice/Collection'

import arrow from 'prcimg/arrowA.png'

export default withRouter(function(props) {
  return (
    <Title>
      <div className='left'>
        <p>练习中心</p>
        <p onClick={() => {props.history.push('/grade')}}>
          <span>初一</span>
          <img src={arrow} alt=""/>
        </p>
      </div>
      <Collection onCollect={() => {props.history.push('/practice/collect')}}></Collection>
    </Title>
  )
})