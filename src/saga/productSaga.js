import { call, put, takeLatest } from 'redux-saga/effects'
import productApi from '../api/productApi'

function* fetchProductList() {
    try {
        const product = yield call(productApi.getAll);
        yield put({ type: 'GET_PRODUCTLIST_SUCCSESS', product: product })
    } catch (err) {
        yield put({ type: 'GET_PRODUCTLIST_FAIL', message: err.message })
    }
}

function* onCreateStart({ payload }) {
    try {
        const product = yield call(productApi.add, payload);
        yield put({ type: 'GET_PRODUCTLIST_SUCCSESS', product: product })
    } catch (err) {
        yield put({ type: 'GET_PRODUCTLIST_FAIL', message: err.message })
    }
}

export default function* productSaga() {
    yield takeLatest('GET_PRODUCTLIST_REQUESTED', fetchProductList)
}

