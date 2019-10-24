import { connect } from 'react-redux';

import {
  save_scroll,
  load_data,
  saga_load_data
} from '../actionCreator';

function stateMap(state){
  return{
    scroll:state.getIn(['communicate','scroll']),
    list:state.getIn(['communicate','list'])
  }
}

function dispatchMap(dispatch){
  return{
    saveScroll(data){
      dispatch(save_scroll(data))
    },
    loadData(data){
      dispatch(saga_load_data(data))
    },
  }
}


export default connect(stateMap,dispatchMap)