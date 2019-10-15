import React, { Component } from 'react'
import TitleBack from 'components/titleBack/TitleBack'
import Collection from 'components/practice/Collection'

import {NavPage} from './Styled'

import mathbg from 'prcimg/mathbg.png'
import physicsbg from 'prcimg/physicsbg.png'
import chemistrybg from 'prcimg/chemistrybg.png'
import mathBtn from 'prcimg/mathBtn.png'
import physicsBtn from 'prcimg/physicsBtn.png'
import chemistryBtn from 'prcimg/chemistryBtn.png'

export default class Practice extends Component {
  constructor(props){
    super(props)
    switch (this.props.match.params.type) {
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
  render() {
    return (
      <NavPage btn={this.data.btn}>
        <TitleBack> 
          <Collection/>
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
              <button>继续练习</button>
            </div>
          </div>
        </div>
      </NavPage>
      
    )
  }
}
