import React, { useState, useMemo } from "react";
import { storeContext } from "./store";

const defaultSong = {
  artist: "Drake",
  artwork:
    "https://images.genius.com/d1e8086df6792850f0d9ba31ffbd2ad3.1000x1000x1.jpg",
  number: 0,
  title: "War",
  url: null,
  views: 913824,
  audio: null,
};

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
