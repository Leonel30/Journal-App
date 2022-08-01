import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlices/authSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice
    }
});