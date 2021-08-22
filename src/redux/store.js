import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "./sagas";
import { rootReducer } from "./reducers";

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(saga),
        composeEnhancers(),
    ),
);
saga.run(rootWatcher);

export default store;