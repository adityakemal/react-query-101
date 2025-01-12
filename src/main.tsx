import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const defaultOptions: any = {
  queries: {
    refetchOnWindowFocus: false, // canggih bro
    throwOnError: (error: any) => {
      // Handle the error globally
      console.error("An error occurred:", error.message);
    },
    // networkMode: "of",
  },
};

const queryClient = new QueryClient({
  defaultOptions: defaultOptions,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
