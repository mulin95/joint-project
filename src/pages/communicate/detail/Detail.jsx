import React from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import Cell from 'components/communicate/Cell'

import {Detail} from '../Styled'
import InputBar from '../componet/InputBar'

export default function() {
  return (
    <Detail>
      <TitleBack title='详情'/>
      <div>
        <ul>
          {
            [1,2].map((item) => (
              <Cell 
                key={item} 
                onHandleClick={() => {
                  console.log('我太难了，你别点了')
                }}
              />
            ))
          }
        </ul>
      </div>
      <InputBar />
    </Detail>
  );
}
