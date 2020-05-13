import Axios from "axios";

export async function getYoutubeId(song, artist) {
  try {
    const response = await Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${artist}+${song}+audio&key=AIzaSyC-6IkZVJnz5xq9DZ2b48pINSVCLPmFNsw`
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}
