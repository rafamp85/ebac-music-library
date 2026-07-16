
import React, {useEffect, useRef, useState} from "react";
import useFetch from "../../hooks/useFetch";
import Album from "../Album/Album";
import {useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {removeSong} from "../../redux/libraryActions";
import {LibraryTitle} from "./styles";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

const Library = () => {
    const location = useLocation();
    const searchAlbum = location.state?.searchAlbum || '';
    const [url, setUrl ] = useState<string>(
      'https://www.theaudiodb.com/api/v1/json/123/trending.php?country=us&type=itunes&format=albums'
    );
    const { albums, isLoading, error } =  useFetch({url: url});

    const savedSongs = useSelector((state: any) => state.songs.songs);

    const dispatch = useDispatch();
    const timeoutRef = useRef<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>("");

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (searchAlbum) {
        setUrl(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchAlbum}`);
      }
    }, [searchAlbum])

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

    // PUNTO 1 + 2 — Sección de canciones guardadas con botón de eliminación
    const renderSavedSongs = () => (
      <section>
        <LibraryTitle>Saved Songs</LibraryTitle>
        {savedSongs.length === 0 ? (
          <p style={{ padding: '0 20px' }}>No saved songs yet.</p>
        ) : (
          <ul>
            {savedSongs.map((song: any) => (
              <li key={song.idTrack} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 20px' }}>
                <span>{song.strTrack} — {song.strArtist} ({song.strAlbum})</span>
                <button onClick={() => onRemoveSong(song)}>
                  <i className="fa fa-minus" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    );

    const onRemoveSong = (song: any) => {
      dispatch(removeSong(song.idTrack));
      setModalMessage(`"${song.strTrack || song.title || "Song"}" was removed from saved songs.`);
      setIsModalOpen(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsModalOpen(false);
      }, 1800);
    };

    const renderContent = () => {
      if (isLoading) return <p>Loading...</p>
      if (error) return <p>Error loading Albums</p>

      return renderAlbums();
    }

    return (
      <>
          <LibraryTitle>Albums</LibraryTitle>
          { renderContent() }
          { renderSavedSongs() }
          <FeedbackModal
            isOpen={isModalOpen}
            title="Song removed"
            message={modalMessage}
            onClose={() => setIsModalOpen(false)}
          />
      </>
    )
}

export default Library