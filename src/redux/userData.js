import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reload: false,
  trial: 0,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setReload: (state, action) => {
      state.reload = action.payload;
    },
    setTrial: (state) => {
      state.trial = +state.trial;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReload, setTrial } = userDataSlice.actions;

export default userDataSlice.reducer;
