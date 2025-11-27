import { QueryClient, QueryClientProvider } from "react-query";
import { DodamGlobalStyles, DodamThemeProvider, ETheme } from "@b1nd/dds-web";
import { Router } from "./shared/Router";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  return (
    <DodamThemeProvider theme={ETheme.LIGHT}>
      <QueryClientProvider client={queryClient}>
        <B1ndToastContainer autoClose={1000} limit={1} />
        <DodamGlobalStyles />
        <Router />
      </QueryClientProvider>
    </DodamThemeProvider>
  );
}

export default App;
