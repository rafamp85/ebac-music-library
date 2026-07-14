import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {LibraryTitle} from "../Library/styles";
import {removeSong} from "../../redux/libraryActions";
import SavedSong from "./SavedSong";
import {SongListDiv} from "./styles";

const SavedSongsList = () => {
  const dispatch = useDispatch();
  const savedSongs = useSelector((state: any) => state.songs.songs);

  const onRemoveSong = (songId: string) => {
    dispatch(removeSong(songId));
  };

  return (
    <>
      <LibraryTitle>Saved Songs</LibraryTitle>
      <SongListDiv>
        {savedSongs.length === 0 && <p>No saved songs yet.</p>}
        {savedSongs.map((song: any) => (
          <SavedSong
            key={song.id}
            song={song}
            onRemoveSong={onRemoveSong}
          />
        ))}
      </SongListDiv>
    </>
  )
}

export default SavedSongsList;

