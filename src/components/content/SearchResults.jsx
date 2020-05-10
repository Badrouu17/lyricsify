import React from "react";
import Card from "./Card";

const SearchResults = () => {
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

  return (
    <div
      onWheel={onWheel}
      id="sr"
      className="pt-12 pb-10 overflow-x-scroll horizontal-scroll"
    >
      <Card></Card>
    </div>
  );
};

export default SearchResults;
