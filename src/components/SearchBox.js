import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 bs b--green bg-lightest-blue'
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
        id="searchInput"
      />
    </div>
  );
}

export default SearchBox;
