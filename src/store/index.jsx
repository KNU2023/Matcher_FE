import { configureStore } from "@reduxjs/toolkit";
import jobPostCategorySlice from "./jobPostCategorySlice";
import mailCategorySlice from "./mailCategorySlice";
import reserveCategorySlice from "./reserveCategorySlice";
// import createSeatSlice from "./createSeatSlice";

const store = configureStore({
    reducer: {
        jobPostCategory: jobPostCategorySlice.reducer,
        mailCategory: mailCategorySlice.reducer,
        reserveCategory: reserveCategorySlice.reducer,
        // createSeat : createSeatSlice.reducer,
    }
})

export default store;