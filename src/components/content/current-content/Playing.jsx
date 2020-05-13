import React, { useContext } from "react";
import { storeContext } from "./../../../global/store";
import AudioPlayer from "react-h5-audio-player";

const Playing = ({ audio }) => {
  const { store } = useContext(storeContext);
  const bg = store.theme === "light" ? "bg-light2" : "bg-darker";
  return (
    <div className={`${bg} h-24 overflow-hidden shadow-lg`}>
      <AudioPlayer
        className={bg}
        layout="horizontal"
        showJumpControls={false}
        src={`https://lyrics-scraper.herokuapp.com/getAudio/${audio}`}
        loop={true}
      />
    </div>
  );
};

export default Playing;
