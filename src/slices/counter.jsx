import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 18,
        name: "John"
    },
    reducers: {
        increment(state, action) {
            console.log("increment", action)
            state.value = state.value + action.payload
        },
        nameUpdate(state, action) {
            state.name = "Bob"
        }
    }
})

export const { increment, nameUpdate } = counterSlice.actions;

export default counterSlice.reducer