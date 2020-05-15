import React, { useState } from "react";
import Header from "../Header";
import Card from "./Card";
import { getLikedList } from "./../../services/localStorage";

const Liked = () => {
  const [list] = useState(getLikedList());

  return (
    <React.Fragment>
      <div className="mt-0 text-center overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">You Liked ❤</h2>
      </div>
      <div className="flex-1">
        <div className="liked pt-12 pb-10 overflow-y-auto">
          {list && list.length > 0 ? (
            list.map((song, i) => (
              <Card song={song} key={i} clickable liked></Card>
            ))
          ) : (
            <div className="text-center mt-64 opacity-50">
              <p>Your liked list is empty.</p>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Liked;
