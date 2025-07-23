import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.login = !state.login;
    },
  },
});

export const { toggleLogin} = loginSlice.actions;
export default loginSlice.reducer;