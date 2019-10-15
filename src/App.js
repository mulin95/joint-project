import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import 'styles/reset.css'
import 'styles/animate.css'

<<<<<<< Updated upstream
import {Order} from 'pages/order/';
import {Communicate} from 'pages/communicate/';
import {Profile}  from 'pages/profile/';
import {Grade} from 'pages/grade/';
import {Search} from 'pages/search/';
import {Practice} from 'pages/practice/';
import {QualityInformation} from 'pages/qualityInformation/';
import {MiddleExercises} from 'pages/middleExercises/';
import {Information} from 'pages/information/';

=======
import {Order} from 'pages/order/index.js';
import {Communicate} from 'pages/communicate/index.js';
import {Profile}  from 'pages/profile/index.js';
import {Grade} from 'pages/grade/index.js';
import {Search} from 'pages/search/index.js';
import {QualityInformation} from 'pages/qualityInformation/index.js';
import {MiddleExercises} from 'pages/middleExercises/index.js';
import {Information} from 'pages/information/index.js';
import {Buy} from 'pages/buy/index.js';
>>>>>>> Stashed changes
import Index from 'pages/index/Index';
import Login from 'pages/login/index';
import Page404 from 'components/Page404.jsx';

function App() {
  return (
    <>
      <Switch>
        <Route path='/index' component={Index}></Route> 
        {/* <Route path='/detail' component={Detail}></Route> */}
        <Route path='/login' component={Login}></Route>
        <Route path='/order' component={Order}></Route>
        <Route path='/communicate/:id' component={Communicate}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/grade' component={Grade}></Route>
        <Route path='/search' component={Search}></Route>
        <Route path='/qualityInformation' component={QualityInformation}></Route>
        <Route path='/middleExercises' component={MiddleExercises}></Route>
        <Route path='/information' component={Information}></Route>
<<<<<<< Updated upstream
        <Route path='/practice/:type' component={Practice}></Route>
        
=======
        <Route path='/buy' component={Buy}></Route>
>>>>>>> Stashed changes
        <Redirect from='/' to='/index' exact></Redirect>
        <Route component={Page404}></Route>
      </Switch>
    </>
  );
}

export default App;