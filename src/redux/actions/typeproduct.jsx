import * as type from '../constants/typeProduct';

export const listTypeProducts = (typeProduct) => {
    return {
        type: type.FTECH_LIST,
        payload: typeProduct
    }
};