import React from "react";
import ReactDOM from "react-dom";
import "react-h5-audio-player/src/styles.scss";
import "./styles/main.css";
import "./scss/index.css";
import Main from "./Main.jsx";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById(`root`)
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
