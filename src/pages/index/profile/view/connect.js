import { connect } from 'react-redux'
import { sagaLoadData } from '../actionCreator'

const mapState = (state) => {
    // console.log(state.getIn(['profile','userName']))
    return {
        userName : state.getIn(['profile','userName'])
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