import {Map} from 'immutable';

import {
  save_scroll,
  load_data,
  saga_load_data 
} from './actionTypes';


const defaultStatus=Map({
  scroll:null,
  list:[]
})

export default (state=defaultStatus,action) => {
  switch(action.type){
    case save_scroll:
      return state.set('scroll',action.data)
    // case load_data:
    //   return 
    // case saga_load_data:
    //   return 
    default: 
      return state
  }
}