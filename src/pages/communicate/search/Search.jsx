import React, { Component } from 'react'

import {SearchContainer} from '../Styled'
import Input from '../componet/Input'
import TitleBack from 'components/titleBack/TitleBack'
import InputBar from '../componet/InputBar'
import Cell from 'components/communicate/Cell'


import emptyImg from 'images/empty.png'

export default class Search extends Component {
  state={
    items:[]
  }
  render() {
    return (
      <SearchContainer>
        <TitleBack></TitleBack>
        <div className='container'>
          <Input></Input>
          {
            this.state.items.length===0
            ?(
              <div className='empty'>
                <div>
                  <img src={emptyImg} alt=""/>
                  <p>抱歉，暂时没发现您想找的问题</p>
                </div>
              </div>
            )
            :(
              <ul>
                {
                  this.state.items.map((item) => (
                    <Cell 
                      key={item}
                      {...item}
                    ></Cell>
                  ))
                }
              </ul>
              
            )
          }
        </div>
        {this.state.items.length===0||<InputBar></InputBar>}
      </SearchContainer>
    )
  }
}
