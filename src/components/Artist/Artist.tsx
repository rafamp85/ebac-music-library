import React from "react";
import {useLocation, useParams} from "react-router";
import useFetch from "../../hooks/useFetch";

import './styles.css';

export const Artist = () => {
  const location = useLocation();
  const params = useParams();
  const idFromParams = params.id as string | undefined;

  const idArtist = idFromParams || location.state?.idAlbum || '';
  const url = idArtist ? `https://www.theaudiodb.com/api/v1/json/123/artist.php?i=${idArtist}` : '';

  const { artists, isLoading, error } =  useFetch({url});
  const currentArtist = artists ? artists[0] : null;

  return (
    <section>
      <h2>Artist Info</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {currentArtist && (
        <div className="artist-container">
          <h3>{currentArtist.strArtist}</h3>
          <div className="artist-info">
            <img className="artist-image" src={currentArtist.strArtistThumb} alt={currentArtist.strArtist} />
            <p className="artist-biography">{currentArtist.strBiographyEN}</p>
          </div>
        </div>
      )}
    </section>
  );
};