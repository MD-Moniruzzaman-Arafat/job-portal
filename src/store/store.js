import { configureStore } from '@reduxjs/toolkit';
import pageCounterReducer from '../feature/pageCount/pageCountSlice';

export const store = configureStore({
  reducer: {
    pageCount: pageCounterReducer,
  },
});
