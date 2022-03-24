import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import WatchSaga from "./Saga/sagas"

const sagaMiddleware = createSagaMiddleware()
const ComposeIt = compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, ComposeIt);

sagaMiddleware.run(WatchSaga);

export default store;
