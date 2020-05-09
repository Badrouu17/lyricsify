import React from "react";

// eslint-disable-next-line react/prop-types
const DashboardContainer = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-sm text-gray-400 bg-gray-900">
      <div className="flex flex-1 overflow-y-hidden ">{children}</div>
    </div>
  );
};

export default DashboardContainer;
