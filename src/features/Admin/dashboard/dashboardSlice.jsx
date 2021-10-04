import { createSlice } from '@reduxjs/toolkit'

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {},
    loading: false,
    reducers: {
        fetchDashboard(state) {
            state.loading = true;
        },
        fetchDashboardSuccess(state) {
            state.loading = false;
        },
        fetchDashboardFaile(state) {
            state.loading = false;
        },
    },
})

//actions
export const dashboardActions = dashboardSlice.actions;


// selector
export const selectdashboardLoading = (state) => state.dashboard.loading;

// reducers
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;