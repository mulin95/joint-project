import {sagas as profileSagas} from 'pages/profile/index'

function* sagas(){
  yield profileSagas.loadDataSaga()
}

export default sagas