import React, { Component } from 'react'

import {AskContainer} from '../Styled'
import Input from '../componet/Input'

import TitleBack from 'components/titleBack/TitleBack'

export default class Ask extends Component {
  constructor(){
    super()
    console.log(window.wx)
  }
  state={
    imgUrl:''
  }
  submitImg(e){
    let file=e.target.files
    if (file.length > 0) {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          imgUrl:reader.result
        })
      };
      if (file[0]) {
        reader.readAsDataURL(file[0]);
      } else {
        this.setState({
          imgUrl:''
        })
      }
    }

  }
  render() {
    return (
      <AskContainer>
        <TitleBack></TitleBack>
        <div>
          <Input></Input>
          <div>
            {this.state.imgUrl?<img src={this.state.imgUrl} alt=""/>:'上传图片'}
            <input type="file" accept="image/*" onChange={this.submitImg.bind(this)}/>
          </div>
        </div>
      </AskContainer>
    )
  }
}
