import React, { Component } from 'react';

import {
    Route,
    Switch,
    Redirect
}from 'react-router-dom'

import NoteAdd  from './NoteAdd';
import NoteList from './NoteList';
import NoteShow from './NoteShow';

class Note extends Component {
    render() {
        const path = this.props.match.path;
        return (
            <Switch>
                <Route path={path + '/noteList'} component={NoteList}></Route>
                <Route path={path + '/noteAdd'} component={NoteAdd}></Route>
                <Route path={path + '/noteshow'} component={NoteShow}></Route>
                <Redirect from={path} to={path+'/noteList'}></Redirect>
            </Switch>
        );
    }
}

export default Note;