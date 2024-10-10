import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ScriptureContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const ScriptureText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

const ScriptureReference = styled.p`
  font-weight: bold;
  color: #0066cc;
`;

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

function ScriptureDisplay() {
  const [scripture, setScripture] = useState('');
  const [reference, setReference] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRandomScripture();
  }, []);

  const fetchRandomScripture = () => {
    setError('');
    setScripture('Loading...');
    axios.get('http://localhost:5001/api/scripture/random')
      .then(response => {
        console.log('API Response:', response.data);
        const { book, chapter, content } = response.data;
        setReference(`${book} ${chapter}`);
        setScripture(content);
      })
      .catch(error => {
        console.error('Error details:', error.response ? error.response.data : error.message);
        setError('Failed to fetch scripture. Please try again.');
      });
  };

  return (
    <ScriptureContainer>
      <h2>Scripture of the Day</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ScriptureReference>{reference}</ScriptureReference>
      <ScriptureText>{scripture}</ScriptureText>
      <Button onClick={fetchRandomScripture}>Get New Scripture</Button>
    </ScriptureContainer>
  );
}

export default ScriptureDisplay;