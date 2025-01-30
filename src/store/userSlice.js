import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  userData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },

    userLogout: (state) => {
      state.user = false;
      state.userData = [];
    },

    userInfo: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { userLogin, userLogout, userInfo } = userSlice.actions;
export default userSlice.reducer;
