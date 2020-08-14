import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  quotes: [],
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    getQuotes: (state) => {
      state.loading = true;
    },
    getQuotesSuccess: (state, { payload }) => {
      state.quotes = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getQuotesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getQuotes,
  getQuotesSuccess,
  getQuotesFailure,
} = quotesSlice.actions;

// The reducer
export default quotesSlice.reducer;

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async (input, thunkAPI) => {
    thunkAPI.dispatch(getQuotes());

    try {
      const response = await fetch(
        'https://api-sandbox.coterieinsurance.com/v1/commercial/applications',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'token 73920c6f-d530-419c-87b3-4f4762e05e9d',
          },
          body: JSON.stringify(input),
        }
      );
      const data = await response.json();
      thunkAPI.dispatch(getQuotesSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(getQuotesFailure());
    }
  }
);
