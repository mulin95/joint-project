import React, { Component } from 'react' 

import TitleBack from 'components/titleBack/TitleBack'

import {
    SeacrhContainer
} from './StyledSearch'

export default class Search extends Component{
    render(){
        return(
            <>
               <TitleBack></TitleBack>
               <SeacrhContainer>
                    <div className="select">请选择你的年级</div>
               </SeacrhContainer>
            </>
        )       
    }
}
