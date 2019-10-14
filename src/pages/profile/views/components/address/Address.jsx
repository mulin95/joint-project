import React, { Component } from 'react';

import {
    Route,
    Redirect,
    Switch
}from 'react-router-dom';

import AddressList from './AddressList';


class Address extends Component {
    render() {
        const path = this.props.match.path;
        return (
            <Switch>
                <Route path={ path + '/addressList' } component={AddressList}></Route>
                <Redirect from={path} to={path + '/addressList'}></Redirect>
            </Switch>
        );
    }
}

export default Address;