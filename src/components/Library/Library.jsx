
import Song from "../Song/Song";



const Library = ({songsList}) => {
    return (
      <section>
        <article className="songs-list header-list">
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>D</span>
          <span>Actions</span>
        </article>
        {
          songsList.map( song => (
            <Song key={song.id} song={song} />
          ))
        }
      </section>
    )
}

export default Library