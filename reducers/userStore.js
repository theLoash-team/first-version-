import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "null",
};
const user_slice = createSlice({
  name: "userStore",
  initialState: initialState,
  reducers: {
    theme: () => {},
  },
});
export const { theme } = user_slice.actions;

export default user_slice.reducer;
