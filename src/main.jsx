/*eslint-disable no-unused-vars*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import sagaMonitor from './sagaMonitor'

import MyPage from './containers/MyPage/MyPage'
import Root from './containers/Root/Root'
import reducer from './reducers'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware(/* {sagaMonitor} */)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)