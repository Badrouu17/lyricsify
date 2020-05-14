import React, { useContext } from "react";
import { storeContext } from "./../../../global/store";
import AudioPlayer from "react-h5-audio-player";
import Loader from "react-loader-spinner";

const Playing = ({ audio }) => {
  const { store } = useContext(storeContext);
  const bg = store.theme === "light" ? "bg-light2" : "bg-darker";
  return (
    <div className={`${bg} h-24 overflow-hidden shadow-lg`}>
      <AudioPlayer
        // defaultCurrentTime={"wait..."}
        // defaultDuration={"wait..."}
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
