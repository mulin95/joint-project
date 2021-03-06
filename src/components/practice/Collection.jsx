import React, { Component } from 'react'

import sc from 'prcimg/sc.png'
import scA from 'prcimg/scA.png'
import {CollectionContainer} from './Styled'

export default class Collection extends Component {
  state={
    isCollect:false
  }
  render() {
    let {onCollect,open}=this.props
    return (
      <CollectionContainer onClick={() => {
        onCollect&&onCollect();
        open&&this.setState((state) => {
          return{
            isCollect:!state.isCollect
          }
        })
      }}>
        <img src={this.state.isCollect?scA:sc} alt=""/>
        <p>收藏</p>
      </CollectionContainer>
    )
  }
}



