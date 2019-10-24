import {sagas as profileSagas} from 'pages/profile/index'
import {sagas as communicataSagas} from 'pages/index/communicate/'

function* sagas(){
  yield profileSagas.loadDataSaga()
  yield communicataSagas.saga_load_data()
}

export default sagas