import React, {useEffect, useState} from "react";
import './styles.css';
import Search from "../Search/Search";
import Library from "../Library/Library";
import {useNavigate} from "react-router";

const Header = () => {

  const navigate = useNavigate();

  const [searchAlbum, setSearchAlbum] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    console.log(searchAlbum);
    navigate('/', {state: {searchAlbum}});
    setUrl(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchAlbum}`);
  }, [searchAlbum]);

  return (
    <>
      <header>
        <h1 onClick={() => navigate('/')}>Music Lovers App</h1>
      </header>
      <Search
        searchAlbum={searchAlbum}
        setSearchAlbum={setSearchAlbum}
      />
    </>
  )
}

export default Header;