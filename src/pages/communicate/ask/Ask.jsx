import React, { Component } from 'react'

import {AskContainer} from '../Styled'
import Input from '../componet/Input'

import TitleBack from 'components/titleBack/TitleBack'
import Btn from 'components/btn/Btn'
import http from 'utils/http'


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
        console.log(reader.result)
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
  async handleSub(){
    let res= await http.post('/huileme/a/u/RequestionController/addrequestion?requestionTitle=123456',{
      headers: {
        'x-access-token': localStorage.getItem('token'),
        // 'Content-Type':'application/x-www-form-urlencoded'
      },
      body:'answerQuestions='+this.state.imgUrl
    })
    console.log(res)
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
          <Btn onClick={this.handleSub.bind(this)}>发布问题</Btn>
        </div>
      </AskContainer>
    )
  }
}
