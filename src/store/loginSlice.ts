import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  login: boolean;
}

const initialState: LoginState = {
  login: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.login = action.payload;
    },
    logout(state) {
      state.login = false;
    },
  },
});

export const selectIsLoggedIn = (state: { login: LoginState }) => state.login.login;

export const { setLogin, logout } = loginSlice.actions;

export default loginSlice.reducer;

export type { LoginState };
