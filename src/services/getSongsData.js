import Axios from "axios";

Axios.defaults.headers.common = {
  Authorization: `Bearer 9Lj0Qkf-8b1ZcYEPF0gIPwByWp8dzQ_SmY1FkUR1h-MlteerUZRMe0mcyz-D_YgB`,
};

export async function getSongsData(song, artist) {
  try {
    const response = await Axios.get(
      `https://api.genius.com/search?q=${song}%20${artist}`
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}
