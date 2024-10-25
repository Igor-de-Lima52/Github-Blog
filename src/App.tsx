import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { GitHubContextProvider } from "./contexts/GitHubContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubContextProvider>
          <Router />
        </GitHubContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}