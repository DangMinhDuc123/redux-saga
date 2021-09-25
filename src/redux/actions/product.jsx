import * as type from '../constants/product';

export const listProducts = (product) => {
    return {
        type: type.GET_PRODUCTLIST_REQUESTED,
        payload: product
    }
};


export const createProduct = (product) => {
    return {
        type: type.CREATE_PRODUCT_START,
        payload: product
    }
};


export const createProductSuccess = () => {
    return {
        type: type.CREATE_PRODUCT_SUCCSESS,
    }
};


export const createProductError = (err) => {
    return {
        type: type.CREATE_PRODUCT_FAIL,
        payload: err
    }
};

