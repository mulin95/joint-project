import React from 'react';
import { Route,Switch,Redirect,withRouter } from 'react-router-dom';

import 'styles/reset.css'
import 'styles/animate.css'

import {Order} from 'pages/order/';
import {Communicate} from 'pages/communicate/';
import {Profile}  from 'pages/profile/';
import {Grade} from 'pages/grade/';
import {Search} from 'pages/search/';
import {Practice} from 'pages/practice/';
import {QualityInformation} from 'pages/qualityInformation/';
import {MiddleExercises} from 'pages/middleExercises/';
import {HeightExercises} from 'pages/heightExercises/';
import {Information} from 'pages/information/';
import {Buy} from 'pages/buy/index.js';
import {AfterSale} from 'pages/aftersale/index.js';

import Index from 'pages/index/Index';
import Login from 'pages/login/index';
import Page404 from 'components/Page404.jsx';

function App(props) {
  return (
    <>
      <Switch>
        <Route path='/index' component={Index}></Route> 
        {/* <Route path='/detail' component={Detail}></Route> */}
        <Route path='/login' component={Login}></Route>
        <Route path='/order' component={Order}></Route>
        <Route path='/communicate' component={Communicate}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/grade' component={Grade}></Route>
        <Route path='/search' component={Search}></Route>
        <Route path='/practice' component={Practice}></Route>
        <Route path='/qualityInformation' component={QualityInformation}></Route>
        <Route path='/middleExercises' component={MiddleExercises}></Route>
        <Route path='/heightExercises' component={HeightExercises}></Route>
        <Route path='/information/:id' component={Information}></Route>
        <Route path='/aftersale' component={AfterSale}></Route>
        <Route path='/buy' component={Buy}></Route>
        <Redirect from='/' to='/index' exact></Redirect>
        <Route component={Page404}></Route>
      </Switch>
    </>
  );
}

export default withRouter(App);