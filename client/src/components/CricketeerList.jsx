import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CricketeerContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const CricketeerItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

function CricketeerList() {
  const [cricketeers, setCricketeers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCricketeers();
  }, []);

  const fetchCricketeers = () => {
    setError('');
    axios.get('http://localhost:5001/api/cricketeers')
      .then(response => {
        setCricketeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching cricketeers:', error);
        setError('Failed to fetch cricketeers. Please try again.');
      });
  };

  return (
    <CricketeerContainer>
      <h2>Cricketeer List</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {cricketeers.map(cricketeer => (
          <CricketeerItem key={cricketeer._id}>
            {cricketeer.name} - {cricketeer.position}
          </CricketeerItem>
        ))}
      </ul>
    </CricketeerContainer>
  );
}

export default CricketeerList;