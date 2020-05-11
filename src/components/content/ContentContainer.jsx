import React from "react";

// eslint-disable-next-line react/prop-types
const ContentContainer = ({ children }) => {
  return (
    <div className="bg-dark text-6xl font-extrabold flex-1 flex flex-col">
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default ContentContainer;
