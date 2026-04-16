import React from "react";
import useFetch from "../../hooks/useFetch";
import {useLocation, useParams} from "react-router";
import Song from './Song';
import {SongListContainer, SongListArticle, SongListDiv, SongListImage, SongListTitle} from "./styles";

export const SongsList = () => {
  const location = useLocation();
  const params = useParams();
  const idFromParams = params.id as string | undefined;
  const idAlbum = idFromParams || location.state?.idAlbum || '';
  const album = location.state?.album || null;

  const url = idAlbum ? `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${idAlbum}` : '';

  const { songs, isLoading, error } =  useFetch({url});

  return (
    <SongListContainer>
      <SongListArticle>
        <SongListTitle>{album.strAlbum}</SongListTitle>
        <SongListImage src={album.strAlbumThumb} alt="Imagen de ejemplo"/>
      </SongListArticle>

      <SongListDiv>
        {!idAlbum && <p>Selecciona un álbum para ver las canciones.</p>}
        {isLoading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {
          songs?.map((song: any) => (
            <Song key={song.idTrack} song={song} isAdded={true} />
          ))
        }
      </SongListDiv>
    </SongListContainer>
  );
};

export default SongsList;