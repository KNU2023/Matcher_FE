import { createSlice } from "@reduxjs/toolkit";

const reserveCategorySlice = createSlice({
    name: "reserveCategory",
    initialState:{
        isActive: false,
    }, reducers:{
        setIsActive: (state, action) => {
            state.isActive = action.payload;
        }
    }
});


export const { setIsActive } = reserveCategorySlice.actions;

export default reserveCategorySlice;