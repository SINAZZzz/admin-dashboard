import { createSlice } from "@reduxjs/toolkit";

interface NameState {
  name: string;
}

const initialState: NameState = {
  name: 'Dashboard',
};

const pageNameSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    toggleName(state) {
      state.name = state;
    },
  },
});

export const { toggleName } = pageNameSlice.actions;

export default pageNameSlice.reducer;

export type { NameState };
