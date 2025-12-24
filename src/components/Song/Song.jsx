import './styles.css';

const Song = ({song, isAdded, onNewSong}) => {

    const onAddSong = (song) => () => {
      onNewSong(song);
    }

    return (
      <>
        <article className="songs-list" key={song.id}>
          <span>{song.id}</span>
          <span className="selected-song">{song.song}</span>
          <span>{song.album}</span>
          <span>{song.duration}</span>
          {
            isAdded &&
              <span className="delete-btn">
                <button onClick={onAddSong(song)}><i className="fa fa-plus"></i></button>
              </span>
          }
        </article>
      </>
    )
}

export default Song;