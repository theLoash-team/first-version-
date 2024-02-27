import { configureStore } from "@reduxjs/toolkit";
import translateReducer from "@/reducers/translate";
export const store = configureStore({
  reducer: {
    translate: translateReducer,
  },
});
