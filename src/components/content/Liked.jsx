import React from "react";
import LikedResults from "./LikedResults";
import Header from "../Header";

const Liked = () => {
  return (
    <React.Fragment>
      <div className="mt-0 text-center text-white overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">You Liked ❤</h2>
      </div>
      <div className="flex-1">
        <LikedResults></LikedResults>
      </div>
    </React.Fragment>
  );
};

export default Liked;
