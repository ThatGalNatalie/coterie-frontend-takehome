import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  info: [],
  basics: [],
  finance: [],
};

const quesitionSlice = createSlice({
  name: 'quesitions',
  initialState,
  reducers: {
    addBusinessInfo: (state, action) => {
      state.info = action.payload;
    },
    addBusinessBasics: (state, action) => {
      state.basics = action.payload;
    },
    addBusinessFinance: (state, action) => {
      state.finance = action.payload;
    },
  },
});

export const {
  addBusinessInfo,
  addBusinessBasics,
  addBusinessFinance,
} = quesitionSlice.actions;

export const quesitionSelector = (state) => state;

export default quesitionSlice.reducer;
