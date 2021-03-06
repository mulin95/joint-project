import React from 'react'

import TitleBack from 'components/titleBack/TitleBack';
import { TabBarContainer, ListBody,Container } from './StyledUI'

import {
    Route,
    withRouter,
    Redirect
  } from 'react-router-dom'

import Service from '../component/Service'
import Sold from '../component/Sold'

const ASUI = (props) => {
    return (
        <Container>
            <TitleBack
            title='我的售后'
            ></TitleBack>
            <TabBarContainer>
                <ul>
                    <li onClick = {() => props.handleClick('sold')}>全部</li>
                    <li onClick = {() => props.handleClick('service')}>售后</li>
                </ul>
            </TabBarContainer>

            <ListBody>
            <Route path={`${props.path}/sold`} children={(prop) => <Sold list={props.list}></Sold>}></Route>
            <Route path={`${props.path}/service`} children={(prop) => <Service list={props.list}></Service>}></Route>
            <Redirect from={`${props.path}`} to={`${props.path}/sold`} exact></Redirect>
            </ListBody>
        </Container>
    )
}
export default withRouter(ASUI)