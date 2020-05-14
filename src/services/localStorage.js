//current song stuff

export function storeCurrentSong(song) {
  localStorage.setItem(`currentSong`, JSON.stringify(song));
}

export function getCurrentSong() {
  return JSON.parse(localStorage.getItem("currentSong"));
}

export function deleteCurrentSongFromStorage() {
  localStorage.removeItem("currentSong");
}

//like stuff

export function addToLiked(song) {
  let likedList = JSON.parse(localStorage.getItem("likedList")) || [];
  let newLikedList = [song, ...likedList];
  localStorage.setItem(`likedList`, JSON.stringify(newLikedList));
}

export function removeFromLiked(removeSong) {
  let likedList = JSON.parse(localStorage.getItem("likedList")) || [];
  let newLikedList = likedList.filter(
    (likedSong) => likedSong.url !== removeSong.url
  );
  localStorage.setItem(`likedList`, JSON.stringify(newLikedList));
}

export function isLiked(song) {
  let likedList = JSON.parse(localStorage.getItem("likedList")) || [];
  let newLikedList = likedList.filter(
    (likedSong) => likedSong.url === song.url
  );
  return newLikedList.length === 0 ? false : true;
}

export function getLikedList() {
  return JSON.parse(localStorage.getItem("likedList"));
}
