import React from "react";
import useFetch from "../../hooks/useFetch";
import {useLocation, useParams} from "react-router";
import Song from './Song';
import {SongListContainer, SongListArticle, SongListDiv, SongListImage, SongListTitle} from "./styles";
import {useDispatch} from "react-redux";
import {addSong} from "../../redux/libraryActions";

export const SongsList = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const params = useParams();
  const idFromParams = params.id as string | undefined;
  const idAlbum = idFromParams || location.state?.idAlbum || '';
  const albumFromState = location.state?.album || null;

  const url = idAlbum ? `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${idAlbum}` : '';
  const albumUrl = idAlbum ? `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${idAlbum}` : '';

  const { songs, isLoading, error } =  useFetch({url});
  const { albums: albumDetails, isLoading: isAlbumLoading } = useFetch({url: albumUrl});
  const album = albumFromState || albumDetails?.[0] || null;

  const onAddSong = (song: any) => {
    dispatch(addSong(song));
  };

  return (
    <SongListContainer>
      <SongListArticle>
        <SongListTitle>{album?.strAlbum || 'Album'}</SongListTitle>
        {album?.strAlbumThumb && <SongListImage src={album.strAlbumThumb} alt={album.strAlbum || 'Album cover'}/>}
      </SongListArticle>

      <SongListDiv>
        {!idAlbum && <p>Selecciona un álbum para ver las canciones.</p>}
        {(isLoading || isAlbumLoading) && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {
          songs?.map((song: any) => (
            <Song
              key={song.idTrack}
              song={song}
              isAdded={true}
              onAddSong={onAddSong}
            />
          ))
        }
      </SongListDiv>
    </SongListContainer>
  );
};

export default SongsList;