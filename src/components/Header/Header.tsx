import React, {useState} from "react";
import Search from "../Search/Search";
import {useNavigate} from "react-router";
import {HeaderLinkButton, HeaderNav, HeaderSection, HeaderTitle} from "./styles";

const Header = () => {

  const navigate = useNavigate();

  const [searchAlbum, setSearchAlbum] = useState<string>("");

  const onSearchAlbum = (value: string) => {
    setSearchAlbum(value);
    navigate('/', {state: {searchAlbum: value}});
  };

  return (
    <>
      <HeaderSection>
        <HeaderTitle
          onClick={() => navigate('/')}>
          Music Lovers App
        </HeaderTitle>

        <HeaderNav>
          <HeaderLinkButton onClick={() => navigate('/saved')}>
            Saved Songs
          </HeaderLinkButton>
        </HeaderNav>
      </HeaderSection>

      <Search
        searchAlbum={searchAlbum}
        setSearchAlbum={onSearchAlbum}
      />
    </>
  )
}

export default Header;