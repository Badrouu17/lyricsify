import React, { useContext } from "react";
import { storeContext } from "./../../../global/store";

const Playing = () => {
  const { store, setStore } = useContext(storeContext);
  const bg = store.theme === "light" ? "bg-lighter" : "bg-darker";
  return <div className={`${bg} h-24 overflow-hidden shadow-lg`}></div>;
};

export default Playing;
