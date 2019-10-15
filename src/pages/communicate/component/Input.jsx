import React from 'react'

import {Input} from '../Styled'

export default function() {
  return (
    <Input>
      <div>
        <input type="text" placeholder='我也来说一句...'/>
        <p>1条评论</p>
      </div>
      <button>发送</button>
    </Input>
  )
}
