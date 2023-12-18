import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice.js";   


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddlerware) => getDefaultMiddlerware().concat(apiSlice.middleware),
    devTools: true
});

export default store;