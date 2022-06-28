import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  account: {
    open: false,
    ref: null,
  },
  notification: {
    open: false,
    ref: null,
  },
  search: {
    open: false,
  },
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    openAccount: (state, action) => {
      state.account.open = true;
      state.account.ref = action.payload.currentTarget;
    },
    closeAccount: (state) => {
      state.account.open = false;
      state.account.ref = null;
    },
    openNotifications: (state, action) => {
      state.notification.open = true;
      state.notification.ref = action.payload.currentTarget;
    },
    closeNotifications: (state) => {
      state.notification.open = false;
      state.notification.ref = null;
    },
    toggleSearchBar: (state) => {
      state.search.open = !state.search.open;
    },
  },
});

export const { openAccount, closeAccount, openNotifications, closeNotifications, toggleSearchBar } = navbarSlice.actions;

export default navbarSlice.reducer;
