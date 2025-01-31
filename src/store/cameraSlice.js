import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  camera: false,
  cameraData: [],
};

const cameraSlice = createSlice({
  name: "cameras",
  initialState,
  reducers: {
    cameraInfo: (state, action) => {
      state.cameraData = action.payload;
    },
  },
});

export const { cameraInfo } = cameraSlice.actions;
export default cameraSlice.reducer;
