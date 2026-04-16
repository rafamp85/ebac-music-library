import React from "react";
import {useNavigate} from "react-router";
import {AlbumArticle, AlbumArtist, AlbumSection, AlbumTitle, AlbumImage, AlbumBackImage} from "./styles";

type AlbumT = {
  idArtist: string;
  idAlbum: string;
  idTrack: string;
  strArtist: string;
  strAlbum: string;
  strAlbumThumb: string;
  strAlbumBack: string;
}

interface AlbumProps {
  album: AlbumT;
}

export const Album = ({album}: AlbumProps) => {
  const navigate = useNavigate();

  const { strAlbum, strArtist, strAlbumThumb, strAlbumBack } = album;

  const onSelectAlbum = () => {
    navigate(`/album/${album.idAlbum}`, { state: { idAlbum: album.idAlbum, album } });
  };

  return (
    <>
      <AlbumSection onClick={onSelectAlbum}>
        <AlbumArticle>
          <AlbumTitle>{strAlbum}</AlbumTitle>
          <AlbumArtist>{strArtist}</AlbumArtist>
        </AlbumArticle>
        <AlbumImage
          src={strAlbumThumb}
          alt={strAlbum}
        />
      </AlbumSection>

      {
        strAlbumBack && <AlbumBackImage src={strAlbumBack} alt={strAlbum}/>
      }
    </>
  );
};

export  default Album;