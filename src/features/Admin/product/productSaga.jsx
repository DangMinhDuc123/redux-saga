import { takeLatest, call, put } from 'redux-saga/effects'
import { productActions } from './productSlice'
import productApi from '../../../api/productApi'

function* fetchProductList(action) {
    try {
        const response = yield call(productApi.getAlls, action.payload)
        yield put(productActions.fetchProductListSuccess(response))
    }
    catch (err) {
        yield put(productActions.fetchProductListFail(err.message))
    }
}


export function* productSaga() {
    yield takeLatest(productActions.fetchProductList, fetchProductList)
}