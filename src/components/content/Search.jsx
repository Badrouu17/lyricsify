import React from "react";
import SearchResults from "./SearchResults";
import Header from "../Header";

const Search = () => {
  return (
    <React.Fragment>
      <Header search></Header>
      <div className="mt-0 text-center overflow-hidden shadow-lg pb-8">
        <h3>Search for your favorite songs</h3>
        <form className="mt-10 w-full flex flex-row justify-between">
          <div className="w-1/3 flex-none flex flex-wrap mx-6 font-bold">
            <input
              className="font-bold text-center shadow appearance-none border block w-full text-dark  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="artist"
              type="text"
              placeHolder="Artist"
            />
          </div>
          <div className="flex-2 md:w-1/2 mx-6">
            <input
              className="font-bold text-center shadow appearance-none border block w-full text-dark  rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="song-name"
              type="text"
              placeHolder="Song name"
            />
          </div>
          <div className="flex-1 md:w-1/2 mx-6">
            <button
              className="appearance-none block w-full bg-purple-400 text-white font-bold rounded-full py-3 px-4 leading-tight focus:outline-none "
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <SearchResults></SearchResults>
      </div>
    </React.Fragment>
  );
};

export default Search;
