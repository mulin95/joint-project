import { connect } from 'react-redux';

function stateMap(state){
  return{
    list:state.getIn(['communicate','list'])
  }
}

export default connect(stateMap)