import React from 'react'

import {CommunicateContainer} from './StyledCommunicate'
import sou from 'cmcimg/sou.png'
import Cell from 'components/communicate/Cell'

function UI(props) {
  return (
    <CommunicateContainer>
        <div>
          问答交流
          <div className='left' onClick={() => {props.onJump('ask')}}>
            提问
          </div>
          <div onClick={() => {props.onJump('search')}}>
            <img src={sou} alt=""/>
          </div>
        </div>
        <div>
          <ul>
            {
              props.list.map((item) => (
                <Cell 
                  {...item}
                  key={item.requestionId} 
                  onJump={() => {
                    props.onJump(item.requestionId)
                  }}
                />
              ))
            }
          </ul>
        </div>
      </CommunicateContainer>
  )
}

export default UI
