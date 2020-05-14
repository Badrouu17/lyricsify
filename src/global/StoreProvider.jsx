import React, { useState, useMemo } from "react";
import { storeContext } from "./store";
import defaultSong from "./../services/default.json";

// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    theme: "dark",
    currentSong: defaultSong,
  });

  const storeValue = useMemo(() => ({ store, setStore }), [store, setStore]);

  return (
    <storeContext.Provider value={storeValue}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
