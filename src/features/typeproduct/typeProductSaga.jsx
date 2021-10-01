import { takeLatest, call, put } from "@redux-saga/core/effects";
import typeProductApi from '../../api/typeProductApi'
import { typeProductActions } from "./typeProductSlice";

function* fetchTypeProductList(action) {
    try {
        const response = yield call(typeProductApi.getAll, action.payload);
        yield put(typeProductActions.fetchTypeProductListSuccess(response))
    } catch (err) {
        yield put(typeProductActions.fetchTypeProductListFaile(err.message))
    }

}

export function* typeProductSaga() {
    yield takeLatest(typeProductActions.fetchTypeProductList, fetchTypeProductList)
}