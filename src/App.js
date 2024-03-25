import React, { useState } from 'react';
import interns from './interns';
import './style.css'

const Leaderboard = () => {
  const [path, setPath] = useState('All');
  const [sortOrder, setSortOrder] = useState('descending');

  const handleChangePath = (e) => {
    setPath(e.target.value);
  };

  const handleChangeSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredInterns = interns.filter((intern) => path === 'All' || intern.path === path)

  const sortedInterns = filteredInterns.sort((a, b) => sortOrder === 'descending' ? b.score - a.score : a.score - b.score);


  return (
    <div>
      <div className="boardselect">
      <div className="pathwrap">
        <div>
          <h3>Filter by learning path</h3>
        </div>
          <select className="path" value={path} onChange={handleChangePath}>
            <option value="All">All</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Web3 Development">Web3 Development</option>
            <option value="Product Design">Product Design</option>
          </select>
        </div>

        <div className="sortwrap">
          <div>
            <h3>Sort scores</h3>
          </div>
            <select className="sort" value={sortOrder} onChange={handleChangeSortOrder}>
              <option value="descending">Descending</option>
              <option value="ascending">Ascending</option>
            </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Path</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedInterns.map((intern, index) => (
            <tr>
              <td className="numerals">{index + 1}</td>
              <td><img src={intern.img} alt="intern" /></td>
              <td>{intern.name}</td>
              <td>{intern.path}</td>
              <td>{intern.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;