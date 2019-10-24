import { takeEvery,put } from 'redux-saga/effects'

import { SAGA_LOAD_DATA } from './actionTypes'
import { sagaLoadData } from './actionCreator'

import http from 'utils/http'

function loadDataSaga(){
    console.log('12')
    return takeEvery(SAGA_LOAD_DATA,function* (){
        let result = yield http.get({url:'/api/profile'})
        console.log(result)
        yield put(sagaLoadData(result))
    })
}                  

export{
    loadDataSaga
}
