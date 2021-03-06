import React from 'react'

import TitleBack from 'components/titleBack/TitleBack';
import { TabBarContainer, ListBody,Container } from './StyledOrder'

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
    return (
        <Container>
            <TitleBack
            title='我的订单'
            leftEvent={(props) => {props.history.push('/index/profile')}}
            ></TitleBack>
            <TabBarContainer>
                <ul>
                    <li onClick = {() => props.handleClick('all')}>全部</li>
                    <li onClick = {() => props.handleClick('unpaid')}>待付款</li>
                    <li onClick = {() => props.handleClick('shipped')}>待发货</li>
                    <li onClick = {() => props.handleClick('receiving')}>待收货</li>
                </ul>
            </TabBarContainer>

            <ListBody>
            <Route path={`${props.path}/all`} children={(prop) => <All></All>}></Route>
            <Route path={`${props.path}/unpaid`} children={(prop) => <Unpaid></Unpaid>}></Route>
            <Route path={`${props.path}/shipped`} children={(prop) => <Shipped></Shipped>}></Route>
            <Route path={`${props.path}/receiving`} children={(prop) => <Receiving></Receiving>}></Route>
            <Redirect from={props.path} to={`${props.path}/all`} exact></Redirect>
            </ListBody>
        </Container>
    )
}
export default withRouter(OrderUI)