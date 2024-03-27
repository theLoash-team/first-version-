import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  current_lang: "en-us",
};
const translate_slice = createSlice({
  name: "translate",
  initialState: initialState,
  reducers: {
    toggling: (state, actions) => {
      state.current_lang = actions.payload.newLang;
      console.log(state.current_lang);
    },
  },
});
export const { toggling } = translate_slice.actions;

export default translate_slice.reducer;