import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ liked }) => {
  return (
    <div
      className={`flex ${
        liked ? "flex-row justify-center ml-20" : "flex-col"
      } `}
    >
      <div className="self-center bg-transparent max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full self-center"
          // eslint-disable-next-line no-undef
          src={require("./cover.jpg")}
          alt="Sunset in the mountains"
        />
      </div>
      <div className={`text-center px-6 ${liked ? "pt-32" : "py-4"}`}>
        <div className="font-bolder text-4xl text-white mb-2">Heartless</div>
        <p className="text-gray-400 text-base">By TheWeeknd</p>
      </div>
    </div>
  );
};

export default Card;
