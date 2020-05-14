import React, { useContext, useEffect } from "react";
import { storeContext } from "./../../global/store";
import Song from "./current-content/Song";
import Lyrics from "./current-content/Lyrics";
import Playing from "./current-content/Playing";
import { getCurrentSong } from "./../../services/localStorage";

const Current = () => {
  const { store, setStore } = useContext(storeContext);

  useEffect(() => {
    const currentSong = getCurrentSong();
    if (!currentSong) {
      setStore({ ...store });
    } else {
      setStore({ ...store, currentSong });
    }
  }, []);

  const {
    currentSong: { artist, artwork, title, url, views, audio },
  } = store;

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-row">
        <Song song={{ artist, artwork, title, views }}></Song>
        <Lyrics url={url}></Lyrics>
      </div>
      <Playing audio={audio}></Playing>
    </div>
  );
};

export default Current;
