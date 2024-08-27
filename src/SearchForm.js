import React, { useState } from 'react';
const SearchForm = ({onSearch}) => {
    const [query, setQuery] = useState('');
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  export default SearchForm;