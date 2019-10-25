import React, { Component } from 'react'

import {InputContainer,InputBorder} from '../Styled'
import closeImg from 'images/close.png'


export default class Input extends Component {
  state={
    value:''
  }
  render() {
    return (
      <InputContainer>
        <InputBorder>
          <input type="text" 
            value={this.state.value} 
            onChange={(e) => {
              let value=e.target.value
              this.setState({value})
            }}
            placeholder='输入内容'
          />
          {this.state.value&&<img src={closeImg} alt="" onClick={() => {
            this.setState({
              value:''
            })
          }}/>}
        </InputBorder>
        {this.props.onClick&&<button onClick={() => {
          this.props.onClick(this.state.value)
        }}>搜索</button>}
      </InputContainer>
    )
  }
}
