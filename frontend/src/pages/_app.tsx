import rootReducer from "@/modules";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThemeProvider } from "styled-components";

const store = legacy_createStore(rootReducer, composeWithDevTools());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
