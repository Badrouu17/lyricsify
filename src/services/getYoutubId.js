import { request } from "gaxios";

export async function getYoutubeId(song, artist) {
  if (artist.includes("&")) {
    artist = artist.replace("&", "");
  }
  try {
    const res = await request({
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${artist}+${song}+audio&key=AIzaSyA2FNl8euTu86bNPcs2qooNyVAayPmrv5o`,
    });
    return res;
  } catch (error) {
    console.log(error);
    return { error, isError: true };
  }
}
