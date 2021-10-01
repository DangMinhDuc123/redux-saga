import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
        err: null,
        loading: false,
    },
    reducers: {
        fetchProductList(state, action) {
            state.loading = true;
        },
        fetchProductListSuccess(state, action) {
            state.list = action.payload;
            state.loading = false;

        },
        fetchProductListFail(state, action) {
            state.loading = false;
        }
    }
})
// actions
export const productActions = productSlice.actions;
// selectors
export const selectProductList = (state) => state.product.list;
export const selectProductLoading = (state) => state.product.loading;
// reducers
const productReducer = productSlice.reducer;
export default productReducer;