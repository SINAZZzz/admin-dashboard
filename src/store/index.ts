import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    pageName: pageNameReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
