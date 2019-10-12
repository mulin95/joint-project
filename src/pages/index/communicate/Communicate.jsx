import React, { Component } from 'react'

import {CommunicateContainer} from './StyledCommunicate'
import sou from 'cmcimg/sou.png'
import Cell from 'components/communicate/Cell'

export default class Communicate extends Component {
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
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </ul>
        </div>
      </CommunicateContainer>
    )
  }
}
