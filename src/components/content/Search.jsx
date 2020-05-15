import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Header from "../Header";
import { getSongsData } from "./../../services/getSongsData";

const Search = () => {
  const [form, setForm] = useState({ artist: "", song: "" });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const searchHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.artist === "" && form.song === "") {
      setLoading(false);
      return alert("please fill at least one box to search");
    }
    const response = await getSongsData(form.song, form.artist);
    if (response.isError) {
      setLoading(false);
      return alert("something wrong happened!");
    }
    const songs = response.data.response.hits.map((hit, i) => {
      return {
        number: i,
        title: hit.result.title,
        url: hit.result.url,
        artist: hit.result.primary_artist.name,
        views: hit.result.stats.pageviews,
        artwork: hit.result.song_art_image_url,
        audio: null,
      };
    });
    const fiveSongs = songs.filter((song) => song.number <= 4);
    setResults(fiveSongs);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Header search></Header>
      <div className="mt-0 text-center overflow-hidden shadow-lg pb-8">
        <h3>Search for your favorite songs</h3>
        <form
          onSubmit={(e) => searchHandler(e)}
          className="mt-10 w-full flex flex-row justify-between"
        >
          <div className="w-1/3 flex-none flex flex-wrap mx-6 font-bold">
            <input
              onChange={(e) => {
                setForm({ ...form, artist: e.currentTarget.value });
              }}
              className="font-bold text-center shadow appearance-none border block w-full text-dark  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="artist"
              type="text"
              placeholder="Artist"
            />
          </div>
          <div className="flex-2 md:w-1/2 mx-6">
            <input
              onChange={(e) => {
                setForm({ ...form, song: e.currentTarget.value });
              }}
              className="font-bold text-center shadow appearance-none border block w-full text-dark  rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="song-name"
              type="text"
              placeholder="Song name"
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
        <SearchResults loading={loading} songs={results}></SearchResults>
      </div>
    </React.Fragment>
  );
};

export default Search;
