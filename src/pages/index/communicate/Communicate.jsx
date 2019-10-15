import React, { Component } from 'react'

import {CommunicateContainer} from './StyledCommunicate'
import sou from 'cmcimg/sou.png'
import Cell from 'components/communicate/Cell'

export default class Communicate extends Component {
  handleClick(id){
    let {history}=this.props
    history.push('/communicate/'+id)
  }
  render() {
    return (
      <CommunicateContainer>
        <div>
          问答交流
          <div>
            <div>
              <img src={sou} alt=""/>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {
              [1,2,3,4,5].map((item) => (
                <Cell 
                  key={item} 
                  onHandleClick={() => {
                    this.handleClick(item)
                  }}
                />
              ))
            }
          </ul>
        </div>
      </CommunicateContainer>
    )
  }
}
