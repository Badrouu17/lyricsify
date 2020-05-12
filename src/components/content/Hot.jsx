import React from "react";
import Card from "./Card";
import Header from "../Header";

const Hot = () => {
  return (
    <React.Fragment>
      <div className="text-center overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">Hot now 💥</h2>
      </div>
      <div className="flex-1">
        <div className="hot pt-12 pb-10 overflow-y-auto">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hot;
