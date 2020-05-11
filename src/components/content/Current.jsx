import React from "react";
import Song from "./Song";
import Lyrics from "./Lyrics";
import Playing from "./Playing";

const Current = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-row">
        <Song></Song>
        <Lyrics></Lyrics>
      </div>
      <Playing></Playing>
    </div>
  );
};

export default Current;
