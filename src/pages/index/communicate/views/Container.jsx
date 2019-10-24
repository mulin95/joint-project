import React, { Component, createRef } from 'react'

import connect from './connect'
import UI from './UI'

import BS from 'better-scroll'

@connect
class Communicate extends Component {
  constructor(){
    super()
    this.listBox=createRef()
  }
  handleJump(path){
    this.props.history.push('/communicate/'+path)
  }
  componentDidMount(){
    this.props.list.length===0&&this.props.loadData()
    
    // scroll
    let bs=new BS(this.listBox.current,{
      probeType:3,
      click:true
    })
    bs.scrollTo(0,this.props.scroll)
    
    bs.on('scroll',({x,y}) => {
      y=y>0?0:y
      y=-this.maxHeight>y?-this.maxHeight:y
      this.props.saveScroll(y)
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    this.maxHeight=this.listBox.current.firstChild.offsetHeight-this.listBox.current.offsetHeight
    
  }

  render() {
    
    return (
      <UI 
        list={this.props.list}
        onJump={this.handleJump.bind(this)}
        ref={this.listBox}
      ></UI>
      )
  }
}

export default Communicate




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