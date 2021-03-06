import React, { Component } from 'react';

import {
    Route,
    Switch
}from 'react-router-dom';

import Note     from './components/note/Note';
import {Order}    from 'pages/order/index';
import Address  from './components/address/Address';
import Member   from './components/member/Member';
import Service  from './components/Service';
import SetUp    from './components/setUp/SetUp';
import User     from './components/user/User';

import connect from './connect'

@connect
class Profile extends Component {
    render() {
        let path = this.props.match.path
        return (
            <Switch>
                <Route path={path + '/note'}    component={Note}></Route>
                <Route path={'/order'}          component={Order}></Route>
                <Route path={path + '/address'} component={Address}></Route>
                <Route path={path + '/member'}  component={Member}></Route>
                <Route path={path + '/service'} component={Service}></Route>
                <Route path={path + '/setup'}   component={SetUp}></Route>
                <Route path={path + '/user'}   component={User}></Route>
            </Switch>
        );
    }
}

export default Profile;