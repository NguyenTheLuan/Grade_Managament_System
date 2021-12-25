import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user_info",
  initialState: {
    full_info: null,
  },
  reducers: {
    getUserInfo(state, action) {
      state.full_info = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { getUserInfo } = actions;

export const selectUserInfo = (state) => state.user_info.full_info;
export default reducer;
