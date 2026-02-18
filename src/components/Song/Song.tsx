import React from "react";
import './styles.css';
import {useNavigate} from "react-router";

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
}

const Song = ({song, isAdded}: SongProps) => {
    const navigate = useNavigate();

    const totalSeconds = parseInt(song.intDuration || '0') / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // TODO: Backend implementation needed
    const onAddSong = () => {
      // Implementar acción si es necesario
    }

    const onSelectArtist = () => {
        navigate(`/song/${song.idTrack}`, { state: { idTrack: song.idTrack, song } });
    };

    return (
      <>
        <article className="songs-list">
          <span className="track-number">{song.intTrackNumber}</span>
          <span className="selected-song">{song.strTrack}</span>
          <span className="artist-name" onClick={onSelectArtist}>{song.strArtist}</span>
          <span className="album-name">{song.strAlbum}</span>
          <span className="duration">{formattedDuration}</span>
          {
            isAdded &&
              <span className="delete-btn">
                <button onClick={onAddSong}><i className="fa fa-plus"></i></button>
              </span>
          }
        </article>
      </>
    )
}

export default Song;