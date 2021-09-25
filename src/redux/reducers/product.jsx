import * as type from '../constants/product';

const initialState = {
    product: [],
    err: null,
    loading: false,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_PRODUCTLIST_REQUESTED:
        case type.CREATE_PRODUCT_SUCCSESS:
            return {
                ...state,
                loading: true,
            };

        case type.GET_PRODUCTLIST_SUCCSESS:
            return {
                ...state,
                loading: false,
                product: action.product,
            };
        case type.CREATE_PRODUCT_START:
            return {
                ...state,
                loading: false,
            }

        case type.GET_PRODUCTLIST_FAIL:
        case type.CREATE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                err: action.message,
            }

        default: {
            return state;
        }

    }
}

export default productReducer;