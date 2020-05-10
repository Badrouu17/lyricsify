import React from "react";
import LikedResults from "./LikedResults";

const Liked = () => {
  return (
    <React.Fragment>
      <div className="mt-0 text-center text-white overflow-hidden shadow-lg pb-8">
        <h2>You Liked ❤</h2>
      </div>
      <div className="flex-1">
        <LikedResults></LikedResults>
      </div>
    </React.Fragment>
  );
};

export default Liked;
