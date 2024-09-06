import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { theme } from "./config/chakra-theme.ts";
import "./styles/fonts.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={client}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
