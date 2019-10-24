import { 
    CHANGE_USERNAME
}from './actionTypes';

import { Map }from 'immutable';

const defaultState = Map({
    userName:'2019-10-18'
})

export default (state=defaultState,action)=>{
    // console.log(state.get('userName'))
    switch(action.type){
        case CHANGE_USERNAME:
            return{
                userName:action.data
            }
        default:
            return state
    }
}

