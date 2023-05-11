import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./reducers/CategorySlice";

export const store = configureStore({
    reducer : {
        category:CategorySlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch