import {Component} from "react";

export class SongsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: props.songs,
        }
    }

    componentDidMount() {
        console.log('Songs component has been mounted');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Data in Songs component has been changed');
        console.log(prevProps.songs);
    }

    render() {
        return (
            <>
                <article className="songs-list header-list">
                    <span>#</span>
                    <span>Title</span>
                    <span>Album</span>
                    <span>D</span>
                </article>
                {
                    this.state.songs.map( song => (
                      <article className="songs-list" key={song.id}>
                          <span>{song.id}</span>
                          <span className="selected-song">{song.song}</span>
                          <span>{song.album}</span>
                          <span>{song.duration}</span>
                      </article>
                    ))
                }
            </>
        )
    }
}