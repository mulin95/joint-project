import { connect } from 'react-redux'

import { sagaLoadData, getDir } from '../actionCreator'

const mapState = (state) => {
    return {
        dir: state.dir
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData() {
            dispatch(sagaLoadData())
          },
        getDir(data) {
            dispatch(getDir(data))
        }
    }
}

export default connect(mapState, mapDispatch)