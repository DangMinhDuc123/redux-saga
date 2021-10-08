import { createSlice, createSelector } from '@reduxjs/toolkit'


const typeProductSlice = createSlice({
    name: 'typeProduct',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchTypeProductList(state, action) {
            state.loading = true;
        },
        fetchTypeProductListSuccess(state, action) {
            state.list = action.payload;
            state.loading = false;
        },
        fetchTypeProductListFaile(state, action) {
            state.loading = false;
        }

    }
})

// actions

export const typeProductActions = typeProductSlice.actions;

// selector

export const selectTypeProductList = (state) => state.typeProduct.list;
export const selectTypeProductLoading = (state) => state.typeProduct.loading;
export const selectTypeProductMap = createSelector(selectTypeProductList, (typeProList) =>
    typeProList.reduce((map, typePro) => {
        map[typePro.id] = typePro;
        return map
    }, {})
)

export const selectTypeProOptions = createSelector(selectTypeProductList, (typeProList) =>
    typeProList.map((typePro) => ({
        label: typePro.name,
        value: typePro.id
    }))
);




const typeProductReducer = typeProductSlice.reducer;
export default typeProductReducer;