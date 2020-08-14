import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Reducers
import questionSlice from '../features/quesitionSlice';
import quotesSlice from '../features/quotesSlice';

const reducer = combineReducers({
  questionSlice,
  quotesSlice,
});

const store = configureStore({
  reducer,
});
export default store;
