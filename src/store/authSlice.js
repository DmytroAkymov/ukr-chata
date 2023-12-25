import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

export const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleIsLogged(state, action) {
      state.isLogged = action
    },
  },
});

export const { toggleIsLogged } =
  authSlice.actions;

export default authSlice.reducer;