import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LibraryTitle} from "../Library/styles";
import {removeSong} from "../../redux/libraryActions";
import SavedSong from "./SavedSong";
import {SongListDiv} from "./styles";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

const SavedSongsList = () => {
  const dispatch = useDispatch();
  const savedSongs = useSelector((state: any) => state.songs.songs);
  const timeoutRef = useRef<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onRemoveSong = (songId: string) => {
    const removedSong = savedSongs.find((song: any) => (song.idTrack || song.id) === songId);
    dispatch(removeSong(songId));

    setModalMessage(`"${removedSong?.strTrack || removedSong?.title || "Song"}" was removed from saved songs.`);
    setIsModalOpen(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsModalOpen(false);
    }, 1800);
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
      <FeedbackModal
        isOpen={isModalOpen}
        title="Song removed"
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default SavedSongsList;

