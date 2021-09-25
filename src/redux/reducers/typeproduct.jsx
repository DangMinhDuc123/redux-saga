import * as type from '../constants/typeProduct';

const initialState = {
    typeProduct: [],
    loading: false,
    err: null
}

const typeProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FTECH_LIST: {
            return {
                ...state,
                loading: true,
            }
        }
        case type.FTECH_LIST_SUCCSESS: {
            return {
                ...state,
                typeProduct: action.typeProduct,
                loading: false,
            }
        }
        case type.FTECH_LIST_FAIL: {
            return {
                ...state,
                err: action.message,
                loading: false,
            }
        }
        default:
            return state;
    }
}

export default typeProductReducer;