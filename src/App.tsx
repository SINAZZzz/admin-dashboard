import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PanelLayout from "./layout/panel";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PanelLayout />
      <ReactQueryDevtools
        initialIsOpen={false}
        position="left"
        buttonPosition="bottom-left"
      />
    </QueryClientProvider>
  );
}
