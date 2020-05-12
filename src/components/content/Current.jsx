import React from "react";
import Song from "./current-content/Song";
import Lyrics from "./current-content/Lyrics";
import Playing from "./current-content/Playing";

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
