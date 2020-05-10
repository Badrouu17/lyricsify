import React from "react";
import Card from "./Card";

const LikedResults = () => {
  return (
    <div className="liked pt-12 pb-10 overflow-y-auto">
      <Card liked></Card>
      <Card liked></Card>
      <Card liked></Card>
      <Card liked></Card>
      <Card liked></Card>
    </div>
  );
};

export default LikedResults;
