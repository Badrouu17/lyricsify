import React, { useContext } from "react";
import { storeContext } from "./../../../global/store";

import Card from "../Card";
import { IconContext } from "react-icons";
import { IoIosEye, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Song = () => {
  const { store, setStore } = useContext(storeContext);

  const iconColor = store.theme === "light" ? "#9f7aea" : "#fff";

  return (
    <div className="w-1/3 py-32 overflow-hidden shadow-lg flex flex-col">
      <Card></Card>
      <div className="flex flex-col text-4xl">
        <IconContext.Provider
          value={{ size: "1em", style: { color: iconColor } }}
        >
          <div className="mt-4 flex flex-row items-center justify-center">
            <span className=" w-1/2"> 10,525,768</span>
            <IoIosEye></IoIosEye>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center">
            <span className=" w-1/2">Add to liked</span>
            <IoIosHeartEmpty></IoIosHeartEmpty>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Song;
