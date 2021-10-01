import { all } from "@redux-saga/core/effects";
import dashboardSaga from "../features/dashboard/dashboardSaga";
import { productSaga } from "../features/product/productSaga";
import { typeProductSaga } from "../features/typeproduct/typeProductSaga";


export default function* rootSaga() {
    yield all([dashboardSaga(), productSaga(), typeProductSaga()])
}