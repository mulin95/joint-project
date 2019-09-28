import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  Map(),    // 初始state
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(thunk)
  )
)
sagaMiddleware.run(sagas)

export default store