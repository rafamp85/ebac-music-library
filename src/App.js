import Library from "./components/Library/Library";
import './styles/styles.css';
import {Route, Routes} from "react-router";
import Header from "./components/Header/Header";
import SongsList from "./components/Song/SongsList";
import {Artist} from "./components/Artist/Artist";
import {SongDetails} from "./components/Song/SongDetails";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/album/:id" element={<SongsList />} />
        <Route path="/song/:id/" element={<SongDetails />} />
        <Route path="/artist/:id" element={<Artist />} />
      </Routes>
    </div>
  );
}

export default App;
