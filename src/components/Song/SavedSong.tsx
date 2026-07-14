import React from "react";
import {useNavigate} from "react-router";
import {SongArticle, SongButtonSpan, SongSpan} from "./styles";

type SavedSongT = {
  id: string;
  idTrack: string;
  idArtist?: string;
  intTrackNumber?: string;
  strTrack?: string;
  strAlbum?: string;
  strArtist?: string;
  intDuration?: string;
  title?: string;
  artist?: string;
  album?: string;
};

interface SavedSongProps {
  song: SavedSongT,
  onRemoveSong?: (songId: string) => void,
}

const SavedSong = ({song, onRemoveSong}: SavedSongProps) => {
  const navigate = useNavigate();

  const songTrackId = song.idTrack || song.id;
  const totalSeconds = parseInt(song.intDuration || '0') / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const formattedDuration = totalSeconds > 0
    ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    : '--:--';

  const onRemoveSongLibrary = () => {
    if (onRemoveSong) {
      onRemoveSong(song.id);
    }
  }

  const onSelectSong = () => {
    navigate(`/song/${songTrackId}`, { state: { idTrack: songTrackId, song } });
  };

  return (
    <SongArticle>
      <SongSpan>{song.intTrackNumber || '-'}</SongSpan>
      <SongSpan onClick={onSelectSong}>{song.strTrack || song.title}</SongSpan>
      <SongSpan>{song.strArtist || song.artist}</SongSpan>
      <SongSpan>{song.strAlbum || song.album}</SongSpan>
      <SongSpan songPeriod={parseInt(song.intDuration || '0')}>{formattedDuration}</SongSpan>
      <SongButtonSpan className="delete-btn">
        <button onClick={onRemoveSongLibrary} aria-label={`Remove ${song.strTrack || song.title} from saved songs`}>
          <i className="fa fa-minus"></i>
        </button>
      </SongButtonSpan>
    </SongArticle>
  )
}

export default SavedSong;

