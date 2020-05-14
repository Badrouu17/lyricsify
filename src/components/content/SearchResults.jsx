import React from "react";
import Card from "./Card";
import Loader from "react-loader-spinner";

const SearchResults = ({ songs, loading }) => {
  const onWheel = (e) => {
    e.preventDefault();
    var container = document.getElementById("sr");
    var containerScrollPosition = document.getElementById("sr").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  if (loading)
    return (
      <div className="flex flex-row items-center justify-center pt-32 pb-10">
        <Loader type="Oval" color="#9f7aea" height={150} width={150}></Loader>
      </div>
    );

  return (
    <div
      onWheel={onWheel}
      id="sr"
      className="pt-12 pb-10 overflow-x-hidden horizontal-scroll"
    >
      {songs.length > 0
        ? songs.map((song, i) => <Card key={i} song={song} clickable></Card>)
        : null}
    </div>
  );
};

export default SearchResults;
