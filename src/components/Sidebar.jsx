import React from "react";
import { NavLink } from "react-router-dom";

import { IconContext } from "react-icons";
import {
  IoIosSearch,
  IoIosFlame,
  IoIosHeart,
  IoIosMusicalNote,
} from "react-icons/io";

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right bottom, #6b46c1,#b794f4)",
      }}
      className="sidebar bg-purple-400 w-1/5 flex-none flex flex-col font-semibold"
    >
      <div className="p-10 flex flex-col items-center overflow-hidden shadow-lg">
        <img
          className=" flex-1"
          height="120"
          width="120"
          src={require("./../Lyricsify.png")}
        />
      </div>
      <IconContext.Provider value={{ size: "1.5em", style: { color: "#fff" } }}>
        <ul className="ml-20 mt-6 mb-24 py-6 text-4xl font-bold">
          <li className="mt-6">
            <NavLink to="/" className="flex items-center mx-4 mt-4 group">
              <IoIosSearch></IoIosSearch>
              <span className="ml-6 text-white group-hover:text-white">
                Search
              </span>
            </NavLink>
          </li>
          <li className="mt-6">
            <NavLink to="/" className="flex items-center mx-4 mt-4 group">
              <IoIosFlame></IoIosFlame>
              <span className="ml-6 text-white group-hover:text-white">
                Hot Now
              </span>
            </NavLink>
          </li>
          <li className="mt-6">
            <NavLink to="/" className="flex items-center mx-4 mt-4 group">
              <IoIosHeart></IoIosHeart>
              <span className="ml-6 text-white group-hover:text-white">
                You Liked
              </span>
            </NavLink>
          </li>
          <li className="mt-6">
            <NavLink to="/" className="flex items-center mx-4 mt-4 group">
              <IoIosMusicalNote></IoIosMusicalNote>
              <span className="ml-6 text-white group-hover:text-white">
                Current
              </span>
            </NavLink>
          </li>
        </ul>
      </IconContext.Provider>
      <div className=" mt-56 text-center text-xl text-white opacity-75">
        <p>built with ❤ by Badreddin laabed.</p>
      </div>
    </div>
  );
};

export default Sidebar;
