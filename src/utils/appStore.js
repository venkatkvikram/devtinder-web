import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connections.slice";
import requestsReducer from "./requests.slice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        feed: feedReducer,
        connections: connectionReducer,
        requests: requestsReducer
    },
})


export default appStore;