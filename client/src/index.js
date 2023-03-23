import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./redux/store";
import "./index.css";
import Spinner from "./components/atoms/Spinner/Spinner";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={<Spinner />} persistor={persistedStore}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
