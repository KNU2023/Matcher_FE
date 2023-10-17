import { createSlice } from "@reduxjs/toolkit";

const mailCategorySlice = createSlice({
    name: "mailCategory",
    initialState: {
        isActive: false,
    }, reducers: {
        setIsActive: (state, action) => {
            state.isActive = action.payload;
        }
    }
});


export const { setIsActive } = mailCategorySlice.actions;

export default mailCategorySlice;