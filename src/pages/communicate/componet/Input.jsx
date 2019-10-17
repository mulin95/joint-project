import React, { Component } from 'react'

import {InputContainer} from '../Styled'
import closeImg from 'images/close.png'


export default class Input extends Component {
  state={
    value:'输入内容'
  }
  render() {
    return (
      <InputContainer>
        <input type="text" 
          value={this.state.value} 
          onChange={(e) => {
            this.setState({
              value:e.target.value
            })
          }}
        />
        {this.state.value&&<img src={closeImg} alt="" onClick={() => {
          this.setState({
            value:''
          })
        }}/>}
      </InputContainer>
    )
  }
}
