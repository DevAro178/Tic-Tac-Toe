import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reload: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setReload: (state, action) => {
      state.reload = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReload } = userDataSlice.actions;

export default userDataSlice.reducer;
