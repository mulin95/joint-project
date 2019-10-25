import {sagas as profileSagas} from 'pages/profile/index'
import {sagas as orderSagas} from 'pages/order/index'
import {sagas as aftersaleSagas} from 'pages/aftersale/index'
import {sagas as communicataSagas} from 'pages/index/communicate/'

function* sagas(){
  yield profileSagas.loadDataSaga()
  yield orderSagas.loadDataSaga()
  yield aftersaleSagas.loadDataSaga()
  yield communicataSagas.saga_load_data()
}

export default sagas