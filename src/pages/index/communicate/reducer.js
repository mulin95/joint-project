import {Map} from 'immutable';

import {
  SAVE_SCROLL,
  LOAD_DATA,
} from './actionTypes';


const defaultStatus=Map({
  scroll:0,
  list:[]
})

export default (state=defaultStatus,action) => {
  switch(action.type){
    case SAVE_SCROLL:
      return state.set('scroll',action.data)
    case LOAD_DATA:
      return state.set('list',action.data)
    default: 
      return state
  }
}