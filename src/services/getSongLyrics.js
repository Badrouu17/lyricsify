import Axios from "axios";

export async function getSongsLyrics(url) {
  try {
    const response = await Axios({
      method: "GET",
      url: `https://lyrics-scraper.herokuapp.com/getSongLyrics`,
      data: { url },
    });

    return response;
  } catch (error) {
    return { error, isError: true };
  }
}
