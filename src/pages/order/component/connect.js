import { connect } from 'react-redux'

const mapState = (state) => {  
    return {
        dir: state.getIn(["order",'dir'])
    }
}

export default connect(mapState)