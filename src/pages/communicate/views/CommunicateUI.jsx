import React from 'react';

import TitleBack from 'components/titleBack/TitleBack'

export default function views() {
  return (
    <div>
      <TitleBack />
      <TitleBack back/>
      <TitleBack title='详情'/>
      <TitleBack title='商品列表' back/>

      <TitleBack rightEvent={(arg)=>{arg.history.push('/order')}}>
        clic
      </TitleBack >
      <TitleBack title='商品详情' back >
        <button>click</button>
      </TitleBack>


      CommunicateContainer
    </div>
  );
}
