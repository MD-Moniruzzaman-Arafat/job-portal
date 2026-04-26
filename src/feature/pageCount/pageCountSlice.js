import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

const pageCountSlice = createSlice({
  name: 'pageCount',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.page += 1;
    },
  },
});

export const { increment } = pageCountSlice.actions;
export default pageCountSlice.reducer;
