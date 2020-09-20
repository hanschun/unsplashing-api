import React, {useState} from 'react';
import {CardList} from './cardList'
import {unsplashSearch} from './unsplashSearch';

export default function PhotoSearch() {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);

  const searchUnsplash = async (e) => {
    e.preventDefault();
    const {results} = await unsplashSearch(query);
    setPictures(results);
  }

  return (
    <>
      <form className="form" onSubmit={searchUnsplash}>
        <label className="label" htmlFor="query">
          {""}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={'Try "cat" or "watermelon"'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
        <button type="submit" className="button">Search</button>
      </form>
      <CardList pictures={pictures}/>
    </>
  );
}

