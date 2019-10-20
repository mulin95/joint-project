import { connect } from 'react-redux';

import {
  save_scroll,
  load_data,
  saga_load_data
} from '../actionCreator';

function stateMap(state){
  return{
    scroll:state.getIn(['communicate','scroll'])
  }
}

function dispatchMap(dispatch){
  return{
    saveScroll(){
      dispatch(save_scroll())
    },
    loadData(){
      dispatch(load_data())
    },
    sagaLoadData(){
      dispatch(saga_load_data())
    }
  }
}


export default connect(stateMap,dispatchMap)