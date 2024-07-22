import React from "react";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./store";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./routes";
import { darkTheme, lightTheme } from "./constants/theme";

const queryClient = new QueryClient();

const ThemedApp: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemedApp />
        <ReactQueryDevtools
          initialIsOpen={false}
          position="left"
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </Provider>
  );
}
