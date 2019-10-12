import React from 'react'

import { CellContainer } from './Styled'

import kan from 'cmcimg/kan.png'
import kanA from 'cmcimg/kanA.png'
import ping from 'cmcimg/ping.png'
import pingA from 'cmcimg/pingA.png'
import zan from 'cmcimg/zan.png'
import zanA from 'cmcimg/zanA.png'
import wen from 'cmcimg/wen.png'


function Cell() {
  return (
    <CellContainer>
      <div className='user'>
        <img src="https://upload-images.jianshu.io/upload_images/18592265-469b282293df3f1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="" />
        <div>
          <p>昵称昵称昵称昵称昵称</p>
          <p>00:00</p>
        </div>
      </div>
      <div className='content'>
        <p>
          <img src={wen} alt="" />
          <span>
            题目题目题目题目题目题目题目题目题目？
          </span>
        </p>
        <div>
          <img src="https://upload-images.jianshu.io/upload_images/18592265-af141a0743887bb1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="" />
        </div>
      </div>
      <ul className='foot'>
        <li><p><img src={true?kan:kanA} alt="" /></p><span>1.1万</span></li>
        <li><p><img src={true?ping:pingA} alt="" /></p><span>100</span></li>
        <li><p><img src={false?zan:zanA} alt="" /></p><span>100</span></li>
      </ul>
    </CellContainer>
  )
}

export default Cell
