import React from 'react'

import { NavBar, Icon } from 'antd-mobile';
import { TabBarContainer, ListBody } from './StyledOrder'

import {
    Route,
    withRouter,
    Redirect
  } from 'react-router-dom'

import All from '../component/All'
import Unpaid from '../component/Unpaid'
import Receiving from '../component/Receiving'
import Shipped from '../component/Shipped'

const OrderUI = (props) => {
    console.log(props.list)
    return (
        <div>
            <NavBar
            mode='light'
            icon={<Icon type = 'left'></Icon>}

            >我的订单</NavBar>
            <TabBarContainer>
                <ul>
                    <li onClick = {() => props.handleClick('all')}>全部</li>
                    <li onClick = {() => props.handleClick('unpaid')}>待付款</li>
                    <li onClick = {() => props.handleClick('shipped')}>待发货</li>
                    <li onClick = {() => props.handleClick('receiving')}>待收货</li>
                </ul>
            </TabBarContainer>

            <ListBody>
            <Route path={`${props.path}/all`} children={(prop) => <All list={props.list} ph="sb"></All>}></Route>
            {/* <Route path={`${props.path}/unpaid`} children={(props) => <Unpaid></Unpaid>}></Route> */}
            {/* <Route path={`${props.path}/shipped`} children={(props) => <Shipped></Shipped>}></Route> */}
            {/* <Route path={`${props.path}/receiving`} children={(props) => <Receiving></Receiving>}></Route> */}
            </ListBody>
        </div>
    )
}
export default withRouter(OrderUI)