import React, { Component } from 'react'

import TitleBack from 'components/titleBack/TitleBack'
import Collection from 'components/practice/Collection'

import {SubjectContainer} from '../Styled'

import mathbg from 'prcimg/mathbg.png'
import physicsbg from 'prcimg/physicsbg.png'
import chemistrybg from 'prcimg/chemistrybg.png'
import mathBtn from 'prcimg/mathBtn.png'
import physicsBtn from 'prcimg/physicsBtn.png'
import chemistryBtn from 'prcimg/chemistryBtn.png'

export default class Subject extends Component {
  constructor(props){
    super(props)
    switch (this.props.match.params.subject) {
      case 'math':
        this.data={
          bg:mathbg,
          btn:mathBtn,
          type:'数学'
        }
        break;
      case 'physics':
        this.data={
          bg:physicsbg,
          btn:physicsBtn,
          type:'物理'
        }
        break;
      case 'chemistry':
        this.data={
          bg:chemistrybg,
          btn:chemistryBtn,
          type:'化学'
        }
        break;
      default:
    }
  }
  handleClick(){
    this.props.history.push('/practice/topic/1')
  }
  handleCollect(props){
    props.history.push('/practice/collect')
  }
  render() {
    return (
      <SubjectContainer btn={this.data.btn}>
        <TitleBack rightEvent={this.handleCollect}>
          <Collection />
        </TitleBack>
        <div>
          <h2>{this.data.type}综合练习</h2>
          <div>
            <img src={this.data.bg} alt=""/>
            <div>
              <div>
                <p>共385个知识点</p>
                <p>3万人在练</p>
              </div>
              <button onClick={this.handleClick.bind(this)}>继续练习</button>
            </div>
          </div>
        </div>
      </SubjectContainer>
      
    )
  }
}
