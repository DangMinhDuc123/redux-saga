import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../redux/reducers/index'
import rootSaga from '../saga/rootSaga';

// const composeEnhancers = 'development' === process.env.NODE_ENV
//     ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
//     : compose;



// const store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware)
// )

// const configureStore = () => {
//     const middleware = [sagaMiddleware];
//     const enhancers = [applyMiddleware(...middleware)];
//     const store = createStore(rootReducer, composeEnhancers(...enhancers))
//     sagaMiddleware.run(rootSaga)
//     return store;
// }
const sagaMiddleware = createSagaMiddleware()
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension())
    (createStore)(rootReducer)

sagaMiddleware.run(rootSaga)
export default store;




