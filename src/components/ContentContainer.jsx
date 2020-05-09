import React from "react";

// eslint-disable-next-line react/prop-types
const ContentContainer = ({ children }) => {
  return <div className=" bg-dark flex-1"> {children} </div>;
};

export default ContentContainer;
