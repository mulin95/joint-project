import React, { Component } from 'react'

import { PracticeContainer } from './StyledPractice'
import Title from './component/Title'
import TextBar from './component/TextBar'
import Item from './component/Item'

import banner from 'prcimg/banner.png'
import mathImg from 'prcimg/math.png'
import physicsImg from 'prcimg/physics.png'
import chemistryImg from 'prcimg/chemistry.png'


export default class Practice extends Component {
  state={
    list:[
      {
        type:'math',
        img:mathImg
      },
      {
        type:'physics',
        img:physicsImg
      },
      {
        type:'chemistry',
        img:chemistryImg
      },
    ]
  }
  handleClick(type){
    this.props.history.push('/practice/'+type)
  }

  render() {
    return (
      <PracticeContainer>
        <Title></Title>
        <div className='container'>
          <div className='banner'><img src={banner} alt=""/></div>
          <TextBar></TextBar>
          <ul>
            {
              this.state.list.map((item,index) => {
                return <Item 
                  {...item} 
                  key={index}
                  onHandleClick={() => {
                    this.handleClick(item.type)
                  }}
                ></Item>
              })
            }
          </ul>
        </div>
      </PracticeContainer>
    )
  }
}
