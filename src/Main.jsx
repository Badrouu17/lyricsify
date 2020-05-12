import React from "react";
import App from "./routes/App";
import StoreProvider from "./global/StoreProvider";

function Main() {
  return (
    <StoreProvider>
      <App></App>
    </StoreProvider>
  );
}

export default Main;
