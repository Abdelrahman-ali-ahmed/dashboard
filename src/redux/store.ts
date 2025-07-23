import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
  },
});
