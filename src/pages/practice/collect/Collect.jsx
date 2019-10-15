import React, { Component } from 'react'

import TitleBack from 'components/titleBack/TitleBack'

import {CollectContainer} from '../Styled'


export default class Collect extends Component {
  render() {
    return (
      <CollectContainer>
        <TitleBack title='收藏' />
        <div></div>
      </CollectContainer>
    )
  }
}
