import {combineReducers} from 'redux-immutable';

import { reducer as order } from 'pages/order/'
import { reducer as profile} from 'pages/profile/'
import {reducer as communicate} from 'pages/index/communicate/';


export default combineReducers({
  order,
  profile,
  communicate
})