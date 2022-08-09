import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../redux-saga/reducers/rootReducer'
import { rootSaga } from '../redux-saga/saga'

const persistConfig = {
  key: 'drawtoday',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

export const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(rootSaga)