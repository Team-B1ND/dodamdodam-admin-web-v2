import { QueryClient, QueryClientProvider } from "react-query";
import { DodamGlobalStyles, DodamThemeProvider, ETheme } from "@b1nd/dds-web";
import { Router } from "./shared/Router";
import { useThemes } from "./hooks/Theme/useThemes";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  const { themeColor } = useThemes();
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <DodamThemeProvider theme={ETheme.LIGHT}>
        <QueryClientProvider client={queryClient}>
          <B1ndToastContainer autoClose={1000} limit={1} />
          <DodamGlobalStyles />
          <Router />
        </QueryClientProvider>
      </DodamThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
