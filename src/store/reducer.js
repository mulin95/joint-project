import {combineReducers} from 'redux-immutable';

import { reducer as order } from 'pages/order/'
import { reducer as profile} from 'pages/profile/'

export default combineReducers({
  order,
  profile
})