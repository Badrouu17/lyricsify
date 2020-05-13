export function storeCurrentSong(song) {
  localStorage.setItem(`currentSong`, JSON.stringify(song));
}

export function getCurrentSong() {
  return JSON.parse(localStorage.getItem("currentSong"));
}

export function deleteCurrentSongFromStorage() {
  localStorage.removeItem("currentSong");
}
