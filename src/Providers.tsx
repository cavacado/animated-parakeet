import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import Routes from "./Routes";
import Layout from "./components/Layout";
import store from "./data/store";
import services from "./services";
import { lightTheme, darkTheme, ThemeType } from "./utils/theme";
import "react-toggle/style.css";

export default function () {
  const [isLight, setTheme] = React.useState<boolean>(true);
  React.useLayoutEffect(() => {
    const userPreference =
      window?.matchMedia("(prefers-color-scheme: light")?.matches ?? true;
    setTheme(userPreference);
  }, []);
  return (
    <Provider store={store(services)}>
      <Router>
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Layout isLight={isLight} setTheme={setTheme}>
            <Routes />
          </Layout>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
  margin: 0;
  font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${(p) => p.theme.body};
  color: ${(p) => p.theme.text};
  transition: all 0.20s ease;
}
// global style-overwrite for the toggle component
.react-toggle--checked .react-toggle-track {
    background-color: ${(p) => p.theme.toggleBackground};
  }
.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${(p) => p.theme.toggleBackground}
}
.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${(p) => p.theme.toggleBackground}
}
.react-toggle--checked .react-toggle-thumb {
    border-color: ${(p) => p.theme.toggleBorder}
}
`;
