import { configureStore } from "@reduxjs/toolkit";
import jobPostCategorySlice from "./jobPostCategorySlice";
import mailCategorySlice from "./mailCategorySlice";
import reserveCategorySlice from "./reserveCategorySlice";
import signUpSlice from "./signUpSlice";
import signInSlice from "./signInSlice";
import authSlice from "./authSlice";
import reserveSlice from "./reserveSlice";
import jobPostSlice from "./jobPostSlice";

const store = configureStore({
    reducer: {
        jobPostCategory: jobPostCategorySlice.reducer,
        mailCategory: mailCategorySlice.reducer,
        reserveCategory: reserveCategorySlice.reducer,
        signup: signUpSlice.reducer,
        signin: signInSlice.reducer,
        auth: authSlice.reducer,
        reserve: reserveSlice.reducer,
        jobpost: jobPostSlice.reducer,
    }
})

export default store;