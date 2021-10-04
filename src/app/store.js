import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productReducer from '../features/Admin/product/productSlice'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from '../utils'
import rootSaga from './rootSaga'
import dashboardReducer from '../features/Admin/dashboard/dashboardSlice'
import typeProductReducer from '../features/Admin/typeproduct/typeProductSlice'



const rootReducer = combineReducers({
    router: connectRouter(history),
    product: productReducer,
    dashboard: dashboardReducer,
    typeProduct: typeProductReducer
})


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
})

sagaMiddleware.run(rootSaga)

