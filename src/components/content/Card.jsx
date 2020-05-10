import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col">
      <div className=" bg-transparent max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          // eslint-disable-next-line no-undef
          src={require("./cover.jpg")}
          alt="Sunset in the mountains"
        />
      </div>
      <div className=" text-center px-6 py-4">
        <div className="font-bolder text-4xl text-white mb-2">Heartless</div>
        <p className="text-gray-400 text-base">By TheWeeknd</p>
      </div>
    </div>
  );
};

export default Card;
