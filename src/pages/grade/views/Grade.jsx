import React, { Component } from 'react' 

import TitleBack from 'components/titleBack/TitleBack'

import{
    GradeContainer
} from './StyledGrade'

export default class Grade extends Component{
    render() {
        return (
            <>
            <TitleBack></TitleBack>
            <GradeContainer>
                <div className="select">请选择你的年级</div>
                <div className="classification">
                   <div className="title">初中</div>
                   <div>
                      <button className="">初一</button>
                      <button className="">初二</button>
                      <button className="">初三</button>
                   </div>      
                </div>

                <div className="classification">
                   <div className="title">高中</div>
                   <div>
                      <button className="">高一</button>
                      <button className="">高二</button>
                      <button className="">高三</button>
                   </div>
                </div>

                <div className="btn">
                    <button className="back">完成，进入会了么</button>
                </div>
                
            </GradeContainer>
            </>
        )
    }
}