import React from "react";
import {useLocation, useParams} from "react-router";
import useFetch from "../../hooks/useFetch";

export const SongDetails = () => {
  const location = useLocation();
  const params = useParams();
  const idFromParams = params.id as string | undefined;

  const idTrack = idFromParams || location.state?.idTrack || '';
  const url = idTrack ? `https://www.theaudiodb.com/api/v1/json/123/track.php?h=${idTrack}` : '';

  const { songs, isLoading, error } =  useFetch({url});
  const currentSong = songs ? songs[0] : null;

  return (
    <section>
      <h2>Song Details</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {currentSong && (
        <div className="artist-container">
          <h3>{currentSong.strArtist}</h3>
          <div className="artist-info">
            <p className="artist-biography">{currentSong.strAlbum}</p>
          </div>
        </div>
      )}
    </section>
  );
};