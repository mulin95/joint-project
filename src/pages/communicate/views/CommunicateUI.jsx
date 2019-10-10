import React from 'react';

import TitleBack from 'components/titleBack/TitleBack'
// import { Container } from './styles';

export default function views() {
  return (
    <div>
      <TitleBack />
      <TitleBack back/>
      <TitleBack title='详情'/>
      <TitleBack title='商品列表' back/>

      <TitleBack>
        <button>click</button>
      </TitleBack>
      <TitleBack title='商品详情' back rightEvent={(props)=>{console.log(props)}}>
        <button>click</button>
      </TitleBack>


      CommunicateContainer
    </div>
  );
}
