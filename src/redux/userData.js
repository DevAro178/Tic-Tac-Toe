import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "userData",
  initialState: {
    board: Array(9).fill(null),
  },
  reducers: {
    boardclicked: (state, action) => {
      const { index, userId } = action.payload;
      state.board = state.board.map((value, i) =>
        i === index ? userId : value
      );
    },
    decremented: (state) => {
      state.CounterValue -= 1;
    },
  },
});

export const { boardclicked, decremented } = userData.actions;

export default userData.reducer;
