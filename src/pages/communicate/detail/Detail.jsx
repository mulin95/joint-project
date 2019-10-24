import React,{useState,useEffect,useCallback} from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import Cell from 'components/communicate/Cell'

import connect from './connect'

import {Detail} from '../Styled'
import InputBar from '../componet/InputBar'
import http from 'utils/http'

const loadData=async(id,setAnsList) => {
  let res = await http.get('/huilme/a/m/AnswerController/detailsProblem?requsetionid='+id)
  setAnsList(res.data.list)
}

function DetailContainer(props) {
  const [ansList, setAnsList] = useState([])
  useEffect(() => {
    let id=props.match.params.id
    loadData(id,setAnsList)
     
  },[])
  return (
    <Detail>
      <TitleBack title='详情'/>
      <div>
        <ul>
          <Cell 
            {
              ...props.list.filter((item) => {
                if(item.requestionid==props.match.params.id){
                  return true
                }
              })[0]
            }
            ></Cell>
          {
            ansList.map((item) => (
              <Cell 
              key={item.ansrequestionid} 
                {...item}
                ans={true}
                />
            ))
          }
        </ul>
      </div>
      <InputBar />
    </Detail>
  );
}

export default connect(DetailContainer)



  // setAnsList([
  //   {       
  //     "answerUserId":"1",
  //     "answerTitle":"答案标题",
  //     "theQuestionAnswer":"https://upload-images.jianshu.io/upload_images/18592265-af141a0743887bb1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
  //     "answerTime":"00:00",
  //     "ansPageview":"123",
  //     "reqCommentnum":"456",
  //     "reqLikenum":"798",
  //     "user":{
  //       "userNickName":"昵称" ,
  //       "headPortrait":"https://upload-images.jianshu.io/upload_images/18592265-469b282293df3f1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
  //     }
  //   },
  //   {       
  //     "answerUserId":"2",
  //     "answerTitle":"答案标题",
  //     "theQuestionAnswer":"https://upload-images.jianshu.io/upload_images/18592265-af141a0743887bb1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
  //     "answerTime":"00:00",
  //     "ansPageview":"123",
  //     "reqCommentnum":"456",
  //     "reqLikenum":"798",
  //     "user":{
  //       "userNickName":"昵称" ,
  //       "headPortrait":"https://upload-images.jianshu.io/upload_images/18592265-469b282293df3f1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
  //     }
  //   }
  // ])