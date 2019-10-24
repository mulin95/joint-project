import React,{useCallback,useState} from 'react'

import { CellContainer } from './Styled'

import kan from 'cmcimg/kan.png'
import kanA from 'cmcimg/kanA.png'
import ping from 'cmcimg/ping.png'
import pingA from 'cmcimg/pingA.png'
import zan from 'cmcimg/zan.png'
import zanA from 'cmcimg/zanA.png'
import wen from 'cmcimg/wen.png'


function Cell(props) {

  let [stateZan,setZan]=useState(false)

  const handleZan=useCallback(() => {
    setZan(!stateZan)
  })

  return (
    <CellContainer >
      <div className='user' onClick={props.onJump}>
        <img src={'http://thepatternlibrary.com/img/ar.png'||props.user.userimg} alt="" />
        <div>
          <p>{props.user.username}</p>
          <p>{props.requestiontime||props.answerTime}</p>
        </div>
      </div>
      <div className='content' onClick={props.onJump}>
        <p>
          <img src={wen} alt="" />
          <span>
          {props.requestiontitle||props.answerTitle}
          </span>
        </p>
        <div>
          <img src={'http://thepatternlibrary.com/img/q.png'||props.answerquestions||props.theQuestionAnswer} alt="" />
        </div>
      </div>
      <ul className='foot'>
        <li>
          <p>
            <img src={false?kanA:kan} alt="" />
          </p>
          <span>{props.reqPageview||props.ansPageview||100}</span>
        </li>
        <li onClick={props.onJump}>
          <p>
            <img src={false?pingA:ping} alt="" />
          </p>
          <span>{props.reqCommentnum||200}</span>
        </li>
        <li onClick={handleZan}>
          <p>
            <img src={stateZan?zanA:zan} alt="" />
          </p>
          <span>{(props.reqLikenum||300)-0+(stateZan?1:0)}</span>
        </li>
      </ul>
    </CellContainer>
  )
}

export default Cell
