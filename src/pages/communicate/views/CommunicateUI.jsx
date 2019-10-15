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
                  this.handleClick(item)
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
