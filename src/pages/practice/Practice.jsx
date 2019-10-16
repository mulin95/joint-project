import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'

import Subject from './subject/Subject'
import Collect from './collect/Collect'
import Topic from './topic/Topic'

export default class Practice extends Component {
  render() {
    return (
      <Switch>
        <Route path='/practice/collect' component={Collect}></Route>
        <Route path='/practice/topic/:id' component={Topic}></Route>
        <Route path='/practice/:subject' component={Subject}></Route>
      </Switch>
    )
  }
}