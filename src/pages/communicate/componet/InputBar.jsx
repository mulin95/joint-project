import React from 'react'

import {InputBar} from '../Styled'

export default function() {
  return (
    <InputBar>
      <div>
        <input type="text" placeholder='我也来说一句...'/>
        <p>1条评论</p>
      </div>
      <button>发送</button>
    </InputBar>
  )
}
