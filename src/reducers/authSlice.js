import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    role: JSON.parse(localStorage.getItem("role"))
      ? JSON.parse(localStorage.getItem("role"))
      : null,
  },
  reducers: {
    isPending(state) {
      state.isLoading = true;
    },
    isLogin(state, action) {
      state.isLoading = false;
      state.role = action.payload;
    },
    isSuccess(state) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = authSlice;

export const { isPending, isLogin, isSuccess } = actions;

export const selectRole = (state) => state.auth.role;
export const selectLoading = (state) => state.auth.isLoading;
export default reducer;
