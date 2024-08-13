import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import pageReducer from './pageSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    page: pageReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
