import React, { Component } from 'react';

import {
    Route,
    Redirect,
    Switch
}from 'react-router-dom';

import UserList from './UserList';
import UserAbout from './UserAbout';

class User extends Component {
    render() {
        const path = this.props.match.path;
        return (
            <Switch>
                <Route path={path + '/list'} component={UserList}></Route>
                <Route path={path + '/about'} component={UserAbout}></Route>
                <Redirect from={path} to={path + '/list'}></Redirect>
            </Switch>
        );
    }
}

export default User;