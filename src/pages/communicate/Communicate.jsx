import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'


import Ask from './ask/Ask'
import Search from './search/Search'
import Detail from './detail/Detail'


export default class Communicate extends Component {
  render() {
    return (
      <Switch>
        <Route path='/communicate/ask' component={Ask}></Route>
        <Route path='/communicate/search' component={Search}></Route>
        <Route path='/communicate/:id' component={Detail}></Route>
      </Switch>
    )
  }
}
