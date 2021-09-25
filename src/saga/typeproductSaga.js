import { call, put, takeLatest } from 'redux-saga/effects'
import typeProductApi from '../api/typeProductApi';

function* fetchTypeProductList() {
    try {
        const typeProduct = yield call(typeProductApi.getAll);
        yield put({ type: 'FTECH_LIST_SUCCSESS', typeProduct: typeProduct })
    } catch (err) {
        yield put({ type: 'FTECH_LIST_FAIL', message: err.message })
    }
}

export default function* typeproductSaga() {
    yield takeLatest('FTECH_LIST', fetchTypeProductList)
}
