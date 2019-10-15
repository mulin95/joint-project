import React from 'react';
import { withRouter } from 'react-router-dom'

import backImg from 'images/back.png'

import { TitleBackContainer } from './StyledBack'

export default withRouter(function titleBack(props) {
  return (
    <TitleBackContainer>
      <div>
        {
          props.title || ''
        }
        {
          props.back ?
            (
              <div className='left' onClick={() => props.history.goBack()}>
                取消
            </div>
            ) :
            (
              <div className='backImg left' onClick={() => props.history.goBack()}>
                <img src={backImg} alt="" />
              </div>
            )
        }
        {
          props.children ?
            (
              <div className='right' onClick={() => props.rightEvent && props.rightEvent(props)}>
                {props.children}
              </div>
            ) :
            ''
        }
      </div>
    </TitleBackContainer>
  );
}) 
