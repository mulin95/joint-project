import {takeEvery, put} from 'redux-saga/effects';

import {load_data} from './actionCreator';
import {SAGA_LOAD_DATA} from './actionTypes';

import http from 'utils/http'


function saga_load_data() {
  return takeEvery(SAGA_LOAD_DATA, function* () {
    let result = yield http.get('/huilme/a/m/RequestionController/interChange')
    yield put(load_data(result.data.list))
  })
}


export {
  saga_load_data
}