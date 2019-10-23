import React, { Component } from 'react'

import UI from './UI'

export default class Communicate extends Component {
  state={
    list:[],
  }
  handleJump(path){
    this.props.history.push('/communicate/'+path)
  }
  componentDidMount(){
    
    // this.setState({
    //   list:[
    //     {
    //       "requestionId":"1",
    //       "requestionTitle":"问题标题",
    //       "answerQuestions":"https://upload-images.jianshu.io/upload_images/18592265-af141a0743887bb1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
    //       "requestionTime":"00:00",
    //       "reqPageview":"100",
    //       "reqCommentnum":"200",
    //       "reqLikenum":"123",
    //       "user":{
    //         "userNickName":"昵称" ,
    //         "headPortrait":"https://upload-images.jianshu.io/upload_images/18592265-469b282293df3f1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" 
    //       }
    //     },
    //   ]
    // })
  }


  render() {
    return (
      <UI 
        list={this.state.list}
        onJump={this.handleJump.bind(this)}
      ></UI>
    )
  }
}

