import React, { useState, useEffect } from 'react';
const writersData = require('../writers.json');

const WriterList = () => {
  const [writers, setWriters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setWriters(writersData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredWriters = writers.filter((writer) =>
    writer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedWriters = filteredWriters.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="App">
      <h1 style={{marginBottom: 10}}>Писатели</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSort}>Sort by name ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})</button>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Дата рождения</th>
            <th>Университет</th>
            <th>Фото</th>
          </tr>
        </thead>
        <tbody>
          {sortedWriters.map((writer) => (
            <tr key={writer.name}>
              <td>{writer.name}</td>
              <td>{writer.birthdate}</td>
              <td>{writer.university}</td>
              <td>
                <img src={writer.photo} alt={writer.name} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WriterList;
