import React, { Component } from 'react'

import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import table_bar1 from 'images/table-bar (1).png'
import table_bar2 from 'images/table-bar (2).png'
import table_bar3 from 'images/table-bar (3).png'
import table_bar4 from 'images/table-bar (4).png'
import table_bar_a1 from 'images/table-bar-a (1).png'
import table_bar_a2 from 'images/table-bar-a (2).png'
import table_bar_a3 from 'images/table-bar-a (3).png'
import table_bar_a4 from 'images/table-bar-a (4).png'

import {
  IndexContainer,
  TableBar
} from './StyledIndex'

const table_bar=[
  {
    route:'home',
    title:'首页',
    img:table_bar1,
    imgA:table_bar_a1
  },
  {
    route:'practice',
    title:'练习室',
    img:table_bar2,
    imgA:table_bar_a2
  },
  {
    route:'communicate',
    title:'交流室',
    img:table_bar3,
    imgA:table_bar_a3
  },
  {
    route:'profile',
    title:'我的',
    img:table_bar4,
    imgA:table_bar_a4
  },
]

export default class Index extends Component {
  render() {
    const {match,history,location}=this.props
    let activeBar=location.pathname.split('/')[2]
    return (
      <IndexContainer>
        <main>
          <Switch>
            <Route path={match.path+'/home'}></Route>
            <Route path={match.path+'/practice'}></Route>
            <Route path={match.path+'/communicate'}></Route>
            <Route path={match.path+'/profile'}></Route>
            <Redirect from={match.path} to={match.path+'/home'}></Redirect>
          </Switch>
        </main>
        <TableBar>
          <ul>
            {
              table_bar.map((item) => (
                <li 
                  key={item.route}
                  className={activeBar===item.route?'active':''}
                  onClick={() =>{ history.push(match.path+'/'+item.route) }}
                >
                  <div>
                    <img src={activeBar===item.route?item.imgA:item.img} alt=""/>
                  </div>
                  <span>{item.title}</span>
                </li>
              ))
            }
          </ul>
        </TableBar>
      </IndexContainer>
    )
  }
}