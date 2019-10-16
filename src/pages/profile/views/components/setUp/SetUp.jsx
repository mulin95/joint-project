import React, { Component } from 'react';

import {
    Route,
    Redirect,
    Switch
}from 'react-router-dom';

import SetUpList from './SetUpList';

class SetUp extends Component {
    render() {
        const path = this.props.match.path;
        return (
            <Switch>
                <Route path={path + '/list'} component={SetUpList}></Route>
                <Redirect from={path} to={path + '/list'}></Redirect>
            </Switch>
        );
    }
}

export default SetUp;