import React, { useState } from 'react';

const SearchBar = ({ onSearch, onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
    onSubmit(input);
  };

  return (
    <div className="search-bar">
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Search movies..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
