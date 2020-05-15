import React, { useState } from "react";
import Card from "./Card";
import Header from "../Header";
import hot from "./../../services/hot.json";

const Hot = () => {
  const [list] = useState(hot);

  return (
    <React.Fragment>
      <div className="text-center overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">
          Most Viewed <span></span> 💥
        </h2>
      </div>
      <div className="flex-1">
        <div className="hot pt-12 pb-10 overflow-y-auto">
          {list.map((song, i) => (
            <Card song={song} key={i} clickable></Card>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hot;
