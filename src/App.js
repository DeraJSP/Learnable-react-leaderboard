import React, { useState } from 'react';
import data from './ItemsData';

const Leaderboard = () => {
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('descending');

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedData = data.filter((person) => category === 'All' || person.category === category)
                          .sort((a, b) => sortOrder === 'descending' ? b.score - a.score : a.score - b.score);

  return (
    <div>
      <select value={category} onChange={handleChangeCategory}>
        <option value="All">All</option>
        <option value="Category1">web</option>
        <option value="Category2">product</option>
      </select>

      <select value={sortOrder} onChange={handleChangeSortOrder}>
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
      </select>

      <ul>
        {sortedData.map((person, index) => (
          <li key={person.id}>
            <span>{index + 1}</span>
            <span>{person.name}</span>
            <span>{person.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;