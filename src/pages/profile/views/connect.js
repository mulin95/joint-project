import { connect } from 'react-redux'

const mapState = (state) => {
    // console.log(state.getIn(['profile','userName']))
    return {
        userName : state.getIn(['profile','userName'])
    }
}

export default connect(mapState)