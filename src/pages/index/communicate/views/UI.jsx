import React from 'react'

import {CommunicateContainer} from './StyledCommunicate'
import sou from 'cmcimg/sou.png'
import Cell from 'components/communicate/Cell'

const UI= React.forwardRef((props,ref)=>{
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
        <div ref={ref}>
          <ul>
            {
              props.list.map((item) => (
                <Cell 
                  {...item}
                  key={item.requestionid} 
                  onJump={() => {
                    props.onJump(item.requestionid)
                  }}
                />
              ))
            }
          </ul>
        </div>
      </CommunicateContainer>
  )
})

export default UI
