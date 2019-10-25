import React, { Component } from 'react'

import {SearchContainer} from '../Styled'
import Input from '../componet/Input'
import TitleBack from 'components/titleBack/TitleBack'
import InputBar from '../componet/InputBar'
import Cell from 'components/communicate/Cell'

import http from 'utils/http'

import connect from './connect'

import emptyImg from 'images/empty.png'

@connect
class Search extends Component {
  state={
    list:[]
  }
  async handleClick(value){
    let res=await http.get('/huilme/a/m/RequestionController/interChange?requestiontitle='+value)
    this.setState({
      list:res.data.list
    })
  }

  render() {
    return (
      <SearchContainer>
        <TitleBack></TitleBack>
        <div className='container'>
          <Input onClick={this.handleClick.bind(this)}></Input>
          {
            this.state.list.length===0
            ?(
              <div className='empty'>
                <div>
                  <img src={emptyImg} alt=""/>
                  <p>抱歉，暂时没发现您想找的问题</p>
                </div>
              </div>
            )
            :(
              <ul>
                {
                  this.state.list.map((item) => (
                    <Cell 
                      key={item.requestionid}
                      {...item}
                      onJump={() => {
                        this.props.history.push('/communicate/'+item.requestionid)
                      }}
                    ></Cell>
                  ))
                }
              </ul>
            )
          }
        </div>
        {this.state.list.length===0||<InputBar></InputBar>}
      </SearchContainer>
    )
  }
}

export default Search