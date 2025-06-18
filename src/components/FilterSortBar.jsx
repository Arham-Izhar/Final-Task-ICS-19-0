import React from 'react';

const FilterSortBar = ({ setYear, setSort }) => (
  <div className="bar">
    <input type="text" placeholder="Filter by year..." onChange={e => setYear(e.target.value)} />
    <select onChange={e => setSort(e.target.value)}>
      <option value="">Sort</option>
      <option value="title">A–Z</option>
      <option value="year">Newest</option>
    </select>
  </div>
);

export default FilterSortBar;
