import { createSlice } from "@reduxjs/toolkit";

const jobPostCategorySlice = createSlice({
    name: "jobPostCategory",
    initialState:{
        isActive: false,
    }, reducers:{
        setIsActive: (state, action) => {
            state.isActive = action.payload;
        }
    }
});


export const { setIsActive } = jobPostCategorySlice.actions;

export default jobPostCategorySlice;