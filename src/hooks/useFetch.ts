import{ useEffect, useState } from 'react'
import axios from 'axios';

type FetchAlbumsState = {
  albums: Album[];
  songs?: Song[];
  artists?: Artist[];
  isLoading: boolean;
  error: string | null;
}

type Album = {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string | null;
}

type Song = {
  idTrack: string;
  strTrack: string;
  strAlbum: number;
  strArtist: string;
  strDescriptionEN: string;
  strTrackThumb: string;
}

type Artist = {
  idArtist: string;
  strArtist: string;
  strLabel: string;
  strBiographyEN: string;
  strArtistThumb: string;
}

interface FetchProps {
  url?: string;
}

export const useFetch = ({url}: FetchProps) => {

  const [albumsState, setAlbumsState] = useState<FetchAlbumsState>({
    albums: [],
    songs: [],
    artists: [],
    isLoading: !!url,
    error: null
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!url) {
      // Si no hay URL, no hacemos fetch y dejamos el estado inicial
      setAlbumsState(prev => ({...prev, isLoading: false}));
      return;
    }

    const fetchSongs = async() => {
      try {
        console.log('Ejecuta Fetch', url);
        let response = await axios.get(url);

        if( response.data.trending && response.data.trending.length > 0 ) {
          setAlbumsState(prev => ({...prev, albums: response.data.trending}));
        }

        if( response.data.album && response.data.album.length > 0 ) {
          setAlbumsState(prev => ({...prev, albums: response.data.album}));
        }

        if( response.data.track && response.data.track.length > 0 ) {
          console.log('Song', response.data.track);
          setAlbumsState(prev => ({...prev, songs: response.data.track}));
        }

        if( response.data.artists && response.data.artists.length > 0 ) {
          setAlbumsState(prev => ({...prev, artists: response.data.artists}));
        }
      } catch (err: any) {
        setAlbumsState(prev => ({...prev, error: err.message}));
      }

      setAlbumsState(prev => ({...prev, isLoading: false}));
    };

    fetchSongs();
  }, [url]);

  return albumsState;
}

export default useFetch;
