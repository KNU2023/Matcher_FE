import { configureStore } from "@reduxjs/toolkit";
import jobPostCategorySlice from "./jobPostCategorySlice";
import mailCategorySlice from "./mailCategorySlice";
import reserveCategorySlice from "./reserveCategorySlice";

const store = configureStore({
    reducer: {
        jobPostCategory: jobPostCategorySlice.reducer,
        mailCategory: mailCategorySlice.reducer,
        reserveCategory: reserveCategorySlice.reducer,
    }
})

export default store;