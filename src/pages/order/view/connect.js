import { connect } from 'react-redux'

import { sagaLoadData } from '../actionCreator'

const mapState = (state) => {
    return {
        List: state.List
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData() {
            dispatch(sagaLoadData())
          }
    }
}

export default connect(mapState, mapDispatch)