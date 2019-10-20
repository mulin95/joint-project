import React, { Component } from 'react'

import TitleBack from 'components/titleBack/TitleBack'

import {CollectContainer} from '../Styled'

import emptyImg from 'images/empty.png'


export default class Collect extends Component {
  state={
    items:[]
  }
  render() {
    return (
      <CollectContainer>
        <TitleBack title='收藏' />
        <div className='container'>
          {
            this.state.items.length===0
            ?(
              <div className='empty'>
                <div>
                  <img src={emptyImg} alt=""/>
                  <p>抱歉，您暂时还未收藏任何习题</p>
                </div>
              </div>
            )
            :(
              <ul>
                {
                  this.state.items.map((item) => (
                    <li key={item}></li>
                  ))
                }
              </ul>
              
            )
          }
        </div>
      </CollectContainer>
    )
  }
}
