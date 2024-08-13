import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export  interface PageState {
  pageTitle: string;
}

const initialState: PageState = {
  pageTitle: 'Dashboard',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
    },
  },
});

export const { setPageTitle } = pageSlice.actions;

export default pageSlice.reducer;
