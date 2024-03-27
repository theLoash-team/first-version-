import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/reducers/userStore";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
