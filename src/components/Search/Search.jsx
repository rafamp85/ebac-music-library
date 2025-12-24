import Song from "../Song/Song";
import {useEffect, useState} from "react";
import './styles.css';

const Search = ({setSongList, setShowLibrary}) => {
  const [searchingSongs, setSearchingSongs] = useState([]);
  const [search, setSearch] = useState("");

  const onNewSong = (song) => {
    setSongList( prevSongs => ([...prevSongs, song]) );
    setSearch("");
    setShowLibrary(true);
  }

  useEffect(() => {
    const fetchSongsList = async () => {
      const response = [
        {id: 1, song: 'I Wish-Skazi Edit', album: 'The Zoo Ep', duration: '8:00'},
        {id: 2, song: 'Stay', album: 'Omiki X Skazi', duration: '3:40'},
        {id: 3, song: 'Lost In My Mind', album: 'Blastoyz', duration: '5:03'},
      ];

      setSearchingSongs(response);
    }
    fetchSongsList();
  }, []);

  useEffect(() => {
    if (search) {
      setShowLibrary(false);
    }
  }, [search]);

  return (
    <section>
      <article>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Que quieres reproducir?"
          className="search-input"
        />
      </article>
      {
        search &&
          <div>
            <article className="songs-list header-list">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <span>D</span>
              <span>Actions</span>
            </article>
            {
              searchingSongs.map( song => (
                <Song
                  key={song.id}
                  song={song}
                  isAdded={true}
                  onNewSong={onNewSong}
                />
              ))
            }
          </div>
      }
    </section>
  )
}

export default Search;