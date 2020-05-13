import Axios from "axios";

export async function getSongsLyrics(url) {
  try {
    const response = await Axios.post(
      `https://lyrics-scraper.herokuapp.com/getSongLyrics`,
      { url }
    );

    return response;
  } catch (error) {
    return { error, isError: true };
  }
}
