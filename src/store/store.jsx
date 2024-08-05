import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counter"

const store = configureStore({
    reducer: {
        counetSlice: counterSlice,
        // add more slice reducers here...
    }
})

export default store;