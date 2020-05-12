import React from "react";
import Header from "../Header";
import Card from "./Card";

const Liked = () => {
  return (
    <React.Fragment>
      <div className="mt-0 text-center overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">You Liked ❤</h2>
      </div>
      <div className="flex-1">
        <div className="liked pt-12 pb-10 overflow-y-auto">
          <Card liked></Card>
          <Card liked></Card>
          <Card liked></Card>
          <Card liked></Card>
          <Card liked></Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Liked;
