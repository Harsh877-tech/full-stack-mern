import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
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

function CricketeerForm() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    axios.post('http://localhost:5001/api/cricketeers', { name, position })
      .then(response => {
        console.log('Cricketeer added:', response.data);
        setName('');
        setPosition('');
        setSuccess('Cricketeer added successfully!');
      })
      .catch(error => {
        console.error('Error adding cricketeer:', error);
        setError('Failed to add cricketeer. Please try again.');
      });
  };

  return (
    <FormContainer>
      <h2>Add Cricketeer</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {success && <p style={{color: 'green'}}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <Button type="submit">Add Cricketeer</Button>
      </form>
    </FormContainer>
  );
}

export default CricketeerForm;