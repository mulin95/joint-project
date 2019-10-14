import React, { PureComponent } from 'react'

//样式
import {Detaill} from './StyledContents'

//图片
import book from 'images/book.png'

export default class Detail extends PureComponent{
    render(){
        return(
            <div>
            <Detaill>
                <img src={book} alt=""/>
                <div className="msg">
                    <div className="ti">习题习题习题</div>
                    <div className='grade'>高一数学</div>
                    <div className="advantage">习题优点简述习题优点简述习题优点简述习</div>
                </div>
            </Detaill>
            <Detaill>
                <img src={book} alt=""/>
                <div className="msg">
                    <div className="ti">习题习题习题</div>
                    <div className='grade'>高一数学</div>
                    <div className="advantage">习题优点简述习题优点简述</div>
                </div>
            </Detaill>
            <Detaill>
                <img src={book} alt=""/>
                <div className="msg">
                    <div className="ti">习题习题习题</div>
                    <div className='grade'>高一数学</div>
                    <div className="advantage">习题优点简述习题优点简述</div>
                </div>
            </Detaill>
            <Detaill>
                <img src={book} alt=""/>
                <div className="msg">
                    <div className="ti">习题习题习题</div>
                    <div className='grade'>高一数学</div>
                    <div className="advantage">习题优点简述习题优点简述</div>
                </div>
            </Detaill>
            <Detaill>
                <img src={book} alt=""/>
                <div className="msg">
                    <div className="ti">习题习题习题</div>
                    <div className='grade'>高一数学</div>
                    <div className="advantage">习题优点简述习题优点简述</div>
                </div>
            </Detaill>
            </div>
            
        )      
    }
}