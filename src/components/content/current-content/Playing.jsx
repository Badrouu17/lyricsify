import React, { useState, useContext } from "react";
import { useLocation, Prompt } from "react-router-dom";

import { storeContext } from "./../../../global/store";
import AudioPlayer from "react-h5-audio-player";
import Loader from "react-loader-spinner";

const Playing = ({ audio }) => {
  let location = useLocation();
  const [playing, setPlaying] = useState(false);

  const { store } = useContext(storeContext);

  const bg = store.theme === "light" ? "bg-light2" : "bg-darker";

  return (
    <div className={`${bg} h-24 overflow-hidden shadow-lg`}>
      <Prompt
        when={location.pathname === "/current" && playing}
        message={() => "The song will quite if you continue, are you sure ?"}
      />
      <AudioPlayer
        onPlay={() => setPlaying(true)}
        defaultCurrentTime={"00:00"}
        defaultDuration={
          <Loader type="Oval" color="#9f7aea" height={25} width={25}></Loader>
        }
        className={bg}
        layout="horizontal"
        showJumpControls={false}
        src={`https://lyrics-scraper.herokuapp.com/getAudio/${
          audio ? audio : ""
        }`}
        loop={true}
        progressUpdateInterval={20}
        progressJumpSteps={{ backward: 5000, forward: 5000 }}
      />
    </div>
  );
};

export default Playing;
