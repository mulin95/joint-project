import { connect } from 'react-redux'

import { sagaLoadData} from '../actionCreator'

const mapState = (state) => {  
    return {
        dir: state.getIn(["order",'dir']),
        listt: state.getIn(["order","list"])
    }
}

const mapDispatch = (dispatch) => {
    return {
      loadData() {
        dispatch(sagaLoadData())
      }
    }
  }

export default connect(mapState,mapDispatch)