import React, { Component } from 'react';

import {
    Switch,
    Route,
    Redirect
}from 'react-router-dom'

import MemberList from './MemberList';
import MemberOppen from './MemberOppen';
import MemberBack from './MemberBack';

class Member extends Component {
    render() {
        const path = this.props.match.path
        return (
            <Switch>
                <Route path={path+'/list'} component={MemberList}></Route>
                <Route path={path+'/oppen'} component={MemberOppen}></Route>
                <Route path={path+'/back'} component={MemberBack}></Route>
                <Redirect from={path} to={path+'/list'}></Redirect>
            </Switch>
        );
    }
}

export default Member;