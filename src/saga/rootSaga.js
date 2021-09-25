// import counterSaga from "../features/Admin/PageAdmin/counter";
import { all } from 'redux-saga/effects'
import productSaga from './productSaga'
import typeproductSaga from './typeproductSaga'

export default function* rootSaga() {
    console.log('Root Sagas!')
    yield all([
        productSaga(), typeproductSaga()
    ])
}