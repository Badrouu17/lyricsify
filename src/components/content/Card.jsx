import React, { useState } from "react";
import { getYoutubeId } from "./../../services/getYoutubId";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import { storeCurrentSong } from "./../../services/localStorage";

// eslint-disable-next-line react/prop-types
const Card = ({ song, liked }) => {
  const [go, setGo] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await getYoutubeId(song.title, song.artist);
    if (response.isError) {
      return alert("something wrong happened!");
    }
    const audio = response.data.items[0].id.videoId;
    storeCurrentSong({ ...song, audio });
    setGo(true);
    setLoading(false);
  };

  if (loading)
    return (
      <div className="flex flex-row items-center justify-center pt-8 pb-10">
        <Loader type="Oval" color="#9f7aea" height={150} width={150}></Loader>
      </div>
    );

  if (go) return <Redirect exact push to="/dashboard/current"></Redirect>;

  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      className={`cursor-pointer flex ${
        liked ? "flex-row justify-center ml-20" : "flex-col"
      } `}
    >
      <div className="self-center bg-transparent max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full self-center"
          // eslint-disable-next-line no-undef
          // src={require("./cover.jpg")}
          src={song && song.artwork}
          alt="Sunset in the mountains"
        />
      </div>
      <div className={`text-center px-6 ${liked ? "pt-32" : "py-4"}`}>
        <div className="font-bolder text-4xl mb-2">{song && song.title}</div>
        <p className="text-gray-600 text-base">By {song && song.artist}</p>
      </div>
    </div>
  );
};

export default Card;
