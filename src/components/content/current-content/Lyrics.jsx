import React, { useEffect, useState } from "react";
import Header from "../../Header";
import { getSongsLyrics } from "./../../../services/getSongLyrics";
import Loader from "react-loader-spinner";

const Lyrics = ({ url }) => {
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSongsLyrics(url);
      if (response.isError) {
        return setLyrics(
          "<br> <br> seems like your connection couldn't get the lyrics 😕, <br> please try to refresh the page."
        );
      }
      setLyrics(response.data.lyrics);
      setLoading(false);
    };
    fetchData();
  }, [lyrics]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="mt-0 text-center overflow-hidden shadow-lg">
        <Header></Header>
        <h2 className="ml-12">Lyrics 🎼</h2>
      </div>
      {loading ? (
        <div className="flex flex-row items-center justify-center pt-32 pb-10">
          <Loader type="Oval" color="#9f7aea" height={150} width={150}></Loader>
        </div>
      ) : (
        <div
          className="flex-1 text-4xl h-lyrics overflow-y-scroll pl-24 w-full pb-4"
          dangerouslySetInnerHTML={{
            __html:
              lyrics !== ""
                ? lyrics.replace(/\n/g, "<br>")
                : "<br> <br> seems like your connection couldn't get the lyrics 😕, <br> please try to refresh the page.",
          }}
        ></div>
      )}
    </div>
  );
};

export default Lyrics;
