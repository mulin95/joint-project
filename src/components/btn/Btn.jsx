import React from 'react';

import { BtnContainer } from './Styled';

export default function btn(props) {
  return (
    <BtnContainer>
      <button onClick={props.onClick}>
        {props.children}
      </button>
    </BtnContainer>
  );
}
