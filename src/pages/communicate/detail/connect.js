import { connect } from 'react-redux';

import {actionCreator} from 'pages/index/communicate/';

function stateMap(state){
  return{
    list:state.getIn(['communicate','list'])
  }
}
function dispatchMap(dispatch){
  return{
    loadData(data){
      dispatch(actionCreator.saga_load_data(data))
    },
  }
}

export default connect(stateMap,dispatchMap)