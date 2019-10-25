import React, { Component } from 'react' 

//组件
import TitleBack from 'components/titleBack/TitleBack'
import Detail from "../component/Detail"

//样式
import {
    Div,
    MEContainer,
    List
} from './StyledME'

//图片
import searchBtn from 'images/searchBtn.png'

export default class HeightExercises extends Component{
    render(){
        return(
            <Div>
                <MEContainer>
                   <TitleBack title='高中真题' rightEvent={(props) => {
                        props.history.push('/search')
                    }}> 
                        <div className="btn">
                            <img src={searchBtn} alt=""/>
                        </div>
                    </TitleBack>    
                </MEContainer>

                <List>
                    <Detail></Detail>
                </List>

            </Div>
        )
    }
}

