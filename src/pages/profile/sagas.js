import { takeEvery,put } from 'redux-saga/effects'

import { SAGA_LOAD_DATA } from './actionTypes'
import { sagaLoadData } from './actionCreator'

import http from 'utils/http'

function loadDataSaga(){
    return takeEvery(SAGA_LOAD_DATA,function* (){
        let result = yield http.get({url:'/profile'})
        yield put(sagaLoadData(result))
    })
}                  

export{
    loadDataSaga
}
