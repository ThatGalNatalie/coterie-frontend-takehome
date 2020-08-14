import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createDispatchHook } from 'react-redux';

// Then, handle actions in your reducers:
const testSlice = createSlice({
  name: 'test',
  initialState: {
    loading: false,
    hasErrors: false,
    posts: [],
  },
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Later, dispatch the thunk as needed in the app
export default testSlice.reducer;
export const { getPosts, getPostsSuccess, getPostsFailure } = testSlice.actions;

// dispatch(fetchUserById(123))

// First, create the thunk
export const fetchTest = createAsyncThunk(
  'test/fetchTest',
  async (userId, thunkAPI) => {
    thunkAPI.dispatch(getPosts());
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      thunkAPI.dispatch(getPostsSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(getPostsFailure());
    }
  }
);
