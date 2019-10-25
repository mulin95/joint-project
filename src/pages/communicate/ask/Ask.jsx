import React, { Component } from 'react'

import {AskContainer} from '../Styled'
import Input from '../componet/Input'

import TitleBack from 'components/titleBack/TitleBack'

export default class Ask extends Component {
  constructor(){
    super()
    console.log(window.wx)
  }
  render() {
    return (
      <AskContainer>
        <TitleBack></TitleBack>
        <div>
          <Input></Input>
          <div>
            上传图片
          </div>
        </div>
      </AskContainer>
    )
  }
}
