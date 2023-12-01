import { createSlice } from "@reduxjs/toolkit";

const jobPostSlice = createSlice({
    name: "jobData",
    initialState: {
        formData: {
            title: '',
            content: '',
        },
    }, reducers: {
        updateJobData(state, action) {
            state.formData = { ...state.formData, ...action.payload };
        },

    }
});


export const jobAction = jobPostSlice.actions;

export default jobPostSlice;