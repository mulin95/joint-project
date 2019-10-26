import { LOAD_DATA, LOAD_MORE_DATA, GET_DIR } from './actionTypes'
import { Map } from 'immutable'

const defaultState = Map({
  list: [],
  dir: ''
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOAD_DATA:
      // console.log(action.data)
      return state.set('list', action.data.data.list[0] ? action.data.data.list[0].topicList : [])
    case LOAD_MORE_DATA:
      return state.set('list', state.get('list').concat(action.data))
    case GET_DIR : 
      return state.set('dir', action.data)
    default:
      return state
  }
}