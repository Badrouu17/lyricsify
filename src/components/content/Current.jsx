import React, { useContext } from "react";
import { storeContext } from "./../../global/store";
import Song from "./current-content/Song";
import Lyrics from "./current-content/Lyrics";
import Playing from "./current-content/Playing";

const Current = () => {
  const { store, setStore } = useContext(storeContext);

  const {
    currentSong: { artist, artwork, title, url, views, liked, audio },
  } = store;

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-row">
        <Song song={{ artist, artwork, title, views, liked }}></Song>
        <Lyrics url={url}></Lyrics>
      </div>
      <Playing audio={audio}></Playing>
    </div>
  );
};

export default Current;
