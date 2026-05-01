import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from '../feature/currentUser/currentUserSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});
