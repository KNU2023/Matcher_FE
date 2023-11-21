import { createSlice } from "@reduxjs/toolkit";

const reserveSlice = createSlice({
    name: "reserveData",
    initialState: {
        items: [
            [],
        ],
    }, reducers: {
        replaceReserveData(state, action) {
            state.items = action.payload.items;
        },

    }
});


export const { reserveAction, replaceReserveData } = reserveSlice.actions;

export default reserveSlice;