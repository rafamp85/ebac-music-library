import React from "react";
import {useNavigate} from "react-router";

type AlbumT = {
  idArtist: string;
  idAlbum: string;
  idTrack: string;
  strArtist: string;
  strAlbum: string;
  strAlbumThumb: string;
}

interface AlbumProps {
  album: AlbumT;
}

export const Album = ({album}: AlbumProps) => {
  const navigate = useNavigate();

  const { strAlbum, strArtist, strAlbumThumb } = album;

  const onSelectAlbum = () => {
    navigate(`/album/${album.idAlbum}`, { state: { idAlbum: album.idAlbum, album } });
  };

  return (
    <>
      <section className="album-list" onClick={onSelectAlbum}>
        <article className="album-body">
          <h4 className="album-title">{strAlbum}</h4>
          <span className="artist-name">{strArtist}</span>
        </article>
        <img
          src={strAlbumThumb}
          alt={strAlbum}
          className="album-image"
        />
      </section>
    </>
  );
};

export  default Album;