     import React from "react";
import {useNavigate} from "react-router";
import {SongArticle, SongSpan, SongButtonSpan} from "./styles";

type SongT = {
  idTrack: string;
  idArtist: string;
  intTrackNumber: string;
  strTrack: string;
  strAlbum: string;
  strArtist: string;
  intDuration: string// Add other song properties as needed
};

interface SongProps {
  song: SongT,
  isAdded?: boolean,
  onAddSong?: (song: SongT) => void,
}

const Song = ({song, isAdded, onAddSong}: SongProps) => {
    const navigate = useNavigate();

    const totalSeconds = parseInt(song.intDuration || '0') / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // TODO: Backend implementation needed
    const onAddSongLibrary = () => {
      if (onAddSong) {
        onAddSong(song);
      }
    }

    const onSelectArtist = () => {
        navigate(`/song/${song.idTrack}`, { state: { idTrack: song.idTrack, song } });
    };

    return (
      <>
        <SongArticle>
          <SongSpan>{song.intTrackNumber}</SongSpan>
          <SongSpan onClick={onSelectArtist}>{song.strTrack}</SongSpan>
          <SongSpan>{song.strArtist}</SongSpan>
          <SongSpan>{song.strAlbum}</SongSpan>
          <SongSpan songPeriod={parseInt(song.intDuration)}>{formattedDuration}</SongSpan>
          {
            isAdded &&
              <SongButtonSpan className="delete-btn">
                <button onClick={onAddSongLibrary}><i className="fa fa-plus"></i></button>
              </SongButtonSpan>
          }
        </SongArticle>
      </>
    )
}

export default Song;