import rootReducer from "modules";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = legacy_createStore(rootReducer, composeWithDevTools());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
