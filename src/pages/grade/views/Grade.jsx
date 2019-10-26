import React, { Component } from 'react'

import TitleBack from 'components/titleBack/TitleBack'

import {
    GradeContainer
} from './StyledGrade'

const clist = ['初一', '初二', '初三']
const glist = ['高一', '高二', '高三']

export default class Grade extends Component {
    state={
        active:localStorage.getItem('grade')||1
    }
    handleClick(id){
        this.setState({
            active:id
        })
    }
    handleSub(){
        localStorage.setItem('grade',this.state.active)
        console.log(this.props.history)
        this.props.history.goBack()
    }
    
    render() {
        return (
            <>
                <TitleBack></TitleBack>
                <GradeContainer>
                    <div className="select">请选择你的年级</div>
                    <div className="classification">
                        <div className="title">初中</div>
                        <div>
                            {clist.map((item, index) => (
                                <button 
                                    key={index+1} 
                                    className={this.state.active==index+1?'active':''}
                                    onClick={this.handleClick.bind(this,index+1)}
                                >{item}</button>
                            ))}
                        </div>
                    </div>

                    <div className="classification">
                        <div className="title">高中</div>
                        <div>
                            {glist.map((item, index) => (
                                <button 
                                    key={index+4} 
                                    className={this.state.active==index+4?'active':''}
                                    onClick={this.handleClick.bind(this,index+4)}
                                >{item}</button>
                            ))}
                        </div>
                    </div>

                    <div className="btn">
                        <button className="back" onClick={this.handleSub.bind(this)}>完成，进入会了么</button>
                    </div>

                </GradeContainer>
            </>
        )
    }
}