import React from "react";
import useFetch from "../../hooks/useFetch";
import {useLocation, useParams} from "react-router";
import Song from './Song';

export const SongsList = () => {
  const location = useLocation();
  const params = useParams();
  const idFromParams = params.id as string | undefined;
  const idAlbum = idFromParams || location.state?.idAlbum || '';
  const album = location.state?.album || null;

  const url = idAlbum ? `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${idAlbum}` : '';

  const { songs, isLoading, error } =  useFetch({url});

  return (
    <>
      <article className="album-header">
        <h2 className="album-header-title">{album.strAlbum}</h2>
        <img className="album-header-image" src={album.strAlbumThumb} alt="Imagen de ejemplo"/>
      </article>

      <div className="songs-container">
        {!idAlbum && <p>Selecciona un álbum para ver las canciones.</p>}
        {isLoading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {
          songs?.map((song: any) => (
            <Song key={song.idTrack} song={song} isAdded={true} />
          ))
        }
      </div>
    </>
  );
};

export default SongsList;