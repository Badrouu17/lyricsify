import React, { useState } from "react";
import Header from "../Header";
import Card from "./Card";
import { getLikedList } from "./../../services/localStorage";

const Liked = () => {
  const [list, setList] = useState(getLikedList());

  return (
    <React.Fragment>
      <div className="mt-0 text-center overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">You Liked ❤</h2>
      </div>
      <div className="flex-1">
        <div className="liked pt-12 pb-10 overflow-y-auto">
          {list.map((song, i) => (
            <Card song={song} key={i} clickable liked></Card>
          ))}
          {/* <Card liked></Card>
          <Card liked></Card>
          <Card liked></Card>
          <Card liked></Card>
          <Card liked></Card> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Liked;
