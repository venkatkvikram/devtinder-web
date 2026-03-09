import { createSlice } from "@reduxjs/toolkit";

const requests = createSlice({
    name: "requests",
    initialState: {
        requests: []
    },
    reducers: {
        addRequests: (state, action) => {
            state.requests = action.payload;
        },
        removeRequest: (state, action) => {
            const newArray = state.requests.filter(request => request._id !== action.payload)
            state.requests = newArray;
        }
    }
});

export const { addRequests, removeRequest } = requests.actions;
export default requests.reducer;