import { all } from "@redux-saga/core/effects";
import dashboardSaga from "../features/Admin/dashboard/dashboardSaga";
import { productSaga } from "../features/Admin/product/productSaga";
import { typeProductSaga } from "../features/Admin/typeproduct/typeProductSaga";


export default function* rootSaga() {
    yield all([dashboardSaga(), productSaga(), typeProductSaga()])
}