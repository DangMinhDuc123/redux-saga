import { combineReducers } from "redux";
import productReducer from "./product";
import modalReducer from "./modal"
import typeProductReducer from "./typeproduct"

const rootReducer = combineReducers({
    productReducer: productReducer,
    modalReducer: modalReducer,
    typeProductReducer: typeProductReducer
});

export default rootReducer;