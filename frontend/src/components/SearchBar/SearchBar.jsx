import React, { useState } from 'react';
import axios from 'axios';
import './searchBar.css';

const SearchBar = ({ setCards }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      if(query !== ''){
        const response = await axios.get(`http://localhost:4040/api/cards/${query}`);
        setCards([response.data[0]]);
      }
    } catch (error) {
      setCards([]);
    }
  };

  return (
    <div className="search-bar">
      <h1>How Can We Help ?</h1>
      <div className="search-bar-box">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>&rarr;</button>
      </div>
    </div>
  );
};

export default SearchBar;
