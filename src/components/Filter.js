import React, { useState } from 'react';

function Filter({ onSearchChange }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearchChange(e.target.value); // Pass the search text back to the parent component
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={handleChange}
    />
  );
}

export default Filter;
