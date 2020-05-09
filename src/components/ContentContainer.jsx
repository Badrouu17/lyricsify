import React from "react";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const ContentContainer = ({ children }) => {
  return (
    <div className=" bg-dark flex-1 flex flex-col">
      <Header></Header>
      {children}
    </div>
  );
};

export default ContentContainer;
