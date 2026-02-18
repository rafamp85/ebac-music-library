import React, {ChangeEvent, useState} from "react";
import './styles.css';

interface Props {
  searchAlbum: string;
  setSearchAlbum: (value: string) => void;
};

const Search = ({searchAlbum, setSearchAlbum}: Props) => {

  const [internalSearch, setInternalSearch] = useState<string>("");

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    setSearchAlbum(input.value);
    setInternalSearch('');
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          value={internalSearch}
          onChange={(e ) => setInternalSearch(e.target.value)}
          placeholder="Busca tu artisto favorito"
          className="search-input"
        />
      </form>
    </section>
  )
}

export default Search;