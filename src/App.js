import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import 'styles/reset.css'
import 'styles/animate.css'

import Index from 'pages/index/home/Home';
import Page404 from 'components/Page404.jsx';

function App() {
  return (
    <>
      <Switch>
        <Route path='/index' component={Index}></Route>
        {/* <Route path='/detail' component={Detail}></Route> */}
        <Redirect from='/' to='/index' exact></Redirect>
        <Route component={Page404}></Route>
      </Switch>
    </>
  );
}

export default App;