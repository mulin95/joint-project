import React from 'react'

import {Item} from '../StyledPractice'
import bjb from 'prcimg/bjb.png'

export default function (props) {
  console.log(props)
  return (
    <Item>
      <img src={props.img} alt=""/>
      <div>
        <p>数学综合精品习题库</p>
        <ul>
          <li>共385个知识点</li>
          <li>35万人在练<img src={bjb} alt=""/></li>
        </ul>
      </div>
    </Item>
  )
}
