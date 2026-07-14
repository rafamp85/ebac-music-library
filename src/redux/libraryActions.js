

export const addSong = (song) => {
  return {
    type: "ADD_SONG",
    payload: {
      id: song.idTrack,
      idTrack: song.idTrack,
      idArtist: song.idArtist,
      intTrackNumber: song.intTrackNumber,
      title: song.strTrack,
      strTrack: song.strTrack,
      artist: song.strArtist,
      strArtist: song.strArtist,
      album: song.strAlbum,
      strAlbum: song.strAlbum,
      intDuration: song.intDuration,
    }
  }
};

export const removeSong = (songId) => {
  return {
    type: "REMOVE_SONG",
    payload: songId
  }
}