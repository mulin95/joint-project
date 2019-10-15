import React from 'react';

import TitleBack from 'components/titleBack/TitleBack'
import Cell from 'components/communicate/Cell'
import {Container} from '../Styled'
import Input from '../component/Input'

export default function views() {
  return (
    <Container>
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
      <Input />
    </Container>
  );
}
