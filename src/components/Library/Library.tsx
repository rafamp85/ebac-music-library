
import React, {useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch";
import Album from "../Album/Album";
import {useLocation} from "react-router";
import {LibraryTitle} from "./styles";

interface LibraryProps {
  url?: string;
}

const Library = () => {
    const location = useLocation();
    const searchAlbum = location.state?.searchAlbum || '';
    const [url, setUrl ] = useState<string>(
      'https://www.theaudiodb.com/api/v1/json/123/trending.php?country=us&type=itunes&format=albums'
    );
    const { albums, isLoading, error } =  useFetch({url: url});

    useEffect(() => {
      if (searchAlbum) {
        setUrl(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${location.state.searchAlbum}`);
      }
    }, [searchAlbum, location])

    const renderAlbums = () => (
      <section>
        <nav>
          <ul>
            {albums.map( (album: any) =>
              <Album
                key={album.idAlbum}
                album={album}
              />
            )}
          </ul>
        </nav>
      </section>
    );

    const renderContent = () => {
      if (isLoading) return <p>Loading...</p>
      if (error) return <p>Error loading Albums</p>

      return renderAlbums();
    }

    return (
      <>
          <LibraryTitle>Albums</LibraryTitle>
          { renderContent() }
      </>
    )
}

export default Library