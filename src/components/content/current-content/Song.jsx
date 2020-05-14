import React, { useState, useContext, useEffect } from "react";
import { storeContext } from "./../../../global/store";

import Card from "../Card";
import { IconContext } from "react-icons";
import { IoIosEye, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import {
  addToLiked,
  removeFromLiked,
  isLiked,
} from "./../../../services/localStorage";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + " K"
    : Math.sign(num) * Math.abs(num);
}

function mFormatter(k) {
  let num = k.replace(" K", "");
  num = parseInt(num, 10);
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + " M"
    : k;
}

const Song = ({ song }) => {
  const { store, setStore } = useContext(storeContext);
  const [liked, setLiked] = useState(isLiked(store.currentSong));

  useEffect(() => {
    setLiked(isLiked(store.currentSong));
  });

  const iconColor = store.theme === "light" ? "#9f7aea" : "#fff";

  const handleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
    !liked
      ? addToLiked({ ...store.currentSong })
      : removeFromLiked({ ...store.currentSong });
  };

  return (
    <div className="w-1/3 py-32 overflow-hidden shadow-lg flex flex-col">
      <Card song={song}></Card>
      <div className="flex flex-col text-4xl">
        <IconContext.Provider
          value={{ size: "1em", style: { color: iconColor } }}
        >
          <div className="mt-4 flex flex-row items-center justify-center">
            <span className=" w-1/2">{mFormatter(kFormatter(song.views))}</span>
            <IoIosEye></IoIosEye>
          </div>
          <div
            onClick={(e) => {
              handleLike(e);
            }}
            className=" cursor-pointer mt-4 flex flex-row items-center justify-center"
          >
            <span className=" w-1/2">Add to liked</span>
            {!liked ? (
              <IoIosHeartEmpty></IoIosHeartEmpty>
            ) : (
              <IoIosHeart></IoIosHeart>
            )}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Song;
