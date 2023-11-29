import { createSlice } from "@reduxjs/toolkit";

const reserveSlice = createSlice({
    name: "reserveData",
    initialState: {
        formData: {
            title: '',
            content: '',
            rowSize: 0,
            colSize: 0,
            disableSeatList: [],
        },
    }, reducers: {
        updateReserveData(state, action) {
            state.formData = { ...state.formData, ...action.payload };
        },

    }
});


export const reserveAction = reserveSlice.actions;

export default reserveSlice;