import React, {useEffect, useState} from "react";
import Search from "../Search/Search";
import {useNavigate} from "react-router";
import {HeaderSection, HeaderTitle} from "./styles";

const Header = () => {

  const navigate = useNavigate();

  const [searchAlbum, setSearchAlbum] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    console.log(searchAlbum);
    navigate('/', {state: {searchAlbum}});
    setUrl(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${searchAlbum}`);
  }, [searchAlbum]);

  return (
    <>
      <HeaderSection>
        <HeaderTitle
          onClick={() => navigate('/')}>
          Music Lovers App
        </HeaderTitle>
      </HeaderSection>

      <Search
        searchAlbum={searchAlbum}
        setSearchAlbum={setSearchAlbum}
      />
    </>
  )
}

export default Header;