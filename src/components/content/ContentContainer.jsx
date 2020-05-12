import React, { useContext } from "react";
import { storeContext } from "./../../global/store";

// eslint-disable-next-line react/prop-types
const ContentContainer = ({ children }) => {
  const { store } = useContext(storeContext);

  return (
    <div
      className={`${store.theme} text-6xl font-extrabold flex-1 flex flex-col`}
    >
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default ContentContainer;
