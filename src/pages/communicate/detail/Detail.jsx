import React,{useState,useEffect,useCallback} from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import Cell from 'components/communicate/Cell'

import {Detail} from '../Styled'
import InputBar from '../componet/InputBar'

export default function(props) {

  const [ques, setQues] = useState({
    "requestionId":"333",
    "requestionTitle":"问题标题",
    "answerQuestions":"https://upload-images.jianshu.io/upload_images/18592265-af141a0743887bb1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
    "requestionTime":"00:00",
    "reqPageview":"100",
    "reqCommentnum":"200",
    "reqLikenum":"123",
    "user":{
      "userNickName":"昵称" ,
      "headPortrait":"https://upload-images.jianshu.io/upload_images/18592265-469b282293df3f1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" 
    }
  })
  const [ansList, setAnsList] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setAnsList([
        {       
          "answerUserId":"1",
          "answerTitle":"答案标题",
          "theQuestionAnswer":"https://upload-images.jianshu.io/upload_images/18592265-af141a0743887bb1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
          "answerTime":"00:00",
          "ansPageview":"123",
          "reqCommentnum":"456",
          "reqLikenum":"798",
          "user":{
            "userNickName":"昵称" ,
            "headPortrait":"https://upload-images.jianshu.io/upload_images/18592265-469b282293df3f1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
          }
        },
        {       
          "answerUserId":"2",
          "answerTitle":"答案标题",
          "theQuestionAnswer":"https://upload-images.jianshu.io/upload_images/18592265-af141a0743887bb1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
          "answerTime":"00:00",
          "ansPageview":"123",
          "reqCommentnum":"456",
          "reqLikenum":"798",
          "user":{
            "userNickName":"昵称" ,
            "headPortrait":"https://upload-images.jianshu.io/upload_images/18592265-469b282293df3f1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
          }
        }

      ])
    },1000)
  },[])

  return (
    <Detail>
      <TitleBack title='详情'/>
      <div>
        <ul>
          <Cell 
            {...ques}
          ></Cell>
          {
            ansList.map((item) => (
              <Cell 
                key={item.answerUserId} 
                {...item}
              />
            ))
          }
        </ul>
      </div>
      <InputBar />
    </Detail>
  );
}
