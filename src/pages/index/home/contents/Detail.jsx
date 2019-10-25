import React, { PureComponent } from 'react'

import {withRouter} from 'react-router-dom'

//样式
import {Detaill} from './StyledContents'

//图片
// import book from 'images/book.png'

import http from 'utils/http'

class Detail extends PureComponent{
    state={
        list:[]
    }

    handleClick(id){
        // console.log(id)
        this.props.history.push("/information/"+id)
    }
    async componentDidMount(){
        let res= await http.get('/huileme/a/m/TopicController/homePage')
        // console.log(res)
        this.setState({
            list:res.data.topicList
        })
    }

    render(){
        return(
            <div>
                <div>
                    {
                        this.state.list.map((item) => (
                            <Detaill
                                key={item.topicId}
                                onClick={this.handleClick.bind(this,item.topicId)}
                            >
                                <img src={item.topicImg} alt=""/>
                                <div className="msg">
                                    <div className="ti">{item.topicName}</div>
                                    <div className='grade'>{item.applyStage+item.topicSubject}</div>
                                    <div className="advantage">{item.sketch}</div>
                                </div>
                            </Detaill>
                        ))
                    }
                    </div>
            </div>
            
        )      
    }
}

export default withRouter(Detail)
            // {/* <Detaill>
            //     <img src={book} alt=""/>
            //     <div className="msg">
            //         <div className="ti">习题习题习题</div>
            //         <div className='grade'>高一数学</div>
            //         <div className="advantage">习题优点简述习题优点简述</div>
            //     </div>
            // </Detaill>
            // <Detaill>
            //     <img src={book} alt=""/>
            //     <div className="msg">
            //         <div className="ti">习题习题习题</div>
            //         <div className='grade'>高一数学</div>
            //         <div className="advantage">习题优点简述习题优点简述</div>
            //     </div>
            // </Detaill>
            // <Detaill>
            //     <img src={book} alt=""/>
            //     <div className="msg">
            //         <div className="ti">习题习题习题</div>
            //         <div className='grade'>高一数学</div>
            //         <div className="advantage">习题优点简述习题优点简述</div>
            //     </div>
            // </Detaill>
            // <Detaill>
            //     <img src={book} alt=""/>
            //     <div className="msg">
            //         <div className="ti">习题习题习题</div>
            //         <div className='grade'>高一数学</div>
            //         <div className="advantage">习题优点简述习题优点简述</div>
            //     </div>
            // </Detaill> */}