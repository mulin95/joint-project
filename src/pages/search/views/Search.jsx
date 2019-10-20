import React, { Component } from 'react' 

import TitleBack from 'components/titleBack/TitleBack'

import {
    SeacrhContainer,
    TitleBar,
} from './StyledSearch'

export default class Search extends Component{
    render(){
        return(
            <>
               <TitleBack></TitleBack>
               <SeacrhContainer>
                    <input type="text" placeholder="请输入搜索内容" />
                    <TitleBar>
                        <div className="hot">热门搜索</div>
                        <div className="tiname">数学公式</div>
                        <div className="tiname">数</div>
                        <div className="tiname">数学公式</div>
                        <div className="tiname">数学公式数学公式数学公式</div>
                    </TitleBar>
               </SeacrhContainer>
            </>
        )       
    }
}
