import Header from "./components/Header/Header";
import Library from "./components/Library/Library";
import {useEffect, useState} from "react";
import './styles/styles.css';
import SearchResult from "./components/Search/Search";


function App() {
  const [songsList, setSongsList] = useState([]);
  const [showLibrary, setShowLibrary] = useState(true);

  useEffect(() => {
    const fetchSongsList = async () => {
      const response = [
        {id: 1, song: 'A Warrior`s Call', album: 'Beyond Hell/Above Heaven', duration: '4:23'},
        {id: 2, song: 'All Mixed Up', album: '311', duration: '2:59'},
        {id: 3, song: 'Too Much, Too Young, Too Fast', album: 'Running Wild', duration: '3:44'},
        {id: 4, song: 'Smooth Criminal', album: 'Anthology', duration: '3:29'},
        {id: 5, song: 'Make Some Noise', album: 'Hot Sauce Committee', duration: '3:30'},
        {id: 6, song: 'Sure Shot', album: 'III Communication', duration: '3:19'},
        {id: 7, song: 'Bury Me With My Guns', album: 'Hell In My Heart', duration: '3:34'},
        {id: 8, song: 'Lit Up', album: 'Buckcherry', duration: '3:35'},
        {id: 9, song: 'Headphones', album: 'Any Port In a Storm', duration: '2:52'},
        {id: 10, song: 'Voices', album: 'The Studio Album', duration: '3:11'},
      ];

      setSongsList(response);
    }
    fetchSongsList();
  }, []);

  useEffect(() => {
    console.log("Biblioteca actualizada con " + songsList.length + " canciones.");
  }, [songsList]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <SearchResult setSongList={setSongsList} setShowLibrary={setShowLibrary} />
        {showLibrary && <Library songsList={songsList} /> }
      </main>
    </div>
  );
}

export default App;
