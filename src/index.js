import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStateProvider } from "./Context/GlobalStateProvider";
import reducer, { initialState } from "./Context/reducer";
import { ApiProvider } from "./Context/ApiProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider initialState={initialState} reducer={reducer}>
      <ApiProvider>
        <App />
      </ApiProvider>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
