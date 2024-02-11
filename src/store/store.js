import { configureStore } from "@reduxjs/toolkit";
import coindagesSlice from "features/slices/coindagesSlice";

export const store = configureStore({
    reducer:{
  coindagesData: coindagesSlice,
    }
})