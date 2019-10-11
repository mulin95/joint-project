import React, { Component } from 'react';

import {
    Route,
    Switch,
}from 'react-router-dom';

import Note     from './components/Note';
import Order    from './components/Order';
import Address  from './components/Address';
import Member   from './components/Member';
import Service  from './components/Service';
import SetUp    from './components/SetUp';

class Profile extends Component {
    render() {
        let path = this.props.match.path;
        return (
            <Switch>
                <Route path={path + '/note'}    component={Note}></Route>
                <Route path={path + '/order'}   component={Order}></Route>
                <Route path={path + '/address'} component={Address}></Route>
                <Route path={path + '/member'}  component={Member}></Route>
                <Route path={path + '/service'} component={Service}></Route>
                <Route path={path + '/service'} component={Service}></Route>
                <Route path={path + '/setup'}   component={SetUp}></Route>
            </Switch>
        );
    }
}

export default Profile;